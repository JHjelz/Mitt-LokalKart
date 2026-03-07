// MITT-LOKALKART/js/service-worker.js

const CACHE_NAME = "mitt-lokalkart-v1";

const FILES = [
  "index.html",
  "favicon.ico",
  "manifest.json",

  "css/base.css",
  "css/components.css",
  "css/layout.css",
  "css/responsive.css",
  "css/theme.css",

  "js/app.js",
  "js/map.js",
  "js/scaleController.js",

  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            for (const file of FILES) {
                try {
                    await cache.add(new Request(file, { cache: "reload" }));
                } catch (err) {
                    console.warn("Kan ikke cache fil:", file, err);
                }
            }
            self.skipWaiting();
        })()
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
            caches.match(event.request)
            .then(response => {
                return response || fetch(event.request).catch(()  => {
                    if (event.request.destination == "document") {
                        return caches.match("/index.html");
                    }
                    return new Response("Offline eller fil mangler", { status: 503 });
                });
            })
        );
    }
});
