/* Startseite: Tageslektion, Serie, Schnellzugriff. */
var HomeView = (function () {

  function render(view) {
    var p = Store.progress();
    var prof = Store.activeProfile();
    var poolIds = Items.studyPool();
    var st = SRS.stats(poolIds);
    var todayCount = p.history[U.today()] || 0;
    var goal = Store.settings.dailyGoal;

    view.appendChild(U.el('div', { class: 'hero' }, [
      U.el('div', { class: 'hero-ar', lang: 'ar', dir: 'rtl', text: 'أهلا وسهلا' }),
      U.el('h1', { text: 'Ahla w sahla, ' + prof.name + '!' }),
      U.el('p', { class: 'muted', text: 'Libanesisch-Arabisch, wie man es in Jounieh und Rayfoun spricht.' })
    ]));

    /* Tagesziel */
    var pct = Math.min(100, Math.round((todayCount / goal) * 100));
    var goalCard = U.el('div', { class: 'card card-goal' }, [
      U.el('div', { class: 'row-between' }, [
        U.el('h3', { text: 'Heute' }),
        U.el('span', { class: 'pill', text: todayCount + ' / ' + goal })
      ]),
      U.progressBar(pct),
      U.el('div', { class: 'goal-meta muted', text:
        todayCount >= goal ? '✓ Tagesziel geschafft — ' + p.streak + ' Tage in Folge.'
                           : st.faellig + ' Karten fällig, ' + st.neu + ' noch nie gesehen.' })
    ]);
    view.appendChild(goalCard);

    /* Tageslektion */
    view.appendChild(U.el('div', { class: 'card card-cta' }, [
      U.el('h3', { text: '🎯 Tageslektion' }),
      U.el('p', { class: 'muted', text: 'Gemischte Session: fällige Wiederholungen plus ein paar neue Wörter. Wechselnde Aufgabentypen — erkennen, hören, tippen.' }),
      U.el('button', { class: 'btn btn-primary btn-block', text: 'Los geht’s — yalla!',
        onclick: function () {
          Drill.start({ ids: poolIds, title: 'Tageslektion', limit: 20, maxNew: 6, backTo: '#/home' });
        } })
    ]));

    /* Kennzahlen */
    view.appendChild(U.el('div', { class: 'kpi-grid' }, [
      kpi('🔥', p.streak, p.streak === 1 ? 'Tag Serie' : 'Tage Serie'),
      kpi('⭐', p.xp, 'XP'),
      kpi('✅', st.sitzt, 'sitzen'),
      kpi('📚', st.total, 'Karten')
    ]));

    /* Schnellzugriff */
    view.appendChild(U.el('h3', { class: 'section-title', text: 'Schnell rein' }));
    var quick = U.el('div', { class: 'quick-grid' }, [
      quickCard('🎙️', 'Tonstudio', 'Eure eigene Stimme aufnehmen', '#/studio'),
      quickCard('🎧', 'Sätze hören', '123 Alltagssätze nach Situation', '#/saetze'),
      quickCard('🇱🇧', 'Reise durch den Libanon', 'Zeitreise, Orte, Hocharabisch', '#/reise'),
      quickCard('ﺃ', 'Schrift lernen', 'Alphabet, Verbindungen, Handschrift', '#/alphabet'),
      quickCard('💬', 'Dialoge', 'Beim Bäcker, im Service, zu Hause', '#/dialogues'),
      quickCard('📚', 'Grammatik', 'Der Kesrouan-Klang, b-Präsens, baddi', '#/grammar'),
      quickCard('📺', 'Hörarchiv', 'Echte Stimmen aus dem Netz', '#/hoeren'),
      quickCard('✍️', 'Eigene Wörter', 'Was ihr selbst sammelt', '#/mywords'),
      quickCard('⚔️', 'Duell zu zweit', 'Ihr beide auf einem Gerät', '#/duel')
    ]);
    view.appendChild(quick);

    view.appendChild(voiceCard(poolIds));

    /* Wort des Tages — stabil pro Tag und Profil */
    var pool = DATA.vocab;
    var seed = U.today().split('-').join('') % pool.length;
    var w = pool[seed % pool.length];
    view.appendChild(U.el('div', { class: 'card card-wotd' }, [
      U.el('div', { class: 'wotd-label', text: 'Wort des Tages' }),
      U.el('div', { class: 'wotd-ar', lang: 'ar', dir: 'rtl', text: w.ar }),
      U.el('div', { class: 'wotd-tr' }, [U.el('span', { text: w.tr }), Audio2.button(w.ar)]),
      U.el('div', { class: 'wotd-de', text: w.de }),
      w.note ? U.el('div', { class: 'wotd-note muted', text: w.note }) : null,
      w.ex ? U.el('div', { class: 'wotd-ex' }, [
        U.el('div', { lang: 'ar', dir: 'rtl', class: 'ex-ar', text: w.ex.ar }),
        U.el('div', { class: 'ex-tr', text: w.ex.tr }),
        U.el('div', { class: 'ex-de muted', text: w.ex.de })
      ]) : null
    ]));

    /* Suche */
    var searchBox = U.el('div', { class: 'card' });
    searchBox.appendChild(U.el('h3', { text: '🔍 Wort nachschlagen' }));
    var inp = U.el('input', { class: 'input', type: 'search',
      placeholder: 'Deutsch, Umschrift oder Arabisch …' });
    var results = U.el('div', { class: 'search-results' });
    inp.addEventListener('input', function () {
      U.clear(results);
      var hits = Items.search(inp.value);
      if (!inp.value) return;
      if (!hits.length) {
        results.appendChild(U.el('div', { class: 'muted', text: 'Nichts gefunden. Leg es doch als eigenes Wort an →' }));
        results.appendChild(U.el('button', { class: 'btn btn-ghost btn-sm', text: 'Zu „Meine Wörter“',
          onclick: function () { location.hash = '#/mywords'; } }));
        return;
      }
      hits.slice(0, 12).forEach(function (h) { results.appendChild(wordRow(h)); });
    });
    searchBox.appendChild(inp);
    searchBox.appendChild(results);
    view.appendChild(searchBox);
  }

  /* Wie viel der App spricht schon mit echter Stimme? */
  function voiceCard(poolIds) {
    var all = Items.all();
    var eigen = 0, bank = 0;
    all.forEach(function (v) {
      var s = Audio2.source(v.ar);
      if (s === 'eigen') eigen++; else if (s === 'bank') bank++;
    });
    var total = all.length;
    var pctEigen = Math.round(eigen / total * 100);
    var pctBank = Math.round(bank / total * 100);

    var card = U.el('div', { class: 'card card-voice' }, [
      U.el('div', { class: 'row-between' }, [
        U.el('h3', { text: '🎙️ Stimmen-Abdeckung' }),
        U.el('span', { class: 'pill', text: (eigen + bank) + ' / ' + total })
      ]),
      U.el('div', { class: 'voice-bar' }, [
        U.el('div', { class: 'vb-own',  style: 'width:' + pctEigen + '%' }),
        U.el('div', { class: 'vb-bank', style: 'width:' + pctBank + '%' })
      ]),
      U.el('div', { class: 'voice-legend' }, [
        U.el('span', {}, [U.el('i', { class: 'dot dot-own' }), U.el('span', { text: eigen + ' eure Stimme' })]),
        U.el('span', {}, [U.el('i', { class: 'dot dot-bank' }), U.el('span', { text: bank + ' Aufnahmebank' })]),
        U.el('span', {}, [U.el('i', { class: 'dot dot-tts' }), U.el('span', { text: (total - eigen - bank) + ' Systemstimme' })])
      ])
    ]);

    card.appendChild(U.el('p', { class: 'muted small', text: eigen
      ? 'Jede eigene Aufnahme ersetzt dauerhaft die Computerstimme — und klingt so, wie bei euch im Dorf gesprochen wird.'
      : 'Noch keine eigene Aufnahme. Keine Sprachsynthese spricht Kesrouani — eine Muttersprachlerin in der Familie schon.' }));

    card.appendChild(U.el('button', { class: 'btn btn-primary btn-block',
      text: eigen ? '🎙️ Weiter aufnehmen' : '🎙️ Erste Aufnahme machen',
      onclick: function () { location.hash = '#/studio'; } }));
    return card;
  }

  function wordRow(w) {
    return U.el('div', { class: 'word-row' }, [
      U.el('div', { class: 'wr-ar', lang: 'ar', dir: 'rtl', text: w.ar }),
      U.el('div', { class: 'wr-mid' }, [
        U.el('div', { class: 'wr-tr', text: w.tr }),
        U.el('div', { class: 'wr-de', text: w.de })
      ]),
      Audio2.button(w.ar)
    ]);
  }

  function kpi(icon, val, label) {
    return U.el('div', { class: 'kpi' }, [
      U.el('div', { class: 'kpi-icon', text: icon }),
      U.el('div', { class: 'kpi-val', text: String(val) }),
      U.el('div', { class: 'kpi-lab', text: label })
    ]);
  }

  function quickCard(icon, title, sub, hash) {
    return U.el('button', { class: 'quick', onclick: function () { location.hash = hash; } }, [
      U.el('div', { class: 'quick-icon', text: icon }),
      U.el('div', { class: 'quick-title', text: title }),
      U.el('div', { class: 'quick-sub', text: sub })
    ]);
  }

  return { render: render, wordRow: wordRow };
})();
