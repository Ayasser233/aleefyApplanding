const CACHE_NAME = "site-cache-v1";
const ASSETS = [
  "/",               // root
  "/index.html",
  "/about.html",
  "/contact.html",
  "/css/style.css",
  "/css/bootstrap.css",
  "/css/responsive.css",
  "/js/bootstrap.js",
  "/js/custom.js",
  "/js/jquery-3.4.1.min.js",
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate (remove old caches if any)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
