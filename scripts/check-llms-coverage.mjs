// llms.txt kapsama denetimi — build sonrası çalışır.
//
// NEDEN: llms.txt elle yazılıyor ve içeriği elle güncelleniyor. Yeni ilan veya
// yeni bölge sayfası eklendiğinde llms.txt'e eklenmeyi kolayca kaçırıyor; bu
// sayfa AI arama tarafında (ChatGPT/Claude/Perplexity) görünmez kalıyor.
// Denetim sessizce kaymayı imkânsız kılar: eksik sayfa varsa build çıktısında
// isimleriyle listelenir.
//
// Uyarı verir, build'i düşürmez — eksik bir satır yüzünden deploy engellenmesin.
// Kasıtlı olarak dışarıda tutulan sayfalar EXCLUDE listesindedir.

import { readFileSync, existsSync } from "node:fs";

const SITE = "https://colakogluemlak48.com";
const SITEMAP = "dist/sitemap-0.xml";
const LLMS = "public/llms.txt";

// llms.txt'e girmesi anlamsız olan sayfalar
const EXCLUDE = [
  "/kvkk/",
  "/cerez-politikasi/",
  "/aydinlatma-metni/",
  "/arama/", // sonuçlar istemci tarafında üretilir, tanıtacak içerik yok
];

if (!existsSync(SITEMAP) || !existsSync(LLMS)) {
  console.warn("[llms] sitemap veya llms.txt bulunamadı — denetim atlandı.");
  process.exit(0);
}

const sitemapUrls = [
  ...readFileSync(SITEMAP, "utf8").matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g),
].map((m) => m[1]);

const llms = readFileSync(LLMS, "utf8");

const missing = sitemapUrls.filter((url) => {
  const path = url.replace(SITE, "") || "/";
  if (path === "/" || EXCLUDE.includes(path)) return false;
  return !llms.includes(url) && !llms.includes(url.replace(/\/$/, ""));
});

if (missing.length === 0) {
  console.log(`[llms] ✓ ${sitemapUrls.length} sayfanın tamamı llms.txt'te karşılanıyor.`);
} else {
  console.warn(
    `\n[llms] ⚠ ${missing.length} sayfa llms.txt'te YOK — AI aramada (ChatGPT/Claude/Perplexity) görünmez kalır:`,
  );
  for (const url of missing) console.warn(`        ${url.replace(SITE, "")}`);
  console.warn(`        → public/llms.txt dosyasına ilgili bölüme ekleyin.\n`);
}
