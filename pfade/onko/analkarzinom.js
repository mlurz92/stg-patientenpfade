(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "analkarzinom",
        module: "onko",
        title: "Analkarzinom",
        name: "Analkarzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Seltene Tumorentität (ca. 1-2% aller gastrointestinalen Malignome)</li>
                    <li>Inzidenz steigt in den letzten Jahrzehnten an</li>
                    <li>Häufiger bei Frauen als bei Männern</li>
                    <li>Gipfel im 6.-7. Lebensjahrzehnt</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> Häufigster Typ (ca. 80%).</li>
                    <li><strong>Kloakenkarzinom:</strong> Im Analkanal.</li>
                    <li><strong>Adenokarzinom:</strong> Selten, analog zum Rektumkarzinom behandeln.</li>
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
                                <td>HPV-Infektion (v.a. HPV 16, 18), HIV-Infektion.</td>
                            </tr>
                            <tr>
                                <td><strong>Sexuell</strong></td>
                                <td>Rezeptiver Analverkehr, multiple Sexualpartner.</td>
                            </tr>
                            <tr>
                                <td><strong>Immunsuppression</strong></td>
                                <td>Organtransplantation, chronische Immunsuppression.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsionen</strong></td>
                                <td>Anal intraepitheliale Neoplasie (AIN), Condylomata acuminata.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Digital-rektale Untersuchung:</strong> Beurteilung von Größe, Mobilität und Sphinkterbeteiligung.</li>
                    <li><strong>Proktoskopie/Rektosigmoidoskopie:</strong> Biopsieentnahme.</li>
                    <li><strong>Rektale Endosonographie:</strong> T-Staging und Lymphknotenbeurteilung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen/Becken:</strong> Fernmetastasen-Ausschluss.</li>
                    <li><strong>MRT Becken:</strong> Alternative zur Endosonographie, bei größeren Tumoren bevorzugt.</li>
                    <li><strong>PET-CT:</strong> Bei unklaren Befunden oder Rezidivverdacht.</li>
                </ul>
                <h3>Weitere Untersuchungen</h3>
                <ul>
                    <li><strong>HIV-Test:</strong> Bei Risikokonstellation.</li>
                    <li><strong>HPV-Test:</strong> Optional.</li>
                    <li><strong>Inguinaler Ultraschall:</strong> Lymphknotenbeurteilung.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Primärtherapie - Radiochemotherapie</h3>
                <div class="callout callout-hinweis">
                    <p>Die simultane Radiochemotherapie ist der Standard für die meisten Analkarzinome (Organerhaltung).</p>
                </div>
                <ul>
                    <li><strong>Strahlentherapie:</strong> 50,4 Gy (T1-T2) bis 59,4 Gy (T3-T4) im Primärtumor und regionären Lymphknoten.</li>
                    <li><strong>Chemotherapie:</strong> 5-FU + Mitomycin C (MMC) oder 5-FU + Cisplatin.</li>
                    <li><strong>Boost:</strong> Bei Resttumor nach 50,4 Gy.</li>
                </ul>
                <h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Lokale Exzision:</strong> Nur bei kleinen T1-Tumoren (unter 2 cm) ohne Risikofaktoren.</li>
                    <li><strong>Abdominoperineale Rektumexstirpation (APR):</strong> Bei Therapieversagen, Rezidiv oder ausgedehntem Befund mit Sphinkterinfiltration.</li>
                </ul>
                <h3>Ingvinale Lymphknoten</h3>
                <ul>
                    <li>Bei klinischem Verdacht auf inguinale Metastasen: Feinnadelpunktion.</li>
                    <li>Bei positiven inguinalen Lymphknoten: Bestrahlung des Leistenbereichs.</li>
                </ul>
                <h3>Palliative Therapie</h3>
                <ul>
                    <li><strong>Systemtherapie:</strong> FOLFOX, FOLFIRI oder Cisplatin/5-FU.</li>
                    <li><strong>Best supportive care:</strong> Bei schlechtem Allgemeinzustand.</li>
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
                                <td>Anamnese, DRU, Proktoskopie, inguinale Palpation</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, DRU, Proktoskopie, inguinale Palpation</td>
                            </tr>
                            <tr>
                                <td>Jahr 1, 2, 3</td>
                                <td>-</td>
                                <td>MRT Becken oder Endosonographie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Stuhlkontinenz-Beurteilung.</li>
                    <li>HPV-Impfung bei nicht-exponierten Patienten diskutieren.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Analkarzinom. AWMF-Registernummer: 032-005OL. Leitlinienprogramm Onkologie.</p>"
    });
})();