(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "mundhoehlenkarzinom",
        module: "onko",
        title: "Mundhöhlenkarzinom",
        name: "Mundhöhlenkarzinom",
        category: "onko-hno",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste maligne Erkrankung der Mundhöhle</li>
                    <li>In Deutschland ca. 4.500 Neuerkrankungen/Jahr</li>
                    <li>Männer : Frauen = 2 : 1</li>
                    <li>Median bei Diagnose: ca. 60 Jahre</li>
                    <li>5-Jahres-Überleben abhängig vom Stadium (I: ca. 70-80%)</li>
                </ul>
                <h3>Lokalisation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Lokalisation</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Zunge</strong></td>
                                <td>Ca. 50%</td>
                                <td>Seitenrand häufigster Ort, frühe Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>Mundboden</strong></td>
                                <td>Ca. 20%</td>
                                <td>Oft beidseitige Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>Alveolarfortsatz</strong></td>
                                <td>Ca. 15%</td>
                                <td>Oberkiefer/Unterkiefer</td>
                            </tr>
                            <tr>
                                <td><strong>Wange/Lippe</strong></td>
                                <td>Ca. 10%</td>
                                <td>Lippenkarzinom hat bessere Prognose</td>
                            </tr>
                            <tr>
                                <td><strong>Harter Gaumen</strong></td>
                                <td>Ca. 5%</td>
                                <td>Seltener, oft Adenokarzinome der Speicheldrüsen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Hauptrisikofaktor (odds ratio 2-3).</li>
                    <li><strong>Alkohol:</strong> Synergismus mit Rauchen (odds ratio bis 15).</li>
                    <li><strong>HPV-Infektion:</strong> Insbesondere HPV 16, zunehmend bei jüngeren Patienten.</li>
                    <li><strong>Chronische Irritation:</strong> Schlecht sitzende Prothesen, scharfe Zahnkanten.</li>
                    <li><strong>Leukoplakie/Erythroplakie:</strong> Präkanzeröse Läsionen.</li>
                    <li><strong>Betelkauen:</strong> In asiatischen Ländern verbreitet.</li>
                </ul>`
            },
            {
                title: "Klinische Symptome",
                html: `<h3>Typische Symptome</h3>
                <ul>
                    <li>Nicht heilende Ulzeration oder Wunde.</li>
                    <li>Schmerzen, Dysphagie, Odynophagie.</li>
                    <li>Schwellung, vergrößerte Lymphknoten.</li>
                    <li>Blutung, Foetor ex ore.</li>
                    <li>Zahnlockerung ohne dentale Ursache.</li>
                </ul>
                <h3>Klinische Untersuchung</h3>
                <ul>
                    <li><strong>Inspektion:</strong> Systematische Untersuchung der gesamten Mundhöhle, des Gaumens, der Zunge und des Mundbodens.</li>
                    <li><strong>Palpation:</strong> Beurteilung von Raumforderungen, Konsistenz und Ausbreitung.</li>
                    <li><strong>Halslymphknoten:</strong> Palpation der zervikalen Lymphknotenstationen.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Primärtumor</h3>
                <ul>
                    <li><strong>MRT der Mundhöhle und des Halses:</strong> Goldstandard für Beurteilung der lokalen Tumorausbreitung, Infiltrationstiefe und Knochenbeteiligung.</li>
                    <li><strong>CT mit Kontrastmittel:</strong> Alternative zur MRT, gute Knochenbeurteilung.</li>
                    <li><strong>Ultrasonographie:</strong> Ergänzende Beurteilung des Primärtumors und der Weichteilstrukturen.</li>
                </ul>
                <h3>Lymphknoten</h3>
                <ul>
                    <li><strong>Halsultraschall:</strong> Standardmethode zur Lymphknotenbeurteilung.</li>
                    <li><strong>MRT/CT:</strong> Detaillierte Beurteilung von Lymphknotengröße und -morphologie.</li>
                </ul>
                <h3>Fernmetastasen</h3>
                <ul>
                    <li><strong>CT Thorax:</strong> Standarduntersuchung zum Ausschluss von Lungenmetastasen.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium (cT3/T4, N+), zum Nachweis von Fernmetastasen und okkulten Tumoren.</li>
                    <li><strong>Abdomenultraschall:</strong> Beurteilung der Leber und anderer Abdominalorgane.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Verdacht auf Knochenmetastasen.</li>
                </ul>
                <h3>Zahnärztliche Bildgebung</h3>
                <ul>
                    <li><strong>Orthopantomogramm (OPG):</strong> Beurteilung des Kieferknochens.</li>
                    <li><strong>DVT (Digitale Volumentomographie):</strong> Dreidimensionale Knochenbeurteilung bei Tumorinfiltration des Kiefers.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild und Chemie</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Differenzierung von Anämie, Leukozytose, Thrombopenie.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium.</li>
                    <li><strong>Entzündungsparameter:</strong> CRP, BSG.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>SCC (Squamous Cell Carcinoma Antigen):</strong> Tumormarker für Plattenepithelkarzinome, Verlaufskontrolle.</li>
                    <li><strong>CEA (Carcinoembryonales Antigen):</strong> Unspezifischer Marker.</li>
                    <li><strong>Cyfra 21-1:</strong> Zytokeratin-Fragmente, optional.</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li><strong>HIV-Test:</strong> Bei Risikopatienten.</li>
                    <li><strong>Hepatitis-Screening:</strong> Bei geplanter Therapie.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Inzisionsbiopsie:</strong> Standardmethode zur histologischen Diagnosesicherung.</li>
                    <li><strong>Exzisionsbiopsie:</strong> Bei kleinen, gut zugänglichen Läsionen.</li>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Für zytologische Untersuchung bei vergrößerten Lymphknoten.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Histologischer Typ:</strong> Plattenepithelkarzinom (>90%), Verruköses Karzinom, Adenokarzinom, etc.</li>
                    <li><strong>Grading:</strong> G1 (gut differenziert), G2 (mäßig differenziert), G3 (schlecht differenziert).</li>
                    <li><strong>Infiltrationstiefe (Depth of Invasion):</strong> Gemessen in mm, wichtiger Prognosefaktor.</li>
                    <li><strong>Tumordicke (Tumor thickness):</strong> Optional.</li>
                    <li><strong>Perineurale Invasion (PNI):</strong> Nachweis von Tumorzellen in Nervenscheiden.</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Nachweis von Tumorzellen in Lymphgefäßen.</li>
                    <li><strong>Gefäßinvasion:</strong> Venöse/arterielle Invasion.</li>
                </ul>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li><strong>p63/p40:</strong> Marker für Plattenepitheldifferenzierung.</li>
                    <li><strong>CK5/6:</strong> Basal-/Plattenepithelmarker.</li>
                    <li><strong>Ki-67:</strong> Proliferationsindex.</li>
                    <li><strong>EGFR:</strong> Epidermal Growth Factor Receptor, Therapierelevanz.</li>
                    <li><strong>p16:</strong> Surrogatmarker für HPV-Infektion.</li>
                </ul>
                <h3>Resektionspräparat</h3>
                <ul>
                    <li><strong>Resektionsränder:</strong> R0 (mikroskopisch tumorfrei &ge;5 mm), R1 (mikroskopisch Tumorzellen &lt;5 mm), R2 (makroskopisch Tumor).</li>
                    <li><strong>Lymphknotenbefall:</strong> Zahl befallener Lymphknoten / untersuchte Lymphknoten, Extrakapsuläre Ausbreitung (ECE).</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HPV-Status</h3>
                <ul>
                    <li><strong>p16-Immunhistochemie:</strong> Standard-Screening für HPV-Assoziation.</li>
                    <li><strong>PCR oder ISH:</strong> Bestätigungstest für HPV-DNA.</li>
                    <li><strong>Therapeutische Relevanz:</strong> HPV-positive Tumoren haben bessere Prognose, ggf. Deeskalationstherapie.</li>
                </ul>
                <h3>Molekulare Marker</h3>
                <ul>
                    <li><strong>EGFR:</strong> Überexpression bei ca. 80-90%, Therapieoption mit Cetuximab.</li>
                    <li><strong>KRAS/NRAS:</strong> Mutationsanalyse bei metastasierter Erkrankung.</li>
                    <li><strong>BRAF:</strong> Optional bei klinischer Relevanz.</li>
                    <li><strong>PD-L1:</strong> Immuntherapie-Prädiktion (optional).</li>
                </ul>
                <h3>Genexpressionsprofile</h3>
                <ul>
                    <li><strong>Merlin Score:</strong> Experimentell, Prognoseeinschätzung.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>cT (klinisches T):</strong> Klinische Beurteilung des Primärtumors durch Untersuchung und Bildgebung.</li>
                    <li><strong>cN (klinisches N):</strong> Klinische Beurteilung der Lymphknoten durch Palpation und Bildgebung.</li>
                    <li><strong>cM (klinisches M):</strong> Klinischer Ausschluss von Fernmetastasen.</li>
                </ul>
                <h3>Panendoskopie</h3>
                <ul>
                    <li><strong>Ösophagogastroduodenoskopie (ÖGD):</strong> Ausschluss von Zweittumoren im oberen GI-Trakt.</li>
                    <li><strong>Laryngoskopie/Pharyngoskopie:</strong> Beurteilung von Pharynx und Larynx.</li>
                    <li><strong>Bronchoskopie:</strong> Bei V.a. Bronchusbeteiligung oder Zweittumor.</li>
                </ul>
                <h3>TNM-Klassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>T-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>T1</strong></td>
                                <td>Tumor &le;2 cm, Infiltrationstiefe &le;5 mm</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor &le;2 cm, Infiltrationstiefe >5 mm oder Tumor >2-4 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor >4 cm ohne Infiltration tieferer Strukturen</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Infiltration von Knochen (Mandelengaumen, Oberkiefer), Haut, Muskeln</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Kaumuskulatur, Pterygoid, Schädelbasis, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>N-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>N0</strong></td>
                                <td>Keine Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>N1</strong></td>
                                <td>Einzelner ipsilateral Lymphknoten, &le;3 cm</td>
                            </tr>
                            <tr>
                                <td><strong>N2</strong></td>
                                <td>Einzelner ipsilateral Lymphknoten >3-6 cm oder multiple Lymphknoten &le;6 cm</td>
                            </tr>
                            <tr>
                                <td><strong>N3</strong></td>
                                <td>Lymphknoten >6 cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                            <tr><td>III</td><td>T3, T4a</td><td>N0</td><td>M0</td></tr>
                            <tr><td>IVA</td><td>jedes T</td><td>N1-2</td><td>M0</td></tr>
                            <tr><td>IVB</td><td>jedes T</td><td>N3</td><td>M0</td></tr>
                            <tr><td>IVC</td><td>jedes T</td><td>jedes N</td><td>M1</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Frühstadium (T1-T2, N0)</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Transorale Resektion mit Sicherheitsabstand (mindestens 5 mm).</li>
                    <li><strong>Strahlentherapie:</strong> Alternative bei Inoperabilität oder Patientenwunsch.</li>
                    <li><strong>Neck Dissection:</strong> Elektiv bei T2 oder Infiltrationstiefe >4 mm.</li>
                </ul>
                <h3>Lokal fortgeschritten (T3-T4, N+)</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Weite Resektion mit Neck Dissection.</li>
                    <li><strong>Rekonstruktion:</strong> Lokale Lappenplastiken oder freie Lappen (radial, fibula).</li>
                    <li><strong>Adjuvante Radiochemotherapie:</strong> Bei positiven Resektionsrändern oder Lymphknotenbefall.</li>
                </ul>
                <h3>Therapieentscheidung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Konstellation</th>
                                <th>Therapie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Resektable Tumoren</td>
                                <td>Chirurgie ± adjuvante Radio(chemo)therapie</td>
                            </tr>
                            <tr>
                                <td>Nicht-resektable Tumoren</td>
                                <td>Definitive Radiochemotherapie</td>
                            </tr>
                            <tr>
                                <td>HPV-positiv</td>
                                <td>Bessere Prognose, ggf. Deeskalationsstudien</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Metastasiertes Stadium</h3>
                <ul>
                    <li><strong>Systemtherapie:</strong> Platin-basierte Chemotherapie ± Cetuximab.</li>
                    <li><strong>Immuntherapie:</strong> Nivolumab oder Pembrolizumab bei rezidivierter/metastasierter Erkrankung.</li>
                    <li>Palliative Bestrahlung zur Symptomkontrolle.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
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
                                <td>Jahr 1</td>
                                <td>Alle 1-3 Monate</td>
                                <td>Mundhöhleninspektion, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 2</td>
                                <td>Alle 2-4 Monate</td>
                                <td>Mundhöhleninspektion, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 4-6 Monate</td>
                                <td>Mundhöhleninspektion, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Mundhöhleninspektion, Halsultraschall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Regelmäßige zahnärztliche Kontrollen.</li>
                    <li>Logopädische Betreuung bei Sprach-/Schluckstörungen.</li>
                    <li>Ernährungsberatung.</li>
                    <li>Raucherentwöhnung und Alkoholkarenz.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Zweitkarzinome</h3>
                <ul>
                    <li>Erhöhtes Risiko für Zweittumoren (ca. 10-20%).</li>
                    <li>Häufigste Lokalisationen: Mundhöhle, Pharynx, Larynx, Ösophagus.</li>
                    <li>Regelmäßige Panendoskopie empfohlen.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Mundhöhlenkarzinom. AWMF-Registernummer: 007-100OL. Leitlinienprogramm Onkologie.</p>"
    });
})();