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
                title: "Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Oft asymptomatisch, Zufallsbefund.</li>
                    <li>Langsam progressive Lymphadenopathie.</li>
                    <li>B-Symptome bei ca. 20%.</li>
                    <li>Splenomegalie.</li>
                    <li>Knochenmarkbefall häufig (ca. 50-70%).</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>Biopsie:</strong> Exzisionsbiopsie eines Lymphknotens.</li>
                    <li><strong>Histologie:</strong> Follikuläres Wachstumsmuster.</li>
                    <li><strong>Immunhistochemie:</strong> CD20+, CD10+, BCL2+, BCL6+.</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Staging.</li>
                    <li><strong>CT/PET-CT:</strong> Staging.</li>
                    <li><strong>Labor:</strong> LDH, Beta-2-Mikroglobulin, Blutbild.</li>
                </ul>
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
                    <li>Low (0-1), Intermediate (2), High (3-5).</li>
                </ul>
                <h3>Geriatrisches Screening</h3>
                <ul>
                    <li>Assessment vor Therapieeinleitung bei älteren Patienten.</li>
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