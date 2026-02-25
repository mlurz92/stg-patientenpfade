(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "mammakarzinom",
        module: "onko",
        title: "Mammakarzinom",
        name: "Mammakarzinom",
        category: "onko-gyn",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste Krebserkrankung der Frau weltweit</li>
                    <li>In Deutschland ca. 70.000 Neuerkrankungen pro Jahr</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel um 65 Jahre</li>
                    <li>5-Jahres-Überleben ca. 88%</li>
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
                                <td><strong>Genetisch</strong></td>
                                <td>BRCA1/2-Mutation, PALB2, CHEK2, ATM, TP53 (Li-Fraumeni), PTEN (Cowden).</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Erkrankte Verwandte ersten Grades.</td>
                            </tr>
                            <tr>
                                <td><strong>Hormonell</strong></td>
                                <td>Frühe Menarche, späte Menopause, Nulliparität, späte erste Schwangerschaft, Hormonersatztherapie.</td>
                            </tr>
                            <tr>
                                <td><strong>Lebensstil</strong></td>
                                <td>Adipositas (postmenopausal), Alkohol, körperliche Inaktivität.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsionen</strong></td>
                                <td>Atypische duktale/lobuläre Hyperplasie, LCIS.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Palpation der Brust und Lymphabflusswege.</li>
                    <li><strong>Mammographie:</strong> Standard für Screening und Diagnostik.</li>
                    <li><strong>Brustultraschall:</strong> Ergänzend, besonders bei dichtem Drüsengewebe.</li>
                    <li><strong>MRT der Brust:</strong> Bei dichtem Gewebe, BRCA-Mutation oder unklaren Befunden.</li>
                    <li><strong>Biopsie:</strong> Stanzbiopsie zur histologischen Sicherung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Bei klinischem Verdacht auf Fernmetastasen.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Knochenschmerzen oder erhöhten Alkalischen Phosphatasen.</li>
                    <li><strong>Leberultraschall:</strong> Alternative zum CT.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>Hormonrezeptorstatus:</strong> ER (Östrogenrezeptor), PR (Progesteronrezeptor).</li>
                    <li><strong>HER2-Status:</strong> Immunhistochemie und ggf. ISH.</li>
                    <li><strong>Ki-67:</strong> Proliferationsmarker.</li>
                    <li><strong>Genexpressionstests:</strong> Oncotype DX, MammaPrint (für adjuvante Therapieentscheidung).</li>
                </ul>
                <h3>Molekulare Subtypen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Rezeptorstatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Luminal A</strong></td>
                                <td>ER+, PR+, HER2-, Ki-67 niedrig</td>
                            </tr>
                            <tr>
                                <td><strong>Luminal B</strong></td>
                                <td>ER+, PR+/-, HER2+/-, Ki-67 hoch</td>
                            </tr>
                            <tr>
                                <td><strong>HER2-positiv</strong></td>
                                <td>ER-, PR-, HER2+</td>
                            </tr>
                            <tr>
                                <td><strong>Triple-negativ</strong></td>
                                <td>ER-, PR-, HER2-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Brusterhaltende Therapie (BET):</strong> Standard bei geeigneten Tumoren + Bestrahlung.</li>
                    <li><strong>Mastektomie:</strong> Bei großen Tumoren, multizentrischem Befall oder Patientenwunsch.</li>
                    <li><strong>Axilläre Dissektion:</strong> Bei positivem Sentinel-Lymphknoten (selektiv).</li>
                    <li><strong>Sentinel-Lymphknoten-Biopsie:</strong> Standard bei klinisch negativer Axilla.</li>
                    <li><strong>Rekonstruktion:</strong> Sofort oder verzögert (Implantat, Eigengewebe).</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li><strong>Nach BET:</strong> Standard (50 Gy + Boost).</li>
                    <li><strong>Nach Mastektomie:</strong> Bei pT3/4, N+, R1.</li>
                    <li><strong>Regionäre Bestrahlung:</strong> Bei ausgedehntem Lymphknotenbefall.</li>
                </ul>
                <h3>Systemtherapie - Adjuvant</h3>
                <ul>
                    <li><strong>Endokrine Therapie (HR+):</strong> Tamoxifen oder Aromatasehemmer (5-10 Jahre).</li>
                    <li><strong>Chemotherapie:</strong> Nach Indikationsstellung (Anthrazyklin/Taxan-basiert).</li>
                    <li><strong>Anti-HER2-Therapie:</strong> Trastuzumab ± Pertuzumab (1 Jahr).</li>
                    <li><strong>CDK4/6-Inhibitoren:</strong> Abemaciclib bei hohem Rezidivrisiko (HR+).</li>
                </ul>
                <h3>Systemtherapie - Metastasiert</h3>
                <ul>
                    <li><strong>HR+/HER2-:</strong> Endokrine Therapie + CDK4/6-Inhibitor, PI3K-Inhibitor (bei PIK3CA-Mutation), ESR1-Mutant: Elacestrant.</li>
                    <li><strong>HER2+:</strong> Trastuzumab + Pertuzumab + Taxan, T-DXd (Trastuzumab-Deruxtecan), T-DM1.</li>
                    <li><strong>Triple-negativ:</strong> Chemotherapie, Immuntherapie (Pembrolizumab/Atezolizumab), Sacituzumab Govitecan.</li>
                    <li><strong>BRCA-Mutation:</strong> Olaparib, Talazoparib (PARP-Inhibitoren).</li>
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
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Jahr 4-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Mammographie</td>
                                <td>Jährlich</td>
                                <td>Beide Brüste (nach BET) / kontralateral (nach Mastektomie)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Gynäkologische Untersuchung (unter Tamoxifen).</li>
                    <li>Knochendichte-Messung (unter Aromatasehemmern).</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Rehabilitation und Lebensstilberatung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Früherkennung, Diagnostik, Therapie und Nachsorge des Mammakarzinoms. AWMF-Registernummer: 032-045OL. Leitlinienprogramm Onkologie.</p>"
    });
})();