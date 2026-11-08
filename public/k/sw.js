/* Punto de fichaje · trabajo sin conexión. © 2026 THE CEREBRO CREATIVE */
const CACHE = 'ehr-k-d79bbb7945';
const SHELL = ["/k/", "/lib/qrcode.js?v=18ae399f81", "/lib/jsqr.js?v=bc40c8a151", "/lib/app.js?v=7da15e841c", "/lib/app.css?v=540bb22bce", "/icon-192.png"];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ehr-k-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/api/')) return;
  if (e.request.mode === 'navigate') { e.respondWith(caches.match('/k/').then(saved => {
    const net = fetch(e.request).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put('/k/', c)); } return r; });
    if (!saved) return net;
    // Red lenta o bloqueada: se abre la copia guardada a los 3 s y la nueva se guarda para la próxima vez
    return Promise.race([net.then(r => r.ok ? r : saved).catch(() => saved), new Promise(ok => setTimeout(() => ok(saved), 3000))]);
  })); return; }
  if (u.pathname.startsWith('/lib/') || u.pathname.endsWith('.png')) e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return res; })));
});
