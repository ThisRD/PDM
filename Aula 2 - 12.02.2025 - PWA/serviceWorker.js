// Registre o evento de instalação
self.addEventListener('install', event => {
    event.waitUntill(
        caches.open('meu-app-pwa')
            .then(cache => {
                return cache.addAll([
                    'index.html',
                    '/css/style.css',
                    '/js/script.js'
                ]);
            })
    );
});

// Registre o evento de ativação
self.addEventListener('activate', event => {
    event.waitUntill(
        caches.keys()
            .then(cachesNames => {
                return Promise.all(
                    cachesNames.filter(cacheName => cacheName !== 'meu-app-pwa')
                        .map(cacheName => caches.delete(cacheName))
                );
            })
    );
});

// Registre o evento de fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});