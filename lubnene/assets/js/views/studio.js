/* Tonstudio — hier spricht deine Frau die App ein.

   Karte für Karte: anhören, aufnehmen, prüfen, behalten oder verwerfen.
   Aufgenommene Wörter haben in der ganzen App Vorrang vor allem anderen. */
var StudioView = (function () {

  var queue = [];
  var pos = 0;
  var lastBlob = null;
  var lastUrl = null;
  var speaker = null;
  var scope = 'kern';

  function render(view) {
    if (!Recorder.supported()) {
      view.appendChild(U.el('div', { class: 'page-head' }, [U.el('h2', { text: '🎙️ Tonstudio' })]));
      view.appendChild(U.el('div', { class: 'card note-card', text:
        'Dieser Browser kann nicht aufnehmen. Auf dem iPhone geht es in Safari, auf Android in Chrome — und überall braucht die Seite HTTPS oder localhost.' }));
      return;
    }

    if (queue.length) return renderSession(view);
    return renderSetup(view);
  }

  /* ---------- Einrichtung ---------- */

  function renderSetup(view) {
    var recorded = Recorder.count();

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('h2', { text: '🎙️ Tonstudio' }),
      U.el('p', { class: 'muted', text: 'Keine Sprachsynthese der Welt spricht Kesrouani. Eine Muttersprachlerin schon — nimm sie hier auf, und ihre Stimme wird die Stimme der App.' })
    ]));

    if (recorded) {
      view.appendChild(U.el('div', { class: 'card stat-strip' }, [
        U.el('div', { class: 'kpi' }, [
          U.el('div', { class: 'kpi-icon', text: '🎙️' }),
          U.el('div', { class: 'kpi-val', text: String(recorded) }),
          U.el('div', { class: 'kpi-lab', text: 'eigene Aufnahmen' })
        ]),
        U.el('div', { class: 'kpi' }, [
          U.el('div', { class: 'kpi-icon', text: '📇' }),
          U.el('div', { class: 'kpi-val', text: String(Items.all().length) }),
          U.el('div', { class: 'kpi-lab', text: 'Karten gesamt' })
        ])
      ]));
    }

    /* Wer spricht? */
    var card = U.el('div', { class: 'card' });
    card.appendChild(U.el('h3', { text: 'Wer spricht?' }));
    card.appendChild(U.el('p', { class: 'muted small', text: 'Wird zu jeder Aufnahme gespeichert — so wisst ihr später, wessen Stimme ihr hört.' }));
    var who = U.el('div', { class: 'seg' });
    var names = Store.state.profiles.map(function (p) { return p.name; }).concat(['Tante', 'Jeddo', 'Tēta', 'Nachbar']);
    speaker = speaker || Store.state.profiles[1].name;
    names.forEach(function (n) {
      var b = U.el('button', { class: 'seg-btn' + (n === speaker ? ' is-on' : ''), text: n,
        onclick: function () {
          speaker = n;
          Array.prototype.forEach.call(who.children, function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on');
        } });
      who.appendChild(b);
    });
    card.appendChild(who);
    view.appendChild(card);

    /* Was aufnehmen? */
    var pick = U.el('div', { class: 'card' });
    pick.appendChild(U.el('h3', { text: 'Was soll aufgenommen werden?' }));

    var opts = [
      ['kern',    '⭐ Die wichtigsten 40', 'Begrüßung, Fragewörter, Kernverben — der beste Anfang.'],
      ['offen',   '🎯 Was noch fehlt',     'Alle Karten ohne eigene Aufnahme, in Lernreihenfolge.'],
      ['deck',    '📚 Ein Wortfeld',       'Ein Thema komplett einsprechen.'],
      ['saetze',  '💬 Ganze Sätze',        'Die Alltagssätze — dafür lohnt sich echte Stimme am meisten.'],
      ['buchstaben','ﺃ Das Alphabet',      'Alle 28 Buchstaben mit ihrem Lautwert.']
    ];
    var list = U.el('div', { class: 'gram-list' });
    opts.forEach(function (o) {
      list.appendChild(U.el('button', { class: 'gram-item' + (scope === o[0] ? ' is-sel' : ''),
        onclick: function () { scope = o[0]; App.render(); } }, [
        U.el('div', { class: 'gi-left' }, [
          U.el('div', { class: 'gi-title', text: o[1] }),
          U.el('div', { class: 'gi-intro', text: o[2] })
        ]),
        U.el('div', { class: 'gi-right', text: scope === o[0] ? '●' : '○' })
      ]));
    });
    pick.appendChild(list);

    var deckSel = null;
    if (scope === 'deck') {
      deckSel = U.el('select', { class: 'input' });
      Items.decks().forEach(function (d) {
        if (!Items.byDeck(d.id).length) return;
        deckSel.appendChild(U.el('option', { value: d.id, text: d.icon + ' ' + d.title }));
      });
      pick.appendChild(deckSel);
    }

    pick.appendChild(U.el('button', { class: 'btn btn-primary btn-block', text: '🎙️ Aufnahme starten',
      onclick: function () {
        queue = buildQueue(scope, deckSel && deckSel.value);
        if (!queue.length) return U.toast('Hier ist schon alles aufgenommen!', 'ok');
        pos = 0;
        App.render();
      } }));
    view.appendChild(pick);

    /* Tipps */
    view.appendChild(U.el('div', { class: 'card note-card', text:
      '💡 Für guten Ton: ruhiger Raum, Handy oder Kopfhörermikrofon etwa eine Handbreit vom Mund, normal sprechen — nicht überdeutlich. Lieber natürlich als „korrekt“: Ihr wollt ja lernen, wie wirklich geredet wird.' }));

    if (recorded) {
      view.appendChild(U.el('div', { class: 'card row-actions' }, [
        U.el('button', { class: 'btn btn-ghost', text: '⬇ Aufnahmen sichern', onclick: exportClips }),
        U.el('button', { class: 'btn btn-ghost', text: '⬆ Aufnahmen laden', onclick: importClips }),
        U.el('button', { class: 'btn btn-ghost', text: '📋 Alle anhören',
          onclick: function () { location.hash = '#/studio/liste'; } })
      ]));
    }
  }

  function buildQueue(scope, deckId) {
    var pool;
    if (scope === 'kern') {
      var kern = ['begruessung', 'fragen', 'verben1'];
      pool = DATA.vocab.filter(function (v) { return kern.indexOf(v.deck) >= 0; }).slice(0, 40);
    } else if (scope === 'saetze') {
      pool = DATA.phrases || [];
    } else if (scope === 'buchstaben') {
      pool = Items.letterItems();
    } else if (scope === 'deck') {
      pool = Items.byDeck(deckId || 'begruessung');
    } else {
      pool = Items.all();
    }
    return pool.filter(function (v) { return v.ar && !Recorder.has(v.ar); });
  }

  /* ---------- Aufnahmesitzung ---------- */

  function renderSession(view) {
    if (pos >= queue.length) return renderDone(view);
    var item = queue[pos];

    view.appendChild(U.el('div', { class: 'drill-head' }, [
      U.el('button', { class: 'btn-icon', text: '✕', title: 'Beenden',
        onclick: function () { Recorder.cancel(); queue = []; App.render(); } }),
      U.el('div', { class: 'drill-progress' }, [
        U.progressBar(Math.round(pos / queue.length * 100), (pos + 1) + ' / ' + queue.length)
      ]),
      U.el('span', { class: 'pill pill-type', text: '🎙️ ' + speaker })
    ]));

    var card = U.el('div', { class: 'card drill-card studio-card' });
    card.appendChild(U.el('div', { class: 'q-label', text: 'Sprich dieses Wort:' }));
    card.appendChild(U.el('div', { class: 'q-arabic', lang: 'ar', dir: 'rtl', text: item.ar }));
    card.appendChild(U.el('div', { class: 'studio-tr', text: item.tr }));
    card.appendChild(U.el('div', { class: 'studio-de muted', text: item.de }));

    /* Vergleichsstimme, falls vorhanden */
    if (Audio2.hasBank(item.ar)) {
      card.appendChild(U.el('button', { class: 'btn btn-ghost btn-sm', text: '🔈 Bisherige Version anhören',
        onclick: function () { Audio2.playBank(item.ar); } }));
    }

    var status = U.el('div', { class: 'studio-status muted', text: 'Bereit.' });
    var wave = U.el('div', { class: 'studio-wave' });
    var controls = U.el('div', { class: 'studio-controls' });
    var playback = U.el('div', { class: 'studio-playback' });

    var recBtn = U.el('button', { class: 'rec-btn', title: 'Aufnehmen' }, [U.el('span', { class: 'rec-dot' })]);
    var recording = false;

    recBtn.addEventListener('click', function () {
      if (!recording) {
        Recorder.start().then(function () {
          recording = true;
          recBtn.classList.add('is-recording');
          wave.classList.add('is-live');
          status.textContent = 'Aufnahme läuft — nochmal tippen zum Stoppen.';
          U.clear(playback);
        }).catch(function (e) {
          status.textContent = 'Kein Zugriff aufs Mikrofon: ' + e.message;
          status.classList.add('is-error');
        });
      } else {
        Recorder.stop().then(function (blob) {
          recording = false;
          recBtn.classList.remove('is-recording');
          wave.classList.remove('is-live');
          lastBlob = blob;
          if (lastUrl) URL.revokeObjectURL(lastUrl);
          lastUrl = URL.createObjectURL(blob);
          status.textContent = 'Aufgenommen (' + Math.round(blob.size / 1024) + ' kB). Anhören und entscheiden.';
          showPlayback(playback, item);
        });
      }
    });

    controls.appendChild(recBtn);
    card.appendChild(wave);
    card.appendChild(controls);
    card.appendChild(status);
    card.appendChild(playback);

    card.appendChild(U.el('button', { class: 'btn btn-ghost btn-block', text: 'Überspringen →',
      onclick: function () { Recorder.cancel(); pos++; App.render(); } }));

    view.appendChild(card);
  }

  function showPlayback(box, item) {
    U.clear(box);
    var audio = U.el('audio', { controls: true, src: lastUrl, class: 'studio-audio' });
    box.appendChild(audio);
    box.appendChild(U.el('div', { class: 'studio-actions' }, [
      U.el('button', { class: 'btn btn-primary', text: '✓ Behalten & weiter',
        onclick: function () {
          Recorder.save(item.ar, lastBlob, speaker).then(function () {
            Store.addXp(5);
            U.toast('Gespeichert — „' + item.de + '“ hat jetzt eure Stimme.', 'ok');
            lastBlob = null;
            pos++;
            App.render();
          }).catch(function (e) {
            U.toast('Speichern fehlgeschlagen: ' + e.message, 'bad');
          });
        } }),
      U.el('button', { class: 'btn btn-ghost', text: '↻ Nochmal',
        onclick: function () { U.clear(box); }
      })
    ]));
  }

  function renderDone(view) {
    var n = queue.length;
    queue = [];
    view.appendChild(U.el('div', { class: 'card summary' }, [
      U.el('div', { class: 'summary-emoji', text: '🎉' }),
      U.el('h2', { text: 'Yislamo!' }),
      U.el('p', { class: 'muted', text: n + ' Karten durchgearbeitet. Insgesamt habt ihr jetzt ' + Recorder.count() + ' eigene Aufnahmen — die überall in der App Vorrang haben.' }),
      U.el('div', { class: 'summary-actions' }, [
        U.el('button', { class: 'btn btn-primary', text: 'Weiter aufnehmen', onclick: function () { App.render(); } }),
        U.el('button', { class: 'btn btn-ghost', text: '⬇ Sichern', onclick: exportClips }),
        U.el('button', { class: 'btn btn-ghost', text: 'Zur Startseite', onclick: function () { location.hash = '#/home'; } })
      ])
    ]));
  }

  /* ---------- Liste aller Aufnahmen ---------- */

  function renderList(view) {
    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('button', { class: 'btn-back', text: '← Tonstudio', onclick: function () { location.hash = '#/studio'; } }),
      U.el('h2', { text: 'Eure Aufnahmen' }),
      U.el('p', { class: 'muted', text: Recorder.count() + ' Stück' })
    ]));

    var all = Items.all().concat(Items.letterItems()).filter(function (v) { return v.ar && Recorder.has(v.ar); });
    if (!all.length) {
      view.appendChild(U.el('div', { class: 'card empty', text: 'Noch nichts aufgenommen.' }));
      return;
    }
    var box = U.el('div', { class: 'card word-list' });
    all.forEach(function (v) {
      var meta = Recorder.info(v.ar) || {};
      box.appendChild(U.el('div', { class: 'we' }, [
        U.el('div', { class: 'we-main' }, [
          U.el('div', { class: 'we-ar', lang: 'ar', dir: 'rtl', text: v.ar }),
          U.el('div', { class: 'we-info' }, [
            U.el('div', { class: 'we-tr', text: v.tr }),
            U.el('div', { class: 'we-de', text: v.de }),
            U.el('div', { class: 'we-note', text: '🎙️ ' + (meta.speaker || '—') })
          ]),
          U.el('div', { class: 'we-right' }, [
            Audio2.button(v.ar),
            U.el('button', { class: 'btn-icon', text: '🗑', title: 'Aufnahme löschen',
              onclick: function () {
                Recorder.remove(v.ar).then(function () { U.toast('Gelöscht.'); App.render(); });
              } })
          ])
        ])
      ]));
    });
    view.appendChild(box);
  }

  /* ---------- Sichern ---------- */

  function exportClips() {
    U.toast('Aufnahmen werden gepackt …');
    Recorder.exportAll().then(function (list) {
      var blob = new Blob([JSON.stringify({ app: 'lubnene-audio', version: 1, clips: list })],
        { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = U.el('a', { href: url, download: 'lubnene-stimmen-' + U.today() + '.json' });
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      U.toast(list.length + ' Aufnahmen gesichert.', 'ok');
    });
  }

  function importClips() {
    var inp = U.el('input', { type: 'file', accept: '.json,application/json' });
    inp.addEventListener('change', function () {
      var f = inp.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var parsed = JSON.parse(r.result);
          if (!parsed.clips) throw new Error('Datei enthält keine Aufnahmen.');
          Recorder.importAll(parsed.clips).then(function (n) {
            U.toast(n + ' Aufnahmen geladen.', 'ok');
            App.render();
          });
        } catch (e) {
          U.toast('Datei konnte nicht gelesen werden.', 'bad');
        }
      };
      r.readAsText(f);
    });
    inp.click();
  }

  return { render: render, renderList: renderList };
})();
