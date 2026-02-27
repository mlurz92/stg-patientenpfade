(function() {
    'use strict';
    if (!window.PFADE_DATA) window.PFADE_DATA = [];
    window.PFADE_DATA.push({
        id: "analkarzinom",
        name: "Analkarzinom",
        category: "onko-gi",
        stand: "11/20",
        sections: [
            {
                title: "Grundlagen",
                html: `<h3>Definition und Terminologie</h3>
                <ul>
                    <li>Die Leitlinie befasst sich ausschließlich mit Plattenepithelkarzinomen des Analkanals und des Analrands.</li>
                    <li><strong>Analrandkarzinome:</strong> Makroskopisch vollständig sichtbar bei Spreizung der Nates, mit überwiegendem Gewebeanteil innerhalb eines Radius von 5 cm um die Linea anocutanea.</li>
                    <li><strong>Analkanalkarzinome:</strong> Mindestens teilweise so weit im Analkanal gelegen, dass Sichtbarkeit unter Spreizung der Nates nicht oder nicht vollständig gegeben ist.</li>
                </ul>
                <h3>Stadieneinteilung (AJCC 2017)</h3>
                <h4>T – Primärtumor</h4>
                <ul>
                    <li><strong>Tx:</strong> Primärtumor nicht beurteilt / nicht beurteilbar</li>
                    <li><strong>T0:</strong> Kein Anhalt für Primärtumor</li>
                    <li><strong>Tis:</strong> Hochgradige intraepitheliale Neoplasie (Carcinoma in situ, Morbus Bowen, AIN II-III)</li>
                    <li><strong>T1:</strong> Tumor ≤2 cm</li>
                    <li><strong>T2:</strong> Tumor >2 cm aber ≤5 cm</li>
                    <li><strong>T3:</strong> Tumor >5 cm</li>
                    <li><strong>T4:</strong> Tumor jeder Größe mit Invasion benachbarter Organe (z.B. Vagina, Urethra, Blase)</li>
                </ul>
                <h4>N – Regionale Lymphknoten</h4>
                <ul>
                    <li><strong>Nx:</strong> Regionale Lymphknoten nicht beurteilt / nicht beurteilbar</li>
                    <li><strong>N0:</strong> Keine regionalen Lymphknotenmetastasen</li>
                    <li><strong>N1:</strong> Metastasen in inguinalen, mesorektalen oder iliakalen Lymphknoten</li>
                    <li><strong>N1a:</strong> Inguinale, mesorektale oder interne iliakale Lymphknoten betroffen</li>
                    <li><strong>N1b:</strong> Externe iliakale Lymphknoten betroffen</li>
                    <li><strong>N1c:</strong> Externe iliakale sowie jegliche N1a Lymphknoten betroffen</li>
                </ul>
                <h4>M – Fernmetastasen</h4>
                <ul>
                    <li><strong>M0:</strong> Keine Fernmetastasen</li>
                    <li><strong>M1:</strong> Fernmetastasen vorliegend</li>
                </ul>`
            },
            {
                title: "Prävention & Screening",
                html: `<h3>Empfehlungen</h3>
                <ul>
                    <li>Bei allen HIV-positiven Patient*innen soll einmal jährlich eine Screening-Untersuchung zur Detektion inzidenter Analkarzinome und ihrer Präkanzerosen durchgeführt werden.</li>
                    <li>HIV-negativen Personen mit erhöhtem Risiko für die Entwicklung von Analkarzinomen sollte regelmäßig (mindestens alle 36 Monate) eine Screening-Untersuchung zur Detektion inzidenter Analkarzinome und ihrer Präkanzerosen angeboten werden.</li>
                    <li>HIV-positiven Patient*innen soll eine Screening-Untersuchung entsprechend den Empfehlungen der Deutsch-Österreichischen Leitlinie Anale Dysplasien und Analkarzinome bei HIV-Infizierten angeboten werden.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Eine HPV-Impfung mit dem Ziel eines therapeutischen Nutzens im Rahmen der Behandlung des Analkarzinoms soll vor, während oder nach der regulären Behandlung von Patient*innen mit Analkarzinom nicht durchgeführt werden.</p>
                </div>`
            },
            {
                title: "Primärdiagnostik",
                html: `<h3>Anamnese</h3>
                <ul>
                    <li>Bei Verdacht auf das Vorliegen eines Analkarzinoms soll eine ausführliche Anamnese auch zur Abklärung von Risikofaktoren (Immundefizienz einschließlich HIV-Infektion, rezeptiver Analverkehr, Vorerkrankung mit HPV-assoziierten anogenitalen Läsionen, Nikotinabusus) erhoben werden.</li>
                </ul>
                <h3>Körperliche Untersuchung</h3>
                <ul>
                    <li>Bei Verdacht auf das Vorliegen eines Analkarzinoms soll eine körperliche Untersuchung mit besonderem Fokus auf die Leistenlymphknoten und die Analregion durchgeführt werden.</li>
                </ul>
                <h3>Proktologische Untersuchung</h3>
                <ul>
                    <li>Bei Verdacht auf das Vorliegen eines Analkarzinoms soll eine proktologische Untersuchung inkl. digital-rektaler Untersuchung, Proktoskopie, ggf. Rektoskopie, ggf. analer Endosonographie und ggf. Kolposkopie durchgeführt werden.</li>
                </ul>
                <h3>Tumordokumentation</h3>
                <ul>
                    <li>Es soll der Tumor eingegrenzt werden in Hinblick auf die Lage (angegeben in Steinschnittlage (SSL)), den maximalen Durchmesser, die Ausdehnung perianal und intraanal (in cm und Lagebeziehung zur L. anocutanea und L. dentata), und Beweglichkeit im Hinblick auf eine Infiltration anderer Organe, insbesondere des Sphinkterapparats und bei Frauen der Vagina.</li>
                </ul>
                <h3>Histopathologische Sicherung</h3>
                <ul>
                    <li>Bei Verdacht auf das Vorliegen eines Analkarzinoms soll eine histopathologische Sicherung angestrebt werden.</li>
                    <li>Bei Verdacht auf das Vorliegen eines Analrandkarzinoms von bis zu 2 cm Durchmesser ohne Infiltration des Sphinkterapparats oder benachbarter Organe sollte bereits zum Zeitpunkt der Diagnosesicherung eine therapeutische R0-Exzision mit Sicherheitsabstand von 0,5 cm angestrebt werden.</li>
                    <li>Bei unklarer Histologie oder Nachweis einer HGAIN in einer bereits erfolgten Probebiopsie und Verdacht auf das Vorliegen eines Analrandkarzinoms von bis zu 2 cm Durchmesser, ggf. auch bei einer größeren Läsion, ohne Infiltration des Sphinkterapparats oder benachbarter Organe, sollte bereits zum Zeitpunkt der Diagnosesicherung eine therapeutische R0-Exzision mit Sicherheitsabstand von 0,5 cm angestrebt werden.</li>
                    <li>Bei Verdacht auf das Vorliegen eines Analkanalkarzinoms von bis zu 2 cm Durchmesser, welches sehr gut mobil ist und nicht den Sphinkterapparat infiltriert, kann bereits zum Zeitpunkt der Diagnosesicherung eine therapeutische R0-Exzision mit Sicherheitsabstand von 0,5 cm erwogen werden.</li>
                    <li>Bei Verdacht auf das Vorliegen eines Analrand- oder Analkanalkarzinoms mit Infiltration des Sphinkterapparats oder benachbarter Organe soll lediglich eine bioptische histopathologische Sicherung erfolgen und keine Exzision durchgeführt werden.</li>
                    <li>Wird eine therapeutische R0-Exzision angestrebt, ist die Dokumentation der Schnittrandfreiheit durch die Pathologie allseits (auch zur Tiefe) erforderlich, und das Präparat soll zur Beurteilbarkeit entsprechend vorbereitet sein, d.h. eine eindeutige Präparatemarkierung enthalten.</li>
                </ul>`
            },
            {
                title: "Staging & Bildgebung",
                html: `<h3>Klinisch-instrumentelle Untersuchungen</h3>
                <ul>
                    <li>Zur Bestimmung der Tumorkategorie sollen zur Bestimmung der Tumorkategorie die unter Empfehlung 6.3. empfohlenen klinisch-instrumentellen Untersuchungen möglichst noch vor der histopathologischen Sicherung erfolgen und deren Ergebnisse entsprechend dokumentiert werden.</li>
                </ul>
                <h3>Bildgebende Diagnostik</h3>
                <ul>
                    <li>Zur Bestimmung der Tumorkategorie soll eine MRT-Untersuchung des Beckens erfolgen. Diese sollte eine multiparametrische MRT, anguliert auf den Analkanal, umfassen.</li>
                    <li>Zur Bestimmung der Tumorkategorie kann eine anale Endosonographie durchgeführt werden.</li>
                    <li>Zur Detektion lokoregionärer Lymphknotenmetastasen soll eine MRT des Beckens durchgeführt werden. Ergänzend sollte die Durchführung einer PET/CT erfolgen. Eine CT des Beckens kann durchgeführt werden.</li>
                    <li>Zur Detektion von Fernmetastasen soll eine CT des Thorax und des Abdomens durchgeführt werden. Alternativ kann die Durchführung einer PET/CT erwogen werden.</li>
                    <li>Zur Detektion von Fernmetastasen kann zusätzlich die Durchführung einer Sonographie des Abdomens erwogen werden.</li>
                    <li>Zur Abklärung des Vorliegens von Sphinkterkontakt vor Durchführung einer therapeutischen Exzision bei Analkanalkarzinomen im Stadium I (T1N0M0) bzw. Analrandkarzinomen im Stadium I (T1N0M0) oder IIA (T2N0M0) soll eine multiparametrische MRT anguliert auf den Analkanal oder eine anale Endosonographie durchgeführt werden.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>CAVE: Die PET-Untersuchung ist im Rahmen der Diagnostik bei Analkarzinomen nicht Gegenstand des Leistungskatalogs der gesetzlichen Krankenversicherung (Kostenübernahme nicht gesichert).</p>
                </div>`
            },
            {
                title: "Supportive Maßnahmen",
                html: `<h3>Allgemeine Diagnostik</h3>
                <ul>
                    <li>Bei unbekanntem HIV-Status soll Patient*innen mit Analkarzinom die Durchführung eines HIV-Tests empfohlen werden.</li>
                    <li>Bei Patient*innen mit Analkarzinom soll eine vollständige klinische Untersuchung der Anogenitalregion erfolgen. Bei Frauen mit Analkarzinom soll eine gynäkologische Untersuchung einschließlich eines Zervixkarzinom-Screenings erfolgen.</li>
                    <li>Bei Patient*innen mit Analkarzinom soll die Anamnese die Frage nach Nikotingebrauch beinhalten. Raucher*innen sollen ermutigt werden, das Rauchen zu beenden und eine entsprechende Hilfestellung angeboten bekommen.</li>
                </ul>
                <h3>Fertilitätserhaltung</h3>
                <ul>
                    <li>Bei männlichen Patienten, bei denen ein Kinderwunsch besteht, soll vor Durchführung der kombinierten Radiochemotherapie eine Asservierung von Spermien diskutiert werden.</li>
                    <li>Bei prämenopausalen Patientinnen soll der mögliche Eintritt der Menopause, eine Beeinflussung der Fertilität und Maßnahmen zur Erhaltung der Fertilität besprochen werden.</li>
                </ul>
                <h3>Immunsuppression</h3>
                <ul>
                    <li>Bei HIV-positiven Patient*innen mit Analkarzinom sollen hinsichtlich prätherapeutischer und therapeutischer Maßnahmen die Empfehlungen der Deutsch-Österreichischen Leitlinie "Anale Dysplasien und Analkarzinome bei HIV-Infizierten: Prävention, Diagnostik, Therapie" berücksichtigt werden.</li>
                    <li>Bei iatrogen immunsupprimierten Patient*innen mit Analkarzinom soll eine interdisziplinäre Entscheidung hinsichtlich der Fortführung oder Umstellung des immunsuppressiven Regimes in individualisierter Adaptation getroffen werden.</li>
                    <li>Bei organtransplantierten Patient*innen sollten dabei insbesondere die folgenden Aspekte berücksichtigt werden:
                        <ul>
                            <li>Typ des transplantierten Organs</li>
                            <li>Zahl der Transplantationen</li>
                            <li>Inzidenz vorausgegangener Abstoßungen</li>
                            <li>Typ und Dosis bzw. Wirkspiegel der immunsuppressiven Medikation unter Beachtung des Metastasierungsrisikos, des myelodepressiven Nebenwirkungsprofils bei simultaner Gabe von Chemotherapeutika und des infektiologischen Risikos</li>
                        </ul>
                    </li>
                </ul>
                <h3>Stomaanlage</h3>
                <ul>
                    <li>Die Indikation zur Stomaanlage vor einer Radiochemotherapie in kurativer Intention soll zurückhaltend gestellt werden.</li>
                    <li>Patient*innen, bei denen eine Stomaanlage vor Therapiebeginn notwendig ist, sollen im interdisziplinären Tumorboard besprochen werden.</li>
                    <li>Die Stomaposition soll präoperativ angezeichnet werden.</li>
                </ul>
                <h3>Psychoonkologie</h3>
                <ul>
                    <li>Die psychoonkologische Versorgung von Patient*innen mit Analkarzinom und deren Angehörigen soll ambulant wie stationär den Empfehlungen der S3-Leitlinie "Psychoonkologische Diagnostik, Beratung und Behandlung von erwachsenen Krebspatienten" folgen.</li>
                    <li>Psychoonkologische Interventionen sollten entsprechend dem individuellen Bedarf in allen Sektoren der Versorgung sowie in allen Phasen der Erkrankung angeboten werden.</li>
                    <li>Die Erfassung der psychosozialen Belastung und der individuellen psychoonkologischen Behandlungsbedürftigkeit sollte so früh wie möglich und dann wiederholt im Krankheitsverlauf erfolgen.</li>
                    <li>Alle Patienten sollen ein Screening auf psychosoziale Belastungen erhalten. Ein psychoonkologisches Screening sollte frühestmöglich in angemessenen Abständen, wenn klinisch indiziert oder bei Veränderungen des Erkrankungsstatus eines Patienten (z.B. Wiederauftreten oder Fortschreiten der Erkrankung) wiederholt im Krankheitsverlauf durchgeführt werden.</li>
                    <li>Zur Erfassung der psychosozialen Belastung sollen validierte und standardisierte Screeninginstrumente eingesetzt werden. Als Screeninginstrumente werden zum Beispiel das Distress-Thermometer oder die HADS-D empfohlen.</li>
                    <li>Bei positivem Screening und/oder Patientenwunsch soll ein diagnostisches Gespräch zur Abklärung psychosozialer Belastungen und psychischer Komorbidität erfolgen.</li>
                    <li>Eine weiterführende diagnostische Abklärung sollte entsprechend der im Gespräch festgestellten individuellen Probleme im psychischen/sozialen/somatischen Bereich erfolgen.</li>
                    <li>Die Indikationsstellung für psychoonkologische Interventionen soll entsprechend dem nach den Empfehlungen festgestellten individuellen Bedarf, dem Setting sowie der Krankheitsphase des Patienten (Erstdiagnose, Operation, adjuvante Therapie, rezidivfreie Phase, Rezidivphase, palliative Phase) erfolgen und den Wunsch des Patienten berücksichtigen.</li>
                </ul>
                <h3>Sexualität</h3>
                <ul>
                    <li>Es sollen Aspekte der Sexualität und ihrer Beeinträchtigung thematisiert werden.</li>
                </ul>`
            },
            {
                title: "Therapie Stadium I-III",
                html: `<h3>Stadium I – Analrandkarzinom (T1-2 N0 M0)</h3>
                <ul>
                    <li>Analrandkarzinome mit einem Durchmesser <2 cm ohne regionale oder Fernmetastasen (Stadium I) sollen unter Berücksichtigung eines adäquaten Sicherheitsabstands (0,5 cm) lokal exzidiert werden.</li>
                    <li>Alternativ kann bei Analrandkarzinomen im Stadium IIA (T2N0M0) die Durchführung einer alleinigen Exzision mit adäquatem Sicherheitsabstand (0,5 cm) erwogen werden.</li>
                </ul>
                <h3>Stadium I – Analkanalkarzinom (T1 N0 M0)</h3>
                <ul>
                    <li>Analkanalkarzinome mit einem Durchmesser <2 cm ohne regionale oder Fernmetastasen (Stadium I) sollten mittels primärer kombinierter Radiochemotherapie behandelt werden.</li>
                    <li>Alternativ kann bei Analkanalkarzinomen mit einem Durchmesser <2 cm ohne regionale oder Fernmetastasen (Stadium I) eine alleinige R0-Exzision erwogen werden.</li>
                    <li>Bei älteren oder multimorbiden Patient*innen mit Analkanalkarzinom mit einem Durchmesser <2 cm ohne regionale oder Fernmetastasen (Stadium I) kann anstatt einer kombinierten Radiochemotherapie die Durchführung einer alleinigen Radiotherapie erwogen werden.</li>
                    <li>Zur Behandlung lokalisierter Analkanalkarzinome (Stadium I) nach inkompletter Exzision soll eine kombinierte Radiochemotherapie durchgeführt werden.</li>
                    <li>Alternativ kann zur Behandlung lokalisierter Analkanalkarzinome (Stadium I) nach inkompletter Exzision eine Nachexzision erwogen werden.</li>
                </ul>
                <h3>Stadium II-III</h3>
                <ul>
                    <li>Analkarzinome der Stadien II-III sollen mit einer kombinierten Radiochemotherapie behandelt werden.</li>
                    <li>Bei Kontraindikationen gegen die Durchführung einer Radiochemotherapie oder Radiotherapie soll die primäre operative Therapie des Analrand- oder Analkanalkarzinoms erfolgen.</li>
                </ul>
                <h3>Chemotherapie</h3>
                <ul>
                    <li>Im Rahmen der kombinierten Radiochemotherapie sollen Analkarzinome der Stadien II-III mit einem Chemotherapie-Regime aus Mitomycin und 5-FU behandelt werden.</li>
                    <li>Im Rahmen der kombinierten Radiochemotherapie zur Behandlung von Analkarzinomen der Stadien II-III kann alternativ zu einem Chemotherapie-Regime aus Mitomycin und 5-FU ein Chemotherapie-Regime aus Cisplatin und 5-FU erwogen werden.</li>
                    <li>Im Rahmen einer kombinierten Radiochemotherapie mit einem Chemotherapie-Regime aus Mitomycin und 5-FU kann 5-FU durch Capecitabin ersetzt werden.</li>
                    <li>Im Rahmen der kombinierten Radiochemotherapie soll keine Induktionschemotherapie durchgeführt werden.</li>
                    <li>Im Rahmen der kombinierten Radiochemotherapie soll keine Erhaltungschemotherapie durchgeführt werden.</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li>Im Rahmen der kombinierten Radiochemotherapie soll die Dosis der Radiotherapie nicht mehr als 59,4 Gy betragen.</li>
                    <li>Im Rahmen der kombinierten Radiochemotherapie soll die Bestrahlung mittels Intensitäts-modulierter Radiotherapie (IMRT) erfolgen.</li>
                    <li>Die Radiotherapie soll im Rahmen der Radiochemotherapie in kontinuierlicher Form, ohne geplante Therapiepausen, erfolgen.</li>
                    <li>Im Rahmen der Radiochemotherapie soll ein stadienabhängiger Bestrahlungsboost erfolgen.</li>
                </ul>`
            },
            {
                title: "Responsebeurteilung",
                html: `<h3>Klinische Untersuchung</h3>
                <ul>
                    <li>Zur Response-Evaluation nach kombinierter Radiochemotherapie soll eine klinische Untersuchung (digital-rektale Untersuchung, Proktoskopie) 11 Wochen, 18 Wochen und 26 Wochen nach Beginn der Radiochemotherapie erfolgen.</li>
                </ul>
                <h3>Weiterführende Diagnostik</h3>
                <ul>
                    <li>Die Indikation zur Durchführung weiterführender Diagnostik (Gewebeprobe mit histopathologischer Untersuchung, weiterführende Bildgebung) soll bei V.a. residuellen lokalen Tumorbefund (stabiler Befund, reduzierter aber persistierender Lokalbefund) frühestens 26 Wochen nach Beginn der kombinierten Radiochemotherapie gestellt werden.</li>
                    <li>Bei vollständiger klinischer Response soll keine Biopsie zur histopathologischen Bestätigung des Ansprechens erfolgen.</li>
                    <li>Bei klinisch nachgewiesenem Progress (z.B. Größenprogression) des lokalen Tumorbefundes soll die weiterführende Diagnostik bereits vor Ablauf der genannten 26 Wochen nach Beginn der Radiochemotherapie erfolgen und ggf. weiterführende therapeutische Maßnahmen eingeleitet werden.</li>
                    <li>Bei klinisch kompletter Remission 26 Wochen nach Beginn der Radiochemotherapie sollte eine MRT des Beckens zur Befundbestätigung und als Ausgangsbefund für die Nachsorge durchgeführt werden.</li>
                    <li>Bei Verdacht auf Progress sowie bei auffälligen Befunden 26 Wochen nach Beginn der Radiochemotherapie soll zur Abklärung und Sicherung eine histopathologische Untersuchung erfolgen, und die weiterführende Bildgebung sollte mittels PET/CT erfolgen. Zur Beurteilung des auffälligen Lokalbefundes soll, insbesondere in Bezug auf eine mögliche Salvage-Operation, eine MRT des Beckens durchgeführt werden.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Allgemeines</h3>
                <ul>
                    <li>Allen Patient*innen mit Analkarzinom soll nach einer Behandlung in kurativer Intention eine protokollgesteuerte Nachsorge angeboten werden, nach Radiochemotherapie in Teams aus der klinischen Onkologie/Radiotherapie und der koloproktologischen Chirurgie/Proktologie.</li>
                    <li>Die Nachsorge sollte über einen Zeitraum von fünf Jahren erfolgen.</li>
                    <li>Die Nachsorgeuntersuchungen sollen die Anamnese, klinisch-instrumentelle und bildgebende Untersuchungen umfassen; dabei kann das risikoadaptierte Nachsorgeschema angewandt werden.</li>
                </ul>
                <h3>Nachsorgeschema</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Monate nach Therapieabschluss</th>
                                <th>Untersuchungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3, 6, 9, 12, 15, 18, 21, 24</td>
                                <td>Anamnese, klinische Untersuchung inkl. inguinale Palpation und digital-rektaler Untersuchung</td>
                            </tr>
                            <tr>
                                <td>3, 6, 9, 12, 15, 18, 21, 24</td>
                                <td>Proktoskopie und ggf. Rektoskopie</td>
                            </tr>
                            <tr>
                                <td>12, 24, 36</td>
                                <td>MRT Becken</td>
                            </tr>
                            <tr>
                                <td>12, 24</td>
                                <td>CT-Thorax und -Abdomen mit Kontrastmittel</td>
                            </tr>
                            <tr>
                                <td>30, 42, 48, 54, 60</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p>Untersuchungen in Klammern sind für Patient*innen mit erhöhtem Risiko empfohlen. Dies umfasst alle Patient*innen mit Analkarzinom ab Stadium IIB sowie stadienunabhängig alle HIV-positiven und anderweitig immunkompromittierten Patient*innen.</p>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Stuhlkontinenz-Beurteilung</li>
                    <li>Psychoonkologische Betreuung</li>
                    <li>Beratung zu Sexualität und Funktionsstörungen</li>
                </ul>`
            },
            {
                title: "Rezidivtherapie",
                html: `<h3>Allgemeines</h3>
                <ul>
                    <li>Bei Residual- oder Rezidivtumor nach primärer Therapie soll die weitere Behandlungsplanung im Rahmen eines interdisziplinären Tumorboards erfolgen.</li>
                </ul>
                <h3>Lokales Rezidiv nach Radiochemotherapie</h3>
                <ul>
                    <li>Bei Residual- oder Rezidivtumor im Bereich des Primarius (anal/perianal) nach primärer Radiochemotherapie ohne Nachweis einer Fernmetastasierung soll in kurativer Intention die chirurgische Resektion durchgeführt werden.</li>
                    <li>Bei residuellen oder rezidivierenden oder de novo entstandenen lokoregionären Lymphknotenmetastasen (inguinal/iliakal) nach primärer Radiochemotherapie ohne Nachweis einer Fernmetastasierung soll in kurativer Intention die Resektion der betroffenen Lymphknoten evaluiert und nach Möglichkeit durchgeführt werden.</li>
                    <li>Bei Residual- oder Rezidivtumor im Bereich des Primarius und simultanen lokoregionären Lymphknotenmetastasen nach primärer Radiochemotherapie ohne Nachweis einer Fernmetastasierung soll in kurativer Intention die abdominoperineale Rektumexstirpation, ggf. mit erweiterter multiviszeraler Resektion und entsprechender Defektdeckung und die Resektion der betroffenen Lymphknoten evaluiert und nach Möglichkeit durchgeführt werden.</li>
                </ul>
                <h3>Palliative Situation</h3>
                <ul>
                    <li>Patient*innen mit nicht R0-resektablem Residual- oder Rezidivtumor nach primärer Radiochemotherapie soll ein individuelles palliatives Therapiekonzept angeboten werden.</li>
                    <li>Patient*innen mit lokoregionärem Rezidivtumor nach primärer chirurgischer Resektion sollen wie therapie-naive Patient*innen mit Analkarzinom behandelt werden.</li>
                </ul>`
            },
            {
                title: "Metastasierte Therapie",
                html: `<h3>Allgemeines</h3>
                <ul>
                    <li>Bei metastasiertem Analkarzinom im Stadium IV (Fernmetastasen) soll die weitere Behandlungsplanung im Rahmen eines interdisziplinären Tumorboards erfolgen.</li>
                </ul>
                <h3>Systemtherapie</h3>
                <ul>
                    <li>Bei metastasiertem Analkarzinom im Stadium IV (Fernmetastasen) kann eine Platin-basierte Chemotherapie erwogen werden.</li>
                </ul>
                <h3>Lokale Therapie</h3>
                <ul>
                    <li>Bei synchron metastasiertem Analkarzinom im Stadium IV (Fernmetastasen) kann in Abhängigkeit von der Tumorlast und Symptomatik eine additive lokale Therapie für den Primärtumor erwogen werden.</li>
                    <li>Bei oligometastasiertem Analkarzinom kann die lokale Behandlung von Metastasen im Rahmen eines multimodalen Vorgehens erwogen werden.</li>
                </ul>`
            },
            {
                title: "Palliativversorgung",
                html: `<h3>Allgemeine und spezialisierte Palliativversorgung</h3>
                <ul>
                    <li>Die allgemeine und spezialisierte Palliativversorgung von Patient*innen mit Analkarzinom soll nach den Empfehlungen der S3-Leitlinie "Palliativmedizin für Patienten mit einer nicht heilbaren Krebserkrankung" erfolgen.</li>
                    <li>Allen Patienten mit einem Analkarzinom sollen unabhängig vom Krankheitsstadium Zugang zu Informationen über Palliativversorgung (z.B. durch Auslage von Flyern) haben.</li>
                </ul>
                <h3>Nicht-Heilbarkeit</h3>
                <ul>
                    <li>Die Nicht-Heilbarkeit bleibt eine prognostische Einschätzung, die individuell festzustellen ist. Beim Analkarzinom machen die folgenden Situationen das Vorliegen von Nicht-Heilbarkeit wahrscheinlich:
                        <ul>
                            <li>Stadium IV (ggf. mit Ausnahme von synchron oligometastasiertem, primär kurativ zu behandelndem Analkarzinom)</li>
                            <li>Progress oder Rezidiv nach Salvage-Rektumexstirpation</li>
                            <li>Progress oder Rezidiv nach inguinaler Lymphknotenresektion oder -dissektion</li>
                        </ul>
                    </li>
                </ul>
                <h3>Allgemeine Palliativversorgung</h3>
                <ul>
                    <li>Allen Patienten soll nach der Diagnose eines nicht-heilbaren Analkarzinoms Palliativversorgung angeboten werden, unabhängig davon, ob eine tumorspezifische Therapie durchgeführt wird.</li>
                    <li>Die allgemeine Palliativversorgung eines Patienten mit einem nicht-heilbaren Analkarzinom soll folgende Aufgabenfelder beinhalten:
                        <ul>
                            <li>Behandlung von Symptomen und Begleitung bei Problemen niedriger bis mittlerer Komplexität in allen vier Dimensionen (physisch, psychisch, sozial und spirituell)</li>
                            <li>Kommunikation</li>
                            <li>Therapiezielfindung</li>
                            <li>Koordination der Versorgung</li>
                            <li>Einbeziehung von spezialisierter Palliativversorgung (SPV), wenn indiziert</li>
                        </ul>
                    </li>
                </ul>
                <h3>Spezialisierte Palliativversorgung (SPV)</h3>
                <ul>
                    <li>Patienten soll nach der Diagnose eines nicht-heilbaren Analkarzinoms ein Bedarfsassessment durch ein spezialisiertes Palliativversorgungsteam (SPV-Team) angeboten werden.</li>
                    <li>Patienten mit einem nicht-heilbaren Analkarzinom und einer hohen Komplexität ihrer Situation sollen eine spezialisierte Palliativversorgung erhalten.</li>
                </ul>`
            },
            {
                title: "Rehabilitation",
                html: `<h3>Allgemeines</h3>
                <ul>
                    <li>Allen Patient*innen mit einem Analkarzinom soll noch vor Abschluss der operativen und/oder strahlentherapeutischen Maßnahmen eine onkologische Rehabilitation als Anschlussrehabilitation (AHB) angeboten werden.</li>
                    <li>Eine Chemotherapie muss zum Beginn der AHB nicht abgeschlossen sein, sondern kann während der Rehabilitation fortgesetzt werden.</li>
                    <li>Patient*innen mit Analkarzinom, welche mittels lokaler Exzision im Gesunden kurativ behandelt wurden, kann eine onkologische Rehabilitation als Anschlussrehabilitation angeboten werden.</li>
                </ul>
                <h3>Inhalte der Rehabilitation</h3>
                <ul>
                    <li>Erfassung aller wichtigen Daten zur Erkrankung und Begleiterkrankungen sowie zu den durchgeführten diagnostischen und therapeutischen Maßnahmen</li>
                    <li>Diagnostik der Funktionsstörungen (nach ICF)</li>
                    <li>Fortführung und Optimierung der medikamentösen Therapie der Grund- und Begleiterkrankungen, ggf. Fortsetzung auch der medikamentösen Tumortherapie</li>
                    <li>Training von Restfunktionen, Ausbildung von Kompensationsfähigkeiten</li>
                    <li>Information über die Erkrankung sowie die diagnostischen und therapeutischen Maßnahmen</li>
                    <li>Hilfe bei der Krankheitsverarbeitung</li>
                    <li>Beratung und auf Wunsch Kontaktaufnahme zu bestehenden ambulanten Netzwerken (Sozialsprengel, Selbsthilfegruppen, Pflegeinstitutionen, etc.)</li>
                    <li>Verhaltensmodifikation hin zur gesunden Lebensweise</li>
                    <li>Sozialmedizinische Beurteilung</li>
                    <li>Beratung in Hinblick auf berufliche Tätigkeit</li>
                    <li>Planung der Nachsorge</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Analkarzinom (Diagnostik, Therapie und Nachsorge von Analkanal- und Analrandkarzinomen). Kurzversion 1.1, November 2020. AWMF-Registernummer: 081/004OL. Leitlinienprogramm Onkologie.</p>"
    });
})();
