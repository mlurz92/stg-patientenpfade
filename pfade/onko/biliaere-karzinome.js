(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA =[];
    window.SOP_DATA.push({
        id: "biliaere-karzinome",
        module: "onko",
        title: "Biliäre Karzinome (CCA/GBC)",
        name: "Biliäre Karzinome (CCA/GBC)",
        category: "onko-gi",
        stand: "06/2025",
        sections:[
            {
                title: "1. Definition & Risikofaktoren",
                html: `<h3>Anatomische Einteilung</h3>
                <ul>
                    <li><strong>iCCA (Intrahepatisches Cholangiokarzinom):</strong> Entstehung proximal der sekundären Gallengangsaufzweigungen in der Leber.</li>
                    <li><strong>pCCA (Perihiläres Cholangiokarzinom):</strong> "Klatskin-Tumor", Lokalisation zwischen den sekundären Aufzweigungen der Ductus hepatici und dem Abgang des Ductus cysticus.</li>
                    <li><strong>dCCA (Distales Cholangiokarzinom):</strong> Lokalisation zwischen Ductus cysticus und Papilla vateri.</li>
                    <li><strong>GBC (Gallenblasenkarzinom):</strong> Maligne Neoplasie der Gallenblase.</li>
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
                                <td><strong>Biliäre Erkrankungen</strong></td>
                                <td>Primär sklerosierende Cholangitis (PSC), Choledochuszysten, Hepatolithiasis, Gallenblasenpolypen, Porzellangallenblase, chronisch bakterielle Cholangitis.</td>
                            </tr>
                            <tr>
                                <td><strong>Infektionen</strong></td>
                                <td>Chronische Hepatitis B und C, parasitäre Cholangitiden (Leberegel: C. sinensis, O. viverrini).</td>
                            </tr>
                            <tr>
                                <td><strong>Metabolisch / Lebensstil</strong></td>
                                <td>Leberzirrhose, MASLD / MASH (Fettlebererkrankung), Diabetes mellitus, Adipositas, Rauchen, Alkoholabusus.</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch (Neu 2025)</strong></td>
                                <td><strong>Lynch-Syndrom</strong> und <strong>BRCA-Keimbahnmutationen</strong>.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Prävention und Früherkennung</h3>
                <ul>
                    <li><strong>PSC-Patienten:</strong> Halbjährliche Bildgebung zur CCA-Früherkennung. Bei Gallenblasenpolypen &ge; 8 mm oder Größenprogredienz Indikation zur Cholezystektomie evaluieren.</li>
                    <li><strong>Ohne PSC:</strong> Cholezystektomie bei Gallenblasenpolypen &ge; 10 mm unabhängig von der Symptomatik. Bei Polypen &lt; 9 mm sonografische Kontrollen nach 6 bis 12 Monaten.</li>
                </ul>`
            },
            {
                title: "2. Diagnostik, Typisierung & Staging",
                html: `<h3>Bildgebende Diagnostik</h3>
                <ul>
                    <li><strong>Initiale Beurteilung:</strong> Sonografie zur Einschätzung.</li>
                    <li><strong>Primäres Staging:</strong> Dynamische hepatische MRT-Untersuchung (inklusive MRCP zur Gangdarstellung) sowie mehrphasisches KM-CT von Thorax und Abdomen.</li>
                    <li><strong>Endoskopische Diagnostik:</strong> Endosonografie (EUS) zur Beurteilung lokaler Lymphknoten und distaler Tumorausbreitung.</li>
                    <li><strong>PET/CT:</strong> Bei unklaren Befunden hinsichtlich Tumorausbreitung oder Rezidivverdacht nach Tumorboard-Empfehlung.</li>
                </ul>
                <h3>Diagnosesicherung & Biopsie</h3>
                <div class="callout callout-wichtig">
                    <p>Vor oder im Rahmen einer jeden Tumortherapie sollen Tumoren der Gallenwege und Gallenblase histologisch oder zytologisch gesichert werden.</p>
                </div>
                <ul>
                    <li><strong>pCCA / dCCA:</strong> ERC mit Bürstenzytologie oder Zangenbiopsie (ggf. Cholangioskopie zur Sensitivitätssteigerung).</li>
                    <li><strong>iCCA:</strong> Perkutane (sonografisch gesteuerte) Biopsie.</li>
                </ul>
                <h3>Differenzierung der iCCA Subtypen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Small-duct Type iCCA</th>
                                <th>Large-duct Type iCCA / dCCA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Prädisposition</strong></td>
                                <td>Hepatitis B/C, MASH, Zirrhose</td>
                                <td>PSC, Leberegel, Konkremente</td>
                            </tr>
                            <tr>
                                <td><strong>Makroskopie</strong></td>
                                <td>Primärknotenbildend ("mass forming")</td>
                                <td>Primär periduktal infiltrierend</td>
                            </tr>
                            <tr>
                                <td><strong>Histologie</strong></td>
                                <td>Zellreich, weniger Stroma, kein Muzin</td>
                                <td>Tumorzellarm, stromareich, Muzinbildung</td>
                            </tr>
                            <tr>
                                <td><strong>Genetik / Marker</strong></td>
                                <td>IDH1/2, FGFR2-Translokationen, BAP1</td>
                                <td>KRAS, SMAD4, HER2-Amplifikation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Molekulare Diagnostik & Zielstrukturen",
                html: `<p>Cholangiokarzinome (insbesondere das iCCA) weisen eine hohe Rate an potenziell therapierelevanten molekularen Alterationen auf. Eine molekulare Charakterisierung soll im geeigneten Kontext getestet werden, spätestens bis zur Entscheidung über eine Zweitlinientherapie.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Molekulare Alteration</th>
                                <th>Häufigkeit beim small-duct iCCA</th>
                                <th>Zielgerichtete Therapie / Zulassung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>FGFR2-Translokation</strong></td>
                                <td>15 &ndash; 30 %</td>
                                <td><strong>Futibatinib</strong>, Pemigatinib</td>
                            </tr>
                            <tr>
                                <td><strong>IDH1-Mutation</strong></td>
                                <td>10 &ndash; 20 %</td>
                                <td>Ivosidenib</td>
                            </tr>
                            <tr>
                                <td><strong>MSI-H / dMMR</strong></td>
                                <td>1 &ndash; 3 %</td>
                                <td>Pembrolizumab</td>
                            </tr>
                            <tr>
                                <td><strong>BRAF V600E</strong></td>
                                <td>3 &ndash; 6 %</td>
                                <td>Zulassung bei anderer Entität (Off-label/Studie)</td>
                            </tr>
                            <tr>
                                <td><strong>ERBB2 (HER2)</strong></td>
                                <td>2 &ndash; 3 % (höher bei GBC)</td>
                                <td>Zulassung bei anderer Entität (Off-label/Studie)</td>
                            </tr>
                            <tr>
                                <td><strong>NTRK1-3 Fusion</strong></td>
                                <td>&lt; 1 %</td>
                                <td>Larotrectinib, Entrectinib</td>
                            </tr>
                            <tr>
                                <td><strong>TP53 / KRAS</strong></td>
                                <td>20 &ndash; 30 % / 10 &ndash; 20 %</td>
                                <td>Derzeit keine spezifisch zugelassene Therapie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-wichtig">
                    <p><strong>Neuerung 2025:</strong> Patienten mit FGFR2-Fusion oder FGFR2-Rearrangement wird ab der Zweitlinie <strong>alternativ zu Pemigatinib nun auch Futibatinib</strong> empfohlen.</p>
                </div>`
            },
            {
                title: "4. Operative Verfahren & Biliäre Drainage",
                html: `<h3>Kurative Resektion</h3>
                <ul>
                    <li>Eine Resektion eines pCCA, dCCA oder iCCA soll erfolgen, wenn eine komplette Resektion (R0) möglich erscheint.</li>
                    <li><strong>Gallenblasenkarzinom:</strong> Bei cM0 und R0-Möglichkeit Resektion. Wird postoperativ (z.B. nach Cholezystektomie) ein Tumor &ge; T1b festgestellt, soll onkologisch nachreseziert werden (Leberbettresektion + Lymphadenektomie). Bei T1a (Mukosakarzinom) und R0-Situation am D. cysticus ist keine Nachresektion nötig.</li>
                    <li><strong>Lebertransplantation (LTX):</strong> Für das iCCA außerhalb von Studien nicht empfohlen. Bei irresektablem, nicht-metastasiertem pCCA, welches die Mayo-Kriterien erfüllt, kann eine LTX unter Studienbedingungen erwogen werden.</li>
                </ul>
                <h3>Lokale & Interventionelle Verfahren</h3>
                <ul>
                    <li><strong>Perkutane Ablation (RFA/MWA):</strong> Bei inoperablen Befunden oder Rezidiven nach Tumorboard-Beschluss.</li>
                    <li><strong>Intraarterielle Therapien (SIRT/TACE):</strong> Können beim fortgeschrittenen iCCA ohne extrahepatischen Befall ab der Zweitlinie oder additiv zur Chemotherapie erfolgen.</li>
                    <li><strong>Stereotaxie (SBRT):</strong> Bei fehlenden Alternativen anwendbar.</li>
                </ul>
                <h3>Biliäre Drainage</h3>
                <ul>
                    <li><strong>Präoperativ:</strong> Indikation interdisziplinär stellen; bei Vorliegen einer Cholangitis umgehend durchführen.</li>
                    <li><strong>Palliativ:</strong> Symptomatische Gallenwegsverschlüsse (Ikterus, Cholangitis) sollen drainiert werden (PTCD oder ERC mit selbstexpandierenden Metallstents). Intraduktale RFA oder photodynamische Therapie nach Beschluss möglich.</li>
                </ul>`
            },
            {
                title: "5. Systemtherapie (Adjuvant & Palliativ)",
                html: `<h3>Adjuvante Therapie</h3>
                <div class="callout callout-hinweis">
                    <p>Aufgrund des hohen Rezidivrisikos sollen Patienten nach chirurgischer Tumorentfernung (R0, R1) eine adjuvante Systemtherapie mit <strong>Capecitabin</strong> erhalten.</p>
                </div>
                <h3>Neoadjuvante Therapie</h3>
                <ul>
                    <li>Sollte bei primär resektablen Tumoren <strong>nicht</strong> außerhalb von klinischen Studien erfolgen.</li>
                    <li>Bei primär irresektablen Tumoren, die unter Systemtherapie ansprechen, soll eine Reevaluation zur sekundären Resektabilität erfolgen.</li>
                </ul>
                <h3>Palliative Erstlinientherapie</h3>
                <p>Patienten im inoperablen lokal fortgeschrittenen oder metastasierten Stadium mit adäquatem Allgemeinzustand (ECOG 0-1) soll eine Kombinationstherapie angeboten werden:</p>
                <ul>
                    <li><strong>Standard 1:</strong> Gemcitabin + Cisplatin + <strong>Durvalumab</strong></li>
                    <li><strong>Standard 2 (Neu 2025):</strong> Gemcitabin + Cisplatin + <strong>Pembrolizumab</strong></li>
                </ul>
                <h3>Zweitlinientherapie & Sequenz</h3>
                <p>Voraussetzung: Adäquater Allgemeinzustand. Die Wahl der Therapie hängt maßgeblich vom molekularen Profil ab.</p>
                <ul>
                    <li><strong>Bei FGFR2-Fusion/-Rearrangement:</strong> Futibatinib oder Pemigatinib.</li>
                    <li><strong>Bei IDH1 R132-Mutation:</strong> Ivosidenib.</li>
                    <li><strong>Bei MSI-H / dMMR:</strong> Pembrolizumab (Immuntherapie-naiv).</li>
                    <li><strong>Ohne identifizierte Zielstruktur (bzw. ECOG 0-1):</strong> FOLFOX (Folinsäure, 5-FU, Oxaliplatin).</li>
                </ul>
                <h3>Drittlinientherapie</h3>
                <ul>
                    <li>Nach Versagen der vorherigen Linien kann eine <strong>Irinotecan-haltige Therapie</strong> (z.B. FOLFIRI) angeboten werden.</li>
                </ul>`
            },
            {
                title: "6. Verlaufskontrolle, Nachsorge & Supportivtherapie",
                html: `<h3>Nachsorge (Kurativer Ansatz)</h3>
                <ul>
                    <li>Erste Kontrolle mittels biphasischem CT oder dynamischem MRT nach 4 bis 12 Wochen.</li>
                    <li><strong>Im ersten Jahr:</strong> Alle 3 Monate.</li>
                    <li><strong>Im zweiten Jahr:</strong> Alle 3 bis 6 Monate.</li>
                </ul>
                <h3>Verlaufskontrolle (Unter Systemtherapie)</h3>
                <ul>
                    <li>Bildgebende Kontrollen (diagnostisch bestes Verfahren) alle 6 bis 12 Wochen.</li>
                    <li>Interpretation nach Auswerteprinzipien von <strong>RECIST 1.1</strong> (bzw. iRECIST unter Immuntherapie).</li>
                </ul>
                <h3>Supportivtherapie & Palliativversorgung</h3>
                <ul>
                    <li><strong>Mangelernährung:</strong> Erfassen und behandeln, da sie Lebensqualität und Therapietoleranz beeinträchtigt.</li>
                    <li><strong>Palliativversorgung:</strong> Allen Patienten mit UICC Stadium IV soll frühzeitig die Integration der Palliativmedizin angeboten werden, auch parallel zur tumorgerichteten Therapie.</li>
                    <li><strong>Symptomkontrolle:</strong> Pruritusbehandlung gemäß AWMF-Leitlinie; konsequente Schmerztherapie; biliäre Entlastung.</li>
                    <li><strong>Psychoonkologie:</strong> Patientenzentrierte Kommunikation in allen Phasen der Erkrankung.</li>
                </ul>`
            }
        ],
        sources: "S3-Leitlinie Diagnostik und Therapie des Hepatozellulären Karzinoms und biliärer Karzinome. Kurzversion 5.2 - Juni 2025. AWMF-Registernummer: 032-053OL. Herausgeber: Leitlinienprogramm Onkologie (DKG, DKH, AWMF)."
    });
})();