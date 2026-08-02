/* Abspielkette für arabischen Text — in dieser Reihenfolge:

     1. Eigene Aufnahme (IndexedDB)   → echte Kesrouani-Stimme, das Beste
     2. Aufnahmebank des Projekts     → synthetisch erzeugt, hocharabischer Klang
     3. Systemstimme mit Lautschrift  → notdürftig, aber besser als nichts

   Punkt 3 bekommt den Text durch Phonetics.respell(): Aus قهوة wird أهوة,
   damit eine hocharabische Stimme wenigstens „ahwe“ statt „qahwa“ sagt. */
var Audio2 = (function () {

  var index = null;
  var current = null;
  var BASE = '../';   // Die MP3s liegen im Wurzelverzeichnis, die App darunter.

  function build() {
    index = {};
    var map = window.YALLA_AUDIO;
    if (!map) return;
    Object.keys(map).forEach(function (key) {
      var path = map[key].replace(/^\.\//, '');
      index[norm(key)] = BASE + path;
      var noArticle = norm(key).replace(/^ال/, '');
      if (noArticle && !index[noArticle]) index[noArticle] = BASE + path;
    });
  }

  function norm(s) {
    return String(s || '')
      .replace(/[ً-ْـ]/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ة/g, 'ه')
      .replace(/[؟?!.,،:;…]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* ---------- Quellen ---------- */

  function lookupBank(text) {
    if (!index) build();
    return index[norm(text)] || null;
  }
  function hasBank(text) { return !!lookupBank(text); }

  function hasOwn(text) {
    return typeof Recorder !== 'undefined' && Recorder.has(text);
  }

  /* Welche Quelle würde greifen? Für Anzeige und Statistik. */
  function source(text) {
    if (hasOwn(text)) return 'eigen';
    if (hasBank(text)) return 'bank';
    return 'tts';
  }

  function has(text) { return source(text) !== 'tts'; }

  /* ---------- Abspielen ---------- */

  function playFile(src, opts, fallback) {
    stop();
    try {
      current = new window.Audio(src);
      current.playbackRate = (opts && opts.rate) || 1;
      var p = current.play();
      if (p && p.catch) p.catch(function () { if (fallback) fallback(); });
      return true;
    } catch (e) {
      if (fallback) fallback();
      return false;
    }
  }

  function speakSynth(text, opts) {
    // Lautschrift statt Buchstabentreue — sonst klingt es hocharabisch.
    var spoken = (typeof Phonetics !== 'undefined') ? Phonetics.respell(text) : text;
    return TTS.speak(spoken, opts);
  }

  function play(text, opts) {
    if (hasOwn(text)) {
      Recorder.url(text).then(function (u) {
        if (u) playFile(u, opts, function () { playBankOrSynth(text, opts); });
        else playBankOrSynth(text, opts);
      }).catch(function () { playBankOrSynth(text, opts); });
      return true;
    }
    return playBankOrSynth(text, opts);
  }

  function playBankOrSynth(text, opts) {
    var src = lookupBank(text);
    if (src) return playFile(src, opts, function () { speakSynth(text, opts); });
    return speakSynth(text, opts);
  }

  /* Ausdrücklich die Projektbank abspielen — zum Vergleich im Tonstudio. */
  function playBank(text, opts) {
    var src = lookupBank(text);
    if (src) return playFile(src, opts, function () { speakSynth(text, opts); });
    return speakSynth(text, opts);
  }

  function stop() {
    if (current) { try { current.pause(); } catch (e) { /* egal */ } current = null; }
    if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) { /* egal */ } }
  }

  function duration(text, cb) {
    if (hasOwn(text)) {
      return Recorder.url(text).then(function (u) {
        if (!u) return cb(null);
        measure(u, cb);
      }).catch(function () { cb(null); });
    }
    var src = lookupBank(text);
    if (!src) return cb(null);
    measure(src, cb);
  }

  function measure(src, cb) {
    var a = new window.Audio();
    a.addEventListener('loadedmetadata', function () { cb(a.duration * 1000); });
    a.addEventListener('error', function () { cb(null); });
    a.src = src;
  }

  /* ---------- Schaltfläche ---------- */

  var LABEL = {
    eigen: { icon: '🎙️', cls: 'is-own',  title: 'Eure eigene Aufnahme' },
    bank:  { icon: '🔊', cls: 'is-real', title: 'Aufnahme aus dem Projektbestand' },
    tts:   { icon: '🔈', cls: '',        title: 'Systemstimme (mit Lautschrift-Korrektur)' }
  };

  function button(text, cls) {
    var src = source(text);
    var l = LABEL[src];
    return U.el('button', {
      class: 'btn-speak ' + l.cls + ' ' + (cls || ''),
      title: l.title,
      'aria-label': 'Anhören',
      onclick: function (e) {
        e.stopPropagation();
        if (src === 'tts' && !TTS.hasArabicVoice() && !window._ttsWarned) {
          window._ttsWarned = true;
          U.toast('Keine Aufnahme und keine arabische Systemstimme — nimm es im Tonstudio selbst auf.', 'warn');
        }
        play(text);
      }
    }, [l.icon]);
  }

  function count() {
    if (!index) build();
    return window.YALLA_AUDIO ? Object.keys(window.YALLA_AUDIO).length : 0;
  }

  return {
    play: play, playBank: playBank, stop: stop,
    has: has, hasBank: hasBank, hasOwn: hasOwn, source: source,
    button: button, lookup: lookupBank, duration: duration,
    count: count, norm: norm
  };
})();
