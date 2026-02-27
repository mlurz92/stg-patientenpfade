(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hodentumoren",
        module: "onko",
        title: "Hodentumoren",
        name: "Hodentumoren",
        category: "onko-uro",
        stand: "11/20",
        sections: [
            {
                title: "Epidemiologie, Risikofaktoren, Screening, Prävention",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Bei Männern zwischen 20 und 44 Jahren ist ein Keimzelltumor (KZT) mit einem Anteil von etwa 25% die häufigste bösartige Tumorerkrankung.</li>
                    <li>Die Inzidenz der KZT ist in allen industrialisierten Ländern, auch in Deutschland, langfristig angestiegen und liegt aktuell in Deutschland bei 10 von 100.000 Männern.</li>
                    <li>Der KZT gehört zu den Tumorerkrankungen mit den höchsten Überlebenswahrscheinlichkeiten. Die Prognose der Patienten hängt im Wesentlichen von der Histologie, dem Tumorstadium, dem Alter und der Qualität der Versorgung ab.</li>
                    <li>Die stadienunabhängige 5-Jahres-Überlebenswahrscheinlichkeit liegt in Deutschland für Seminome bei 97,9% und für nichtseminomatöse KZT bei 94,9%.</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li>Anerkannte Risikofaktoren für die Entstehung von KZT sind:</li>
                    <li>Vorerkrankung mit einseitigem KZT</li>
                    <li>Maldeszensus testis (Kryptorchismus)</li>
                    <li>Familiäre positive Anamnese</li>
                    <li>Infertilität</li>
                </ul>
                <h3>Screening und Prävention</h3>
                <ul>
                    <li>Ein allgemeines Screening auf das Vorliegen eines KZT soll <strong>nicht</strong> durchgeführt werden.</li>
                    <li>Eine regelmäßige Selbstuntersuchung der Hoden sollte insbesondere jungen Männern empfohlen werden, da sie zu einer frühzeitigen Diagnosestellung führen kann.</li>
                    <li>Bei Vorhandensein von Risikofaktoren sollte das Vorliegen eines KZT abgeklärt werden.</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Keimzelltumoren (95%):</strong></li>
                    <li>Seminom (ca. 50%)</li>
                    <li>Nicht-seminomatöse Keimzelltumoren (NSGCT): Embryonalkarzinom, Dottersacktumor, Chorionkarzinom, Teratom</li>
                    <li><strong>Nicht-Keimzelltumoren (5%):</strong> Leydig-Zell-Tumor, Sertoli-Zell-Tumor</li>
                </ul>`
            },
            {
                title: "Pathologische Klassifikation und Diagnostik",
                html: `<h3>Pathologische Klassifikation</h3>
                <ul>
                    <li>Die histopathologische Beurteilung der KZT soll auf Grundlage der WHO Klassifikation von 2016 erfolgen.</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li>Bei klinischem Verdacht auf einen KZT sollen umgehend eine körperliche Untersuchung sowie eine beidseitige Hodensonographie mit mind. 7,5 MHz Schallkopf erfolgen.</li>
                    <li>Männer mit neu diagnostiziertem KZT sollen zur Ausbreitungsdiagnostik eine kontrastmittelgestützte CT von Abdomen/Becken und Thorax erhalten.</li>
                    <li>Die MRT des Abdomens/Beckens soll bei Männern mit neu diagnostiziertem KZT anstelle der CT bei Kontraindikationen gegen die Gabe von iodhaltigem Kontrastmittel eingesetzt werden.</li>
                    <li>Bei Patienten der schlechten Prognose-Gruppe nach IGCCCG sowie bei Patienten mit exzessiver Beta-hCG-Wert-Erhöhung sollte die Ausbreitungsdiagnostik um eine MRT des Schädels ergänzt werden.</li>
                    <li>Die FDG-PET/CT soll in der primären Ausbreitungsdiagnostik <strong>nicht</strong> routinemäßig eingesetzt werden.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li>Bei Patienten mit Verdacht auf einen KZT sollen <strong>vor der Ablatio testis</strong> die Serumtumormarker AFP, Beta-hCG und LDH bestimmt werden.</li>
                    <li>Postoperativ sollen bei Patienten mit präoperativ erhöhten Werten die Serumtumormarker alle 5-7 Tage bis zum Erreichen des Normalwertes kontrolliert werden.</li>
                </ul>
                <h3>Chirurgische Diagnostik</h3>
                <ul>
                    <li>Bei Verdacht auf einen KZT sollen eine inguinale Hodenfreilegung und bei Nachweis eines malignen Tumors eine Ablatio testis erfolgen.</li>
                    <li>Bei Vorliegen eines gesunden kontralateralen Hodens soll keine organerhaltende Exzision bei Vorliegen eines malignen KZT durchgeführt werden.</li>
                    <li>Bei Patienten mit bilateralem KZT, Tumor im Einzelhoden oder anderen benignen Tumoren soll eine organerhaltende Tumorexzision in Betracht gezogen werden.</li>
                </ul>
                <h3>Fertilitätserhalt</h3>
                <ul>
                    <li>Bei Verdacht auf einen KZT soll vor Therapiebeginn dem Patienten eine Kryokonservierung von Spermatozoen angeboten werden.</li>
                    <li>Patienten mit einer Azoospermie zum Zeitpunkt der geplanten Kryokonservierung soll eine bilaterale testikuläre Spermienextraktion (TESE) angeboten werden.</li>
                </ul>`
            },
            {
                title: "Stadieneinteilung und Prognose",
                html: `<h3>TNM-Klassifikation</h3>
                <ul>
                    <li>Für die Bestimmung der anatomischen Ausbreitung des KZT soll die aktuelle TNM-Klassifikation verwendet werden.</li>
                </ul>
                <h3>IGCCCG-Prognoseklassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Prognosegruppe</th>
                                <th>Kriterien (Seminom)</th>
                                <th>Kriterien (NSGCT)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Gut</strong></td>
                                <td>Alle Metastasen nur lymphatisch oder pulmonal + alle Tumormarker normal oder轻度 erhöht</td>
                                <td>AFP < 1000 ng/ml, HCG < 5000 IU/l, LDH < 1,5x Normal</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediär</strong></td>
                                <td>Nicht pulmonale viszerale Metastasen</td>
                                <td>AFP 1000-10000 ng/ml ODER HCG 5000-50000 IU/l ODER LDH 1,5-10x Normal</td>
                            </tr>
                            <tr>
                                <td><strong>Schlecht</strong></td>
                                <td>-</td>
                                <td>AFP > 10000 ng/ml ODER HCG > 50000 IU/l ODER LDH > 10x Normal ODER mediastinaler Primärtumor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Prognosefaktoren</h3>
                <ul>
                    <li>Beim nichtseminomatösen KZT ist die lymphovaskuläre Invasion (LVI+) der einzig prospektiv multivariat validierte Risikofaktor für das Auftreten von Rezidiven bei Patienten im klinischen Stadium I.</li>
                    <li>Beim Seminom korreliert die Tumorgröße positiv mit dem Auftreten von Rezidiven. Bei einer Tumorgröße unter 4 cm und fehlender stromaler Rete testis-Infiltration ist das Rezidivrisiko minimal (< 5%).</li>
                </ul>
                <h3>Überlebenswahrscheinlichkeiten</h3>
                <ul>
                    <li>Für Patienten mit einem KZT im Stadium I liegt die krebsspezifische 10-Jahres-Überlebenswahrscheinlichkeit bei 99,7% sowie die 10-Jahres-Gesamtüberlebenswahrscheinlichkeit bei 95-99%.</li>
                    <li>Die 5-Jahres-Überlebenswahrscheinlichkeiten beim metastasierten KZT:
                        <ul>
                            <li>Gute Prognosegruppe: 86-95%</li>
                            <li>Intermediäre Prognosegruppe: 72-85%</li>
                            <li>Schlechte Prognosegruppe: 48-64%</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Therapie des Seminoms",
                html: `<h3>Seminom Stadium I</h3>
                <ul>
                    <li>Alle Therapieoptionen (Überwachung, adjuvante Chemotherapie mit Carboplatin, adjuvante Strahlentherapie) erreichen die gleichen Überlebensraten.</li>
                    <li>Patienten mit Seminom im Stadium I sollen mit der Überwachungsstrategie nachbeobachtet und im Falle eines Rezidivs stadiengerecht therapiert werden.</li>
                    <li>Bei Patienten mit einem Tumordurchmesser > 4 cm kann im Einzelfall eine adjuvante Therapie erwogen werden.</li>
                    <li>Als adjuvante Therapie kommen 1-2 Zyklen Carboplatin (dosiert nach AUC 7) oder alternativ eine Strahlentherapie der Paraaortalregion mit 20 Gy in Frage.</li>
                </ul>
                <h3>Seminom Stadium IIA/IIB</h3>
                <ul>
                    <li>Patienten mit Seminom im Stadium cSIIA sollen entweder eine Strahlentherapie oder eine Chemotherapie mit drei Zyklen PEB erhalten.</li>
                    <li>Patienten mit Seminom im Stadium cSIIB sollen eine Chemotherapie mit drei Zyklen PEB erhalten.</li>
                    <li>Alternativ kann eine Strahlentherapie durchgeführt werden.</li>
                    <li>Eine Strahlentherapie bei Patienten mit Seminom im Stadium cSIIA soll mit 30 Gy Gesamtdosis und im Stadium cSIIB mit 36 Gy Gesamtdosis erfolgen.</li>
                </ul>
                <h3>Seminom Stadium IIC/III</h3>
                <ul>
                    <li>Patienten mit einem metastasierten Seminom im Stadium IIC/III und guter Prognose sollen drei Zyklen PEB Chemotherapie erhalten.</li>
                    <li>Bei Kontraindikation für Bleomycin sollen vier Zyklen EP Chemotherapie erhalten werden.</li>
                    <li>Patienten mit einem metastasierten Seminom und intermediärer Prognose sollen vier Zyklen PEB Chemotherapie erhalten.</li>
                    <li>Bei Kontraindikationen gegen Bleomycin sollen vier Zyklen PEI Chemotherapie erhalten werden.</li>
                </ul>`
            },
            {
                title: "Therapie des Nicht-Seminoms",
                html: `<h3>Nicht-seminomatöser KZT Stadium I</h3>
                <ul>
                    <li>Die lymphovaskuläre Invasion von Tumorzellen im Primärtumor ist der wichtigste Risikofaktor für eine okkulte retroperitoneale Metastasierung.</li>
                    <li>In der Niedrigrisiko-Situation (ohne lymphovaskuläre Invasion) beträgt das Risiko einer okkulten Metastasierung etwa 15%, in der Hochrisiko-Situation bis zu 50%.</li>
                    <li>In der Niedrigrisiko-Situation soll die Überwachung favorisiert werden.</li>
                    <li>In der Hochrisiko-Situation sollten die Therapiemodalitäten ein Zyklus PEB versus Überwachung mit dem Patienten besprochen werden.</li>
                </ul>
                <h3>Nicht-seminomatöser KZT Stadium IIA/IIB</h3>
                <ul>
                    <li>Patienten mit gesichertem nichtseminomatösen KZT im cSIIA/B sollen analog der IGCCCG-Prognosegruppe mittels Chemotherapie (drei bis vier Zyklen PEB) und bei Vorhandensein eines Residualtumors mit RTR behandelt werden.</li>
                    <li>Initial im Orchiektomiepräparat als 100% Teratom klassifizierte KZT ohne Markererhöhung sollen mittels RLA behandelt werden.</li>
                    <li>Bei Serumtumormarker-negativem nichtseminomatösen KZT im cSIIA sollte zunächst eine Überwachung oder alternativ eine diagnostische RLA erfolgen.</li>
                </ul>
                <h3>Metastasierter nichtseminomatöser KZT</h3>
                <ul>
                    <li>Patienten mit metastasiertem nichtseminomatösen KZT im Stadium IIC/III und guter Prognose sollen drei Zyklen PEB Chemotherapie erhalten.</li>
                    <li>Bei Kontraindikationen gegen Bleomycin sollten vier Zyklen EP Chemotherapie erfolgen.</li>
                    <li>Patienten mit intermediärer Prognose sollen vier Zyklen PEB Chemotherapie erhalten.</li>
                    <li>Patienten mit schlechter Prognose sollen vier Zyklen PEB Chemotherapie erhalten.</li>
                </ul>
                <h3>Standard-Chemotherapie-Protokolle</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Protokoll</th>
                                <th>Zusammensetzung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>PEB (BEP)</strong></td>
                                <td>Bleomycin, Etoposid, Cisplatin (Standard)</td>
                            </tr>
                            <tr>
                                <td><strong>EP</strong></td>
                                <td>Etoposid, Cisplatin (bei Kontraindikation gegen Bleomycin)</td>
                            </tr>
                            <tr>
                                <td><strong>PEI (VIP)</strong></td>
                                <td>Cisplatin, Etoposid, Ifosfamid</td>
                            </tr>
                            <tr>
                                <td><strong>TIP</strong></td>
                                <td>Paclitaxel, Ifosfamid, Cisplatin (Salvage-Therapie)</td>
                            </tr>
                            <tr>
                                <td><strong>GOP</strong></td>
                                <td>Gemcitabin, Oxaliplatin, Paclitaxel (bei refraktären Tumoren)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Restaging und Residualtumortherapie",
                html: `<h3>Restaging nach Chemotherapie</h3>
                <ul>
                    <li>Die FDG-PET/CT kann bei Seminom-Patienten mit Residualtumoren > 3 cm nach Chemotherapie eingesetzt werden.</li>
                    <li>Der Zeitpunkt der FDG-PET/CT soll frühestens sechs Wochen nach dem Ende des letzten Zyklus der Chemotherapie liegen.</li>
                    <li>Eine RTR nach Abschluss der Primärtherapie eines metastasierten Seminoms sollte <strong>nicht</strong> durchgeführt werden.</li>
                    <li>Die FDG-PET/CT sollte bei Patienten mit einem nichtseminomatösen KZT <strong>nicht</strong> eingesetzt werden.</li>
                </ul>
                <h3>Residualtumorresektion beim NSGCT</h3>
                <ul>
                    <li>Nach Abschluss der primären Chemotherapie und dem Erreichen einer Markernormalisierung bei Patienten mit einem nichtseminomatösen KZT sollen Residualtumore > 1cm im Retroperitoneum und der Lunge reseziert werden.</li>
                    <li>Residualmetastasen in der Lunge mit der Größe über 1 cm sollen operativ entfernt werden.</li>
                    <li>Eine RTR soll an Zentren mit ausgewiesener Erfahrung durchgeführt werden.</li>
                    <li>Die retroperitoneale RTR sollte vorzugsweise als nervschonende Operation durchgeführt werden.</li>
                    <li>Die alleinige Resektion des Tumors (sogenannte Lumpektomie) sollte <strong>nicht</strong> durchgeführt werden.</li>
                </ul>
                <h3>Besondere Situationen</h3>
                <ul>
                    <li>Bei tumorbedingter Hydronephrose soll vor Einleitung der Chemotherapie eine Entlastung erfolgen.</li>
                    <li>Bei Patienten mit eingeschränkter Nierenfunktion soll Cisplatin nicht generell durch Carboplatin ersetzt werden.</li>
                    <li>Eine Carboplatin-basierte Chemotherapie geht mit erhöhten Rezidivraten einher und sollte daher begründeten Einzelfällen vorbehalten bleiben.</li>
                </ul>`
            },
            {
                title: "Therapierefraktäre Tumoren und Rezidive",
                html: `<h3>Rezidivtherapie nach Stadium I</h3>
                <ul>
                    <li>Patienten mit Rezidiv eines Seminoms nach initialem Stadium I sollen entsprechend ihrem Stadium analog zu primär metastasierten Seminomen nach den IGCCCG-Kriterien klassifiziert und therapiert werden.</li>
                    <li>Patienten mit Rezidiv eines nichtseminomatösen KZT nach initialem Stadium I sollen entsprechend ihres Stadiums analog zu primär metastasierten nichtseminomatösen KZT klassifiziert und therapiert werden.</li>
                </ul>
                <h3>Salvage-Chemotherapie</h3>
                <ul>
                    <li>Patienten mit Rezidiv nach Cisplatin-basierter Kombinationschemotherapie können eine konventionell-dosierte Chemotherapie nach dem TIP- oder PEI-Schema erhalten.</li>
                    <li>Patienten sollten eine primäre Salvage-Chemotherapie mittels sequentieller Hochdosis-Chemotherapie mit drei Zyklen HD-CE (Carboplatin + Etoposid) und autologem Stammzellsupport erhalten.</li>
                </ul>
                <h3>Besondere Rezidivsituationen</h3>
                <ul>
                    <li>Bei Patienten mit Serumtumormarker-negativem Spätrezidiv, bei denen eine komplette Resektabilität möglich erscheint, soll eine primäre Resektion durchgeführt werden.</li>
                    <li>Bei nicht resektablem Spätrezidiv sollte primär eine Chemotherapie durchgeführt und sekundär die Resektion angestrebt werden.</li>
                    <li>Patienten mit Erkrankungsrückfall bzw. mit Progress nach mehrfachen Chemotherapien sollen eine Kombinationschemotherapie mit GOP (Gemcitabin, Oxaliplatin +/- Paclitaxel) angeboten bekommen.</li>
                </ul>
                <h3>Metastasen im Rezidiv</h3>
                <ul>
                    <li>Bei Patienten mit Hirnmetastasen im Rezidiv sollte eine Hochdosis-Chemotherapie durchgeführt werden.</li>
                    <li>Bei singulären Residuen nach Salvage-Chemotherapie sollen eine stereotaktische Bestrahlung und/oder neurochirurgische Resektion von Hirnmetastasen durchgeführt werden.</li>
                    <li>Bei multiplen Residuen soll eine Bestrahlung des gesamten Hirnschädels durchgeführt werden.</li>
                </ul>`
            },
            {
                title: "Sonderformen",
                html: `<h3>Spermatocytischer Tumor</h3>
                <ul>
                    <li>Der Spermatocytische Tumor (ehemals Spermatocytisches Seminom) ist ein sehr seltener Tumor, der vom klassischen Seminom abzugrenzen ist.</li>
                    <li>Der auf den Hoden begrenzte reine Spermatocytische Tumor ist ein Tumor mit guter Prognose, der mit der inguinalen Ablatio testis und Überwachung ausreichend therapiert ist.</li>
                    <li>Das Vorhandensein von sarkomatösen Elementen bedeutet eine hochmaligne Transformation mit schlechter Prognose und erfordert ein multimodales Therapiekonzept.</li>
                </ul>
                <h3>Extragonadale KZT</h3>
                <ul>
                    <li>5% aller KZT des Mannes treten primär extragonadal auf.</li>
                    <li>Die Diagnose eines extragonadalen KZT soll nur bei fehlender eindeutiger Serumtumormarkerkonstellation histologisch gesichert werden.</li>
                    <li>Alle Patienten mit einem mediastinalen nichtseminomatösen extragonadalen KZT werden in die schlechte Prognosegruppe eingestuft.</li>
                    <li>Aufgrund der sehr schlechten Prognose sollte primär eine Hochdosis-Chemotherapie gewählt werden.</li>
                </ul>
                <h3>Leydigzell- und Sertolizelltumoren</h3>
                <ul>
                    <li>Bei Verdacht auf einen Leydigzelltumor oder Sertolizelltumor sollen Serumtumormarker sowie eine vollständige endokrinologische Abklärung erfolgen.</li>
                    <li>Bei kleinen Tumoren (< 2 cm) ohne Malignitätskriterien soll primär organerhaltend operiert werden.</li>
                    <li>Bei Nachweis von malignen Leydigzell- oder Sertolizelltumoren sollte eine Ablatio testis durchgeführt werden.</li>
                </ul>
                <h3>Maligne somatische Transformation</h3>
                <ul>
                    <li>Bei Nachweis einer malignen somatischen Transformation im klinischen Stadium I soll eine RLA durchgeführt werden.</li>
                    <li>Im metastasierten Tumorstadium soll zunächst eine KZT-basierte Chemotherapie gefolgt von einer RLA durchgeführt werden.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge-Strategie</h3>
                <ul>
                    <li>Die MRT Abdomen/Becken sollte die CT Abdomen/Becken im Rahmen der Nachsorge ersetzen, wenn diese an Zentren mit ausgewiesener Erfahrung durchgeführt wird.</li>
                </ul>
                <h3>Nachsorge Schema Gruppe 1: Mit lokaler Therapie im Retroperitoneum</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Jahr</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Termine/Jahr</td>
                                <td>4</td>
                                <td>4</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CT Abdomen</td>
                                <td>12</td>
                                <td>24</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Sonographie Abdomen</td>
                                <td>6</td>
                                <td>18</td>
                                <td>36</td>
                                <td>48</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Röntgen Thorax</td>
                                <td>6+12</td>
                                <td>18+24</td>
                                <td>36</td>
                                <td>48</td>
                                <td>60</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Nachsorge Schema Gruppe 2: Ohne lokale Therapie im Retroperitoneum</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Jahr</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Termine/Jahr</td>
                                <td>4</td>
                                <td>4</td>
                                <td>2</td>
                                <td>2</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CT Abdomen</td>
                                <td>6+12</td>
                                <td>24</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Röntgen Thorax</td>
                                <td>6+12</td>
                                <td>18+24</td>
                                <td>36</td>
                                <td>48</td>
                                <td>60</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Nachsorge Schema Gruppe 3A: Seminom Stadium I unter Überwachung</h3>
                <ul>
                    <li>CT Abdomen: Monat 6+12, 18+24</li>
                    <li>Sonographie Abdomen: Monat 3+9, 15+21, 30+36, 48, 60</li>
                    <li>Röntgen Thorax: Monat 6+12, 18+24, 36, 48, 60</li>
                </ul>
                <h3>Nachsorge Schema Gruppe 3B: NSGCT Stadium I Niedrig-Risiko unter Überwachung</h3>
                <ul>
                    <li>CT Abdomen: Monat 4+12</li>
                    <li>Sonographie Abdomen: Monat 24, 36, 48, 60</li>
                    <li>Röntgen Thorax: Monat 6+12, 18+24, 30+36, 48, 60</li>
                </ul>`
            },
            {
                title: "Toxizität, Supportivtherapie und Spätfolgen",
                html: `<h3>Akuttoxizität</h3>
                <ul>
                    <li>Auftretende Akuttoxizitäten bei der Therapie sollten systematisch erfasst und geeignete therapeutische Maßnahmen ergriffen werden.</li>
                    <li>Wachstumsfaktoren sollten bei PEB als Sekundärprophylaxe nach vorangegangenem neutropenen Fieber eingesetzt werden.</li>
                    <li>Bei Einsatz des PEI-Regimes soll ein myeloischer Wachstumsfaktor (G-CSF) primär prophylaktisch eingesetzt werden.</li>
                    <li>Während der Phase der cisplatinhaltigen Chemotherapie sollte zur Senkung des Risikos für thromboembolische Ereignisse eine Thromboembolieprophylaxe mit niedermolekularem Heparin erfolgen.</li>
                </ul>
                <h3>Fertilität</h3>
                <ul>
                    <li>Einschränkungen der Fertilität sind bei KZT-Patienten nach Strahlen- oder Chemotherapie im Vergleich zur normalen männlichen Bevölkerung häufig.</li>
                    <li>Das Risiko für einen klinisch relevanten Hypogonadismus ist beim Patienten mit KZT vorhanden.</li>
                    <li>Das Abfragen von Symptomen und die Bestimmung der Testosteron- und LH-Spiegel sollen Bestandteil der Diagnostik, Therapie und Nachsorge sein.</li>
                    <li>Die Strahlentherapie bei GCNIS führt zur Sterilität.</li>
                </ul>
                <h3>Spättoxizität</h3>
                <ul>
                    <li>Nach lokaler Strahlentherapie mit 18-20 Gy kann in 30% der Fälle langfristig ein Hypogonadismus entstehen.</li>
                    <li>In der Nachsorge spielen die Untersuchung und gegebenenfalls Behandlung von therapiebedingten Spätfolgen und Langzeittoxizitäten eine zentrale Rolle.</li>
                    <li>Langzeitfolgen überwachen: kardiovaskuläres Risiko, Zweittumoren, Hypogonadismus</li>
                </ul>
                <h3>Lebensqualität und Rehabilitation</h3>
                <ul>
                    <li>Bei Patienten mit KZT sollten Daten zur Lebensqualität vor Beginn einer Therapie und im weiteren Verlauf erfasst werden.</li>
                    <li>Für die Erfassung der Lebensqualität existiert der EORTC QLQ-TC 26 Fragebogen.</li>
                    <li>Allen rehabilitationsfähigen Patienten soll eine Anschlussrehabilitation (AHB) angeboten werden.</li>
                </ul>`
            },
            {
                title: "Versorgungsqualität und Palliativmedizin",
                html: `<h3>Versorgungsqualität</h3>
                <ul>
                    <li>Patienten mit einem metastasierten KZT der schlechten Prognosegruppe nach IGCCCG sollen an Zentren mit ausgewiesener Erfahrung behandelt werden.</li>
                    <li>Patienten mit KZT mit postchemotherapeutischen Residualtumoren sollen nur nach vorheriger multidisziplinärer Abstimmung an Zentren mit ausgewiesener Erfahrung eine RTR erhalten.</li>
                    <li>Patienten mit fortgeschrittener/metastasierter KZT-Erkrankung sollten bevorzugt durch multidisziplinäre Teams an Zentren mit ausgewiesener Erfahrung behandelt werden.</li>
                </ul>
                <h3>Palliativmedizin</h3>
                <ul>
                    <li>Zeigt sich im Krankheitsverlauf, dass die Erkrankung nicht mehr heilbar ist, sollen der Patient und bei Bedarf seine Angehörigen frühzeitig über Möglichkeiten der Palliativversorgung informiert werden.</li>
                    <li>Das niederschwellige Angebot einer psychosozialen Beratung, Begleitung und Behandlung sollte allen Betroffenen und ihren Angehörigen in jeder Phase der Erkrankung zur Verfügung stehen.</li>
                </ul>
                <h3>Besondere Patientengruppen</h3>
                <ul>
                    <li>Patienten mit aktiver HIV-Erkrankung sollen vor Einleitung einer Chemotherapie eine suffiziente antiretrovirale Therapie erhalten.</li>
                    <li>Eine aktive HIV-Erkrankung stellt keine Kontraindikation gegen eine stadiengerechte Chemotherapie dar.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge der Keimzelltumoren des Hodens. AWMF-Registernummer: 043/049OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Version 1.1, Februar 2020.</p>"
    });
})();
