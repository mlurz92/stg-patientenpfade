(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "cll",
        module: "onko",
        title: "Chronische Lymphatische Leukämie (CLL)",
        name: "Chronische Lymphatische Leukämie (CLL)",
        category: "onko-haem",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste Leukämie in westlichen Ländern</li>
                    <li>Inzidenz: ca. 4-5/100.000 pro Jahr</li>
                    <li>Median bei Diagnose: ca. 70 Jahre</li>
                    <li>Männer : Frauen = 1,5-2 : 1</li>
                    <li>5-Jahres-Überleben: ca. 70-80%</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Genetik:</strong> Familiäre Häufung (ca. 5-10% der Fälle).</li>
                    <li><strong>Alter:</strong> Inzidenz steigt mit dem Alter.</li>
                    <li><strong>Agent Orange:</strong> Assoziation mit Exposition.</li>
                    <li><strong>Hepatitis C:</strong> Erhöhtes Risiko.</li>
                </ul>
                <h3>Biologie</h3>
                <ul>
                    <li>Klonale Proliferation von CD5+ CD19+ CD23+ B-Lymphozyten.</li>
                    <li>Immunphänotyp: CD5+, CD19+, CD20 (dim), CD23+, FMC7-.</li>
                    <li>Zytogenetische Aberrationen: del(13q14), del(11q), del(17p), Trisomie 12.</li>
                    <li>IGHV-Mutationsstatus: Mutiert (günstiger) vs. unmutiert (ungünstiger).</li>
                </ul>
                <h3>Prognostische Faktoren</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Faktor</th>
                                <th>Günstig</th>
                                <th>Ungünstig</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IGHV-Status</td>
                                <td>Mutiert</td>
                                <td>Unmutiert</td>
                            </tr>
                            <tr>
                                <td>del(17p)/TP53</td>
                                <td>Negativ</td>
                                <td>Positiv</td>
                            </tr>
                            <tr>
                                <td>del(11q)</td>
                                <td>Negativ</td>
                                <td>Positiv</td>
                            </tr>
                            <tr>
                                <td>Beta-2-Mikroglobulin</td>
                                <td>Niedrig</td>
                                <td>Hoch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Oft asymptomatisch (Zufallsbefund).</li>
                    <li>Lymphadenopathie (zervikal, axillär, inguinal).</li>
                    <li>Splenomegalie.</li>
                    <li>B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust.</li>
                    <li>Infektionen (Immundefekt).</li>
                    <li>Anämie, Thrombozytopenie (Knochenmarkinfiltration).</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Lymphozytose >5.000/µl mit charakteristischem Immunphänotyp.</li>
                    <li><strong>Durchflusszytometrie:</strong> Nachweis der klonalen B-Zellen (CD5+CD19+CD23+).</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Bei unklarer Diagnose oder vor Therapie.</li>
                    <li><strong>FISH:</strong> Zytogenetik (del(17p), del(11q), del(13q), Trisomie 12).</li>
                    <li><strong>IGHV-Mutationsstatus:</strong> Prognostisch relevant.</li>
                    <li><strong>CT Hals/Thorax/Abdomen:</strong> Staging.</li>
                </ul>
                <h3>Diagnosekriterien</h3>
                <ul>
                    <li>Lymphozytose >5.000/µl mit klonalen B-Zellen.</li>
                    <li>ODER klonale B-Zellen <5.000/µl mit Lymphadenopathie/organomegalie (Monoklonale B-Zell-Lymphozytose = MBL).</li>
                </ul>
                <h3>Binet-Stadium</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Kriterien</th>
                                <th>Medianes Überleben</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A</strong></td>
                                <td>Hämoglobin &ge;10 g/dl, Thrombozyten &ge;100.000/µl, &le;2 befallene Regionen</td>
                                <td>>10 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>B</strong></td>
                                <td>Hämoglobin &ge;10 g/dl, Thrombozyten &ge;100.000/µl, >2 befallene Regionen</td>
                                <td>5-7 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>C</strong></td>
                                <td>Hämoglobin <10 g/dl und/oder Thrombozyten <100.000/µl</td>
                                <td>2-3 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Indikation zur Therapie (iwCLL-Kriterien)</h3>
                <ul>
                    <li>Progressive Lymphadenopathie.</li>
                    <li>Progressive Splenomegalie.</li>
                    <li>Hämoglobin <10 g/dl oder Thrombozyten <100.000/µl (durch Infiltration).</li>
                    <li>B-Symptome.</li>
                    <li>Autoimmunphänomene (AIHA, ITP) refraktär auf Steroide.</li>
                </ul>
                <h3>Watch and Wait</h3>
                <ul>
                    <li>Standard bei asymptomatischen Patienten (Binet A/B ohne Progress).</li>
                    <li>Kein Überlebensvorteil durch frühe Therapie.</li>
                </ul>
                <h3>Erstlinientherapie (fit)</h3>
                <ul>
                    <li><strong>Standard:</strong> Ibrutinib + Obinutuzumab (BTK-Inhibitor + Anti-CD20).</li>
                    <li><strong>Alternative:</strong> Acalabrutinib + Obinutuzumab.</li>
                    <li><strong>Bei del(17p)/TP53:</strong> BTK-Inhibitor-basierte Therapie.</li>
                </ul>
                <h3>Erstlinientherapie (unfit/älter)</h3>
                <ul>
                    <li><strong>Ibrutinib:</strong> Monotherapie oder mit Obinutuzumab.</li>
                    <li><strong>Venetoclax + Obinutuzumab:</strong> Zeitlich begrenzte Therapie (12 Monate).</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>BTK-Inhibitor-refraktär:</strong> Venetoclax + Rituximab.</li>
                    <li><strong>Nach BTK- und BCL2-Inhibitor:</strong> Pirtobrutinib oder CAR-T-Zellen.</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li>Infektionsprophylaxe (Pneumocystis, VZV bei BTK-Inhibitoren).</li>
                    <li>IVIG-Substitution bei Hypogammaglobulinämie und rezidivierenden Infekten.</li>
                    <li>Impfungen (inaktiviert).</li>
                </ul>`
            },
            {
                title: "4. Nachsorge",
                html: `<h3>Nachsorge unter Watch and Wait</h3>
                <ul>
                    <li>Klinische Untersuchung und Blutbild alle 3-12 Monate.</li>
                    <li>Bei Progression: Re-Evaluation und Therapieplanung.</li>
                </ul>
                <h3>Nachsorge unter Therapie</h3>
                <ul>
                    <li>Regelmäßige Blutbild- und Stoffwechselkontrollen.</li>
                    <li>Überwachung auf Nebenwirkungen der Therapie.</li>
                    <li>BTK-Inhibitoren: Blutdruck, Vorhofflimmern, Blutungen.</li>
                    <li>Venetoclax: Tumorlyse-Syndrom-Prophylaxe.</li>
                </ul>
                <h3>Langzeitüberwachung</h3>
                <ul>
                    <li>Lebenslange Nachsorge.</li>
                    <li>Screening auf Zweitmalignome.</li>
                    <li>Infektionsstatus überwachen.</li>
                </ul>
                <h3>Komplikationen</h3>
                <ul>
                    <li><strong>Infektionen:</strong> Häufigste Todesursache.</li>
                    <li><strong>Autoimmunphänomene:</strong> AIHA, ITP.</li>
                    <li><strong>Richter-Transformation:</strong> DLBCL (ca. 2-5% der Patienten).</li>
                    <li><strong>Zweitmalignome:</strong> Erhöhtes Risiko.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Chronische Lymphatische Leukämie (CLL). AWMF-Registernummer: 068-002. Leitlinienprogramm Onkologie.</p>"
    });
})();