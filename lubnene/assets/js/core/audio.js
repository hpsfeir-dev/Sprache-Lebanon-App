/* Echte Aussprache aus dem Audio-Bestand des Projekts (window.YALLA_AUDIO).
   Fällt auf die Systemstimme zurück, wenn zu einem Text keine Aufnahme existiert.
   Die Zuordnung läuft über normalisiertes Arabisch, damit Vokalzeichen,
   Alif-Varianten und Satzzeichen keine Treffer verhindern. */
var Audio2 = (function () {

  var index = null;
  var current = null;

  /* Audiodateien liegen im Wurzelverzeichnis des Repos, die App eine Ebene tiefer. */
  var BASE = '../';

  function build() {
    index = {};
    var map = window.YALLA_AUDIO;
    if (!map) return;
    Object.keys(map).forEach(function (key) {
      var path = map[key].replace(/^\.\//, '');
      index[norm(key)] = BASE + path;
      // Wortlaut ohne führenden Artikel zusätzlich ablegen — „الحساب“ findet so auch „حساب“
      var noArticle = norm(key).replace(/^ال/, '');
      if (noArticle && !index[noArticle]) index[noArticle] = BASE + path;
    });
  }

  function norm(s) {
    return String(s || '')
      .replace(/[ً-ْـ]/g, '')          // Harakat und Tatweel
      .replace(/[أإآ]/g, 'ا')      // أ إ آ → ا
      .replace(/ى/g, 'ي')                    // ى → ي
      .replace(/ة/g, 'ه')                    // ة → ه
      .replace(/[؟?!.,،:;…]/g, '')      // Satzzeichen
      .replace(/\s+/g, ' ')
      .trim();
  }

  function lookup(text) {
    if (!index) build();
    return index[norm(text)] || null;
  }

  function has(text) { return !!lookup(text); }

  /* Spielt die echte Aufnahme; ohne Treffer übernimmt die Systemstimme. */
  function play(text, opts) {
    var src = lookup(text);
    if (!src) return TTS.speak(text, opts);

    stop();
    try {
      current = new window.Audio(src);
      current.playbackRate = (opts && opts.rate) || 1;
      var p = current.play();
      if (p && p.catch) {
        p.catch(function () {
          // Autoplay blockiert oder Datei fehlt — dann eben synthetisch
          TTS.speak(text, opts);
        });
      }
      return true;
    } catch (e) {
      return TTS.speak(text, opts);
    }
  }

  function stop() {
    if (current) { try { current.pause(); } catch (e) { /* egal */ } current = null; }
    if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch (e) { /* egal */ } }
  }

  /* Wie lange dauert die Aufnahme ungefähr? Für das Abspielen ganzer Dialoge. */
  function duration(text, cb) {
    var src = lookup(text);
    if (!src) return cb(null);
    var a = new window.Audio();
    a.addEventListener('loadedmetadata', function () { cb(a.duration * 1000); });
    a.addEventListener('error', function () { cb(null); });
    a.src = src;
  }

  /* Ersetzt TTS.button überall in der App: echte Aufnahmen bekommen ein
     kräftigeres Symbol, damit man sieht, wo eine echte Stimme spricht. */
  function button(text, cls) {
    var real = has(text);
    return U.el('button', {
      class: 'btn-speak ' + (real ? 'is-real ' : '') + (cls || ''),
      title: real ? 'Echte Aufnahme anhören' : 'Anhören (Systemstimme)',
      'aria-label': 'Anhören',
      onclick: function (e) {
        e.stopPropagation();
        if (!real && !TTS.hasArabicVoice() && !window._ttsWarned) {
          window._ttsWarned = true;
          U.toast('Für dieses Wort gibt es keine Aufnahme und keine arabische Systemstimme.', 'warn');
        }
        play(text);
      }
    }, [real ? '🔊' : '🔈']);
  }

  function count() {
    if (!index) build();
    return window.YALLA_AUDIO ? Object.keys(window.YALLA_AUDIO).length : 0;
  }

  return { play: play, stop: stop, has: has, button: button, lookup: lookup,
           duration: duration, count: count, norm: norm };
})();
