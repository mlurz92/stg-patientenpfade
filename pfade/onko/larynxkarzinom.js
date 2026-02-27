(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "larynxkarzinom",
        module: "onko",
        title: "Larynxkarzinom",
        name: "Larynxkarzinom",
        category: "onko-hno",
        stand: "11/19",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Das Larynxkarzinom ist nach dem Mundhöhlen- und Rachenkarzinom der <strong>dritthäufigste bösartige Tumor</strong> im Kopf-Halsbereich.</li>
                    <li>Die altersstandardisierte Inzidenzrate lag in Deutschland im Jahr 2012 bei <strong>5,4 pro 100.000 bei Männern</strong> und bei <strong>1,0 pro 100.000 bei Frauen</strong>.</li>
                    <li>Es erkranken pro Jahr etwa <strong>3.100 Männer und 490 Frauen</strong> neu an einem Larynxkarzinom.</li>
                    <li>Das durchschnittliche Erkrankungsalter liegt bei Frauen bei 64 Jahren und bei Männern bei 66 Jahren.</li>
                    <li>Seit 2000 nimmt die Erkrankungsrate beim Larynxkarzinom bei jüngeren Männern deutlich ab. Die Inzidenzrate bei Frauen ist konstant geblieben.</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Tabakkonsum</strong> ist ein wesentlicher Risikofaktor für die Entwicklung des Larynxkarzinoms.</li>
                    <li><strong>Alkoholkonsum</strong> ist ein wesentlicher Risikofaktor für die Entwicklung des Larynxkarzinoms.</li>
                    <li>Bei <strong>Asbestexposition</strong>, intensiver und mehrjähriger Exposition gegenüber schwefelsäurehaltigen Aerosolen und bei ionisierenden Strahlen (z.B. durch Uran) ist das Larynxkarzinom als <strong>Berufskrankheit</strong> anerkannt.</li>
                    <li>Die Adressaten dieser Leitlinie sollten ihre Patienten darauf hinweisen, den Tabakkonsum aufzugeben und den Alkoholkonsum weitgehend zu reduzieren.</li>
                </ul>
                <h3>Vorläuferläsionen</h3>
                <ul>
                    <li>Bei klinischem Verdacht auf eine mögliche <strong>Vorläuferläsion</strong> eines Larynxkarzinoms (z.B. Leukoplakie, Erythroplakie, papillomatöse Schleimhautveränderungen) soll eine <strong>histologische Abklärung</strong> erfolgen, bevorzugt als Exzisionsbiopsie.</li>
                    <li>Bei mittelschwerer oder schwerer Dysplasie/squamöser intraepithelialer Neoplasie sollten regelmäßige Kontrollen erfolgen.</li>
                </ul>
                <h3>Anatomische Regionen</h3>
                <ul>
                    <li><strong>Glottis</strong>: Häufigste Lokalisation, beste Prognose</li>
                    <li><strong>Supraglottis</strong>: Zweithäufigste, frühzeitige Lymphknotenmetastasen</li>
                    <li><strong>Subglottis</strong>: Seltenste Lokalisation, schlechteste Prognose</li>
                </ul>
                <h3>Prognosefaktoren</h3>
                <ul>
                    <li>Die Prognose des Larynxkarzinoms hängt im Wesentlichen von der <strong>Lokalisation, TNM-Klassifikation und vom R-Status</strong> ab.</li>
                    <li>Ferner sind die <strong>Differenzierung</strong> und das Vorhandensein einer <strong>Lymphgefäßinvasion</strong> prognoserelevant.</li>
                    <li>Glottische Karzinome haben die beste, subglottische Karzinome die schlechteste Prognose.</li>
                    <li>Im Gegensatz zum Oropharynxkarzinom spielt beim Larynxkarzinom der <strong>HPV-Status</strong> als prognostischer Faktor <strong>keine Rolle</strong>.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Klinische Symptome</h3>
                <ul>
                    <li>Bei allen Patienten mit <strong>Heiserkeit über mehr als 4 Wochen</strong> soll der Kehlkopf endoskopisch untersucht werden.</li>
                    <li>Die Symptome des Larynxkarzinoms sind abhängig von der Lokalisation des Tumors und gehen nicht immer mit einer Stimmveränderung einher.</li>
                    <li>Bei über mehrere Wochen anhaltenden oder gar zunehmenden <strong>Schluckstörungen</strong> soll eine endoskopische Kehlkopfuntersuchung erfolgen.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <p>Bei folgenden Patienten mit Larynxkarzinom soll eine Bildgebung durchgeführt werden:</p>
                <ul>
                    <li>Karzinome der Stimmlippen mit Bewegungseinschränkung oder Fixation</li>
                    <li>Karzinome der vorderen Kommissur mit Ausdehnung nach supra- und/oder subglottisch</li>
                    <li>Karzinome der Supraglottis außer bei Lokalisation am freien Rand der Epiglottis</li>
                    <li>Karzinome mit subglottischer Ausdehnung</li>
                </ul>
                <p>Zur Festlegung der lokalen Ausdehnung sollen eine <strong>kontrastverstärkte CT</strong> durchgeführt werden.</p>
                <p>Zur Feststellung der N-Kategorie soll gleichzeitig die gesamte Region von der Schädelbasis bis zur oberen Thoraxapertur mit der CT untersucht werden.</p>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <p>Alternativ oder ergänzend zur CT kann eine <strong>MRT</strong> durchgeführt werden:</p>
                <ul>
                    <li>Bei Kontraindikationen gegen jodhaltiges Kontrastmittel</li>
                    <li>Bessere Weichteildarstellung für bestimmte Fragestellungen</li>
                </ul>
                <h3>Endoskopische Diagnostik</h3>
                <ul>
                    <li><strong>Panendoskopie:</strong> Soll bei Patienten mit Larynxkarzinom durchgeführt werden zum Ausschluss von Zweittumoren.</li>
                    <li><strong>Laryngoskopie:</strong> Direkte oder indirekte Kehlkopfuntersuchung zur Beurteilung des Tumors.</li>
                    <li><strong>Videolaryngostroboskopie:</strong> Zur Beurteilung der Stimmbandbeweglichkeit.</li>
                </ul>
                <h3>Halssonographie</h3>
                <ul>
                    <li>Die Sonographie des Halses dient zur Beurteilung der Lymphknotenstatus.</li>
                    <li>Standard in der Nachsorge.</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li>Die FDG-PET/CT hat keinen routinemäßigen Stellenwert in der Primärdiagnostik des Larynxkarzinoms.</li>
                    <li>Kann bei Verdacht auf Fernmetastasen oder bei unklarem Befund eingesetzt werden.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Standard-Laborparameter</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Differenzierung von Anämie, Leukozytose, Thrombopenie.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP, BSG:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li>Es existieren <strong>keine etablierten Tumormarker</strong> für die Diagnostik oder Nachsorge des Larynxkarzinoms.</li>
                    <li>Eine routinemäßige Bestimmung von Tumormarkern wird <strong>nicht empfohlen</strong>.</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li><strong>HIV-Serologie:</strong> Bei Risikopatienten.</li>
                    <li><strong>Hepatitis-Serologie:</strong> Bei geplanter Chemotherapie.</li>
                </ul>
                <h3>weitere Laborparameter</h3>
                <ul>
                    <li><strong>Gerinnungsparameter:</strong> Quick, PTT, Thrombozyten vor interventionellen Eingriffen.</li>
                    <li><strong>Blutgruppe und Antikörpersuchtest:</strong> Vor operativen Eingriffen.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li>Kleine, umschriebene malignomsuspekte Schleimhautveränderungen (z.B. der Stimmlippen) sollen zur Diagnosesicherung vollständig entfernt werden (<strong>Exzisionsbiopsie</strong>).</li>
                    <li>Bei größeren Tumoren sollen lediglich <strong>Inzisionsbiopsien</strong> durchgeführt werden.</li>
                    <li>Bei Biopsien soll die Probeentnahme aus dem <strong>Randbereich des Tumors</strong> und wenn möglich zentral aus dem Tumorgrund erfolgen.</li>
                    <li>Die Biopsie kann im Rahmen der Panendoskopie in Narkose erfolgen.</li>
                </ul>
                <h3>Histopathologischer Befund</h3>
                <p>Folgende Parameter sollen im histopathologischen Befund angegeben werden:</p>
                <ul>
                    <li><strong>Tumorlokalisation und -größe</strong></li>
                    <li><strong>Histologischer Tumortyp</strong> nach aktueller WHO-Klassifikation</li>
                    <li><strong>Lokale Tumorausdehnung</strong>, infiltrierte Strukturen</li>
                    <li><strong>Lymphknotenmetastasen</strong> nach Level und Seite getrennt (Anzahl untersuchte/befallene LK, größter Durchmesser, kapselüberschreitendes Wachstum)</li>
                    <li><strong>Lymphgefäß-/Veneninvasion</strong> und <strong>perineurale Invasion</strong></li>
                    <li>Vorhandensein einer <strong>in situ</strong> Komponente</li>
                    <li><strong>Differenzierungsgrad</strong> (G1-G3)</li>
                    <li><strong>Abstand zu den lateralen und basalen Resektaträndern</strong></li>
                </ul>
                <h3>Tumortypen</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> Häufigster Typ (> 90%)</li>
                    <li><strong>Verruköses Karzinom:</strong> Seltene, niedrig-maligne Variante</li>
                    <li><strong>Adenokarzinom:</strong> Selten</li>
                    <li><strong>Neuroendokrine Tumoren:</strong> Sehr selten</li>
                </ul>
                <h3>Differenzierungsgrade</h3>
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
                                <td><strong>G1</strong></td>
                                <td>Gut differenziert</td>
                            </tr>
                            <tr>
                                <td><strong>G2</strong></td>
                                <td>Mäßig differenziert</td>
                            </tr>
                            <tr>
                                <td><strong>G3</strong></td>
                                <td>Schlecht differenziert</td>
                            </tr>
                            <tr>
                                <td><strong>G4</strong></td>
                                <td>Undifferenziert</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HPV-Status</h3>
                <ul>
                    <li>Der <strong>HPV-Status hat beim Larynxkarzinom keinen prognostischen Wert</strong>.</li>
                    <li>Eine routinemäßige p16-Immunhistochemie oder HPV-Testung wird <strong>nicht empfohlen</strong>.</li>
                    <li>Dies unterscheidet das Larynxkarzinom vom Oropharynxkarzinom, wo der HPV-Status ein wichtiger prognostischer Faktor ist.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li>Es existieren <strong>keine etablierten molekularen Tumermarker</strong> für das Larynxkarzinom.</li>
                    <li>Weder in der Primärdiagnostik noch in der Nachsorge haben sich molekulare Marker etabliert.</li>
                </ul>
                <h3>Genetische Alterationen</h3>
                <ul>
                    <li>Die molekulare Pathologie des Larynxkarzinoms ist weniger charakterisiert als bei anderen Kopf-Hals-Tumoren.</li>
                    <li>Häufige Alterationen umfassen TP53-Mutationen, CDKN2A-Deletionen und EGFR-Überexpression.</li>
                    <li>Diese haben derzeit keinen Einfluss auf die Therapieentscheidung.</li>
                </ul>
                <h3>Zukünftige Perspektiven</h3>
                <ul>
                    <li>Die Forschung zu molekularen Markern beim Larynxkarzinom ist Gegenstand aktiver Studien.</li>
                    <li>Potenzielle Targets für zukünftige Therapien werden untersucht.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Interdisziplinäres Tumorboard</h3>
                <ul>
                    <li>Die Behandlung des Larynxkarzinoms soll <strong>interdisziplinär nach Abstimmung jedes individuellen Falls innerhalb von Tumorboards</strong> unter Beteiligung der Fachdisziplinen Hals-Nasen-Ohrenheilkunde, Strahlentherapie, medizinische Onkologie, Pathologie und Radiologie durchgeführt werden.</li>
                </ul>
                <h3>TNM-Klassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>T-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>T1</strong></td>
                                <td>Auf eine Unterregion beschränkt, normale Stimmlippenmobilität</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Befall mehrerer Unterregionen oder eingeschränkte/fehlende Mobilität</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Fixation der Stimmlippe, Befall angrenzender Strukturen</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Durchbruch durch Schildknorpel, Befall von Schilddrüse, Ösophagus</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Prävertebralfaszie, Mediastinum, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>N-Kategorie (Lymphknoten)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>N-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>N0</strong></td>
                                <td>Keine Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>N1</strong></td>
                                <td>Einzelner ipsilateraler Lymphknoten ≤ 3 cm</td>
                            </tr>
                            <tr>
                                <td><strong>N2</strong></td>
                                <td>Einzelner ipsilateraler Lymphknoten > 3-6 cm oder multiple Lymphknoten</td>
                            </tr>
                            <tr>
                                <td><strong>N3</strong></td>
                                <td>Lymphknoten > 6 cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>M-Kategorie (Fernmetastasen)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>M-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>M0</strong></td>
                                <td>Keine Fernmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>M1</strong></td>
                                <td>Fernmetastasen vorhanden</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>R-Klassifikation</h3>
                <ul>
                    <li><strong>R0</strong>: Tumor in sano reseziert, der exakte Abstand von Tumorverbänden zum Resektionsrand spielt keine Rolle, solange der unmittelbare Rand tumorfrei ist.</li>
                    <li><strong>R1</strong>: Tumor erreicht mikroskopisch einen der Präparateränder unmittelbar.</li>
                    <li><strong>R2</strong>: Makroskopisch Tumor im Patienten verblieben.</li>
                    <li><strong>RX</strong>: Resektionsrand histomorphologisch nicht sicher beurteilbar.</li>
                </ul>
                <h3>Stadiengruppierung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>T</th>
                                <th>N</th>
                                <th>M</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>0</strong></td>
                                <td>Tis</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>T1</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T2</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T1-2</td>
                                <td>N1</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T3</td>
                                <td>N0-1</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVA</strong></td>
                                <td>T4a</td>
                                <td>N0-1</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVA</strong></td>
                                <td>T1-4a</td>
                                <td>N2</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVB</strong></td>
                                <td>jedes T</td>
                                <td>N3</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVC</strong></td>
                                <td>jedes T</td>
                                <td>jedes N</td>
                                <td>M1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Wächterlymphknoten-Biopsie</h3>
                <ul>
                    <li>Es kann <strong>keine Empfehlung</strong> für die Eignung der SLN-Biopsie als Methode zur Vermeidung einer elektiven Halslymphknotenausräumung beim Larynxkarzinom ausgesprochen werden.</li>
                </ul>`
            },
            {
                title: "Therapie - Frühstadium",
                html: `<h3>Stadien I und II (cT1 cN0 und cT2 cN0)</h3>
                <ul>
                    <li>Glottische bzw. supraglottische Larynxkarzinome der Stadien I und II haben ein Therapiemodalitäts-unabhängiges <strong>krankheitsspezifisches 5-Jahresüberleben von 82-100% (Stadium I)</strong> bzw. <strong>82-92% (Stadium II)</strong>.</li>
                    <li>Subglottische Karzinome der gleichen Tumorstadien haben eine ungünstigere Prognose.</li>
                    <li>Das Gesamtüberleben nach chirurgischer Therapie und nach primärer Strahlentherapie unterscheidet sich nicht.</li>
                </ul>
                <h3>Therapieoptionen</h3>
                <p>Patienten mit cT1 cN0 und cT2 cN0 sollten entweder:</p>
                <ul>
                    <li>Eine <strong>alleinige chirurgische Therapie</strong> durch Teilresektion, bevorzugt transoral, oder</li>
                    <li>Eine <strong>alleinige Strahlentherapie</strong> erhalten.</li>
                </ul>
                <p>Die Stimmqualität nach transoraler Lasermikrochirurgie und primärer Radiotherapie des T1-Glottis-Ca ist <strong>gleichwertig</strong>.</p>
                <h3>Elektive Neck Dissection</h3>
                <ul>
                    <li>Eine elektive Neck dissection soll bei <strong>Stadium I glottischen Karzinomen nicht</strong> erfolgen.</li>
                    <li>Beim supraglottischen Karzinom der Kategorie cT1cN0 kann auf eine elektive Neck dissection verzichtet werden.</li>
                    <li>Bei supraglottischen Karzinomen der Kategorie cT2-cT4acN0 soll in Abhängigkeit von der Tumorlokalisation eine ein- oder beidseitige elektive Neck dissection erfolgen.</li>
                </ul>
                <h3>Sicherheitsabstand</h3>
                <ul>
                    <li>Bei transoral-laserchirurgischer Resektion von T1/T2 Glottiskarzinomen mit strenger Begrenzung auf die Stimmlippe soll ein <strong>Sicherheitsabstand von mindestens 1 mm</strong> eingehalten werden.</li>
                    <li>Bei der Laryngektomie von T3 und T4a Karzinomen sollte ein <strong>Sicherheitsabstand von mindestens 5 mm</strong> eingehalten werden.</li>
                </ul>
                <h3>Früherkennung</h3>
                <ul>
                    <li>Beim Kehlkopfkrebs ist es <strong>nicht sinnvoll</strong>, die gesamte Bevölkerung einem Screening zu unterziehen.</li>
                    <li>Ein Screening auf ein Larynxkarzinom bei einer Risikopopulation (Raucher, regelmäßig größere Mengen Alkohol) kann <strong>nicht empfohlen</strong> werden, da der Nachweis der Wirksamkeit gegenwärtig fehlt.</li>
                </ul>`
            },
            {
                title: "Therapie - Fortgeschrittenes Stadium",
                html: `<h3>Multimodale Therapieansätze</h3>
                <p>Bei lokal fortgeschrittenen (nicht metastasierten) Larynxkarzinomen (Stadium III - IVA):</p>
                <ul>
                    <li>Die <strong>lokoregionäre Tumorkontrolle und das Gesamtüberleben</strong> nach primärer Radiochemotherapie sind <strong>statistisch signifikant besser</strong> als nach alleiniger Radiotherapie.</li>
                    <li>Die lokoregionäre Tumorkontrolle nach simultaner Radiochemotherapie ist besser als nach neoadjuvanter Chemotherapie gefolgt von Strahlentherapie bzw. chirurgischer Therapie.</li>
                </ul>
                <h3>Radiochemotherapie</h3>
                <ul>
                    <li>Bei Patienten mit lokal fortgeschrittenen Larynxkarzinomen (M0), die nicht mit einer Operation behandelt werden, soll, besonders in der Altersgruppe bis 70 Jahren, eine <strong>primäre Radiochemotherapie einer alleinigen Strahlentherapie vorgezogen werden</strong>.</li>
                    <li>Die primäre Radiochemotherapie soll mit einer <strong>simultan zur Strahlentherapie applizierten cisplatinhaltigen Chemotherapie</strong> durchgeführt werden.</li>
                    <li>Bei Kontraindikationen für Cisplatin können alternativ auch Carboplatin +/- 5FU, Mitomycin C +/- 5FU oder Cetuximab parallel zur Strahlentherapie verabreicht werden.</li>
                    <li>Eine Radiochemotherapie soll nur an Einrichtungen stattfinden, an denen Strahlen- oder Chemotherapie bedingte akute Toxizitäten erkannt und adäquat behandelt werden können.</li>
                </ul>
                <h3>Neoadjuvante Chemotherapie</h3>
                <ul>
                    <li>Eine neoadjuvante Chemotherapie vor geplanter definitiver Radio- oder Radiochemotherapie soll <strong>nicht durchgeführt werden</strong>, außer zum Zweck der Selektion zwischen Laryngektomie und Radio- bzw. Radiochemotherapie.</li>
                    <li>Falls eine neoadjuvante Chemotherapie zum Zweck der Selektion indiziert wird, sollte diese mit bis zu 3 Zyklen <strong>Cisplatin, Docetaxel und +/- 5FU</strong> durchgeführt werden.</li>
                </ul>
                <h3>HPV-Status in der Therapieentscheidung</h3>
                <ul>
                    <li>Der <strong>HPV16/p16 Status des Tumors soll bei der Therapieentscheidung nicht berücksichtigt werden</strong>.</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li>Die Strahlentherapie sollte als <strong>IMRT</strong> (intensitätsmodulierte Strahlentherapie) erfolgen.</li>
                    <li>Bei simultaner Chemotherapie sollte die Strahlentherapie mit <strong>70-72 Gy in konventioneller Fraktionierung</strong> erfolgen (5x 1,8-2,2 Gy pro Woche).</li>
                    <li>Therapiepausen über die geplanten Wochenendpausen hinaus sollten während der Strahlentherapie vermieden werden.</li>
                    <li>Ungeplante Therapiepausen sollten nach Möglichkeit durch 2x tägliche Bestrahlungen an 1-2 Wochentagen bei unveränderter Einzeldosis kompensiert werden.</li>
                </ul>
                <h3>Postoperative Therapie</h3>
                <p>Eine postoperative Radio- oder Radiochemotherapie soll erfolgen bei:</p>
                <ul>
                    <li>pT3-Karzinomen und pT4a-Karzinomen</li>
                    <li>Karzinomen mit knappen oder positiven Resektionsrändern, perineuraler Invasion, Gefäßinvasion (Lymphgefäßinvasion und/oder Veneninvasion)</li>
                    <li>Mehr als einem befallenen Lymphknoten</li>
                    <li>Einem befallenen Lymphknoten mit extrakapsulärem Tumorwachstum</li>
                </ul>
                <p>Eine postoperative Radiochemotherapie soll erfolgen bei:</p>
                <ul>
                    <li>R1 oder Resektionsrand <5mm im Bereich der Mukosa</li>
                    <li>Extrakapsulärem Tumorwachstum an den Lymphknoten</li>
                </ul>
                <p>Die postoperative Strahlentherapie sollte möglichst früh nach Abschluss der Wundheilung begonnen werden und innerhalb eines Zeitraums von <strong>höchstens 11 Wochen nach der Operation</strong> beendet werden.</p>
                <h3>Larynxorganerhalt</h3>
                <ul>
                    <li>Larynxkarzinome in den Stadien cT1-cT2-N+, cT3 und cT4a cM0 sollen entweder mittels primärer Resektion gefolgt von adjuvanter Radio- oder Radiochemotherapie oder mittels primärer Radiochemotherapie behandelt werden.</li>
                    <li>Bei cT4a cN0-cN3 cM0 Tumoren gibt es Hinweise aus Krebsregisterdatenbanken für ein besseres Gesamtüberleben mit einem primär chirurgischen Vorgehen.</li>
                    <li>Das Sprechen und die Lebensqualität sind nach larynxerhaltender Therapie besser als nach einer Laryngektomie.</li>
                    <li>Alle Patienten in den Stadien, bei denen eine Laryngektomie erforderlich wäre, sollen im interdisziplinären Tumorboard einvernehmlich beraten werden.</li>
                </ul>`
            },
            {
                title: "Therapie - Chirurgische Verfahren",
                html: `<h3>Prätherapeutische Tracheotomie</h3>
                <ul>
                    <li>Eine Tracheotomie, die vor einer Laryngektomie durchgeführt wird, wirkt sich <strong>negativ auf die Prognose</strong> aus, weil häufiger Stomarezidive auftreten.</li>
                    <li>Vor einer geplanten totalen Laryngektomie sollte auf eine Tracheotomie verzichtet werden.</li>
                    <li>Im Falle einer Dyspnoe kann im Rahmen der Erstdiagnostik ein transorales Tumordebulking zur Vermeidung einer Tracheotomie durchgeführt werden.</li>
                </ul>
                <h3>Resektionstechniken</h3>
                <ul>
                    <li><strong>Transorale Lasermikrochirurgie (TLM)</strong>: Bevorzugte Methode für frühe Stadien</li>
                    <li><strong>Transorale robotische Chirurgie (TORS)</strong>: Alternative für ausgewählte Fälle</li>
                    <li><strong>Transzervikale Teilresektion</strong>: Vertikale oder horizontale Kehlkopfteilresektionen</li>
                    <li><strong>Totale Laryngektomie</strong>: Bei fortgeschrittenen Tumoren (T4)</li>
                </ul>
                <p>Vertikale Teilresektionen haben vorrangig Beeinträchtigungen der Stimmgeneratorfunktion zur Folge, horizontale Teilresektionen führen generell zu Störungen der Verschlussmechanismen beim Schlucken und damit zu Aspirationen.</p>
                <h3>Neck Dissection</h3>
                <ul>
                    <li>Sowohl eine elektive als auch therapeutische Neck dissection soll <strong>funktionelle Aspekte berücksichtigen</strong> und Strukturen wie den N. accessorius, den M. sternocleidomastoideus und die V. jugularis interna erhalten.</li>
                    <li>Der Erhalt des N. accessorius bei der Neck-dissection führt zu einer <strong>Verbesserung der Lebensqualität</strong>.</li>
                    <li>Ist nach einer operativen Therapie eines N+-Larynxkarzinoms eine adjuvante Radiochemotherapie oder Radiotherapie auch der kontralateralen Lymphabflusswege indiziert, sollte auf die Neck dissection des kontralateralen cN0-Halses verzichtet werden.</li>
                </ul>
                <h3>Salvage-Chirurgie</h3>
                <ul>
                    <li>Wird das Lymphabflussgebiet im Rahmen der primären Radio- oder Radiochemotherapie beim cN0-Hals in die Bestrahlung mit einbezogen, sollte <strong>keine elektive Neck-dissection folgen</strong>.</li>
                    <li>Nach primärer Radio- oder Radiochemotherapie sollte eine Neck dissection nur erfolgen, wenn <strong>10-12 Wochen nach Abschluss der Therapie noch PET-positive Lymphknoten</strong> nachgewiesen wurden.</li>
                    <li>Besteht nach primärer Radio-Chemotherapie nach 12 Wochen ein PET-negativer Lymphknotenbefund, sollte keine Neck dissection erfolgen, sondern eine klinische und bildgebende Verlaufskontrolle durchgeführt werden.</li>
                </ul>
                <h3>Rekonstruktive Chirurgie</h3>
                <ul>
                    <li>Rekonstruktive Maßnahmen sollten grundsätzlich Teil eines chirurgischen Konzeptes sein.</li>
                    <li>Ziel der chirurgischen Maßnahme soll eine <strong>R0-Resektion</strong> sein.</li>
                    <li>Falls eine R0-Resektion nicht möglich erscheint, soll keine primärchirurgische Therapie erfolgen.</li>
                    <li>Bei R1 soll eine Nachresektion angestrebt werden.</li>
                </ul>
                <h3>Residualtumor, Rezidiv und Metastasierung</h3>
                <ul>
                    <li>Beim Auftreten von lokal oder lokoregionären Rezidiven sollte die Möglichkeit einer erneuten Operation oder/und die Radio- bzw. Radiochemotherapie in Abhängigkeit von der vorausgegangenen Therapie und der Ausdehnung des Rezidives überprüft werden.</li>
                    <li>Besteht nach primärer Radiochemotherapie ein lokoregionäres Tumoresiduum (M0) sollen die Möglichkeiten der Salvage Chirurgie geprüft werden.</li>
                </ul>`
            },
            {
                title: "Supportive Therapie & Rehabilitation",
                html: `<h3>Spezifische Supportivmaßnahmen nach Laryngektomie</h3>
                <ul>
                    <li>Nach Laryngektomie soll für eine <strong>Befeuchtung der unteren Atemwege</strong> gesorgt werden.</li>
                    <li>Nach Laryngektomie soll der Patient zur <strong>selbständigen Pflege und Handhabung der Kanüle</strong> angeleitet werden.</li>
                    <li>Abteilungen und Praxen, die Patienten nach Laryngektomie behandeln und Notärzte sollten das Material zur spezifischen Beatmungssituation vorhalten.</li>
                </ul>
                <h3>Zahnärztliche Betreuung</h3>
                <ul>
                    <li>Bei geplanter Radiochemotherapie des Larynxkarzinoms (primär oder adjuvant) sollte eine <strong>zahnärztliche Kontrolle vor Therapiebeginn</strong> erfolgen.</li>
                    <li>Der Patient sollte über Prophylaxemaßnahmen informiert werden.</li>
                </ul>
                <h3>Stimmrehabilitation</h3>
                <p>Die drei häufigsten Methoden der Stimmgebung nach Laryngektomie sind:</p>
                <ul>
                    <li><strong>Elektronische Sprechhilfe</strong></li>
                    <li><strong>Ösophagusersatzstimme</strong></li>
                    <li><strong>Stimmventil</strong> (z.B. Provox)</li>
                </ul>
                <p>Schon vor Beginn der Tumor-Therapie soll die spätere Stimmfunktion bedacht werden. In etwa 20% der Fälle kann keine geeignete Ersatzstimme erlernt werden.</p>
                <h3>Schluckrehabilitation</h3>
                <ul>
                    <li>So früh wie möglich soll postoperativ die <strong>Schluckfunktion untersucht</strong> werden.</li>
                    <li>Ziel ist die rasche orale Nahrungsaufnahme und bei Bedarf ein Schlucktraining.</li>
                    <li>Nach Kehlkopf-Teilresektion sollte durch frühzeitiges Atem-/Schlucktraining das Aspirationsrisiko verringert werden.</li>
                    <li>Nach Kehlkopf-Teilresektion sind Aspiration von Speichel, Flüssigkeiten und Nahrung zu Beginn typische Folgen.</li>
                </ul>
                <h3>Ernährung</h3>
                <ul>
                    <li>Eine <strong>PEG-Anlage sollte nur erfolgen</strong>, wenn zu erwarten ist, dass eine Sondenernährung über einen längeren Zeitraum erforderlich ist.</li>
                    <li>Die Ernährung muss an das Therapieverfahren und die daraus resultierende Funktion des Schluckaktes angepasst werden.</li>
                    <li>Nach Kehlkopf-Teilresektion kann eine künstliche Ernährungsform (nasogastrale Sonde oder PEG) indiziert sein.</li>
                </ul>
                <h3>Selbsthilfegruppen</h3>
                <ul>
                    <li>Im Rahmen der Primärtherapie soll über die Möglichkeit einer <strong>Kontaktaufnahme zu den Selbsthilfegruppen</strong> informiert werden.</li>
                </ul>
                <h3>Psychoonkologische Versorgung</h3>
                <ul>
                    <li>Die sofortige und langfristige bedarfsorientierte <strong>psychoonkologische Versorgung sollte sichergestellt</strong> sein.</li>
                    <li>Die berufliche Rehabilitation ist nach Kehlkopfkrebs durch die funktionellen Einschränkungen eine besondere Herausforderung.</li>
                    <li>Patienten mit Larynxkarzinom sollen darüber informiert werden, dass sie <strong>sozialrechtlichen Anspruch auf Anschlussheilbehandlung (AHB)</strong> haben.</li>
                    <li>Larynxkarzinompatienten sollen in entsprechend spezialisierten Einrichtungen rehabilitiert werden.</li>
                </ul>
                <h3>Funktionalität und Lebensqualität</h3>
                <ul>
                    <li>Die Stimm- und Schluckfunktion sollte <strong>prätherapeutisch bei larynxerhaltender Therapie</strong> untersucht und dokumentiert werden.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Grundsätze der Nachsorge</h3>
                <ul>
                    <li>Patienten mit einem Larynxkarzinom soll eine <strong>regelmäßige Nachsorge angeboten</strong> werden.</li>
                    <li>Im Vordergrund der Nachsorge soll die <strong>klinische Untersuchung einschließlich Endoskopie</strong> stehen.</li>
                </ul>
                <h3>Klinisch-anamnestische Untersuchung</h3>
                <p>Regelmäßige Nachsorgeuntersuchungen umfassen:</p>
                <ul>
                    <li>Laryngoskopie (direkte/indirekte)</li>
                    <li>Videolaryngostroboskopie</li>
                    <li>Halsultraschall</li>
                    <li>Anamneseerhebung (Heiserkeit, Schluckstörungen, Schmerzen)</li>
                </ul>
                <h3>Bildgebung in der Nachsorge</h3>
                <ul>
                    <li>Bei Verdacht auf oder Nachweis eines Lokalrezidivs oder bei metastasenverdächtigen Symptomen sollte eine <strong>Schnittbildgebung</strong> durchgeführt werden.</li>
                    <li>Bei Patienten mit primärer Strahlen-/Chemotherapie ist eine Schnittbildgebung zum Ausschluss eines Residualtumors bzw. Residualmetastase <strong>8-12 Wochen nach Abschluss der Therapie</strong> zu empfehlen.</li>
                    <li>Die Bildgebung und deren zeitliche Untersuchungsintervalle sollten abhängig von der Größe und Lokalisation des Primärtumors sowie der Therapieform indiziert werden.</li>
                </ul>
                <h3>Kontroll-Mikrolaryngoskopie</h3>
                <p>Bei verzögertem Heilungsverlauf oder klinischem Verdacht auf Rezidiv sollte eine <strong>Mikrolaryngoskopie</strong> durchgeführt werden, insbesondere:</p>
                <ul>
                    <li>Wenn suspekte Befunde (Granulationen, Erosionen, Keratosen, Dysplasien) sich nicht zurückbilden oder nach anfänglicher Verkleinerung wieder vergrößern</li>
                    <li>Bei knappen Resektionsrändern in der vorderen Kommissur</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <p>Es existieren <strong>keine etablierten Tumormarker</strong> für die molekulare Diagnostik in der Nachsorge von Patienten mit einem Larynxkarzinom.</p>
                <h3>Sozialrechtliche und psychosoziale Beratung</h3>
                <p>Die sozialrechtliche und psychosoziale Beratung sollte <strong>Bestandteil der Langzeitbetreuung</strong> von Patienten mit Larynxkarzinom sein.</p>
                <h3>Versorgungsstrukturen</h3>
                <ul>
                    <li>Interdisziplinäre Betreuung und Vernetzung aller an der Versorgung beteiligten Fachrichtungen und Disziplinen sollen sichergestellt sein.</li>
                </ul>`
            },
            {
                title: "Palliative Therapie",
                html: `<h3>Palliative Therapie</h3>
                <p>Palliativmedizin ist definiert als ein Ansatz zur Verbesserung der Lebensqualität von Patienten und ihren Familien, die mit Problemen konfrontiert sind, welche mit einer lebensbedrohlichen Erkrankung einhergehen.</p>
                <p>Bezüglich palliativmedizinischer Aspekte wird auf die <strong>S3-Leitlinie Palliativmedizin</strong> des Leitlinienprogramms Onkologie verwiesen.</p>
                <h3>Palliative systemische medikamentöse Behandlung</h3>
                <ul>
                    <li>Bei ausreichendem Allgemeinzustand (= ECOG 0 bis 2) sollten Patienten mit Rezidiv oder Metastasierung nach Ausschöpfung lokoregionärer kurativer Therapieoptionen eine <strong>palliative Systemtherapie</strong> erhalten.</li>
                </ul>
                <h3>Erstlinientherapie</h3>
                <ul>
                    <li>Als palliative Chemotherapie sollte <strong>Platin (möglichst Cisplatin) und 5-FU in Kombination mit Cetuximab</strong> bei gutem Allgemeinzustand (= ECOG 0 bis 1) in der Erstlinientherapie gegeben werden.</li>
                    <li>In der Erstlinientherapie kann ab ECOG 2 eine systemische Monotherapie gegeben oder Best-Supportive-Care angeboten werden.</li>
                </ul>
                <h3>Zweitlinientherapie</h3>
                <ul>
                    <li>In der Zweitlinientherapie sollte eine Therapie mit <strong>PD-1 Inhibitoren</strong> (Nivolumab, Pembrolizumab) angeboten werden.</li>
                </ul>
                <h3>Versorgungsstrukturen</h3>
                <ul>
                    <li>Interdisziplinäre Betreuung und Vernetzung aller an der Versorgung beteiligten Fachrichtungen und Disziplinen sollen sichergestellt sein.</li>
                    <li>Larynxkarzinompatienten sollten in entsprechend spezialisierten Einrichtungen rehabilitiert werden.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge des Larynxkarzinoms. Kurzversion 1.1 – November 2019. AWMF-Registernummer: 017-076OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
