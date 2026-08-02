# Sprache Lebanon App

Installierbare mobile Lern-App für libanesisches Arabisch. Der erste Prototyp verbindet Tagesziele, persönliche Vokabeln, Lernkarten und kurze Alltagssituationen.

## Lokal starten

```bash
python -m http.server 8080
```

Danach `http://localhost:8080/Sprache-Lebanon-App/` öffnen.

## Aktueller Funktionsumfang

- responsive PWA für iPhone und Android
- arabische Rechts-nach-links-Schrift
- eigener Wortschatz im lokalen Gerätespeicher
- Lernkarten mit „noch üben“ und „gewusst“
- erste Dialogübung auf Libanesisch
- Tagesfortschritt

## Roadmap

1. Nutzerkonten und geräteübergreifende Synchronisierung
2. Sprachaufnahme und Ausspracheanalyse
3. echte KI-Konversationen
4. systematischer Kurs für arabische Schrift
5. intelligentes Wiederholungssystem

Persönliche Vokabeln bleiben im Prototyp ausschließlich im Browser gespeichert.

---

## Ausgebaute App: `lubnene/`

Neben diesem Prototyp liegt im Ordner [`lubnene/`](lubnene/) eine ausgebaute
Version mit 494 übbaren Karten, vollständigem Schriftkurs, SM-2-Wiederholungs-
system, Dialogen, Grammatik und einem Kulturmodul „Reise durch den Libanon".

Sie nutzt **dieselben MP3-Aufnahmen** wie dieser Prototyp (157 Karten sprechen
mit echter Stimme) und ist ebenfalls als PWA installierbar. Damit sind die
Roadmap-Punkte 4 (Schriftkurs) und 5 (Wiederholungssystem) umgesetzt.

Dieser Prototyp hier bleibt unverändert bestehen.

```bash
python3 -m http.server 8080   # dann http://localhost:8080/lubnene/
```
