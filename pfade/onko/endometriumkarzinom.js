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
                title: "Bildgebende Diagnostik",
                html: `<h3>Transvaginaler Ultraschall (TVS)</h3>
                <ul>
                    <li><strong>Basisdiagnostik:</strong> Messung der Endometriumdicke</li>
                    <li><strong>Postmenopause:</strong> Bei Endometriumdicke >10 mm histologische Abklärung</li>
                    <li>Beurteilung der Myometriuminfiltration</li>
                    <li>Adnexbeurteilung</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Beste Methode zur Beurteilung der Myometriuminfiltration</li>
                    <li>Zervixbeteiligung</li>
                    <li>Parametrienbeteiligung</li>
                    <li>Lymphknotenbeurteilung</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Für Fernmetastasendetektion bei High-risk-Subtypen</li>
                    <li>Thorax zur Lungendiagnostik</li>
                    <li>Abdomen zur Leber- und Lymphknotendiagnostik</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li>Hohe Sensitivität für Lymphknoten- und Fernmetastasen</li>
                    <li>Bei Verdacht auf fortgeschrittene Erkrankung</li>
                    <li>Rezidivdiagnostik</li>
                </ul>
                <h3>Sonographie weitere</h3>
                <ul>
                    <li>Abdomensonographie zum Metastasenausschluss</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Tumormarker</h3>
                <ul>
                    <li><strong>CA-125:</strong> Optional bei serösen Karzinomen</li>
                    <li>Verlaufskontrolle bei Therapieüberwachung</li>
                    <li><strong>CEA:</strong> Optional bei Verdacht auf kolorektale Beteiligung</li>
                    <li><strong>CA 19-9:</strong> Optional bei muzinösen Karzinomen</li>
                </ul>
                <h3>Laborchemie</h3>
                <ul>
                    <li>Blutbild</li>
                    <li>Leberwerte (GOT, GPT, Gamma-GT)</li>
                    <li>Nierenwerte (Kreatinin, Harnstoff)</li>
                    <li>Gerinnungsparameter</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li>Bei Verdacht auf Tumorlyse</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Gewebeprobenentnahme</h3>
                <ul>
                    <li><strong>Hysteroskopie mit fraktionierter Abrasio:</strong> Goldstandard zur Diagnosesicherung</li>
                    <li><strong>Endometriumbiopsie:</strong> Ambulante Alternative (Pipelle, Tao Brush)</li>
                    <li><strong>Zervikale Zytologie:</strong> Bei jeder atypischen vaginalen Blutung</li>
                    <li>Mindestens 6-8 Biopsien bei Hysteroskopie</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Histologischer Typ:</strong> Endometrioid, serös, klarzellig, Karzinosarkom</li>
                    <li><strong>Grading (FIGO):</strong>
                        <ul>
                            <li>G1 (low grade): <5% solide Anteile</li>
                            <li>G2 (low grade): 6-50% solide Anteile</li>
                            <li>G3 (high grade): >50% solide Anteile</li>
                        </ul>
                    </li>
                    <li><strong>Myometriuminfiltration:</strong> Tiefe der Invasion</li>
                    <li><strong>Zervixbeteiligung:</strong> Drüsen/Sroma</li>
                    <li><strong>Lymphovaskuläre Invasion (LVI):</strong> Nachweis von Tumorzellen in Lymph-/Blutgefäßen</li>
                    <li><strong>Perineurale Invasion (PNI):</strong></li>
                    <li><strong>ER/PR-Status:</strong> Hormonrezeptorstatus</li>
                </ul>
                <h3>Spezielle Histologische Typen</h3>
                <ul>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 80%, östrogenabhängig (Typ I)</li>
                    <li><strong>Seröses Karzinom:</strong> Ca. 3-10%, aggressiv, östrogenunabhängig (Typ II)</li>
                    <li><strong>Klarzelles Karzinom:</strong> Ca. 2-3%, schlechte Prognose</li>
                    <li><strong>Karzinosarkom (MMMT):</strong> Ca. 2%, hochmaligne</li>
                    <li><strong>Undifferenziertes Karzinom:</strong> <1%, sehr aggressiv</li>
                </ul>
                <h3>Stadieneinteilung (TNM/FIGO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>IA</td><td>Tumor auf Endometrium begrenzt oder <50% Myometriuminfiltration</td></tr>
                            <tr><td>IB</td><td>≥50% Myometriuminfiltration</td></tr>
                            <tr><td>II</td><td>Zervixstroma-Infiltration</td></tr>
                            <tr><td>IIIA</td><td>Serosa/Adnexe</td></tr>
                            <tr><td>IIIB</td><td> Vagina/Parametrium</td></tr>
                            <tr><td>IIIC1</td><td>Pelvine Lymphknoten</td></tr>
                            <tr><td>IIIC2</td><td>Paraaortale Lymphknoten</td></tr>
                            <tr><td>IVA</td><td>Blase/Darm</td></tr>
                            <tr><td>IVB</td><td>Fernmetastasen</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Molekulare Klassifikation (TCGA)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Häufigkeit</th>
                                <th>Prognose</th>
                                <th>Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>POLE-ultramutiert</strong></td>
                                <td>7%</td>
                                <td>Sehr gut</td>
                                <td>Keine adjuvante Therapie</td>
                            </tr>
                            <tr>
                                <td><strong>MSI-hypermutiert (dMMR)</strong></td>
                                <td>28%</td>
                                <td>Intermediär</td>
                                <td>Immuntherapie (Pembrolizumab, Dostarlimab)</td>
                            </tr>
                            <tr>
                                <td><strong>NSMP (Copy-number niedrig)</strong></td>
                                <td>39%</td>
                                <td>Intermediär</td>
                                <td>Endokrine Therapie</td>
                            </tr>
                            <tr>
                                <td><strong>TP53 mutiert (serös-like)</strong></td>
                                <td>26%</td>
                                <td>Schlecht</td>
                                <td>Chemotherapie ± Immuntherapie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Molekulare Testung</h3>
                <ul>
                    <li><strong>MMR-Proteinexpression (IHC):</strong> MLH1, PMS2, MSH2, MSH6</li>
                    <li><strong>MSI-Analyse:</strong> PCR-basierte Bestimmung</li>
                    <li><strong>POLE-Mutation:</strong> Sequenzierung</li>
                    <li><strong>TP53-Mutation:</strong> IHC (p53-Überexpression)</li>
                    <li><strong>HER2-Status (IHC/FISH):</strong> Bei serösen Karzinomen</li>
                    <li><strong>HRD-Status:</strong> Für PARP-Inhibitor-Therapie</li>
                </ul>
                <h3>Keimbahnmutationstests</h3>
                <ul>
                    <li><strong>Lynch-Syndrom-Screening:</strong> Bei Diagnose empfohlen</li>
                    <li><strong>MMR-Gen-Analyse:</strong> MLH1, MSH2, MSH6, PMS2</li>
                    <li><strong>PTEN:</strong> Bei Verdacht auf Cowden-Syndrom</li>
                </ul>
                <h3>Therapeutisch relevante Marker</h3>
                <ul>
                    <li><strong>PD-L1:</strong> CPS-Score für Immuntherapie</li>
                    <li><strong>HER2:</strong> Trastuzumab bei HER2+</li>
                    <li><strong>HR (Hormonrezeptoren):</strong> ER/PR für endokrine Therapie</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Diagnostisches Staging</h3>
                <ul>
                    <li>Klinische Untersuchung mit Spekulum</li>
                    <li>Bimanuelle palpatorische Untersuchung</li>
                    <li>Rektale Untersuchung bei Verdacht auf Rektuminfiltration</li>
                </ul>
                <h3>Bildgebendes Staging</h3>
                <ul>
                    <li><strong>TVS:</strong> Primärdiagnostik, Endometriumdicke</li>
                    <li><strong>MRT Becken:</strong> Lokales Staging (Myometrium, Zervix)</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Fernmetastasen</li>
                    <li><strong>PET-CT:</strong> Lymphknoten- und Fernmetastasen</li>
                </ul>
                <h3>Lymphknoten-Staging</h3>
                <ul>
                    <li><strong>Sentinel-Node-Biopsie:</strong> Standard (ERSGO/ESTRO)</li>
                    <li><strong>Pelvine Lymphknoten:</strong> Entlang der Arteria iliaca interna und externa</li>
                    <li><strong>Paraaortale Lymphknoten:</strong> Bei High-risk-Tumoren</li>
                </ul>
                <h3>Chirurgisches Staging</h3>
                <ul>
                    <li><strong>Total hysterektomie mit bilateraler Adnektomie:</strong> Standard</li>
                    <li><strong>Omentektomie:</strong> Bei serösen/klarzelligen Karzinomen und Karzinosarkomen</li>
                    <li><strong>Peritoneale Biopsien:</strong> Bei Verdacht auf Peritonealkarzinose</li>
                    <li><strong>Zytologie:</strong> Peritoneallavage</li>
                </ul>
                <h3>Risikoklassifikation (ESGO/ESTRO)</h3>
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
                                <td><strong>Low Risk</strong></td>
                                <td>Stadium IA, G1-2, endometrioid</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediate Risk</strong></td>
                                <td>Stadium IA, G3 oder IB, G1-2</td>
                            </tr>
                            <tr>
                                <td><strong>High Risk</strong></td>
                                <td>Stadium IB, G3 oder Stadium II-III</td>
                            </tr>
                            <tr>
                                <td><strong>Very High Risk</strong></td>
                                <td>Serös, klarzellig, Karzinosarkom, Stadium III-IV</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Früherkennung & Prävention",
                html: `<h3>Früherkennung</h3>
                <ul>
                    <li><strong>Asymptomatische Frauen ohne Risiko:</strong> Kein Screening mit TVS empfohlen</li>
                    <li><strong>Asymptomatische Frauen mit Risiko:</strong> Kein Screening mit TVS, Biopsie oder Hysteroskopie</li>
                    <li><strong>Frauen unter Tamoxifen:</strong> Kein Screening mit TVS, symptomatische Patientinnen (Blutung) bedürfen Abklärung</li>
                </ul>
                <h3>Risikoadaptierte Überwachung</h3>
                <ul>
                    <li><strong>Lynch-Syndrom:</strong> Jährliche Hysteroskopie + Endometriumbiopsie ab 40 Jahren</li>
                    <li><strong>Cowden-Syndrom:</strong> Jährliche Endometriumbiopsie ab 30 Jahren</li>
                </ul>
                <h3>Prävention</h3>
                <ul>
                    <li><strong>Ovulationshemmer:</strong> 30% Risikoreduktion</li>
                    <li><strong>Levonorgestrel-IUP:</strong> Protektiver Effekt</li>
                    <li><strong>Lebensstil:</strong> Körperliche Aktivität, Normalgewicht</li>
                    <li><strong>Prophylaktische Hysterektomie:</strong> Nach Familienplanung bei Lynch-Syndrom erwägen</li>
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
