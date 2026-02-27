# Patientenpfade – Klinisches Entscheidungsunterstützungssystem

> **Fachmodule: Zentrale Notaufnahme (ZNA) & Onkologie**
>
> Eine hochspezialisierte Progressive Web Application (PWA) zur Bereitstellung evidenzbasierter klinischer Behandlungspfade und Standard Operating Procedures (SOPs) direkt am Point-of-Care im Klinikum St. Georg.

---

## 1. Anwendungszweck
Die Patientenpfade-App dient als digitales Werkzeug für medizinisches Personal, um komplexe Behandlungsleitlinien in einem interaktiven, für Mobilgeräte optimierten Format bereitzustellen. Sie ermöglicht den sekundenschnellen Zugriff auf diagnostische Algorithmen, Therapieschemata und Medikamentendosierungen während des klinischen Alltags.

## 2. Medizinischer Leistungsumfang

### 2.1 Modul: Zentrale Notaufnahme (ZNA)
Das Modul umfasst **73 klinische Pfade** für die Akutmedizin, strukturiert in folgende Kategorien:
*   **Kardiologie:** STEMI, NSTEMI, Akute Herzinsuffizienz, Hypertensiver Notfall, Rhythmusstörungen, Lungenembolie.
*   **Neurologie:** Status Epilepticus, Meningitis, zerebrale Venen-Sinusthrombose, transiente globale Amnesie.
*   **Gastroenterologie:** Obere/Untere GI-Blutung, akute Pankreatitis, Divertikulitis, Mesenterialischämie.
*   **Metabolisch:** Diabetische Ketoazidose, Hyper-/Hyponatriämie, Myxödemkoma, Nebenniereninsuffizienz.
*   **Infektiologie:** Sepsis-Management, Pneumonie, Erysipel, Tonsillitis.
*   **Toxikologie:** Akute Intoxikationen, Kohlenmonoxidvergiftung, Alkoholintoxikation.
*   **Leitsymptome:** Abdominelle Schmerzen, Thoraxschmerzen, Dyspnoe, Synkope, Erbrechen.

### 2.2 Modul: Onkologie
Das Modul umfasst **28 tumor-spezifische Pfade** basierend auf aktuellen S3-Leitlinien:
*   **Gynäkologie:** Mammakarzinom, Ovarialkarzinom, Zervix- und Endometriumkarzinom.
*   **Urologie:** Prostatakarzinom, Harnblasen- und Nierenzellkarzinom, Hodentumoren, Peniskarzinom.
*   **Gastrointestinal:** Kolorektales Karzinom, Magen-, Pankreas- und Ösophaguskarzinom, Biliäre Tumoren.
*   **Hämatologie:** Multiples Myelom, CLL, DLBCL, Hodgkin- und Follikuläres Lymphom.
*   **HNO:** Larynx-, Mundhöhlen- und Speicheldrüsenkarzinome.

---

## 3. Kernfunktionen und Benutzeroberfläche

### 3.1 Interaktives Navigationskonzept
*   **Portal-System:** Zentraler Einstieg zur Wahl zwischen ZNA und Onkologie.
*   **Segmented Control:** Horizontale Schnellwahl-Leiste innerhalb der Pfade zum Umschalten zwischen Abschnitten (z. B. Diagnostik vs. Therapie).
*   **NEU: Interaktiver Sticky Header:** Beim Scrollen zeigt der Header nicht nur den aktuellen Unterabschnitt an, sondern dient als Dropdown-Menü, um direkt zu anderen Sektionen des Pfades zu springen.
*   **Section Picker:** Ein via Swipe oder Button erreichbares modales Menü (Sheet-Style) für die vollständige Inhaltsübersicht.

### 3.2 Intelligente Suchfunktionen
*   **Spotlight Search:** Globale Schnellsuche innerhalb eines Moduls (erreichbar über das Lupen-Icon oder `Strg/Cmd + K`).
*   **Highlighting:** Suchbegriffe werden in den Ergebnissen und Texten optisch hervorgehoben.
*   **Volltextsuche:** Tiefgehende Suche in allen HTML-Inhalten der Sektionen mit Snippet-Vorschau.

### 3.3 Personalisierung und Ergonomie
*   **Adaptive Layout:** Optimierte Platzausnutzung durch reduzierte Header-Abstände und dynamische Viewport-Anpassung.
*   **Theming:** Nahtloser Wechsel zwischen Dark Mode und Light Mode (manuell oder systembasiert).
*   **Schriftgrößen-Skalierung:** Individuelle Anpassung der Textgröße für optimale Lesbarkeit im klinischen Umfeld.
*   **Haptisches Feedback:** Unterstützung von Vibrationssignalen bei Interaktionen (auf unterstützten Mobilgeräten).

---

## 4. Technische Architektur

### 4.1 Tech-Stack
*   **Sprachen:** Vanilla JavaScript (ES5+), CSS3 (Custom Properties), HTML5.
*   **Frameworks:** Keine externen JS-Frameworks (React/Vue-frei) für maximale Ladegeschwindigkeit.
*   **Icons:** Font-Awesome 6.5.1 Integration.
*   **PWA-Features:**
    *   **Offline-Fähigkeit:** Vollständige Nutzung ohne Internetverbindung nach dem ersten Laden.
    *   **Safe-Area-Management:** Manuelle Laufzeit-Berechnungen für Insets auf Geräten mit Notch oder Dynamic Island.
    *   **Gestik:** Unterstützung für iOS-ähnlichen Back-Swipe und Pull-to-Refresh.

### 4.2 Datenstruktur und Registrierung
Inhalte werden als eigenständige JavaScript-Module in `pfade/` abgelegt. Jede Datei registriert sich selbstständig im globalen State:
```javascript
window.registerSOP({
    id: "pfad-id",
    module: "zna", // oder "onko"
    name: "Titel des Pfades",
    category: "kardio",
    sections: [
        { title: "Diagnostik", html: "..." },
        { title: "Therapie", html: "..." }
    ]
});
```

---

## 5. Deployment und Wartung

### 5.1 Installation & Updates
1.  **Webserver:** Statisches Hosting (Nginx, Apache) via HTTPS ist ausreichend.
2.  **Update-Mechanismus:** Die Anwendung vergleicht bei jedem Start die lokale Version mit der `version.json` auf dem Server. Bei Diskrepanz wird der Nutzer aktiv zur Aktualisierung aufgefordert.
3.  **Caching:** Aggressives Caching via Service Worker (sofern registriert) oder Browser-Cache für maximale Offline-Performance.

### 5.2 Verzeichnisstruktur
*   `/img`: Bild-Assets und kategoriespezifische Icons.
*   `/pfade`: Fachinhalte getrennt nach `zna/` und `onko/`.
*   `app.js`: Core-Logik (Router, State, UI-Steuerung, Gesten).
*   `styles.css`: Zentrales Stylesheet (Theming, Responsive Design, Animationen).

---

## 6. Wichtige Hinweise

### 6.1 Disclaimer
Diese Anwendung ist ein internes Unterstützungssystem für das Klinikum St. Georg. Die Inhalte basieren auf aktuellen Leitlinien (AWMF, ESC, etc.). Die Letztverantwortung für jede diagnostische oder therapeutische Maßnahme verbleibt stets beim behandelnden Arzt. Die App ersetzt nicht das klinische Urteil.

### 6.2 Barrierefreiheit & Kompatibilität
Die Anwendung ist für moderne Browser (Chrome, Safari, Firefox, Edge) optimiert und berücksichtigt die `prefers-reduced-motion` Einstellungen des Betriebssystems für Nutzer mit vestibulären Einschränkungen.

---
**Version:** 3.2.0 | **Stand:** Februar 2026 | **Klinikum St. Georg Leipzig**