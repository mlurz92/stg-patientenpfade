(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "multiples-myelom",
        module: "onko",
        title: "Multiples Myelom",
        name: "Multiples Myelom",
        category: "onko-haem",
        stand: "S3-LL 1.0 (02/22)",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Inzidenz: ca. 8/100.000 pro Jahr (Stand 2016)</li>
                    <li>Jährlich ca. 3.900 Männer und 3.000 Frauen in Deutschland</li>
                    <li>Medianes Erkrankungsalter: 72 Jahre (Männer), 74 Jahre (Frauen)</li>
                    <li>Absolute 5-Jahres-Überlebensrate: Männer 41%, Frauen 40%</li>
                    <li>Relative 5-Jahres-Überlebensrate: Männer 48%, Frauen 45%</li>
                </ul>
                <h3>Pathogenese</h3>
                <ul>
                    <li>Klonale Proliferation von Plasmazellen im Knochenmark</li>
                    <li>Produktion von monoklonalem Immunglobulin (M-Protein)</li>
                    <li>Genetische Aberrationen: t(4;14), t(14;16), del(17p), Hyperdiploidie</li>
                    <li>Präkanzeröse Stadien: MGUS, Smoldering Myelom</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Alter:</strong> Inzidenz steigt mit dem Alter</li>
                    <li><strong>Genetik:</strong> Familiäre Häufung selten</li>
                    <li><strong>MGUS:</strong> Risiko der Progression ca. 1%/Jahr</li>
                    <li><strong>Smoldering Myelom:</strong> Risiko der Progression ca. 10%/Jahr</li>
                    <li><strong>Adipositas:</strong> Leicht erhöhtes Risiko</li>
                </ul>
                <h3>Klassifikation der Plasmazellneoplasien (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Entität</th>
                                <th>Merkmale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>MGUS</strong></td>
                                <td>M-Protein &lt;30g/L, Plasmazellen &lt;10%, keine CRAB-Kriterien</td>
                            </tr>
                            <tr>
                                <td><strong>Smoldering Myelom</strong></td>
                                <td>M-Protein &ge;30g/L oder Plasmazellen 10-60%, keine Organschäden</td>
                            </tr>
                            <tr>
                                <td><strong>Multiples Myelom</strong></td>
                                <td>>10% Plasmazellen oder Plasmozytom + SLiM-CRAB-Kriterien</td>
                            </tr>
                            <tr>
                                <td><strong>Plasmazellleukämie</strong></td>
                                <td>>20% Plasmazellen im peripheren Blut</td>
                            </tr>
                            <tr>
                                <td><strong>Solitäres Plasmozytom</strong></td>
                                <td>Solitäre Knochen- oder Weichteilläsion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>SLiM-CRAB-Kriterien</h3>
                <ul>
                    <li><strong>CRAB-Kriterien:</strong></li>
                    <li><strong>C</strong>alcium: Hyperkalzämie (>110 mg/L oder >10 mg/L über Normwert)</li>
                    <li><strong>R</strong>enal: Kreatinin-Clearance &lt;40 ml/min oder Serum-Kreatinin >177 µmol/L</li>
                    <li><strong>A</strong>nemia: Hb &lt;100 g/L oder >20 g/L unter Normwert</li>
                    <li><strong>B</strong>one: &gt;1 Osteolyse (Röntgen, CT, PET/CT)</li>
                    <li><strong>SLiM-Kriterien:</strong></li>
                    <li><strong>S</strong>ixty: &ge;60% klonale Plasmazellen im Knochenmark</li>
                    <li><strong>L</strong>ight chains: Freie Leichtketten-Ratio >100 und Absolutwert >100mg/L</li>
                    <li><strong>M</strong>RI: >1 fokale Läsion (>5mm) in der Ganzkörper-MRT</li>
                </ul>
                <h3>Diagnostik bei Erstdiagnose</h3>
                <ul>
                    <li><strong>Blut:</strong> Blutbild, Kreatinin, Kalzium, LDH, Beta-2-Mikroglobulin, Albumin</li>
                    <li><strong>Serumprotein-Elektrophorese (SPE):</strong> M-Protein-Nachweis</li>
                    <li><strong>Immunfixation (IFE):</strong> Typisierung (IgG, IgA, IgM, Leichtketten)</li>
                    <li><strong>Freie Leichtketten (FLC):</strong> Serum, Ratio kappa/lambda</li>
                    <li><strong>24h-Sammelurin:</strong> Protein, Immunfixation</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Plasmazellanteil, Histologie, Zytogenetik/FISH</li>
                    <li><strong>Ganzkörper-CT:</strong> Osteolysen, extramedullärer Befall</li>
                    <li><strong>Ganzkörper-MRT oder PET-CT:</strong> Knochenmarkinfiltration, fokale Läsionen</li>
                </ul>
                <h3>Zytogenetik/FISH (vor Therapiebeginn)</h3>
                <ul>
                    <li><strong>Standard-Risiko:</strong> t(11;14), 13q-Deletion</li>
                    <li><strong>High-Risk:</strong> del(17p), t(4;14), t(14;16), t(14;20)</li>
                    <li><strong>1q-Zugewinn:</strong> Assoziiert mit schlechterer Prognose</li>
                </ul>
                <h3>ISS und R-ISS-Staging</h3>
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
                                <td><strong>ISS I</strong></td>
                                <td>β2MG &le;3,5 mg/L und Albumin &ge;3,5 g/dL</td>
                                <td>62 Monate</td>
                            </tr>
                            <tr>
                                <td><strong>ISS II</strong></td>
                                <td>Weder ISS I noch III</td>
                                <td>44 Monate</td>
                            </tr>
                            <tr>
                                <td><strong>ISS III</strong></td>
                                <td>β2MG &ge;5,5 mg/L</td>
                                <td>29 Monate</td>
                            </tr>
                            <tr>
                                <td><strong>R-ISS I</strong></td>
                                <td>ISS I + Standardrisiko-Zytogenetik + LDH normal</td>
                                <td>5-J-ÜLR 82%</td>
                            </tr>
                            <tr>
                                <td><strong>R-ISS III</strong></td>
                                <td>ISS III + Hochrisiko-Zytogenetik oder LDH erhöht</td>
                                <td>5-J-ÜLR 40%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Therapieindikation</h3>
                <ul>
                    <li>Symptomatisches Multiples Myelom (SLiM-CRAB-Kriterien erfüllt)</li>
                    <li>POEMS-Syndrom: Lokale Bestrahlung bei &le;3 Läsionen, systemisch bei disseminierter Erkrankung</li>
                </ul>
                <h3>Therapiefähigkeit und Komorbidität</h3>
                <ul>
                    <li><strong>Beurteilung:</strong> Biologisches Alter, nicht kalendarisches Alter</li>
                    <li><strong>Komorbiditäts-Scores:</strong> R-MCI, IMWG-FI</li>
                    <li><strong>Geriatrisches Assessment:</strong> Bei älteren Patienten empfohlen</li>
                </ul>
                <h3>Transplantationskandidaten (fit, &le;70 Jahre)</h3>
                <ul>
                    <li><strong>Induktion (4-6 Zyklen):</strong></li>
                    <li>VRd: Bortezomib + Lenalidomid + Dexamethason</li>
                    <li>Dara-VRd: Daratumumab + VRd</li>
                    <li>Dara-VTD: Daratumumab + Bortezomib + Thalidomid + Dexamethason</li>
                    <li><strong>Stammzellapherese:</strong> Nach Mobilisation (G-CSF &plusmn; Plerixafor)</li>
                    <li><strong>Hochdosis-Chemotherapie:</strong> Melphalan 200 mg/m&sup2; + ASCT</li>
                    <li><strong>Konsolidierung:</strong> Optional (VRd x 2)</li>
                    <li><strong>Erhaltung:</strong> Lenalidomid bis Progress</li>
                </ul>
                <h3>Nicht-Transplantationskandidaten (unfit/frail, >70 Jahre)</h3>
                <ul>
                    <li><strong>Dara-Rd:</strong> Daratumumab + Lenalidomid + Dexamethason</li>
                    <li><strong>VRd-lite:</strong> Modifiziertes VRd</li>
                    <li><strong>VMP:</strong> Bortezomib + Melphalan + Prednison</li>
                    <li><strong>DRVd:</strong> Daratumumab + Lenalidomid + Bortezomib + Dexamethason</li>
                </ul>
                <h3>Rezidivtherapie (1.-3. Rezidiv)</h3>
                <ul>
                    <li><strong>Prinzip:</strong> Wahl basierend auf Vortherapie, Ansprechdauer, Komorbidität</li>
                    <li><strong>Daratumumab-basiert:</strong> Dara-Rd, Dara-Vd, Dara-Pd</li>
                    <li><strong>Carfilzomib-basiert:</strong> K-Rd, K-Vd, KRd</li>
                    <li><strong>Pomalidomid-basiert:</strong> Pd, Dara-Pd</li>
                    <li><strong>Venetoclax:</strong> Bei t(11;14)</li>
                    <li><strong>Selinexor:</strong> In Kombination</li>
                    <li><strong>CAR-T-Zellen:</strong> Idecabtagen vicleucel, Ciltacabtagene autoleucel (nach &ge;4 Vortherapien)</li>
                    <li><strong>Bispezifische Antikörper:</strong> Teclistamab, Elranatamab</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li><strong>Antiresorptive Therapie:</strong> Zoledronsäure oder Denosumab</li>
                    <li><strong>Infektionsprophylaxe:</strong> Antibiotika bei Neutropenie, IVIG bei Hypogammaglobulinämie</li>
                    <li><strong>Thromboembolieprophylaxe:</strong> Bei Immunmodulator-Therapie (NMH oder ASS)</li>
                    <li><strong>Anämie:</strong> Erythropoese-stimulierende Agenzien</li>
                    <li><strong>Schmerztherapie:</strong> WHO-Schema</li>
                </ul>
                <h3>Komplikationen</h3>
                <ul>
                    <li><strong>Spinale Kompression:</strong> Interdisziplinäre Abstrahlung/Chirurgie</li>
                    <li><strong>Pathologische Frakturen:</strong> Chirurgische Stabilisierung + Radiotherapie</li>
                    <li><strong>Nierenbeteiligung:</strong> Nephrologische Mitbetreuung, Proteasom-Inhibitoren</li>
                    <li><strong>AL-Amyloidose:</strong> Systemische Therapie</li>
                </ul>`
            },
            {
                title: "Nachsorge & Verlauf",
                html: `<h3>Verlaufsdiagnostik</h3>
                <ul>
                    <li><strong>Unter Therapie:</strong> Alle 2-3 Monate Blutbild, M-Protein, FLC, Kreatinin, Kalzium</li>
                    <li><strong>24h-Sammelurin:</strong> Bei messbarem Urin-M-Protein</li>
                    <li><strong>Bildgebung:</strong> Bei serologischem oder klinischem Progress-Verdacht</li>
                </ul>
                <h3>Response-Kriterien (IMWG 2016)</h3>
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
                                <td><strong>sCR</strong></td>
                                <td>CR + normale FLC-Ratio + Fehlen klonaler Zellen in Biopsie</td>
                            </tr>
                            <tr>
                                <td><strong>CR</strong></td>
                                <td>Negative Immunfixation in Serum und Urin, &lt;5% Plasmazellen</td>
                            </tr>
                            <tr>
                                <td><strong>VGPR</strong></td>
                                <td>&ge;90% Reduktion M-Protein, Urin &lt;100mg/24h</td>
                            </tr>
                            <tr>
                                <td><strong>PR</strong></td>
                                <td>&ge;50% Reduktion M-Protein</td>
                            </tr>
                            <tr>
                                <td><strong>MR</strong></td>
                                <td>25-49% Reduktion M-Protein</td>
                            </tr>
                            <tr>
                                <td><strong>SD</strong></td>
                                <td>Weder PR noch Progress</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>MRD (Minimal Residual Disease)</h3>
                <ul>
                    <li><strong>Prognostischer Stellenwert:</strong> MRD-Negativität = längeres PFS</li>
                    <li><strong>Methoden:</strong> Durchflusszytometrie, NGS</li>
                    <li><strong>Bildgebung:</strong> PET-CT oder Ganzkörper-MRT</li>
                    <li><strong>Hinweis:</strong> Routinemäßige Bestimmung nicht empfohlen, im Kontext klinischer Studien</li>
                </ul>
                <h3>Rezidivdefinition</h3>
                <ul>
                    <li>&ge;25% Zunahme des M-Proteins (mindestens +5 g/L)</li>
                    <li>Neue Knochenläsionen oder Weichteilmanifestationen</li>
                    <li>&ge;50% Zunahme fokaler Läsionen</li>
                    <li>Neue Endorganschäden (CRAB-Kriterien)</li>
                </ul>
                <h3>Rezidivtherapie-Indikation</h3>
                <ul>
                    <li>Neue Endorganschäden</li>
                    <li>Progrediente extramedulläre Erkrankung</li>
                    <li>Hohe Dynamik der biochemischen Parameter</li>
                    <li>Progress unter laufender Therapie oder früh nach Therapieende</li>
                    <li>Progress innerhalb 12 Monate nach ASCT</li>
                </ul>
                <h3>Langzeit-Nachsorge</h3>
                <ul>
                    <li>Regelmäßige klinische Untersuchung</li>
                    <li>Laborkontrollen alle 3-4 Monate</li>
                    <li>Bildgebung bei klinischem Verdacht</li>
                    <li>Impfungen (inaktivierte Impfstoffe)</li>
                    <li>Knochenschutz fortsetzen</li>
                    <li>Psychoonkologische Betreuung</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge für Patienten mit monoklonaler Gammopathie unklarer Signifikanz (MGUS) oder Multiplem Myelom. Kurzversion 1.0, Februar 2022. AWMF-Registernummer: 018/035OL. Leitlinienprogramm Onkologie.</p>"
    });
})();