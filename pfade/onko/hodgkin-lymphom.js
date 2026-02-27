(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hodgkin-lymphom",
        module: "onko",
        title: "Hodgkin-Lymphom",
        name: "Hodgkin-Lymphom",
        category: "onko-haem",
        stand: "04/21",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Inzidenz: ca. 2-3/100.000 pro Jahr</li>
                    <li>Bimodale Altersverteilung: Gipfel bei 20-30 und >60 Jahre</li>
                    <li>Männer : Frauen = 1,3 : 1</li>
                    <li>5-Jahres-Überleben: ca. 90% (frühe Stadien >95%)</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>EBV-Infektion:</strong> Assoziation mit ca. 30-40% der Fälle.</li>
                    <li><strong>Immunodefizienz:</strong> HIV, Post-Transplantation.</li>
                    <li><strong>Familiäre Häufung:</strong> Erhöhtes Risiko bei Verwandten.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>PET/CT</h3>
                <ul>
                    <li>Die PET/CT soll im Rahmen des initialen Stagings zur Stadienbestimmung durchgeführt werden.</li>
                    <li>Die initiale PET/CT sollte zur Bestrahlungsplanung verwendet werden.</li>
                    <li>Die PET/CT hat eine hohe Sensitivität und Spezifität in Bezug auf einen Knochenmarksbefall.</li>
                    <li>Bei keinem Hinweis auf einen Knochenmarkbefall in der PET/CT, soll auf eine Knochenmarkbiopsie verzichtet werden.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li>CT (mit Kontrastmittel) des Halses, Thorax und Abdomen als Standard-Bildgebung.</li>
                    <li>Bei schwerer Kontrastmittel-Unverträglichkeit/Allergie soll statt einer CT mit Kontrastmittel eine alternative Bildgebung (z.B. MRT) angestrebt werden.</li>
                    <li>Die kontrastmittel-verstärkte CT kann im Rahmen der Ganzkörper-PET/CT als eine Untersuchung durchgeführt werden.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li>Sonographie und MRT sollten bei Bedarf ergänzend eingesetzt werden.</li>
                    <li>Bei Verdacht auf Knochenmarkbefall kann die MRT zur weiteren Abklärung eingesetzt werden.</li>
                </ul>
                <h3>Sonographie</h3>
                <ul>
                    <li>Sonographie des Abdomens als Standard-Untersuchung.</li>
                    <li>Zur ergänzenden Abklärung bei Verdacht auf Organbefall.</li>
                </ul>
                <h3>Röntgen</h3>
                <ul>
                    <li>Röntgen-Thorax im initialen Staging.</li>
                    <li>Konventionelles Röntgen bei Verdacht auf ossäre Befälle der Extremitäten.</li>
                </ul>
                <h3>Weitere Bildgebung</h3>
                <ul>
                    <li>Klinisch verdächtige extranodale Befälle oder Organbefälle sollen mit den adäquaten Methoden (z.B. Sonographie, CT, MRT oder Biopsie, Röntgen) abgeklärt werden.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild</h3>
                <ul>
                    <li>Differentialblutbild ist Teil der initialen Labordiagnostik.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li>Blutsenkungsgeschwindigkeit (BSG) als wichtiger Prognosefaktor.</li>
                    <li>Hohe BSG (≥50mm/h ohne B-Symptome, ≥30mm/h mit B-Symptomen) als Risikofaktor.</li>
                </ul>
                <h3>Leberwerte</h3>
                <ul>
                    <li>Gamma-GT, GOT, GPT, Bilirubin.</li>
                </ul>
                <h3>Nierenfunktion</h3>
                <ul>
                    <li>Kreatinin, Harnstoff.</li>
                </ul>
                <h3>Tumormarker/Weitere Parameter</h3>
                <ul>
                    <li>Laktatdehydrogenase (LDH) als Prognosefaktor.</li>
                    <li>Alkalische Phosphatase (AP) - bei Erhöhung Hinweis auf Knochenbeteiligung.</li>
                    <li>Harnsäure.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Histologische Diagnostik</h3>
                <ul>
                    <li>Die histopathologische Diagnostik soll an der Biopsie eines Lymphknotens oder gegebenenfalls an der Biopsie eines anderen primär befallenen Organs gestellt werden.</li>
                    <li>Die histologische Diagnose soll nicht alleinig durch eine Feinnadelaspiration gestellt werden.</li>
                    <li>Bei der histologischen Diagnose eines klassischen Hodgkin Lymphoms soll eine Beurteilung durch einen Referenzpathologen angestrebt werden.</li>
                </ul>
                <h3>Histologische Subtypen (WHO)</h3>
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
                                <td><strong>Klassisches HL (cHL)</strong></td>
                                <td>Ca. 95%</td>
                                <td>CD30+, CD15+, CD20 variabel</td>
                            </tr>
                            <tr>
                                <td>- Nodulär sklerosierend</td>
                                <td>Ca. 65%</td>
                                <td>Häufigster Subtyp, Mediastinalbefall</td>
                            </tr>
                            <tr>
                                <td>- Gemischtzellig</td>
                                <td>Ca. 25%</td>
                                <td>Häufiger bei älteren Patienten</td>
                            </tr>
                            <tr>
                                <td>- Lymphozytenreich</td>
                                <td>Ca. 4%</td>
                                <td>Gute Prognose</td>
                            </tr>
                            <tr>
                                <td>- Lymphozytenarm</td>
                                <td>Ca. 1%</td>
                                <td>Seltene, schlechte Prognose</td>
                            </tr>
                            <tr>
                                <td><strong>Noduläres Lymphozyten-predominantes HL (NLPHL)</strong></td>
                                <td>Ca. 5%</td>
                                <td>CD20+, CD30-, CD15-, LP-Zellen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li>CD30, CD15 als typische Marker des klassischen HL.</li>
                    <li>CD20 beim nodulären lymphozyten-predominanten HL (NLPHL).</li>
                    <li>EBV-Asssoziation in ca. 30-40% der Fälle.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Allgemeines</h3>
                <ul>
                    <li>Die molekulare Diagnostik hat beim Hodgkin-Lymphom im Vergleich zu anderen Lymphomen einen geringeren Stellenwert.</li>
                    <li>Die klassische Histologie mit Immunphänotypisierung ist diagnostisch in der Regel ausreichend.</li>
                </ul>
                <h3>Mögliche molekulare Untersuchungen</h3>
                <ul>
                    <li>EBV-DNA-Nachweis bei Verdacht auf EBV-assoziiertes Hodgkin-Lymphom.</li>
                    <li>Bei refraktärem/rezidiviertem Krankheitsverlauf können molekulare Verfahren zur MRD-Bestimmung eingesetzt werden.</li>
                </ul>
                <h3>Keimbahnmutationen</h3>
                <ul>
                    <li>Eine genetische Testung ist bei familiärer Häufung oder jungem Erkrankungsalter erwägenswert.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Ann-Arbor-Staging (Cotswold-modifiziert)</h3>
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
                                <td>Befall einer Lymphknotenregion oder eines einzigen lokalisierten Befalls außerhalb des lymphatischen Systems</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Befall von ≥2 Lymphknotenregionen auf der gleichen Seite des Zwerchfells</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Befall von Lymphknotenregionen auf beiden Seiten des Zwerchfells</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Disseminierter Befall einer oder mehrerer extralymphatischer Organe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li><strong>A:</strong> Ohne B-Symptome</li>
                    <li><strong>B:</strong> Mit B-Symptomen (Fieber >38°C, Nachtschweiß, Gewichtsverlust)</li>
                    <li><strong>E:</strong> Befall eines einzigen extralymphatischen Organs</li>
                </ul>
                <h3>Risikofaktoren (GHSG)</h3>
                <ul>
                    <li>Großer Mediastinaltumor (≥ 1/3 des Thoraxdurchmessers)</li>
                    <li>Extranodalbefall</li>
                    <li>Hohe BSG (≥50mm/h ohne B-Symptome, ≥30mm/h mit B-Symptomen)</li>
                    <li>≥3 Lymphknotenareale befallen</li>
                </ul>
                <h3>Risikogruppen</h3>
                <ul>
                    <li><strong>Frühe Stadien:</strong> Stadium I-II ohne Risikofaktoren</li>
                    <li><strong>Intermediäre Stadien:</strong> Stadium I-II mit Risikofaktoren oder Stadium IIB mit hoher BSG/≥3 Arealen</li>
                    <li><strong>Fortgeschrittene Stadien:</strong> Stadium IIB mit E-Befall/großem Mediastinaltumor, Stadium III-IV</li>
                </ul>
                <h3>Typische Symptome</h3>
                <ul>
                    <li><strong>Schmerzlose Lymphknotenschwellungen:</strong> In ca. 70% der Fälle, zervikal (70%), axillär (30%), inguinal (10%).</li>
                    <li><strong>B-Symptomatik:</strong> Bei ca. 40% der Patienten:
                        <ul>
                            <li>Fieber > 38°C</li>
                            <li>Nachtschweiß</li>
                            <li>Gewichtsverlust > 10% in 6 Monaten</li>
                        </ul>
                    </li>
                    <li><strong>Unspezifische Symptome:</strong> Leistungsminderung, Pruritus, Alkoholschmerz.</li>
                    <li><strong>Bei ausgedehntem Befall:</strong> Dyspnoe, Vena-cava-superior-Syndrom, abdominelle Schwellung.</li>
                </ul>
                <h3>Anforderungen an die Diagnostik</h3>
                <ul>
                    <li>Die Ausbreitungsdiagnostik und Organfunktionsdiagnostik sollen innerhalb von 4 Wochen abgeschlossen sein.</li>
                    <li>Initialen Diagnostik-Untersuchungen: Anamnese, körperliche Untersuchung, Labor, Bildgebung (CT, Röntgen-Thorax, Sonografie, PET/CT).</li>
                    <li>Untersuchungen zur Toxizitätsbeurteilung (EKG, Echokardiogramm, Lungenfunktion, TSH, Gonadenfunktion) sollen vor Therapiebeginn durchgeführt werden.</li>
                    <li>Bei nicht abgeschlossener Familienplanung soll auf Möglichkeiten fertilitätserhaltender Maßnahmen hingewiesen werden.</li>
                </ul>`
            },
            {
                title: "Therapie früher Stadien",
                html: `<h3>Allgemeine Empfehlungen</h3>
                <ul>
                    <li>Allen Patienten soll eine Behandlung im Rahmen klinischer Studien angeboten werden.</li>
                </ul>
                <h3>Kombinierte Chemo-Strahlentherapie</h3>
                <ul>
                    <li>Die kombinierte Chemo-Strahlentherapie soll als Primärtherapie bei Patienten mit einem klassischen Hodgkin Lymphom im frühen Stadium durchgeführt werden.</li>
                    <li>Es soll keine alleinige Strahlentherapie durchgeführt werden.</li>
                </ul>
                <h3>Wahl der Chemotherapie und Zahl der Zyklen</h3>
                <ul>
                    <li>Die Chemotherapie soll mittels ABVD (Adriamycin/Doxorubicin, Bleomycin, Vinblastin und Dacarbazin) durchgeführt werden.</li>
                    <li>Die Therapie soll mittels zwei Zyklen ABVD durchgeführt werden.</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li>Eine Strahlentherapie nach Abschluss der Chemotherapie soll durchgeführt werden.</li>
                    <li>Das Zielvolumen soll einer "involved-site" (IS-) Strahlentherapie entsprechen.</li>
                    <li>Die Bestrahlung soll mit einer Verschreibungsdosis von 20 Gy durchgeführt werden.</li>
                </ul>
                <h3>PET/CT zur weiteren Therapieentscheidung</h3>
                <ul>
                    <li>Die PET/CT nach 2 Zyklen ABVD soll durchgeführt werden.</li>
                    <li>Im Falle einer positiven PET/CT nach 2 Zyklen ABVD sollte eine Therapieintensivierung in Form von zwei zusätzlichen Chemotherapiezyklen BEACOPPeskaliert erwogen werden.</li>
                    <li>Ein Verzicht auf die konsolidierende Strahlentherapie bei PET-Negativität nach zwei bis drei Zyklen ABVD kann nur individuell unter Abwägung des Rezidivrisikos und einer Strahlentherapie-assoziierten Sekundärneoplasie diskutiert werden.</li>
                </ul>
                <h3>Strahlentherapie-Techniken</h3>
                <ul>
                    <li>Patienten mit einer Indikation zur Strahlentherapie können mittels intensitätsmodulierter Strahlentherapie (IMRT) bestrahlt werden.</li>
                    <li>Zur besseren Schonung von Risikoorganen (vor allem dem Herzen) bei der Bestrahlung mediastinaler Lymphome sollte der zusätzliche Nutzen der tiefen Inspiration (DIBH) geprüft werden.</li>
                    <li>Die Verwendung von Protonenbestrahlung kann bei ausgewählten Patienten mit strenger Indikation erwogen werden.</li>
                </ul>`
            },
            {
                title: "Therapie des intermediären Stadiums",
                html: `<h3>Allgemeine Empfehlungen</h3>
                <ul>
                    <li>Allen Patienten soll eine Behandlung im Rahmen klinischer Studien angeboten werden.</li>
                    <li>Patienten mit Erstdiagnose eines klassischen Hodgkin Lymphoms in intermediären Stadien werden mit 4 Zyklen Polychemotherapie und abhängig vom Ansprechen mit einer anschließenden lokalisierten Strahlentherapie behandelt.</li>
                </ul>
                <h3>Zahl und Art der Chemotherapie-Zyklen</h3>
                <ul>
                    <li>Patienten mit Erstdiagnose eines klassischen Hodgkin Lymphoms im intermediären Stadium sollen mit insgesamt 4 Zyklen Polychemotherapie behandelt werden.</li>
                    <li>Patienten ≤60 Jahre sollen mit einer Chemotherapie bestehend aus 2 Zyklen BEACOPPeskaliert gefolgt von 2 Zyklen ABVD ("2+2") behandelt werden.</li>
                    <li>Bei Kontraindikation oder Ablehnung von BEACOPPeskaliert sollte eine Chemotherapie bestehend aus 4 Zyklen ABVD als nächstbeste Option gewählt werden.</li>
                </ul>
                <h3>Ergänzende Strahlentherapie</h3>
                <ul>
                    <li>Nach einer Chemotherapie mit "2+2" soll eine PET/CT zur Entscheidung über eine konsolidierende RT durchgeführt werden.</li>
                    <li>Bei PET-negativer kompletter Remission (Deauville-Score ≤3) nach "2+2" sollte keine konsolidierende RT durchgeführt werden.</li>
                    <li>Bei PET-positiver Remission (Deauville-Score ≥4) soll eine konsolidierende RT durchgeführt werden.</li>
                    <li>Nach einer Chemotherapie mit 4 Zyklen ABVD soll eine konsolidierende RT mit einer Dosis von 30 Gy unabhängig vom PET-Status durchgeführt werden.</li>
                    <li>Eine konsolidierende Bestrahlung soll bevorzugt in "involved-site" (IS-) gegenüber "involved-field" (IF-) Technik durchgeführt werden.</li>
                </ul>`
            },
            {
                title: "Therapie des fortgeschrittenen Stadiums",
                html: `<h3>Allgemeine Empfehlungen</h3>
                <ul>
                    <li>Allen Patienten soll eine Behandlung im Rahmen klinischer Studien angeboten werden.</li>
                    <li>Die Behandlung des fortgeschrittenen klassischen Hodgkin Lymphoms besteht im Allgemeinen in einer Polychemotherapie mit gegebenenfalls anschließender Strahlentherapie.</li>
                </ul>
                <h3>Wahl der Chemotherapie und Zahl der Zyklen</h3>
                <ul>
                    <li>Erwachsene Patienten bis zu 60 Jahren mit fortgeschrittenem klassischen HL sollen mit BrECADD behandelt werden.</li>
                    <li>Mit Hilfe der PET/CT während einer laufenden Chemotherapie (Interim-PET/CT) soll das individuelle Ansprechen auf die Therapie frühzeitig erfasst werden.</li>
                    <li>PET/CT-negative Patienten sollen 2 weitere Zyklen BrECADD erhalten.</li>
                    <li>PET/CT-positive Patienten sollen 4 weitere Zyklen erhalten.</li>
                </ul>
                <h3>Vergleich mit ABVD-basierten Schemata</h3>
                <ul>
                    <li>BEACOPPeskaliert bietet einen wesentlichen Überlebensvorteil gegenüber ABVD.</li>
                    <li>Brentuximab Vedotin + AVD (BV-AVD) zeigte überlegene Wirksamkeit gegenüber ABVD.</li>
                    <li>Nivolumab + AVD (N-AVD) zeigte in der S1826-Studie einen PFS-Vorteil gegenüber BV-AVD.</li>
                </ul>
                <h3>PET/CT nach Chemotherapieabschluss</h3>
                <ul>
                    <li>Mit Hilfe der PET/CT nach Therapie soll das individuelle Ansprechen auf die Chemotherapie beurteilt werden.</li>
                    <li>Nach Chemotherapie mit BEACOPPeskaliert soll die Entscheidung über eine konsolidierende Strahlentherapie PET/CT-basiert erfolgen.</li>
                </ul>
                <h3>Rolle der Strahlentherapie</h3>
                <ul>
                    <li>Patienten, die auf die Chemotherapie angesprochen haben, aber PET/CT-positives Restgewebe zeigen, sollen eine lokale Strahlentherapie erhalten.</li>
                    <li>Patienten in fortgeschrittenen Stadien mit einer Indikation für eine additive Strahlentherapie sollen mit einer Dosis von 30 Gy bestrahlt werden.</li>
                </ul>`
            },
            {
                title: "Therapie von Subgruppen",
                html: `<h3>Therapieempfehlungen bei älteren Patienten</h3>
                <ul>
                    <li>Bei älteren HL-Patienten sowie solchen mit Komorbiditäten, einem HIV-assoziierten HL oder einem NLPHL sollte wann immer möglich der Einschluss in eine klinische Studie angestrebt werden.</li>
                </ul>
                <h4>Frühes Stadium (>60 Jahre)</h4>
                <ul>
                    <li>2 Zyklen ABVD gefolgt von einer 20 Gy involved-site Strahlentherapie.</li>
                </ul>
                <h4>Intermediäres Stadium (>60 Jahre)</h4>
                <ul>
                    <li>2 Zyklen ABVD gefolgt von 2 Zyklen AVD und einer 30 Gy involved-site Strahlentherapie.</li>
                    <li>BEACOPP sollte bei diesem Patientenkollektiv nicht eingesetzt werden.</li>
                    <li>Alternativ: PVAG-Schema oder Einzelsubstanzen wie Gemcitabine.</li>
                </ul>
                <h4>Fortgeschrittenes Stadium (>60 Jahre)</h4>
                <ul>
                    <li>2 Zyklen ABVD gefolgt von 4 Zyklen AVD und einer lokalisierten Strahlentherapie PET-positiver Lymphomreste ad 30 Gy.</li>
                    <li>Alternativ: 6 Zyklen BV-AVD oder 6-8 Zyklen PVAG.</li>
                    <li>BEACOPP sollte bei diesem Patientenkollektiv nicht eingesetzt werden.</li>
                </ul>
                <h4>Rezidivtherapie älterer Patienten</h4>
                <ul>
                    <li>Eine Hochdosischemotherapie mit nachfolgender autologer Stammzelltransplantation kann bei fitten älteren Patienten erwogen werden.</li>
                    <li>Bei nicht transplantierbaren Patienten: palliative Therapie mit konventionellen Chemotherapeutika oder Pembrolizumab.</li>
                    <li>Eine Therapie mit Pembrolizumab sollte nach zwei vorherigen Therapieleitlinien empfohlen werden.</li>
                </ul>
                <h3>Geschlechtsspezifische Therapieempfehlungen</h3>
                <ul>
                    <li>Es gibt keine Indikation zur geschlechterspezifischen Therapie beim erwachsenen HL-Patienten.</li>
                </ul>
                <h3>HIV-assoziiertes Hodgkin-Lymphom</h3>
                <ul>
                    <li>Frühes Stadium: 2 Zyklen ABVD gefolgt von 20 Gy involved-site Strahlentherapie.</li>
                    <li>Intermediäres Stadium: 4 Zyklen BEACOPP-basis oder 4 Zyklen ABVD, jeweils gefolgt von einer involved-site Strahlentherapie ad 30 Gy.</li>
                    <li>Fortgeschrittenes Stadium: 6 Zyklen BEACOPPbasis oder 6-8 Zyklen ABVD, jeweils gefolgt von einer lokalisierten Strahlentherapie.</li>
                    <li>Bei Rezidiv: Hochdosischemotherapie mit autologer Stammzelltransplantation.</li>
                </ul>
                <h3>Therapieempfehlungen bei NLPHL</h3>
                <ul>
                    <li>Patienten mit einem NLPHL im Stadium IA ohne Risikofaktoren sollen ausschließlich strahlentherapeutisch behandelt werden.</li>
                    <li>Die involved-site Strahlentherapie (30 Gy) soll eingesetzt werden.</li>
                    <li>Patienten mit NLPHL in frühen und mittleren Stadien (außer Stadium IA ohne Risikofaktoren) sollen wie Patienten mit einem klassischen Hodgkin Lymphom behandelt werden.</li>
                    <li>Patienten mit NLPHL in fortgeschrittenem Stadium sollen mit 4-6x PET-adaptiert eBEACOPP behandelt werden.</li>
                    <li>Alternativ: Rituximab-haltige Chemotherapie (z.B. R-CHOP).</li>
                    <li>Bei Verdacht auf Rezidiv soll eine erneute Diagnosesicherung mittels Lymphknotenbiopsie erfolgen.</li>
                </ul>
                <h3>Therapie bei Schwangerschaft</h3>
                <ul>
                    <li>Während der gesamten Schwangerschaft soll eine enge Kooperation der interdisziplinären Fachexperten erfolgen.</li>
                    <li>Bei Erstdiagnose im ersten Trimenon sollte der Beginn der Chemotherapie bis zum Beginn des 2. Trimenons verzögert werden.</li>
                    <li>Patientinnen im zweiten oder dritten Trimenon können prinzipiell eine Chemotherapie erhalten.</li>
                    <li>In der Schwangerschaft sollte auf Strahlentherapie verzichtet werden.</li>
                    <li>Die konsolidierende Bestrahlung kann nach der Entbindung erfolgen.</li>
                    <li>Das ABVD-Schema ist während der Schwangerschaft am häufigsten eingesetzt und gilt als sicher.</li>
                </ul>`
            },
            {
                title: "Rezidivtherapie",
                html: `<h3>PET/CT im Rezidiv</h3>
                <ul>
                    <li>Zur Diagnose und Stadienbestimmung eines rezidivierten oder refraktären Hodgkin Lymphoms soll eine diagnostische CT mit Kontrastmittel und eine PET/CT durchgeführt werden.</li>
                    <li>Wenn ein rezidiviertes oder refraktäres Hodgkin Lymphom festgestellt wird, soll eine histologische Sicherung angestrebt werden.</li>
                </ul>
                <h3>PET/CT vor Hochdosischemotherapie mit autologer Transplantation</h3>
                <ul>
                    <li>Bei Patienten mit rezidiviertem oder refraktärem Hodgkin Lymphom soll nach der Salvage-Therapie vor der autologen Transplantation eine PET/CT zur Einschätzung der Prognose durchgeführt werden.</li>
                    <li>Eine positive PET/CT vor der geplanten autologen Transplantation soll weder zu einem Abbruch der Transplantationsstrategie führen noch Grundlage für einen Wechsel auf eine allogene Transplantation sein.</li>
                </ul>
                <h3>Transplantation</h3>
                <h4>Patientenauswahl</h4>
                <ul>
                    <li>Patienten bis 60 Jahre ohne schwere Begleiterkrankungen sollen bei Rezidiv oder Progress eines Hodgkin Lymphoms eine Hochdosischemotherapie mit autologer Stammzelltransplantation erhalten.</li>
                    <li>Patienten über 60 Jahre in gutem körperlichem Zustand können ebenfalls eine autologe Transplantation erhalten.</li>
                </ul>
                <h4>Reinduktionschemotherapie (Salvage-Therapie)</h4>
                <ul>
                    <li>Patienten sollen vor der Hochdosistherapie eine Reinduktionschemotherapie (Salvage-Therapie) erhalten.</li>
                    <li>Als Salvage-Therapie sollten zwei Zyklen zeitintensiviertes DHAP gegeben werden.</li>
                    <li>Alternativ: IGEV, GDP, oder Antikörper-Chemotherapie-Kombinationen (Pembrolizumab-GVD, Brentuximab vedotin-ICE, etc.).</li>
                </ul>
                <h4>Hochdosischemotherapie</h4>
                <ul>
                    <li>Patienten sollen mit dem BEAM-Schema (BCNU, Etoposid, Ara-C, Melphalan) behandelt werden.</li>
                    <li>Hochrisiko-Patienten können mit einer Doppeltransplantation behandelt werden.</li>
                </ul>
                <h4>Konsolidierungstherapie nach Transplantation</h4>
                <ul>
                    <li>Patienten mit Hochrisiko-Rezidiv sollten eine Konsolidierungstherapie (Doppelhochdosis und/oder Brentuximab vedotin) erhalten.</li>
                    <li>Patienten mit mindestens 2 Risikofaktoren sollen eine Konsolidierungstherapie mit Brentuximab vedotin erhalten.</li>
                </ul>
                <h3>Alternativtherapie zur Transplantation</h3>
                <ul>
                    <li>Ausgewählte Patienten mit lokalisiertem Spätrezidiv ohne B-Symptome können alternativ zur autologen Transplantation mit Bestrahlung behandelt werden.</li>
                    <li>Patienten mit Spätrezidiv nach Therapie eines HL im frühen Stadium können alternativ mit konventioneller Chemotherapie behandelt werden.</li>
                    <li>Patienten, die nicht für eine Transplantation in Frage kommen, sollen eine Therapie mit Pembrolizumab erhalten.</li>
                    <li>Patienten mit Rezidiv nach Checkpoint-Inhibitor-Therapie sollten mit Brentuximab Vedotin, Chemotherapie oder Bestrahlung behandelt werden.</li>
                </ul>
                <h3>Rezidiv nach Transplantation</h3>
                <ul>
                    <li>Patienten mit Rezidiv nach Hochdosischemotherapie und autologer Stammzelltransplantation sollten mit Pembrolizumab behandelt werden.</li>
                    <li>Patienten nach Brentuximab vedotin sollten mit einem anti-PD1-Antikörper behandelt werden.</li>
                </ul>
                <h3>Allogene Transplantation</h3>
                <ul>
                    <li>Patienten mit rezidiviertem oder refraktärem HL, bei denen eine allogene Transplantation geplant ist, sollen nicht mit einer myeloablativen Konditionierung behandelt werden.</li>
                    <li>Patienten mit rezidiviertem HL können mit einer dosisreduzierten Konditionierung gefolgt von einer allogenen Stammzelltransplantation behandelt werden.</li>
                    <li>Bei fehlendem HLA-gematchtem Spender können auch nicht verwandte Spender oder haploidentische Spender verwendet werden.</li>
                </ul>`
            },
            {
                title: "Verhalten vor, während und nach der Erkrankung",
                html: `<h3>Ernährung</h3>
                <ul>
                    <li>Es werden keine speziellen Ernährungsempfehlungen für HL-Patienten gegeben.</li>
                    <li>Eine ausgewogene Ernährung wird empfohlen.</li>
                </ul>
                <h3>Alternative Heilmethoden</h3>
                <ul>
                    <li>Keine Empfehlung für alternative Heilmethoden als Therapieersatz.</li>
                </ul>
                <h3>Sport</h3>
                <ul>
                    <li>Körperliche Aktivität wird während und nach der Therapie empfohlen.</li>
                    <li>Die Intensität sollte an den individuellen Zustand angepasst werden.</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <h4>Infektionsprophylaxe</h4>
                <ul>
                    <li>Eine Infektionsprophylaxe kann bei immunsupprimierten Patienten erwogen werden.</li>
                    <li>Impfungen (Influenza, Pneumokokken) werden empfohlen.</li>
                </ul>
                <h4>Wachstumsfaktoren</h4>
                <ul>
                    <li>Wachstumsfaktoren (G-CSF) können bei febriler Neutropenie oder zur Primärprophylaxe eingesetzt werden.</li>
                </ul>
                <h4>Antiemese</h4>
                <ul>
                    <li>Eine leitliniengerechte Antiemese wird empfohlen.</li>
                </ul>
                <h4>Blutprodukte</h4>
                <ul>
                    <li>Transfusionen nach etablierten Indikationen.</li>
                </ul>
                <h4>Polyneuropathie</h4>
                <ul>
                    <li>Monitoring und ggf. Dosisanpassung bei Vinca-Alkaloiden.</li>
                </ul>
                <h4>Mukositis</h4>
                <ul>
                    <li>Prophylaxe und Behandlung nach Standardempfehlungen.</li>
                </ul>
                <h4>Vitamin D</h4>
                <ul>
                    <li>Eine Bestimmung und ggf. Substitution von Vitamin D wird empfohlen.</li>
                </ul>
                <h3>Verhütungsmaßnahmen während/nach der Therapie</h3>
                <ul>
                    <li>Während der Chemotherapie und für einen Zeitraum danach sollten Verhütungsmaßnahmen angewendet werden.</li>
                    <li>Eine Schwangerschaft sollte während der Therapie vermieden werden.</li>
                </ul>
                <h3>Fertilitätsprotektive Maßnahmen</h3>
                <ul>
                    <li>Bei nicht abgeschlossener Familienplanung soll vor Therapiebeginn auf Möglichkeiten der fertilitätserhaltenden Maßnahmen hingewiesen werden.</li>
                    <li>Männer: Kryokonservierung von Spermien.</li>
                    <li>Frauen: Oozytenkryokonservierung, Gonadenschutz mit GnRH-Analoga (kontrovers).</li>
                </ul>
                <h3>Arzt-Pflege-Patienten-Kommunikation</h3>
                <ul>
                    <li>Eine strukturierte Kommunikation wird empfohlen.</li>
                    <li>Patienten sollen umfassend über ihre Erkrankung und Therapie informiert werden.</li>
                </ul>
                <h3>Anschlussrehabilitation</h3>
                <ul>
                    <li>Eine Anschlussrehabilitation wird empfohlen.</li>
                    <li>Diese sollte physikalische, psychische und soziale Aspekte umfassen.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge zur Rezidivfrüherkennung</h3>
                <ul>
                    <li>Regelmäßige Nachsorge zur frühzeitigen Erkennung eines Rezidivs wird empfohlen.</li>
                    <li>Die Nachsorge umfasst: Anamnese, körperliche Untersuchung, Labor (BSG, Blutbild, LDH).</li>
                    <li>Bildgebung (CT/PET-CT) nur bei klinischem Verdacht auf Rezidiv.</li>
                    <li>Die Nachsorgeintensität nimmt mit zunehmendem zeitlichen Abstand zur Therapie ab.</li>
                </ul>
                <h3>Früherkennung für Sekundärneoplasien</h3>
                <ul>
                    <li>Patienten nach HL-Therapie haben ein erhöhtes Risiko für Sekundärneoplasien.</li>
                    <li>Besonders erhöhtes Risiko für: Mamma-Karzinom, Lungenkarzinom, Schilddrüsenkarzinom, AML/MDS.</li>
                    <li>Das Risiko ist abhängig von Therapieart und Alter bei Therapie.</li>
                </ul>
                <h4>Screening-Empfehlungen</h4>
                <ul>
                    <li><strong>Mamma-Karzinom:</strong> Jährliche Mammographie/MRT ab 8 Jahre nach Strahlentherapie (bei Therapie vor dem 30. Lebensjahr).</li>
                    <li><strong>Lungenkarzinom:</strong> Niedrigdosis-CT bei Rauchern (Kontroverse).</li>
                    <li><strong>Schilddrüsenkarzinom:</strong> Jährliche Sonographie bei Bestrahlung im Halsbereich.</li>
                    <li><strong>Darmkrebs:</strong> Koloskopie bei Bestrahlung des Abdomens.</li>
                </ul>
                <h3>Früherkennung für Organtoxizitäten</h3>
                <h4>Kardiotoxizitäten</h4>
                <ul>
                    <li>Risiko durch Anthrazykline (Doxorubicin) und mediastinale Bestrahlung.</li>
                    <li>Baseline-Echokardiographie vor Therapie.</li>
                    <li>Regelmäßige kardiologische Nachsorge bei Risikopatienten.</li>
                    <li>Langzeit-Echokardiographie alle 1-5 Jahre je nach Risiko.</li>
                </ul>
                <h4>Schilddrüse</h4>
                <ul>
                    <li>Risiko nach Bestrahlung im Halsbereich.</li>
                    <li>Jährliche TSH-Bestimmung.</li>
                    <li>Bei auffälligen Werten: Schilddrüsensonographie und ggf. Therapie.</li>
                </ul>
                <h4>Pulmonale Toxizität</h4>
                <ul>
                    <li>Risiko durch Bleomycin und Lungenbestrahlung.</li>
                    <li>Lungenfunktionstests bei Symptomen oder Risikopatienten.</li>
                </ul>
                <h4>Gonadale Toxizität</h4>
                <ul>
                    <li>Risiko durch Chemotherapie (insbesondere Alkylanzien, BEACOPP).</li>
                    <li>FSH, LH, Testosteron/Estradiol, ggf. AMH-Bestimmung.</li>
                    <li>Bei Kinderwunsch: Reproduktionsmedizinische Beratung.</li>
                </ul>
                <h4>Fatigue</h4>
                <ul>
                    <li>Fatigue ist ein häufiges Spätproblem nach HL-Therapie.</li>
                    <li>Multimodale Ansätze (Sport, psychologische Unterstützung) können helfen.</li>
                </ul>
                <h3>Lebenslange Nachsorge</h3>
                <ul>
                    <li>Eine lebenslange Nachsorge wird empfohlen.</li>
                    <li>Die Nachsorge sollte in spezialisierten Zentren oder in enger Abstimmung mit diesen erfolgen.</li>
                    <li>Ein Nachsorge-Pass kann hilfreich sein.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Hodgkin-Lymphom. AWMF-Registernummer: 018-029OL. Version 4.01. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Stand: November 2025.</p>"
    });
})();
