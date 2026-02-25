(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "magenkarzinom",
        module: "onko",
        title: "Magenkarzinom",
        name: "Magenkarzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Fünftthäufigste Krebserkrankung weltweit</li>
                    <li>Hohe Inzidenz in Ostasien, Osteuropa und Südamerika</li>
                    <li>Männer häufiger betroffen als Frauen (Verhältnis ca. 1,5:1)</li>
                    <li>Inzidenz in westlichen Ländern rückläufig</li>
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
                                <td><strong>Infektiös</strong></td>
                                <td>Helicobacter pylori-Infektion (wichtigster Risikofaktor), EBV.</td>
                            </tr>
                            <tr>
                                <td><strong>Ernährung</strong></td>
                                <td>Hohe Salzaufnahme, geräucherte/pökelte Lebensmittel, geringer Obst- und Gemüsekonsum.</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Hereditäres diffuses Magenkarzinom (HDGC), Lynch-Syndrom, FAP.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsionen</strong></td>
                                <td>Chronische atrophische Gastritis, intestinale Metaplasie, Magenpolypen.</td>
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
                    <li><strong>Endosonographie (EUS):</strong> Beurteilung der T-Infiltrationstiefe und lokaler Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Fernmetastasen-Ausschluss.</li>
                    <li><strong>Laparoskopie:</strong> Bei resektablen Tumoren zum Ausschluss einer Peritonealkarzinose.</li>
                    <li><strong>Peritoneallavage:</strong> Zytologie zum Nachweis freier Tumorzellen.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>HER2-Status:</strong> Immunhistochemie und ggf. ISH (für Trastuzumab-Therapie).</li>
                    <li><strong>MSI-H/dMMR:</strong> Für Immuntherapie-Option.</li>
                    <li><strong>PD-L1:</strong> CPS (Combined Positive Score) für Immuntherapie.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Gastrektomie:</strong> Onkologische Resektion mit D2-Lymphadenektomie.</li>
                    <li><strong>Subtotale Gastrektomie:</strong> Bei distalen Tumoren möglich.</li>
                    <li><strong>Rekonstruktion:</strong> Y-Roux-Rekonstruktion als Standard.</li>
                </ul>
                <h3>Perioperative Therapie (Resektable Tumoren)</h3>
                <ul>
                    <li><strong>FLOT-Schema:</strong> 5-FU, Folinsäure, Oxaliplatin, Docetaxel (prä- und postoperativ je 4 Zyklen).</li>
                    <li>Alternative: CROSS-Protokoll bei Karzinomen des gastroösophagealen Übergangs.</li>
                </ul>
                <h3>Palliative Systemtherapie</h3>
                <ul>
                    <li><strong>Erstlinie HER2-positiv:</strong> Trastuzumab + Chemotherapie (FOLFOX/CAPOX).</li>
                    <li><strong>Erstlinie HER2-negativ:</strong> FOLFOX oder CAPOX ± Nivolumab/Pembrolizumab.</li>
                    <li><strong>Zweitlinie:</strong> Ramucirumab ± Paclitaxel, Irinotecan-haltige Schemata.</li>
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
                    <li>Ernährungsberatung (Vitamin-B12-Substitution nach Gastrektomie).</li>
                    <li>Lebensstilberatung.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Magenkarzinom. AWMF-Registernummer: 032-009OL. Leitlinienprogramm Onkologie.</p>"
    });
})();
