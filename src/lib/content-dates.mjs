// İçerik tarihi yardımcısı — sayfanın GERÇEK son değişiklik tarihi.
//
// NEDEN: Birkaç sayfa dateModified'ı `new Date()` ile üretiyordu; bu her build'de
// "bugün güncellendi" diyen ama içeriği değişmemiş bir sinyal demek. Google ve AI
// arama tarafında içerik-tarih uyumsuzluğu tazelik sinyalini değersizleştirir,
// üstelik projenin kendi "uydurma yasak" kuralına da aykırı. Kaynak dosyanın git
// commit tarihi gerçek ve doğrulanabilir bir tarihtir.
//
// Kullanım (yol depo köküne göre, açıkça yazılır — Astro/Vite altında
// import.meta.url kaynak dosyayı değil bundle'ı gösterdiği için güvenilmez):
//   const modified = contentModified("src/pages/sozluk.astro");

import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";

const cache = new Map();

/**
 * @param {string} repoPath - depo köküne göre dosya yolu, örn "src/pages/sozluk.astro"
 * @returns {string} ISO 8601 tarih. Git okunamazsa dosya mtime'ına düşer.
 */
export function contentModified(repoPath) {
  if (cache.has(repoPath)) return cache.get(repoPath);

  let iso;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", repoPath], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) iso = out;
  } catch {
    // git yok (ör. tarball deploy) — mtime yedeğine düşülür
  }
  if (!iso) {
    try {
      iso = statSync(repoPath).mtime.toISOString();
    } catch {
      iso = new Date().toISOString();
    }
  }

  cache.set(repoPath, iso);
  return iso;
}

/** Aynı tarihin okunabilir hâli. locale varsayılanı tr-TR: "26 Mayıs 2026". */
export function contentModifiedText(repoPath, locale = "tr-TR", opts) {
  return new Intl.DateTimeFormat(locale, opts ?? {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(contentModified(repoPath)));
}
