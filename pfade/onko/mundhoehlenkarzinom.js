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
                title: "1. Epidemiologie & Risikofaktoren",
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
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Nicht heilende Ulzeration oder Wunde.</li>
                    <li>Schmerzen, Dysphagie, Odynophagie.</li>
                    <li>Schwellung, vergrößerte Lymphknoten.</li>
                    <li>Blutung, Foetor ex ore.</li>
                    <li>Zahnlockerung ohne dentale Ursache.</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Inspektion und Palpation der gesamten Mundhöhle.</li>
                    <li><strong>Biopsie:</strong> Inzisionsbiopsie zur histologischen Sicherung.</li>
                    <li><strong>Panendoskopie:</strong> Ausschluss Zweittumor (Pharynx, Larynx, Ösophagus).</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT/CT:</strong> Ausbreitung, Infiltrationstiefe, Lymphknoten.</li>
                    <li><strong>Ultraschall Hals:</strong> Lymphknotenbeurteilung.</li>
                    <li><strong>CT Thorax:</strong> Metastasenausschluss.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium.</li>
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
                                <td>Infiltration von Knochen, Haut, Muskeln</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Kaumuskulatur, Pterygoid, Schädelbasis, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Histologie</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> >90% der Fälle.</li>
                    <li>Grading: G1 (gut differenziert) bis G3 (schlecht differenziert).</li>
                </ul>`
            },
            {
                title: "3. Therapie",
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
                title: "4. Nachsorge",
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