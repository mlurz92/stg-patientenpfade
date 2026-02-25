(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "endometriumkarzinom",
        module: "onko",
        title: "Endometriumkarzinom",
        name: "Endometriumkarzinom",
        category: "onko-gyn",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigstes gynäkologisches Malignom in westlichen Ländern</li>
                    <li>Inzidenz steigend (Adipositas-Epidemie)</li>
                    <li>Median bei Diagnose: ca. 63 Jahre</li>
                    <li>5-Jahres-Überleben ca. 80% (günstige Prognose bei Frühstadium)</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 75-80%, östrogenabhängig (Typ I).</li>
                    <li><strong>Seröses Karzinom:</strong> Ca. 10%, aggressiv, östrogenunabhängig (Typ II).</li>
                    <li><strong>Klarzelliges Karzinom:</strong> Ca. 5%, schlechte Prognose.</li>
                    <li><strong>Karzinosarkom:</strong> Hochmaligne, schlechte Prognose.</li>
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
                                <td>Östrogenexposition ohne Gestagenopposition, Tamoxifen, PCOS, Nulliparität.</td>
                            </tr>
                            <tr>
                                <td><strong>Metabolisch</strong></td>
                                <td>Adipositas, Diabetes mellitus.</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Lynch-Syndrom (HNPCC), PTEN (Cowden-Syndrom).</td>
                            </tr>
                            <tr>
                                <td><strong>Protektiv</strong></td>
                                <td>Ovulationshemmer, Schwangerschaften, körperliche Aktivität.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Transvaginaler Ultraschall:</strong> Messung der Endometriumdicke.</li>
                    <li><strong>Hysteroskopie mit Fraktionierte Kürettage:</strong> Goldstandard zur Diagnosesicherung.</li>
                    <li><strong>Endometriumbiopsie:</strong> Alternative zur Kürettage.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Beurteilung der Myometriuminfiltration und Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Bei Verdacht auf fortgeschrittenes Stadium.</li>
                    <li><strong>CA-125:</strong> Optional, bei serösen Karzinomen.</li>
                </ul>
                <h3>Molekulare Klassifikation (TCGA)</h3>
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
                                <td><strong>MSI-hypermutiert</strong></td>
                                <td>28%</td>
                                <td>Intermediär</td>
                            </tr>
                            <tr>
                                <td><strong>Copy-number niedrig</strong></td>
                                <td>39%</td>
                                <td>Intermediär</td>
                            </tr>
                            <tr>
                                <td><strong>Copy-number hoch (serös-like)</strong></td>
                                <td>26%</td>
                                <td>Schlecht</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Standard:</strong> Hysterektomie mit bilateraler Adnektomie.</li>
                    <li><strong>Lymphadenektomie:</strong> Individuell nach Risikokonstellation (Sentinel-Node-Biopsie bevorzugt).</li>
                    <li><strong>Staging:</strong> Omentektomie bei serösen/klarzelligen Karzinomen.</li>
                </ul>
                <h3>Adjuvante Therapie (nach Risikogruppe)</h3>
                <ul>
                    <li><strong>Niedriges Risiko:</strong> Keine adjuvante Therapie.</li>
                    <li><strong>Intermediäres Risiko:</strong> Vaginale Brachytherapie optional.</li>
                    <li><strong>Hohes Risiko:</strong> Vaginale Brachytherapie ± externe Bestrahlung, ggf. Chemotherapie.</li>
                </ul>
                <h3>Fortgeschrittenes Stadium</h3>
                <ul>
                    <li><strong>Zytoreduktion:</strong> Bei extrauterinem Befall.</li>
                    <li><strong>Radiochemotherapie:</strong> Bei lokal fortgeschrittenem Befund.</li>
                </ul>
                <h3>Systemtherapie (metastasiert/rezidiviert)</h3>
                <ul>
                    <li><strong>Endokrine Therapie:</strong> Bei HR+ und niedrigem Tumorgrad (Gestagene, Aromatasehemmer).</li>
                    <li><strong>Chemotherapie:</strong> Carboplatin + Paclitaxel.</li>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab bei MSI-H/dMMR.</li>
                    <li><strong>Immuntherapie + zielgerichtet:</strong> Pembrolizumab + Lenvatinib bei nicht-MSI-H.</li>
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
                    <li>Vaginalultraschall bei Symptomen.</li>
                    <li>CT bei klinischem Verdacht auf Rezidiv.</li>
                    <li>Lynch-Syndrom-Screening bei Diagnose.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Endometriumkarzinom. AWMF-Registernummer: 032-034OL. Leitlinienprogramm Onkologie.</p>"
    });
})();