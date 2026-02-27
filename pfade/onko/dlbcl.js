(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "dlbcl",
        module: "onko",
        title: "DLBCL (Diffuses großzelliges B-Zell-Lymphom)",
        name: "Diffuses großzelliges B-Zell-Lymphom (DLBCL)",
        category: "onko",
        stand: "S3-LL 1.0 (10/2022)",
        sections: [
            {
                title: "Epidemiologie",
                html: `<ul>
                    <li>Häufigstes aggressives Non-Hodgkin-Lymphom (ca. 30-35% aller NHL)</li>
                    <li>Inzidenz: ca. 7/100.000 Einwohner*innen pro Jahr</li>
                    <li>Median bei Diagnose: ca. 65-70 Jahre</li>
                    <li>Männer : Frauen = 1,2 : 1</li>
                    <li>5-Jahres-Überleben: ca. 60-70% (bei baldigem Therapiebeginn)</li>
                    <li>Unbehandelt führt das DLBCL rasch zum Tode</li>
                </ul>`
            },
            {
                title: "Subtypen und Risikofaktoren",
                html: `<h3>Subtypen (WHO-Klassifikation 5th ed. 2022)</h3>
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
                            <tr>
                                <td><strong>High-grade B-Zell-Lymphom mit 11q Aberration</strong></td>
                                <td>Selten</td>
                                <td>Aggressives Verhalten</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Immunodefizienz:</strong> HIV, Post-Transplantation, angeborene Immundefekte.</li>
                    <li><strong>Autoimmunerkrankungen:</strong> Rheumatoide Arthritis, SLE.</li>
                    <li><strong>Viren:</strong> EBV (bei älteren Patienten, immundefizient).</li>
                    <li><strong>Vorbestehende Lymphome:</strong> Transformation aus indolenten NHL.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<h3>Biopsie und histopathologische Diagnose</h3>
                <ul>
                    <li>Bei guter Durchführbarkeit sollte eine Lymphknotenexzision oder offene Biopsie angestrebt werden.</li>
                    <li>Bei eingeschränkter Durchführbarkeit kann eine Ultraschall- oder CT-gesteuerte Stanzbiopsie erfolgen.</li>
                    <li>Ein zytologisches Aspirat soll für die Diagnosestellung NICHT verwendet werden.</li>
                    <li>Die histologische Diagnose sollte durch eine Pathologie erfolgen, die gemäß WHO-Klassifikation diagnostizieren kann.</li>
                </ul>
                <h3>Immunhistochemie und Molekulare Diagnostik</h3>
                <ul>
                    <li>Die histomorphologische Diagnose soll durch immunhistochemische Zusatzuntersuchungen abgesichert werden.</li>
                    <li>Zur Abgrenzung von High-grade B-Zell-Lymphom mit MYC/BCL2 und Burkitt-Lymphom sollten ergänzende zytogenetische Untersuchungen durchgeführt werden.</li>
                    <li>Eine molekulare Risikostratifizierung über die Routinediagnostik hinaus sollte mangels therapeutischer Konsequenzen NICHT durchgeführt werden.</li>
                </ul>
                <h3>Staging und prätherapeutische Maßnahmen</h3>
                <ul>
                    <li>Nach Vorliegen der histologischen Diagnose sollen diagnostische Maßnahmen zur Festlegung des Ausbreitungsstadiums, Erkennung von Risikofaktoren und Beurteilung wichtiger Organfunktionen durchgeführt werden.</li>
                    <li>Die Ausbreitungsdiagnostik, Risikobeurteilung und Organfunktionsdiagnostik sollte innerhalb von 2 Wochen abgeschlossen sein.</li>
                    <li>Bei nicht abgeschlossener Familienplanung sollten fertilitätserhaltende Maßnahmen angeboten werden.</li>
                    <li>Bei älteren Patient*innen sollte vor Therapiebeginn ein geriatrisches Assessment durchgeführt werden (Fit, Unfit, Frail).</li>
                </ul>
                <h3>Bildgebende Verfahren</h3>
                <ul>
                    <li>Bei kurativem Therapiekonzept soll eine PET/CT zur Festlegung des Ausbreitungsstadiums durchgeführt werden.</li>
                    <li>Bei Verzicht auf PET/CT soll das Staging durch Ganzkörper-MRT oder Kontrastmittel-CT erfolgen.</li>
                    <li>Eine Knochenmarkbiopsie ist in folgenden Situationen nicht erforderlich: Nachweis einer Knochenmarkbeteiligung durch PET/CT, fortgeschrittenes Stadium (Ann Arbor III/IV), limitiertes Stadium mit bulky disease und/oder ≥1 ungünstigem IPI-Faktor.</li>
                </ul>
                <h3>WHO-Performance-Status</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>Normale Aktivität, asymptomatisch</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Leichte Arbeit möglich, symptomatisch</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Selbstversorgung möglich, <50% der Tageszeit bettlägerig</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Begrenzte Selbstversorgung möglich, >50% der Tageszeit im Bett/Sessel</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Vollständig pflegebedürftig</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Lugano-Modifikation der Ann Arbor-Klassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Nodaler Befall</th>
                                <th>Extranodaler (E) Befall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Ein einzelner Lymphknoten oder eine Gruppe benachbarter Lymphknoten</td>
                                <td>Eine einzelne extranodale Läsion ohne Lymphknotenbeteiligung</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Zwei oder mehr Lymphknotengruppen auf der gleichen Seite des Zwerchfells</td>
                                <td>Stadium I oder II mit unmittelbar angrenzender extranodaler Beteiligung</td>
                            </tr>
                            <tr>
                                <td><strong>II bulky</strong></td>
                                <td>Längster Durchmesser >6-10 cm</td>
                                <td>Nicht anwendbar</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Lymphknoten auf beiden Seiten des Zwerchfells</td>
                                <td>Nicht anwendbar</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Zusätzliche, nicht unmittelbar an einen nodalen Befall angrenzende extralymphatische Beteiligung</td>
                                <td>Nicht anwendbar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Modifikation: Extranodaler Befall wird als Stadium I-II gewertet; Bulk definiert als ≥7,5 cm (deutsche Definition).</em></p>
                <h3>Prognostische Faktoren</h3>
                <ul>
                    <li>Zur Vorhersage des Krankheitsverlaufs soll der Internationale Prognostische Index (IPI) herangezogen werden.</li>
                    <li>Zusammen mit bulky disease soll der altersadjustierte IPI zur Therapiesteuerung verwendet werden.</li>
                    <li>Der ZNS-IPI sollte zur Abschätzung des Risikos eines ZNS-Rückfalls verwendet werden.</li>
                </ul>
                <h3>ZNS-IPI (Zentralnervöser Prognostischer Index)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Risikofaktoren</th>
                                <th>2-Jahres-ZNS-Rückfallrisiko</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Niedrig</td>
                                <td>0-1 Risikofaktoren (46% der Pat.)</td>
                                <td>0,6%</td>
                            </tr>
                            <tr>
                                <td>Intermediär</td>
                                <td>2-3 Risikofaktoren (42% der Pat.)</td>
                                <td>3,4%</td>
                            </tr>
                            <tr>
                                <td>Hoch</td>
                                <td>4-6 Risikofaktoren (12% der Pat.)</td>
                                <td>10,2%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Risikofaktoren: Alter >60 Jahre, LDH erhöht, Stadium III/IV, extranodaler Befall, IPI 2-5, Bulk >7,5 cm, Nieren-/Nebennierenbefall.</em></p>`
            },
            {
                title: "Erstlinientherapie",
                html: `<h3>Grundlagen der Erstlinientherapie</h3>
                <ul>
                    <li>Für alle Patient*innen mit Erstdiagnose eines DLBCL und ohne Einschränkung der Behandlungsfähigkeit wird eine R-CHOP basierte Immunchemotherapie in kurativer Intention eingeleitet.</li>
                    <li>Das Therapiekonzept soll von einem*einer in der Behandlung diffuser großzelliger B-Zell-Lymphome erfahrenen Arzt*Ärztin geplant werden.</li>
                    <li>Der Behandlungsplan sollte in einem interdisziplinär besetzten Tumor-Board diskutiert werden.</li>
                    <li>Vor Therapiebeginn sollte geprüft werden, ob die Behandlung in einer klinischen Studie erfolgen kann.</li>
                </ul>
                <h3>Therapie für junge Patient*innen (≤ 60 Jahre)</h3>
                <ul>
                    <li><strong>Sehr günstige Prognose (aaIPI=0 ohne Bulk):</strong> 4 Zyklen CHOP in Kombination mit 6 Gaben Rituximab.</li>
                    <li><strong>Standard-Risiko:</strong> R-CHOP (Rituximab, Cyclophosphamid, Doxorubicin, Vincristin, Prednison) oder R-CHOP-ähnliches Protokoll.</li>
                    <li><strong>Erhöhtes Risiko:</strong>
                    <ul>
                        <li>Bei aaIPI 1: R-ACVBP</li>
                        <li>Bei aaIPI 2-3: R-CHOEP</li>
                        <li>Bei IPI 2-5: R-CHP Polatuzumab</li>
                    </ul>
                    </li>
                    <li>Bei hohem ZNS-IPI und ohne Kontraindikationen kann eine ZNS-Prophylaxe mit systemischen, hochdosierten Methotrexat erwogen werden.</li>
                </ul>
                <h3>Therapie für Patient*innen (61-80 Jahre)</h3>
                <ul>
                    <li>Bei hoher Tumorlast kann eine Vorphasetherapie mit Prednison durchgeführt werden.</li>
                    <li>Standard: R-CHOP oder R-CHOP-ähnliches Schema.</li>
                    <li>Bei IPI 2-5 sollte R-CHP Polatuzumab angeboten werden.</li>
                </ul>
                <h3>Therapie für sehr alte Patient*innen (≥81 Jahre) oder mit Komorbiditäten</h3>
                <ul>
                    <li>Dosisreduzierte Therapie mit R-mini-CHOP oder Monotherapie in Verbindung mit Rituximab.</li>
                    <li>Bei manifester Herzinsuffizienz (NYHA III/IV) kann Etoposid anstatt von Doxorubicin verwendet werden (R-CEOP).</li>
                    <li>Bei Kontraindikationen gegen Anthrazykline kann liposomales Doxorubicin verwendet werden.</li>
                    <li>Bei vorbestehender Polyneuropathie kann Vincristin gegen Vinorelbine ersetzt werden.</li>
                </ul>
                <h3>Interim- und Abschluss-Staging</h3>
                <ul>
                    <li>Nach der Hälfte der geplanten Immunchemotherapiezyklen soll eine Remissionskontrolle mittels bildgebender Verfahren angeboten werden.</li>
                    <li>Nach Abschluss der geplanten Immunchemotherapiezyklen soll eine Remissionskontrolle mittels PET/CT durchgeführt werden.</li>
                    <li>Bei positivem PET-Befund in der Interim-PET/CT soll weder ein Therapieabbruch noch eine Therapieumstellung erfolgen.</li>
                    <li>Die Beurteilung des Therapieansprechens sollte in Anlehnung an die Lugano Klassifikation erfolgen.</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li>Patient*innen mit einem PET-positiven Restbefund sollen eine konsolidierende Bestrahlung erhalten.</li>
                    <li>Die Bestrahlung soll als Involved-site Radiotherapie durchgeführt werden.</li>
                    <li>Die Gesamtreferenzdosis sollte bei der Nachbestrahlung von Bulk- und Extranodalbefällen 30-40 Gy betragen.</li>
                    <li>Techniken: 3D-CRT, IMRT, VMAT oder Protonentherapie (in ausgewählten Fällen).</li>
                </ul>
                <h3>Erhaltungstherapie</h3>
                <ul>
                    <li>Nach Erreichen einer Remission nach Erstlinien-Therapie soll KEINE Erhaltungstherapie initiiert werden.</li>
                </ul>
                <h3>Konsolidierende Hochdosis-Chemotherapie</h3>
                <ul>
                    <li>Eine konsolidierende Hochdosistherapie soll nach Erreichen einer kompletten Remission nach Erstlinientherapie NICHT durchgeführt werden.</li>
                </ul>`
            },
            {
                title: "Besondere Subgruppen",
                html: `<h3>High-grade B-Zell-Lymphom mit MYC, BCL2 und/oder BCL6 (Double/Triple Hit)</h3>
                <ul>
                    <li>Restbefunde im PET/CT sollen analog DLBCL, NOS konsolidierend bestrahlt werden.</li>
                    <li>Die Therapie des DLBCL, NOS sollte NICHT von genetisch definierten Subgruppen abhängig gemacht werden.</li>
                    <li>Double Expressor DLBCL sollen analog DLBCL, NOS behandelt werden.</li>
                    <li>DLBCL mit alleiniger MYC Translokation sollen analog DLBCL, NOS behandelt werden.</li>
                    <li>DLBCL/High-grade B-Zell-Lymphome mit MYC Translokation und BCL2 und/oder BCL6 Translokation sollen analog DLBCL, NOS behandelt werden.</li>
                </ul>
                <h3>HIV-positive Patient*innen</h3>
                <ul>
                    <li>HIV-positive Patient*innen mit ausreichendem Immunstatus sollen analog DLBCL, NOS behandelt werden.</li>
                    <li>Bei reduzierter CD4-Helferzellzahl sollten Therapiezusammensetzung und -intensität individuell angepasst werden.</li>
                    <li>Eine kombinierte antiretrovirale Therapie soll simultan zur Immunchemotherapie fortgeführt bzw. initiiert werden.</li>
                </ul>
                <h3>Primär mediastinales B-Zell-Lymphom (PMBL)</h3>
                <ul>
                    <li>Die Lokalisation (Mediastinaltumor) soll dem*der Patholog*in übermittelt werden.</li>
                    <li>Grauzonenlymphome als Differentialdiagnose sollen besondere Berücksichtigung finden.</li>
                    <li>Patient*innen sollen mittels einer R-CHOP-basierten Immunchemotherapie behandelt werden.</li>
                    <li>Patient*innen ohne metabolische CR sollten bestrahlt werden.</li>
                    <li>Bei Rezidiv: platinhaltige Salvagetherapie + Rituximab und bei CR/PR: HDCT + ASCT.</li>
                    <li>Bei refraktärem Verlauf: Checkpoint-Inhibitoren mit oder ohne Brentuximab vedotin.</li>
                    <li>Nach zwei systemischen Vortherapien: anti-CD19 CAR T-Zelltherapie.</li>
                </ul>
                <h3>Extranodale Lymphome</h3>
                <h4>Primär testikuläres DLBCL</h4>
                <ul>
                    <li>Zum initialen Staging sollte eine Ultraschalluntersuchung beider Hoden erfolgen.</li>
                    <li>Der isolierte Befall beider Hoden soll als limitiertes (und nicht als fortgeschrittenes) Stadium gewertet werden.</li>
                    <li>Bei Nachweis sollte eine Orchiektomie des befallenen Hodens erfolgen.</li>
                    <li>Immunchemotherapie analog nodaler DLBCL.</li>
                    <li>Eine ZNS-gerichtete Prophylaxe kann angeboten werden.</li>
                    <li>Nach Abschluss der Systemtherapie sollte eine prophylaktische Bestrahlung des kontralateralen Hodens erfolgen.</li>
                </ul>
                <h4>Gastrointestinales DLBCL</h4>
                <ul>
                    <li>Zusätzlich zur Standarddiagnostik: ÖGD mit Biopsien, endoskopischer Ultraschall, Ileo-Kolo-Proktoskopie.</li>
                    <li>Die primäre Operation soll lediglich in Notfällen wie Perforation oder nicht beherrschbarer Blutung durchgeführt werden.</li>
                    <li>Systemtherapie analog DLBCL, NOS.</li>
                    <li>Bei lokalisiertem gastrointestinalem DLBCL mit indolenter Komponente: Bestrahlung der betroffenen Stelle.</li>
                    <li>Unabhängig vom Nachweis von Helicobacter pylori: Eradikationstherapie bei gastralen/duodenalen DLBCL in lokalisierten Stadien.</li>
                </ul>
                <h4>Primäres DLBCL des Knochens</h4>
                <ul>
                    <li>Immunchemotherapie analog nodaler DLBCL, NOS.</li>
                    <li>Bei ossärem Befall im Staging-PET/CT: End-of-Treatment-PET/CT; Restmanifestationen mit Deauville-Score 4-5 sollten bestrahlt werden.</li>
                </ul>
                <h4>Primäres DLBCL der Mamma</h4>
                <ul>
                    <li>Therapie analog nodalen DLBCL, NOS.</li>
                    <li>Behandlung gemäß Empfehlungen für hohes ZNS-Risiko.</li>
                </ul>
                <h4>DLBCL vom Bein-Typ (primär kutanes DLBCL, leg type)</h4>
                <ul>
                    <li>Isolierte oder gruppierte Herde: analog nodaler DLBCL, NOS.</li>
                    <li>Multiple Herde und generalisierte Erkrankung: R-CHOP analog DLBCL, NOS.</li>
                </ul>
                <h3>Konkomitanter ZNS-Befall</h3>
                <ul>
                    <li>Zusätzlich zum Staging: ZNS-gerichtete Diagnostik mittels Liquoruntersuchung und MRT.</li>
                    <li>Bei konkordanter peripherer Histologie kann eine zytologische Sicherung genügen.</li>
                    <li>Die anthrazyklinhaltige Systemtherapie soll um eine ZNS-gängige Therapie (z.B. Hochdosis-Methotrexate) ergänzt werden.</li>
                    <li>Nach Abschluss der Induktionschemotherapie sollte eine konsolidierende Therapie durchgeführt werden (vorzugsweise HDCT mit ASCT, alternativ Ganzhirnbestrahlung).</li>
                </ul>
                <h3>Lymphomatoide Granulomatose</h3>
                <ul>
                    <li>Bei histologischem Grad 3 sollte eine referenzpathologische Bestätigung angestrebt werden.</li>
                    <li>Patient*innen mit Grad 3 sollen analog DLBCL, NOS behandelt werden.</li>
                </ul>
                <h3>Intravaskuläres Lymphom</h3>
                <ul>
                    <li>Patient*innen sollen analog DLBCL, NOS behandelt werden.</li>
                    <li>Zusätzlich sollte eine ZNS-Prophylaxe durchgeführt werden.</li>
                </ul>
                <h3>Plasmoblastisches Lymphom (PBL)</h3>
                <ul>
                    <li>Patient*innen sollen mit einer CHOP-basierten Therapie behandelt werden.</li>
                </ul>
                <h3>Follikuläres Lymphom Grad 3B</h3>
                <ul>
                    <li>Patient*innen sollen analog DLBCL, NOS behandelt werden.</li>
                </ul>
                <h3>Transformiertes follikuläres Lymphom</h3>
                <ul>
                    <li>Bei Erstdiagnose des follikulären Lymphoms gleichzeitig mit DLBCL (primär transformiert oder sekundär simultan) sollen die Patient*innen analog DLBCL, NOS behandelt werden.</li>
                </ul>`
            },
            {
                title: "Rezidivtherapie",
                html: `<h3>Diagnostik des Rezidivs</h3>
                <ul>
                    <li>Bei Hinweisen auf ein Rezidiv soll eine Biopsie mit dem Ziel einer histologischen Sicherung erfolgen.</li>
                    <li>Als Ausgangsbefund vor Rezidivtherapie und zur Stadienbestimmung soll eine PET/CT durchgeführt werden.</li>
                    <li>Die Beurteilung des Therapieansprechens sollte in Anlehnung an die Lugano Klassifikation erfolgen.</li>
                    <li>Stable Disease und Progressive Disease als Ansprechen auf mindestens zwei Zyklen einer Immunchemotherapie sollen bei Beibehaltung eines kurativen Therapiekonzepts als Grundlage genommen werden, die Therapie umzustellen.</li>
                </ul>
                <h3>Zweitlinientherapie</h3>
                <ul>
                    <li>Vor Therapiebeginn sollte geprüft werden, ob eine Behandlung in einer klinischen Studie erfolgen kann.</li>
                    <li><strong>Hochdosis-fähige Patient*innen mit frühem Rezidiv:</strong> CAR T-Zelltherapie mit Axicabtagen Ciloleucel oder Lisocabtagen Maraleucel.</li>
                    <li><strong>Im Spätrezidiv:</strong> Intensive platinhaltige Induktionstherapie in Kombination mit Rituximab (z.B. R-GDP, R-DHAP, R-ICE).</li>
                    <li>Patient*innen mit mindestens partieller Remission nach 2-3 Zyklen Induktionstherapie sollen HDCT und ASCT erhalten.</li>
                </ul>
                <h3>Therapie für Patient*innen ohne Transplantationsoption</h3>
                <ul>
                    <li>Weniger intensives Immunchemotherapieprotokoll (z.B. R-GemOx).</li>
                    <li>Polatuzumab in Kombination mit Bendamustin und Rituximab.</li>
                    <li>Tafasitamab und Lenalidomid.</li>
                    <li>Bei bestrahlbarer Lokalisation: lokale Strahlentherapie.</li>
                    <li>Bei PET-positivem Restbefund nach systemischer Zweitlinientherapie: konsolidierende Bestrahlung.</li>
                </ul>
                <h3>Therapie des ≥ 2. Rezidivs</h3>
                <ul>
                    <li>Bei primär kurativer Therapieintention soll eine CAR T-Zelltherapie durchgeführt werden, falls diese nicht in der Zweitlinientherapie erfolgt ist.</li>
                    <li>Die Möglichkeit einer allogenen Stammzelltransplantation soll angeboten werden.</li>
                    <li>Die Möglichkeit einer weiteren konventionellen Immunchemotherapie zur Remissionsinduktion soll angeboten werden.</li>
                    <li>Bei Erreichen einer partiellen oder kompletten metabolischen Remission durch konventionelle Immunchemotherapie kann eine konsolidierende HDCT mit ASCT angeboten werden.</li>
                </ul>
                <h3>Palliative Therapieoptionen</h3>
                <ul>
                    <li>Polatuzumab in Kombination mit Bendamustin und Rituximab.</li>
                    <li>Tafasitamab und Lenalidomid.</li>
                    <li>Konventionelle Immunchemotherapie.</li>
                    <li>Zielgerichtete Substanzen.</li>
                    <li>Bestrahlung.</li>
                </ul>`
            },
            {
                title: "Rehabilitation und Nachsorge",
                html: `<h3>Rehabilitation</h3>
                <ul>
                    <li>Alle Patient*innen sollen während oder nach der Akutbehandlung über die Durchführung einer ambulanten oder stationären Rehabilitationsmaßnahme beraten werden.</li>
                    <li>Patient*innen sollen frühzeitig eine Beratung im Hinblick auf die sozialrechtlichen Folgen eines Reha-Antrages erhalten.</li>
                </ul>
                <h3>Nachsorge zur Erkennung von Rezidiven</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Zeitraum</th>
                                <th>Intervall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jahr 1-2</td>
                                <td>Alle 3 Monate</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li>Bei jeder Kontrolluntersuchung: ausführliche Anamnese, körperliche Untersuchung, Blutbild und LDH-Bestimmung.</li>
                    <li>Bei asymptomatischen Patient*innen in kompletter metabolischer Remission sollte auf eine routinemäßige Bildgebung mit CT oder PET/CT verzichtet werden.</li>
                    <li>Bei fehlender kompletter metabolischer Remission: weitere Abklärung (Biopsie, Bildgebung).</li>
                    <li>Bei Hinweisen auf Rezidiv: Biopsie zur histologischen Sicherung.</li>
                </ul>
                <h3>Nachsorge zur Erkennung therapiebedingter Schäden</h3>
                <ul>
                    <li>Patient*innen sollen zu einer gesunden Lebensweise angehalten werden.</li>
                    <li>Die Nachsorge soll zur Erkennung und ggf. Behandlung von Organtoxizitäten genutzt werden.</li>
                    <li>Die Notwendigkeit einer Verhütung bzw. Hormonersatztherapie sollte individuell evaluiert werden.</li>
                    <li>Überprüfung der Ovarfunktion (weibliche Patienten) bzw. Hodenfunktion (männliche Patienten).</li>
                    <li>Wahrnehmung des gesetzlichen Gesundheits-Check-Ups.</li>
                    <li>Reduktion kardiovaskulärer Risikofaktoren.</li>
                    <li>Überwachung im Hinblick auf Infektionen, Immundefekte und Autoimmunkrankheiten.</li>
                    <li>Nach zervikaler Bestrahlung: jährliche TSH-Bestimmung.</li>
                </ul>
                <h3>Sekundärneoplasien</h3>
                <ul>
                    <li>Die Nachsorge soll zur Erkennung und ggf. Behandlung von Sekundärneoplasien genutzt werden.</li>
                    <li>Raucher*innen soll geraten werden, den Zigarettenkonsum zu beenden.</li>
                    <li>Wahrnehmung der gesetzlichen Krebsfrüherkennungsuntersuchungen.</li>
                    <li>Nach thorakaler Bestrahlung ≥10 Gy vor Vollendung des 30. Lebensjahres: jährliches Mammakarzinom-Screening ab 8 Jahre nach Bestrahlung.</li>
                </ul>
                <h3>Spätfolgen</h3>
                <ul>
                    <li><strong>Kardiotoxizität:</strong> Nach Anthracyclinen – regelmäßige kardiologische Kontrollen.</li>
                    <li><strong>Periphere Neuropathie:</strong> Nach Vincristin.</li>
                    <li><strong>Sekundärmalignome:</strong> Erhöhtes Risiko – entsprechende Vorsorge.</li>
                    <li><strong>Infertilität und Hypogonadismus:</strong> Nach Systemtherapie und testikulärer Radiatio.</li>
                </ul>`
            },
            {
                title: "Supportivtherapie und Palliativmedizin",
                html: `<h3>Supportivtherapie</h3>
                <ul>
                    <li><strong>Impfstatus:</strong> Bei Erstdiagnose, vor geplanter Therapie und in der Nachsorge sollte der Impfstatus erhoben werden.</li>
                    <li><strong>Neurologisches Screening:</strong> Vor Einleitung einer potentiell neurotoxischen Tumortherapie zur Erhebung des Ausgangsbefundes.</li>
                    <li>Vor jedem Zyklus soll eine genaue Anamnese unter besonderer Berücksichtigung möglicher Neurotoxizitäten erfolgen.</li>
                    <li>Bei vorbestehender Polyneuropathie kann Vincristin gegen Vinorelbine ersetzt werden.</li>
                    <li>Für weitere supportve Maßnahmen wird auf die S3-Leitlinie Supportive Therapie verwiesen.</li>
                </ul>
                <h3>Psychoonkologie</h3>
                <ul>
                    <li>Alle Patient*innen sollen ein Screening auf psychosoziale Belastungen erhalten.</li>
                    <li>Ein psychoonkologisches Screening sollte frühestmöglich in angemessenen Abständen durchgeführt werden.</li>
                    <li>Zur Erfassung der psychosozialen Belastung sollten validierte Screeninginstrumente eingesetzt werden (z.B. Distress-Thermometer oder HADS-D).</li>
                    <li>Der individuelle psychosoziale Unterstützungswunsch soll erfragt werden.</li>
                </ul>
                <h3>Palliativmedizinische Versorgung</h3>
                <ul>
                    <li>Alle Patient*innen sollen unabhängig vom Krankheitsstadium Zugang zu Informationen über Palliativversorgung haben.</li>
                    <li>Alle Patient*innen sollten nach der Diagnose in nicht-kurativer Situation eine allgemeine Palliativversorgung durch die Primärbehandelnden erhalten.</li>
                    <li>Patient*innen mit einem primär oder im Rezidiv nicht-heilbaren DLBCL und einer hohen Komplexität ihrer Situation soll eine spezialisierte Palliativversorgung angeboten werden.</li>
                </ul>
                <h3>Ernährung</h3>
                <ul>
                    <li>Zur Erkennung und gegebenenfalls multimodalen Behandlung von Ernährungs- und Stoffwechselstörungen wird auf die AWMF Leitlinie "Klinische Ernährung in der Onkologie" verwiesen.</li>
                </ul>
                <h3>Entspannungs- und Achtsamkeitsverfahren</h3>
                <ul>
                    <li>Der fachkundige Einsatz von Entspannungs- und Achtsamkeitsverfahren kann erkrankungs- oder therapiebedingte Beschwerden mindern.</li>
                </ul>
                <h3>Bewegungstherapie und körperliches Training</h3>
                <ul>
                    <li>Gezielte Bewegungstherapie und körperliches Training unter medizinischer Therapie und in der Rehabilitation ist sicher und wirksam.</li>
                </ul>
                <h3>Komplementärmedizin</h3>
                <ul>
                    <li>Alle Patient*innen sollten frühestmöglich und im Verlauf wiederholt zum Interesse an Informationen zu komplementärmedizinischen Maßnahmen befragt werden.</li>
                    <li>Patient*innen sollten zur aktuellen und geplanten Anwendung von komplementären Maßnahmen befragt und auf mögliche Interaktionen mit der Krebstherapie hingewiesen werden.</li>
                </ul>
                <h3>Fertilitätserhalt</h3>
                <ul>
                    <li>Patientinnen im reproduktiven Alter sollen über alle verfügbaren fertilitätserhaltenden Maßnahmen aufgeklärt werden.</li>
                    <li>Bei Immuntherapien oder zielgerichteten Therapien sollte über das unklare Risiko einer Ovarialinsuffizienz aufgeklärt werden.</li>
                    <li>Bei Männern mit prätherapeutischer Azoospermie sollte über die Möglichkeit der testikulären Spermiengewinnung und -kryokonservierung aufgeklärt werden.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge für erwachsene Patient*innen mit einem diffusen großzelligen B-Zell-Lymphom und verwandten Entitäten. Kurzversion 1.0 – Oktober 2022. AWMF-Registernummer: 018/038OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
