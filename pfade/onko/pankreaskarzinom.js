(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "pankreaskarzinom",
        module: "onko",
        title: "Pankreaskarzinom",
        name: "Pankreaskarzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Dritthäufigste krebsbedingte Todesursache in westlichen Ländern</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 7.-8. Lebensjahrzehnt</li>
                    <li>Männer etwas häufiger betroffen als Frauen</li>
                    <li>5-Jahres-Überleben ca. 8-10% (ungünstige Prognose)</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Risikofaktoren</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Lebensstil</strong></td>
                                <td>Rauchen (wichtigster vermeidbarer Risikofaktor), Adipositas, körperliche Inaktivität.</td>
                            </tr>
                            <tr>
                                <td><strong>Erkrankungen</strong></td>
                                <td>Chronische Pankreatitis, Diabetes mellitus (neu aufgetreten), Zysten (IPMN).</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Hereditäres Pankreaskarzinom-Syndrom (BRCA1/2, PALB2, CDKN2A, STK11), Lynch-Syndrom, FAMMM-Syndrom.</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Mindestens 2 Verwandte ersten Grades mit Pankreaskarzinom.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Standard-Bildgebung</h3>
                <ul>
                    <li><strong>Abdomensonographie:</strong> Initialer Bildgebungsmodalität, aber sensitivitätslimitiert für kleine Läsionen.</li>
                    <li><strong>Multiphasisches CT Abdomen:</strong> Standard für Diagnose und Staging. Kontrastmittel-gestützt in arterieller und portalvenöser Phase.</li>
                    <li><strong>MRT Abdomen:</strong> Alternative oder Ergänzung zum CT. Besonders geeignet bei CT-unklaren Befunden oder Kontraindikationen für jodhaltiges Kontrastmittel.</li>
                </ul>
                <h3>Spezielle Bildgebung</h3>
                <ul>
                    <li><strong>Endosonographie (EUS):</strong> Hochauflösende Darstellung des Pankreas. Ermöglicht Feinnadelpunktion (FNP) und Beurteilung von Gefäßinfiltration.</li>
                    <li><strong>CT Thorax:</strong> Standard für Metastasen-Ausschluss (Lungenmetastasen, mediastinale Lymphome).</li>
                    <li><strong>Laparoskopie:</strong> Diagnostisch bei primär resektablen Tumoren zum Ausschluss okkulter Peritonealkarzinose oder Lebermetastasen.</li>
                </ul>
                <h3>Additional Modalitäten</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Optional bei Verdacht auf Fernmetastasen oder zur Differenzierung von benignen/malignen Befunden.</li>
                    <li><strong>Endoskopisch retrograde Cholangiopankreatikographie (ERCP):</strong> Nicht primär diagnostisch, sondern therapeutisch bei Ikterus. Ermöglicht Zytologiegewinnung aus Gallengängen.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Tumormarker</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Marker</th>
                                <th>Bedeutung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>CA 19-9</strong></td>
                                <td>Wichtigster Tumormarker für Pankreaskarzinom. Nicht spezifisch (auch bei biliären Obstruktionen, Pankreatitis erhöht). Für Verlaufskontrolle und Rezidivdiagnostik geeignet.</td>
                            </tr>
                            <tr>
                                <td><strong>CEA</strong></td>
                                <td>Ergänzend zu CA 19-9. Weniger spezifisch, aber bei Kombination erhöhte Aussagekraft.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Standard-Labor</h3>
                <ul>
                    <li>Blutbild, Leber- und Nierenfunktion.</li>
                    <li>Entzündungsparameter (CRP, BSG).</li>
                    <li>Blutzucker (Diabetes mellitus als Risikofaktor und有时 Erstmanifestation).</li>
                    <li>Gerinnungsparameter (vor invasiven Eingriffen).</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Gewebsgewinnung</h3>
                <ul>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Unter EUS-Kontrolle (EUS-FNP). Standard für histologische Sicherung.</li>
                    <li><strong>Zytologie:</strong> Aus ERCP-Bürsten oder -Aspiraten. Geringere Sensitivität als FNP.</li>
                    <li><strong>Perkutane Punktion:</strong> Unter CT-Kontrolle bei distanten Metastasen (z.B. Leber).</li>
                </ul>
                <h3>Histopathologie</h3>
                <ul>
                    <li><strong>Adenokarzinom:</strong> Häufigster histologischer Subtyp (>90%).</li>
                    <li><strong>Andere Subtypen:</strong> Muzinöseszystisches Karzinom, IPMN-assoziiertes Karzinom, neuroendokrine Tumoren, Azinuszellkarzinom.</li>
                    <li><strong>Grading:</strong> G1 (differenziert) bis G3 (schlecht differenziert).</li>
                </ul>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li>CA19-9, CEA, CK7, CK19 positiv.</li>
                    <li>Differenzialdiagnose: neuroendokrine Marker (Chromogranin, Synaptophysin) negativ beim Adenokarzinom.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Keimbahntestung</h3>
                <ul>
                    <li><strong>Indikationen:</strong> Positive Familienanamnese (>2 Verwandte 1. Grades), junges Alter bei Diagnose (<50 Jahre), synchrone/metachrone Zweittumoren.</li>
                    <li><strong>Gene:</strong> BRCA1, BRCA2, PALB2, CDKN2A, STK11, MLH1, MSH2, MSH6 (Lynch-Syndrom).</li>
                    <li><strong>Beratung:</strong> Genetische Beratung vor Testung empfohlen.</li>
                </ul>
                <h3>Somatische Mutationsanalyse</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Gen/Mutation</th>
                                <th>Häufigkeit</th>
                                <th>Therapeutische Relevanz</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>KRAS</strong></td>
                                <td>~90%</td>
                                <td>Prognostisch ungünstig, z.T.experimentelle Therapien</td>
                            </tr>
                            <tr>
                                <td><strong>BRCA1/2</strong></td>
                                <td>~5-7%</td>
                                <td>PARP-Inhibitoren (Olaparib) als Erhaltungstherapie</td>
                            </tr>
                            <tr>
                                <td><strong>NRG1-Fusion</strong></td>
                                <td><1%</td>
                                <td>Zenocutumab (experimentell)</td>
                            </tr>
                            <tr>
                                <td><strong>NTRK-Fusion</strong></td>
                                <td><1%</td>
                                <td>TRK-Inhibitoren (Larotrectinib, Entrectinib)</td>
                            </tr>
                            <tr>
                                <td><strong>MSI-H/dMMR</strong></td>
                                <td><1%</td>
                                <td>Immun-Checkpoint-Inhibitoren</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Next-Generation Sequencing (NGS)</h3>
                <ul>
                    <li>Umfassendes Panel für umfangreiche Mutationsanalyse empfohlen.</li>
                    <li>Material: Tumor tissue oder liquid biopsy (bei fehlendem Gewebe).</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>TNM-Klassifikation</h3>
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
                                <td>IA</td>
                                <td>T1a/b</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td>IB</td>
                                <td>T2</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td>IIA</td>
                                <td>T3</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td>IIB</td>
                                <td>T1-3</td>
                                <td>N1</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td>III</td>
                                <td>T4</td>
                                <td>jedes N</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td>IV</td>
                                <td>jedes T</td>
                                <td>jedes N</td>
                                <td>M1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Resonktabilität</h3>
                <ul>
                    <li><strong>Resektabel:</strong> Keine arterielle Infiltration (AMS, A. hepatica, Truncus coeliacus), keine Veneninfiltrierung (V. portae, V. mesenterica superior).</li>
                    <li><strong>Borderline resektabel:</strong> Limitiert Veneninfiltrierung mit Möglichkeit zur Venenresektion; keine arterielle Infiltration.</li>
                    <li><strong>Lokal fortgeschritten:</strong> Ausgedehnte arterielle Infiltration oder Fernmetastasen.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li>CT Thorax-Abdomen-Becken (kontrastiert).</li>
                    <li>Bei Resektabilität: diagnostische Laparoskopie zum Ausschluss okkulter Metastasen.</li>
                    <li>MDT-Diskussion (Tumorboard) vor Therapieentscheidung.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Kephalische Duodenopankreatektomie (Kausch-Whipple):</strong> Standard bei Kopfprozess.</li>
                    <li><strong>Pankreaslinksresektion:</strong> Bei Tumoren im Korpus/Schwanzbereich.</li>
                    <li><strong>Totalpankreatektomie:</strong> Bei ausgedehnten Befunden.</li>
                    <li><strong>Venenresektion:</strong> Bei Gefäßinfiltration möglich.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Standard:</strong> FOLFIRINOX (5-FU, Folinsäure, Irinotecan, Oxaliplatin) bei gutem Allgemeinzustand.</li>
                    <li><strong>Alternative:</strong> Gemcitabin + Capecitabin.</li>
                    <li><strong>Bestrahlung:</strong> Keine Routine, ggf. bei R1-Situation.</li>
                </ul>
                <h3>Neoadjuvante Therapie</h3>
                <ul>
                    <li><strong>Borderline resektabel:</strong> FOLFIRINOX oder Gemcitabin/Nab-Paclitaxel gefolgt von Resektion.</li>
                    <li><strong>Lokal fortgeschritten:</strong> Systemtherapie mit Reevaluation der Resektabilität.</li>
                </ul>
                <h3>Palliative Systemtherapie</h3>
                <ul>
                    <li><strong>Erstlinie (ECOG 0-1):</strong> FOLFIRINOX oder Gemcitabin + Nab-Paclitaxel.</li>
                    <li><strong>Erstlinie (ECOG 2):</strong> Gemcitabin oder 5-FU-basiert.</li>
                    <li><strong>Zweitlinie:</strong> Nach Versagen FOLFOX oder 5-FU/Folinsäure.</li>
                    <li><strong>Bei BRCA-Mutation:</strong> Olaparib (Erhaltung nach Chemotherapie).</li>
                </ul>
                <h3>Supportive Maßnahmen</h3>
                <ul>
                    <li><strong>Biliäre Drainage:</strong> Bei Ikterus (endoskopisch oder perkutan).</li>
                    <li><strong>Duodenalstent:</strong> Bei Magenausgangsstenose.</li>
                    <li><strong>Pankreasenzymsubstitution:</strong> Bei exokriner Insuffizienz.</li>
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
                                <td>Anamnese, körperliche Untersuchung, Labor (CA 19-9), CT</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor (CA 19-9), CT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Diabetesscreening und -einstellung.</li>
                    <li>Ernährungsberatung und Pankreasenzymsubstitution.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Frühzeitige Integration der Palliativmedizin.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Exokrines Pankreaskarzinom. AWMF-Registernummer: 032-010OL. Leitlinienprogramm Onkologie.</p>"
    });
})();