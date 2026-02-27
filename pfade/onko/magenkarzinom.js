(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "magenkarzinom",
        module: "onko",
        title: "Magenkarzinom",
        name: "Magenkarzinom",
        category: "onko-gi",
        stand: "S3-LL 3.1",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Das Magenkarzinom ist weltweit die fünfthäufigste Krebserkrankung</li>
                    <li>In Deutschland bei beiden Geschlechtern der 10. Platz in der Inzidenz aller Krebserkrankungen</li>
                    <li>Hohe Inzidenz in Ostasien, Osteuropa und Südamerika</li>
                    <li>Männer erkranken im Mittel mit 71 Jahren, Frauen mit 75 Jahren</li>
                    <li>Stetiger Rückgang der Erkrankungs- und Sterberaten in westlichen Ländern</li>
                    <li>Inzidenz des Adenokarzinoms des gastroösophagealen Übergangs (AEG) steigend</li>
                    <li>Ca. 80% der Patienten bei Diagnosestellung bereits in fortgeschrittenem Stadium</li>
                </ul>
                <h3>Wesentliche Risikofaktoren</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Risikofaktoren</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Infektiös</strong></td>
                                <td>Helicobacter pylori-Infektion (wichtigster Risikofaktor, Klasse I Karzinogen), EBV</td>
                            </tr>
                            <tr>
                                <td><strong>Ernährung</strong></td>
                                <td>Hohe Salzaufnahme, geräucherte/pökelte Lebensmittel, verarbeitetes Fleisch, geringer Obst- und Gemüsekonsum</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Hereditäres diffuses Magenkarzinom (HDGC) mit CDH1/CTNNA1-Mutation, Lynch-Syndrom (HNPCC), FAP, Cowden-Syndrom, Peutz-Jeghers-Syndrom</td>
                            </tr>
                            <tr>
                                <td><strong>Lifestyle</strong></td>
                                <td>Tabakrauchen (25% erhöhtes Risiko), erhöhter Alkoholkonsum (>45g/Tag), Übergewicht, niedriger sozioökonomischer Status</td>
                            </tr>
                            <tr>
                                <td><strong>Medikamente</strong></td>
                                <td>Keine Statine zur Prävention empfohlen (keine Evidenz aus RCTs)</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsionen</strong></td>
                                <td>Chronische atrophische Gastritis, intestinale Metaplasie (OLGA/OLGIM-Stadien III-IV), Magenpolypen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Hereditäres diffuses Magenkarzinom (HDGC)</h3>
                <ul>
                    <li>Autosomal-dominante Vererbung</li>
                    <li>CDH1-Genmutation (E-Cadherin) bei 30-40% der Fälle</li>
                    <li>CTNNA1-Genmutation (α-E-Catenin) seltener (~11 Familien beschrieben)</li>
                    <li>Lebenszeitrisiko: ca. 70% (Männer), ca. 56% (Frauen)</li>
                    <li>IGCLC-Kriterien für genetische Testung: ≥2 Fälle Magenkarzinom in der Familie, diffuses Magenkarzinom vor dem 50. Lebensjahr</li>
                    <li>Prophylaktische Gastrektomie ab dem 20. Lebensjahr empfohlen</li>
                    <li>Bei CTNNA1-Mutation: Jährliche Endoskopie empfohlen, prophylaktische Gastrektomie kann erwogen werden</li>
                </ul>
                <h3>Familiäre Häufung</h3>
                <ul>
                    <li>Verwandte ersten Grades haben 2-3-fach erhöhtes Risiko</li>
                    <li>Bei >1 erstgradig Verwandtem mit Magenkarzinom: ca. 10-fach erhöhtes Risiko</li>
                    <li>Humangenetische Beratung empfohlen bei Erkrankungsalter <50 Jahre und/oder familiärer Häufung</li>
                </ul>`
            },
            {
                title: "Prävention & Vorsorge",
                html: `<h3>Helicobacter pylori-Eradikation</h3>
                <ul>
                    <li><strong>Testung auf H. pylori</strong> soll bei allen Personen mit erhöhtem Magenkarzinomrisiko erfolgen</li>
                    <li>Erstgradig Verwandte von Magenkarzinom-Patienten</li>
                    <li>Personen aus Hochprävalenzgebieten (Asien, Osteuropa, Mittel- und Südamerika)</li>
                    <li>Patienten mit atrophischer Gastritis (OLGA 3/4, OLGIM 3/4)</li>
                    <li>Patienten mit Magenneoplasien nach Resektion</li>
                    <li>Bei perniziöser Anämie und autoimmun-atrophischer Gastritis</li>
                    <li>Nach Eradikation: Erfolgskontrolle erforderlich</li>
                </ul>
                <h3>Endoskopisches Screening</h3>
                <ul>
                    <li><strong>Bevölkerungsbasiertes Screening in Deutschland nicht empfohlen</strong> (niedrige Prävalenz 7-10/100.000)</li>
                    <li>Bei Risikopersonen: Jährliche ÖGD bei HDGC-Familien</li>
                    <li>Bei Lynch-Syndrom: Jährliche ÖGD ab dem 35. Lebensjahr</li>
                    <li>Bei autoimmun-atrophischer Gastritis: Endoskopische Überwachung alle 3-5 Jahre</li>
                    <li>Bei fortgeschrittener Atrophie/intestinaler Metaplasie: Kontrolle alle 3 Jahre</li>
                </ul>
                <h3>Serologisches Screening</h3>
                <ul>
                    <li>Serologisches Screening auf H. pylori, EBV und Pepsinogene <strong>nicht empfohlen</strong></li>
                    <li>In Asien (Japan, Südkorea) bewährte Strategie zur Risikostratifizierung</li>
                </ul>
                <h3>Chemoprävention</h3>
                <ul>
                    <li><strong>ASS oder NSAR</strong> zur Magenkarzinom-Prävention <strong>nicht empfohlen</strong> (kein Netto-Nutzen, Blutungsrisiko)</li>
                    <li><strong>Statine</strong> zur Prävention <strong>nicht empfohlen</strong> (keine Evidenz aus RCTs)</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen/Becken mit Kontrastmittel:</strong> Standard für Fernmetastasen-Ausschluss.</li>
                    <li>Mit Hydro-CT (Magen-Distension) für bessere Beurteilung der Magenwand.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li>Ergänzend zur CT einsetzbar.</li>
                    <li>Besonders geeignet für Lebermetastasen.</li>
                </ul>
                <h3>Positronenemissionsgraphie (PET-CT)</h3>
                <ul>
                    <li>Optional bei Verdacht auf Fernmetastasen.</li>
                    <li>Zur Differenzierung von benignen und malignen Befunden.</li>
                </ul>
                <h3>Laparoskopie</h3>
                <ul>
                    <li>Vor neoadjuvanter Therapie zum Ausschluss einer Peritonealkarzinose empfohlen.</li>
                    <li>Diagnostische Laparoskopie als Standard vor kurativer Therapie.</li>
                </ul>
                <h3>Peritoneallavage</h3>
                <ul>
                    <li>Zytologie zum Nachweis freier Tumorzellen.</li>
                    <li>Bei positivem Befund: Peritonealkarzinose.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild und Chemie</h3>
                <ul>
                    <li>Blutbild: Anämie, Leukozytose, Thrombopenie.</li>
                    <li>Leberwerte: GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li>Nierenwerte: Kreatinin, Harnstoff.</li>
                    <li>Elektrolyte: Natrium, Kalium, Calcium.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>CEA:</strong> Carcinoembryonales Antigen, unspezifischer Marker.</li>
                    <li><strong>CA 19-9:</strong> Carbohydrate Antigen, bei Magenkarzinom erhöht.</li>
                    <li><strong>CA 72-4:</strong> Magenkarzinom-assoziierter Marker.</li>
                    <li>Routinemäßige Bestimmung in der Nachsorge nicht empfohlen.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li>CRP, BSG: Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Infektionsdiagnostik</h3>
                <ul>
                    <li><strong>Helicobacter pylori:</strong> Testung bei erhöhtem Magenkarzinomrisiko.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Ösophagogastroduodenoskopie (ÖGD)</h3>
                <ul>
                    <li>Goldstandard mit Biopsieentnahme.</li>
                    <li><strong>Hochauflösende Videoendoskopie</strong> soll eingesetzt werden.</li>
                    <li><strong>Magnifikation und virtuelle Chromoendoskopie (NBI, BLI, i-Scan)</strong> zur Verbesserung der Detektionsrate empfohlen.</li>
                    <li><strong>Alarmsymptome</strong> erfordern zeitnahe ÖGD: Dysphagie, rezidivierendes Erbrechen, Inappetenz, Gewichtsverlust, GI-Blutung, Eisenmangelanämie, Vitamin B12-Mangel.</li>
                </ul>
                <h3>Biopsie</h3>
                <ul>
                    <li>Mindestens 6-8 Biopsien aus verdächtigen Arealen.</li>
                    <li><strong>Biopsien aus nicht vom Tumor befallener Schleimhaut</strong> zur H. pylori-Diagnostik und Risikostratifizierung empfohlen.</li>
                    <li>Bei Verdacht auf Malignom: mindestens 8 Biopsien, bei großen Läsionen mindestens 10.</li>
                    <li>4-Augen-Prinzip: Pathologische Zweitmeinung bei jeder Dysplasie.</li>
                    <li>Bei negativem Biopsiebefund aber Tumorverdacht: Erneute Biopsien oder diagnostische Resektion.</li>
                </ul>
                <h3>Endosonographie (EUS)</h3>
                <ul>
                    <li>Bestandteil des Stagings bei kurativer Therapieintention.</li>
                    <li>T-Staging: Sensitivität 88% (T1), 82% (T2), 90% (T3), 99% (T4).</li>
                    <li>N-Staging: Sensitivität 83%, Spezifität 67% (begrenzt).</li>
                    <li>Nachweis von Aszites als Prognosefaktor für Peritonealkarzinose.</li>
                </ul>
                <h3>Histologische Klassifikation</h3>
                <ul>
                    <li>Adenokarzinom ( intestinaler oder diffuser Typ nach Lauren).</li>
                    <li>Andere seltene Typen: Plattenepithelkarzinom, neuroendokrine Tumoren.</li>
                </ul>
                <h3>Grading</h3>
                <ul>
                    <li>G1 (gut differenziert), G2 (mäßig differenziert), G3 (schlecht differenziert).</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HER2</h3>
                <ul>
                    <li>Immunhistochemie (IHC): 0, 1+, 2+, 3+.</li>
                    <li>Bei IHC 2+: FISH-Bestätigung.</li>
                    <li>Therapie: Trastuzumab-Therapie bei HER2-positiv.</li>
                </ul>
                <h3>MSI-H/dMMR</h3>
                <ul>
                    <li>Mikrosatelliteninstabilität.</li>
                    <li>Nachweis mittels IHC oder PCR.</li>
                    <li>Therapie: Immuntherapie (Pembrolizumab, Nivolumab).</li>
                </ul>
                <h3>PD-L1</h3>
                <ul>
                    <li>Combined Positive Score (CPS).</li>
                    <li>Therapie: Checkpoint-Inhibitoren (Pembrolizumab, Nivolumab).</li>
                </ul>
                <h3>Claudin 18.2</h3>
                <ul>
                    <li>Immunhistochemische Färbung.</li>
                    <li>Therapie: Zolbetuximab (zugelassen).</li>
                </ul>
                <h3>Weitere molekulare Marker</h3>
                <ul>
                    <li>NTRK-Fusionen (selten).</li>
                    <li>ROS1, ALK (selten).</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>TNM-Klassifikation (UICC 8. Auflage)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>T1</td><td>Oberflächlich infiltrierend (T1a: Lamina propria/Muscularis mucosae, T1b: Submukosa)</td></tr>
                            <tr><td>T2</td><td>Muscularis propria</td></tr>
                            <tr><td>T3</td><td>Subserosa</td></tr>
                            <tr><td>T4</td><td>T4a: Perforation der Serosa, T4b: Nachbarstrukturen</td></tr>
                            <tr><td>N0</td><td>Keine LK-Metastasen</td></tr>
                            <tr><td>N1</td><td>1-2 LK</td></tr>
                            <tr><td>N2</td><td>3-6 LK</td></tr>
                            <tr><td>N3</td><td>≥7 LK (N3a: 7-15, N3b: ≥16)</td></tr>
                            <tr><td>M1</td><td>Fernmetastasen (inkl. Peritonealkarzinose)</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>Stadieneinteilung</h3>
                <ul>
                    <li><strong>Stadium 0:</strong> Tis, N0, M0 (Carcinoma in situ)</li>
                    <li><strong>Stadium I:</strong> T1, N0, M0</li>
                    <li><strong>Stadium II:</strong> T1-2, N1-2, M0</li>
                    <li><strong>Stadium III:</strong> T3-4, jedes N, M0</li>
                    <li><strong>Stadium IV:</strong> Jedes T, jedes N, M1</li>
                </ul>
                <h3>Prognostische Faktoren</h3>
                <ul>
                    <li>TNM-Stadium (wichtigster Prognosefaktor)</li>
                    <li>Lymphknotenstatus</li>
                    <li>Tumorgrading</li>
                    <li>Perineurale und lymphovaskuläre Invasion</li>
                    <li>Molekulare Subtypen (MSI, HER2)</li>
                    <li><strong>Sarkopenie</strong> als negativer Prognosemarker (neu in LL 3.1)</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Endoskopische Therapie (Frühkarzinom)</h3>
                <ul>
                    <li><strong>Endoskopische Mukosaresektion (EMR)</strong> oder <strong>Submukosadissektion (ESD)</strong></li>
                    <li>Indikation: T1a-Karzinome ohne Ulzeration, differenziert, ohne Lymphgefäßinvasion</li>
                    <li>En-bloc-Resektion bevorzugt (ESD)</li>
                    <li>Risikofaktoren für Lymphknotenmetastasen: Lymphgefäßinvasion, schlechte Differenzierung, Ulzeration, T1b</li>
                    <li>Nach endoskopischer Resektion: Erhöhtes Risiko für metachrone Karzinome (9,3% über 5 Jahre)</li>
                </ul>
                <h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Gastrektomie:</strong> Onkologische Resektion mit D2-Lymphadenektomie</li>
                    <li><strong>Subtotale Gastrektomie:</strong> Bei distalen Tumoren möglich, wenn R0-Resektion erreichbar</li>
                    <li><strong>Totale Gastrektomie:</strong> Bei proximalen Tumoren und diffusem Typ</li>
                    <li><strong>Rekonstruktion:</strong> Y-Roux-Rekonstruktion als Standard</li>
                    <li><strong>Mindestanzahl Lymphknoten:</strong> Mindestens 16 Lymphknoten für adäquates Staging (D2-LAD: 25-30)</li>
                    <li>Laparoskopie als diagnostischer Schritt vor perioperativer Therapie empfohlen (neu LL 3.1)</li>
                    <li>Resektionsränder bei Gastrektomie in Diskussion; in Einzelfällen Abweichung vom Standardsicherheitsabstand möglich</li>
                    <li><strong>Zertifizierte Zentren:</strong> Empfehlung zur Behandlung in zertifizierten Tumorzentren</li>
                </ul>
                <h3>Perioperative Therapie (Standard)</h3>
                <ul>
                    <li><strong>FLOT-Schema (4+4 Zyklen):</strong> Docetaxel + 5-FU/Folinsäure + Oxaliplatin
                        <ul>
                            <li>4 Zyklen neoadjuvant → Operation → 4 Zyklen adjuvant</li>
                        </ul>
                    </li>
                    <li>FLOT verbessert signifikant das Gesamtüberleben (median 57 vs. 48 Monate)</li>
                    <li><strong>Alternative bei AEG-Tumoren:</strong> CROSS-Protokoll (Carboplatin/Paclitaxel + 41,4 Gy Strahlentherapie)</li>
                </ul>
                <h3>Perioperative Immuntherapie (neu in LL 3.1)</h3>
                <ul>
                    <li><strong>DANTE-Studie:</strong> FLOT + Atezolizumab zeigt höhere pCR-Raten</li>
                    <li><strong>MATTERHORN:</strong> FLOT + Durvalumab zeigt verbesserte pCR-Raten</li>
                    <li><strong>KEYNOTE-585:</strong> Pembrolizumab + Chemotherapie zeigt verbesserte pCR</li>
                    <li>HER2-gerichtete Therapien in der perioperativen Therapie nur im Rahmen klinischer Studien</li>
                </ul>
                <h3>Postoperative/Adjuvante Therapie</h3>
                <ul>
                    <li>Bei R1-Resektion: Adjuvante Radiochemotherapie kann erwogen werden</li>
                    <li>Bei fehlender neoadjuvanter Therapie: Adjuvante Chemotherapie bei T3/T4 oder N+</li>
                </ul>
                <h3>Palliative Systemtherapie</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Therapielinie</th>
                                <th>HER2-positiv</th>
                                <th>HER2-negativ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Erstlinie</strong></td>
                                <td>Trastuzumab + Pembrolizumab + Chemotherapie (FOLFOX/CAPOX)</td>
                                <td>Chemotherapie ± Nivolumab/Pembrolizumab (bei CPS ≥5 oder MSI)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Bei Claudin 18.2+: Zolbetuximab + Chemotherapie</td>
                            </tr>
                            <tr>
                                <td><strong>Zweitlinie</strong></td>
                                <td>Trastuzumab-Deruxtecan</td>
                                <td>Ramucirumab ± Paclitaxel, Irinotecan</td>
                            </tr>
                            <tr>
                                <td><strong>Drittlinie</strong></td>
                                <td>-</td>
                                <td>Pembrolizumab (bei MSI oder CPS ≥1)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Limitierte Metastasierung</h3>
                <ul>
                    <li>Bei isolierter Peritonealkarzinose mit niedrigem PCI: Zytoreduktive Chirurgie + HIPEC kann erwogen werden</li>
                    <li>FLOT5/RENAISSANCE-Studie: Kein Überlebensvorteil durch Resektion bei limitierter Metastasierung</li>
                    <li>Regelmäßige Prüfung der Therapieziele in palliativer Situation empfohlen</li>
                </ul>`
            },
            {
                title: "Supportive Therapie & Ernährung",
                html: `<h3>Ernährungstherapie</h3>
                <ul>
                    <li><strong>Präoperative Ernährungstherapie:</strong> Bei Mangelernährung oder hohem Risiko (BMI <18,5, unbeabsichtigter Gewichtsverlust >10%)</li>
                    <li><strong>Intensive perioperative Ernährungstherapie (INS):</strong> 5-7 Tage präoperativ bei mangelernährten Patienten</li>
                    <li>Orale Nahrungssupplemente (ONS) bei Bedarf</li>
                    <li>PEG-Anlage bei erwarteter längerer Nahrungskarenz erwägen</li>
                </ul>
                <h3>Substitutionen nach Gastrektomie</h3>
                <ul>
                    <li><strong>Vitamin B12:</strong> Intramuskulär alle 3 Monate lebenslang (1000 μg)</li>
                    <li><strong>Eisen:</strong> Substitution bei Eisenmangelanämie, regelmäßige Kontrolle der Eisenretentionsparameter</li>
                    <li><strong>Calcium/Vitamin D:</strong> Bei Bedarf, insbesondere nach totaler Gastrektomie</li>
                    <li><strong>Folsäure:</strong> Bei Bedarf</li>
                </ul>
                <h3>Supportive Maßnahmen</h3>
                <ul>
                    <li>Antiemetische Prophylaxe bei Chemotherapie</li>
                    <li>Prophylaxe von Chemotherapie-induzierter Übelkeit und Erbrechen</li>
                    <li>Supportive Therapie bei Chemotherapie-induzierter Neutropenie</li>
                    <li>Schmerztherapie bei fortgeschrittenem Tumorleiden</li>
                </ul>
                <h3>Sarkopenie</h3>
                <ul>
                    <li><strong>Negativer Prognosemarker</strong> (neu in LL 3.1)</li>
                    <li>Diagnose: Sarkopenie definiert durch niedrigen Skelettmuskelindex (SMI)</li>
                    <li>Beeinflusst Therapieverträglichkeit und Überleben</li>
                    <li>Ernährungsinterlichesvention und körper Training empfohlen</li>
                </ul>`
            },
            {
                title: "Nachsorge & Rehabilitation",
                html: `<h3>Strukturierte Nachsorge</h3>
                <ul>
                    <li>Strukturierte ganzheitliche Nachsorge <strong>soll angeboten werden</strong></li>
                    <li>Erste zwei Jahre: mindestens halbjährliche Kontrollen</li>
                    <li>Jahr 3-5: jährliche Kontrollen</li>
                    <li>Nach 5 Jahren: Abschluss der tumorspezifischen Nachsorge</li>
                </ul>
                <h3>Empfohlene Nachsorgeuntersuchungen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Zeitraum</th>
                                <th>Untersuchungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jahr 1-2</td>
                                <td>Klinische Kontrolle, Ernährungsstatus, Schnittbildgebung (CT)</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Klinische Kontrolle, Schnittbildgebung</td>
                            </tr>
                            <tr>
                                <td>Bei Symptomatik</td>
                                <td>Endoskopische Untersuchungen, Tumorspezifische Diagnostik</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Tumormarker</h3>
                <ul>
                    <li>Routinemäßige Bestimmung von Tumormarkern (CEA, CA 19-9, CA 72-4) in der Nachsorge <strong>nicht empfohlen</strong></li>
                    <li>Tumormarker können für Verlaufskontrollen bei bekannter Erkrankung genutzt werden</li>
                </ul>
                <h3>Medizinische Rehabilitation</h3>
                <ul>
                    <li>Anschlussrehabilitation (AHB) nach operativer Therapie empfohlen</li>
                    <li>Stationäre oder ambulante Rehabilitation möglich</li>
                    <li>Multimodale Konzepte: Ernährung, Bewegung, Psychoonkologie</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Ernährungsberatung und -therapie</li>
                    <li>Lebensstilberatung (Raucherentwöhnung, Alkoholverzicht)</li>
                    <li>Psychoonkologische Betreuung</li>
                    <li>Sozialrechtliche Beratung (Berentung, Schwerbehinderung)</li>
                    <li>Bewegungs- und Physiotherapie</li>
                </ul>`
            },
            {
                title: "Palliativmedizin",
                html: `<h3>Therapieziele in nicht-kurativer Situation</h3>
                <ul>
                    <li>Regelmäßige Überprüfung der Therapieziele empfohlen (LL 3.1)</li>
                    <li>Klare Kommunikation über Prognose und Behandlungsoptionen</li>
                    <li>Integration von Best Supportive Care (BSC) frühzeitig erwägen</li>
                </ul>
                <h3>Belastungs- und Symptomerfassung</h3>
                <ul>
                    <li>Systematische Erfassung von Symptomen und Belastungen</li>
                    <li>Nutzung validierter Instrumente (z.B. Distress-Thermometer)</li>
                    <li>Regelmäßige Assessments im Behandlungsverlauf</li>
                </ul>
                <h3>Palliative Therapieoptionen</h3>
                <ul>
                    <li><strong>Palliative Chemotherapie:</strong> Verbesserung von Symptomen und Überleben</li>
                    <li><strong>Palliative Strahlentherapie:</strong> Bei Schmerzen durch Knochenmetastasen, Blutung</li>
                    <li><strong>Chirurgische Palliation:</strong> Bypass-Operation bei Obstruktion, Stent-Implantation</li>
                </ul>
                <h3>Tumorblutung in palliativer Situation</h3>
                <ul>
                    <li>Endoskopische Blutstillung (Argon-Plasma-Koagulation, Clip)</li>
                    <li>Radiologische Embolisation</li>
                    <li>Palliative Strahlentherapie</li>
                </ul>
                <h3>Ernährung in der Sterbephase</h3>
                <ul>
                    <li>Individuelle Entscheidung über künstliche Ernährung</li>
                    <li>Palliative Ernährungsberatung</li>
                    <li>Respektierung des Patientenwillens</li>
                </ul>
                <h3>Psychoonkologie</h3>
                <ul>
                    <li>Frühzeitige Integration psychoonkologischer Betreuung</li>
                    <li>Angehörigenbetreuung</li>
                    <li>Betreuung in der Sterbephase</li>
                </ul>
                <h3>Zugang zur Palliativversorgung</h3>
                <ul>
                    <li>Allgemeine Palliativversorgung (APV) durch behandelndes Team</li>
                    <li>Spezialisierte Ambulante Palliativversorgung (SAPV) bei komplexem Bedarf</li>
                    <li>Stationäre Palliativversorgung bei Bedarf</li>
                </ul>`
            }
        ],
        sources: `<p><strong>Quellen:</strong></p>
        <p>S3-Leitlinie Magenkarzinom. AWMF-Registernummer: 032-009OL. Version 3.1 - Oktober 2025. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>
        <p>Federführende Fachgesellschaft: Deutsche Gesellschaft für Gastroenterologie, Verdauungs- und Stoffwechselkrankheiten (DGVS).</p>
        <p>Gültigkeitsdauer: 3 Jahre bis 31. Dezember 2027.</p>
        <p>Weitere Informationen: <a href='https://www.leitlinienprogramm-onkologie.de/leitlinien/magenkarzinom/' target='_blank'>Leitlinienprogramm Onkologie</a></p>`
    });
})();