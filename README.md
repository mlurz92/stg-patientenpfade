# Patientenpfade – Klinisches Entscheidungsunterstützungssystem

> **Fachmodule: Zentrale Notaufnahme (ZNA) & Onkologie**
>
> Eine hochspezialisierte Progressive Web Application (PWA) zur Bereitstellung evidenzbasierter klinischer Behandlungspfade und Standard Operating Procedures (SOPs) direkt am Point-of-Care.

---

## 1. Was ist die Anwendung?

Die Patientenpfade-Anwendung ist ein digitales Entscheidungswerkzeug für medizinisches Personal am Klinikum St. Georg Leipzig. Sie konsolidiert komplexe medizinische Leitlinien in ein für Mobilgeräte optimiertes, interaktives Format und ermöglicht den schnellen Zugriff auf klinische Entscheidungsalgorithmen direkt am Patientenbett.

Die Anwendung richtet sich an:
- Ärzte in Weiterbildung und Fachärzte
- Pflegepersonal in Notaufnahmen und onkologischen Stationen
- Medizinstudenten im klinischen Abschnitt
- Jedes medizinische Personal, das schnellleitliniengerechte Entscheidungshilfen benötigt

---

## 2. Abgedeckte medizinische Bereiche

Die Anwendung deckt zwei Hauptfachgebiete ab:

### 2.1 Zentrale Notaufnahme (ZNA)

Das ZNA-Modul umfasst **73 klinische Behandlungspfade** für die Akutmedizin, darunter:

- **Kardiologische Notfälle:** ST-Hebungsinfarkt, Nicht-ST-Hebungsinfarkt, Akute Herzinsuffizienz, Hypertensiver Notfall, Bradykarde Herzrhythmusstörungen, Tachykarde Herzrhythmusstörungen, Vorhofflimmern, Lungenarterienembolie, Thoraxschmerzen
- **Neurologische Notfälle:** Zerebrale Metastasen, Zerebrale Venen-Sinusthrombose, Transiente globale Amnesie, Kopfschmerzen, Status epilepticus, Unklare Vigilanzminderung, Bakterielle Meningitis
- **Internistische Notfälle:** Sepsis, Schock, Anaphylaxie, Akute Nierenschädigung, Hyponatriämie, Hypernatriämie, Hypokaliämie, Hyperkaliämie, Hypokalzämie, Hyperkalzämie, Diabetische Ketoazidose, Hypoglykämie, Hyperosmolares hyperglykämisches Syndrom, Akute Nebenniereninsuffizienz, Myxödemkoma
- **Gastroenterologische Notfälle:** Akute Pankreatitis, Akute Divertikulitis, Akute Gastroenteritis, Obere gastrointestinale Blutung, Untere gastrointestinale Blutung, Akute mesenteriale Ischämie, Ikterus, Hepatische Enzephalopathie, Spontan bakterielle Peritonitis
- **Pulmonologische Notfälle:** Pneumonie, Asthmaexazerbation, COPD-Exazerbation, Dyspnoe, Pleuraerguss
- **Infektiologische Notfälle:** Fieber in der Neutropenie, Harnwegsinfektion, Erysipel, Tonsillitis
- **Toxikologische Notfälle:** Akute Intoxikation, Akute Alkoholintoxikation, Kohlenmonoxidintoxikation, Cannabinoid-Hyperemesis-Syndrom, Hitzschlag
- **Urologische Notfälle:** Akuter Harnverhalt, Nierenkolik, Tiefe Venenthrombose
- **Sonstige Notfälle:** Synkope, Akutes Aortensyndrom, Akuter Gichtanfall, Delir, Fremdkörperingestion, Ösophageale Bolusimpaktion, Herz-Kreislauf-Stillstand, Vena-Cava-Superior-Syndrom, Stromunfall, Tumorlysesyndrom, Thrombozytopenie, Heparininduzierte Thrombozytopenie, Sterbephase (Palliativ)

### 2.2 Onkologie

Das Onkologie-Modul umfasst **28 tumor-spezifische Behandlungspfade** basierend auf aktuellen S3-Leitlinien:

- **Gynäkologische Tumoren:** Mammakarzinom, Zervixkarzinom, Endometriumkarzinom, Ovarialkarzinom
- **Urologische Tumoren:** Prostatakarzinom, Nierenzellkarzinom, Harnblasenkarzinom, Peniskarzinom, Hodentumoren
- **Gastrointestinale Tumoren:** Kolorektales Karzinom, Magenkarzinom, Pankreaskarzinom, Ösophaguskarzinom, Hepatozelluläres Karzinom und biliäre Karzinome
- **Pulmonale Tumoren:** Lungenkarzinom
- **Kopf-Hals-Tumoren:** Mundhöhlenkarzinom, Larynxkarzinom, Oro- und Hypopharynxkarzinom, Speicheldrüsentumoren
- **Hämatologische Tumoren:** Hodgkin-Lymphom, Non-Hodgkin-Lymphome (DLBCL, Follikuläres Lymphom), Multiples Myelom, CLL
- **Sonstige Tumoren:** Schilddrüsenkarzinom, Analkarzinom, Adulte Weichgewebesarkome

---

## 3. Technischer Stack

Die Anwendung wurde mit folgenden Technologien entwickelt:

### 3.1 Frontend-Architektur
- **HTML5:** Semantisches DOM-Skeleton für die Strukturierung der Benutzeroberfläche
- **CSS3:** Umfassendes Stylesheet mit CSS-Variablen für dynamisches Theming, Responsive Design und Adaptive Layouts
- **JavaScript (ES5+):** Reines Vanilla JavaScript ohne externe Frameworks wie React oder Vue

### 3.2 Besondere Eigenschaften
- **Single-Page-Application (SPA):** Die Anwendung lädt einmal und ermöglicht flüssige Navigation ohne Seiten-Neuladung
- **Progressive Web Application (PWA):** Installierbar auf Mobilgeräten mit Offline-Fähigkeit
- **Keine externe Datenbank:** Alle Daten sind in den JavaScript-Dateien eingebettet
- **Kein Build-Prozess erforderlich:** Die Anwendung kann direkt im Browser ausgeführt werden

---

## 4. Verzeichnisstruktur

Die Anwendung folgt einer klaren Trennung zwischen Core-Logik, UI-Styling und Fachinhalten:

```
stg-patientenpfade/
├── index.html              # Hauptdokument mit DOM-Struktur und Script-Einbindung
├── app.js                  # Anwendungs-Kern: Router, State-Management, Event-Handling
├── styles.css              # UI-Framework mit Theming und Responsive Design
├── version.json            # Versionskontrolle für Update-Mechanismus
├── package.json            # NPM-Paketkonfiguration (für PDF-Extraktionstools)
├── img/                    # Bild-Assets
│   ├── Icons/              # Kategorie-Icons
│   │   ├── Onko/           # Onkologie-Kategorie-Icons
│   │   └── ZNA/            # ZNA-Kategorie-Icons
│   └── ZNA/                # ZNA-spezifische Grafiken
└── pfade/                  # Content-Repository mit klinischen Pfaden
    ├── zna/                # 73 JavaScript-Dateien für Notfall-SOPs
    └── onko/               # 28 JavaScript-Dateien für Onkologie-Leitlinien
```

### Inhaltsdateien (pfade/)
Jede klinische Leitlinie ist als eigenständige JavaScript-Datei implementiert. Diese Dateien enthalten:
- Metadaten (Titel, Kategorie, Version)
- Diagnostische Algorithmen
- Therapie-Empfehlungen
- Medikamentendosierungen
-Disposition-Richtlinien

---

## 5. Funktionen der Benutzeroberfläche

### 5.1 Portal-System
Beim Start der Anwendung gelangt der Benutzer zum zentralen Portal, wo er zwischen den Fachmodulen wählen kann:
- **ZNA (Zentrale Notaufnahme):** Für akutmedizinische Fragestellungen
- **Onkologie:** Für tumor-spezifische Behandlungspfade

### 5.2 Navigation
- **Segmented Control:** Horizontale Navigationsleiste innerhalb jedes Pfades für schnellen Zugriff auf Sektionen (z.B. Diagnostik, Therapie, Disposition)
- **Breadcrumb-Navigation:** Zeigt den aktuellen Pfad und ermöglicht Rückkehr zu übergeordneten Ebenen
- **Section Picker:** Schnellauswahl für Sektionen mittels Swipe-Geste

### 5.3 Suchfunktion
- **Global Spotlight Search:** Schnellsuche über alle Inhalte des aktiven Moduls
- **Tastaturkürzel:** Strg/Cmd + K öffnet die Suchfunktion
- **Echtzeit-Filterung:** Suchergebnisse werden sofort angezeigt

### 5.4 Benutzerfreundlichkeit
- **Swipe-Navigation:** Touch-Gesten zum Vor- und Zurücknavigieren
- **Smart Sticky Header:** Titel und Sektions-Header bleiben beim Scrollen sichtbar
- **Pull-to-Refresh Prevention:** Verhindert versehentliches Aktualisieren beim Scrollen

### 5.5 Anpassungsoptionen
- **Adaptive Theming:** Automatische Erkennung des System-Modus (Dunkel/Hell)
- **Manuelle Theme-Umschaltung:** Benutzer kann zwischen Hell und Dunkel wechseln
- **Schriftgrößen-Skalierung:** Anpassung der Schriftgröße für bessere Lesbarkeit

### 5.6 Mobile Optimierung
- **Touch-Optimierung:** Vergrößerte Touch-Targets (mindestens 44px)
- **Safe Area Support:** Optimiert für moderne iOS-Geräte mit Notch/Dynamic Island
- **Responsive Design:** Funktioniert auf Smartphones, Tablets und Desktops

---

## 6. Update-Mechanismus

Die Anwendung verfügt über einen automatischen Update-Mechanismus:

1. Beim Start wird die lokale Version mit der `version.json` auf dem Server verglichen
2. Bei erkannter Änderung werden die Service-Worker-Caches geleert
3. Der Benutzer wird zum Neuladen aufgefordert
4. Somit erhalten alle Nutzer zeitnah Aktualisierungen (z.B. bei neuen Medikamentenzulassungen oder geänderten Leitlinien)

---

## 7. Verwendung der Anwendung

### 7.1 Deployment
Die Anwendung ist eine statische Web-App und benötigt keinen Application Server:

1. Kopieren aller Dateien auf einen beliebigen Webserver
2. Aufruf über HTTPS (für PWA-Funktionalität erforderlich)
3. Optional: Als PWA auf dem Mobilgerät installieren

### 7.2 Offline-Nutzung
Nach dem ersten Aufruf können alle Inhalte offline verwendet werden, da die Anwendung als PWA fungiert und alle notwendigen Daten im Cache speichert.

### 7.3 Aktualisierung
Administratoren können neue Leitlinien hinzufügen, indem sie:
1. Eine neue JavaScript-Datei im соответствующих Ordner (`pfade/zna/` oder `pfade/onko/`) erstellen
2. Die `version.json` aktualisieren
3. Die Dateien auf den Server hochladen

---

## 8. Technische Details

### Routing
Die Anwendung nutzt hash-basiertes Routing (`#/modul/view/id`):
- Jeder Pfad ist direkt verlinkbar (z.B. `index.html#/sop/hcc-karzinom`)
- Das Modul (zna/onko) wird automatisch aus der URL extrahiert

### Design-Pattern
Fachinhalte registrieren sich selbstständig im System mittels einer globalen Registrierungsfunktion:

```javascript
window.registerSOP({
    id: "pfad-id",
    module: "zna",
    title: "Klinischer Pfad Titel",
    category: "kategorie",
    sections: [ ... ]
});
```

### Rendering
- **Tabellen:** Komplexe Therapie-Schemata werden in responsive Tabellen überführt
- **Callout-Boxen:** Wichtige Warnhinweise und Empfehlungen werden visuell hervorgehoben
- **Bilder:** Diagnostische Algorithmen werden als Grafiken eingebunden

---

## 9. Lizenz und Haftung

**Aktuelle Version:** 2.5.1 (Stand: Februar 2026)

Die Anwendung ist ein internes Hilfsmittel zur Unterstützung klinischer Prozesse. Die Inhalte basieren auf den jeweils zitierten Leitlinien (AWMF S3-Leitlinien, ESC-Guidelines, etc.). 

**Wichtiger Hinweis:** Die Letztverantwortung für diagnostische und therapeutische Maßnahmen verbleibt stets beim behandelnden Arzt. Diese Anwendung ersetzt nicht das klinische Urteil und dient nur als Entscheidungsunterstützung.

---

## 10. Kontakt und Support

Bei technischen Fragen oder Problemen mit der Anwendung wenden Sie sich bitte an die IT-Abteilung des Klinikums St. Georg Leipzig.

Für inhaltliche Rückmeldungen zu den klinischen Pfaden kontaktieren Sie bitte die jeweilige Fachabteilung.
