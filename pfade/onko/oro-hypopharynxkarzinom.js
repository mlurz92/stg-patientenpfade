(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "oro-hypopharynxkarzinom",
        module: "onko",
        title: "Oro- und Hypopharynxkarzinom",
        name: "Oro- und Hypopharynxkarzinom",
        category: "onko-hno",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Oropharynxkarzinom: Häufigste Kopf-Hals-Tumoren in westlichen Ländern</li>
                    <li>Inzidenz steigt durch HPV-assoziierte Tumoren</li>
                    <li>Männer : Frauen = 3 : 1</li>
                    <li>Median bei Diagnose: ca. 55-65 Jahre</li>
                    <li>HPV-positive Tumoren haben deutlich bessere Prognose</li>
                </ul>
                <h3>Lokalisation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Lokalisation</th>
                                <th>Anatomie</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Oropharynx</strong></td>
                                <td>Gaumenbögen, Tonsillen, Zungengrund, weicher Gaumen</td>
                                <td>HPV-Assoziation häufig (besonders Tonsillen, Zungengrund)</td>
                            </tr>
                            <tr>
                                <td><strong>Hypopharynx</strong></td>
                                <td>Piriformis-Sinus, Postkrikoid-Region, hintere Pharynxwand</td>
                                <td>Späte Diagnose, schlechte Prognose</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikofaktor</th>
                                <th>Oropharynx</th>
                                <th>Hypopharynx</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>HPV-Infektion</strong></td>
                                <td>Sehr häufig (70%+), v.a. HPV 16</td>
                                <td>Seltener</td>
                            </tr>
                            <tr>
                                <td><strong>Rauchen</strong></td>
                                <td>Häufig (HPV-negativ)</td>
                                <td>Sehr häufig</td>
                            </tr>
                            <tr>
                                <td><strong>Alkohol</strong></td>
                                <td>Häufig (HPV-negativ)</td>
                                <td>Sehr häufig</td>
                            </tr>
                            <tr>
                                <td><strong>Plummer-Vinson-Syndrom</strong></td>
                                <td>Selten</td>
                                <td>Assoziation mit Postkrikoid-Karzinomen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Endoskopische Verfahren</h3>
                <ul>
                    <li><strong>Spiegelung/Laryngoskopie:</strong> Direkte Inspektion des Pharynx und Larynx, Beurteilung von Tumorgröße und -ausbreitung.</li>
                    <li><strong>Panendoskopie:</strong> Kombiniertes Verfahren mit direkter Laryngoskopie, Ösophagoskopie und Bronchoskopie zur Tumorsichtung und Zweittumor-Diagnostik.</li>
                    <li><strong>Nasopharyngoskopie:</strong> Flexible Endoskopie über die Nase zur Beurteilung des Nasopharynx und der oberen Atemwege.</li>
                </ul>
                <h3>Schnittbildgebung</h3>
                <ul>
                    <li><strong>MRT Hals:</strong> Magnetresonanztomographie des Halses mit Kontrastmittel, beste Weichteildarstellung, Beurteilung von Tumorinvasion und Lymphknotenstatus.</li>
                    <li><strong>CT Hals:</strong> Computertomographie des Halses mit Kontrastmittel, gute Knochen- und Lymphknotendarstellung.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Standarduntersuchung zum Metastasenausschluss in Lunge und Leber.</li>
                </ul>
                <h3>Nuklearmedizinische Verfahren</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Positronenemissionstomographie kombiniert mit CT,主要用于 Fortgeschrittenes Staging (N2/N3, Verdacht auf Fernmetastasen), Detektion von okkulten Metastasen und Rezidiven.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Verdacht auf Knochenmetastasen.</li>
                </ul>
                <h3>Sonographie</h3>
                <ul>
                    <li><strong>Halsultraschall:</strong> Ergänzende Untersuchung zur Beurteilung von Lymphknoten, Schilddrüse und Weichteilen.</li>
                    <li><strong>Ultraschall-gestützte Feinnadelpunktion:</strong> Zytologische Diagnostik von suspekten Lymphknoten.</li>
                </ul>
                <h3>Zahnärztliche Diagnostik</h3>
                <ul>
                    <li><strong>Orthopantomogramm (OPG):</strong> Beurteilung des Knochenzustands vor Strahlentherapie.</li>
                    <li><strong>Dental-CT:</strong> 3D-Darstellung des Kiefers bei Verdacht auf Knocheninfiltration.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild</h3>
                <ul>
                    <li><strong>Blutbild mit Differenzierung:</strong> Erfassung von Anämie, Leukozytose, Thrombopenie.</li>
                    <li><strong>Bei Verdacht auf Tumorprogress:</strong> Kontrolle vor Therapiebeginn.</li>
                </ul>
                <h3>Leber- und Nierenfunktion</h3>
                <ul>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin, LDH.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff, GFR.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP, BSG:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Gerinnungsparameter</h3>
                <ul>
                    <li><strong>Quick, PTT, Thrombozyten:</strong> Vor invasiven Eingriffen und Therapie.</li>
                </ul>
                <h3>Infektionsserologie</h3>
                <ul>
                    <li><strong>HIV, Hepatitis B und C:</strong> Vor Therapiebeginn (insbesondere bei geplanter Immuntherapie).</li>
                </ul>
                <h3> Tumormarker (limitiert)</h3>
                <ul>
                    <li><strong>SCC (Squamous Cell Carcinoma Antigen):</strong> Unspezifischer Marker für Plattenepithelkarzinome, Verlaufskontrolle.</li>
                    <li><strong>CEA:</strong> Wenig spezifisch, gelegentlich bei metastasierter Erkrankung.</li>
                    <li><strong>Keine Routine-Tumormarker:</strong> Diagnostisch nicht richtungsweisend.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Inzisionsbiopsie:</strong> Entnahme von Gewebeproben aus dem Tumor unter endoskopischer Kontrolle.</li>
                    <li><strong>Exzisionsbiopsie:</strong> Vollständige Entfernung kleiner Läsionen.</li>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Zytologische Diagnostik von Lymphknotenmetastasen.</li>
                    <li><strong>Zangenbiopsie:</strong> Unter endoskopischer Sicht.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Tumorart:</strong> Plattenepithelkarzinom (90%+), weitere Subtypen (verruköses Karzinom, Lymphoepithelkarzinom, etc.).</li>
                    <li><strong>Grading:</strong> Differenzierungsgrad (G1-G3).</li>
                    <li><strong>Invasionstiefe:</strong> Wichtig für Prognose und Staging.</li>
                    <li><strong>Perineurale Invasion (PNI):</strong> Nachweis von Tumorzellen in Nervenscheiden.</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Nachweis von Tumorzellen in Lymphgefäßen.</li>
                    <li><strong>Knocheninfiltration:</strong> Beurteilung bei Verdacht auf Knochenbeteiligung.</li>
                </ul>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li><strong>p63/p40:</strong> Marker für Plattenepitheldifferenzierung.</li>
                    <li><strong>Cytokeratine:</strong> AE1/AE3, CK5/6.</li>
                    <li><strong>Ki-67:</strong> Proliferationsindex.</li>
                    <li><strong>PD-L1:</strong> Zur Therapieplanung (Immuntherapie).</li>
                </ul>
                <h3>Molekularpathologie</h3>
                <ul>
                    <li><strong>HPV-Status:</strong> p16-Immunhistochemie als Surrogatmarker.</li>
                    <li><strong>EBV:</strong> Bei lymphoepithelialen Karzinomen (In-situ-Hybridisierung für EBER).</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HPV-Testung</h3>
                <ul>
                    <li><strong>p16-Immunhistochemie:</strong> Standardmethode als Surrogatmarker für HPV-Infektion, strong>positiv = HPV-assoziiert.</li>
                    <li><strong>PCR:</strong> Direkter Nachweis von HPV-DNA, Goldstandard bei unklarer p16-Konstellation.</li>
                    <li><strong>In-situ-Hybridisierung (ISH):</strong> Detaillierte Lokalisation von HPV-DNA im Gewebe.</li>
                    <li><strong>Bedeutung:</strong> p16-positives Oropharynxkarzinom hat deutlich bessere Prognose und eigenes Staging-System.</li>
                </ul>
                <h3>PD-L1-Expression</h3>
                <ul>
                    <li><strong>Immunhistochemie:</strong> Bestimmung von PD-L1-Expression (CPS = Combined Positive Score).</li>
                    <li><strong>Therapierelevanz:</strong> PD-L1 CPS ≥ 1% Indikation für Pembrolizumab in der metastasierten Situation.</li>
                </ul>
                <h3>Molekulare Alterationen</h3>
                <ul>
                    <li><strong>EGFR:</strong> Epidermal Growth Factor Receptor, Überexpression häufig bei HPV-negativen Tumoren.</li>
                    <li><strong>PIK3CA:</strong> Mutationen in ca. 20% der Kopf-Hals-Tumoren.</li>
                    <li><strong>TP53:</strong> Häufige Mutationen bei HPV-negativen Tumoren.</li>
                    <li><strong>NOTCH1/2:</strong> Mutationen bei HPV-negativen Tumoren.</li>
                </ul>
                <h3>Next-Generation Sequencing (NGS)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Fortgeschrittene/metastasierte Erkrankung zur Therapieplanung.</li>
                    <li><strong>Panel-Tests:</strong> Erfassung von Target-Altern (z.B. NTRK, BRAF, MET).</li>
                    <li><strong>Tumormutationslast (TMB):</strong> Höhere TMB prädiktiv für Immuntherapie-Ansprechen.</li>
                </ul>
                <h3>Keimbahnmutationen</h3>
                <ul>
                    <li><strong>Genetische Beratung:</strong> Bei familiärer Häufung von Kopf-Hals-Tumoren.</li>
                    <li><strong>Selten:</strong> Keimbahnmutationen spielen eine untergeordnete Rolle.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>Primärtumor:</strong> Endoskopische Beurteilung unter Narkose (Panendoskopie).</li>
                    <li><strong>Lymphknoten:</strong> Klinische Untersuchung, Bildgebung (MRT/CT, Ultraschall).</li>
                    <li><strong>Fernmetastasen:</strong> CT Thorax/Abdomen, ggf. PET-CT.</li>
                </ul>
                <h3>TNM-Klassifikation Oropharynxkarzinom (p16-negativ)</h3>
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
                                <td>Tumor ≤ 2 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor > 2-4 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor > 4 cm oder Befall der Epiglottis</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Invasion von Larynx, Zunge, Gaumen, Unterkiefer</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Invasion von Pterygoid, Schädelbasis, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>TNM-Klassifikation Oropharynxkarzinom (p16-positiv)</h3>
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
                                <td>Tumor ≤ 2 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor > 2-4 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor > 4 cm oder Befall der Epiglottis</td>
                            </tr>
                            <tr>
                                <td><strong>T4</strong></td>
                                <td>Invasion von benachbarten Strukturen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>TNM-Klassifikation Hypopharynxkarzinom</h3>
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
                                <td>Tumor auf eine Region begrenzt, ≤ 2 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor befällt > 1 Region oder 2-4 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor > 4 cm oder mit Stimmbandfixierung</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Invasion von Schildknorpel, Zunge, Weichteile</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Invasion von Prävertebralfaszie, Karotis, Mediastinum</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>N-Kategorie (alle Entitäten)</h3>
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
                                <td>Ein ipsilateraler Lymphknoten, ≤ 3 cm, exoneal</td>
                            </tr>
                            <tr>
                                <td><strong>N2</strong></td>
                                <td>N2a: Ein ipsilateraler Lymphknoten > 3-6 cm<br>N2b: Mehrere ipsilaterale Lymphknoten, ≤ 6 cm<br>N2c: Bilaterale oder kontralaterale Lymphknoten, ≤ 6 cm</td>
                            </tr>
                            <tr>
                                <td><strong>N3</strong></td>
                                <td>Lymphknoten > 6 cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>M-Kategorie</h3>
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
                <h3>Stadiengruppierung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Oropharynx (p16-)</th>
                                <th>Oropharynx (p16+)</th>
                                <th>Hypopharynx</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>T1-2, N0-1</td>
                                <td>T1-2, N0-1</td>
                                <td>T1, N0</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T1-2, N2<br>T3, N0-1</td>
                                <td>T1-2, N2<br>T3, N0</td>
                                <td>T1-2, N1<br>T3, N0</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T1-3, N2<br>T4, N0-1</td>
                                <td>T1-3, N2-3<br>T4, N0-2</td>
                                <td>T1-3, N2<br>T4, N0-1</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>jedes T, N3<br>jedes T, jedes N, M1</td>
                                <td>jedes T, N3<br>jedes T, jedes N, M1</td>
                                <td>jedes T, N3<br>jedes T, jedes N, M1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Besonderheiten bei HPV-positivem Oropharynxkarzinom</h3>
                <ul>
                    <li><strong>p16-Positivität:</strong> Surrogatmarker für HPV-Infektion, bessere Prognose.</li>
                    <li><strong>Deeskalationsstudien:</strong> Reduktion der Therapieintensität bei guter Prognose (in Studien).</li>
                    <li><strong>Therapieentscheidung:</strong> Standardtherapie weiterhin empfohlen außerhalb von Studien.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Oropharynxkarzinom - Frühstadium (T1-T2, N0-1)</h3>
                <ul>
                    <li><strong>Strahlentherapie:</strong> Alleinige Bestrahlung (IMRT), kurativ.</li>
                    <li><strong>Chirurgie:</strong> Transorale Laserchirurgie (TLM) oder Roboterchirurgie (TORS).</li>
                    <li><strong>Neck Dissection:</strong> Bei Lymphknotenbefall oder elektiv bei N0.</li>
                </ul>
                <h3>Oropharynxkarzinom - Fortgeschritten (T3-T4, N2-3)</h3>
                <ul>
                    <li><strong>Radiochemotherapie:</strong> Cisplatin-haltig (40 mg/m² wöchentlich), definitive Behandlung.</li>
                    <li><strong>Induktionschemotherapie:</strong> TPF (Docetaxel, Cisplatin, 5-FU) gefolgt von Radiotherapie ± Cetuximab (ausgewählte Fälle).</li>
                    <li><strong>Chirurgie:</strong> Primär bei ausgewählten Patienten mit nachfolgender adjuvanter Therapie.</li>
                </ul>
                <h3>Hypopharynxkarzinom</h3>
                <ul>
                    <li><strong>Frühstadium:</strong> Laserchirurgie oder Radiotherapie.</li>
                    <li><strong>Fortgeschritten:</strong> Radiochemotherapie oder Pharyngolaryngektomie mit postoperativer Radiotherapie.</li>
                    <li><strong>Larynxerhalt:</strong> Ziel wenn onkologisch möglich, funktionelle Ergebnisse berücksichtigen.</li>
                </ul>
                <h3>HPV-positive Tumoren</h3>
                <ul>
                    <li><strong>Bessere Prognose:</strong> Signifikant besseres Ansprechen auf Radiochemotherapie.</li>
                    <li><strong>Deeskalationsstudien:</strong> Reduktion der Therapieintensität wird in klinischen Studien geprüft.</li>
                    <li><strong>Standardtherapie:</strong> Weiterhin empfohlen außerhalb von Studien.</li>
                </ul>
                <h3>Metastasiertes Stadium (M1)</h3>
                <ul>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab (PD-L1 CPS ≥ 1%) oder Nivolumab.</li>
                    <li><strong>Chemo-Immuntherapie:</strong> Pembrolizumab + Platin + 5-FU (alle Stadien).</li>
                    <li><strong>Chemotherapie:</strong> Cisplatin/Carboplatin + 5-FU, Docetaxel, Paclitaxel.</li>
                    <li><strong>Targeted Therapy:</strong> Cetuximab + Chemotherapie.</li>
                    <li><strong>lokale Therapien:</strong> Chirurgie oder Strahlentherapie bei Oligometastasierung.</li>
                </ul>
                <h3>Rekonstruktive Chirurgie</h3>
                <ul>
                    <li><strong>Freie Lappen:</strong> Radialisfreier Unterarmlappen, anterolateraler Oberschenkellappen.</li>
                    <li><strong>Pedikulierte Lappen:</strong> Pectoralis-major-Lappen.</li>
                    <li><strong>Ziel:</strong> Funktionale Rehabilitation (Sprechen, Schlucken).</li>
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
                                <td>Jahr 1</td>
                                <td>Alle 1-3 Monate</td>
                                <td>HNO-Untersuchung, Endoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 2</td>
                                <td>Alle 2-4 Monate</td>
                                <td>HNO-Untersuchung, Endoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 4-6 Monate</td>
                                <td>HNO-Untersuchung, Endoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>HNO-Untersuchung, Endoskopie, Halsultraschall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Zweittumor-Screening</h3>
                <ul>
                    <li><strong>Panendoskopie:</strong> Regelmäßige Untersuchung auf Zweittumoren (Ösophagus, Bronchien).</li>
                    <li><strong>CT Thorax:</strong> Bei V.a. Zweittumor.</li>
                </ul>
                <h3>Funktionelle Rehabilitation</h3>
                <ul>
                    <li><strong>Logopädie:</strong> Bei Schluckstörungen und Stimmproblemen.</li>
                    <li><strong>Physiotherapie:</strong> Bei Schulterfunktionsstörungen nach Neck Dissection.</li>
                    <li><strong>Ernährungsberatung:</strong> Bei Mangelernährung und Schluckstörungen.</li>
                </ul>
                <h3>Zahnärztliche Nachsorge</h3>
                <ul>
                    <li><strong>Lebenslange Fluoridierung:</strong> Der Zähne nach Strahlentherapie.</li>
                    <li><strong>Kariesprophylaxe:</strong> Regelmäßige Kontrollen.</li>
                    <li><strong>Mundtrockenheit:</strong> Symptomatische Behandlung (Künstlicher Speichel, Pilocarpin).</li>
                    <li><strong>Osteoradionekrose:</strong> Bei Kieferbeschwerden frühzeitige Vorstellung.</li>
                </ul>
                <h3>Lebensstil</h3>
                <ul>
                    <li><strong>Raucherentwöhnung:</strong> Dringend empfohlen.</li>
                    <li><strong>Alkoholkarenz:</strong> Reduktion des Zweittumor-Risikos.</li>
                    <li><strong>Psychoonkologische Betreuung:</strong> Bei Bedarf.</li>
                </ul>
                <h3>Spätfolgen</h3>
                <ul>
                    <li><strong>Xerostomie:</strong> Mundtrockenheit nach Bestrahlung.</li>
                    <li><strong>Fibrose:</strong> Haut- und Weichteilfibrose im Bestrahlungsfeld.</li>
                    <li><strong>Dysphagie:</strong> Schluckstörungen durch Strahlenösophagitis.</li>
                    <li><strong>Hypothyreose:</strong> Nach Strahlentherapie bei Schilddrüsenbeteiligung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Oro- und Hypopharynxkarzinom. Version 1.0 - März 2024. AWMF-Registernummer: 017-082OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
