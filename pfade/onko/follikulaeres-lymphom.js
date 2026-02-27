(function() {
    'use strict';
    if (!window.PFADE_DATA) window.PFADE_DATA = [];
    window.PFADE_DATA.push({
        id: "follikulaeres-lymphom",
        name: "Follikuläres Lymphom",
        category: "onko",
        stand: "S3-LL 1.0 (06/20)",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Zweithäufigstes Non-Hodgkin-Lymphom (ca. 20-25% aller NHL)</li>
                    <li>Inzidenz: ca. 3-4/100.000 pro Jahr</li>
                    <li>Median bei Diagnose: ca. 60-65 Jahre</li>
                    <li>Männer : Frauen = 1 : 1</li>
                    <li>5-Jahres-Überleben: ca. 80-90%</li>
                </ul>
                <h3>Biologie</h3>
                <ul>
                    <li>t(14;18)(q32;q21): BCL2-IGH-Translokation in ca. 85%.</li>
                    <li>Überexpression von BCL2 &rarr; Apoptose-Inhibition.</li>
                    <li>Immunphänotyp: CD20+, CD10+, BCL2+, BCL6+, CD23 variabel, CD5-.</li>
                    <li>Indolenter Verlauf, aber nicht kurabel.</li>
                </ul>
                <h3>Grading (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Zentroblasten/HPF</th>
                                <th>Klinisches Verhalten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1</strong></td>
                                <td>0-5</td>
                                <td>Indolent</td>
                            </tr>
                            <tr>
                                <td><strong>2</strong></td>
                                <td>6-15</td>
                                <td>Indolent</td>
                            </tr>
                            <tr>
                                <td><strong>3A</strong></td>
                                <td>>15 (mit Zentrozyten)</td>
                                <td>Aggressiver</td>
                            </tr>
                            <tr>
                                <td><strong>3B</strong></td>
                                <td>Solide Zentroblasten</td>
                                <td>Aggressiv, wie DLBCL behandeln</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Genetik:</strong> Familiäre Häufung möglich.</li>
                    <li><strong>Immunstatus:</strong> Autoimmunerkrankungen erhöhen das Risiko.</li>
                    <li><strong>Infektionen:</strong> Hepatitis C assoziiert.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Sonographie</h3>
                <ul>
                    <li><strong>Abdomensonographie:</strong> Beurteilung von Leber, Milz, Lymphknoten und intraabdominellen Organen.</li>
                    <li><strong>Lymphknotensonographie:</strong> Beurteilung vergrößerter Lymphknoten.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Standard-Staging bei fortgeschrittener Erkrankung.</li>
                    <li><strong>CT Becken:</strong> Bei Verdacht auf Beckenlymphknotenbefall.</li>
                </ul>
                <h3>Positronenemissionstomographie (PET-CT)</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Zur Beurteilung des gesamten Körpers, insbesondere bei Verdacht auf Transformation zu DLBCL oder zur Identifikation von Hochtransformationsrisiko.</li>
                    <li><strong>FDG-PET:</strong> Hat sich als wertvoll für das Staging und die Response-Beurteilung erwiesen.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT:</strong> Bei speziellen Fragestellungen, insbesondere bei Knochenmarkbeteiligung.</li>
                </ul>
                <h3>Röntgen-Thorax</h3>
                <ul>
                    <li><strong>Röntgen-Thorax:</strong> Basisuntersuchung zum Ausschluss von Thoraxpathologien.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild</h3>
                <ul>
                    <li><strong>Differenzialblutbild:</strong> Erfassung von Lymphozytose, Anämie, Thrombozytopenie.</li>
                    <li><strong>Blutausstrich:</strong> Morphologische Beurteilung der Lymphozyten.</li>
                </ul>
                <h3>Serumchemie</h3>
                <ul>
                    <li><strong>LDH (Laktatdehydrogenase):</strong> Wichtigster Prognosefaktor, erhöht bei hoher Tumorlast.</li>
                    <li><strong>Beta-2-Mikroglobulin:</strong> Unabhängiger Prognosefaktor.</li>
                    <li><strong>Harnsäure:</strong> Bei Verdacht auf Tumorlyse-Syndrom.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium.</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li><strong>HIV-Test:</strong> Bei Risikopatienten.</li>
                    <li><strong>Hepatitis B und C:</strong> Vor Therapiebeginn.</li>
                </ul>
                <h3>Immunelektrophorese</h3>
                <ul>
                    <li><strong>Serumproteinelektrophorese:</strong> Zum Ausschluss eines Plasmozytoms/Multiplen Myeloms.</li>
                    <li><strong>Immunglobuline:</strong> Quantifizierung von IgG, IgA, IgM.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Exzisionsbiopsie:</strong> Vollständige Entfernung eines Lymphknotens, Goldstandard für die Diagnosesicherung.</li>
                    <li><strong>Inzisionsbiopsie:</strong> Bei inoperablen Tumoren.</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Zur Beurteilung des Knochenmarkbefalls (ca. 50-70% bei Diagnose).</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Follikuläres Wachstumsmuster:</strong> Nodulär, follikulär, diffuse Areale.</li>
                    <li><strong>Zentrozyten und Zentroblasten:</strong> Charakteristische Zelltypen.</li>
                </ul>
                <h3>Grading (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Zentroblasten/HPF</th>
                                <th>Klinisches Verhalten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>1</strong></td>
                                <td>0-5</td>
                                <td>Indolent</td>
                            </tr>
                            <tr>
                                <td><strong>2</strong></td>
                                <td>6-15</td>
                                <td>Indolent</td>
                            </tr>
                            <tr>
                                <td><strong>3A</strong></td>
                                <td>>15 (mit Zentrozyten)</td>
                                <td>Aggressiver</td>
                            </tr>
                            <tr>
                                <td><strong>3B</strong></td>
                                <td>Solide Zentroblasten</td>
                                <td>Aggressiv, wie DLBCL behandeln</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li><strong>CD20+:</strong> B-Zell-Marker.</li>
                    <li><strong>CD10+:</strong> Follikulärer Marker.</li>
                    <li><strong>BCL2+:</strong> Apoptose-Inhibitor, Überexpression durch t(14;18).</li>
                    <li><strong>BCL6+:</strong> Follikulärer Marker.</li>
                    <li><strong>CD23:</strong> Variabel positiv.</li>
                    <li><strong>CD5-:</strong> Negativ (wichtig für Abgrenzung zu CLL/MCL).</li>
                    <li><strong>Ki-67:</strong> Proliferationsindex.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Zytogenetik</h3>
                <ul>
                    <li><strong>t(14;18)(q32;q21):</strong> BCL2-IGH-Translokation in ca. 85% der Fälle.</li>
                    <li><strong>FISH-Analyse:</strong> Zum Nachweis der Translokation.</li>
                </ul>
                <h3>Molekulargenetik</h3>
                <ul>
                    <li><strong>PCR:</strong> Nachweis der BCL2-IGH-Fusion.</li>
                    <li><strong>Sequenzierung:</strong> Zur Identifikation von Mutationen (z.B. EZH2, CREBBP, EP300).</li>
                </ul>
                <h3>Flow-Zytometrie</h3>
                <ul>
                    <li><strong>Immunphänotypisierung:</strong> Bestätigung des B-Zell-Charakters.</li>
                    <li><strong>Klonalitätsnachweis:</strong> Bestimmung der Klonalität der B-Zellen.</li>
                </ul>
                <h3>Prognostische Molekularmarker</h3>
                <ul>
                    <li><strong>EZH2-Mutation:</strong> Prognostisch ungünstig, Therapieoption mit Tazemetostat.</li>
                    <li><strong>CREBBP/EP300-Mutationen:</strong> Häufig, beeinflussen Histon-Acetylierung.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>Körperliche Untersuchung:</strong> Erfassung von Lymphadenopathie, Splenomegalie, Hepatomegalie.</li>
                    <li><strong>B-Symptome:</strong> Fieber >38°C, Nachtschweiß, Gewichtsverlust >10%.</li>
                </ul>
                <h3>Ann-Arbor-Stadium</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Befall einer Lymphknotenregion</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Befall von ≥2 Lymphknotenregionen auf einer Seite des Zwerchfells</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Befall von Lymphknotenregionen auf beiden Seiten des Zwerchfells</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Diffuser oder disseminierter Befall extranodaler Organe (Knochenmark, Leber, etc.)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>FLIPI (Follicular Lymphoma International Prognostic Index)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikofaktor</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alter >60 Jahre</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Stadium III/IV</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Hämoglobin <12 g/dl</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>LDH > normal</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Extranodalbefall >1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li>Low (0-1 Punkte): Gute Prognose</li>
                    <li>Intermediate (2 Punkte): Intermediäre Prognose</li>
                    <li>High (3-5 Punkte): Ungünstige Prognose</li>
                </ul>
                <h3>FLIPI2 (für progressierte Erkrankung)</h3>
                <ul>
                    <li>Alter >60 Jahre</li>
                    <li>Knochenmarkbeteiligung</li>
                    <li>Hämoglobin <12 g/dl</li>
                    <li>Beta-2-Mikroglobulin erhöht</li>
                    <li>LDH erhöht</li>
                </ul>
                <h3>Geriatrisches Screening</h3>
                <ul>
                    <li><strong>Comprehensive Geriatric Assessment (CGA):</strong> Vor Therapieeinleitung bei älteren Patienten zur Beurteilung der Fitness.</li>
                    <li><strong>ADL (Activities of Daily Living):</strong> Selbstständigkeit im Alltag.</li>
                    <li><strong>iADL (instrumental ADL):</strong> Instrumentelle Alltagsaktivitäten.</li>
                    <li><strong>Charlson-Comorbidity-Index:</strong> Komorbiditäten.</li>
                </ul>`
            },
            {
                title: "Klinische Präsentation",
                html: `<h3>Symptome</h3>
                <ul>
                    <li><strong>Oft asymptomatisch:</strong> Zufallsbefund bei routinemäßiger Untersuchung.</li>
                    <li><strong>Langsam progressive Lymphadenopathie:</strong> Schmerzlos, häufig zervikal oder axillär.</li>
                    <li><strong>B-Symptome:</strong> Bei ca. 20% der Patienten (Fieber, Nachtschweiß, Gewichtsverlust).</li>
                    <li><strong>Splenomegalie:</strong> Häufig, kann asymptomatisch sein.</li>
                    <li><strong>Hepatomegalie:</strong> Bei fortgeschrittener Erkrankung.</li>
                    <li><strong>Knochenmarkbefall:</strong> Häufig (ca. 50-70%), oft asymptomatisch.</li>
                </ul>
                <h3>Laborbefunde</h3>
                <ul>
                    <li><strong>Lymphozytose:</strong> Mild bis moderat.</li>
                    <li><strong>Anämie:</strong> Normozytär, normochrom.</li>
                    <li><strong>Thrombozytopenie:</strong> Bei Knochenmarkinfiltration.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Therapie der frühen Stadien (I-II)</h3>
                <ul>
                    <li><strong>Strahlentherapie:</strong> Kurative Intention bei Stadium I-II.</li>
                    <li><strong>Strahlendosis:</strong> 24-30 Gy.</li>
                    <li><strong>Bei asymptomatischen Patienten mit eingeschränkter Lebenserwartung:</strong> Watch and Wait möglich.</li>
                </ul>
                <h3>Fortgeschrittene Stadien (III-IV) - Watch and Wait</h3>
                <ul>
                    <li>Standard bei asymptomatischen Patienten (ca. 20-30%).</li>
                    <li>Kein Überlebensvorteil durch frühe Therapie.</li>
                    <li>Regelmäßige Kontrollen alle 3-6 Monate.</li>
                </ul>
                <h3>Indikation zur Therapie</h3>
                <ul>
                    <li>Symptomatische Lymphadenopathie.</li>
                    <li>B-Symptome.</li>
                    <li>Zytopenien durch Knochenmarkinfiltration.</li>
                    <li>Organbeteiligung.</li>
                    <li>Schneller Progress.</li>
                </ul>
                <h3>Erstlinientherapie</h3>
                <ul>
                    <li><strong>Rituximab-Monotherapie:</strong> Bei älteren/unfit Patienten.</li>
                    <li><strong>R-Chemo (R-CHOP, R-CVP, R-Bendamustin):</strong> Standard bei jüngeren/fiten Patienten.</li>
                    <li><strong>R-Bendamustin:</strong> Gute Verträglichkeit, häufig bevorzugt.</li>
                    <li><strong>Rituximab-Erhaltung:</strong> Alle 2 Monate für 2 Jahre nach Chemoimmuntherapie.</li>
                </ul>
                <h3>Chemotherapie-freie Behandlung</h3>
                <ul>
                    <li>Rituximab + Lenalidomid als Alternative.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>Chemoimmuntherapie:</strong> Wie Erstlinie, ggf. anderes Regime.</li>
                    <li><strong>PI3K-Inhibitoren:</strong> Idelalisib, Copanlisib, Umbralisib.</li>
                    <li><strong>EZH2-Inhibitor:</strong> Tazemetostat bei EZH2-Mutation.</li>
                    <li><strong>Lenalidomid + Rituximab:</strong> Immunmodulatorisch.</li>
                    <li><strong>CAR-T-Zellen:</strong> Nach 2+ Vortherapien.</li>
                    <li><strong>ASCT:</strong> Bei chemosensiblem Rezidiv in Erwägung ziehen.</li>
                </ul>
                <h3>Transformation</h3>
                <ul>
                    <li>Transformation zu DLBCL in ca. 2-3%/Jahr.</li>
                    <li>Plötzliche klinische Verschlechterung, steigende LDH.</li>
                    <li>Biopsie zur Bestätigung.</li>
                    <li>Therapie wie DLBCL (R-CHOP).</li>
                </ul>`
            },
            {
                title: "Nachsorge",
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
                                <td>Alle 4-6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Alle 6-12 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Bildgebung</h3>
                <ul>
                    <li>CT bei klinischem Verdacht auf Progress.</li>
                    <li>PET-CT bei Verdacht auf Transformation.</li>
                </ul>
                <h3>Rezidivverdacht</h3>
                <ul>
                    <li>Bei Verdacht auf Transformation: PET-CT und Biopsie.</li>
                </ul>
                <h3>Früherkennung von Zweitmalignomen</h3>
                <ul>
                    <li>Erhöhtes Risiko für Sekundärmalignome beachten.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Lebenslange Nachsorge.</li>
                    <li>Impfstatus überprüfen.</li>
                    <li>Infektionsprophylaxe bei Hypogammaglobulinämie.</li>
                    <li>Screening auf Transformation (LDH, klinische Symptome).</li>
                </ul>
                <h3>Prognose</h3>
                <ul>
                    <li>Medianes Überleben: 10-15 Jahre.</li>
                    <li>Rezidivrate: ca. 20-30%/Jahr in den ersten 2 Jahren.</li>
                    <li>Verbesserte Prognose durch Rituximab-Erhaltung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Follikuläres Lymphom, Kurzversion 1.0. AWMF-Registernummer: 018/033OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Version 1.0 &ndash; Juni 2020.</p>"
    });
})();