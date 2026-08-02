/* Offline-Cache für Lubnēne. Die App-Dateien werden bei der Installation
   gesichert, Audiodateien wandern beim ersten Abspielen in den Cache. */
var CACHE = 'lubnene-v1';
var SHELL = [
  './', './index.html', './manifest.webmanifest', './icon.svg',
  './assets/css/app.css',
  './assets/js/app.js',
  './assets/js/core/util.js', './assets/js/core/store.js', './assets/js/core/srs.js',
  './assets/js/core/tts.js', './assets/js/core/phonetics.js', './assets/js/core/audio.js',
  './assets/js/core/recorder.js', './assets/js/core/keyboard.js',
  './assets/js/core/items.js',
  './assets/js/data/alphabet.js', './assets/js/data/vocab-core.js', './assets/js/data/vocab-plus.js',
  './assets/js/data/audio-phrases.js', './assets/js/data/grammar.js', './assets/js/data/dialogues.js',
  './assets/js/data/verbs.js', './assets/js/data/journey.js',
  './assets/js/views/home.js', './assets/js/views/learn.js', './assets/js/views/drill.js',
  './assets/js/views/phrases.js', './assets/js/views/alphabet.js', './assets/js/views/journey.js',
  './assets/js/views/grammar.js', './assets/js/views/dialogues.js', './assets/js/views/mywords.js',
  './assets/js/views/studio.js', './assets/js/views/listening.js',
  './assets/js/views/duel.js', './assets/js/views/stats.js',
  '../audio-map-v6.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    // Einzeln hinzufügen, damit eine fehlende Datei nicht die ganze Installation kippt
    return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { return k === CACHE ? null : caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        // MP3s und Bilder nach dem ersten Gebrauch mitnehmen
        if (res.ok && /\.(mp3|png|jpg|svg)$/.test(e.request.url)) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () { return caches.match('./index.html'); });
    })
  );
});
