/* Sätze mit echter Aufnahme. Der arabische Wortlaut entspricht exakt den
   Schlüsseln in window.YALLA_AUDIO — dadurch hat jede Karte hier echte
   Aussprache statt Systemstimme. */
var DATA = window.DATA || {};

DATA.phraseSets = [
{ id:'ps01', title:'Ankommen & Kennenlernen', icon:'🤝',
  desc:'Die ersten Minuten, wenn du bei der Familie ankommst.',
  items:[
  {ar:'مرحبا، كيفك؟',tr:'marḥaba, kīfak?',de:'Hallo, wie geht es dir?'},
  {ar:'منيح، الحمدلله',tr:'mnīḥ, el-ḥamdilla',de:'Gut, Gott sei Dank.'},
  {ar:'تشرفنا',tr:'tsharrafna',de:'Sehr erfreut.'},
  {ar:'أهلا وسهلا فيك',tr:'ahla w sahla fīk',de:'Herzlich willkommen.'},
  {ar:'كيف العيلة؟',tr:'kīf el-3ēle?',de:'Wie geht es der Familie?'},
  {ar:'مشتاقلك',tr:'meshtēʾlak',de:'Ich vermisse dich.'},
  {ar:'مشتاقينلكن كتير',tr:'meshtēʾīnlkon ktīr',de:'Wir vermissen euch sehr.'},
  {ar:'اشتقنالكن كتير',tr:'shtaʾnēlkon ktīr',de:'Wir haben euch sehr vermisst.'},
  {ar:'تفضلوا فوتوا',tr:'tfaḍḍalu fūtu',de:'Kommt bitte herein.'},
  {ar:'البيت بيتكن',tr:'el-bēt bētkon',de:'Das Haus ist euer Haus.'},
  {ar:'هيدي مرتي',tr:'haydi marte',de:'Das ist meine Frau.'},
  {ar:'هيدا جوزي',tr:'hayda jōze',de:'Das ist mein Mann.'},
  {ar:'منعرف هالعيلة',tr:'mna3ref hal-3ēle',de:'Wir kennen diese Familie.'},
  {ar:'صار الواحد من أهل البيت',tr:'ṣār el-wēḥad men ahl el-bēt',de:'Man gehört jetzt zur Familie.'},
  {ar:'يعطيك العافية',tr:'ya3ṭīk el-3āfye',de:'Gott gebe dir Kraft.'},
  {ar:'أهلا! أول مرة بتجي عكسروان؟',tr:'ahla! awwal marra betje 3a Kesrwēn?',de:'Hallo! Bist du zum ersten Mal im Kesrouan?'},
  {ar:'إيه، أول مرة وبدي اتعلم لبناني',tr:'ē, awwal marra w baddi et3allam lebnēne',de:'Ja, zum ersten Mal — und ich will Libanesisch lernen.'},
  {ar:'لأ، بجي عَ جونية كتير',tr:'laʾ, beje 3a Jūniyye ktīr',de:'Nein, ich komme oft nach Jounieh.'}
]},

{ id:'ps02', title:'Café & Bäckerei', icon:'☕',
  desc:'Kaffee bestellen und Manouche holen.',
  items:[
  {ar:'أهلا! شو بتحب تشرب؟',tr:'ahla! shu betḥebb teshrab?',de:'Hallo! Was möchtest du trinken?'},
  {ar:'بدي قهوة، لو سمحت',tr:'baddi ʾahwe, law samaḥt',de:'Ich möchte einen Kaffee, bitte.'},
  {ar:'بدي مي، شكراً',tr:'baddi mayy, shukran',de:'Ich möchte Wasser, danke.'},
  {ar:'بدنا قهوة بلا سكر',tr:'badna ʾahwe bala sekkar',de:'Wir möchten Kaffee ohne Zucker.'},
  {ar:'تفضّل! شو بدّك؟',tr:'tfaḍḍal! shu baddak?',de:'Bitte sehr! Was möchtest du?'},
  {ar:'بدي منقوشة زعتر',tr:'baddi manʾūshe za3tar',de:'Ich möchte eine Manouche mit Zaatar.'},
  {ar:'وحدة جبنة لو سمحت',tr:'waḥde jebne law samaḥt',de:'Eine mit Käse, bitte.'},
  {ar:'نص زعتر نص جبنة',tr:'noṣṣ za3tar noṣṣ jebne',de:'Halb Zaatar, halb Käse.'},
  {ar:'سخنة لو سمحت',tr:'sekhne law samaḥt',de:'Heiß, bitte.'},
  {ar:'بدون بندورة',tr:'bidūn banadūra',de:'Ohne Tomate.'}
]},

{ id:'ps03', title:'Im Restaurant', icon:'🍽️',
  desc:'Bestellen, loben, zahlen.',
  items:[
  {ar:'جيب لنا حمص وتبولة',tr:'jīb lna ḥommoṣ w tabbūle',de:'Bring uns Hummus und Tabbouleh.'},
  {ar:'شو بتنصحنا؟',tr:'shu betenṣaḥna?',de:'Was empfiehlst du uns?'},
  {ar:'شو بتنصحني؟',tr:'shu betenṣaḥne?',de:'Was empfiehlst du mir?'},
  {ar:'الأكل كتير طيب',tr:'el-akel ktīr ṭayyeb',de:'Das Essen ist sehr lecker.'},
  {ar:'بعد في كبة؟',tr:'ba3d fī kebbe?',de:'Gibt es noch Kibbeh?'},
  {ar:'عندي حساسية',tr:'3ende ḥasēsiyye',de:'Ich habe eine Allergie.'},
  {ar:'الحساب لو سمحت',tr:'el-ḥsēb law samaḥt',de:'Die Rechnung, bitte.'},
  {ar:'قديش الحساب؟',tr:'ʾaddēsh el-ḥsēb?',de:'Wie viel macht die Rechnung?'},
  {ar:'بعدني ما أكلت',tr:'ba3dne ma akalet',de:'Ich habe noch nicht gegessen.'},
  {ar:'أكلت بس باكل كمان',tr:'akalet bass bēkol kamēn',de:'Ich habe gegessen, aber ich esse noch etwas.'},
  {ar:'شو عاملة أكل؟',tr:'shu 3āmle akel?',de:'Was hast du gekocht?'},
  {ar:'حبيبي، أكلت؟',tr:'ḥabībe, akalet?',de:'Schatz, hast du gegessen?'}
]},

{ id:'ps04', title:'Service-Taxi & Weg', icon:'🚕',
  desc:'Einsteigen, Ziel nennen, aussteigen.',
  items:[
  {ar:'لوين رايح؟',tr:'la-wēn rāyeḥ?',de:'Wohin fährst du?'},
  {ar:'لوين بدك تروح؟',tr:'la-wēn baddak trūḥ?',de:'Wohin willst du?'},
  {ar:'عَ ريفون لو سمحت',tr:'3a Rayfūn law samaḥt',de:'Nach Rayfoun, bitte.'},
  {ar:'عالحمرا، لو سمحت',tr:'3al-Ḥamra, law samaḥt',de:'Nach Hamra, bitte.'},
  {ar:'بدّي روح عالتلفريك',tr:'baddi rūḥ 3at-téléférique',de:'Ich möchte zur Seilbahn.'},
  {ar:'عالتلفريك لو سمحت',tr:'3at-téléférique law samaḥt',de:'Zur Seilbahn, bitte.'},
  {ar:'هيدا الطريق عحريصا؟',tr:'hayda eṭ-ṭarīʾ 3a Ḥarīṣa?',de:'Ist das die Straße nach Harissa?'},
  {ar:'قديش بدها وقت؟',tr:'ʾaddēsh badda waʾet?',de:'Wie lange dauert es?'},
  {ar:'قديش بتاخد الطريق؟',tr:'ʾaddēsh betēkhod eṭ-ṭarīʾ?',de:'Wie lange dauert die Fahrt?'},
  {ar:'في عجقة عالطريق؟',tr:'fī 3ajʾa 3aṭ-ṭarīʾ?',de:'Ist Stau auf der Straße?'},
  {ar:'وقّف هون لو سمحت',tr:'waʾʾef hōn law samaḥt',de:'Halten Sie bitte hier.'},
  {ar:'شكلي ضيعت الطريق',tr:'shekle ḍayya3et eṭ-ṭarīʾ',de:'Ich glaube, ich habe mich verfahren.'},
  {ar:'علقنا بالعجقة، رح نتأخر',tr:'3leʾna bel-3ajʾa, raḥ net’akhkhar',de:'Wir stecken im Stau, wir kommen später.'}
]},

{ id:'ps05', title:'Seilbahn & Harissa', icon:'⛪',
  desc:'Hinauf zur Marienstatue über Jounieh.',
  items:[
  {ar:'وين شباك التذاكر؟',tr:'wēn shebbēk et-tazēker?',de:'Wo ist der Ticketschalter?'},
  {ar:'تذكرتين لو سمحت',tr:'tazkartēn law samaḥt',de:'Zwei Tickets, bitte.'},
  {ar:'من هون منوصل عحريصا؟',tr:'men hōn mnūṣal 3a Ḥarīṣa?',de:'Kommen wir von hier nach Harissa?'},
  {ar:'وين المدخل؟',tr:'wēn el-madkhal?',de:'Wo ist der Eingang?'},
  {ar:'بخاف شوي من العلو',tr:'bkhāf shwayy men el-3elu',de:'Ich habe etwas Höhenangst.'},
  {ar:'فينا نرجع مشي؟',tr:'fīna nerja3 mashe?',de:'Können wir zu Fuß zurück?'},
  {ar:'المنظر بيجنن',tr:'el-manẓar bijannen',de:'Die Aussicht ist der Wahnsinn.'},
  {ar:'المنظر من فوق بيجنن',tr:'el-manẓar men fōʾ bijannen',de:'Die Aussicht von oben ist der Wahnsinn.'},
  {ar:'مسموح نصور؟',tr:'masmūḥ nṣawwer?',de:'Darf man fotografieren?'},
  {ar:'قديش بتطول الجولة؟',tr:'ʾaddēsh betṭawwel ej-jawle?',de:'Wie lange dauert die Tour?'}
]},

{ id:'ps06', title:'Jeita & Ausflug', icon:'🏞️',
  desc:'Grotte, Boot, Meer.',
  items:[
  {ar:'المغارة مفتوحة اليوم؟',tr:'el-maghāra meftūḥa el-yōm?',de:'Ist die Grotte heute offen?'},
  {ar:'في جولة بالقارب؟',tr:'fī jawle bel-ʾāreb?',de:'Gibt es eine Bootstour?'},
  {ar:'الصخر كتير حلو',tr:'eṣ-ṣakhr ktīr ḥelu',de:'Der Fels ist wunderschön.'},
  {ar:'بدنا دليل يحكي عربي',tr:'badna dalīl yeḥke 3arabe',de:'Wir möchten einen Führer, der Arabisch spricht.'},
  {ar:'بدنا نتمشى عالبحر',tr:'badna netmasha 3al-baḥer',de:'Wir möchten am Meer spazieren.'}
]},

{ id:'ps07', title:'Rayfoun & der Berg', icon:'🏔️',
  desc:'Oben im Dorf, wo die Luft kälter ist.',
  items:[
  {ar:'وين ساحة ريفون؟',tr:'wēn sēḥet Rayfūn?',de:'Wo ist der Dorfplatz von Rayfoun?'},
  {ar:'الجو أبرد هون',tr:'ej-jaww abrad hōn',de:'Das Wetter ist hier oben kälter.'},
  {ar:'الطريق طالعة كتير',tr:'eṭ-ṭarīʾ ṭāl3a ktīr',de:'Die Straße steigt stark an.'},
  {ar:'الضيعة هادية وحلوة',tr:'eḍ-ḍay3a hēdye w ḥelwe',de:'Das Dorf ist ruhig und schön.'},
  {ar:'بدنا نتمشى شوي',tr:'badna netmasha shwayy',de:'Wir möchten ein bisschen spazieren.'},
  {ar:'منرجع قبل العتمة',tr:'mnerja3 ʾabl el-3etme',de:'Wir kommen vor der Dunkelheit zurück.'},
  {ar:'بدنا ناكل أكل لبناني',tr:'badna nēkol akel lebnēne',de:'Wir möchten libanesisch essen.'}
]},

{ id:'ps08', title:'Einkaufen & Handeln', icon:'🛒',
  desc:'Preise, Verhandeln, Bezahlen.',
  items:[
  {ar:'قديش حق هيدا؟',tr:'ʾaddēsh ḥaʾʾ hayda?',de:'Was kostet das?'},
  {ar:'بدي كيلو، لو سمحت',tr:'baddi kīlo, law samaḥt',de:'Ein Kilo, bitte.'},
  {ar:'بدي كيلو كرز',tr:'baddi kīlo karaz',de:'Ein Kilo Kirschen.'},
  {ar:'بدي كرز بلدي',tr:'baddi karaz balade',de:'Ich möchte einheimische Kirschen.'},
  {ar:'عطيني أحسن نوع',tr:'3aṭīne aḥsan naw3',de:'Gib mir die beste Sorte.'},
  {ar:'فيك تعمللي سعر منيح؟',tr:'fīk ta3melle se3er mnīḥ?',de:'Kannst du mir einen guten Preis machen?'},
  {ar:'غالي شوي',tr:'ghāle shwayy',de:'Etwas teuer.'},
  {ar:'في أرخص؟',tr:'fī arkhaṣ?',de:'Gibt es etwas Günstigeres?'},
  {ar:'معي كاش',tr:'ma3e cash',de:'Ich habe Bargeld dabei.'},
  {ar:'فيني إدفع كرت؟',tr:'fīne edfa3 kart?',de:'Kann ich mit Karte zahlen?'},
  {ar:'هيدا السعر بالدولار أو بالليرة؟',tr:'hayda es-se3er bed-dolār aw bel-līra?',de:'Ist der Preis in Dollar oder in Lira?'}
]},

{ id:'ps09', title:'Libanesischer Alltag', icon:'🔌',
  desc:'Strom, Wasser, Internet — die täglichen Themen im Land.',
  items:[
  {ar:'قطعت الكهربا',tr:'ʾeṭ3et el-kahraba',de:'Der Strom ist ausgefallen.'},
  {ar:'اشتغل المولد؟',tr:'shteghal el-mwallad?',de:'Läuft der Generator?'},
  {ar:'قطعت الكهربا، اشتغل المولد؟',tr:'ʾeṭ3et el-kahraba, shteghal el-mwallad?',de:'Der Strom ist weg — läuft der Generator?'},
  {ar:'ما في مي',tr:'ma fī mayy',de:'Es gibt kein Wasser.'},
  {ar:'ما في مي بالبيت، مين مندقله؟',tr:'ma fī mayy bel-bēt, mīn mndeʾʾlo?',de:'Kein Wasser im Haus — wen rufen wir an?'},
  {ar:'مين فينا ندقله؟',tr:'mīn fīna ndeʾʾlo?',de:'Wen können wir anrufen?'},
  {ar:'الإنترنت كتير بطيء',tr:'el-internet ktīr baṭīʾ',de:'Das Internet ist sehr langsam.'},
  {ar:'الشاحن ما عم يشتغل',tr:'esh-shēḥen ma 3am yeshteghel',de:'Das Ladegerät funktioniert nicht.'},
  {ar:'ما في إرسال هون',tr:'ma fī ersēl hōn',de:'Hier ist kein Empfang.'}
]},

{ id:'ps10', title:'Apotheke & Gesundheit', icon:'💊',
  desc:'Wenn etwas zwickt.',
  items:[
  {ar:'وين أقرب صيدلية؟',tr:'wēn aʾrab ṣaydaliyye?',de:'Wo ist die nächste Apotheke?'},
  {ar:'راسي عم يوجعني',tr:'rāse 3am yūja3ne',de:'Mein Kopf tut weh.'},
  {ar:'بدي دوا للمعدة',tr:'baddi dawa lal-ma3de',de:'Ich brauche etwas für den Magen.'},
  {ar:'قديش مرة بالنهار؟',tr:'ʾaddēsh marra ben-nhār?',de:'Wie oft am Tag?'},
  {ar:'لازم شوف حكيم؟',tr:'lēzem shūf ḥakīm?',de:'Muss ich zum Arzt?'}
]},

{ id:'ps11', title:'Telefon & Verabreden', icon:'📞',
  desc:'Treffpunkt ausmachen, wenn die Verbindung mal wieder wackelt.',
  items:[
  {ar:'ألو، سامعني؟',tr:'alō, sēm3ne?',de:'Hallo, hörst du mich?'},
  {ar:'الصوت عم يقطع',tr:'eṣ-ṣōt 3am yeʾṭa3',de:'Die Verbindung bricht ab.'},
  {ar:'وين منلتقي؟',tr:'wēn mneltaʾe?',de:'Wo treffen wir uns?'},
  {ar:'منلتقي الساعة سبعة',tr:'mneltaʾe es-sē3a sab3a',de:'Wir treffen uns um sieben.'},
  {ar:'إذا تأخرت دقلي',tr:'iza t’akhkharet deʾʾle',de:'Wenn du dich verspätest, ruf mich an.'},
  {ar:'ببعتلك اللوكيشن',tr:'bab3atlak el-location',de:'Ich schicke dir den Standort.'}
]},

{ id:'ps12', title:'Meinung sagen', icon:'💭',
  desc:'Zustimmen, widersprechen, nachfragen.',
  items:[
  {ar:'معك حق',tr:'ma3ak ḥaʾʾ',de:'Du hast recht.'},
  {ar:'برأيي هيدا أحسن',tr:'bra’ye hayda aḥsan',de:'Meiner Meinung nach ist das besser.'},
  {ar:'مش مقتنع كتير',tr:'mesh meʾtene3 ktīr',de:'Ich bin nicht so überzeugt.'},
  {ar:'فهمت عليك بس',tr:'fhemet 3alēk bass',de:'Ich verstehe dich, aber …'},
  {ar:'شو قصدك؟',tr:'shu ʾaṣdak?',de:'Was meinst du damit?'},
  {ar:'خبرني أكتر',tr:'khabberne aktar',de:'Erzähl mir mehr.'},
  {ar:'عنجد؟ خبرني أكتر',tr:'3anjadd? khabberne aktar',de:'Echt? Erzähl mir mehr.'},
  {ar:'ما بعرف شو قول',tr:'ma ba3ref shu ʾūl',de:'Ich weiß nicht, was ich sagen soll.'}
]},

{ id:'ps13', title:'Humor auf Libanesisch', icon:'😄',
  desc:'Vier Witze mit echter Aufnahme — wer die versteht, ist angekommen.',
  items:[
  {ar:'عم بمزح معك',tr:'3am bemzaḥ ma3ak',de:'Ich mache nur Spaß mit dir.'},
  {ar:'ضحكتني من قلبي',tr:'ḍaḥḥaketne men ʾalbe',de:'Du hast mich herzlich zum Lachen gebracht.'},
  {ar:'ما فهمت النكتة',tr:'ma fhemet en-nekte',de:'Ich habe den Witz nicht verstanden.'},
  {ar:'قلها مرة تانية',tr:'ʾella marra tēnye',de:'Sag ihn noch einmal.'},
  {ar:'هيدي قوية',tr:'haydi ʾawiyye',de:'Der war gut!'},
  {ar:'واحد كسول كتير، حط المنبّه بعيد… وبطل يقوم يطفيه!',tr:'wēḥad kaslēn ktīr, ḥaṭṭ el-mnabbeh b3īd… w baṭṭal yʾūm yeṭfī!',de:'Ein sehr fauler Mann stellte den Wecker weit weg … und stand dann gar nicht mehr auf, um ihn auszuschalten!'},
  {ar:'سألوه: ليش تأخرت؟ قال: جيت بكير بس الطريق تأخر!',tr:'sa’alū: lēsh t’akhkharet? ʾāl: jīt bakkīr bass eṭ-ṭarīʾ t’akhkhar!',de:'Sie fragten ihn: Warum kommst du zu spät? Er sagte: Ich war früh dran, aber die Straße war zu spät!'},
  {ar:'الأم قالت: الأكل جاهز. فجأة كل البيت صار يسمع منيح!',tr:'el-emm ʾālet: el-akel jēhez. fajʾa kell el-bēt ṣār yesma3 mnīḥ!',de:'Die Mutter sagte: Das Essen ist fertig. Plötzlich hörte das ganze Haus ausgezeichnet!'},
  {ar:'قال بدو يعمل دايت… طلب منقوشة زعتر لأن الزعتر أخضر!',tr:'ʾāl baddo ya3mel diet… ṭalab manʾūshe za3tar la’enn ez-za3tar akhḍar!',de:'Er sagte, er macht Diät … und bestellte eine Zaatar-Manouche, weil Zaatar ja grün ist!'}
]}
];

/* Die Sätze zusätzlich als übbare Karten in den normalen SRS-Pool geben. */
DATA.phrases = [];
DATA.phraseSets.forEach(function (set, si) {
  set.items.forEach(function (it, ii) {
    DATA.phrases.push({
      id: 'a' + (si + 1) * 100 + ii,
      deck: 'hoersaetze',
      ar: it.ar, tr: it.tr, de: it.de,
      az: '', note: set.title, phrase: true, setId: set.id
    });
  });
});
