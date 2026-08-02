/* Eigene Aufnahmen — die verlässlichste Aussprachequelle, die es gibt.

   Aufgenommen wird direkt im Browser über MediaRecorder, gespeichert wird in
   IndexedDB (localStorage wäre für Audio viel zu klein). Jede Aufnahme hängt
   an der arabischen Schreibweise, damit sie überall in der App greift. */
var Recorder = (function () {

  var DB = 'lubnene-audio', STORE = 'clips', VERSION = 1;
  var db = null;
  var urls = {};          // key -> Object-URL (Zwischenspeicher)
  var keys = {};          // key -> { speaker, at, size } für schnelle Abfragen
  var mediaRecorder = null;
  var chunks = [];

  /* ---------- Datenbank ---------- */

  function open() {
    return new Promise(function (resolve, reject) {
      if (db) return resolve(db);
      if (!window.indexedDB) return reject(new Error('IndexedDB nicht verfügbar'));
      var req = indexedDB.open(DB, VERSION);
      req.onupgradeneeded = function () {
        var d = req.result;
        if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE, { keyPath: 'key' });
      };
      req.onsuccess = function () { db = req.result; resolve(db); };
      req.onerror = function () { reject(req.error); };
    });
  }

  /* Beim Start einmal alle vorhandenen Schlüssel einlesen. */
  function init() {
    return open().then(function (d) {
      return new Promise(function (resolve) {
        var tx = d.transaction(STORE, 'readonly');
        var req = tx.objectStore(STORE).openCursor();
        req.onsuccess = function () {
          var c = req.result;
          if (c) {
            keys[c.value.key] = { speaker: c.value.speaker, at: c.value.at, size: c.value.size };
            c.continue();
          } else resolve(keys);
        };
        req.onerror = function () { resolve(keys); };
      });
    }).catch(function () { return keys; });
  }

  function norm(ar) { return Audio2.norm(ar); }

  function has(ar) { return !!keys[norm(ar)]; }
  function info(ar) { return keys[norm(ar)] || null; }
  function count() { return Object.keys(keys).length; }
  function allKeys() { return Object.assign({}, keys); }

  function save(ar, blob, speaker) {
    var key = norm(ar);
    return open().then(function (d) {
      return new Promise(function (resolve, reject) {
        var tx = d.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).put({
          key: key, ar: ar, blob: blob, speaker: speaker || 'unbekannt',
          at: new Date().toISOString(), size: blob.size
        });
        tx.oncomplete = function () {
          keys[key] = { speaker: speaker, at: new Date().toISOString(), size: blob.size };
          if (urls[key]) { URL.revokeObjectURL(urls[key]); delete urls[key]; }
          resolve(key);
        };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  function load(ar) {
    var key = norm(ar);
    return open().then(function (d) {
      return new Promise(function (resolve) {
        var tx = d.transaction(STORE, 'readonly');
        var req = tx.objectStore(STORE).get(key);
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { resolve(null); };
      });
    });
  }

  function remove(ar) {
    var key = norm(ar);
    return open().then(function (d) {
      return new Promise(function (resolve) {
        var tx = d.transaction(STORE, 'readwrite');
        tx.objectStore(STORE).delete(key);
        tx.oncomplete = function () {
          delete keys[key];
          if (urls[key]) { URL.revokeObjectURL(urls[key]); delete urls[key]; }
          resolve();
        };
      });
    });
  }

  /* Abspielbare URL — wird zwischengespeichert, damit wiederholtes
     Abspielen die Datenbank nicht jedes Mal anfassen muss. */
  function url(ar) {
    var key = norm(ar);
    if (urls[key]) return Promise.resolve(urls[key]);
    return load(ar).then(function (rec) {
      if (!rec) return null;
      urls[key] = URL.createObjectURL(rec.blob);
      return urls[key];
    });
  }

  /* ---------- Aufnehmen ---------- */

  function supported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  }

  function start() {
    if (!supported()) return Promise.reject(new Error('Aufnahme wird von diesem Browser nicht unterstützt.'));
    return navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    }).then(function (stream) {
      chunks = [];
      var mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg']
        .filter(function (m) { return window.MediaRecorder.isTypeSupported(m); })[0];
      mediaRecorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      mediaRecorder.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
      mediaRecorder.start();
      return stream;
    });
  }

  function stop() {
    return new Promise(function (resolve, reject) {
      if (!mediaRecorder) return reject(new Error('Es läuft keine Aufnahme.'));
      mediaRecorder.onstop = function () {
        var blob = new Blob(chunks, { type: mediaRecorder.mimeType || 'audio/webm' });
        mediaRecorder.stream.getTracks().forEach(function (t) { t.stop(); });
        mediaRecorder = null;
        resolve(blob);
      };
      mediaRecorder.stop();
    });
  }

  function cancel() {
    if (mediaRecorder) {
      try {
        mediaRecorder.stream.getTracks().forEach(function (t) { t.stop(); });
        mediaRecorder.stop();
      } catch (e) { /* schon gestoppt */ }
      mediaRecorder = null;
      chunks = [];
    }
  }

  function recording() { return !!mediaRecorder; }

  /* ---------- Sichern ---------- */

  /* Alle Aufnahmen als eine JSON-Datei (Base64). Für ein paar hundert kurze
     Clips gut handhabbar — die Datei wird etwa ein Drittel größer als die
     Rohdaten. */
  function exportAll(onProgress) {
    return open().then(function (d) {
      return new Promise(function (resolve) {
        var out = [], done = 0, total = Object.keys(keys).length;
        var tx = d.transaction(STORE, 'readonly');
        var req = tx.objectStore(STORE).openCursor();
        req.onsuccess = function () {
          var c = req.result;
          if (!c) return resolve(out);
          var rec = c.value;
          var fr = new FileReader();
          fr.onload = function () {
            out.push({ key: rec.key, ar: rec.ar, speaker: rec.speaker, at: rec.at,
                       type: rec.blob.type, data: fr.result.split(',')[1] });
            done++;
            if (onProgress) onProgress(done, total);
            c.continue();
          };
          fr.readAsDataURL(rec.blob);
        };
      });
    });
  }

  function importAll(list) {
    return open().then(function (d) {
      return new Promise(function (resolve, reject) {
        var tx = d.transaction(STORE, 'readwrite');
        var store = tx.objectStore(STORE);
        list.forEach(function (r) {
          var bin = atob(r.data);
          var arr = new Uint8Array(bin.length);
          for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
          var blob = new Blob([arr], { type: r.type || 'audio/webm' });
          store.put({ key: r.key, ar: r.ar, blob: blob, speaker: r.speaker, at: r.at, size: blob.size });
          keys[r.key] = { speaker: r.speaker, at: r.at, size: blob.size };
        });
        tx.oncomplete = function () { resolve(list.length); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  return {
    init: init, has: has, info: info, count: count, allKeys: allKeys,
    save: save, load: load, remove: remove, url: url,
    supported: supported, start: start, stop: stop, cancel: cancel, recording: recording,
    exportAll: exportAll, importAll: importAll
  };
})();
