(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "cll",
        module: "onko",
        title: "Chronische Lymphatische Leukämie (CLL)",
        name: "Chronische Lymphatische Leukämie (CLL)",
        category: "onko-haem",
        stand: "S3-LL 2.0 (12/24)",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
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
                    <li><strong>Genetik:</strong> Familiäre Häufung (ca. 5-10% der Fälle)</li>
                    <li><strong>Alter:</strong> Inzidenz steigt mit dem Alter</li>
                    <li><strong>Agent Orange:</strong> Assoziation mit Exposition</li>
                    <li><strong>Hepatitis C:</strong> Erhöhtes Risiko</li>
                </ul>
                <h3>Biologie</h3>
                <ul>
                    <li>Klonale Proliferation von CD5+ CD19+ CD23+ B-Lymphozyten</li>
                    <li>Immunphänotyp: CD5+, CD19+, CD20 (dim), CD23+, FMC7-</li>
                    <li>Zytogenetische Aberrationen: del(13q14), del(11q), del(17p), Trisomie 12</li>
                    <li>IGHV-Mutationsstatus: Mutiert (günstiger) vs. unmutiert (ungünstiger)</li>
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
                title: "Klinische Diagnostik",
                html: `<h3>Symptome & klinische Zeichen</h3>
                <ul>
                    <li><strong>Oft asymptomatisch:</strong> Zufallsbefund bei Routinelabor</li>
                    <li><strong>Lymphadenopathie:</strong> Zervikal, axillär, inguinal</li>
                    <li><strong>Splenomegalie:</strong> Vergrößerte Milz</li>
                    <li><strong>Hepatomegalie:</strong> Vergrößerte Leber</li>
                    <li><strong>B-Symptome:</strong> Fieber (>38°C), Nachtschweiß, Gewichtsverlust >10%</li>
                    <li><strong>Infektionen:</strong> Rezidivierende Infekte durch Immundefekt</li>
                    <li><strong>Anämie:</strong> Müdigkeit, Blässe</li>
                    <li><strong>Thrombozytopenie:</strong> Blutungsneigung</li>
                </ul>
                <h3>Körperliche Untersuchung</h3>
                <ul>
                    <li>Inspektion und Palpation aller Lymphknotenstationen</li>
                    <li>Leber- und Milzgröße</li>
                    <li>Hautveränderungen</li>
                    <li>Neurologische Untersuchung</li>
                </ul>
                <h3>Diagnosekriterien (iwCLL)</h3>
                <ul>
                    <li><strong>Blutlymphozytose:</strong> >5.000/µl klonale B-Zellen</li>
                    <li><strong>ODER:</strong> Klonale B-Zellen <5.000/µl mit Lymphadenopathie oder Organomegalie (MBL = Monoklonale B-Zell-Lymphozytose)</li>
                    <li><strong>Charakteristischer Immunphänotyp:</strong> CD5+ CD19+ CD23+ B-Zellen</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild</h3>
                <ul>
                    <li><strong>Leukozyten:</strong> Erhöht mit Lymphozytose</li>
                    <li><strong>Lymphozyten:</strong> >5.000/µl (absolute Lymphozytose)</li>
                    <li><strong>Charakteristisches Blutausstrichbild:</strong> Kleine, reife Lymphozyten mit "smudge cells"</li>
                    <li><strong>Anämie:</strong> Normozytär, normochrom</li>
                    <li><strong>Thrombozytopenie:</strong> Bei Knochenmarkinfiltration oder autoimmun</li>
                </ul>
                <h3>Blutchemie</h3>
                <ul>
                    <li><strong>LDH:</strong> Erhöht bei hoher Tumorlast oder Transformation</li>
                    <li><strong>Beta-2-Mikroglobulin:</strong> Prognostisch relevant, erhöht bei hoher Tumorlast</li>
                    <li><strong>Harnsäure:</strong> Bei Verdacht auf Tumorlyse</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li><strong>HIV:</strong> Vor Therapiebeginn</li>
                    <li><strong>Hepatitis B und C:</strong> Vor Therapiebeginn (Risiko für Reaktivierung)</li>
                </ul>
                <h3>Direkter Antiglobulin-Test (DAT)</h3>
                <ul>
                    <li>Zum Ausschluss einer autoimmunhämolytischen Anämie (AIHA)</li>
                </ul>`
            },
            {
                title: "Durchflusszytometrie & Immunphänotypisierung",
                html: `<h3>Durchflusszytometrie (Immunphänotypisierung)</h3>
                <ul>
                    <li><strong>Standarddiagnostik:</strong> Nachweis klonaler B-Zellen im Blut</li>
                    <li><strong>Typischer Immunphänotyp:</strong> CD5+, CD19+, CD20 (dim), CD23+, FMC7-, CD79b (dim)</li>
                    <li><strong>Surface Ig:</strong> Schwach positiv (dim)</li>
                    <li><strong>CD43:</strong> Positiv</li>
                    <li><strong>CD200:</strong> Positiv (hilfreich bei Differenzialdiagnose)</li>
                </ul>
                <h3>Differenzialdiagnose</h3>
                <ul>
                    <li><strong>Mantelzell-Lymphom:</strong> CD5+, CD20+, CD23-, Cyclin D1+</li>
                    <li><strong>Follikuläres Lymphom:</strong> CD10+, CD23-/+</li>
                    <li><strong>Prolymphozytische Leukämie (PLL):</strong> CD5+, FMC7+</li>
                    <li><strong>Marginalzonen-Lymphom:</strong> CD5-, CD23-</li>
                </ul>
                <h3>Minimal Residual Disease (MRD)</h3>
                <ul>
                    <li><strong>MRD-Nachweis:</strong> Durchflusszytometrie oder PCR</li>
                    <li><strong>Ziel:</strong> <10⁻⁴ (0,01%) residuale Tumorzellen</li>
                    <li><strong>Zeitpunkt:</strong> Nach Abschluss der Therapie zur Response-Bestimmung</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik & Zytogenetik",
                html: `<h3>FISH (Fluoreszenz-In-Situ-Hybridisierung)</h3>
                <ul>
                    <li><strong>Standard:</strong> Interphase-FISH auf peripheren Blutzellen</li>
                    <li><strong>del(17p) / TP53-Deletion:</strong> Ungünstige Prognose, Therapieoptimierung</li>
                    <li><strong>del(11q) / ATM-Deletion:</strong> Ungünstige Prognose</li>
                    <li><strong>del(13q14):</strong> Günstige Prognose (bei isoliertem Auftreten)</li>
                    <li><strong>Trisomie 12:</strong> Intermediäre Prognose</li>
                </ul>
                <h3>IGHV-Mutationsstatus</h3>
                <ul>
                    <li><strong>Sequenzierung des IGHV-Gens:</strong> Mutiert vs. unmutiert</li>
                    <li><strong>Mutiert:</strong> Günstige Prognose (>2% Sequenzunterschied zum Keimbahn-Gen)</li>
                    <li><strong>Unmutiert:</strong> Ungünstige Prognose (<2% Sequenzunterschied)</li>
                    <li><strong>Therapie-relevant:</strong> Beeinflusst Wahl der Therapie</li>
                </ul>
                <h3>TP53-Mutationsanalyse</h3>
                <ul>
                    <li><strong>Sequenzanalyse:</strong> Ergänzend zur FISH (detektiert auch Punktmutationen)</li>
                    <li><strong>Therapie-relevant:</strong> Bei del(17p) oder TP53-Mutation: BTK-Inhibitoren bevorzugen</li>
                </ul>
                <h3>Weitere molekulare Marker</h3>
                <ul>
                    <li><strong>NOTCH1-Mutation:</strong> Prognostisch relevant</li>
                    <li><strong>SF3B1-Mutation:</strong> Prognostisch relevant</li>
                    <li><strong>MYD88-Mutation:</strong> Selten bei CLL, relevant für Differenzialdiagnose</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Knochenmarkbiopsie</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei unklarer Diagnose, vor Therapiebeginn oder zur Therapieevaluation</li>
                    <li><strong>Infiltrationstyp:</strong> Nodulär, interstitiell, diffus</li>
                    <li><strong>Infiltrationsgrad:</strong> Prozentuale Ausdehnung der Knochenmarkinfiltration</li>
                    <li><strong>Prognostische Relevanz:</strong> Diffuses Infiltrationsmuster mit schlechterer Prognose assoziiert</li>
                </ul>
                <h3>Histopathologie</h3>
                <ul>
                    <li><strong>Zellmorphologie:</strong> Kleine, reife Lymphozyten mit kondensiertem Chromatin</li>
                    <li><strong>Prolymphozyten:</strong> Größere Zellen mit nucleolierten Zentren</li>
                    <li><strong>Paraimmunoblasten:</strong> Größere Zellen mit prominentem Nucleolus</li>
                    <li><strong>Sekundäre Lymphfollikel:</strong> Reaktionszentren in Lymphknoten</li>
                </ul>
                <h3>Lymphknotenbiopsie</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei atypischer Präsentation oder Verdacht auf Transformation</li>
                    <li><strong>Richter-Transformation:</strong> Bei Verdacht auf Progression zu DLBCL oder Hodgkin-Lymphom</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Sonographie</h3>
                <ul>
                    <li><strong>Abdominalsonographie:</strong> Beurteilung von Leber, Milz, retroperitonealen Lymphknoten</li>
                    <li><strong>Milzgröße:</strong> Verlängerter Milzindex als Maß für Tumorlast</li>
                    <li><strong>Lymphknoten:</strong> Beurteilung zervikaler, axillärer, inguinaler Lymphknoten</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Hals/Thorax/Abdomen:</strong> Standard-Staging bei Diagnose und vor Therapie</li>
                    <li><strong>Lymphknotenmessung:</strong> Erfassung aller befallenen Lymphknotenregionen</li>
                    <li><strong>Organbeteiligung:</strong> Leber, Milz, andere Organe</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei Verdacht auf Richter-Transformation</li>
                    <li><strong>SUV-Wert:</strong> Hohe Uptake-Werte können auf Transformation hinweisen</li>
                    <li><strong>Standard:</strong> Für Staging vor Therapie bei fortgeschrittener Erkrankung</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Nur bei speziellen Fragestellungen (z.B. ZNS-Beteiligung)</li>
                    <li><strong>ZNS-Staging:</strong> Bei neurologischen Symptomen</li>
                </ul>`
            },
            {
                title: "Staging & Prognose",
                html: `<h3>Binet-Stadium</h3>
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
                                <td>Hämoglobin ≥10 g/dl, Thrombozyten ≥100.000/µl, ≤2 befallene Regionen</td>
                                <td>>10 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>B</strong></td>
                                <td>Hämoglobin ≥10 g/dl, Thrombozyten ≥100.000/µl, >2 befallene Regionen</td>
                                <td>5-7 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>C</strong></td>
                                <td>Hämoglobin <10 g/dl und/oder Thrombozyten <100.000/µl</td>
                                <td>2-3 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Rai-Stadium</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Kriterien</th>
                                <th>Risiko</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>0</strong></td>
                                <td>Nur Lymphozytose im Blut</td>
                                <td>Niedrig</td>
                            </tr>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Lymphozytose + Lymphadenopathie</td>
                                <td>Niedrig</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Lymphozytose + Hepato- oder Splenomegalie (± Lymphadenopathie)</td>
                                <td>Intermediär</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Lymphozytose + Anämie (Hgb <11 g/dl)</td>
                                <td>Hoch</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Lymphozytose + Thrombozytopenie (<100.000/µl)</td>
                                <td>Hoch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Befallsregionen (nach Binet)</h3>
                <ul>
                    <li>Kopflivikel, zervikal</li>
                    <li>Axillär (ein- oder beidseits)</li>
                    <li>Inguinal (ein- oder beidseits)</li>
                    <li>Milz</li>
                    <li>Leber</li>
                </ul>
                <h3>Komplikationen</h3>
                <ul>
                    <li><strong>Autoimmunhämolytische Anämie (AIHA):</strong> Positiver DAT, Hämolyseparameter erhöht</li>
                    <li><strong>Immunthrombozytopenie (ITP):</strong> Isolierte Thrombozytopenie</li>
                    <li><strong>Richter-Transformation:</strong> Progression zu DLBCL (ca. 2-5%) oder Hodgkin-Lymphom</li>
                    <li><strong>Prolymphozytäre Transformation:</strong> Selten, aggressiver Verlauf</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Indikation zur Therapie (iwCLL-Kriterien)</h3>
                <ul>
                    <li>Progressive Lymphadenopathie</li>
                    <li>Progressive Splenomegalie</li>
                    <li>Progressive Hepatomegalie</li>
                    <li>Hämoglobin <10 g/dl oder Thrombozytopenie <100.000/µl (durch CLL-Infiltration)</li>
                    <li>B-Symptome</li>
                    <li>Autoimmunphänomene (AIHA, ITP) refraktär auf Steroide</li>
                    <li>Progressive Lymphozytose mit Verdoppelungszeit <6 Monate</li>
                </ul>
                <h3>Watch and Wait</h3>
                <ul>
                    <li>Standard bei asymptomatischen Patienten (Binet A/B ohne Progress)</li>
                    <li>Kein Überlebensvorteil durch frühe Therapie</li>
                    <li>Regelmäßige Kontrollen alle 3-12 Monate</li>
                </ul>
                <h3>Erstlinientherapie (fit)</h3>
                <ul>
                    <li><strong>Standard:</strong> Ibrutinib + Obinutuzumab (BTK-Inhibitor + Anti-CD20)</li>
                    <li><strong>Alternative:</strong> Acalabrutinib + Obinutuzumab</li>
                    <li><strong>Bei del(17p)/TP53:</strong> BTK-Inhibitor-basierte Therapie</li>
                </ul>
                <h3>Erstlinientherapie (unfit/älter)</h3>
                <ul>
                    <li><strong>Ibrutinib:</strong> Monotherapie oder mit Obinutuzumab</li>
                    <li><strong>Venetoclax + Obinutuzumab:</strong> Zeitlich begrenzte Therapie (12 Monate)</li>
                    <li><strong>Chemoimmuntherapie:</strong> Bendamustin + Rituximab (bei Fitten ohne TP53-Deletion)</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>BTK-Inhibitor-refraktär:</strong> Venetoclax + Rituximab</li>
                    <li><strong>Nach BTK- und BCL2-Inhibitor:</strong> Pirtobrutinib oder CAR-T-Zellen</li>
                    <li><strong>Allogene Stammzelltransplantation:</strong> Bei geeigneten Patienten mit rezidivierter/ refraktärer Erkrankung</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li>Infektionsprophylaxe (Pneumocystis jirovecii, VZV bei BTK-Inhibitoren)</li>
                    <li>IVIG-Substitution bei Hypogammaglobulinämie und rezidivierenden Infekten</li>
                    <li>Impfungen (inaktivierte Impfstoffe, Influenza, Pneumokokken)</li>
                    <li>Tumorlyse-Prophylaxe bei Therapiebeginn</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge unter Watch and Wait</h3>
                <ul>
                    <li>Klinische Untersuchung alle 3-12 Monate</li>
                    <li>Blutbild alle 3-12 Monate</li>
                    <li>Bei Progression: Re-Evaluation und Therapieindikation prüfen</li>
                </ul>
                <h3>Nachsorge unter Therapie</h3>
                <ul>
                    <li>Regelmäßige Blutbild- und Stoffwechselkontrollen</li>
                    <li>Überwachung auf Nebenwirkungen der Therapie</li>
                    <li><strong>BTK-Inhibitoren:</strong> Blutdruckkontrolle, Vorhofflimmern-Screening, Blutungsneigung</li>
                    <li><strong>Venetoclax:</strong> Tumorlyse-Syndrom-Prophylaxe, Nierenfunktion</li>
                    <li><strong>Obinutuzumab:</strong> Infusionsreaktionen, Infektionsmonitoring</li>
                </ul>
                <h3>Langzeitüberwachung</h3>
                <ul>
                    <li>Lebenslange Nachsorge empfohlen</li>
                    <li>Screening auf Zweitmalignome</li>
                    <li>Infektionsstatus überwachen</li>
                    <li>Impfstatus aktualisieren</li>
                </ul>
                <h3>Komplikationen im Verlauf</h3>
                <ul>
                    <li><strong>Infektionen:</strong> Häufigste Todesursache, Prophylaxe wichtig</li>
                    <li><strong>Autoimmunphänomene:</strong> AIHA, ITP - oft behandelbar mit Steroiden</li>
                    <li><strong>Richter-Transformation:</strong> Bei Symptomen PET-CT und Lymphknotenbiopsie</li>
                    <li><strong>Zweitmalignome:</strong> Erhöhtes Risiko, regelmäßiges Screening</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Chronische Lymphatische Leukämie (CLL), Kurzversion 2.0. AWMF-Registernummer: 018-032OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Version 2.0 – Dezember 2024.</p>"
    });
})();
