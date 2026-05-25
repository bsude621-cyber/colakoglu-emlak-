// Çolakoğlu Emlak — Service Worker
// Offline-first cache stratejisi: HTML network-first, static assets cache-first.
// Tek seferlik install + activate cycle, eski cache temizlenir.

const VERSION = "v1-2026-05-26";
const STATIC_CACHE = `cea-static-${VERSION}`;
const RUNTIME_CACHE = `cea-runtime-${VERSION}`;

// Install sırasında precache edilen kritik route'lar
const PRECACHE_URLS = [
  "/",
  "/hakkimizda/",
  "/vizyon-misyon/",
  "/bolgeler/",
  "/rehber/",
  "/sozluk/",
  "/sss/",
  "/offline.html",
  "/manifest.webmanifest",
  "/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      // .all yerine .allSettled — biri başarısız olsa diğerleri devam etsin
      Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !k.endsWith(VERSION))
            .map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Sadece GET istekleri, http(s) protokolü
  if (request.method !== "GET") return;
  if (!request.url.startsWith("http")) return;

  // Form submission (Web3Forms), maps embed, vb. üçüncü taraf request'lere dokunma
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // HTML dokümanları: network-first, offline'da cache'den ya da offline page
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Başarılı response'u runtime cache'e koy
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("/offline.html")),
        ),
    );
    return;
  }

  // Statik assetler (image, font, css, js): cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        // Sadece 200'leri cache'le
        if (response.status === 200) {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
