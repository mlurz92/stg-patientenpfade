(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "dlbcl",
        module: "onko",
        title: "DLBCL (Diffuses großzelliges B-Zell-Lymphom)",
        name: "Diffuses großzelliges B-Zell-Lymphom (DLBCL)",
        category: "onko-haem",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigstes aggressives Non-Hodgkin-Lymphom (ca. 30-35% aller NHL)</li>
                    <li>Inzidenz: ca. 10-15/100.000 pro Jahr</li>
                    <li>Median bei Diagnose: ca. 65-70 Jahre</li>
                    <li>Männer : Frauen = 1,2 : 1</li>
                    <li>5-Jahres-Überleben: ca. 60-70%</li>
                </ul>
                <h3>Subtypen (WHO-Klassifikation)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>GCB (Germinal Center B-cell-like)</strong></td>
                                <td>Ca. 50%</td>
                                <td>Bessere Prognose, CD10+ oder BCL6+</td>
                            </tr>
                            <tr>
                                <td><strong>ABC (Activated B-cell-like)</strong></td>
                                <td>Ca. 30%</td>
                                <td>Schlechtere Prognose, NF-κB-Aktivierung</td>
                            </tr>
                            <tr>
                                <td><strong>Double/Triple Hit</strong></td>
                                <td>Ca. 5-10%</td>
                                <td>MYC + BCL2 und/oder BCL6 Rearrangement, sehr aggressiv</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Immunodefizienz:</strong> HIV, Post-Transplantation.</li>
                    <li><strong>Autoimmunerkrankungen:</strong> Rheumatoide Arthritis, SLE.</li>
                    <li><strong>Viren:</strong> EBV (bei älteren Patienten, immunodefizient).</li>
                    <li><strong>Vorbestehende Lymphome:</strong> Transformation aus indolenten NHL.</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Rasch wachsende Lymphadenopathie.</li>
                    <li>B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust (ca. 30%).</li>
                    <li>Extranodaler Befall: Knochenmark, ZNS, GI-Trakt, Hoden.</li>
                    <li>Mediastinaler Befall: Dyspnoe, Vena-cava-superior-Syndrom.</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>Biopsie:</strong> Exzisionsbiopsie eines Lymphknotens (Goldstandard).</li>
                    <li><strong>Histologie:</strong> Diffuse Infiltration durch große lymphoide Zellen.</li>
                    <li><strong>Immunhistochemie:</strong> CD20+, CD79a+, PAX5+; Subtypisierung (CD10, BCL6, MUM1).</li>
                    <li><strong>FISH:</strong> MYC, BCL2, BCL6 Rearrangement (Double/Triple Hit).</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Staging.</li>
                    <li><strong>PET-CT:</strong> Staging und Response-Assessment.</li>
                </ul>
                <h3>Cell of Origin (COO)</h3>
                <ul>
                    <li><strong>GCB:</strong> CD10+ oder BCL6+/MUM1-.</li>
                    <li><strong>Non-GCB (ABC):</strong> CD10-/BCL6- oder CD10-/BCL6+/MUM1+.</li>
                    <li>Relevanz für Prognose und Therapieoptionen.</li>
                </ul>
                <h3>Ann-Arbor-Staging</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Befall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Ein Lymphknotenregion oder ein extranodaler Ort</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>&ge;2 Lymphknotenregionen auf einer Zwerchfellseite</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Lymphknotenregionen auf beiden Zwerchfellseiten</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Disseminierter extranodaler Befall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>IPI (International Prognostic Index)</h3>
                <ul>
                    <li>Alter >60 Jahre, LDH erhöht, ECOG >1, Extranodalbefall >1, Stadium III/IV.</li>
                    <li>Jeder Punkt = 1; Low (0-1), Low-Intermediate (2), High-Intermediate (3), High (4-5).</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Standard-Erstlinientherapie</h3>
                <ul>
                    <li><strong>R-CHOP:</strong> Rituximab + Cyclophosphamid + Doxorubicin + Vincristin + Prednison.</li>
                    <li><strong>Zyklen:</strong> 6-8 Zyklen alle 21 Tage.</li>
                    <li><strong>Strahlentherapie:</strong> Bei initalem Bulk oder inkompletter Remission.</li>
                </ul>
                <h3>Frühstadium (I-II, niedriges Risiko)</h3>
                <ul>
                    <li><strong>R-CHOP x 3-4 + Bestrahlung:</strong> Bei nicht-bulky Erkrankung.</li>
                    <li><strong>R-CHOP x 6:</strong> Alternative ohne Bestrahlung.</li>
                </ul>
                <h3>Fortgeschrittenes Stadium (III-IV oder I-II mit Risikofaktoren)</h3>
                <ul>
                    <li><strong>R-CHOP x 6-8:</strong> Standard.</li>
                    <li><strong>PET-adaptierte Therapie:</strong> Deeskalation bei guter Response möglich.</li>
                </ul>
                <h3>High-Risk DLBCL</h3>
                <ul>
                    <li><strong>Double/Triple Hit:</strong> DA-EPOCH-R oder R-CHOP + Bestrahlung, ggf. ASCT-Konsolidierung.</li>
                    <li><strong>High-IPI:</strong> Dosisintensivierte Regime in Erwägung ziehen.</li>
                </ul>
                <h3>ZNS-Prophylaxe</h3>
                <ul>
                    <li>Indikation: High-IPI, extranodaler Befall (Hoden, Mamma, Nebenniere), Nierenbefall.</li>
                    <li>Methotrexat intrathekal oder systemisch hochdosiert.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>Salvage-Chemotherapie:</strong> R-DHAP, R-ICE, R-GDP.</li>
                    <li><strong>ASCT:</strong> Bei chemosensiblem Rezidiv (Standard).</li>
                    <li><strong>CAR-T-Zellen:</strong> Nach Versagen von 2+ Linien (Axicabtagen, Lisocabtagen).</li>
                    <li><strong>Polatuzumab + BR:</strong> Bei nicht-Transplantationskandidaten.</li>
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
                                <td>Anamnese, körperliche Untersuchung, Labor, CT/PET-CT bei Bedarf</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor, CT bei Bedarf</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Response-Assessment</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Standard zur Beurteilung der Remission (Deauville-Score).</li>
                    <li>Deauville 1-3: Komplette Remission.</li>
                    <li>Deauville 4: Partielle Remission.</li>
                    <li>Deauville 5: Refraktäre Erkrankung.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Impfstatus überprüfen (inaktivierte Impfstoffe).</li>
                    <li>Screening auf Zweitmalignome.</li>
                    <li>Kardiologische Nachsorge nach Anthracyclin-Therapie.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Spätfolgen</h3>
                <ul>
                    <li><strong>Kardiotoxizität:</strong> Nach Doxorubicin.</li>
                    <li><strong>Periphere Neuropathie:</strong> Nach Vincristin.</li>
                    <li><strong>Sekundärmalignome:</strong> Erhöhtes Risiko.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diffuses großzelliges B-Zell-Lymphom. AWMF-Registernummer: 068-003. Leitlinienprogramm Onkologie.</p>"
    });
})();