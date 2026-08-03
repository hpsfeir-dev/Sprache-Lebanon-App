/* Reise durch den Libanon: Zeitreise, Orte und die Hocharabisch-Brücke. */
var JourneyView = (function () {

  var tab = 'zeit';

  function render(view, params) {
    if (params && params.era) return renderEra(view, params.era);
    if (params && params.place) return renderPlace(view, params.place);

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('h2', { text: '🇱🇧 Reise durch den Libanon' }),
      U.el('p', { class: 'muted', text: 'Wo die Sprache herkommt, wo ihr sie sprecht — und was beim Lesen anders aussieht.' })
    ]));

    var tabs = U.el('div', { class: 'seg seg-tabs' });
    [['zeit', '🕰️ Zeitreise'], ['orte', '📍 Orte'], ['msa', '📖 Hocharabisch']].forEach(function (t) {
      tabs.appendChild(U.el('button', { class: 'seg-btn' + (tab === t[0] ? ' is-on' : ''), text: t[1],
        onclick: function () { tab = t[0]; App.render(); } }));
    });
    view.appendChild(tabs);

    if (tab === 'zeit') renderTimeline(view);
    else if (tab === 'orte') renderPlaces(view);
    else renderMsa(view);
  }

  /* ---------- Zeitreise ---------- */

  function renderTimeline(view) {
    view.appendChild(U.el('div', { class: 'card intro-card' }, [
      U.el('p', { text: 'Acht Stationen von den Phöniziern bis heute. Zu jeder gehören arabische Wörter, die du direkt üben kannst.' })
    ]));

    var line = U.el('div', { class: 'timeline' });
    DATA.timeline.forEach(function (t) {
      line.appendChild(U.el('button', { class: 'tl-item tl-' + t.color,
        onclick: function () { location.hash = '#/reise/era/' + t.id; } }, [
        U.el('div', { class: 'tl-dot', text: t.icon }),
        U.el('div', { class: 'tl-body' }, [
          U.el('div', { class: 'tl-era', text: t.era }),
          U.el('div', { class: 'tl-title', text: t.title }),
          U.el('div', { class: 'tl-head', text: t.head })
        ])
      ]));
    });
    view.appendChild(line);
  }

  function renderEra(view, id) {
    var t = DATA.timeline.filter(function (x) { return x.id === id; })[0];
    if (!t) { location.hash = '#/reise'; return; }
    var idx = DATA.timeline.indexOf(t);

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('button', { class: 'btn-back', text: '← Reise', onclick: function () { tab = 'zeit'; location.hash = '#/reise'; } })
    ]));

    view.appendChild(U.el('div', { class: 'card era-hero era-' + t.color }, [
      U.el('div', { class: 'era-icon', text: t.icon }),
      U.el('div', { class: 'era-period', text: t.era }),
      U.el('h2', { text: t.title }),
      U.el('div', { class: 'era-head', text: t.head })
    ]));

    view.appendChild(U.el('div', { class: 'card' }, [U.el('p', { text: t.text })]));

    view.appendChild(U.el('div', { class: 'card wow-card' }, [
      U.el('div', { class: 'wow-label', text: '💡 Wusstest du' }),
      U.el('p', { text: t.wow })
    ]));

    view.appendChild(U.el('h3', { class: 'section-title', text: 'Wörter aus dieser Zeit' }));
    var box = U.el('div', { class: 'card word-list' });
    t.words.forEach(function (w) { box.appendChild(miniWord(w)); });
    view.appendChild(box);

    view.appendChild(U.el('div', { class: 'card row-actions' }, [
      U.el('button', { class: 'btn btn-primary', text: '▶ Diese Wörter üben',
        onclick: function () { practise(t.words, t.title, '#/reise/era/' + t.id); } }),
      idx > 0 ? U.el('button', { class: 'btn btn-ghost', text: '← ' + DATA.timeline[idx - 1].title,
        onclick: function () { location.hash = '#/reise/era/' + DATA.timeline[idx - 1].id; } }) : null,
      idx < DATA.timeline.length - 1 ? U.el('button', { class: 'btn btn-ghost', text: DATA.timeline[idx + 1].title + ' →',
        onclick: function () { location.hash = '#/reise/era/' + DATA.timeline[idx + 1].id; } }) : null
    ]));
  }

  /* ---------- Orte ---------- */

  function renderPlaces(view) {
    view.appendChild(U.el('div', { class: 'card intro-card' }, [
      U.el('p', { text: 'Acht Orte, die zu eurem Leben dort gehören — mit den Sätzen, die man vor Ort braucht.' })
    ]));

    var grid = U.el('div', { class: 'place-grid' });
    DATA.places.forEach(function (p) {
      var card = U.el('button', { class: 'place-card', onclick: function () { location.hash = '#/reise/ort/' + p.id; } });
      if (p.img) {
        card.appendChild(U.el('div', { class: 'place-img', style: 'background-image:url(' + p.img + ')' }));
      } else {
        card.appendChild(U.el('div', { class: 'place-img place-img-none' }, [U.el('span', { text: p.icon })]));
      }
      card.appendChild(U.el('div', { class: 'place-body' }, [
        U.el('div', { class: 'place-name' }, [
          U.el('span', { text: p.icon + ' ' + p.name }),
          U.el('span', { class: 'place-ar', lang: 'ar', dir: 'rtl', text: p.ar })
        ]),
        U.el('div', { class: 'place-region', text: p.region })
      ]));
      grid.appendChild(card);
    });
    view.appendChild(grid);
  }

  function renderPlace(view, id) {
    var p = DATA.places.filter(function (x) { return x.id === id; })[0];
    if (!p) { location.hash = '#/reise'; return; }

    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('button', { class: 'btn-back', text: '← Orte', onclick: function () { tab = 'orte'; location.hash = '#/reise'; } })
    ]));

    if (p.img) {
      view.appendChild(U.el('div', { class: 'place-hero', style: 'background-image:url(' + p.img + ')' }));
    }

    view.appendChild(U.el('div', { class: 'card' }, [
      U.el('div', { class: 'place-title' }, [
        U.el('h2', { text: p.icon + ' ' + p.name }),
        U.el('div', { class: 'place-title-ar', lang: 'ar', dir: 'rtl' }, [
          U.el('span', { text: p.ar }), Audio2.button(p.ar)
        ])
      ]),
      U.el('div', { class: 'place-region', text: p.region }),
      U.el('p', { text: p.text })
    ]));

    view.appendChild(U.el('h3', { class: 'section-title', text: 'Wörter für diesen Ort' }));
    var box = U.el('div', { class: 'card word-list' });
    p.words.forEach(function (w) { box.appendChild(miniWord(w)); });
    view.appendChild(box);

    var actions = U.el('div', { class: 'card row-actions' }, [
      U.el('button', { class: 'btn btn-primary', text: '▶ Wörter üben',
        onclick: function () { practise(p.words, p.name, '#/reise/ort/' + p.id); } })
    ]);
    if (p.phraseSet) {
      actions.appendChild(U.el('button', { class: 'btn btn-ghost', text: '🎧 Sätze mit echter Stimme',
        onclick: function () { location.hash = '#/saetze/' + p.phraseSet; } }));
    }
    view.appendChild(actions);
  }

  /* ---------- Hocharabisch-Brücke ---------- */

  function renderMsa(view) {
    view.appendChild(U.el('div', { class: 'card intro-card' }, [
      U.el('p', { text: 'Gesprochen wird Dialekt, geschrieben wird Hocharabisch. Diese sechs Kapitel schlagen die Brücke — damit du lesen kannst, was auf Schildern, in Zeitungen und in Büchern steht.' })
    ]));

    DATA.msa.forEach(function (m) {
      var card = U.el('div', { class: 'card msa-card' });
      var head = U.el('button', { class: 'msa-head' }, [
        U.el('span', { class: 'msa-icon', text: m.icon }),
        U.el('span', { class: 'msa-title', text: m.title }),
        U.el('span', { class: 'msa-toggle', text: '▾' })
      ]);
      var body = U.el('div', { class: 'msa-body', hidden: true });
      body.appendChild(U.el('p', { class: 'msa-intro', text: m.intro }));

      var wrap = U.el('div', { class: 'table-wrap' });
      var t = U.el('table', { class: 'gtable' });
      var thead = U.el('thead'), hr = U.el('tr');
      m.rows[0].forEach(function (h) { hr.appendChild(U.el('th', { text: h })); });
      thead.appendChild(hr); t.appendChild(thead);
      var tb = U.el('tbody');
      m.rows.slice(1).forEach(function (row) {
        var tr = U.el('tr');
        row.forEach(function (cell) {
          var td = U.el('td');
          if (/[؀-ۿ]/.test(cell)) td.appendChild(U.el('span', { class: 'cell-mixed', lang: 'ar', text: cell }));
          else td.textContent = cell;
          tr.appendChild(td);
        });
        tb.appendChild(tr);
      });
      t.appendChild(tb); wrap.appendChild(t);
      body.appendChild(wrap);
      body.appendChild(U.el('div', { class: 'note-card', text: m.note }));

      head.addEventListener('click', function () {
        body.hidden = !body.hidden;
        head.querySelector('.msa-toggle').textContent = body.hidden ? '▾' : '▴';
      });
      card.appendChild(head); card.appendChild(body);
      view.appendChild(card);
    });
  }

  /* ---------- gemeinsam genutzt ---------- */

  function miniWord(w) {
    return U.el('div', { class: 'we' }, [
      U.el('div', { class: 'we-main' }, [
        U.el('div', { class: 'we-ar', lang: 'ar', dir: 'rtl', text: w.ar }),
        U.el('div', { class: 'we-info' }, [
          U.el('div', { class: 'we-tr', text: w.tr }),
          U.el('div', { class: 'we-de', text: w.de })
        ]),
        Audio2.button(w.ar)
      ])
    ]);
  }

  /* Wörter aus Zeitreise und Orten sind keine SRS-Karten des Hauptbestands.
     Für eine Übung werden sie deshalb als eigene Karten registriert. */
  function practise(words, title, backTo) {
    var ids = words.map(function (w) {
      var hit = Items.all().filter(function (v) { return Audio2.norm(v.ar) === Audio2.norm(w.ar); })[0];
      if (hit) return hit.id;
      // noch nicht im Bestand → als eigenes Wort aufnehmen, damit es geübt werden kann
      var added = Store.addCustom({ ar: w.ar, tr: w.tr, de: w.de,
        note: 'Aus: ' + title, deck: 'reise' });
      return added.id;
    });
    Drill.start({ ids: ids, title: title, limit: ids.length, maxNew: ids.length, backTo: backTo });
  }

  return { render: render, setTab: function (t) { tab = t; } };
})();
