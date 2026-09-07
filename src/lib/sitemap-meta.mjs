// Sitemap sinyal katmanı — her URL için gerçek priority / changefreq / lastmod.
//
// NEDEN: Varsayılan kurulumda 61 URL'in hepsi aynı lastmod (build anı) ve aynı
// priority (0.7) ile çıkıyordu. "Her sayfa her build'de değişti" sinyali Google
// tarafından gürültü sayılır ve lastmod tamamen yok sayılır; tek tip priority de
// crawl bütçesine hiyerarşi vermez. Burada ikisi de gerçek veriye bağlanır.

import { execFileSync } from "node:child_process";

/** URL yoluna göre priority + changefreq. En spesifik kural önce eşleşir. */
const RULES = [
  // Ana sayfa — en yüksek öncelik
  { test: (p) => p === "/", priority: 1.0, changefreq: "daily" },

  // Para sayfaları: portföy listesi ve ilan detayları (en sık değişen içerik)
  { test: (p) => p === "/ilanlar/", priority: 0.9, changefreq: "daily" },
  { test: (p) => p.startsWith("/ilanlar/"), priority: 0.9, changefreq: "weekly" },

  // Hizmet detayları — dönüşüm sayfaları
  { test: (p) => p.startsWith("/hizmetler/"), priority: 0.9, changefreq: "monthly" },

  // Bölge sayfaları: ilçe (2 segment) mahalleden (3 segment) daha öncelikli
  { test: (p) => /^\/bolgeler\/[^/]+\/$/.test(p), priority: 0.8, changefreq: "weekly" },
  { test: (p) => p.startsWith("/bolgeler/"), priority: 0.7, changefreq: "weekly" },

  // Rehber / sözlük — GEO (AI citation) ağırlıklı içerik
  { test: (p) => p.startsWith("/rehber/") || p.startsWith("/en/"), priority: 0.7, changefreq: "monthly" },
  { test: (p) => p === "/sozluk/", priority: 0.7, changefreq: "monthly" },

  // Kurumsal
  { test: (p) => p === "/basin-kiti/" || p === "/vizyon-misyon/", priority: 0.5, changefreq: "yearly" },

  // Site içi arama — sonuçlar istemci tarafında üretilir, düşük öncelik
  { test: (p) => p === "/arama/", priority: 0.3, changefreq: "monthly" },

  // Yasal metinler — nadiren değişir
  {
    test: (p) => ["/kvkk/", "/cerez-politikasi/", "/aydinlatma-metni/"].includes(p),
    priority: 0.3,
    changefreq: "yearly",
  },
];

/**
 * URL yolu → içeriği besleyen kaynak dosya(lar).
 * Dinamik rotalarda (ilan, bölge) değişim kaynağı veri dosyasıdır, şablon değil.
 */
function sourceFilesFor(path) {
  if (path === "/") return ["src/pages/index.astro", "src/data/config.ts", "src/data/listings.ts"];
  if (path.startsWith("/ilanlar/")) return ["src/data/listings.ts"];
  if (path.startsWith("/hizmetler/")) return ["src/data/config.ts"];
  if (/^\/bolgeler\/[^/]+\/[^/]+\/$/.test(path)) return ["src/data/neighborhoods.ts"];
  if (path.startsWith("/bolgeler/")) return ["src/data/regions.ts"];
  const slug = path.replace(/^\/|\/$/g, "");
  if (!slug) return [];
  return [`src/pages/${slug}.astro`, `src/pages/${slug}/index.astro`];
}

const gitDateCache = new Map();

/** Dosyanın son commit tarihi (ISO). Git yoksa/dosya yoksa null. */
function lastCommitDate(file) {
  if (gitDateCache.has(file)) return gitDateCache.get(file);
  let out = null;
  try {
    const raw = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (raw) out = raw;
  } catch {
    // git yok (ör. tarball deploy) veya shallow clone — build tarihine düşülür
  }
  gitDateCache.set(file, out);
  return out;
}

let warnedNoGit = false;

/**
 * @astrojs/sitemap `serialize` kancası.
 * lastmod: sayfayı besleyen kaynak dosyaların EN YENİ commit tarihi.
 * Git erişilemezse build tarihi (mevcut davranış) korunur.
 */
export function serialize(item) {
  const path = new URL(item.url).pathname;

  const rule = RULES.find((r) => r.test(path));
  if (rule) {
    item.priority = rule.priority;
    item.changefreq = rule.changefreq;
  }

  const dates = sourceFilesFor(path).map(lastCommitDate).filter(Boolean);
  if (dates.length) {
    item.lastmod = dates.sort().at(-1);
  } else if (!warnedNoGit) {
    warnedNoGit = true;
    console.warn(
      "[sitemap] Git gecmisi okunamadi — lastmod build tarihine dusuyor. " +
        "Cloudflare Pages'te tam clone (shallow degil) kullanildigindan emin ol.",
    );
  }

  return item;
}
