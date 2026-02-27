(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "harnblasenkarzinom",
        module: "onko",
        title: "Harnblasenkarzinom",
        name: "Harnblasenkarzinom",
        category: "onko-uro",
        stand: "03/25",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>In Deutschland erkranken ca. 28.000 Menschen jährlich neu an einem Harnblasentumor</li>
                    <li>Mittleres Erkrankungsalter: 73 Jahre (Männer) bzw. 77 Jahre (Frauen)</li>
                    <li>Männer 3-4x häufiger betroffen als Frauen</li>
                    <li>Das Harnblasenkarzinom ist der zweithäufigste Tumor im Fachgebiet der Urologie</li>
                    <li>Nicht-invasive Tumoren (pTa und CIS) machen ca. 70% der primär diagnostizierten Urothelkarzinome aus</li>
                </ul>
                <h3>Risikofaktoren</h3>
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
                                <td><strong>Rauchen</strong></td>
                                <td>Wichtigster Risikofaktor, ca. 50% der Fälle. Das Risiko steigt mit Dauer und Menge des Rauchens.</td>
                            </tr>
                            <tr>
                                <td><strong>Berufliche Exposition</strong></td>
                                <td>Aromatische Amine (Azofarbstoffe), Benzidin, 2-Naphthylamin. BK 1301 anerkannt.</td>
                            </tr>
                            <tr>
                                <td><strong>Medikamente</strong></td>
                                <td>Cyclophosphamid (dosisabhängig), Phenazetin (seit 1986 nicht mehr zugelassen), Aristolochiasäure.</td>
                            </tr>
                            <tr>
                                <td><strong>Infektionen</strong></td>
                                <td>Schistosomiasis (Plattenepithelkarzinom), chronische Harnwegsinfekte.</td>
                            </tr>
                            <tr>
                                <td><strong>Strahlentherapie</strong></td>
                                <td>Bestrahlung im kleinen Becken (z.B. Zervixkarzinom) mit Latenzzeit von mehreren Jahren.</td>
                            </tr>
                            <tr>
                                <td><strong>Genetische Faktoren</strong></td>
                                <td>Lynch-Syndrom (MSH2-Mutation) erhöht das Risiko für obere Harnwege und Harnblase.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>CT-Urogramm</h3>
                <ul>
                    <li>Standard für Ausschluss oberer Harnwege und Fernmetastasen.</li>
                    <li>Kontrastmittel verstärkte CT des Abdomens und Beckens.</li>
                </ul>
                <h3>Multiparametrisches MRT (mpMRT)</h3>
                <ul>
                    <li>Seit Version 3.0 als diagnostische Option bei Verdachts- und Erstdiagnose empfohlen.</li>
                    <li>Hohe Auflösung für T-Staging und Detektion von Lymphknoten.</li>
                </ul>
                <h3>Sonographie</h3>
                <ul>
                    <li>Ergänzend für Nieren und Harnblase.</li>
                    <li>Zur Beurteilung von Harnstau.</li>
                </ul>
                <h3>Weitere Bildgebung</h3>
                <ul>
                    <li>PET-CT: Optional bei Verdacht auf Fernmetastasen.</li>
                    <li>Bone Scan: Bei Verdacht auf Knochenmetastasen.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik & Urindiagnostik",
                html: `<h3>Urinzytologie</h3>
                <ul>
                    <li>Detektion von Tumorzellen im Urin.</li>
                    <li>Neue Paris-Klassifikation seit Version 3.0.</li>
                    <li>Sensitivität für high-grade Tumoren höher als für low-grade.</li>
                </ul>
                <h3>Urinmarker</h3>
                <ul>
                    <li><strong>NMP22:</strong> Nukleäres Mitoseprotein, Marker für urotheliale Tumoren.</li>
                    <li><strong>UroVysion (FISH):</strong> Fluoreszenz-in-situ-Hybridisierung zum Nachweis chromosomaler Aberrationen.</li>
                    <li><strong>BTA (Blasentumor-assoziiertes Antigen):</strong> Als Ergänzung zur Zytologie.</li>
                    <li><strong>UroMaker:</strong> Moderne Urinmarker-Kombinationen.</li>
                </ul>
                <h3>Blutlabor</h3>
                <ul>
                    <li>Blutbild, Leberwerte, Nierenwerte.</li>
                    <li>Tumormarker: CEA, CA 19-9 (limitierte Relevanz).</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Zystoskopie</h3>
                <ul>
                    <li>Goldstandard zur Beurteilung der Blasenschleimhaut und Biopsieentnahme.</li>
                    <li>Fluoreszenzzystoskopie (PDD) kann die Detektionsrate verbessern.</li>
                    <li>Biopsie verdächtiger Läsionen.</li>
                </ul>
                <h3>Transurethrale Resektion (TUR-B)</h3>
                <ul>
                    <li>Diagnostisch und therapeutisch.</li>
                    <li>Komplette Abtragung des Tumors erforderlich.</li>
                    <li>Nachresektion bei high-risk Tumoren innerhalb von 4-6 Wochen empfohlen.</li>
                    <li>En-bloc-Resektion wird bevorzugt.</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Urothelkarzinom:</strong> Ca. 90% aller Blasenkarzinome.</li>
                    <li><strong>Plattenepithelkarzinom:</strong> Ca. 5%, assoziiert mit chronischer Entzündung/Bilharziose.</li>
                    <li><strong>Adenokarzinom:</strong> Selten, ca. 2%.</li>
                </ul>
                <h3>Grading</h3>
                <ul>
                    <li>Low-grade vs. High-grade nach WHO-Klassifikation.</li>
                    <li> Carcinoma in situ (CIS): High-grade, flache Läsion.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>FGFR3-Mutation</h3>
                <ul>
                    <li>Bei nicht-muskelinvasivem Urothelkarzinom häufig (ca. 50% der low-grade Tumoren).</li>
                    <li>Therapeutische Relevanz: FGFR-Inhibitoren (Erdafitinib) bei Fortschreiten.</li>
                </ul>
                <h3>PD-L1</h3>
                <ul>
                    <li>Für Immuntherapie bei fortgeschrittenem Stadium relevant.</li>
                    <li>Immunhistochemische Färbung als Prädiktor.</li>
                </ul>
                <h3>TMB (Tumormutationslast)</h3>
                <ul>
                    <li>Für Immuntherapie-Prädiktion.</li>
                    <li>High TMB zeigt besseres Ansprechen auf Checkpoint-Inhibitoren.</li>
                </ul>
                <h3>weitere molekulare Marker</h3>
                <ul>
                    <li>MSI-Status (Mikrosatelliteninstabilität) für Immuntherapie.</li>
                    <li>TERT-Promotor-Mutationen.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>NMIBC</strong></td>
                                <td>Nicht-muskelinvasiv: Ta, T1, CIS</td>
                            </tr>
                            <tr>
                                <td><strong>MIBC</strong></td>
                                <td>Muskelinvasiv: ≥T2</td>
                            </tr>
                            <tr>
                                <td><strong>Metastasiert</strong></td>
                                <td>M1 (Fernmetastasen)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>TNM-Klassifikation</h3>
                <ul>
                    <li><strong>T (Tumor):</strong> Ta (nicht-invasiv), T1 (Submukosa), T2 (Muscularis propria), T3 (Perivesikales Gewebe), T4 (Nachbarorgane).</li>
                    <li><strong>N (Lymphknoten):</strong> N0 (keine LK), N1 (Regionäre LK), N2 (Pelvine LK), N3 (Iliakal-LK).</li>
                    <li><strong>M (Metastasen):</strong> M0 (keine), M1 (Fernmetastasen).</li>
                </ul>
                <h3>Risikogruppen (EORTC)</h3>
                <ul>
                    <li>Niedriges Risiko: Solitär, pTa low-grade, <3cm, kein CIS.</li>
                    <li>Intermediäres Risiko: Alle Tumoren zwischen low- und high-risk.</li>
                    <li>Hohes Risiko: T1 high-grade, CIS, multiple Rezidive, >3cm.</li>
                </ul>`
            },
            {
                title: "Therapie des nicht-muskelinvasiven Blasenkarzinoms (NMIBC)",
                html: `<h3>TUR-B</h3>
                <ul>
                    <li>Komplette transurethrale Resektion als Primärtherapie</li>
                    <li>En-bloc-Resektion wird empfohlen</li>
                    <li>Nachresektion bei T1-Tumoren, high-grade, Tumoren >3cm innerhalb von 4-6 Wochen</li>
                </ul>
                <h3>Intravesikale Instillationstherapie</h3>
                <ul>
                    <li><strong>Mitomycin C:</strong> Einmalige postoperative Instillation innerhalb von 24 Stunden empfohlen.</li>
                    <li><strong>BCG-Instillation:</strong> Bei intermediärem und hohem Risiko (Induktionskurs + Erhaltungstherapie über 1-3 Jahre).</li>
                </ul>
                <h3>Risikogruppen (EORTC)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Merkmale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Niedriges Risiko</strong></td>
                                <td>Solitär, pTa low-grade, <3cm, kein CIS</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediäres Risiko</strong></td>
                                <td>Alle Tumoren zwischen low- und high-risk</td>
                            </tr>
                            <tr>
                                <td><strong>Hohes Risiko</strong></td>
                                <td>T1 high-grade, CIS, multiple Rezidive, >3cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Therapie bei BCG-Versagen</h3>
                <ul>
                    <li>Radikale Zystektomie empfohlen bei BCG-refraktären high-risk Tumoren</li>
                    <li>Alternativ: Intravesikale Chemotherapie (Gemcitabin), BCG-Reinduktion, intravesikale Immuntherapie</li>
                </ul>
                <h3>Carcinoma in situ (CIS)</h3>
                <ul>
                    <li>BCG-Instillationstherapie ist Standard</li>
                    <li>Bei BCG-Versagen: Radikale Zystektomie oder radikale Radiochemotherapie</li>
                </ul>`
            },
            {
                title: "Therapie des muskelinvasiven Blasenkarzinoms (MIBC)",
                html: `<h3>Radikale Zystektomie</h3>
                <ul>
                    <li>Standardtherapie beim muskelinvasiven Karzinom</li>
                    <li>Mit pelviner Lymphadenektomie (mindestens template-based)</li>
                    <li>Bei Männern: Zystoprostatektomie</li>
                    <li>Bei Frauen: Zystektomie mit vorderer Exenteration (Urethrektomie bei Tumorinfiltration)</li>
                </ul>
                <h3>Neoadjuvante Chemotherapie</h3>
                <ul>
                    <li>Standard vor radikaler Zystektomie bei geeigneten Patienten</li>
                    <li><strong>Empfohlene Schemata:</strong> MVAC (Methotrexate, Vinblastin, Adriamycin, Cisplatin) oder GC (Gemcitabin + Cisplatin)</li>
                    <li>4 Zyklen präoperativ empfohlen</li>
                    <li>Empfehlungsgrad: Starke Empfehlung (A)</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Adjuvante Immuntherapie:</strong> Seit Version 3.0 neue Empfehlungen für geeignete Patienten (z.B. Nivolumab).</li>
                    <li>Adjuvante Chemotherapie bei fehlender neoadjuvanter Therapie und hohem Rezidivrisiko möglich.</li>
                </ul>
                <h3>Trimodale Therapie (Organerhalt)</h3>
                <ul>
                    <li>TUR-B + Radiochemotherapie</li>
                    <li>Alternative bei Inoperabilität oder Organerhaltungswunsch</li>
                    <li>Bei Non-Response: Salvage-Zystektomie</li>
                </ul>
                <h3>Harnableitung</h3>
                <ul>
                    <li><strong>Ileum-Conduit:</strong> Häufigste kontinente Ableitung</li>
                    <li><strong>Neoblase (orthotop):</strong> Kontinente Option bei geeigneten Patienten (Männer, keine Harnröhreninfiltration)</li>
                    <li><strong>Kutane Ureterostomia:</strong> Bei Kontraindikationen für longeres Reservoir</li>
                    <li><strong>Intrakorporale Harnableitung:</strong> Zunehmend bei roboterassistierter Zystektomie</li>
                </ul>
                <h3>Perioperative Systemtherapie</h3>
                <ul>
                    <li>Multidisziplinäre Tumorkonferenz vor Therapieentscheidung erforderlich</li>
                    <li>Neoadjuvante cisplatin-haltige Chemotherapie bei cT3-T4 oder N+ empfohlen</li>
                    <li>Adjuvante Immuntherapie bei Pathologie ypT3/T4 oder N+ nach neoadjuvanter Chemotherapie</li>
                </ul>`
            },
            {
                title: "Palliative Systemtherapie",
                html: `<h3>Erstlinientherapie</h3>
                <h4>Cisplatin-fähige Patienten</h4>
                <ul>
                    <li><strong>Standard:</strong> Gemcitabin + Cisplatin (GC)</li>
                    <li><strong>Alternativ:</strong> MVAC, HD-MVAC</li>
                    <li>Ziel: Krankheitskontrolle, Symptomlinderung, Überlebensverlängerung</li>
                </ul>
                <h4>Nicht cisplatin-fähige Patienten</h4>
                <ul>
                    <li><strong>Carboplatin-haltige Regime:</strong> Gemcitabin + Carboplatin</li>
                    <li><strong>Immuntherapie:</strong> Atezolizumab oder Pembrolizumab bei PD-L1-positiven Tumoren</li>
                    <li><strong>Chemotherapie:</strong> Gemcitabin als Monotherapie</li>
                </ul>
                <h3>Zweitlinientherapie</h3>
                <ul>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab, Atezolizumab</li>
                    <li><strong>Antikörper-Wirkstoff-Konjugat:</strong> Enfortumab Vedotin</li>
                    <li><strong>Chemotherapie:</strong> Vinflunin (zugelassen), Paclitaxel, Docetaxel</li>
                    <li><strong>FGFR-Inhibitoren:</strong> Erdafitinib bei FGFR3-Mutationen nach Chemotherapie</li>
                </ul>
                <h3>Supportive Therapie</h3>
                <ul>
                    <li>Schmerztherapie nach WHO-Schema</li>
                    <li>Behandlung von Komplikationen (Harnstau, Infektionen, Anämie)</li>
                    <li>Ernährungsberatung und supportiv-palliative Betreuung</li>
                </ul>
                <h3>Metastasenresektion</h3>
                <ul>
                    <li>Kann bei ausgewählten Patienten mit solitären Metastasen erwogen werden</li>
                    <li>Nach Ansprechen auf Systemtherapie</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge bei NMIBC</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Zystoskopie-Intervall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Niedriges Risiko</strong></td>
                                <td>Nach 3 Monaten, dann jährlich für 5 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediäres Risiko</strong></td>
                                <td>Alle 3-6 Monate für 2 Jahre, dann jährlich</td>
                            </tr>
                            <tr>
                                <td><strong>Hohes Risiko</strong></td>
                                <td>Alle 3 Monate für 2 Jahre, dann alle 6 Monate für 3 Jahre, dann jährlich</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>Urinzytologie bei jedem Nachsorgetermin empfohlen.</p>
                <h3>Nachsorge bei MIBC nach kurativer Therapie</h3>
                <h4>Nach Zystektomie</h4>
                <ul>
                    <li><strong>Jahr 1-2:</strong> Alle 3-6 Monate (körperliche Untersuchung, Labor, Bildgebung)</li>
                    <li><strong>Jahr 3-5:</strong> Alle 6 Monate</li>
                    <li><strong>Ab Jahr 5:</strong> Jährlich</li>
                </ul>
                <h4>Nach Radiochemotherapie</h4>
                <ul>
                    <li>Zystoskopie alle 3-6 Monate in den ersten 2 Jahren</li>
                    <li>CT-Urogramm jährlich</li>
                </ul>
                <h3>Metastasierte Erkrankung</h3>
                <ul>
                    <li>Regelmäßige Bildgebung alle 2-4 Zyklen der Systemtherapie</li>
                    <li>Symptomorientierte Nachsorge</li>
                </ul>
                <h3>Allgemeine Maßnahmen</h3>
                <ul>
                    <li>Raucherentwöhnung</li>
                    <li>Obere Harnwege: Jährliche Bildgebung (Sonographie/CT)</li>
                    <li>Psychosoziale Unterstützung bei Bedarf</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Früherkennung, Diagnose, Therapie und Nachsorge des Harnblasenkarzinoms. Version 3.0 - März 2025. AWMF-Registernummer: 032-038OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
