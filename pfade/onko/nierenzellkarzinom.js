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
                title: "Diagnostik & Prognose",
                html: `<h3>Bildgebende Diagnostik</h3>
                <ul>
                    <li><strong>CT-Abdomen (Multiphasisch):</strong> Nativ, früharteriell und venös. Standard zur Planung bei V.a. RCC.</li>
                    <li><strong>CT-Thorax:</strong> Bei Tumoren > 3 cm zum Staging obligat.</li>
                    <li><strong>MRT-Abdomen:</strong> Bei Unklarheiten im CT, KM-Allergie oder V.a. Venenthrombus (Vena cava).</li>
                    <li><strong>Knochenszintigraphie / MRT-Ganzkörper:</strong> Nur bei klinischem Verdacht (Knochenschmerzen) oder erhöhter alkalischer Phosphatase.</li>
                    <li><strong>cMRT:</strong> Nur bei klinischem Verdacht auf Hirnmetastasen.</li>
                    <li><strong>PET-CT:</strong> Kein Stellenwert in der Routine-Diagnostik.</li>
                </ul>
                <h3>Biopsie-Indikation</h3>
                <ul>
                    <li><strong>Nicht empfohlen:</strong> Bei resektablen Tumoren mit eindeutiger Bildgebung (da keine Konsequenzänderung).</li>
                    <li><strong>Empfohlen:</strong>
                        <ul>
                            <li>Vor ablativer Therapie (RFA/Kryo).</li>
                            <li>Bei metastasierter Erkrankung vor Systemtherapie (wenn keine Nephrektomie erfolgt).</li>
                            <li>Bei Unklarheit zur DD (z.B. Lymphom, Abszess, Metastase eines anderen Primarius).</li>
                            <li>Vor aktiver Überwachung (Active Surveillance).</li>
                        </ul>
                    </li>
                    <li><strong>Kontraindiziert:</strong> Zystische Raumforderungen (Bosniak).</li>
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
                                <td><strong>Ductus-Bellini</strong></td>
                                <td>1 %</td>
                                <td>Sehr aggressiv, schlechte Prognose</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
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
