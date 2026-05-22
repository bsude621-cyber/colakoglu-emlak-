// IndexNow — yeni/güncellenen URL'leri Bing, Yandex ve diğer motorlara anında bildirir.
// ChatGPT Search Bing index'inden beslendiği için bu, AI aramada da hızlandırıcıdır.
// Kullanım (site canlı domaine deploy edildikten SONRA): node indexnow.mjs
// Anahtar dosyası: public/c99e96a4fd8e2f836c30843b78782908.txt (deploy ile yayına çıkar)

const KEY = "c99e96a4fd8e2f836c30843b78782908";
const HOST = "colakogluemlak48.com";
const BASE = `https://${HOST}`;

const paths = [
  "/",
  "/vizyon-misyon/",
  "/rehber/",
  "/rehber/muglada-yatirimlik-arazi/",
  "/rehber/tapu-devir-sureci/",
  "/rehber/yabanciya-gayrimenkul-satisi/",
  "/bolgeler/bodrum/",
  "/bolgeler/marmaris/",
  "/bolgeler/fethiye/",
  "/bolgeler/milas/",
  "/bolgeler/datca/",
  "/bolgeler/koycegiz/",
  "/bolgeler/ortaca/",
  "/bolgeler/dalaman/",
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: paths.map((p) => BASE + p),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow → HTTP ${res.status}`);
console.log(res.status === 200 || res.status === 202 ? "✓ URL'ler gönderildi" : await res.text());
