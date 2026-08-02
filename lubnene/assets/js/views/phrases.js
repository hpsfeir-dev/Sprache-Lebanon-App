/* Sätze mit echter Stimme — alle Aufnahmen aus dem Projektbestand,
   nach Situationen sortiert. */
var PhrasesView = (function () {

  function render(view, params) {
    if (params && params.set) return renderSet(view, params.set);

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('h2', { text: '🎧 Sätze mit echter Stimme' }),
      U.el('p', { class: 'muted', text: DATA.phrases.length + ' Alltagssätze, gesprochen von einer echten Stimme statt vom Computer. Nach Situationen sortiert.' })
    ]));

    view.appendChild(U.el('div', { class: 'card row-actions' }, [
      U.el('button', { class: 'btn btn-primary', text: '▶ Alle Sätze üben',
        onclick: function () {
          Drill.start({ ids: Items.ids(DATA.phrases), title: 'Sätze', limit: 20, maxNew: 8, backTo: '#/saetze' });
        } }),
      U.el('button', { class: 'btn btn-ghost', text: '👂 Nur Hören',
        onclick: function () {
          Drill.start({ ids: Items.ids(DATA.phrases), title: 'Hörtraining', limit: 15, maxNew: 6,
            modes: ['listen'], backTo: '#/saetze' });
        } })
    ]));

    var grid = U.el('div', { class: 'set-grid' });
    DATA.phraseSets.forEach(function (s) {
      var ids = DATA.phrases.filter(function (p) { return p.setId === s.id; }).map(function (p) { return p.id; });
      var st = SRS.stats(ids);
      grid.appendChild(U.el('button', { class: 'set-card', onclick: function () { location.hash = '#/saetze/' + s.id; } }, [
        U.el('div', { class: 'set-icon', text: s.icon }),
        U.el('div', { class: 'set-body' }, [
          U.el('div', { class: 'set-title', text: s.title }),
          U.el('div', { class: 'set-desc', text: s.desc }),
          U.progressBar(st.total ? Math.round(st.sitzt / st.total * 100) : 0),
          U.el('div', { class: 'set-meta muted', text: s.items.length + ' Sätze · ' + st.sitzt + ' sitzen' })
        ])
      ]));
    });
    view.appendChild(grid);
  }

  function renderSet(view, id) {
    var s = DATA.phraseSets.filter(function (x) { return x.id === id; })[0];
    if (!s) { location.hash = '#/saetze'; return; }
    var cards = DATA.phrases.filter(function (p) { return p.setId === s.id; });

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('button', { class: 'btn-back', text: '← Sätze', onclick: function () { location.hash = '#/saetze'; } }),
      U.el('h2', { text: s.icon + ' ' + s.title }),
      U.el('p', { class: 'muted', text: s.desc })
    ]));

    view.appendChild(U.el('div', { class: 'card row-actions' }, [
      U.el('button', { class: 'btn btn-primary', text: '▶ Üben',
        onclick: function () {
          Drill.start({ ids: Items.ids(cards), title: s.title, limit: cards.length,
            maxNew: cards.length, backTo: '#/saetze/' + s.id });
        } }),
      U.el('button', { class: 'btn btn-ghost', text: '🔊 Alle nacheinander anhören',
        onclick: function () { playAll(s.items, 0); } })
    ]));

    var box = U.el('div', { class: 'card phrase-list' });
    s.items.forEach(function (it) {
      var real = Audio2.has(it.ar);
      box.appendChild(U.el('div', { class: 'phrase' + (real ? ' has-audio' : '') }, [
        U.el('div', { class: 'ph-top' }, [
          U.el('div', { class: 'ph-ar', lang: 'ar', dir: 'rtl', text: it.ar }),
          Audio2.button(it.ar)
        ]),
        U.el('div', { class: 'ph-tr', text: it.tr }),
        U.el('div', { class: 'ph-de', text: it.de })
      ]));
    });
    view.appendChild(box);
  }

  /* Nacheinander abspielen — die Wartezeit richtet sich nach der echten Länge. */
  function playAll(items, i) {
    if (i >= items.length) return;
    Audio2.play(items[i].ar);
    Audio2.duration(items[i].ar, function (ms) {
      var wait = ms ? ms + 600 : 1400 + items[i].ar.length * 80;
      setTimeout(function () { playAll(items, i + 1); }, wait);
    });
  }

  return { render: render };
})();
