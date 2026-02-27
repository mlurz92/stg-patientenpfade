(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "mammakarzinom",
        module: "onko",
        title: "Mammakarzinom",
        name: "Mammakarzinom",
        category: "onko",
        stand: "12/25",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste Krebserkrankung der Frau weltweit</li>
                    <li>In Deutschland ca. 70.000 Neuerkrankungen pro Jahr</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel um 65 Jahre</li>
                    <li>5-Jahres-Überleben ca. 88%</li>
                    <li>Lebenszeitrisiko Frau: ca. 12,8% (1 von 8)</li>
                    <li>Lebenszeitrisiko Mann: ca. 0,1% (1 von 790)</li>
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
                                <td><strong>Genetisch</strong></td>
                                <td>BRCA1/2-Mutation, PALB2, CHEK2, ATM, TP53 (Li-Fraumeni), PTEN (Cowden), RAD51C, RAD51D, BARD1, BRIP1.</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Erkrankte Verwandte ersten Grades, positive Familienanamnese.</td>
                            </tr>
                            <tr>
                                <td><strong>Hormonell</strong></td>
                                <td>Frühe Menarche (< 12 Jahre), späte Menopause (> 55 Jahre), Nulliparität, späte erste Schwangerschaft (> 30 Jahre), Hormonersatztherapie.</td>
                            </tr>
                            <tr>
                                <td><strong>Lebensstil</strong></td>
                                <td>Adipositas (postmenopausal), Alkoholkonsum, körperliche Inaktivität.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorläuferläsionen</strong></td>
                                <td>Atypische duktale/lobuläre Hyperplasia (ADH/LN), DCIS, LCIS.</td>
                            </tr>
                            <tr>
                                <td><strong>Brustdichte</strong></td>
                                <td>Erhöhte mammographische Dichte (ACR C/D) als unabhängiger, moderater Risikofaktor.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Inspektion und Palpation der Brust und Lymphabflusswege.</li>
                    <li><strong>Mammographie:</strong> Standard für Screening und Diagnostik, einzige Methode mit gesicherter Mortalitätsreduktion.</li>
                    <li><strong>Brustultraschall:</strong> Ergänzend, besonders bei dichtem Drüsengewebe.</li>
                    <li><strong>Digitale Brust-Tomosynthese (DBT):</strong> Überlegen gegenüber digitaler Mammographie bezüglich Sensitivität und Spezifität bei dichtem Gewebe.</li>
                    <li><strong>MRT der Brust:</strong> Bei dichtem Gewebe, BRCA-Mutation, unklaren Befunden oder zur Prätherapeutischen Planung.</li>
                    <li><strong>Biopsie:</strong> Stanzbiopsie oder Vakuumbiopsie zur histologischen Sicherung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Bei klinischem Verdacht auf Fernmetastasen.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Knochenschmerzen oder erhöhten Alkalischen Phosphatasen.</li>
                    <li><strong>Leberultraschall:</strong> Alternative zum CT.</li>
                    <li><strong>PET-CT:</strong> Bei V.a. fortgeschrittene Erkrankung.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>Hormonrezeptorstatus:</strong> ER (Östrogenrezeptor), PR (Progesteronrezeptor).</li>
                    <li><strong>HER2-Status:</strong> Immunhistochemie und ggf. ISH/FISH.</li>
                    <li><strong>Ki-67:</strong> Proliferationsmarker.</li>
                    <li><strong>Genexpressionstests:</strong> Oncotype DX, MammaPrint, Prosigna (für adjuvante Therapieentscheidung).</li>
                    <li><strong>Multigene Panels:</strong> Zur Identifikation von Keimbahnmutationen (BRCA1/2, PALB2, CHEK2, etc.).</li>
                </ul>
                <h3>Molekulare Subtypen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Rezeptorstatus</th>
                                <th>Häufigkeit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Luminal A</strong></td>
                                <td>ER+, PR+/-, HER2-, Ki-67 niedrig</td>
                                <td>ca. 40%</td>
                            </tr>
                            <tr>
                                <td><strong>Luminal B</strong></td>
                                <td>ER+, PR+/-, HER2+/-, Ki-67 hoch</td>
                                <td>ca. 20%</td>
                            </tr>
                            <tr>
                                <td><strong>HER2-positiv</strong></td>
                                <td>ER-, PR-, HER2+</td>
                                <td>ca. 15%</td>
                            </tr>
                            <tr>
                                <td><strong>Triple-negativ</strong></td>
                                <td>ER-, PR-, HER2-</td>
                                <td>ca. 15%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Brusterhaltende Therapie (BET):</strong> Standard bei geeigneten Tumoren + Nachbestrahlung.</li>
                    <li><strong>Mastektomie:</strong> Bei großen Tumoren, multizentrischem Befund, Kontraindikation zur Bestrahlung oder Patientenwunsch.</li>
                    <li><strong>Brustrekonstruktion:</strong> Sofortige oder verzögerte Rekonstruktion mit Implantat oder Eigengewebe.</li>
                    <li><strong>Sentinel-Lymphknoten-Biopsie:</strong> Standard bei klinisch negativer Axilla.</li>
                    <li><strong>Axilläre Dissektion:</strong> Bei positivem Sentinel-Lymphknoten (selektiv).</li>
                    <li><strong>Operative Therapie nach primärer Systemtherapie:</strong> Empfehlung zur Operation auch nach pathologischer Komplettremission (pCR).</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li><strong>Nach BET:</strong> Standard (50 Gy in 25 Fraktionen + Boost).</li>
                    <li><strong>Nach Mastektomie:</strong> Bei pT3/4, N+, R1/R2.</li>
                    <li><strong>Regionäre Bestrahlung:</strong> Bei ausgedehntem Lymphknotenbefall.</li>
                    <li><strong>Teilbrustbestrahlung (PBI/APBI):</strong> Bei geeigneten Patientinnen als Alternative zur Ganzbrustbestrahlung.</li>
                    <li><strong>Hypofraktionierung:</strong> Standard bei banyakonformer Bestrahlung (40-42,5 Gy in 15-16 Fraktionen).</li>
                </ul>
                <h3>Systemtherapie - Adjuvant</h3>
                <ul>
                    <li><strong>Endokrine Therapie (HR+):</strong> Tamoxifen oder Aromatasehemmer (5-10 Jahre), ggf. OFS bei prämenopausalen Frauen.</li>
                    <li><strong>Chemotherapie:</strong> Anthrazyklin/Taxan-basiert, bei Indikation (hohes Rezidivrisiko, Triple-negativ, HER2+).</li>
                    <li><strong>Anti-HER2-Therapie:</strong> Trastuzumab ± Pertuzumab (1 Jahr) bei HER2+ Tumoren.</li>
                    <li><strong>CDK4/6-Inhibitoren:</strong> Abemaciclib bei hohem Rezidivrisiko (HR+, HER2-).</li>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab in der adjuvanten Situation bei Triple-negativem Mammakarzinom mit hohem Rezidivrisiko.</li>
                </ul>
                <h3>Systemtherapie - Neoadjuvant</h3>
                <ul>
                    <li><strong>Indikation:</strong> Triple-negativ, HER2+, HR+ mit hohem Ki-67, inflammatorisches Karzinom, operable Tumoren > 2 cm.</li>
                    <li><strong>Ziele:</strong> pCR als prognostischer Marker, Downstaging der Brust und Axilla.</li>
                    <li><strong>HER2+:</strong> Duale Blockade (Trastuzumab + Pertuzumab) + Chemotherapie.</li>
                    <li><strong>Triple-negativ:</strong> Pembrolizumab + Chemotherapie (Carboplatin + Paclitaxel).</li>
                </ul>
                <h3>Systemtherapie - Metastasiert</h3>
                <ul>
                    <li><strong>HR+/HER2-:</strong> Endokrine Therapie + CDK4/6-Inhibitor (Palbociclib, Ribociclib, Abemaciclib). Bei PIK3CA-Mutation: Alpelisib. Bei ESR1-Mutant: Elacestrant. Chemotherapie bei Endokrinresistenz.</li>
                    <li><strong>HER2+:</strong> T-DXd (Trastuzumab-Deruxtecan), T-DM1, Trastuzumab + Pertuzumab + Chemotherapie, Tucatinib-Kombinationen.</li>
                    <li><strong>Triple-negativ:</strong> Chemotherapie, Immuntherapie (Pembrolizumab/Atezolizumab bei PD-L1+), Sacituzumab Govitecan, Trop-2-ADC.</li>
                    <li><strong>BRCA-Mutation:</strong> Olaparib, Talazoparib (PARP-Inhibitoren).</li>
                </ul>`
            },
            {
                title: "Spezielle Situationen",
                html: `<h3>Familiäres Mammakarzinom</h3>
                <ul>
                    <li><strong>Genetische Testung:</strong> Indikation bei familiärer Belastung (≥10% Nachweiswahrscheinlichkeit).</li>
                    <li><strong>BRCA1/2:</strong> Lebenszeitrisiko ca. 70%, Ovarialkarzinomrisiko BRCA1: 45%, BRCA2: 20%.</li>
                    <li><strong>Intensivierte Früherkennung:</strong> MRT + Mammographie + Sonographie ab 25. bzw. 30. Lebensjahr.</li>
                    <li><strong>Risikoreduzierende Operation:</strong> Prophylaktische Mastektomie und/oder Ovarektomie als Option.</li>
                </ul>
                <h3>Mammakarzinom in Schwangerschaft und Stillzeit</h3>
                <ul>
                    <li><strong>Diagnostik:</strong> Ultraschall + Mammographie (mit Strahlenschutz) möglich.</li>
                    <li><strong>Therapie:</strong> Chirurgie in allen Trimestern möglich, Chemotherapie ab 2. Trimester, keine Bestrahlung.</li>
                    <li><strong>Fertilitätserhalt:</strong> Vor Chemotherapie Oozyten-/Embryonen-Kryokonservierung.</li>
                </ul>
                <h3>Mammakarzinom des Mannes</h3>
                <ul>
                    <li><strong>Seltene Erkrankung:</strong> ca. 1% aller Mammakarzinome.</li>
                    <li><strong>Risikofaktoren:</strong> BRCA2-Mutation, Klinefelter-Syndrom, Östrogenexposition.</li>
                    <li><strong>Therapie:</strong> Entspricht weitgehend den Empfehlungen für Frauen.</li>
                </ul>
                <h3>Transgender und Brustkrebs</h3>
                <ul>
                    <li><strong>Risiko:</strong> Transfrauen unter Hormontherapie haben moderat erhöhtes Risiko.</li>
                    <li><strong>Früherkennung:</strong> Individuell angepasste Strategien.</li>
                    <li><strong>Betreuung:</strong> Spezialisierte interdisziplinäre Versorgung empfohlen.</li>
                </ul>
                <h3>BIA-ALCL (Brustimplantat-assoziiertes anaplastisches Lymphom)</h3>
                <ul>
                    <li><strong>Definition:</strong> Seltene T-Zell-Lymphom-Art, assoziiert mit texturierten Brustimplantaten.</li>
                    <li><strong>Inzidenz:</strong> Sehr selten (ca. 1:50.000 - 1:500.000), Risiko bei texturierten Implantaten erhöht.</li>
                    <li><strong>Symptome:</strong> Serom, Kapselkontraktur, Schmerzen, Lymphknotenschwellung.</li>
                    <li><strong>Diagnostik:</strong> Ultraschall, MRT, Zytologie/Histologie des Seroms.</li>
                    <li><strong>Therapie:</strong> Implantatentfernung, Kapselexzision, bei Bedarf Chemotherapie.</li>
                    <li><strong>Prävention:</strong> Bevorzugung glatter Implantate bei risikoarmen Eingriffen.</li>
                </ul>
                <h3>Erweiterte Brustrekonstruktion</h3>
                <ul>
                    <li><strong>Techniken:</strong> Eigengeweberekonstruktion (DIEP-Lappen, TRAM-Lappen, TMG-Lappen), Implantatrekonstruktion, Hybridverfahren.</li>
                    <li><strong>Timing:</strong> Sofortige vs. verzögerte Rekonstruktion, patientenindividuelle Entscheidung.</li>
                    <li><strong>Lipofilling:</strong> Eigenfetttransplantation zur Optimierung von Kontur und Volumen.</li>
                    <li><strong>Brustwarzenrekonstruktion:</strong> Lokale Lappenplastik, Tattoo-Techniken.</li>
                    <li><strong>Symmetrie-Operation:</strong> Angleichung der Gegenseite (Reduktion, Mastopexie).</li>
                    <li><strong>Komplikationsmanagement:</strong> Infektion, Implantatruptur, Lappennekrose, Kapselkontraktur.</li>
                </ul>
                <h3>Künstliche Intelligenz in der Mammographie-Diagnostik</h3>
                <ul>
                    <li><strong>KI-gestützte Bildanalyse:</strong> CAD-Systeme mit Deep-Learning-Algorithmen zur Erkennung von Mammographiebefunden.</li>
                    <li><strong>Evidenz:</strong> Vielversprechende Ergebnisse für Sensitivität und Spezifität, zunehmend in klinische Erprobung.</li>
                    <li><strong>Integration:</strong> KI als Zweitbefunder zur Reduktion von Übersehbefunden.</li>
                    <li><strong>Limitationen:</strong> Weiterhin ärztliche Befundung erforderlich, Validierung bei diversen Populationsgruppen.</li>
                </ul>
                <h3>Digitale Gesundheitsanwendungen (DiGA)</h3>
                <ul>
                    <li><strong>Definition:</strong> Medizinische Apps auf Rezept zur Unterstützung von Diagnostik, Therapie und Nachsorge.</li>
                    <li><strong>Anwendungen bei Mammakarzinom:</strong> Symptomtagebücher, Therapiebegleit-Apps, Bewegungstherapie-Programme.</li>
                    <li><strong>Nutzen:</strong> Verbesserung der Adhärenz, Selbstmanagement, Patienten empowerment.</li>
                    <li><strong>Datenschutz:</strong> Konformität mit DSGVO und medizinprodukterechtlichen Anforderungen.</li>
                </ul>
                <h3>Spezielle Tumorentitäten</h3>
                <ul>
                    <li><strong>DCIS (Duktales Carcinoma in situ):</strong> Brusterhaltung + Bestrahlung oder Mastektomie, endokrine Therapie bei HR+.</li>
                    <li><strong>Metaplastisches Karzinom:</strong> Triple-negativ, aggressiver Verlauf, multimodale Therapie.</li>
                    <li><strong>Phylloidestumor:</strong> Chirurgische Resektion mit Sicherheitsabstand.</li>
                    <li><strong>Angiosarkom:</strong> Selten, multimodale Therapie.</li>
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
                                <td>Jahr 1-3</td>
                                <td>Alle 3 Monate</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Jahr 4-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Mammographie</td>
                                <td>Jährlich</td>
                                <td>Beide Brüste (nach BET) / kontralateral (nach Mastektomie)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Gynäkologische Untersuchung (unter Tamoxifen jährlich, unter Aromatasehemmern halbjährlich).</li>
                    <li>Knochendichte-Messung (unter Aromatasehemmern alle 2-3 Jahre).</li>
                    <li>Psychoonkologische Betreuung bei Bedarf.</li>
                    <li>Rehabilitation und Lebensstilberatung (Bewegung, Ernährung).</li>
                    <li>Langzeitüberlebende: Erfassung und Behandlung von Folgestörungen (Fatigue, Neuropathie, kognitive Dysfunktion).</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Multimodale Rehabilitation: Physio-, Psycho-, Sozial- und Ernährungsberatung.</li>
                    <li>Anschlussheilbehandlung (AHB) nach stationärer Therapie.</li>
                    <li>Berufliche Rehabilitation und Wiedereingliederung.</li>
                </ul>
                <h3>Palliativmedizin</h3>
                <ul>
                    <li>Frühzeitige Integration bei metastasierter Erkrankung.</li>
                    <li>Symptomkontrolle (Schmerz, Dyspnoe, Übelkeit).</li>
                    <li>Psychosoziale und spirituelle Unterstützung.</li>
                    <li>Advance Care Planning und Versorgungsplanung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Früherkennung, Diagnostik, Therapie und Nachsorge des Mammakarzinoms. Version 5.0 - Dezember 2025. AWMF-Registernummer: 032-045OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
