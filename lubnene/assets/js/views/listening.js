/* Hörarchiv — echtes gesprochenes Libanesisch aus dem Netz.

   Wichtig: Hier wird nichts heruntergeladen oder kopiert. Gespeichert werden
   nur Verweise mit Zeitmarken und euren eigenen Notizen. Abgespielt wird beim
   Anbieter, gelernt wird hier. So bleibt alles beim Rechteinhaber, und ihr
   bekommt trotzdem echte Stimmen statt Synthese. */
var ListeningView = (function () {

  function items() {
    var s = Store.state;
    if (!s.listening) { s.listening = []; Store.save(); }
    return s.listening;
  }

  function render(view) {
    view.appendChild(U.el('div', { class: 'page-head' }, [
      U.el('h2', { text: '📺 Hörarchiv' }),
      U.el('p', { class: 'muted', text: 'Sammelt Videos und Podcasts, in denen echtes Libanesisch gesprochen wird. Mit Zeitmarke und Notiz — abgespielt wird beim Anbieter, geübt wird hier.' })
    ]));

    view.appendChild(U.el('div', { class: 'card note-card', text:
      '💡 So nutzt ihr es: Video ansehen, bei einer Stelle stoppen, die ihr verstehen wollt, Zeitmarke und Wendung hier eintragen. Was ihr aufschreibt, landet als Karte im Übungspool — mit genau dem Satz, den ihr gehört habt.' }));

    view.appendChild(addForm());

    var list = items();
    if (!list.length) {
      view.appendChild(U.el('div', { class: 'card empty' }, [
        U.el('p', { text: 'Noch nichts gesammelt.' }),
        U.el('p', { class: 'muted', text: 'Gute Quellen: libanesische Serien und Filme, Kochkanäle aus Beirut, Podcasts auf Libanesisch, Vlogs aus dem Kesrouan — und natürlich Videoanrufe mit der Familie.' })
      ]));
      return;
    }

    view.appendChild(U.el('h3', { class: 'section-title', text: list.length + ' Einträge' }));
    list.slice().reverse().forEach(function (it) { view.appendChild(entry(it)); });
  }

  function entry(it) {
    var card = U.el('div', { class: 'card listen-card' });

    card.appendChild(U.el('div', { class: 'row-between' }, [
      U.el('h3', { text: it.title || 'Ohne Titel' }),
      U.el('button', { class: 'btn-icon', text: '🗑', title: 'Entfernen',
        onclick: function () {
          Store.state.listening = items().filter(function (x) { return x.id !== it.id; });
          Store.save(); App.render();
        } })
    ]));

    if (it.note) card.appendChild(U.el('p', { class: 'muted small', text: it.note }));

    if (it.url) {
      card.appendChild(U.el('a', { class: 'btn btn-primary btn-block', href: linkWithTime(it),
        target: '_blank', rel: 'noopener noreferrer',
        text: '▶ Bei der Quelle öffnen' + (it.time ? ' (ab ' + it.time + ')' : '') }));
    }

    if (it.phrases && it.phrases.length) {
      var box = U.el('div', { class: 'card word-list', style: 'box-shadow:none;border:0;padding:0;margin:.6rem 0 0' });
      it.phrases.forEach(function (p) {
        box.appendChild(U.el('div', { class: 'we' }, [
          U.el('div', { class: 'we-main' }, [
            U.el('div', { class: 'we-ar', lang: 'ar', dir: 'rtl', text: p.ar || '—' }),
            U.el('div', { class: 'we-info' }, [
              U.el('div', { class: 'we-tr', text: p.tr }),
              U.el('div', { class: 'we-de', text: p.de })
            ]),
            p.ar ? Audio2.button(p.ar) : null
          ])
        ]));
      });
      card.appendChild(box);

      card.appendChild(U.el('button', { class: 'btn btn-ghost btn-block', text: '▶ Diese Wendungen üben',
        onclick: function () {
          var ids = it.phrases.map(function (p) {
            var hit = Items.all().filter(function (v) { return Audio2.norm(v.ar) === Audio2.norm(p.ar); })[0];
            if (hit) return hit.id;
            return Store.addCustom({ ar: p.ar, tr: p.tr, de: p.de, note: 'Gehört in: ' + (it.title || 'Hörarchiv') }).id;
          });
          Drill.start({ ids: ids, title: it.title || 'Hörarchiv', limit: ids.length,
            maxNew: ids.length, backTo: '#/hoeren' });
        } }));
    }

    return card;
  }

  /* Zeitmarke an die Adresse hängen, damit der Sprung direkt sitzt. */
  function linkWithTime(it) {
    if (!it.time) return it.url;
    var secs = toSeconds(it.time);
    if (!secs) return it.url;
    if (/youtube\.com|youtu\.be/.test(it.url)) {
      return it.url + (it.url.indexOf('?') >= 0 ? '&' : '?') + 't=' + secs + 's';
    }
    return it.url + '#t=' + secs;
  }

  function toSeconds(t) {
    var parts = String(t).split(':').map(Number);
    if (parts.some(isNaN)) return 0;
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return parts[0];
  }

  function addForm() {
    var card = U.el('div', { class: 'card' });
    card.appendChild(U.el('h3', { text: '＋ Quelle hinzufügen' }));

    var fTitle = field(card, 'Titel *', 'z. B. Vlog aus Jounieh');
    var fUrl   = field(card, 'Adresse (URL)', 'https://…');
    var fTime  = field(card, 'Zeitmarke', 'z. B. 4:12');
    var fNote  = field(card, 'Notiz', 'Worum geht es? Was willst du dort lernen?');

    card.appendChild(U.el('h4', { class: 'section-title', text: 'Gehörte Wendung (optional)' }));
    var pWrap = U.el('div', { class: 'field' });
    var pAr = U.el('input', { class: 'input input-ar', type: 'text', lang: 'ar', dir: 'rtl', placeholder: 'Arabisch' });
    pWrap.appendChild(pAr);
    ArKeyboard.toggleable(pAr, pWrap);
    card.appendChild(pWrap);
    var pTr = fieldRaw(card, 'Umschrift, z. B. shu 3am ta3mel');
    var pDe = fieldRaw(card, 'Deutsche Bedeutung');

    card.appendChild(U.el('button', { class: 'btn btn-primary btn-block', text: 'Hinzufügen',
      onclick: function () {
        var title = fTitle.value.trim();
        if (!title) return U.toast('Ein Titel wird gebraucht.', 'warn');
        var it = {
          id: 'l' + Date.now(),
          title: title,
          url: fUrl.value.trim(),
          time: fTime.value.trim(),
          note: fNote.value.trim(),
          phrases: []
        };
        if (pAr.value.trim() || pDe.value.trim()) {
          it.phrases.push({ ar: pAr.value.trim(), tr: pTr.value.trim(), de: pDe.value.trim() });
        }
        items().push(it);
        Store.save();
        U.toast('Hinzugefügt.', 'ok');
        App.render();
      } }));
    return card;
  }

  function field(parent, label, placeholder) {
    var w = U.el('div', { class: 'field' });
    w.appendChild(U.el('label', { text: label }));
    var i = U.el('input', { class: 'input', type: 'text', placeholder: placeholder });
    w.appendChild(i); parent.appendChild(w);
    return i;
  }
  function fieldRaw(parent, placeholder) {
    var i = U.el('input', { class: 'input', type: 'text', placeholder: placeholder });
    parent.appendChild(i);
    return i;
  }

  return { render: render };
})();
