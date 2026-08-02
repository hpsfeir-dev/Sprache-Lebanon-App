/* Reise durch den Libanon — Geschichte, Orte und die Brücke zum Hocharabischen.
   Historische Angaben nach der Kulturübersicht „A Cultural Glimpse at Lebanon“
   (Waad Sleiman); Texte und Sprachbeispiele hier eigenständig verfasst. */
var DATA = window.DATA || {};

DATA.timeline = [
{ id:'t01', era:'2800–1200 v. Chr.', title:'Die Phönizier', icon:'⚓', color:'sea',
  head:'Am Anfang steht ein Alphabet',
  text:'An dieser Küste — Tyros, Sidon, Byblos, Tripoli — lebte ein Volk von Händlern, das etwas erfand, ohne das du diesen Satz nicht lesen könntest: das Alphabet. Statt hunderter Bildzeichen genügten plötzlich rund zwei Dutzend Buchstaben für Laute. Die Phönizier trugen es mit ihren Schiffen durch das ganze Mittelmeer; über die Griechen wurde daraus das lateinische, über die Aramäer das arabische Alphabet. Gehandelt wurde mit Zedernholz, Olivenöl und Wein aus Byblos.',
  wow:'Das Alphabet, das du in dieser App lernst, und das, in dem dieser Satz geschrieben ist, sind entfernte Geschwister — beide gehen auf die phönizische Erfindung an eurer Küste zurück.',
  words:[
    {ar:'أبجدية',tr:'abjadiyye',de:'Alphabet'},
    {ar:'فينيقي',tr:'fīnīʾe',de:'phönizisch'},
    {ar:'مركب',tr:'markab',de:'Schiff'},
    {ar:'أرزة',tr:'arze',de:'Zeder'},
    {ar:'تجارة',tr:'tjēra',de:'Handel'},
    {ar:'بحر',tr:'baḥer',de:'Meer'}
  ]},

{ id:'t02', era:'875–333 v. Chr.', title:'Assyrer, Babylonier, Perser', icon:'🏹', color:'clay',
  head:'Drei Großreiche, ein widerspenstiger Küstenstreifen',
  text:'Ab 875 v. Chr. nahmen die Assyrer den phönizischen Städten ihre Unabhängigkeit. Byblos, Tyros und Sidon lehnten sich mehrfach auf — und wurden mehrfach zerstört. Danach kamen die Babylonier, unter denen Tyros erneut fiel, und ab 538 v. Chr. die Perser. Die phönizische Flotte diente Persien in den Perserkriegen, doch als die Abgaben zu drückend wurden, revoltierten die Städte wieder.',
  wow:'Ein Muster, das sich durch die ganze libanesische Geschichte zieht: Große Mächte kommen und gehen, die Menschen an dieser Küste bleiben — und richten sich wieder auf.',
  words:[
    {ar:'تاريخ',tr:'tērīkh',de:'Geschichte'},
    {ar:'مدينة',tr:'mdīne',de:'Stadt'},
    {ar:'حرب',tr:'ḥarb',de:'Krieg'},
    {ar:'حرية',tr:'ḥorriyye',de:'Freiheit'},
    {ar:'ثورة',tr:'tawra',de:'Aufstand'}
  ]},

{ id:'t03', era:'333–64 v. Chr.', title:'Die Griechen', icon:'🏛️', color:'sea',
  head:'Alexander kommt — und Tyros hält sechs Monate',
  text:'333 v. Chr. schlug Alexander der Große die Perser. Die meisten phönizischen Städte leisteten keinen Widerstand — Tyros schon, ganze sechs Monate lang. Danach legte sich eine griechische Schicht über die Region. Die Phönizier, immer weltoffen, übernahmen was ihnen nützte und handelten weiter.',
  wow:'Diese Offenheit für Fremdes ist geblieben. Wenn du heute in Kesrouan „bonjour" hörst und mit „bonjourēn" geantwortet wird — arabische Dualendung an einem französischen Wort —, dann ist das genau dieselbe Haltung.',
  words:[
    {ar:'يوناني',tr:'yūnēne',de:'griechisch'},
    {ar:'ثقافة',tr:'taʾēfe',de:'Kultur'},
    {ar:'لغة',tr:'lgha',de:'Sprache'},
    {ar:'ميناء',tr:'mīna',de:'Hafen'}
  ]},

{ id:'t04', era:'64 v. Chr. – 600 n. Chr.', title:'Die Römer', icon:'🏺', color:'gold',
  head:'Baalbek und die erste Rechtsschule der Welt',
  text:'Unter Rom blühte die Region wirtschaftlich und geistig auf. Es entstanden Tempel, Paläste, gepflasterte Straßen zwischen den Städten — und in Beirut die erste Rechtsschule der Geschichte. In Baalbek stehen bis heute die gewaltigsten römischen Tempel überhaupt.',
  wow:'Baalbek heißt auch „Stadt der Sonne". Die Tempel wurden so gebaut, dass sie vom Aufgang bis zum Untergang Sonnenlicht empfangen.',
  words:[
    {ar:'بعلبك',tr:'Ba3albak',de:'Baalbek'},
    {ar:'هيكل',tr:'haykal',de:'Tempel'},
    {ar:'شمس',tr:'shames',de:'Sonne'},
    {ar:'حجر',tr:'ḥajar',de:'Stein'},
    {ar:'قانون',tr:'ʾānūn',de:'Gesetz'}
  ]},

{ id:'t05', era:'ab dem 7. Jahrhundert', title:'Araber und Maroniten', icon:'⛪', color:'green',
  head:'Wie das Arabische kam — und der Berg seine eigene Identität behielt',
  text:'Mit der arabischen Eroberung wurde Arabisch zur Sprache der Region. Die Maroniten, deren Kirche sich nach der Römerzeit herausgebildet hatte, hielten dabei an ihrem Glauben und ihrer Identität fest — und zogen sich in die Berge des Mount Lebanon zurück. Genau dort, wo Rayfoun und Kesrouan liegen.',
  wow:'Deshalb klingt Kesrouan bis heute anders als die Küste: Bergdialekte bewahren Eigenheiten länger. Die starke Imāla — „bēb" statt „bāb" — ist so ein Überbleibsel.',
  words:[
    {ar:'جبل',tr:'jabal',de:'Berg'},
    {ar:'كنيسة',tr:'knīse',de:'Kirche'},
    {ar:'دير',tr:'dēr',de:'Kloster'},
    {ar:'إيمان',tr:'īmēn',de:'Glaube'},
    {ar:'ماروني',tr:'mārūne',de:'maronitisch'}
  ]},

{ id:'t06', era:'16. Jh. – 1918', title:'Vier Jahrhunderte Osmanen', icon:'🌙', color:'clay',
  head:'400 Jahre hinterlassen Spuren im Kochtopf',
  text:'Ab dem 16. Jahrhundert gehörte der Mount Lebanon zum Osmanischen Reich — vierhundert Jahre lang. So lange, dass unzählige Wörter, Gerichte, Kleidungsstücke, Umgangsformen und sogar Spiele türkischer Herkunft ins Libanesische übergingen.',
  wow:'Du benutzt osmanisches Erbe, ohne es zu merken: „doghre" (geradeaus), „ōḍa" (Zimmer) und „bass" (nur, aber) kommen alle aus dem Türkischen.',
  words:[
    {ar:'دغري',tr:'doghre',de:'geradeaus (türk.)'},
    {ar:'أوضة',tr:'ʾōḍa',de:'Zimmer (türk.)'},
    {ar:'بس',tr:'bass',de:'nur / aber (türk.)'},
    {ar:'طاولة',tr:'ṭāwle',de:'Tisch / Backgammon'},
    {ar:'سلطان',tr:'selṭān',de:'Sultan'}
  ]},

{ id:'t07', era:'1920–1943', title:'Französisches Mandat & Unabhängigkeit', icon:'🇱🇧', color:'red',
  head:'Der 22. November 1943',
  text:'Nach dem Zusammenbruch des Osmanischen Reichs kam die Region unter französisches Mandat. Als die neu gewählte Regierung 1943 die Mandatsartikel aus der Verfassung strich, ließen die Franzosen Parlamentsmitglieder verhaften. Die entkommenen Minister versammelten sich in der Zitadelle von Rashaya und im Haus des Parlamentspräsidenten und hielten die Regierung am Leben. Frankreich musste dem Willen des Volkes weichen und ließ die Gefangenen am 22. November 1943 frei — der Unabhängigkeitstag.',
  wow:'Aus der Mandatszeit stammt das Französische, das in Kesrouan bis heute selbstverständlich mitläuft: bonjour, merci, ascenseur, coiffeur, tante.',
  words:[
    {ar:'استقلال',tr:'esteʾlēl',de:'Unabhängigkeit'},
    {ar:'دولة',tr:'dawle',de:'Staat'},
    {ar:'علم',tr:'3alam',de:'Flagge'},
    {ar:'شعب',tr:'sha3b',de:'Volk'},
    {ar:'حكومة',tr:'ḥkūme',de:'Regierung'}
  ]},

{ id:'t08', era:'1975 – heute', title:'Prüfungen und Zusammenhalt', icon:'🤝', color:'sea',
  head:'Was zerbrochen wurde und was hielt',
  text:'Bürgerkrieg ab 1975, Invasionen, das Kriegsende 1990, die Ermordung Rafik Hariris 2005, der Krieg 2006. Ab Oktober 2019 Proteste gegen neue Steuern, dann der Absturz der Währung, die Pandemie — und im August 2020 die gewaltige Explosion im Hafen von Beirut mit Hunderten Toten und Tausenden Verletzten.',
  wow:'Nach der Explosion kamen die Menschen aus dem ganzen Land nach Beirut, räumten Trümmer weg, suchten Vermisste und öffneten ihre Häuser für Fremde. Über Jahrhunderte hat sich dasselbe gezeigt: Man hält zusammen — und man liebt das Leben.',
  words:[
    {ar:'سلام',tr:'salēm',de:'Frieden'},
    {ar:'أمل',tr:'amal',de:'Hoffnung'},
    {ar:'سوا',tr:'sawa',de:'zusammen'},
    {ar:'بيروت',tr:'Bayrūt',de:'Beirut'},
    {ar:'الدني حلوة',tr:'ed-denye ḥelwe',de:'Das Leben ist schön'}
  ]}
];

/* Orte — mit Bildern aus dem Projekt und, wo vorhanden, echten Aufnahmen. */
DATA.places = [
{ id:'p01', name:'Jounieh', ar:'جونيه', tr:'Jūniyye', icon:'🌊', region:'Kesrouan · Küste',
  img:'../harissa-jounieh.png',
  text:'Die Bucht unterhalb eures Bergs. Hafen, Promenade, Fischrestaurants — und die Talstation der Seilbahn hinauf nach Harissa.',
  phraseSet:'ps04',
  words:[{ar:'بحر',tr:'baḥer',de:'Meer'},{ar:'ميناء',tr:'mīna',de:'Hafen'},{ar:'سمك',tr:'samak',de:'Fisch'}]},

{ id:'p02', name:'Harissa', ar:'حريصا', tr:'Ḥarīṣa', icon:'⛪', region:'Kesrouan · 650 m',
  img:'../harissa-view.png',
  text:'Die Marienstatue „Notre Dame du Liban" über der Bucht, erreichbar mit der Seilbahn. Einer der wichtigsten Wallfahrtsorte des Landes — und der beste Blick auf Jounieh.',
  phraseSet:'ps05',
  words:[{ar:'تلفريك',tr:'téléférique',de:'Seilbahn'},{ar:'منظر',tr:'manẓar',de:'Aussicht'},{ar:'قداس',tr:'ʾeddēs',de:'Messe'}]},

{ id:'p03', name:'Rayfoun', ar:'ريفون', tr:'Rayfūn', icon:'🏔️', region:'Kesrouan · 1250 m',
  text:'Euer Dorf. Hoch genug, dass die Luft im Sommer kühl bleibt und der Blick bis zum Meer reicht. Von hier stammt der Klang, den diese App lehrt — mit der starken Imāla des Bergs.',
  phraseSet:'ps07',
  words:[{ar:'ضيعة',tr:'ḍay3a',de:'Dorf'},{ar:'ساحة',tr:'sēḥa',de:'Dorfplatz'},{ar:'هوا',tr:'hawa',de:'Luft'}]},

{ id:'p04', name:'Jeita-Grotte', ar:'مغارة جعيتا', tr:'Maghārat Jé3ita', icon:'💧', region:'Kesrouan · Nahr al-Kalb',
  img:'../jeita-grotto.png',
  text:'Ein Höhlensystem aus zwei Ebenen: die obere begehbar, die untere per Boot befahrbar. Kandidat für die neuen sieben Weltwunder der Natur — und nur wenige Kilometer von euch entfernt.',
  phraseSet:'ps06',
  words:[{ar:'مغارة',tr:'maghāra',de:'Grotte'},{ar:'قارب',tr:'ʾāreb',de:'Boot'},{ar:'صخر',tr:'ṣakhr',de:'Fels'}]},

{ id:'p05', name:'Byblos', ar:'جبيل', tr:'Jbeil', icon:'⚓', region:'Küste · nördlich',
  text:'Eine der ältesten durchgehend bewohnten Städte der Welt. Von hier kam der Wein, mit dem die Phönizier handelten — und der Name „Bibel" geht auf den Papyrushandel dieser Stadt zurück.',
  words:[{ar:'قلعة',tr:'ʾal3a',de:'Burg'},{ar:'أثار',tr:'ēthār',de:'Ruinen'},{ar:'نبيد',tr:'nbīd',de:'Wein'}]},

{ id:'p06', name:'Baalbek', ar:'بعلبك', tr:'Ba3albak', icon:'🏛️', region:'Bekaa-Ebene',
  text:'Die größten römischen Tempelanlagen der Welt, gebaut für Jupiter, Bacchus und Venus. Die Stadt der Sonne — die Tempel fangen das Licht vom Aufgang bis zum Untergang.',
  words:[{ar:'هيكل',tr:'haykal',de:'Tempel'},{ar:'عمود',tr:'3amūd',de:'Säule'},{ar:'شمس',tr:'shames',de:'Sonne'}]},

{ id:'p07', name:'Beirut', ar:'بيروت', tr:'Bayrūt', icon:'🏙️', region:'Hauptstadt',
  img:'../lebanon-culture.png',
  text:'Die Hauptstadt: Raouché-Felsen im Meer, Hamra, die Corniche. Hier stand die erste Rechtsschule der Geschichte — und hier hat die Stadt 2020 gezeigt, wie schnell ein ganzes Land zusammenrückt.',
  words:[{ar:'كورنيش',tr:'corniche',de:'Uferpromenade'},{ar:'صخرة',tr:'ṣakhra',de:'Fels'},{ar:'عاصمة',tr:'3āṣme',de:'Hauptstadt'}]},

{ id:'p08', name:'Bekaa & Faraya', ar:'البقاع', tr:'el-Beʾā3', icon:'🍇', region:'Hochebene & Berge',
  text:'Die fruchtbare Ebene hinter dem Bergkamm: Wein, Obst, Weite. Und über Kesrouan liegt Faraya, wo im Winter genug Schnee für die Skisaison fällt — Meer und Piste am selben Tag.',
  words:[{ar:'تلج',tr:'talej',de:'Schnee'},{ar:'كرم',tr:'karm',de:'Weinberg'},{ar:'وادي',tr:'wēde',de:'Tal'}]}
];

/* Brücke zum Hocharabischen — geschriebenes Arabisch IST Hocharabisch.
   Eigene Erklärungen und Beispiele; Gliederung orientiert sich am üblichen
   Aufbau einer MSA-Grammatik. */
DATA.msa = [
{ id:'m01', title:'Warum zwei Arabisch?', icon:'🔀',
  intro:'Du sprichst Libanesisch, aber jedes Schild, jede Zeitung und jedes Buch ist auf Hocharabisch. Das ist kein Widerspruch, sondern der Normalfall in der arabischen Welt — man nennt es Diglossie.',
  rows:[
   ['Situation','Was benutzt wird'],
   ['Zu Hause, auf der Straße, mit Freunden','Libanesisch (was diese App lehrt)'],
   ['Zeitung, Nachrichten, Bücher, Verträge','Hocharabisch (MSA)'],
   ['WhatsApp mit der Familie','Libanesisch — lateinisch oder arabisch geschrieben'],
   ['Predigt, Rede, Schule','Hocharabisch'],
   ['Lieder','meistens Dialekt']
  ],
  note:'Für dich heißt das: Zum Sprechen brauchst du den Dialekt. Zum Lesen und Schreiben brauchst du zusätzlich ein Grundgerüst Hocharabisch — aber weit weniger, als du denkst, denn der Wortschatz überschneidet sich stark.'},

{ id:'m02', title:'Dasselbe Wort, zwei Gesichter', icon:'👥',
  intro:'Die meisten Wörter sind identisch — sie klingen nur anders. Wenn du die Umformungsregeln kennst, kannst du geschriebene Wörter sofort in deinen Dialekt übersetzen und umgekehrt.',
  rows:[
   ['Geschrieben (MSA)','Gesprochen (Kesrouan)','Deutsch'],
   ['qahwa · قهوة','ʾahwe','Kaffee'],
   ['bayt · بيت','bēt','Haus'],
   ['kabīr · كبير','kbīr','groß'],
   ['madrasa · مدرسة','madrase','Schule'],
   ['thalātha · ثلاثة','tlēte','drei'],
   ['hādhā · هذا','hayda','dieser'],
   ['kāna · كان','kēn','er war']
  ],
  note:'Merke: Die Schrift bleibt gleich, die Aussprache ändert sich. قهوة steht da — du sprichst „ʾahwe“, ein Ägypter „ʾahwa“, ein Nachrichtensprecher „qahwa“.'},

{ id:'m03', title:'Was beim Lesen zusätzlich auftaucht', icon:'📖',
  intro:'Ein paar Dinge stehen im geschriebenen Arabisch, die im Dialekt einfach fehlen. Wenn du sie erkennst, kannst du sie beim Lesen überspringen — verstehen musst du sie, benutzen nicht.',
  rows:[
   ['Phänomen','Im Hocharabischen','Im Libanesischen'],
   ['Fälle (Endungen -u/-a/-i)','al-baytu, al-bayta','fällt komplett weg'],
   ['Nunation (-un/-an/-in)','baytun','fällt weg'],
   ['Dual (Zweizahl)','baytāni = zwei Häuser','meist bētēn oder „tnēn byūt“'],
   ['Weiblicher Plural beim Verb','yaktubna','gibt es nicht — eine Form für alle'],
   ['Verbstellung','Verb zuerst: kataba l-waladu','Subjekt zuerst: el-walad katab'],
   ['Verneinung','lā / lam / lan / mā','ma und mesh, sonst nichts']
  ],
  note:'Gute Nachricht: Fast alles auf dieser Liste macht Hocharabisch komplizierter, nicht dein Libanesisch. Beim Lesen erkennst du die Endungen und ignorierst sie — sie stehen ohnehin meist nicht als Vokalzeichen da.'},

{ id:'m04', title:'Die Wurzel — der Schlüssel zum Wörterbuch', icon:'🌱',
  intro:'Arabische Wörter sind aus Wurzeln gebaut, meist drei Konsonanten. In diese Wurzel werden Vokale und Zusätze eingesetzt. Wer das Prinzip versteht, errät die Hälfte des Wortschatzes.',
  rows:[
   ['Wurzel k-t-b (schreiben)','Wort','Deutsch'],
   ['kataba · كتب','katab','er schrieb'],
   ['kitāb · كتاب','ktēb','Buch'],
   ['maktab · مكتب','makteb','Büro, Schreibtisch'],
   ['maktaba · مكتبة','maktabe','Bibliothek, Buchladen'],
   ['kātib · كاتب','kēteb','Schreiber, Autor'],
   ['maktūb · مكتوب','maktūb','geschrieben, Brief']
  ],
  note:'Dasselbe Muster überall: d-r-s ergibt dares (Unterricht), madrase (Schule), mudarres (Lehrer). Wenn du ein unbekanntes Wort siehst, suche die drei Konsonanten — oft kennst du die Wurzel schon.'},

{ id:'m05', title:'Lesen ohne Vokalzeichen', icon:'👓',
  intro:'Die größte Hürde beim Lesen: In echten Texten stehen die kurzen Vokale nicht da. كتب kann katab, kutib, kutub oder kutiba heißen. Muttersprachler erraten es aus dem Zusammenhang — und du wirst es auch.',
  rows:[
   ['Wo Vokalzeichen stehen','Warum'],
   ['Koran und heilige Texte','Der Wortlaut muss eindeutig sein'],
   ['Kinderbücher, Lehrbücher','Zum Lesenlernen'],
   ['Gedichte, seltene Namen','Zur Vermeidung von Missverständnissen'],
   ['Zeitung, Roman, Straßenschild, WhatsApp','Nirgends — hier musst du raten lernen']
  ],
  note:'Übungsstrategie: Lies zuerst Wörter, die du schon sprichst. Wenn du بيت siehst und „bēt“ im Kopf hast, brauchst du keine Vokalzeichen. Genau deshalb ist dein gesprochenes Arabisch dein größter Vorteil beim Lesenlernen.'},

{ id:'m06', title:'Zahlen und Ziffern lesen', icon:'🔢',
  intro:'Im Libanon siehst du beide Ziffernsysteme — die „arabischen“ Ziffern, die wir benutzen, und die östlich-arabischen. Preisschilder, Autokennzeichen und Uhren können in beiden stehen.',
  rows:[
   ['Ziffer','Östlich-arabisch','Name'],
   ['0','٠','ṣefr'],
   ['1','١','wēḥad'],
   ['2','٢','tnēn'],
   ['3','٣','tlēte'],
   ['4','٤','arb3a'],
   ['5','٥','khamse'],
   ['6','٦','sette'],
   ['7','٧','sab3a'],
   ['8','٨','tmēne'],
   ['9','٩','tes3a']
  ],
  note:'Achtung bei ٥ und ٦: Die Fünf sieht aus wie unsere Null, die Sechs wie unsere Sieben. Zahlen werden übrigens von links nach rechts geschrieben — auch mitten im rechtsläufigen Text.'}
];
