// WordCrown service worker: network-first so updates arrive instantly, cache fallback for offline.
const CACHE = 'wordcrown-v3';
const SHELL = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // content/ (words list, pictures, video) is stored by the app itself; don't keep a second copy here
  if (new URL(req.url).pathname.includes('/content/')) return;
  e.respondWith(
    // no-cache: always ask GitHub if the file changed (cheap), instead of trusting the browser's 10-minute cache
    fetch(req, { cache: 'no-cache' }).then(res => {
      if (res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })
      .then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
