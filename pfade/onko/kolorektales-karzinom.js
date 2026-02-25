(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "kolorektales-karzinom",
        module: "onko",
        title: "Kolorektales Karzinom",
        name: "Kolorektales Karzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Dritthäufigste Krebserkrankung weltweit</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 7. Lebensjahrzehnt</li>
                    <li>Leichtes Überwiegen des männlichen Geschlechts</li>
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
                                <td><strong>Ernährung / Lebensstil</strong></td>
                                <td>Rotes Fleisch, verarbeitete Fleischprodukte, geringe Ballaststoffzufuhr, Adipositas, körperliche Inaktivität, Rauchen, Alkohol.</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Lynch-Syndrom (HNPCC), Familiäre adenomatöse Polyposis (FAP), MUTYH-assoziierte Polyposis.</td>
                            </tr>
                            <tr>
                                <td><strong>Entzündlich</strong></td>
                                <td>Colitis ulcerosa, Morbus Crohn (langjähriger Verlauf).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Koloskopie:</strong> Goldstandard zur Diagnosesicherung mit Biopsieentnahme.</li>
                    <li><strong>Rektosigmoidoskopie:</strong> Bei unvollständiger Koloskopie oder als ergänzende Untersuchung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>Abdomen-CT:</strong> Lebermetastasen, Lymphknotenbefall.</li>
                    <li><strong>Thorax-CT:</strong> Lungenmetastasen.</li>
                    <li><strong>MRT Becken:</strong> Bei Rektumkarzinom zur Beurteilung der lokalen Ausbreitung.</li>
                    <li><strong>CEA:</strong> Tumormarker für Verlaufskontrolle.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li>MSI-H/dMMR-Status (für Immuntherapie-Option).</li>
                    <li>RAS-Mutationsstatus (KRAS, NRAS).</li>
                    <li>BRAF-V600E-Mutation.</li>
                    <li>HER2-Status (bei metastasiertem KRAS-Wildtyp).</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Kolonkarzinom:</strong> Onkologische Resektion mit Lymphadenektomie.</li>
                    <li><strong>Rektumkarzinom:</strong> TME (totale mesorektale Exzision) als Standard.</li>
                    <li><strong>Lebermetastasen:</strong> Resektion bei Resektabilität anstreben.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Stadium II (Hochrisiko):</strong> Capecitabin oder 5-FU/Folinsäure.</li>
                    <li><strong>Stadium III:</strong> FOLFOX oder CAPOX (Chemotherapie).</li>
                </ul>
                <h3>Neoadjuvante Therapie (Rektumkarzinom)</h3>
                <ul>
                    <li><strong>cT3/cT4 oder N+:</strong> Radiochemotherapie oder Kurzzeitbestrahlung.</li>
                </ul>
                <h3>Palliative Systemtherapie</h3>
                <ul>
                    <li><strong>Erstlinie:</strong> FOLFOX/FOLFIRI ± Bevacizumab oder Cetuximab (bei RAS-Wildtyp).</li>
                    <li><strong>MSI-H/dMMR:</strong> Pembrolizumab als Erstlinie.</li>
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
                                <td>Anamnese, körperliche Untersuchung, CEA</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, CEA</td>
                            </tr>
                            <tr>
                                <td>Jahr 1, 3, 5</td>
                                <td>-</td>
                                <td>Koloskopie, CT Thorax/Abdomen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Lebensstilberatung (Ernährung, Bewegung).</li>
                    <li>Raucherentwöhnung.</li>
                    <li>Psychoonkologische Betreuung anbieten.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Kolorektales Karzinom. AWMF-Registernummer: 021-007OL. Leitlinienprogramm Onkologie.</p>"
    });
})();
