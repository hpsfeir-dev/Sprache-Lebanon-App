# لبنيني · Lubnēne

**Libanesisch-Arabisch lernen — so wie man es in Jounieh und Rayfoun spricht.**

Die ausgebaute Lern-App dieses Projekts: Wortschatz, Schriftkurs, Dialoge,
Grammatik, Kulturgeschichte — und die **echten Aufnahmen** aus dem
Projektbestand statt einer Computerstimme.

> Die ursprüngliche Prototyp-App liegt unverändert im Wurzelverzeichnis und
> läuft weiter. Diese hier ist eigenständig und teilt sich mit ihr nur die
> MP3-Dateien.

## Starten

```bash
# aus dem Wurzelverzeichnis des Repos
python3 -m http.server 8080
# dann http://localhost:8080/lubnene/ öffnen
```

Auf dem Handy im Browser öffnen und „Zum Startbildschirm hinzufügen" — die App
ist als PWA installierbar und läuft danach offline, Aufnahmen inklusive.

## Was drin ist

| | |
|---|---|
| **494 übbare Karten** | 371 Wörter, 123 vertonte Sätze, dazu eure eigenen |
| **157 mit echter Stimme** | erkennbar am gefüllten grünen Lautsprecher |
| **28 Buchstaben** | alle vier Positionsformen, Handschrift-Trainer, Arabizi |
| **12 Dialoge** | Bäcker, Service-Taxi, Familienessen, Arzt, Markt, Faraya |
| **20 Grammatiklektionen** | plus 15 vollständig konjugierte Verben |
| **Reise durch den Libanon** | 8 Epochen, 8 Orte, 6 Kapitel Hocharabisch-Brücke |
| **Eigene Wörter** | mit arabischer Bildschirmtastatur |

## Besonderheiten

**Kesrouan-Klang.** ق wird zum Knacklaut (`ʾahwe`), ā wird zu ē (`bēb`,
`Lubnēn`), Femininendung `-e` — plus das selbstverständliche Französisch.

**Sieben Aufgabentypen**, die mit jeder Karte mitwachsen: erkennen, produzieren,
hören, Umschrift tippen, arabisch schreiben, Lückentext, Karteikarte.

**Spaced Repetition (SM-2).** Verlauf bei „gut": 1 → 3 → 8 → 20 → 50 Tage.

**Zwei Profile** mit getrenntem Lernstand, gemeinsamen eigenen Wörtern und einem
Duell-Modus für beide an einem Gerät.

## Bereiche

| Tab | Inhalt |
|---|---|
| Start | Tageslektion, Wort des Tages, Suche |
| Üben | Wortfelder, Fälliges, Zufallsmix, Hörtraining |
| Sätze | 13 Situationsgruppen mit echter Stimme |
| Schrift | Alphabet, Handschrift-Trainer, Arabizi |
| Reise | Zeitreise · Orte · Hocharabisch-Brücke |
| Grammatik | 20 Lektionen + Verbtabellen |
| Dialoge | mitlesen, anhören, eigene Rolle üben |
| Meine Wörter | anlegen, üben, sichern |
| Duell | zu zweit an einem Gerät |
| Fortschritt | Kennzahlen, Heatmap, Einstellungen |

## Sichern

Der Lernstand liegt lokal im Browser. Unter **Fortschritt → Einstellungen** als
JSON sichern und auf einem anderen Gerät laden.

---

Konzept und Begründungen: [KONZEPT.md](KONZEPT.md)

*Yalla — shwayy shwayy betṣīr.* 🌲
