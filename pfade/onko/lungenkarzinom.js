(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "lungenkarzinom",
        module: "onko",
        title: "Lungenkarzinom",
        name: "Lungenkarzinom",
        category: "onko-pulmo",
        stand: "04/25",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste krebsbedingte Todesursache weltweit</li>
                    <li>In Deutschland ca. 57.000 Neuerkrankungen/Jahr (Männer: 35.290, Frauen: 21.930)</li>
                    <li>Männer : Frauen = 2 : 1 (Angleichung)</li>
                    <li>Median bei Diagnose: ca. 70 Jahre</li>
                    <li>5-Jahres-Überleben: ca. 17% (Männer), ca. 22% (Frauen)</li>
                </ul>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Verantwortlich für ca. 85% der Fälle (Dosis-Wirkungs-Beziehung).</li>
                    <li><strong>Passivrauchen:</strong> Erhöhtes Risiko bei Exposition.</li>
                    <li><strong>Asbest:</strong> Synergismus mit Rauchen.</li>
                    <li><strong>Radon:</strong> Natürliche Strahlenbelastung.</li>
                    <li><strong>Genetik:</strong> Familiäre Häufung, EGFR-Mutationen bei Adenokarzinomen.</li>
                    <li><strong>Luftverschmutzung:</strong> Feinstaub (PM2,5).</li>
                    <li><strong>Berufliche Exposition:</strong> Asbest, Dieselmotoremissionen, polyzyklische aromatische Kohlenwasserstoffe (PAK), Chromate, Arsen, Nickel.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Thorax-Computertomographie (CT)</h3>
                <ul>
                    <li><strong>Standard-CT Thorax:</strong> Charakterisierung des Primärtumors, Beurteilung der Lymphknoten, Grundlage für Staging.</li>
                    <li><strong>Kontrastmittel-CT:</strong> Verbesserte Gefäßdarstellung, insbesondere für mediastinale Lymphknoten.</li>
                </ul>
                <h3>Positronenemissionstomographie (PET-CT)</h3>
                <ul>
                    <li><strong>PET-CT Ganzkörper:</strong> Standard für Staging und Metastasensuche, Kombination von Stoffwechselinformationen (FDG) mit anatomischer Bildgebung.</li>
                    <li><strong>Indikationen:</strong> Differenzierung benign/maligne, Lymphknotenstaging, Fernmetastasen-Suche, Rezidivdiagnostik.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT Thorax:</strong> Weniger eingesetzt als CT, gute Weichteildifferenzierung.</li>
                    <li><strong>MRT Schädel:</strong> Zum Ausschluss von Hirnmetastasen, insbesondere bei SCLC und symptomatischen Patienten.</li>
                </ul>
                <h3>Sonographie</h3>
                <ul>
                    <li><strong>Abdomensonographie:</strong> Zum Ausschluss von Lebermetastasen und Nebennierenläsionen.</li>
                    <li><strong>Ultraschall-gesteuerte Biopsie:</strong> Für perkutane Tumorbiopsien.</li>
                </ul>
                <h3>Skelettdiagnostik</h3>
                <ul>
                    <li><strong>Skelettszintigraphie:</strong> Zum Nachweis von Knochenmetastasen.</li>
                    <li><strong>PET-CT:</strong> Zunehmend替代 für Skelettszintigraphie.</li>
                    <li><strong>MRT:</strong> Bei Verdacht auf osteoblastische Herde oder spinale Metastasen.</li>
                </ul>
                <h3>Bronchoskopie</h3>
                <ul>
                    <li><strong>Flexible Bronchoskopie:</strong> Diagnostik bei zentralen Tumoren, Bronchialkarzinom.</li>
                    <li><strong>Starre Bronchoskopie:</strong> Für interventionelle Eingriffe und Blutungen.</li>
                    <li><strong>Endobronchialer Ultraschall (EBUS):</strong> Kombination von Bronchoskopie und Ultraschall für Lymphknoten- und Tumorbiopsie.</li>
                    <li><strong>Navigationsbronchoskopie:</strong> Für periphere Läsionen.</li>
                </ul>
                <h3>CT-gesteuerte Biopsie</h3>
                <ul>
                    <li><strong>Perkutane Biopsie:</strong> Bei peripheren Tumoren, die bronchoskopisch nicht erreichbar sind.</li>
                    <li><strong>Coil-Markierung:</strong> Für präoperative Tumorlokalisation.</li>
                </ul>
                <h3>Mediastinoskopie</h3>
                <ul>
                    <li><strong>Mediastinoskopie:</strong> Chirurgische Lymphknotenentnahme bei unklarem Lymphknotenstatus.</li>
                    <li><strong>EBUS-TBNA:</strong> Minimalinvasive Alternative zur Mediastinoskopie.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Blutbild und Chemie</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Differenzierung von Anämie, Leukozytose, Thrombopenie.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium, Calcium.</li>
                    <li><strong>LDH:</strong> Laktatdehydrogenase, Prognoseparameter bei SCLC.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>CEA (Carcinoembryonales Antigen):</strong> Unspezifischer Marker, Verlaufskontrolle bei Adenokarzinom.</li>
                    <li><strong>CYFRA 21-1:</strong> Zytokeratin-Fragmente, Marker für NSCLC.</li>
                    <li><strong>NSE (Neuronenspezifische Enolase):</strong> Marker für SCLC.</li>
                    <li><strong>ProGRP (Pro-Gastrin-Releasing Peptide):</strong> SCLC-Marker.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP, BSG:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Gerinnungsparameter</h3>
                <ul>
                    <li><strong>TPZ, aPTT, Fibrinogen:</strong> Bei Verdacht auf tumorassoziierte Koagulopathie.</li>
                    <li><strong>D-Dimer:</strong> Bei Verdacht auf Thrombose (Punktrose).</li>
                </ul>
                <h3>Paraneoplastische Syndrome - Labor</h3>
                <ul>
                    <li><strong>Kalzium:</strong> Hyperkalzämie bei Plattenepithelkarzinom (PTHrP).</li>
                    <li><strong>Natrium:</strong> Hyponatriämie bei SIADH (SCLC).</li>
                    <li><strong>AKH (Adrenokortikotropes Hormon):</strong> Cushing-Syndrom.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Histologische Typen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Typ</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Adenokarzinom</strong></td>
                                <td>Ca. 40%</td>
                                <td>Häufigster Typ bei Nichtrauchern, peripher</td>
                            </tr>
                            <tr>
                                <td><strong>Plattenepithelkarzinom</strong></td>
                                <td>Ca. 25%</td>
                                <td>Zentral, starke Raucherassoziation</td>
                            </tr>
                            <tr>
                                <td><strong>Kleinzelliges Karzinom (SCLC)</strong></td>
                                <td>Ca. 20%</td>
                                <td>Hohe Teilungsrate, frühe Metastasierung</td>
                            </tr>
                            <tr>
                                <td><strong>Großzelliges Karzinom</strong></td>
                                <td>Ca. 10%</td>
                                <td>Undifferenziert, schlechte Prognose</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Bronchoskopische Biopsie:</strong> Zange, Bürste, Nadel für zentrale Tumoren.</li>
                    <li><strong>CT-gesteuerte Feinnadelbiopsie:</strong> Für periphere Tumoren.</li>
                    <li><strong>EBUS-TBNA:</strong> Endobronchialer Ultraschall mit transbronchialer Nadel aspiration.</li>
                    <li><strong>Mediastinoskopie:</strong> Chirurgische Biopsie.</li>
                    <li><strong>Pleura-Punktion:</strong> Bei Pleuraerguss.</li>
                    <li><strong>Zytologie:</strong> Sputum, Pleuraerguss, bronchoalveoläre Lavage.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Tumorart und -typ:</strong> Histologische Klassifikation nach WHO.</li>
                    <li><strong>Differenzierungsgrad:</strong> G1 (gut), G2 (mäßig), G3 (schlecht) differenziert.</li>
                    <li><strong>Immunhistochemie:</strong> TTF-1, Napsin A (Adenokarzinom), p40, p63 (Plattenepithel), Synaptophysin, Chromogranin (Neuroendokrin).</li>
                    <li><strong>Ki-67:</strong> Proliferationsindex, wichtig für SCLC.</li>
                </ul>
                <h3>Zytologische Diagnostik</h3>
                <ul>
                    <li><strong>Sputumzytologie:</strong> Wenig invasiv, geringe Sensitivität.</li>
                    <li><strong>Bronchialsekretzytologie:</strong> Bei Bronchoskopie.</li>
                    <li><strong>Pleuraerguss-Zytologie:</strong> Bei malignem Pleuraerguss.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>Standard-molekulare Testung (NSCLC)</h3>
                <p>Standardmäßige molekulare Diagnostik bei allen fortgeschrittenen Nicht-Plattenepithelkarzinomen:</p>
                <h4>Treibermutationen</h4>
                <ul>
                    <li><strong>EGFR-Mutation:</strong> Exon 19-Deletion, L858R (ca. 10-15% bei Kaukasiern, 50% bei Asiaten).</li>
                    <li><strong>ALK-Translokation:</strong> EML4-ALK (ca. 3-5%).</li>
                    <li><strong>ROS1-Translokation:</strong> (ca. 1-2%).</li>
                    <li><strong>BRAF V600E-Mutation:</strong> (ca. 1-3%).</li>
                    <li><strong>KRAS-G12C-Mutation:</strong> Häufigste Mutation bei Rauchern.</li>
                </ul>
                <h4>Weitere Mutationen</h4>
                <ul>
                    <li><strong>NTRK-Translokation:</strong> Selten, zielgerichtete Therapie möglich.</li>
                    <li><strong>MET-Exon-14-Skipping:</strong> (ca. 2-4%).</li>
                    <li><strong>RET-Translokation:</strong> (ca. 1-2%).</li>
                    <li><strong>HER2-Mutation:</strong> (ca. 1-2%).</li>
                </ul>
                <h3>Immunbiomarker</h3>
                <ul>
                    <li><strong>PD-L1-Expression:</strong> Immunhistochemie für Immuntherapie-Entscheidung (TPS - Tumor Proportion Score).</li>
                    <li><strong>TPS ≥50%:</strong> Hohe Wahrscheinlichkeit für Ansprechen auf Immuntherapie.</li>
                    <li><strong>TPS 1-49%:</strong> Entscheidung nach Therapielinie und Kombination.</li>
                    <li><strong>TPS <1%:</strong> Niedriges Ansprechen auf Immunmonotherapie.</li>
                </ul>
                <h3>Testmethoden</h3>
                <ul>
                    <li><strong>PCR:</strong> Mutationsanalyse (EGFR, KRAS, BRAF).</li>
                    <li><strong>NGS (Next-Generation Sequencing):</strong> Panel-Testung für multiple Gene.</li>
                    <li><strong>FISH:</strong> Translokationsnachweis (ALK, ROS1, RET, NTRK).</li>
                    <li><strong>IHC:</strong> Immunhistochemie als Screening (ALK, ROS1, PD-L1).</li>
                </ul>
                <h3>Molekulare Resistenzmechanismen</h3>
                <ul>
                    <li><strong>EGFR T790M:</strong> Resistenz gegen Erlotinib, Gefitinib, Afatinib.</li>
                    <li><strong>EGFR C797S:</strong> Resistenz gegen Osimertinib.</li>
                    <li><strong>ALK G1202R:</strong> Resistenz gegen ALK-Inhibitoren.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinische Symptome</h3>
                <ul>
                    <li><strong>Lokal:</strong> Husten, Hämoptysen, Dyspnoe, Thoraxschmerzen, Stridor.</li>
                    <li><strong>Paraneoplastisch:</strong> Hyperkalzämie, SIADH, Lambert-Eaton-Syndrom.</li>
                    <li><strong>Metastasen:</strong> Knochenschmerzen, neurologische Ausfälle, Ikterus.</li>
                </ul>
                <h3>TNM-Stadien (NSCLC, 8. Edition)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>TNM</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>IA</strong></td>
                                <td>T1a/b N0 M0</td>
                                <td>Tumor ≤3 cm, lokalisiert</td>
                            </tr>
                            <tr>
                                <td><strong>IB</strong></td>
                                <td>T2a N0 M0</td>
                                <td>Tumor 3-4 cm, lokalisiert</td>
                            </tr>
                            <tr>
                                <td><strong>IIA</strong></td>
                                <td>T2b N0 M0, T1-2 N1 M0</td>
                                <td>Lokal fortgeschritten, regionäre LK</td>
                            </tr>
                            <tr>
                                <td><strong>IIB</strong></td>
                                <td>T3 N0 M0, T1-2 N2 M0</td>
                                <td>Lokal fortgeschritten</td>
                            </tr>
                            <tr>
                                <td><strong>IIIA</strong></td>
                                <td>T3-4 N1 M0, T1-3 N2 M0</td>
                                <td>Lokal fortgeschritten, potenziell operabel</td>
                            </tr>
                            <tr>
                                <td><strong>IIIB</strong></td>
                                <td>T4 N2-3 M0, T3-4 N3 M0</td>
                                <td>Lokal fortgeschritten, inoperabel</td>
                            </tr>
                            <tr>
                                <td><strong>IIIC</strong></td>
                                <td>T3-4 N3 M0</td>
                                <td>Lokal fortgeschritten</td>
                            </tr>
                            <tr>
                                <td><strong>IVA</strong></td>
                                <td>Jedes T, jedes N, M1a/b</td>
                                <td>Metastasen (pleural/perikardial oder intrathorakal)</td>
                            </tr>
                            <tr>
                                <td><strong>IVB</strong></td>
                                <td>Jedes T, jedes N, M1c</td>
                                <td>Fernmetastasen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>T-Kategorie (Tumor)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>T-Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>T1</td><td>≤3 cm, umgeben von Lungengewebe/Bvisceral</td></tr>
                            <tr><td>T1a</td><td>≤1 cm</td></tr>
                            <tr><td>T1b</td><td>>1-2 cm</td></tr>
                            <tr><td>T1c</td><td>>2-3 cm</td></tr>
                            <tr><td>T2</td><td>>3-5 cm oder Infiltration Hauptbronchus/viszerale Pleura</td></tr>
                            <tr><td>T2a</td><td>>3-4 cm</td></tr>
                            <tr><td>T2b</td><td>>4-5 cm</td></tr>
                            <tr><td>T3</td><td>>5-7 cm oder Infiltration Brustwand/Perikard/Phrenikus</td></tr>
                            <tr><td>T4</td><td>>7 cm oder Infiltration Mediastinum/Diaphragma/Herz</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>N-Kategorie (Lymphknoten)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>N-Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>N0</td><td>Keine regionären Lymphknotenmetastasen</td></tr>
                            <tr><td>N1</td><td>Peribronchiale/Lymphknoten ipsilateral hilär/intrapulmonal</td></tr>
                            <tr><td>N2</td><td>ipsilaterale Mediastinal-LK</td></tr>
                            <tr><td>N3</td><td>kontralaterale Mediastinal-LK/Supraklavikular-LK</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>M-Kategorie (Metastasen)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>M-Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>M0</td><td>Keine Fernmetastasen</td></tr>
                            <tr><td>M1a</td><td>Kontralaterale Lungenknoten/Pleuraerguss/Perikarderguss</td></tr>
                            <tr><td>M1b</td><td>Einzelne Fernmetastase</td></tr>
                            <tr><td>M1c</td><td>Multiple Fernmetastasen</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>SCLC-Stadien</h3>
                <ul>
                    <li><strong>Very Limited Disease (VLD):</strong> Auf einen Hemithorax beschränkt ohne Lymphknotenbefall im Mediastinum, inkl. ipsilaterale Pleuraerguss.</li>
                    <li><strong>Limited Disease:</strong> Auf einen Hemithorax beschränkt, inkl. kontralaterale Mediastinal-LK und ipsilaterale Pleuraerguss.</li>
                    <li><strong>Extensive Disease:</strong> Ausgedehnte Erkrankung außerhalb des Hemithorax.</li>
                </ul>
                <h3>Metastasenlokalisation</h3>
                <ul>
                    <li><strong>Gehirn:</strong> Häufig bei SCLC und Adenokarzinom.</li>
                    <li><strong>Knochen:</strong> Osteolytische und osteoblastische Metastasen.</li>
                    <li><strong>Leber:</strong> Häufig bei SCLC.</li>
                    <li><strong>Nebennieren:</strong> Häufige Metastasenstelle.</li>
                    <li><strong>Lunge:</strong> Interpulmonale Metastasen.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>NSCLC - Stadium I-II (operabel)</h3>
                <ul>
                    <li><strong>Chirurgische Resektion:</strong> Lobektomie als Standard, Segmentektomie bei limitierter Funktion.</li>
                    <li><strong>Adjuvante Chemotherapie:</strong> Bei Stadium IB mit Risikofaktoren und Stadium II.</li>
                    <li><strong>Adjuvante Immuntherapie:</strong> Atezolizumab bei PD-L1 ≥1% nach Chemotherapie (Stadium II-IIIA).</li>
                    <li><strong>Neoadjuvante Therapie:</strong> Neoadjuvante Chemo-Immuntherapie (Nivolumab + Platin-basiert) für resektable NSCLC Stadium IB-IIIA.</li>
                    <li><strong>Stereotaktische Bestrahlung (SBRT):</strong> Bei Inoperabilität.</li>
                </ul>
                <h3>NSCLC - Stadium III (lokaler fortgeschritten)</h3>
                <ul>
                    <li><strong>Nicht-resektable Fälle:</strong> Definitive Radiochemotherapie (Platin-basiert) + Durvalumab-Erhaltung (mind. 12 Monate).</li>
                    <li><strong>Resektable Fälle:</strong> Multimodale Therapie (Operation + adjuvante/neoadjuvante Chemotherapie ± Radiotherapie).</li>
                </ul>
                <h3>NSCLC - Stadium IV (metastasiert)</h3>
                <h4>Mit Treibermutationen (First-Line)</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Konstellation</th>
                                <th>Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>EGFR-Mutation</strong></td>
                                <td>Osimertinib (vorzugsweise), Erlotinib, Afatinib, Gefitinib + Chemotherapie</td>
                            </tr>
                            <tr>
                                <td><strong>ALK-Translokation</strong></td>
                                <td>Alectinib (vorzugsweise), Brigatinib, Lorlatinib, Ceritinib, Crizotinib</td>
                            </tr>
                            <tr>
                                <td><strong>ROS1-Translokation</strong></td>
                                <td>Entrectinib (bevorzugt), Crizotinib, Lorlatinib</td>
                            </tr>
                            <tr>
                                <td><strong>BRAF V600E</strong></td>
                                <td>Dabrafenib + Trametinib</td>
                            </tr>
                            <tr>
                                <td><strong>NTRK-Translokation</strong></td>
                                <td>Larotrectinib, Entrectinib</td>
                            </tr>
                            <tr>
                                <td><strong>MET-Exon-14-Skipping</strong></td>
                                <td>Capmatinib, Tepotinib</td>
                            </tr>
                            <tr>
                                <td><strong>RET-Translokation</strong></td>
                                <td>Selpercatinib, Pralsetinib</td>
                            </tr>
                            <tr>
                                <td><strong>HER2-Mutation</strong></td>
                                <td>Trastuzumab-Deruxtecan, Afatinib</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Ohne Treibermutation</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Konstellation</th>
                                <th>Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>PD-L1 ≥50%</strong></td>
                                <td>Pembrolizumab-Monotherapie</td>
                            </tr>
                            <tr>
                                <td><strong>PD-L1 1-49%</strong></td>
                                <td>Pembrolizumab + Platin-basiert (Chemo-Immuntherapie)</td>
                            </tr>
                            <tr>
                                <td><strong>PD-L1 <1%</strong></td>
                                <td>Chemo-Immuntherapie (Platin-basiert + Pembrolizumab/Nivolumab)</td>
                            </tr>
                            <tr>
                                <td><strong>Plattenepithelkarzinom</strong></td>
                                <td>Chemo-Immuntherapie (Platin + Gemcitabine/Nab-Paclitaxel + Pembrolizumab)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>SCLC - Limited Disease</h3>
                <ul>
                    <li><strong>Radiochemotherapie:</strong> Cisplatin/Etoposid + thorakale Bestrahlung ( beginnend mit Zyklus 1 oder 2).</li>
                    <li><strong>Prophylaktische Hirnbestrahlung:</strong> Bei gutem Ansprechen (nach individueller Nutzen-Risiko-Abwägung).</li>
                    <li><strong>Adjuvante Immuntherapie:</strong> Atezolizumab nach Abschluss der Radiochemotherapie.</li>
                </ul>
                <h3>SCLC - Extensive Disease</h3>
                <ul>
                    <li><strong>Chemo-Immuntherapie:</strong> Carboplatin + Etoposid + Atezolizumab ODER Durvalumab.</li>
                    <li><strong>Zweitlinientherapie:</strong> Topotecan, Lurbinectedin.</li>
                    <li><strong>Drittlinientherapie:</strong> Re-Challenge mit Platin/Etoposid bei langer Remissionsdauer (>6 Monate).</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Strukturierte Nachsorge (NSCLC)</h3>
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
                                <td>Anamnese, körperliche Untersuchung, CT Thorax/Abdomen</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, CT Thorax/Abdomen</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, körperliche Untersuchung, CT Thorax</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bildgebung bei klinischem Verdacht auf Rezidiv.</li>
                    <li>Raucherentwöhnung (fortgesetzt).</li>
                    <li>Pneumologische Rehabilitation.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Impfungen (Influenza, Pneumokokken, COVID-19).</li>
                    <li>Langzeitnachsorge bei Bedarf.</li>
                </ul>
                <h3>SCLC-Nachsorge</h3>
                <ul>
                    <li>Engmaschigere Kontrollen (alle 3 Monate in den ersten 2 Jahren).</li>
                    <li>MRT Schädel alle 6-12 Monate in den ersten 2 Jahren.</li>
                    <li>PET-CT bei Verdacht auf Rezidiv.</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Stationäre pneumologische Anschlussrehabilitation (AHB).</li>
                    <li>Physiotherapie und Atemtherapie.</li>
                    <li>Sport- und Bewegungstherapie.</li>
                    <li>Ernährungsberatung.</li>
                    <li>Sozialberatung.</li>
                </ul>`
            },
            {
                title: "Früherkennung",
                html: `<h3>Niedrigdosis-CT Screening (LDCT)</h3>
                <p>Seit Juli 2024 ermöglicht die Lungenkrebs-Früherkennungs-Verordnung (LuKrFrühErkV) ein strukturiertes Lungenkrebs-Screening in Deutschland.</p>
                <h4>Einschlusskriterien</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Alter</strong></td>
                                <td>55-74 Jahre (bei Raucherentwöhnung bis 80 Jahre)</td>
                            </tr>
                            <tr>
                                <td><strong>Raucherstatus</strong></td>
                                <td>Aktuelle oder ehemalige Raucher (≥10 Packungsjahre)</td>
                            </tr>
                            <tr>
                                <td><strong>Karenzzeit</strong></td>
                                <td>Mindestens 15 Jahre seit Raucherentwöhnung möglich</td>
                            </tr>
                            <tr>
                                <td><strong>Erstwohnsitz</strong></td>
                                <td>Deutschland</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Ausschlusskriterien</h4>
                <ul>
                    <li>Bereits diagnostizierter Lungenkrebs oder Verdacht darauf.</li>
                    <li>Innerhalb der letzten 3 Jahre durchgeführte Thorax-CT.</li>
                    <li>Akute Infektionskrankheit oder instabile chronische Erkrankung.</li>
                    <li>Kontraindikationen für Kontrastmittel (bei CT mit Kontrast).</li>
                </ul>
                <h4>Lung-RADS Klassifikation 2022</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Befund</th>
                                <th>Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Lung-RADS 0</strong></td>
                                <td>Nicht beurteilbar</td>
                                <td>Zusätzliche Bildgebung erforderlich</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 1</strong></td>
                                <td>Negativ (keine Knoten)</td>
                                <td>Jährliches Screening</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 2</strong></td>
                                <td>Benigne appearance</td>
                                <td>Jährliches Screening</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 3</strong></td>
                                <td>Wahrscheinlich benigne</td>
                                <td>6-Monats-Follow-up CT</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 4A</strong></td>
                                <td>Verdacht auf Malignität</td>
                                <td>Diagnostische Abklärung (PET-CT/Biopsie)</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 4B</strong></td>
                                <td>Sehr verdächtig</td>
                                <td>Diagnostische Abklärung + interdisziplinäre Tumorkonferenz</td>
                            </tr>
                            <tr>
                                <td><strong>Lung-RADS 4X</strong></td>
                                <td>Extraspezifische Malignitätszeichen</td>
                                <td>Diagnostische Abklärung + interdisziplinäre Tumorkonferenz</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Screening-Intervall</h4>
                <ul>
                    <li><strong>Jährlich:</strong> Lung-RADS 1, 2</li>
                    <li><strong>6 Monate:</strong> Lung-RADS 3</li>
                    <li><strong>Diagnostische Abklärung:</strong> Lung-RADS 4A, 4B, 4X</li>
                </ul>
                <h4>Beratung und Raucherentwöhnung</h4>
                <ul>
                    <li>Strukturierte Beratung vor und nach dem Screening.</li>
                    <li>Aktive Raucherentwöhnungsangebote (Nikotinersatztherapie, Medikamente).</li>
                    <li>Multiprofessionelle Betreuung.</li>
                </ul>`
            },
            {
                title: "Palliativmedizin",
                html: `<h3>Grundlagen der Palliativmedizin</h3>
                <p>Die Palliativmedizin dient der Verbesserung der Lebensqualität von Patienten mit fortgeschrittenem Lungenkarzinom und deren Angehörigen.</p>
                <h3>Dyspnoe-Therapie</h3>
                <h4>Nicht-pharmakologische Maßnahmen</h4>
                <ul>
                    <li><strong>Lagerung:</strong> Aufrechte Position, Abstützen der Arme.</li>
                    <li><strong>Atemtraining:</strong> Lippenbremse, Zwerchfellatmung.</li>
                    <li><strong>Kühlung:</strong> Frische Luft, Ventilator.</li>
                    <li><strong>Psychische Unterstützung:</strong> Angstreduktion, Entspannungstechniken.</li>
                    <li><strong>Sauerstofftherapie:</strong> Bei Hypoxämie (SpO2 < 88%).</li>
                </ul>
                <h4>Pharmakologische Therapie</h4>
                <ul>
                    <li><strong>Opioide:</strong> Niedrigdosierte Morphinpräparate (z.B. Morphin retard 10mg alle 12h, oromorph 2-4stündlich).</li>
                    <li><strong>Benzodiazepine:</strong> Bei starker Angst (z.B. Lorazepam 0,5-1mg sublingual).</li>
                    <li><strong>Bronchodilatatoren:</strong> Bei obstruktiver Komponente.</li>
                    <li><strong>Kortikosteroide:</strong> Bei lymphangischer Karzinose oder Obstruktion (z.B. Dexamethason 4-8mg).</li>
                </ul>
                <h3>Schmerztherapie</h3>
                <h4>WHO-Stufenplan</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stufe</th>
                                <th>Medikamente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Stufe 1</strong></td>
                                <td>Nicht-Opioid-Analgetika (Paracetamol, NSAR) + Koanalgetika</td>
                            </tr>
                            <tr>
                                <td><strong>Stufe 2</strong></td>
                                <td>Schwache Opioide (Tramadol, Dihydrocodein) + Stufe 1</td>
                            </tr>
                            <tr>
                                <td><strong>Stufe 3</strong></td>
                                <td>Starke Opioide (Morphin, Oxycodon, Fentanyl) + Stufe 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Koanalgetika</h4>
                <ul>
                    <li><strong>Neuropathischer Schmerz:</strong> Gabapentin, Pregabalin, Duloxetin.</li>
                    <li><strong>Knochenschmerzen:</strong> Bisphosphonate (Zoledronsäure), Denosumab.</li>
                    <li><strong>Entzündliche Schmerzen:</strong> NSAR, Kortikosteroide.</li>
                </ul>
                <h4>Opioid-Rotation</h4>
                <p>Bei unzureichender Schmerzlinderung oder Nebenwirkungen: Rotation auf anderes Opioid unter Berücksichtigung äquianalgetischer Dosierungen.</p>
                <h3>Terminale Betreuung</h3>
                <h4>Symptomkontrolle in der Sterbephase</h4>
                <ul>
                    <li><strong>Dyspnoe:</strong> Niedrigdosierte Opioide, ggf. Sedierung bei schwerer Atemnot.</li>
                    <li><strong>Schmerzen:</strong> Kontinuierliche Opioidgabe (subkutan/retardiert).</li>
                    <li><strong>Sekretion:</strong> Anticholinergika (Scopolamin, Butylscopolamin).</li>
                    <li><strong>Unruhe:</strong> Benzodiazepine, Haloperidol.</li>
                </ul>
                <h4>Komunikation und Angehörigenbetreuung</h4>
                <ul>
                    <li>Regelmäßige Gespräche über Prognose und Behandlungsziele.</li>
                    <li>Einbeziehung der Angehörigen in die Versorgung.</li>
                    <li>Klärung von Patientenverfügung und Vorsorgevollmacht.</li>
                    <li>Spirituelle und psychosoziale Unterstützung.</li>
                </ul>
                <h4>Versorgungsstrukturen</h4>
                <ul>
                    <li>Palliativstation.</li>
                    <li>Palliativmedizinischer Konsiliardienst.</li>
                    <li>Ambulante Palliativversorgung (SAPV).</li>
                    <li>Hospizdienst.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Lungenkarzinom. AWMF-Registernummer: 020-007OL. Version 4.0 – April 2025. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
