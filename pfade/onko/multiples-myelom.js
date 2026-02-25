(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "multiples-myelom",
        module: "onko",
        title: "Multiples Myelom",
        name: "Multiples Myelom",
        category: "onko-haem",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Zweithäufigste hämatologische Neoplasie (ca. 10% aller hämatologischen Malignome)</li>
                    <li>Inzidenz: ca. 4-5/100.000 pro Jahr</li>
                    <li>Median bei Diagnose: ca. 70 Jahre</li>
                    <li>Männer : Frauen = 1,4 : 1</li>
                    <li>5-Jahres-Überleben: ca. 50-60%</li>
                </ul>
                <h3>Pathogenese</h3>
                <ul>
                    <li>Klonale Proliferation von Plasmazellen im Knochenmark.</li>
                    <li>Produktion von monoklonalem Immunglobulin (M-Protein).</li>
                    <li>Genetische Aberrationen: t(4;14), t(14;16), del(17p), Hyperdiploidie.</li>
                    <li>Präkanzeröse Stadien: MGUS, Smoldering Myelom.</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Alter:</strong> Inzidenz steigt mit dem Alter.</li>
                    <li><strong>Genetik:</strong> Familiäre Häufung selten.</li>
                    <li><strong>MGUS:</strong> Risiko der Progression ca. 1%/Jahr.</li>
                    <li><strong>Adipositas:</strong> Leicht erhöhtes Risiko.</li>
                </ul>
                <h3>Krankheitsstadien</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Beschreibung</th>
                                <th>Progressionsrisiko</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>MGUS</strong></td>
                                <td>M-Protein <3 g/dl, Plasmazellen <10%, keine Organschäden</td>
                                <td>1%/Jahr</td>
                            </tr>
                            <tr>
                                <td><strong>Smoldering Myelom</strong></td>
                                <td>M-Protein &ge;3 g/dl oder Plasmazellen &ge;10%, keine Organschäden</td>
                                <td>10%/Jahr</td>
                            </tr>
                            <tr>
                                <td><strong>Multiplies Myelom</strong></td>
                                <td>CRAB-Kriterien oder Biomarker positiven</td>
                                <td>Therapieindikation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>CRAB-Kriterien</h3>
                <ul>
                    <li><strong>C</strong>alcium: Hyperkalzämie (>11 mg/dl).</li>
                    <li><strong>R</strong>enal: Niereninsuffizienz (Kreatinin >2 mg/dl).</li>
                    <li><strong>A</strong>nemia: Anämie (Hb <10 g/dl).</li>
                    <li><strong>B</strong>one: Knochenläsionen (lytisch, Frakturen).</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>Blut:</strong> Blutbild, Kreatinin, Kalzium, LDH, Beta-2-Mikroglobulin.</li>
                    <li><strong>Serumprotein-Elektrophorese:</strong> M-Protein-Nachweis.</li>
                    <li><strong>Immunfixation:</strong> Typisierung des M-Proteins (IgG, IgA, etc.).li>
                    <li><strong>Freie Leichtketten:</strong> Serum, Ratio kappa/lambda.</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Plasmazellanteil, Zytogenetik/FISH.</li>
                    <li><strong>Ganzkörper-CT/MRT:</strong> Knochenläsionen.</li>
                    <li><strong>PET-CT:</strong> Bei unklaren Befunden.</li>
                </ul>
                <h3>R-ISS-Staging</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Kriterien</th>
                                <th>Medianes OS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>ISS I, LDH normal, keine High-Risk-Zytogenetik</td>
                                <td>>5 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Weders I noch III</td>
                                <td>ca. 4 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>ISS III + LDH erhöht oder High-Risk-Zytogenetik</td>
                                <td>ca. 2 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>High-Risk-Zytogenetik</h3>
                <ul>
                    <li>del(17p), t(4;14), t(14;16).</li>
                    <li>Assoziiert mit schlechterer Prognose.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Therapieindikation</h3>
                <ul>
                    <li>Symptomatisches Multiples Myelom (CRAB-Kriterien erfüllt).</li>
                    <li>ODER Biomarker-positives Myelom (SLiM-Kriterien).</li>
                </ul>
                <h3>Transplantationskandidaten (fit, &le;70 Jahre)</h3>
                <ul>
                    <li><strong>Induktion:</strong> Bortezomib + Lenalidomid + Dexamethason (VRd) - 4-6 Zyklen.</li>
                    <li><strong>Alternative:</strong> Dara-VRd (Daratumumab + VRd).</li>
                    <li><strong>Stammzellapherese:</strong> Nach Mobilisation (G-CSF ± Plerixafor).</li>
                    <li><strong>Hochdosis-Chemotherapie + ASCT:</strong> Melphalan 200 mg/m².</li>
                    <li><strong>Konsolidierung:</strong> Optional (VRd x 2).</li>
                    <li><strong>Erhaltung:</strong> Lenalidomid ± Bortezomib bis Progress.</li>
                </ul>
                <h3>Nicht-Transplantationskandidaten (unfit, >70 Jahre)</h3>
                <ul>
                    <li><strong>Dara-Rd:</strong> Daratumumab + Lenalidomid + Dexamethason.</li>
                    <li><strong>VRd:</strong> Bei fiten älteren Patienten.</li>
                    <li><strong>VMP:</strong> Bortezomib + Melphalan + Prednison (Alternative).</li>
                    <li><strong>Erhaltung:</strong> Lenalidomid oder Bortezomib.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>Triple-Therapie:</strong> Basierend auf Vortherapie und Ansprechdauer.</li>
                    <li><strong>Daratumumab-basiert:</strong> Dara-Rd, Dara-Vd, Dara-Pd.</li>
                    <li><strong>Carfilzomib:</strong> K-Rd, K-Vd.</li>
                    <li><strong>Pomalidomid:</strong> Pd, Dara-Pd.</li>
                    <li><strong>BCL-2-Inhibitor:</strong> Venetoclax bei t(11;14).</li>
                    <li><strong>CAR-T-Zellen:</strong> Idecabtagen, Ciltacabtagen nach 4+ Vortherapien.</li>
                    <li><strong>Bispezifische Antikörper:</strong> Teclistamab, Elranatamab.</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li><strong>Bisphosphonate:</strong> Zoledronsäure, Denosumab (Knochenprotektion).</li>
                    <li><strong>Antikoagulation:</strong> Bei Immunmodulator-Therapie.</li>
                    <li><strong>Antivirale Prophylaxe:</strong> Aciclovir bei Proteasominhibitoren.</li>
                    <li><strong>Infektionsprophylaxe:</strong> IVIG bei Hypogammaglobulinämie.</li>
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
                                <td>Unter Therapie</td>
                                <td>Alle 1-3 Monate</td>
                                <td>Blutbild, M-Protein, freie Leichtketten, Kreatinin, Kalzium</td>
                            </tr>
                            <tr>
                                <td>Erhaltung/Nach Therapie</td>
                                <td>Alle 3-4 Monate</td>
                                <td>Blutbild, M-Protein, freie Leichtketten, Kreatinin, Kalzium</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Response-Kriterien</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Response</th>
                                <th>Kriterien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>CR</strong></td>
                                <td>M-Protein negativ, freie Leichtketten normal, Plasmazellen <5%</td>
                            </tr>
                            <tr>
                                <td><strong>VGPR</strong></td>
                                <td>M-Protein reduziert um &ge;90%</td>
                            </tr>
                            <tr>
                                <td><strong>PR</strong></td>
                                <td>M-Protein reduziert um &ge;50%</td>
                            </tr>
                            <tr>
                                <td><strong>MRD-negativ</strong></td>
                                <td>Next-Generation-Flow oder Sequenzierung negativ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Regelmäßige Bildgebung bei klinischem Verdacht auf Progress.</li>
                    <li>Impfungen (inaktivierte Impfstoffe).</li>
                    <li>Knochenschutz fortsetzen.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Komplikationen</h3>
                <ul>
                    <li><strong>Knochen:</strong> Frakturen, Wirbelkörperkompression.</li>
                    <li><strong>Niere:</strong> Myelomniere, Dialysebedarf.</li>
                    <li><strong>Infektionen:</strong> Pneumonie, Sepsis.</li>
                    <li><strong>Periphere Neuropathie:</strong> Nach Bortezomib.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Multiples Myelom. AWMF-Registernummer: 068-006. Leitlinienprogramm Onkologie.</p>"
    });
})();