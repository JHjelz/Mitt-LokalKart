// MITT-LOKALKART/js/service-worker.js

const CACHE_NAME = "mitt-lokalkart-v1";

const FILES = [
  "./",
  "./index.html",
  "./favicon.ico",
  "./manifest.json",

  "./css/base.css",
  "./css/components.css",
  "./css/layout.css",
  "./css/responsive.css",
  "./css/theme.css",

  "./js/app.js",
  "./js/map.js",

  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(FILES))
        .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
        .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);

    if (url.pathname === "/" || url.pathname.endsWith(".html")) {
        event.respondWith(
            fetch(event.request)
            .then(response => {
                const resClone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
                return response;
            })
            .catch(() => caches.match(event.request))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
