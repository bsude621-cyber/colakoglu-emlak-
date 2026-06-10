// IndexNow — yeni/güncellenen URL'leri Bing, Yandex ve diğer motorlara anında bildirir.
// ChatGPT Search Bing index'inden beslendiği için bu, AI aramada da hızlandırıcıdır.
// Kullanım (site canlı domaine deploy edildikten SONRA): node indexnow.mjs
// Anahtar dosyası: public/c99e96a4fd8e2f836c30843b78782908.txt (deploy ile yayına çıkar)
//
// URL listesi canlı sitemap'ten OTOMATİK okunur — elle güncelleme gerekmez,
// yeni sayfa eklediğinde build → deploy → bu script onu da gönderir.

const KEY = "c99e96a4fd8e2f836c30843b78782908";
const HOST = "colakogluemlak48.com";
const BASE = `https://${HOST}`;
const SITEMAP = `${BASE}/sitemap-index.xml`;

// Sitemap-index → alt sitemap'ler → tüm <loc> URL'leri (recursive)
async function collectUrls(sitemapUrl, seen = new Set()) {
  const res = await fetch(sitemapUrl);
  if (!res.ok) throw new Error(`Sitemap alınamadı: ${sitemapUrl} (HTTP ${res.status})`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  const urls = new Set();
  for (const loc of locs) {
    if (loc.endsWith(".xml")) {
      // İç içe sitemap — recurse
      if (!seen.has(loc)) {
        seen.add(loc);
        for (const u of await collectUrls(loc, seen)) urls.add(u);
      }
    } else {
      urls.add(loc);
    }
  }
  return [...urls];
}

const urlList = await collectUrls(SITEMAP);
console.log(`Sitemap'ten ${urlList.length} URL toplandı.`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow → HTTP ${res.status}`);
console.log(res.status === 200 || res.status === 202 ? "✓ URL'ler gönderildi" : await res.text());
