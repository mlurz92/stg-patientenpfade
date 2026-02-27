(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "endometriumkarzinom",
        module: "onko",
        title: "Endometriumkarzinom",
        name: "Endometriumkarzinom",
        category: "onko-gyn",
        stand: "S3-LL 4.01 (07/25)",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigstes gynäkologisches Malignom in westlichen Ländern</li>
                    <li>Inzidenz steigt aufgrund der Adipositas-Epidemie</li>
                    <li>Mittleres Alter bei Diagnose: ca. 68 Jahre</li>
                    <li>5-Jahres-Überleben: 78% (sehr gut bei Frühstadium)</li>
                    <li>In Deutschland: ca. 11.000 Neuerkrankungen/Jahr, 2.600 Todesfälle/Jahr</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 80%, östrogenabhängig (Typ I)</li>
                    <li><strong>Seröses Karzinom:</strong> Ca. 3-10%, aggressiv, östrogenunabhängig (Typ II)</li>
                    <li><strong>Klarzelliges Karzinom:</strong> Ca. 2-3%, schlechte Prognose</li>
                    <li><strong>Karzinosarkom (MMMT):</strong> Ca. 2%, hochmaligne, epithelial-mesenchymale Transformation</li>
                    <li><strong>Undifferenziertes/Dedifferenziertes Karzinom:</strong> <1%, sehr aggressiv</li>
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
                                <td><strong>Hormonell</strong></td>
                                <td>Östrogenmonotherapie ohne Gestagenschutz, Tamoxifen, PCOS, Nulliparität, spätes Menopausenalter (≥55 Jahre)</td>
                            </tr>
                            <tr>
                                <td><strong>Metabolisch</strong></td>
                                <td>Adipositas (BMI ≥30), Diabetes mellitus, metabolisches Syndrom, gestörte Glucosetoleranz</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Lynch-Syndrom (HNPCC), Cowden-Syndrom (PTEN), familiare Belastung</td>
                            </tr>
                            <tr>
                                <td><strong>Pharmakologisch</strong></td>
                                <td>Tibolon, ovarielle Stimulationstherapie, sequenziell-kombinierte Hormonersatztherapie</td>
                            </tr>
                            <tr>
                                <td><strong>Protektiv</strong></td>
                                <td>Ovulationshemmer (30% Risikoreduktion), Schwangerschaften, Stillen, körperliche Aktivität, Levonorgestrel-IUP, Endometriumablation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Früherkennung & Diagnostik",
                html: `<h3>Früherkennung</h3>
                <ul>
                    <li><strong>Asymptomatische Frauen ohne Risiko:</strong> Kein Screening mit TVS empfohlen</li>
                    <li><strong>Asymptomatische Frauen mit Risiko:</strong> Kein Screening mit TVS, Biopsie oder Hysteroskopie</li>
                    <li><strong>Frauen unter Tamoxifen:</strong> Kein Screening mit TVS, symptomatische Patientinnen (Blutung) bedürfen Abklärung</li>
                    <li><strong>Postmenopause:</strong> Bei Endometriumdicke >10 mm histologische Abklärung</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Transvaginaler Ultraschall (TVS):</strong> Basisdiagnostik, Messung der Endometriumdicke</li>
                    <li><strong>Hysteroskopie mit fraktionierter Abrasio:</strong> Goldstandard zur Diagnosesicherung</li>
                    <li><strong>Endometriumbiopsie:</strong> Ambulante Alternative (Pipelle, Tao Brush)</li>
                    <li><strong>Zervikale Zytologie:</strong> Bei jeder atypischen vaginalen Blutung</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Beste Methode zur Beurteilung der Myometriuminfiltration und Zervixbeteiligung</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Für Fernmetastasendetektion bei High-risk-Subtypen</li>
                    <li><strong>PET-CT:</strong> Hohe Sensitivität für Lymphknoten- und Fernmetastasen</li>
                    <li><strong>CA-125:</strong> Optional bei serösen Karzinomen</li>
                </ul>
                <h3>Molekulare Klassifikation & Pathologie</h3>
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
                                <td><strong>POLE-ultramutiert</strong></td>
                                <td>7%</td>
                                <td>Sehr gut</td>
                            </tr>
                            <tr>
                                <td><strong>MSI-hypermutiert (dMMR)</strong></td>
                                <td>28%</td>
                                <td>Intermediär</td>
                            </tr>
                            <tr>
                                <td><strong>NSMP (Copy-number niedrig)</strong></td>
                                <td>39%</td>
                                <td>Intermediär</td>
                            </tr>
                            <tr>
                                <td><strong>TP53 mutiert (serös-like)</strong></td>
                                <td>26%</td>
                                <td>Schlecht</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Histopathologische Grading</h3>
                <ul>
                    <li><strong>G1 (low grade):</strong> <5% solide Anteile, gut differenziert</li>
                    <li><strong>G2 (low grade):</strong> 6-50% solide Anteile, mäßig differenziert</li>
                    <li><strong>G3 (high grade):</strong> >50% solide Anteile, schlecht differenziert</li>
                    <li><strong>Seröse/Klarzellige:</strong> Per definitionem G3</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Standard:</strong> Total hysterektomie mit bilateraler Adnektomie</li>
                    <li><strong>Lymphadenektomie:</strong> Sentinel-Node-Biopsie als Standard (ERSGO/ESTRO-Risikoklassifikation)</li>
                    <li><strong>Omentektomie:</strong> Bei serösen/klarzelligen Karzinomen und Karzinosarkomen</li>
                    <li><strong>Minimalinvasive Operation:</strong> Laparoskopisch/roboterassistiert auch bei High-risk-EC</li>
                    <li><strong>Fertilitätserhalt:</strong> Bei FIGO IA, G1 endometrioidem Karzinom möglich</li>
                </ul>
                <h3>Adjuvante Therapie (ESGO/ESTRO-Risikoklassifikation)</h3>
                <ul>
                    <li><strong>Low Risk:</strong> Keine adjuvante Therapie</li>
                    <li><strong>Intermediate Risk:</strong> Vaginale Brachytherapie ± externe Bestrahlung</li>
                    <li><strong>High Risk:</strong> Kombinierte Radiochemotherapie</li>
                    <li><strong>Very High Risk:</strong> Systemische Therapie (Chemotherapie ± Immuntherapie)</li>
                </ul>
                <h3>Fortgeschrittenes Stadium</h3>
                <ul>
                    <li><strong>Zytoreduktion:</strong> Operative Tumorreduktion bei extrauterinem Befall</li>
                    <li><strong>Radiochemotherapie:</strong> Bei lokal fortgeschrittenem Befund</li>
                    <li><strong>Primäre Strahlentherapie:</strong> Bei inoperablen Patienten</li>
                </ul>
                <h3>Systemtherapie (Metastasiert/Rezidiviert)</h3>
                <ul>
                    <li><strong>Endokrine Therapie:</strong> Gestagene, Aromatasehemmer bei HR+ Tumoren</li>
                    <li><strong>Chemotherapie:</strong> Carboplatin + Paclitaxel (Standard)</li>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab/Dostarlimab bei MSI-H/dMMR</li>
                    <li><strong>Immuntherapie + zielgerichtet:</strong> Pembrolizumab + Lenvatinib bei nicht-MSI-H</li>
                    <li><strong>HER2-Therapie:</strong> Trastuzumab bei HER2+ serösen Karzinomen</li>
                    <li><strong>PARP-Inhibitoren:</strong> Olaparib bei HRD-positiven Tumoren</li>
                </ul>`
            },
            {
                title: "Nachsorge & Rezidivmanagement",
                html: `<h3>Strukturierte Nachsorge</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Zeitraum</th>
                                <th>Intervall</th>
                                <th>Untersuchungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jahr 1-3</td>
                                <td>Alle 3 Monate</td>
                                <td>Anamnese, gynäkologische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Jahr 4-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, gynäkologische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, gynäkologische Untersuchung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Vaginalultraschall bei Symptomen (Blutung, Schmerzen)</li>
                    <li>CT/MRT bei klinischem Verdacht auf Rezidiv</li>
                    <li>Lynch-Syndrom-Screening bei Diagnose</li>
                    <li>Psychoonkologische Betreuung</li>
                </ul>
                <h3>Rekurrentes EC</h3>
                <ul>
                    <li><strong>Lokoregionärer Rezidiv:</strong> Operation ± Strahlentherapie</li>
                    <li><strong>Distales Rezidiv:</strong> Systemische Therapie (Chemotherapie, Immuntherapie, zielgerichtete Therapie)</li>
                    <li><strong>Palliativtherapie:</strong> Schmerztherapie, Supportivmaßnahmen</li>
                </ul>`
            },
            {
                title: "Hereditäre Endometriumkarzinome",
                html: `<h3>Lynch-Syndrom (HNPCC)</h3>
                <ul>
                    <li>Häufigkeit: 2-5% der EC-Patientinnen</li>
                    <li>Keimbahnmutationen in MMR-Genen (MLH1, MSH2, MSH6, PMS2)</li>
                    <li>Frühes Erkrankungsalter (Median: 52 Jahre)</li>
                    <li>Screening: Jährliche Hysteroskopie + Endometriumbiopsie ab 40 Jahren</li>
                    <li>Prävention: Prophylaktische Hysterektomie nach Abschluss der Familienplanung</li>
                </ul>
                <h3>Cowden-Syndrom (PTEN-Hamartom-Tumor-Syndrom)</h3>
                <ul>
                    <li>Keimbahnmutation im PTEN-Gen</li>
                    <li>Hohes EC-Risiko (25-50% Lebenszeitrisiko)</li>
                    <li>Screening: Jährliche Endometriumbiopsie ab 30 Jahren</li>
                </ul>`
            },
            {
                title: "Besondere Situationen",
                html: `<h3>Fertilitätserhalt</h3>
                <ul>
                    <li>Indikation: FIGO IA, G1 endometrioides Karzinom, Wunsch nach Kinder</li>
                    <li>Therapie: Hochdosage Gestagene (MPA 500mg/d oder MGA 160mg/d) für 6-12 Monate</li>
                    <li>Verlaufskontrolle: Hysteroskopie + Biopsie alle 3-6 Monate</li>
                    <li>Nach Abschluss der Familienplanung: Hysterektomie mit Adnektomie</li>
                </ul>
                <h3>Geriatrische Patientinnen</h3>
                <ul>
                    <li>Multidisziplinäre Bewertung (Geriatrisches Assessment)</li>
                    <li>Individuelle Risikostratifizierung</li>
                    <li>Palliativtherapie bei begrenzter Lebenserwartung</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Endometriumkarzinom. AWMF-Registernummer: 032-034OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Version 4.01, Juli 2025.</p>"
    });
})();
