/* Ecosystem HR Suite · trabajo sin conexión. © 2026 THE CEREBRO CREATIVE */
const CACHE = 'ehr-app-d79bbb7945';
const SHELL = ["/app/", "/lib/jspdf.js?v=98ccf17aa1", "/lib/jspdf-autotable.js?v=27a9c3b618", "/lib/xlsx.js?v=c9506197ca", "/lib/qrcode.js?v=18ae399f81", "/lib/jsqr.js?v=bc40c8a151", "/lib/app.js?v=7da15e841c", "/lib/app.css?v=540bb22bce", "/icon-192.png"];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('ehr-app-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.startsWith('/api/')) return;
  if (e.request.mode === 'navigate') { e.respondWith(caches.match('/app/').then(saved => {
    const net = fetch(e.request).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put('/app/', c)); } return r; });
    if (!saved) return net;
    // Red lenta o bloqueada: se abre la copia guardada a los 3 s y la nueva se guarda para la próxima vez
    return Promise.race([net.then(r => r.ok ? r : saved).catch(() => saved), new Promise(ok => setTimeout(() => ok(saved), 3000))]);
  })); return; }
  if (u.pathname.startsWith('/lib/') || u.pathname.endsWith('.png')) e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return res; })));
});
