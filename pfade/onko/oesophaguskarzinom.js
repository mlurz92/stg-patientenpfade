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
                title: "Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Ösophagogastroduodenoskopie (ÖGD):</strong> Goldstandard mit Biopsieentnahme.</li>
                    <li><strong>Biopsie:</strong> Mindestens 6 Proben aus verdächtigen Arealen.</li>
                    <li><strong>Endosonographie (EUS):</strong> T-Infiltrationstiefe und lokale Lymphknoten.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Fernmetastasen-Ausschluss.</li>
                    <li><strong>PET-CT:</strong> Bei cT3/T4 oder Lymphknotenverdacht.</li>
                    <li><strong>Bronchoskopie:</strong> Bei Tumoren im oberen/mittleren Drittel zum Tracheainfiltrations-Ausschluss.</li>
                    <li><strong>Laparoskopie:</strong> Bei Adenokarzinomen des distalen Ösophagus/gastroösophagealen Übergangs.</li>
                </ul>
                <h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Transthorakale Ösophagektomie:</strong> Standard bei Tumoren des mittleren/distalen Drittels.</li>
                    <li><strong>Transhiatale Ösophagektomie:</strong> Alternative bei distalen Tumoren.</li>
                    <li><strong>Magenschlauchbildung:</strong> Rekonstruktion als Standard.</li>
                    <li><strong>Keine Resektion bei Fernmetastasen:</strong> Präoperativer Nachweis von Fernmetastasen = Kontraindikation zur Operation</li>
                </div>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>HER2-Status:</strong> Bei Adenokarzinom für Trastuzumab-Therapie.</li>
                    <li><strong>MSI/dMMR:</strong> Für Immuntherapie-Option empfohlen.</li>
                    <li><strong>PD-L1:</strong> CPS für Immuntherapie.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Endoskopische Therapie</h3>
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
