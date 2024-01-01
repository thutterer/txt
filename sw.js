const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
 };

 self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/app.css",
      "/favicon.ico",
      "/manifest.json",
      "/logo192.png",
      "/logo512.png",
      "https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js",
      "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js",
    ]),
  );
 });

 self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
 })
