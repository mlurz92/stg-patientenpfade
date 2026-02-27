(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "nierenzellkarzinom",
        module: "onko",
        title: "Nierenzellkarzinom (RCC)",
        name: "Nierenzellkarzinom (RCC)",
        category: "onko-uro",
        stand: "09/2024",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <p>Das Nierenzellkarzinom (RCC) macht über 90 % der bösartigen Nierenerkrankungen aus. Hauptrisikoalter liegt zwischen dem 60. und 70. Lebensjahr.</p>
                <h3>Modifizierbare Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Erhöhtes Risiko, Dosis-Wirkungs-Beziehung.</li>
                    <li><strong>Übergewicht/Adipositas:</strong> Linearer Anstieg des Risikos mit dem BMI.</li>
                    <li><strong>Arterielle Hypertonie:</strong> Unabhängiger Risikofaktor; adäquate Einstellung kann Risiko senken.</li>
                    <li><strong>Trichlorethen:</strong> Sehr hohe berufliche Exposition (Lösungsmittel) ist als Risikofaktor und Berufskrankheit anerkannt.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>CT-Abdomen (Multiphasisch)</h3>
                <ul>
                    <li><strong>Standard:</strong> Nativ, früharteriell und venös. Standard zur Planung bei V.a. RCC.</li>
                    <li><strong>Indikation:</strong> Erstliniendiagnostik bei Verdacht auf Nierenzellkarzinom.</li>
                </ul>
                <h3>CT-Thorax</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei Tumoren > 3 cm zum Staging obligat.</li>
                    <li><strong>Ziel:</strong> Detektion von Lungenmetastasen.</li>
                </ul>
                <h3>MRT-Abdomen</h3>
                <ul>
                    <li><strong>Indikationen:</strong> Bei Unklarheiten im CT, KM-Allergie oder Verdacht auf Venenthrombus (Vena cava).</li>
                    <li><strong>Vorteil:</strong> Bessere Weichteildifferenzierung, kein Strahlenrisiko.</li>
                </ul>
                <h3>Knochenszintigraphie / MRT-Ganzkörper</h3>
                <ul>
                    <li><strong>Indikation:</strong> Nur bei klinischem Verdacht (Knochenschmerzen) oder erhöhter alkalischer Phosphatase.</li>
                </ul>
                <h3>cMRT (Craniale MRT)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Nur bei klinischem Verdacht auf Hirnmetastasen.</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li><strong>Stellenwert:</strong> Kein Stellenwert in der Routine-Diagnostik.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild</h3>
                <ul>
                    <li><strong>Hämoglobin:</strong> Anämie ist prognostisch relevant (IMDC-Score).</li>
                    <li><strong>Thrombozyten:</strong> Thrombozytose kann bei RCC auftreten.</li>
                </ul>
                <h3>Serumchemie</h3>
                <ul>
                    <li><strong>Kalzium:</strong> Hyperkalzämie ist Risikofaktor im IMDC-Score.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT zum Ausschluss von Lebermetastasen.</li>
                    <li><strong>Nierenfunktion:</strong> Kreatinin, Harnstoff zur Beurteilung der Nierenfunktion vor Therapie.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>Neutrophile:</strong> Erhöhte Neutrophile sind Risikofaktor im IMDC-Score.</li>
                    <li><strong>CRP:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Urinanalyse</h3>
                <ul>
                    <li><strong>Urinstatus:</strong> Zum Ausschluss einer Hämaturie (kann asymptomatisch sein).</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Nierenbiopsie</h3>
                <div class="callout callout-hinweis">
                    <p>Die Biopsie wird in der Leitlinie kontrovers diskutiert. Die unten genannten Empfehlungen basieren auf Expertenkonsens.</p>
                </div>
                <h4>Nicht empfohlen</h4>
                <ul>
                    <li>Bei resektablen Tumoren mit eindeutiger Bildgebung (da keine Konsequenzänderung).</li>
                </ul>
                <h4>Empfohlen</h4>
                <ul>
                    <li>Vor ablativer Therapie (RFA/Kryoablation).</li>
                    <li>Bei metastasierter Erkrankung vor Systemtherapie (wenn keine Nephrektomie erfolgt).</li>
                    <li>Bei Unklarheit zur Differenzialdiagnose (z.B. Lymphom, Abszess, Metastase eines anderen Primarius).</li>
                    <li>Vor aktiver Überwachung (Active Surveillance).</li>
                </ul>
                <h4>Kontraindiziert</h4>
                <ul>
                    <li>Zystische Raumforderungen (Bosniak-Klassifikation).</li>
                </ul>
                <h3>Histologische Klassifikation (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Häufigkeit</th>
                                <th>Prognose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Klarzellig (ccRCC)</strong></td>
                                <td>75-80 %</td>
                                <td>Schlechter als papillär/chromophob im lokalisierten Stadium</td>
                            </tr>
                            <tr>
                                <td><strong>Papillär (pRCC)</strong></td>
                                <td>10-15 %</td>
                                <td>Typ 1 (besser), Typ 2 (aggressiver)</td>
                            </tr>
                            <tr>
                                <td><strong>Chromophob (chRCC)</strong></td>
                                <td>5 %</td>
                                <td>Günstige Prognose, selten Metastasen</td>
                            </tr>
                            <tr>
                                <td><strong>Ductus-Bellini-Karzinom</strong></td>
                                <td>1 %</td>
                                <td>Sehr aggressiv, schlechte Prognose</td>
                            </tr>
                            <tr>
                                <td><strong>Onkozytom</strong></td>
                                <td>3-5 %</td>
                                <td>Benigne, aber schwer von RCC abgrenzbar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Grading</h3>
                <ul>
                    <li><strong>ISUP-Grading:</strong> International Society of Urological Pathology Grade 1-4.</li>
                    <li><strong>Fuhrman-Grading:</strong> Wird zunehmend durch ISUP ersetzt.</li>
                </ul>
                <h3>Sarkomatoide Differenzierung</h3>
                <ul>
                    <li>Ungünstiger Prognosefaktor, tritt bei verschiedenen Subtypen auf.</li>
                    <li>Bei Nachweis: Höheres Rezidivrisiko, adjuvante Therapie mit Pembrolizumab erwägen.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>TNM-Klassifikation (AJCC 8. Edition)</h3>
                <h4>T (Tumor)</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>T1</td><td>≤ 7 cm, auf Niere begrenzt</td></tr>
                            <tr><td>T1a</td><td>≤ 4 cm</td></tr>
                            <tr><td>T1b</td><td>> 4 bis ≤ 7 cm</td></tr>
                            <tr><td>T2</td><td>> 7 cm, auf Niere begrenzt</td></tr>
                            <tr><td>T2a</td><td>> 7 bis ≤ 10 cm</td></tr>
                            <tr><td>T2b</td><td>> 10 cm</td></tr>
                            <tr><td>T3</td><td>Infiltriert in Nierenvene(n) oder perirenales Gewebe</td></tr>
                            <tr><td>T3a</td><td>Infiltriert Nierenvene oder Segmentäste oder perirenales Gewebe</td></tr>
                            <tr><td>T3b</td><td>Infiltriert Vena cava unterhalb Zwerchfell</td></tr>
                            <tr><td>T3c</td><td>Infiltriert Vena cava oberhalb Zwerchfell oder Wand</td></tr>
                            <tr><td>T4</td><td>Infiltriert Nachbarorgane (außer Nierenvene)</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4>N (Lymphknoten)</h4>
                <ul>
                    <li><strong>N0:</strong> Keine Lymphknotenmetastasen.</li>
                    <li><strong>N1:</strong> regionäre Lymphknotenmetastasen.</li>
                </ul>
                <h4>M (Metastasen)</h4>
                <ul>
                    <li><strong>M0:</strong> Keine Fernmetastasen.</li>
                    <li><strong>M1:</strong> Fernmetastasen vorhanden.</li>
                </ul>
                <h3>Stadieneinteilung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>T</th>
                                <th>N</th>
                                <th>M</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>I</td><td>T1</td><td>N0</td><td>M0</td></tr>
                            <tr><td>II</td><td>T2</td><td>N0</td><td>M0</td></tr>
                            <tr><td>III</td><td>T3</td><td>N0/N1</td><td>M0</td></tr>
                            <tr><td>IV</td><td>T4</td><td>jedes N</td><td>M0</td></tr>
                            <tr><td>IV</td><td>jedes T</td><td>jedes N</td><td>M1</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikostratifizierung (IMDC-Score)</h3>
                <p>Der IMDC-Score (International Metastatic RCC Database Consortium) bestimmt die Prognose bei metastasiertem RCC:</p>
                <h4>Risikofaktoren</h4>
                <ul>
                    <li>Karnofsky Performance Status < 80%</li>
                    <li>Zeit von Diagnose bis Therapiebeginn < 1 Jahr</li>
                    <li>Hämoglobin unter Normalwert</li>
                    <li>Serumkalzium über Normalwert</li>
                    <li>Neutrophile über Normalwert</li>
                    <li>Thrombozyten über Normalwert</li>
                </ul>
                <h4>Risikogruppen</h4>
                <ul>
                    <li><strong>Günstiges Risiko:</strong> 0 Faktoren.</li>
                    <li><strong>Intermediäres Risiko:</strong> 1-2 Faktoren.</li>
                    <li><strong>Ungünstiges Risiko:</strong> ≥ 3 Faktoren.</li>
                </ul>
                <h3>Lokalisationsseite der Metastasen</h3>
                <ul>
                    <li><strong>Lunge:</strong> Häufigste Lokalisation (50-60%).</li>
                    <li><strong>Lymphknoten:</strong> Zweithäufigste Lokalisation.</li>
                    <li><strong>Knochen:</strong> Häufig bei fortgeschrittenen Stadien.</li>
                    <li><strong>Leber:</strong> Bei fortgeschrittenem RCC.</li>
                    <li><strong>Gehirn:</strong> Bei aggressivem Tumorwachstum.</li>
                </ul>`
            },
            {
                title: "Prognose & Risikofaktoren",
                html: `<h3>Prognosefaktoren</h3>
                <ul>
                    <li><strong>Tumorstadium:</strong> Wichtigster Prognosefaktor.</li>
                    <li><strong>Histologischer Subtyp:</strong> Klarzellig schlechtere Prognose als chromophob.</li>
                    <li><strong>Tumorgrading:</strong> Höherer Grad = schlechtere Prognose.</li>
                    <li><strong>Sarkomatoide Differenzierung:</strong> Ungünstiger Prognosefaktor.</li>
                    <li><strong>Metastasen:</strong> Anzahl und Lokalisation beeinflussen Prognose.</li>
                </ul>
                <h3>Prognose-Scores</h3>
                <ul>
                    <li><strong>Leibovich-Score:</strong> Für nicht-metastasierte Tumoren zur Rezidivrisiko-Bestimmung.</li>
                    <li><strong>UCLA-Score (SSIGN):</strong> Für klarzelliges RCC.</li>
                    <li><strong>IMDC-Score:</strong> Für metastasierte Tumoren (s. Staging).</li>
                </ul>
                <h3>Modifizierbare Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Erhöhtes Risiko, Dosis-Wirkungs-Beziehung.</li>
                    <li><strong>Übergewicht/Adipositas:</strong> Linearer Anstieg des Risikos mit dem BMI.</li>
                    <li><strong>Arterielle Hypertonie:</strong> Unabhängiger Risikofaktor; adäquate Einstellung kann Risiko senken.</li>
                    <li><strong>Trichlorethen:</strong> Sehr hohe berufliche Exposition (Lösungsmittel) ist als Risikofaktor und Berufskrankheit anerkannt.</li>
                </ul>`
            },
            {
                title: "Therapie: Nicht-metastasiert & Lokal",
                html: `<h3>Lokal begrenzte Tumoren (T1)</h3>
                <ul>
                    <li><strong>Nierenteilresektion (Nierenerhalt):</strong> Standardtherapie bei T1a (< 4 cm) und T1b (4-7 cm), wenn technisch machbar.</li>
                    <li><strong>Verfahren:</strong> Offen, laparoskopisch oder robotergestützt (RAPN) möglich. Robotisch assoziiert mit kürzerer Liegedauer.</li>
                    <li><strong>Radikale Nephrektomie:</strong> Nur wenn Nierenerhalt nicht möglich oder onkologisch unsicher.</li>
                </ul>
                <h3>Lokal fortgeschrittene Tumoren (> T1)</h3>
                <ul>
                    <li><strong>Radikale Nephrektomie:</strong> Standard bei T2 und höher, wenn Nierenerhalt nicht sinnvoll.</li>
                    <li><strong>Adrenalektomie:</strong> Nur bei bildgebendem Verdacht auf Infiltration oder Metastase; nicht routinemäßig.</li>
                    <li><strong>Lymphadenektomie:</strong> Nur bei klinisch vergrößerten Lymphknoten (Staging/Lokalkontrolle). Keine systematische LAD bei cN0.</li>
                </ul>
                <h3>Alternative Verfahren</h3>
                <ul>
                    <li><strong>Aktive Überwachung (Active Surveillance):</strong> Option bei kleinen Tumoren (< 4 cm) bei Patienten mit hoher Komorbidität/begrenzter Lebenserwartung. Biopsie obligat.</li>
                    <li><strong>Thermische Ablation (RFA/Kryo):</strong> Option bei T1a (< 3-4 cm) und hoher Komorbidität. Biopsie obligat.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Pembrolizumab:</strong> Zugelassen und empfohlen für Patienten mit hohem Rezidivrisiko (z.B. pT2 G4 oder Sarkomatoid, pT3/T4, pN+ oder nach Resektion von Metastasen). Dauer: 1 Jahr.</li>
                    <li><strong>TKI (Sunitinib etc.):</strong> Keine Empfehlung zur adjuvanten Gabe (mangelnde Evidenz für OS-Vorteil).</li>
                </ul>`
            },
            {
                title: "Therapie: Metastasiert (Systemtherapie)",
                html: `<h3>Risikostratifizierung (IMDC-Score)</h3>
                <p>Die Therapiewahl basiert auf dem IMDC-Risiko (Motzer-Kriterien): Karnofsky < 80%, Zeit Diagnose-Therapie < 1 Jahr, Hb < Norm, Calcium > Norm, Neutrophile > Norm, Thrombozyten > Norm.</p>
                <ul>
                    <li><strong>Günstiges Risiko:</strong> 0 Faktoren.</li>
                    <li><strong>Intermediäres Risiko:</strong> 1-2 Faktoren.</li>
                    <li><strong>Ungünstiges Risiko:</strong> ≥ 3 Faktoren.</li>
                </ul>
                <h3>Erstlinientherapie (ccRCC)</h3>
                <div class="callout callout-wichtig">
                    <p>Standard ist die Kombinationstherapie (IO/TKI oder IO/IO). Eine Monotherapie mit TKI ist nur Alternative bei Kontraindikationen.</p>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Therapie-Regime</th>
                                <th>Empfehlung (Alle Risikogruppen)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Pembrolizumab + Axitinib</strong></td>
                                <td>Standard (GoR A)</td>
                            </tr>
                            <tr>
                                <td><strong>Nivolumab + Cabozantinib</strong></td>
                                <td>Standard (GoR A)</td>
                            </tr>
                            <tr>
                                <td><strong>Pembrolizumab + Lenvatinib</strong></td>
                                <td>Standard (GoR A)</td>
                            </tr>
                            <tr>
                                <td><strong>Nivolumab + Ipilimumab</strong></td>
                                <td>Standard für <strong>Intermediäres/Ungünstiges</strong> Risiko (GoR A).<br>Option bei günstigem Risiko.</td>
                            </tr>
                            <tr>
                                <td><strong>Alternative (TKI-Monotherapie)</strong></td>
                                <td>Sunitinib, Pazopanib, Tivozanib oder Cabozantinib (wenn IO kontraindiziert).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Zweitlinientherapie</h3>
                <p>Abhängig von der Erstlinie:</p>
                <ul>
                    <li><strong>Nach IO/TKI-Kombination:</strong> Wechsel auf anderen TKI (z.B. Cabozantinib, Tivozanib) oder Lenvatinib + Everolimus.</li>
                    <li><strong>Nach IO/IO (Nivo/Ipi):</strong> TKI (z.B. Sunitinib, Cabozantinib, Axitinib, Tivozanib).</li>
                    <li><strong>Nach TKI-Monotherapie:</strong> Nivolumab (Monotherapie) oder Cabozantinib.</li>
                </ul>`
            },
            {
                title: "Spezielle Situationen (Metastasen, nccRCC)",
                html: `<h3>Metastasenchirurgie</h3>
                <ul>
                    <li><strong>Oligometastasierung:</strong> Resektion oder stereotaktische Bestrahlung (SBRT) empfohlen, wenn R0 erreichbar (kurativer Ansatz).</li>
                    <li><strong>Hirnmetastasen:</strong>
                        <ul>
                            <li>Oligotop/Symptomatisch: Resektion oder Radiochirurgie (SRS).</li>
                            <li>Multipel: Ganzhirnbestrahlung (WBRT) oder medikamentös.</li>
                            <li><strong>Merke:</strong> TKI und IO können intrakraniell wirksam sein.</li>
                        </ul>
                    </li>
                    <li><strong>Knochenmetastasen:</strong> Palliative Radiotherapie zur Schmerzlinderung/Stabilität. Antiresorptive Therapie (Denosumab/Bisphosphonate) empfohlen.</li>
                </ul>
                <h3>Zytoreduktive Nephrektomie (bei mRCC)</h3>
                <ul>
                    <li><strong>Nicht empfohlen (CARMENA-Studie):</strong> Bei intermediärem/ungünstigem Risiko primär Systemtherapie.</li>
                    <li><strong>Empfohlen:</strong> Bei gutem Allgemeinzustand, geringer Metastasenlast und resektablem Primärtumor (selektionierte Fälle).</li>
                </ul>
                <h3>Nicht-klarzelliges RCC (nccRCC)</h3>
                <div class="callout callout-hinweis">
                    <p>Keine zugelassenen Standards. Einschluss in Studien empfohlen.</p>
                </div>
                <ul>
                    <li><strong>Therapieempfehlung:</strong> Analog zum klarzelligen RCC (Sunitinib, Cabozantinib oder IO-Kombinationen).</li>
                    <li><strong>Papilläres RCC:</strong> Cabozantinib oder Sunitinib.</li>
                    <li><strong>Chromophobes RCC:</strong> TKI oder mTOR-Inhibitoren (Everolimus).</li>
                </ul>`
            },
            {
                title: "Erbliche Tumoren",
                html: `<h3>Verdachtskriterien</h3>
                <ul>
                    <li>Alter < 47 Jahre.</li>
                    <li>Bilaterale oder multifokale Tumoren.</li>
                    <li>Positive Familienanamnese (Verwandte 1./2. Grades).</li>
                    <li>Spezifische Histologie (z.B. Typ 2 papillär, Hybrid-Tumoren).</li>
                    <li>Syndrom-assoziierte Befunde (Hämangioblastome, Phäochromozytome, Hautveränderungen).</li>
                </ul>
                <h3>Wichtige Syndrome</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Syndrom</th>
                                <th>Gen</th>
                                <th>Typische Tumoren</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Von-Hippel-Lindau (VHL)</strong></td>
                                <td>VHL</td>
                                <td>Klarzelliges RCC, Hämangioblastome (ZNS/Retina), Phäochromozytom.</td>
                            </tr>
                            <tr>
                                <td><strong>Hereditäres papilläres RCC</strong></td>
                                <td>MET</td>
                                <td>Papilläres RCC Typ 1.</td>
                            </tr>
                            <tr>
                                <td><strong>Birt-Hogg-Dubé</strong></td>
                                <td>FLCN</td>
                                <td>Chromophobes RCC, Onkozytom, Lungenzysten/Pneumothorax, Fibrofollikulome.</td>
                            </tr>
                            <tr>
                                <td><strong>HLRCC (Leiomyomatose)</strong></td>
                                <td>FH</td>
                                <td>Papilläres RCC Typ 2 (aggressiv!), Uterusmyome, Hautleiomyome.</td>
                            </tr>
                            <tr>
                                <td><strong>Tuberöse Sklerose</strong></td>
                                <td>TSC1/2</td>
                                <td>Angiomyolipome, RCC.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-wichtig">
                    <p>Bei VHL-Syndrom: Aktive Überwachung bis 3 cm Tumorgröße ("3-cm-Regel"), dann organerhaltende OP, um Nierenfunktion langfristig zu erhalten. Belzutifan ist eine Option bei VHL-assoziierten Tumoren.</p>
                </div>`
            },
            {
                title: "Rehabilitation & Nachsorge",
                html: `<h3>Nachsorgeplan (Kurativ)</h3>
                <p>Risikoadaptiert basierend auf Leibovich-Score oder UCLA-Score. Standard-Schema:</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risiko</th>
                                <th>Bildgebung (CT-Thorax/Abdomen)</th>
                                <th>Zeitraum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Niedrig</strong> (pT1, G1-2)</td>
                                <td>Monat 12, 36, 60</td>
                                <td>5 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Mittel</strong> (pT2, G3)</td>
                                <td>Monat 6, 12, 24, 36, 48, 60</td>
                                <td>5 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Hoch</strong> (pT3/4, pN+)</td>
                                <td>Monat 3, 6, 12, 18, 24, dann jährlich</td>
                                <td>> 5 Jahre (ggf. lebenslang)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Anschlussheilbehandlung (AHB) für alle Patienten empfohlen.</li>
                    <li>Inhalte: Psychoonkologie, körperliches Training, Ernährungsberatung, Sozialdienst (Schwerbehindertenausweis).</li>
                </ul>`
            }
        ],
        sources: "S3-Leitlinie Diagnostik, Therapie und Nachsorge des Nierenzellkarzinoms. Version 5.0 – September 2024. AWMF-Registernummer: 043-017OL. Herausgeber: Leitlinienprogramm Onkologie (DKG, DKH, AWMF)."
    });
})();
