# Patientenpfade – Klinikum St. Georg Leipzig

> **Fachmodule: Zentrale Notaufnahme (ZNA) & Onkologie**
>
> Eine hochspezialisierte, modulare Progressive Web Application (PWA) zur Bereitstellung evidenzbasierter klinischer Behandlungspfade und Standard Operating Procedures (SOPs) direkt am Point-of-Care.

---

## 1. Systemübersicht

Die Anwendung "Patientenpfade" ist ein digitales Entscheidungswerkzeug für medizinisches Personal. Sie konsolidiert komplexe medizinische Leitlinien in ein für Mobilgeräte optimiertes, interaktives Format.

**Technologischer Kern:**
Die App ist als **Single-Page-Application (SPA)** in reinem Vanilla JavaScript (ES5-kompatibel) entwickelt. Sie benötigt keine Build-Tools, keine externen Frameworks (wie React oder Vue) und keine Datenbank. Dies garantiert maximale Performance, Wartbarkeit und Datenschutzkonformität (kein Datentransfer) in der klinischen IT-Infrastruktur.

### Die Modul-Architektur
Seit Version 3.0 verfügt die Anwendung über ein zentrales **Portal**, das den Zugang zu fachspezifischen Modulen steuert:

1.  **Modul ZNA (Zentrale Notaufnahme):**
    *   Fokus: Akutmedizin, Ersteinschätzung, Notfalltherapie.
    *   Umfang: > 70 SOPs (Sepsis, ACS, Schock, etc.).
    *   Struktur: Symptomorientiert (Diagnostik -> Therapie -> Disposition).

2.  **Modul Onkologie:**
    *   Fokus: Präzisionsmedizin, Staging, Systemtherapie, Nachsorge.
    *   Basis: Aktuelle S3-Leitlinien (z.B. Nierenzellkarzinom 2024, HCC 2025).
    *   Struktur: Prozessorientiert (Screening -> Staging -> Molekulare Marker -> Therapielinien).

---

## 2. Methodik: Transformation onkologischer Leitlinien

Die Integration onkologischer S3-Leitlinien (oft PDFs mit > 200 Seiten) in eine Smartphone-App erfordert einen strikten redaktionellen Transformationsprozess. Das Ziel ist nicht die 1:1-Kopie, sondern die **Operationalisierung** des Wissens.

### Der Transformations-Prozess

**1. Sektionierung nach klinischen Phasen**
Statt der Buchkapitel-Struktur der PDF folgt die App dem Patientenweg:
*   **Phase I:** Prävention & Früherkennung (Wer muss gescreent werden? Welche Scores? z.B. PAGE-B).
*   **Phase II:** Diagnostik & Staging (KM-Phasen, Biopsie-Indikation, Klassifikation).
*   **Phase III:** Molekulare Charakterisierung (Welche Gene testen? FGFR2, IDH1, MSI).
*   **Phase IV:** Therapie-Algorithmen (Kurativ vs. Palliativ, Erstlinie vs. Zweitlinie).

**2. Visualisierung komplexer Logik**
*   **Tabellen statt Fließtext:** Komplexe Therapie-Schemata (z.B. BCLC-Stadien beim HCC) werden in responsive `<table>`-Elemente überführt.
*   **Callout-Boxen:** Essentielle Warnhinweise ("Cave"), Neuerungen der aktuellen Leitlinien-Version oder "Do-not-miss"-Fakten werden durch farbcodierte CSS-Container (`callout-wichtig`, `callout-hinweis`) visuell isoliert.

**3. Reduktion auf Handlungsrelevanz**
*   Hintergrundtexte zu Pathophysiologie oder Studiendesigns werden entfernt.
*   Fokus auf konkrete Dosierungen, Grenzwerte (Cut-offs) und klare "Soll/Sollte"-Empfehlungen.

---

## 3. Technische Architektur

### Dateistruktur
Das Projekt trennt strikt zwischen Core-Logik, UI-Styling und Fachinhalten (Content-Layer).

```text
/
├── index.html              # DOM-Skeleton & Script-Loader
├── app.js                  # App-Kernel (Router, State, Events)
├── styles.css              # UI-Framework & Theming
├── version.json            # Update-Steuerung
├── img/                    # Assets
└── pfade/                  # Content-Repository
    ├── zna/                # JS-Dateien für Notfall-SOPs
    └── onko/               # JS-Dateien für Onkologie-Leitlinien
```

### Routing-Engine
Die Anwendung nutzt ein **Hash-basiertes Routing** (`#/modul/view/id`), das als "Single Source of Truth" fungiert.
*   **Portal-Zwang:** Ein Aufruf ohne Hash (`/`) erzwingt die Weiterleitung zum Portal.
*   **Deep-Linking:** Jeder Pfad ist direkt verlinkbar (z.B. `.../index.html#/sop/hcc-karzinom`).
*   **State-Sync:** Das Modul (`zna`/`onko`) wird automatisch aus der URL extrahiert und setzt den globalen App-Context.

### Daten-Injektion
Fachinhalte registrieren sich selbstständig im System. Das Design-Pattern nutzt eine globale Registrierungsfunktion, die robust gegen Race-Conditions beim Laden der Skripte ist.

```javascript
// Beispiel: pfade/onko/neuer-pfad.js
window.registerSOP({
    id: "neuer-pfad",
    module: "onko",
    title: "Leitlinientitel",
    category: "onko",
    sections: [ ... ]
});
```

---

## 4. UI/UX Features

*   **Segmented Control:** Eine horizontale Navigationsleiste innerhalb jedes Pfades ermöglicht das sofortige Springen zu relevanten Sektionen (z.B. direkt zu "Systemtherapie").
*   **Global Spotlight Search:** Tastaturkürzel `Strg/Cmd + K` oder Klick auf die Lupe öffnet eine Echtzeit-Suche über alle Inhalte des aktiven Moduls.
*   **Smart Sticky Header:** Beim Scrollen fixieren sich Titel und Sektions-Header am oberen Rand, um den Kontext zu wahren.
*   **Touch-Optimierung:** Swipe-Gesten ("Zurück"), vergrößerte Touch-Targets (44px+) und Safe-Area-Berechnungen für moderne iOS-Geräte (Notch/Dynamic Island).
*   **Adaptive Theming:** Automatische Erkennung des System-Modus (Dark/Light) sowie manuelle Umschaltung und Schriftgrößen-Skalierung.

---

## 5. Deployment & Updates

### Installation
Die Anwendung ist eine statische Web-App. Sie benötigt keinen Application Server (Node/PHP/Python).
1.  Kopieren aller Dateien auf einen beliebigen Webserver.
2.  Aufruf über HTTPS (für PWA-Funktionalität zwingend).

### Update-Mechanismus
Die Datei `version.json` steuert den Client-Cache. Ändert sich die Versionsnummer auf dem Server, erkennt die `app.js` dies beim Start, leert die Service-Worker-Caches und fordert den Nutzer zum Neuladen auf. Dies garantiert, dass medizinische Änderungen (z.B. neue Medikamentenzulassungen) sofort bei allen Nutzern ankommen.

---

## 6. Lizenz & Haftung

**Status:** Version 3.2.0 (Stand September 2024)

Die Anwendung ist ein internes Hilfsmittel zur Unterstützung klinischer Prozesse. Die Inhalte basieren auf den jeweils zitierten Leitlinien (AWMF, ESC, etc.). Die Letztverantwortung für diagnostische und therapeutische Maßnahmen verbleibt beim behandelnden Arzt.
