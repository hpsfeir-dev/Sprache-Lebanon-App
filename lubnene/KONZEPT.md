# Lubnēne — Konzept

Grundlage der App. Entstanden aus der Frage: Wie bringt man jemandem, der schon
Arabisch spricht, genau das Libanesische aus Kesrouan bei — und zwar so, dass es
zu zweit funktioniert?

---

## 1. Die Ausgangslage

Der übliche Zuschnitt von Arabisch-Lern-Apps passt hier an drei Stellen nicht:

**Falscher Dialekt.** Fast alles am Markt lehrt Hocharabisch (MSA) oder
Ägyptisch. MSA spricht in Rayfoun niemand am Küchentisch, und Ägyptisch klingt
in Kesrouan fremd. Der Unterschied ist nicht kosmetisch: `qahwa` → `ʾahwe`,
`ʿāyiz` → `baddi`, `mumkin` → `fīk`. Wer MSA lernt und dann in Jounieh Kaffee
bestellt, wird verstanden, klingt aber wie eine Nachrichtensendung.

**Falsches Niveau.** Der Nutzer spricht bereits Arabisch. Ein Kurs, der bei
„Das ist ein Haus" anfängt, ist Zeitverschwendung. Was fehlt, ist Anderes: die
Schrift, die dialektale Umformung dessen, was er schon kann, und die Formeln,
die man nicht aus Büchern lernt (`walaw`, `yislamo`, `alla ya3ṭīk el-3āfye`).

**Falsche Sozialform.** Zwei Menschen lernen zusammen, aber auf sehr
unterschiedlichem Stand. Ein einzelnes Konto vermischt die Fortschritte und
demotiviert beide.

## 2. Die Entscheidung: Kesrouan, nicht „Levante"

„Levantinisch" reicht von Aleppo bis Amman. Die App legt sich bewusst auf den
Klang von Jounieh, Rayfoun und Umgebung fest — die Mundart des christlichen
Kesrouan im Mount Lebanon. Fünf Merkmale ziehen sich durch das gesamte Material:

| Merkmal | Hocharabisch | Kesrouan |
|---|---|---|
| ق als Knacklaut | `qahwa`, `qalb` | `ʾahwe`, `ʾalb` |
| Imāla (ā → ē) | `bāb`, `lubnān`, `kān` | `bēb`, `Lubnēn`, `kēn` |
| Femininendung -e | `madrasa` | `madrase` |
| ث → t, ذ → d | `thalātha`, `hādha` | `tlēte`, `hayda` |
| Französische Alltagswörter | — | `bonjour`, `merci ktīr`, `tante` |

Die Imāla ist dabei die eigentliche Standortbestimmung. Beirut sagt eher `bāb`,
der Berg sagt `bēb`. Wer das trifft, wird nicht als Lernender gehört, sondern
als jemand von dort. Wo die Variation real ist, sagt die App das offen, statt
eine Form als allein richtig auszugeben.

Der Ortsbezug zieht sich bis in die Beispiele: Manouche aus dem `fern`, das
Service-Taxi den Berg hoch, die Seilbahn nach Harissa, Schnee in Faraya, das
Sonntagsessen nach der Messe.

## 3. Drei Spuren statt eines linearen Kurses

Weil das Vorwissen ungleich verteilt ist — Sprechen ja, Schrift nein —, gibt es
keinen erzwungenen Pfad. Drei Spuren laufen nebeneinander, jede für sich
sinnvoll:

**Spur A — Schrift von null.** Alle 28 Buchstaben mit allen vier
Positionsformen, die sechs nicht nach links verbindenden Buchstaben eigens
markiert, Vokalzeichen, Sonnen- und Mondbuchstaben. Dazu ein Handschrift-Trainer
auf Canvas: Vorlage in Grau, darüber mit Finger oder Maus nachfahren. Und, weil
die Familie auf WhatsApp so schreibt, das Chat-Alphabet mit den Zahlen
(2 3 5 6 7 8 9) gleich mit.

**Spur B — Dialekt-Feinschliff.** 371 Einträge in 18 Wortfeldern, jeder mit
arabischer Schrift, Umschrift, Chat-Schreibweise, deutscher Bedeutung und —
wo es zählt — einer Notiz zur Kesrouan-Aussprache. Dazu 12 Dialoge aus dem
realen Alltag vor Ort.

**Spur C — Grammatik als Nachschlagewerk.** 20 Lektionen, bewusst nicht als
Pflichtprogramm. Wer schon spricht, braucht keine Paradigmen zum Auswendiglernen,
sondern eine Stelle, an der steht, warum es `mnrūḥ` heißt und nicht `nrūḥ`.
Dazu 15 vollständig konjugierte Kernverben.

## 4. Der Lernmotor

**Spaced Repetition (SM-2).** Jede Karte trägt einen Leichtigkeitsfaktor und
ein Wiederholungsintervall. Vier Bewertungen (nochmal / schwer / gut / einfach)
steuern, wann sie wiederkommt. Typischer Verlauf bei „gut": 1 → 3 → 8 → 20 → 50
Tage. Ein Fehler setzt auf morgen zurück und senkt die Leichtigkeit — die Karte
kommt danach dichter.

**Wechselnde Aufgabentypen.** Eine Vokabel gilt erst als gekonnt, wenn sie in
mehreren Richtungen sitzt. Deshalb rotiert der Drill:

| Typ | Ab wann | Was es trainiert |
|---|---|---|
| Erkennen (AR → DE) | sofort | passives Verstehen |
| Produzieren (DE → AR) | sofort | aktives Abrufen |
| Karteikarte | sofort | Selbsteinschätzung |
| Hören | sofort | Verstehen ohne Schriftbild |
| Umschrift tippen | ab 1. Wiederholung | genaue Lautform |
| Arabisch schreiben | ab 2. Wiederholung | Schreibkompetenz |
| Lückentext | wenn Beispielsatz da | Wort im Satzkontext |

Die Schwierigkeit wächst also mit der Karte mit, nicht mit einem globalen Level.

**Großzügige Bewertung bei Eingaben.** Wer `3ende`, `ende` oder `ʿende` tippt,
hat recht. Diakritika und Umschriftvarianten werden vor dem Vergleich
normalisiert — es geht um die Sprache, nicht um Tippgenauigkeit. Bei arabischer
Eingabe werden Vokalzeichen und Alif-Varianten ebenso großzügig behandelt.

## 5. Zu zweit lernen

**Zwei Profile, getrennter Lernstand.** Jedes Profil hat eigene
Wiederholungsdaten, eigene Serie, eigene XP. Wer weiter ist, zieht den anderen
nicht in ein falsches Tempo.

**Gemeinsame eigene Wörter.** Die selbst angelegte Liste gehört beiden — was
einer aufschnappt, übt der andere mit. Nur der jeweilige Lernstand dazu bleibt
getrennt.

**Duell-Modus.** Beide an einem Gerät, abwechselnd, mit Punkten und
Serienbonus. Entscheidend: Jede Antwort fließt in den echten Lernstand des
jeweiligen Spielers ein. Das Spiel ist kein Nebenschauplatz, sondern eine
zweite Form derselben Übung.

## 6. Eigene Wörter

Der ausdrücklich gewünschte Kern. Was im Alltag auffällt — ein Wort der
Schwiegermutter, ein Ausdruck aus dem Dorf — wird eingetragen und ist damit
sofort im normalen Übungspool: gleicher Wiederholungsrhythmus, gleiche
Aufgabentypen, gleiche Statistik. Kein getrennter Bereich zweiter Klasse.

Zum Eintippen der arabischen Schrift gibt es eine eingebaute Bildschirmtastatur
im üblichen arabischen Layout — ein arabisches Systemlayout ist nicht nötig.

## 7. Technische Grundsatzentscheidung

**Keine Abhängigkeiten, kein Build, kein Server.** Reines HTML, CSS und
JavaScript. Die App startet per Doppelklick auf `index.html`, läuft offline,
funktioniert auf dem Handy genauso wie auf dem Rechner.

Der Grund ist nicht Bequemlichkeit, sondern Haltbarkeit: Eine App, die man in
fünf Jahren noch öffnen kann, ohne dass ein Paketmanager etwas nachlädt oder
ein Framework die Hauptversion gewechselt hat. Der Lernstand liegt im
Browserspeicher und lässt sich als Datei sichern und auf ein anderes Gerät
übertragen.

**Sprachausgabe** nutzt die Systemstimme. Auf iOS, macOS und Android ist eine
arabische Stimme meist vorhanden; fehlt sie, sagt die App das offen und
verweist auf die Umschrift, statt stumm zu bleiben.

## 8. Was bewusst nicht drin ist

- **Kein Herzchen-System, keine Werbung, kein Abo.** Nichts, was zwischen dich
  und das Lernen tritt.
- **Keine erfundene Aussprache-Bewertung.** Ohne echte Spracherkennung wäre eine
  „Aussprache-Note" geraten — schlimmer als keine.
- **Kein Hocharabisch-Zweig.** Wer MSA will, findet das überall. Diese App macht
  eine Sache, dafür richtig.

## 9. Naheliegende Erweiterungen

- Eigene Audioaufnahmen: die Frau spricht Wörter selbst ein — die verlässlichste
  Aussprachequelle überhaupt und besser als jede synthetische Stimme.
- Fotokarten für eigene Wörter.
- Wortfelder für spezielle Anlässe: Hochzeit, Taufe, Beileidsbesuch.
- Gemeinsame Wochenziele für beide Profile.

---

# Teil 2 — Zusammenführung mit Sprache-Lebanon-App

## 10. Was zusammenkam

Der bestehende Prototyp im Wurzelverzeichnis und diese App ergänzten sich fast
lückenlos:

| Der Prototyp brachte mit | Diese App brachte mit |
|---|---|
| 173 echte MP3-Aufnahmen | 371 Wörter in 18 Wortfeldern |
| PWA: installierbar, Service Worker | Vollständiger Schriftkurs, 28 Buchstaben |
| Bilder aus dem Libanon | SM-2 Wiederholungssystem |
| 36 Kernwörter, 5 Lektionen | 12 Dialoge, 20 Grammatiklektionen |

Die Roadmap des Prototyps nannte als Punkt 4 „systematischer Kurs für arabische
Schrift" und als Punkt 5 „intelligentes Wiederholungssystem". Beides ist damit
eingelöst.

**Die alte App bleibt unangetastet** und läuft weiter im Wurzelverzeichnis.
Die neue liegt in `lubnene/` und greift über relative Pfade auf dieselben
Audiodateien zu — nichts wurde verschoben, nichts überschrieben.

## 11. Echte Stimme statt Synthesizer

`assets/js/core/audio.js` schlägt jeden arabischen Text in `window.YALLA_AUDIO`
nach. Die Zuordnung läuft über normalisiertes Arabisch, damit Vokalzeichen,
Alif-Varianten (أ إ آ → ا), Tāʾ marbūṭa und Satzzeichen keinen Treffer
verhindern. Nur wenn keine Aufnahme existiert, übernimmt die Systemstimme.

Ergebnis: **157 von 494 Karten** sprechen mit echter Stimme. Ein gefülltes
Lautsprechersymbol (🔊 auf grünem Grund) zeigt an, wo das der Fall ist.

Die 92 vertonten Sätze wurden zu **13 Situationsgruppen** aufbereitet — vom
Bäcker über das Service-Taxi bis zu vier libanesischen Witzen — mit eigener
Umschrift und deutscher Übersetzung, und sind als normale SRS-Karten übbar.

## 12. Reise durch den Libanon

Aus der Kulturübersicht „A Cultural Glimpse at Lebanon" (Waad Sleiman) wurde ein
eigenes Modul mit drei Zugängen:

**Zeitreise** — acht Stationen von den Phöniziern bis heute. Der didaktische
Kniff: Die Phönizier erfanden an dieser Küste das Alphabet und trugen es ins
Mittelmeer. Damit bekommt der Schriftkurs eine Herkunftsgeschichte, die genau
dort beginnt, wo die Familie herkommt. Jede Station bringt ihre eigenen Wörter
mit — etwa die türkischen Lehnwörter aus 400 Jahren osmanischer Zeit
(`doghre`, `ʾōḍa`, `bass`), die man täglich benutzt, ohne es zu wissen.

**Orte** — acht Orte mit Bild, arabischem Namen und Wortschatz. Für Harissa,
Jeita, Rayfoun und die Seilbahn verweisen sie direkt auf die passenden
vertonten Sätze.

**Hocharabisch-Brücke** — sechs Kapitel zur Diglossie: warum gesprochen und
geschrieben zwei verschiedene Sprachformen sind, wie man MSA-Wörter in den
Dialekt umrechnet, was beim Lesen zusätzlich auftaucht (Fälle, Nunation, Dual)
und getrost übersprungen werden darf, das Wurzelprinzip, das Lesen ohne
Vokalzeichen und die östlich-arabischen Ziffern.

### Zur Quellenlage

Die Kulturübersicht lieferte die historischen Angaben; Texte, Auswahl und alle
Sprachbeispiele sind hier eigenständig verfasst.

Das ebenfalls bereitgestellte Lehrbuch **Faruk Abu-Chacra, „Arabische Grammatik
mit Übungen" (Buske Verlag, ISBN 978-3-87548-739-8)** ist urheberrechtlich
geschützt. Aus ihm wurde **nichts übernommen** — weder Text noch Beispielsätze,
Übungen oder Tabellen. Grammatische Regeln als solche sind nicht schutzfähig;
die Hocharabisch-Brücke erklärt sie mit eigenen Worten und eigenen Beispielen.
Wer tiefer in die MSA-Grammatik will, sollte das Buch selbst benutzen — diese
App ersetzt es nicht und will das auch nicht.

## 13. Das Libanon-Theme

Weg vom dunklen Grün, hin zu den Farben des Landes: Zederngrün und Flaggenrot,
Mittelmeerblau, Sonnengold und Sandstein auf hellem, warmem Grund. Die Zeitleiste
läuft als Farbverlauf von Meerblau über Grün und Gold bis Rot — von der Antike
bis in die Gegenwart. Karten tragen oben einen farbigen Streifen, der ihre
Kategorie anzeigt.

## 14. Als App installierbar

`manifest.webmanifest`, ein eigenes Zedern-Icon und ein Service Worker machen
die App auf dem Handy installierbar. Der Service Worker legt die Programmdateien
beim ersten Aufruf ab und nimmt Audiodateien und Bilder nach der ersten
Benutzung mit — danach läuft alles offline, Aufnahmen inklusive.
