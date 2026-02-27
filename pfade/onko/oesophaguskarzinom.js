(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "oesophaguskarzinom",
        module: "onko",
        title: "Ösophaguskarzinom",
        name: "Ösophaguskarzinom",
        category: "onko-gi",
        stand: "12/23",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Sechsthäufigste Krebserkrankung weltweit</li>
                    <li>Plattenepithelkarzinom häufiger in Entwicklungsländern</li>
                    <li>Adenokarzinom in westlichen Ländern steigend</li>
                    <li>Männer deutlich häufiger betroffen (Verhältnis ca. 3-4:1)</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> Oberer/mittlerer Ösophagusdrittel.</li>
                    <li><strong>Adenokarzinom:</strong> Distaler Ösophagus/gastroösophagealer Übergang.</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Typ</th>
                                <th>Risikofaktoren</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Plattenepithelkarzinom</strong></td>
                                <td>Alkohol, Rauchen, heiße Getränke, Nitrosamine, Achalasie, Plummer-Vinson-Syndrom.</td>
                            </tr>
                            <tr>
                                <td><strong>Adenokarzinom</strong></td>
                                <td>Refluxkrankheit, Barrett-Ösophagus, Adipositas, Rauchen.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Endoskopie</h3>
                <ul>
                    <li><strong>Ösophagogastroduodenoskopie (ÖGD):</strong> Goldstandard mit Biopsieentnahme, Inspektion des gesamten Ösophagus und Magens.</li>
                    <li><strong>Chromoendoskopie:</strong> Einsatz von Farbstoffen (z.B. Lugol) zur besseren Darstellung von Läsionen.</li>
                </ul>
                <h3>Endosonographie (EUS)</h3>
                <ul>
                    <li><strong>Endosonographie:</strong> Bestimmung der T-Infiltrationstiefe und Beurteilung der lokalen Lymphknoten.</li>
                    <li><strong>Feinnadelpunktion (EUS-FNP):</strong> Gezielte Punktion von Lymphknoten oder suspekten Raumforderungen.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Standarduntersuchung zum Fernmetastasen-Ausschluss.</li>
                    <li><strong>CT Becken:</strong> Bei Verdacht auf Beckenmetastasen.</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li><strong>FDG-PET-CT:</strong> Bei cT3/T4 oder Verdacht auf Lymphknotenmetastasen, zum Nachweis von Fernmetastasen.</li>
                    <li><strong>Indikationen:</strong> Staging, Therapieplanung, Rezidivdiagnostik.</li>
                </ul>
                <h3>Weitere Bildgebung</h3>
                <ul>
                    <li><strong>Bronchoskopie:</strong> Bei Tumoren im oberen/mittleren Drittel zum Tracheainfiltrations-Ausschluss.</li>
                    <li><strong>Laparoskopie:</strong> Staging-Laparoskopie bei Adenokarzinomen des distalen Ösophagus/gastroösophagealen Übergangs zum Ausschluss von Peritonealmetastasen.</li>
                    <li><strong>MRT:</strong> Keine Routine, bei speziellen Fragestellungen (z.B. Lebermetastasen).</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild und Chemie</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Differenzierung von Anämie, Leukozytose, Thrombopenie.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin, alkalische Phosphatase.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff, GFR.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium.</li>
                    <li><strong>Albumin:</strong> Ernährungszustand.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP:</strong> Entzündungsparameter, prognostische Relevanz.</li>
                    <li><strong>BSG:</strong> Unspezifischer Entzündungsmarker.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>CEA (Carcinoembryonales Antigen):</strong> Verlaufskontrolle bei metastasierter Erkrankung.</li>
                    <li><strong>CA 19-9:</strong> Ergänzender Marker, insbesondere bei Adenokarzinom.</li>
                    <li><strong>CA 125:</strong> Bei Verdacht auf Peritonealbeteiligung.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie</h3>
                <ul>
                    <li><strong>ÖGD-Biopsie:</strong> Mindestens 6 Proben aus verdächtigen Arealen.</li>
                    <li><strong>Ziel:</strong> Histologische Sicherung und Subtypisierung.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Histologischer Typ:</strong>
                        <ul>
                            <li>Plattenepithelkarzinom (SCC): Oberer/mittlerer Ösophagusdrittel.</li>
                            <li>Adenokarzinom: Distaler Ösophagus/gastroösophagealer Übergang (Siewert-Typen I-III).</li>
                            <li>Adenosquamöses Karzinom, undifferenziertes Karzinom (selten).</li>
                        </ul>
                    </li>
                    <li><strong>Grading:</strong> G1 (gut differenziert), G2 (mäßig differenziert), G3 (schlecht differenziert).</li>
                    <li><strong>Tumorlokalisation:</strong> Zervikal, oberes, mittleres, unteres Drittel.</li>
                </ul>
                <h3>TNM-Klassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>T-Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Tis</strong></td><td>Carcinoma in situ / High-grade Dysplasie</td></tr>
                            <tr><td><strong>T1a</strong></td><td>Invasion in Lamina propria oder Muscularis mucosae</td></tr>
                            <tr><td><strong>T1b</strong></td><td>Invasion in Submukosa</td></tr>
                            <tr><td><strong>T2</strong></td><td>Invasion in Muscularis propria</td></tr>
                            <tr><td><strong>T3</strong></td><td>Invasion in Adventitia</td></tr>
                            <tr><td><strong>T4a</strong></td><td>Invasion in Pleura, Perikard, Zwerchfell</td></tr>
                            <tr><td><strong>T4b</strong></td><td>Invasion in Aorta, Wirbelkörper, Trachea</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Standard-Marker</h3>
                <ul>
                    <li><strong>HER2-Status:</strong> Immunhistochemie (IHC) und ggf. ISH/FISH bei IHC 2+. Für Trastuzumab-Therapie bei Adenokarzinom.</li>
                    <li><strong>MSI/dMMR:</strong> Mikrosatelliteninstabilität / Mismatch-Repair-Defizienz. Für Immuntherapie-Option empfohlen.</li>
                    <li><strong>PD-L1:</strong> Immunhistochemische Bestimmung. CPS (Combined Positive Score) für Immuntherapie-Entscheidung.</li>
                </ul>
                <h3>Weitere molekulare Marker</h3>
                <ul>
                    <li><strong>EGFR:</strong> Optional, für Therapieentscheidungen (Cetuximab).</li>
                    <li><strong>NTRK-Fusion:</strong> Bei fortgeschrittenem Plattenepithelkarzinom (Larotrectinib).</li>
                    <li><strong>TMB (Tumor Mutational Burden):</strong> Für Immuntherapie-Indikation in ausgewählten Fällen.</li>
                </ul>
                <h3>HPV-Status</h3>
                <ul>
                    <li><strong>HPV-P16:</strong> Nicht routinemäßig bei Ösophaguskarzinom, im Unterschied zu Oropharynxkarzinom.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Multimodales Staging</h3>
                <ul>
                    <li><strong>Ziel:</strong> Bestimmung der lokalen Tumorausbreitung, Lymphknotenstatus und Fernmetastasen.</li>
                    <li><strong>Multiprofessionell:</strong> Tumorboard mit Chirurgie, Onkologie, Radiologie, Pathologie.</li>
                </ul>
                <h3>Diagnostischer Algorithmus</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Untersuchung</th>
                                <th>Zweck</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ÖGD + Biopsie</td>
                                <td>Primärdiagnose, Histologie</td>
                            </tr>
                            <tr>
                                <td>EUS ± FNP</td>
                                <td>T-Stadium, lokale Lymphknoten</td>
                            </tr>
                            <tr>
                                <td>CT Thorax/Abdomen</td>
                                <td>Fernmetastasen, Lymphknoten</td>
                            </tr>
                            <tr>
                                <td>PET-CT</td>
                                <td>Bei cT3/T4 oder N+-Verdacht</td>
                            </tr>
                            <tr>
                                <td>Bronchoskopie</td>
                                <td>Bei oberem/mittlerem Drittel</td>
                            </tr>
                            <tr>
                                <td>Laparoskopie</td>
                                <td>Bei AEG I-III (selektiv)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Stadieneinteilung (UICC 8)</h3>
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
                            <tr><td>0</td><td>Tis</td><td>N0</td><td>M0</td></tr>
                            <tr><td>I</td><td>T1</td><td>N0</td><td>M0</td></tr>
                            <tr><td>IIA</td><td>T1</td><td>N1</td><td>M0</td></tr>
                            <tr><td>IIB</td><td>T2</td><td>N0</td><td>M0</td></tr>
                            <tr><td>IIIA</td><td>T1-2</td><td>N1</td><td>M0</td></tr>
                            <tr><td>IIIB</td><td>T2-3</td><td>N1</td><td>M0</td></tr>
                            <tr><td>IIIC</td><td>jedes T</td><td>N2-3</td><td>M0</td></tr>
                            <tr><td>IV</td><td>jedes T</td><td>jedes N</td><td>M1</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Transthorakale Ösophagektomie:</strong> Standard bei Tumoren des mittleren/distalen Drittels (Ivor-Lewis).</li>
                    <li><strong>Transhiatale Ösophagektomie:</strong> Alternative bei distalen Tumoren.</li>
                    <li><strong>Zervikale Ösophagektomie:</strong> Bei Tumoren des oberen Drittels.</li>
                    <li><strong>Magenschlauchbildung:</strong> Rekonstruktion als Standard.</li>
                    <li><strong>Keine Resektion bei Fernmetastasen:</strong> Präoperativer Nachweis von Fernmetastasen = Kontraindikation zur Operation.</li>
                </ul>
                <h3>Endoskopische Therapie</h3>
                <ul>
                    <li>Endoskopische Resektion (ER) bei frühen Tumoren (T1a)</li>
                    <li>Lokal ablative Verfahren</li>
                </ul>
                <h3>Neoadjuvante/Perioperative Therapie</h3>
                <ul>
                    <li><strong>CROSS-Protokoll:</strong> Radiochemotherapie (41,4 Gy + Carboplatin/Paclitaxel) gefolgt von Resektion.</li>
                    <li><strong>FLOT:</strong> Perioperative Chemotherapie bei Adenokarzinomen des gastroösophagealen Übergangs.</li>
                </ul>
                <h3>Definitive Radiochemotherapie</h3>
                <ul>
                    <li>Bei Inoperabilität oder Ablehnung der Operation.</li>
                    <li>Dosierung: 50,4 Gy + Chemotherapie (5-FU/Cisplatin oder Carboplatin/Paclitaxel).</li>
                </ul>
                <h3>Palliative Systemtherapie (Version 4.0)</h3>
                <ul>
                    <li><strong>Erstlinie HER2-positiv:</strong> Trastuzumab + Chemotherapie.</li>
                    <li><strong>Erstlinie Adenokarzinom HER2-negativ mit PD-L1:</strong> Platinbasierte Chemotherapie + Pembrolizumab</li>
                    <li><strong>Erstlinie Plattenepithelkarzinom mit PD-L1:</strong> Platinbasierte Chemotherapie + Pembrolizumab</li>
                    <li><strong>Alternativ Plattenepithelkarzinom:</strong> Nivolumab + Ipilimumab (Kombination)</li>
                    <li><strong>Zweitlinie MSI/dMMR:</strong> Checkpoint-Inhibitor nach Versagen der Erstlinie</li>
                    <li><strong>Zweitlinie:</strong> Ramucirumab ± Paclitaxel, Irinotecan.</li>
                </ul>
                <h3>Restaging nach neoadjuvanter Therapie</h3>
                <ul>
                    <li>Bei Tumorpersistenz/Lokalrezidiv nach Radiochemotherapie: Operative Resektion prüfen</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Strukturierte Nachsorge (Version 4.0)</h3>
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
                                <td>Jahr 1-2</td>
                                <td>Alle 3 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                            <tr>
                                <td>Jahr 1, 2, 3, 5</td>
                                <td>-</td>
                                <td>ÖGD, CT Thorax/Abdomen (bei potenziell kurativer Therapie)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Strukturierte Rehabilitationsmaßnahmen empfohlen</li>
                    <li>Ernährungsberatung (Dilatationen bei Stenosen)</li>
                    <li>Logopädie bei Schluckstörungen</li>
                    <li>Psychoonkologische Betreuung</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li>Frühzeitige Integration der Palliativversorgung</li>
                    <li>Multiprofessionelle symptomorientierte Betreuung</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Ösophaguskarzinom. AWMF-Registernummer: 021-023OL. Version 4.0 - Dezember 2023. Leitlinienprogramm Onkologie.</p>"
    });
})();
