(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hodentumoren",
        module: "onko",
        title: "Hodentumoren",
        name: "Hodentumoren",
        category: "onko-uro",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste Krebserkrankung bei Männern zwischen 15-35 Jahren</li>
                    <li>Inzidenz steigt weltweit an</li>
                    <li>Hohe Heilungsrate (>95%) bei adäquater Therapie</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Keimzelltumoren (95%):</strong>
                        <ul>
                            <li>Seminom (ca. 50%)</li>
                            <li>Nicht-seminomatöse Keimzelltumoren (NSGCT): Embryonalkarzinom, Dottersacktumor, Chorionkarzinom, Teratom</li>
                        </ul>
                    </li>
                    <li><strong>Nicht-Keimzelltumoren (5%):</strong> Leydig-Zell-Tumor, Sertoli-Zell-Tumor.</li>
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
                                <td><strong>Kongenital</strong></td>
                                <td>Maldescensus testis (Kryptorchismus), Hodenatrophie.</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Familiäre Häufung, positive Familienanamnese.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsion</strong></td>
                                <td>Testikuläre intraepitheliale Neoplasie (TIN).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Palpation des Hodens (derber, schmerzloser Tumor).</li>
                    <li><strong>Hodenultraschall:</strong> Standard zur Differenzierung intratestikulärer Läsionen.</li>
                    <li><strong>Tumormarker:</strong> AFP, β-HCG, LDH (vor und nach Orchiektomie).</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Lymphknoten- und Metastasen-Ausschluss.</li>
                    <li><strong>MRT Schädel:</strong> Bei Chorionkarzinom oder neurologischen Symptomen.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Knochenschmerzen.</li>
                </ul>
                <h3>Diagnosesicherung</h3>
                <ul>
                    <li><strong>Radikale inguinale Orchiektomie:</strong> Standard zur histologischen Sicherung.</li>
                    <li><strong>Organerhaltende Resektion:</strong> Bei kleinen Tumoren oder Einzelnhoden.</li>
                </ul>
                <h3>Stadieneinteilung (IGCCCG)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Prognosegruppe</th>
                                <th>Kriterien (NSGCT)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Gut</strong></td>
                                <td>AFP <1000, HCG <5000, LDH <1,5x normal</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediär</strong></td>
                                <td>AFP 1000-10000 oder HCG 5000-50000 oder LDH 1,5-10x</td>
                            </tr>
                            <tr>
                                <td><strong>Schlecht</strong></td>
                                <td>AFP >10000 oder HCG >50000 oder LDH >10x oder mediastinaler Primarius</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Seminom</h3>
                <ul>
                    <li><strong>Stadium I:</strong> Surveillance oder Carboplatin (1 Zyklus) adjuvant.</li>
                    <li><strong>Stadium IIA/IIB:</strong> Bestrahlung (30/36 Gy) oder Chemotherapie (3x BEP).</li>
                    <li><strong>Stadium IIC/III:</strong> Chemotherapie (3-4x BEP oder 4x EP).</li>
                </ul>
                <h3>Nicht-seminomatöser Keimzelltumor (NSGCT)</h3>
                <ul>
                    <li><strong>Stadium I (Low-risk):</strong> Surveillance.</li>
                    <li><strong>Stadium I (High-risk):</strong> 1x BEP adjuvant oder Surveillance.</li>
                    <li><strong>Stadium IIA/IIB (Marker-negativ):</strong> RPLND (retroperitoneale Lymphadenektomie) oder Chemotherapie.</li>
                    <li><strong>Stadium IIA/IIB (Marker-positiv):</strong> Chemotherapie (3x BEP).</li>
                    <li><strong>Stadium IIC/III:</strong> Chemotherapie nach IGCCCG-Klassifikation.</li>
                </ul>
                <h3>Chemotherapie-Protokolle</h3>
                <ul>
                    <li><strong>BEP:</strong> Bleomycin, Etoposid, Cisplatin (Standard).</li>
                    <li><strong>EP:</strong> Etoposid, Cisplatin (bei Kontraindikation gegen Bleomycin).</li>
                    <li><strong>VIP:</strong> Etoposid, Ifosfamid, Cisplatin (Zweitlinie).</li>
                    <li><strong>TIP:</strong> Paclitaxel, Ifosfamid, Cisplatin (Salvage-Therapie).</li>
                </ul>
                <h3>Residualtumor nach Chemotherapie</h3>
                <ul>
                    <li><strong>Seminom:</strong> Beobachtung oder Bestrahlung bei Residualtumor >3 cm.</li>
                    <li><strong>NSGCT:</strong> Chirurgische Resektion (RPLND) bei Residualtumor >1 cm.</li>
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
                                <td>Alle 3 Monate</td>
                                <td>Tumormarker, CT Thorax/Abdomen, kontralateraler Hodenultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 2</td>
                                <td>Alle 3-6 Monate</td>
                                <td>Tumormarker, CT Thorax/Abdomen</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Tumormarker, CT (jährlich)</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Tumormarker, klinische Untersuchung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Fertilitätsberatung und Kryokonservierung vor Therapie.</li>
                    <li>Testosteronbestimmung (Hypogonadismus-Risiko).</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Langzeitfolgen überwachen (kardiovaskuläres Risiko, Zweittumoren).</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge der Keimzelltumoren des Hodens. AWMF-Registernummer: 032-046OL. Leitlinienprogramm Onkologie.</p>"
    });
})();