// Service Worker for Londyn LeadDev PWA
// Version: 30 - bump this number to trigger update
const CACHE_VERSION = 30;
const CACHE_NAME = `londyn-leaddev-v${CACHE_VERSION}`;
const URLS_TO_CACHE = [
  './',
  './londyn-leaddev.html',
  './leaflet.min.js',
  './london-map.png',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache all static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing version', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches and notify clients
self.addEventListener('activate', event => {
  console.log('[SW] Activating version', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('londyn-leaddev-') && name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
    .then(() => self.clients.claim())
    .then(() => {
      // Notify all clients about the update
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'UPDATE_AVAILABLE', version: CACHE_VERSION });
        });
      });
    })
  );
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests (Google Maps, external APIs, map tiles)
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(response => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Clone and cache the response
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
