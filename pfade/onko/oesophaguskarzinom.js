(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "oesophaguskarzinom",
        module: "onko",
        title: "Ösophaguskarzinom",
        name: "Ösophaguskarzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Achte häufigste Krebserkrankung weltweit</li>
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
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Ösophagogastroduodenoskopie (ÖGD):</strong> Goldstandard mit Biopsieentnahme.</li>
                    <li><strong>Biopsie:</strong> Mindestens 6 Proben aus verdächtigen Arealen.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>Endosonographie (EUS):</strong> T-Infiltrationstiefe und lokale Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Fernmetastasen-Ausschluss.</li>
                    <li><strong>PET-CT:</strong> Bei cT3/T4 oder Lymphknotenverdacht.</li>
                    <li><strong>Bronchoskopie:</strong> Bei Tumoren im oberen/mittleren Drittel zum Tracheainfiltrations-Ausschluss.</li>
                    <li><strong>Laparoskopie:</strong> Bei Adenokarzinomen des distalen Ösophagus/gastroösophagealen Übergangs.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>HER2-Status:</strong> Bei Adenokarzinom für Trastuzumab-Therapie.</li>
                    <li><strong>MSI-H/dMMR:</strong> Für Immuntherapie-Option.</li>
                    <li><strong>PD-L1:</strong> CPS für Immuntherapie.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Transthorakale Ösophagektomie:</strong> Standard bei Tumoren des mittleren/distalen Drittels.</li>
                    <li><strong>Transhiatale Ösophagektomie:</strong> Alternative bei distalen Tumoren.</li>
                    <li><strong>Magenschlauchbildung:</strong> Rekonstruktion als Standard.</li>
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
                <h3>Palliative Systemtherapie</h3>
                <ul>
                    <li><strong>Erstlinie HER2-positiv:</strong> Trastuzumab + Chemotherapie.</li>
                    <li><strong>Erstlinie HER2-negativ:</strong> FOLFOX/CAPOX ± Nivolumab/Pembrolizumab.</li>
                    <li><strong>Zweitlinie:</strong> Ramucirumab ± Paclitaxel, Irinotecan.</li>
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
                                <td>Jahr 1, 2, 3, 5</td>
                                <td>-</td>
                                <td>ÖGD, CT Thorax/Abdomen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Ernährungsberatung (Dilatationen bei Stenosen).</li>
                    <li>Logopädie bei Schluckstörungen.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Ösophaguskarzinom. AWMF-Registernummer: 021-023OL. Leitlinienprogramm Onkologie.</p>"
    });
})();
