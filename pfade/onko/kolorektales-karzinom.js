(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "kolorektales-karzinom",
        module: "onko",
        title: "Kolorektales Karzinom",
        name: "Kolorektales Karzinom",
        category: "onko-gi",
        stand: "S3-LL 3.0",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Das Kolorektale Karzinom (KRK) ist mit etwa 55.000 Neuerkrankungen (2022) und ca. 23.000 Todesfällen (2022) pro Jahr in Deutschland einer der häufigsten malignen Tumoren.</li>
                    <li>Circa jede neunte Krebserkrankung in Deutschland tritt im Kolorektum auf, wobei zwei Drittel der Neuerkrankungen das Kolon betreffen.</li>
                    <li>Sowohl die Anzahl der Neuerkrankungen als auch die Mortalität sind seit 2003 rückläufig.</li>
                    <li>Es handelt sich meist um eine Erkrankung des höheren Lebensalters, das mittlere Erkrankungsalter liegt bei Frauen bei 75 Jahren und bei Männern bei 71 Jahren.</li>
                    <li>Dritthäufigste Krebserkrankung weltweit</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 7. Lebensjahrzehnt</li>
                    <li>Leichtes Überwiegen des männlichen Geschlechts</li>
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
                                <td><strong>Ernährung / Lebensstil</strong></td>
                                <td>Rotes Fleisch, verarbeitete Fleischprodukte, geringe Ballaststoffzufuhr, Adipositas, körperliche Inaktivität, Rauchen, Alkohol.</li>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Lynch-Syndrom (HNPCC), Familiäre adenomatöse Polyposis (FAP), MUTYH-assoziierte Polyposis, Serratiertes Polyposis-Syndrom.</li>
                            </tr>
                            <tr>
                                <td><strong>Entzündlich</strong></td>
                                <td>Colitis ulcerosa, Morbus Crohn (langjähriger Verlauf).</li>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Prävention</h3>
                <ul>
                    <li><strong>Regelmäßige körperliche Aktivität:</strong> Personen mit regelmäßiger körperlicher Aktivität haben ein niedrigeres Risiko für kolorektale Karzinome. Bereits tägliche moderate Aktivität von 30-60 min geht mit einem reduziertem Karzinomrisiko einher.</li>
                    <li><strong>Ernährung:</strong> Empfohlen wird eine Ernährung reich an Vollkornprodukten und Ballaststoffen (z. B. in Gemüse und Obst), pflanzlichen Lebensmitteln, Milchprodukten und arm an hoch verarbeiteten Lebensmitteln, prozessiertem und rotem Fleisch.</li>
                    <li><strong>Rauchen:</strong> Rauchen ist mit einem um ca. 15-20 % erhöhtem Risiko für kolorektale Karzinome verbunden.</li>
                    <li><strong>Alkohol:</strong> Es besteht eine positive Korrelation zwischen einem hohen Alkoholkonsum und der Entstehung eines KRK. Eine Reduktion des Alkoholkonsums wird empfohlen.</li>
                    <li><strong>Medikamentöse Prophylaxe:</strong> ASS, COX-2 Hemmer, Statine oder Hormone sollten nicht zur Primärprophylaxe des KRK empfohlen werden.</li>
                </ul>`
            },
            {
                title: "Früherkennung & Screening",
                html: `<h3>Organisierte Früherkennung (ab 50 Jahre)</h3>
                <ul>
                    <li><strong>Koloskopie:</strong> Goldstandard zur Früherkennung. Alle 10 Jahre bei unauffälligem Befund.</li>
                    <li><strong>iFOBT (immunologischer fäkaler Okkultbluttest):</strong> Alle 2 Jahre als opportunistische Untersuchung.</li>
                    <li><strong>Sigmoidoskopie:</strong> Alle 5 Jahre als Alternative zur Koloskopie (nur bei Männern im Rahmen des organisierten Screening-Programms).</li>
                </ul>
                <h3>Erweiterte Screening-Verfahren</h3>
                <ul>
                    <li><strong>CT-Kolonographie:</strong> Alternative zur Koloskopie bei inkompletter Koloskopie oder Ablehnung. Sensitivität für Polypen ≥10mm >90%. Strahlenbelastung beachten.</li>
                    <li><strong>MR-Kolonographie:</strong> Keine Strahlenbelastung, jedoch eingeschränkte Verfügbarkeit.</li>
                    <li><strong>Kapselkoloskopie:</strong> Alternative bei inkompletter Koloskopie oder Ablehnung. Höhere Sensitivität als iFOBT, jedoch nicht als Screening-Methode zugelassen.</li>
                </ul>
                <h3>Genetische Tests</h3>
                <ul>
                    <li><strong>Fäkale DNA-Tests (z.B. Cologuard®):</strong> Kombination aus iFOBT und DNA-Markern. Höhere Sensitivität als iFOBT allein, aber geringere Spezifität. Nicht als Kassenleistung in Deutschland.</li>
                    <li><strong>Septin9-Bluttest:</strong> Methyliertes Septin9-Gen im Blut. Weniger sensitiv als iFOBT oder Koloskopie. Keine Kassenleistung.</li>
                </ul>
                <h3>Risikogruppen-Screening</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Screening-Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Risikogruppe 1</strong><br/>(Durchschnittsrisiko)</td>
                                <td>Koloskopie alle 10 Jahre ab 50 Jahren oder iFOBT alle 2 Jahre.</td>
                            </tr>
                            <tr>
                                <td><strong>Risikogruppe 2</strong><br/>(Erhöhtes Risiko)</td>
                                <td>Verwandte 1. Grades mit KRK oder Adenom: Koloskopie 10 Jahre vor dem Erkrankungsalter des Indexpatienten, spätestens ab 40-45 Jahren.</td>
                            </tr>
                            <tr>
                                <td><strong>Risikogruppe 3</strong><br/>(Hohes Risiko)</td>
                                <td>Colitis ulcerosa/Morbus Crohn: Koloskopie mit Chromoendoskopie ab Diagnosestellung (Pankolitis nach 8 Jahre, Links colitis nach 15 Jahre).</td>
                            </tr>
                            <tr>
                                <td><strong>Risikogruppe 4</strong><br/>(Sehr hohes Risiko)</td>
                                <td>Hereditäre Syndrome (Lynch, FAP, MAP): Spezifische Überwachungsprogramme (s. Kapitel 5).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Endoskopie</h3>
                <ul>
                    <li><strong>Koloskopie:</strong> Goldstandard zur Diagnosesicherung mit Biopsieentnahme. Vollständige Koloskopie mit Intubation des Zökums anzustreben.</li>
                    <li><strong>Rektosigmoidoskopie:</strong> Für Tumoren im Rektum und Sigma.</li>
                    <li><strong>Endosonographie (Rektum):</strong> Ergänzend zur MRT für uT- und uN-Staging bei Rektumkarzinom.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>Abdomen-CT (mit Kontrastmittel):</strong> Lebermetastasen, Lymphknotenbefall, lokale Infiltration.</li>
                    <li><strong>Thorax-CT (mit Kontrastmittel):</strong> Lungenmetastasen.</li>
                    <li><strong>CT-Kolonographie:</strong> Alternative zur Koloskopie bei inkompletter Koloskopie oder Ablehnung. Sensitivität für Polypen ≥10mm >90%.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Bei Rektumkarzinom obligat zur Beurteilung der lokalen Ausbreitung, CRM (Circumferential Resection Margin), mesorektaler Faszie und Extramuraler Veneninvasion (EMVI).</li>
                    <li><strong>MR-Kolonographie:</strong> Keine Strahlenbelastung, jedoch eingeschränkte Verfügbarkeit.</li>
                </ul>
                <h3>Sonographie</h3>
                <ul>
                    <li><strong>Abdomensonographie:</strong> Erstliniendiagnostik für Lebermetastasen.</li>
                    <li><strong>Endosonographie:</strong> Zur Beurteilung der Tiefeninfiltration bei Rektumkarzinom.</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Nicht routinemäßig, bei Verdacht auf Fernmetastasierung oder unklaren Befunden. Kombination von Stoffwechselinformationen (FDG) mit anatomischer Bildgebung.</li>
                </ul>
                <h3>Szintigraphie</h3>
                <ul>
                    <li><strong>Skelettszintigraphie:</strong> Bei Verdacht auf Knochenmetastasen (insbesondere bei hohen Tumoren oder Knochenschmerzen).</li>
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
                    <li><strong>LDH:</strong> Laktatdehydrogenase, Prognoseparameter.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>CEA (Carcinoembryonales Antigen):</strong> Wichtigster Tumormarker für Kolorektales Karzinom. Verlaufskontrolle und Nachsorge. Nicht geeignet für Primärdiagnostik.</li>
                    <li><strong>CA 19-9:</strong> Ergänzender Marker, insbesondere bei Pankreasbeteiligung.</li>
                    <li><strong>CA 125:</strong> Bei Verdacht auf Ovarialbeteiligung (insbesondere bei Frauen).</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP, BSG:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Stuhluntersuchungen</h3>
                <ul>
                    <li><strong>iFOBT (immunologischer fäkaler Okkultbluttest):</strong> Zur Früherkennung, nicht für Diagnostik geeignet.</li>
                    <li><strong>Fäkale DNA-Tests (z.B. Cologuard®):</strong> Kombination aus iFOBT und DNA-Markern. Nicht als Kassenleistung in Deutschland.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Koloskopische Biopsie:</strong> Multi-Biopsien aus dem Tumor. Gezielte Biopsie aus suspekten Läsionen.</li>
                    <li><strong>Endosonographisch-gesteuerte Biopsie:</strong> Für tiefergelegene Rektumkarzinome.</li>
                    <li><strong>Zytologie:</strong> Zytologische Untersuchung von Aszites oder Pleuraerguss bei metastasierter Erkrankung.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Tumorart und -typ:</strong> Standardisierte pathologische Aufarbeitung gemäß aktueller WHO-Klassifikation. Adenokarzinom, muzinöses Adenokarzinom, Siegelringzellkarzinom, plattenepitheliales Karzinom, neuroendokrine Tumoren.</li>
                    <li><strong>Differenzierungsgrad:</strong> G1 (gut), G2 (mäßig), G3 (schlecht) differenziert.</li>
                    <li><strong>Tumorgröße:</strong> Maximaler Durchmesser in mm.</li>
                    <li><strong>Tiefeninvasion:</strong> pT-Stadium (Tis, T1-T4).</li>
                    <li><strong>Lymphknotenstatus:</strong> Zahl befallener Lymphknoten / untersuchte Lymphknoten (mindestens 12 Lymphknoten).</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Nachweis von Tumorzellen in Lymphgefäßen.</li>
                    <li><strong>Perineurale Invasion (PNI):</strong> Nachweis von Tumorzellen in Nervenscheiden.</li>
                    <li><strong>Resektionsränder:</strong> R0 (mikroskopisch tumorfrei), R1 (mikroskopisch Tumorzellen), R2 (makroskopisch Tumor).</li>
                </ul>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li><strong>CK20, CDX2:</strong> Marker für kolorektale Differenzierung.</li>
                    <li><strong>CK7:</strong> Differenzierung kolorektal vs. andere Primärtumoren.</li>
                    <li><strong>MSI/MMR-Proteine:</strong> MLH1, PMS2, MSH2, MSH6 (s. Molekulare Diagnostik).</li>
                </ul>
                <h3>Rektumkarzinom-spezifische Pathologie</h3>
                <ul>
                    <li><strong>CRM (Circumferential Resection Margin):</strong> ≤ 1 mm: R1-Resektion.</li>
                    <li><strong>EMVI (Extramurale Veneninvasion):</strong> Prognosefaktor.</li>
                    <li><strong>pCR (pathologische komplette Remission):</strong> Keine vitalen Tumorzellen im Präparat nach neoadjuvanter Therapie. Prognostisch günstig.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>MMR-Status / MSI</h3>
                <ul>
                    <li><strong>MSI-Status/dMMR:</strong> Bestimmung bei allen erstdiagnostizierten KRK (universelles Screening auf Lynch-Syndrom).</li>
                    <li><strong>Immunhistochemie:</strong> Für MLH1, PMS2, MSH2, MSH6. Verlust zeigt MMR-Defizienz.</li>
                    <li><strong>PCR-Analyse:</strong> Bei Verlust in der IHC zur Bestätigung (Microsatellite Instability Testing).</li>
                    <li><strong>Bedeutung:</strong> Prognosefaktor, prädiktiv für Immuntherapie (Pembrolizumab/Nivolumab).</li>
                </ul>
                <h3>RAS-Mutationsstatus</h3>
                <ul>
                    <li><strong>KRAS-Mutation:</strong> Exon 2 (Codons 12, 13), Exon 3 (Codons 59, 61), Exon 4 (Codons 117, 146). Ausschluss für Anti-EGFR-Therapie.</li>
                    <li><strong>NRAS-Mutation:</strong> Exon 2, 3, 4. Ausschluss für Anti-EGFR-Therapie.</li>
                    <li><strong>Testmethode:</strong> PCR, NGS, pyrosequencing.</li>
                </ul>
                <h3>BRAF-Mutation</h3>
                <ul>
                    <li><strong>BRAF V600E-Mutation:</strong> Zur Unterscheidung sporadisch vs. hereditär (Lynch-Syndrom). Prognosefaktor (schlechtere Prognose).</li>
                    <li><strong>Testmethode:</strong> PCR, NGS, Immunhistochemie als Screening.</li>
                </ul>
                <h3>HER2-Status</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei metastasiertem KRAS-Wildtyp.</li>
                    <li><strong>Immunhistochemie (IHC):</strong> 0, 1+, 2+, 3+.</li>
                    <li><strong>ISH/FISH:</strong> Bei IHC 2+ zur Bestätigung.</li>
                    <li><strong>HER2-positiv:</strong> IHC 3+ oder ISH positiv: Trastuzumab oder Pertuzumab möglich.</li>
                </ul>
                <h3>Weitere molekulare Marker</h3>
                <ul>
                    <li><strong>Liquid Biopsy (ctDNA):</strong> Zur Molekularprofiling bei metastasierter Erkrankung, wenn Gewebebiopsie nicht möglich. Zur Verlaufsbeurteilung unter Therapie (MRD-Detektion) in Studien.</li>
                    <li><strong>NTRK-Fusion:</strong> Bei Vorliegen: Larotrectinib oder Entrectinib.</li>
                    <li><strong>POLE-Mutation:</strong> Im Stadium II: günstige Prognose, möglicher Verzicht auf Chemotherapie.</li>
                </ul>
                <h3>Genetische Tests</h3>
                <ul>
                    <li><strong>Keimbahnmutationstestung:</strong> Bei Verdacht auf hereditäres KRK (Lynch-Syndrom, FAP, MAP).</li>
                    <li><strong>Multigene Panels:</strong> NGS-basierte Panel-Testung bei familiärer Belastung.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>Anamnese und körperliche Untersuchung:</strong> Erfassung von Symptomen, Gewichtsverlust, Leistungsminderung.</li>
                    <li><strong>Digital-rektale Untersuchung:</strong> Bei Rektumkarzinom zur Beurteilung der Tumorlage und -ausbreitung.</li>
                </ul>
                <h3>TNM-Klassifikation (8. Edition)</h3>
                <h4>T-Kategorie (Tumor)</h4>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>T-Kategorie</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Tis</td><td>Carcinoma in situ</td></tr>
                            <tr><td>T1</td><td>Tumor invadiert Submukosa</td></tr>
                            <tr><td>T2</td><td>Tumor invadiert Muscularis propria</td></tr>
                            <tr><td>T3</td><td>Tumor invadiert Subserosa oder perikolisches Fettgewebe</td></tr>
                            <tr><td>T4a</td><td>Tumor infiltriert viszerales Peritoneum</td></tr>
                            <tr><td>T4b</td><td>Tumor infiltriert andere Organe</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4>N-Kategorie (Lymphknoten)</h4>
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
                            <tr><td>N1</td><td>1-3 regionäre Lymphknotenmetastasen</td></tr>
                            <tr><td>N2</td><td>≥4 regionäre Lymphknotenmetastasen</td></tr>
                        </tbody>
                    </table>
                </div>
                <h4>M-Kategorie (Metastasen)</h4>
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
                            <tr><td>M1</td><td>Fernmetastasen vorhanden</td></tr>
                        </tbody>
                    </table>
                </div>
                <h3>UICC-Stadien</h3>
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
                                <td>Stadium 0</td>
                                <td>Tis N0 M0</td>
                                <td>Carcinoma in situ</td>
                            </tr>
                            <tr>
                                <td>Stadium I</td>
                                <td>T1-2 N0 M0</td>
                                <td>Submukosa/ Muscularis propria, kein Lymphknotenbefall</td>
                            </tr>
                            <tr>
                                <td>Stadium IIA</td>
                                <td>T3 N0 M0</td>
                                <td>Subserosa/perikolische Fettgewebsinfiltration</td>
                            </tr>
                            <tr>
                                <td>Stadium IIB</td>
                                <td>T4a N0 M0</td>
                                <td>Infiltration viszeraler Peritoneum</td>
                            </tr>
                            <tr>
                                <td>Stadium IIC</td>
                                <td>T4b N0 M0</td>
                                <td>Infiltration anderer Organe</td>
                            </tr>
                            <tr>
                                <td>Stadium III</td>
                                <td>Jedes T N1-2 M0</td>
                                <td>Lymphknotenbefall</td>
                            </tr>
                            <tr>
                                <td>Stadium IV</td>
                                <td>Jedes T jedes N M1</td>
                                <td>Fernmetastasen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Metastasenlokalisation</h3>
                <ul>
                    <li><strong>Leber:</strong> Häufigste Metastasenlokalisation.</li>
                    <li><strong>Lunge:</strong> Zweithäufigste Lokalisation.</li>
                    <li><strong>Peritoneum:</strong> Peritonealkarzinose.</li>
                    <li><strong>Lymphknoten:</strong> Extraregionale Lymphknoten.</li>
                    <li><strong>Knochen:</strong> Seltener, bei fortgeschrittener Erkrankung.</li>
                    <li><strong>Gehirn:</strong> Selten, bei fortgeschrittener Erkrankung.</li>
                </ul>
                <h3>Rektumkarzinom-spezifisches Staging</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Obligat zur Beurteilung der lokalen Ausbreitung.</li>
                    <li><strong>Endosonographie:</strong> Ergänzend für uT- und uN-Staging.</li>
                    <li><strong>CRM (Circumferential Resection Margin):</strong> Betroffener Resektionsrand ≤ 1mm.</li>
                    <li><strong>EMVI:</strong> Extramurale Veneninvasion.</li>
                    <li><strong>Mesorektale Faszie:</strong> Infiltration der mesorektalen Faszie.</li>
                </ul>`
            },
            {
                title: "Therapie des Kolonkarzinoms",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Onkologische Resektion:</strong> Standard: R0-Resektion mit Lymphadenektomie (mindestens 12 Lymphknoten).</li>
                    <li><strong>Hemikolektomie rechts/links:</strong> Entsprechend Tumorlokalisation.</li>
                    <li><strong>Sigma-/Rektumresektion:</strong> Bei Tumoren im Sigma und oberen Rektum.</li>
                    <li><strong>Transanale Resektion:</strong> T1-Karzinome mit günstigen Histologiekriterien (G1-2, keine Lymphgefäßinvasion, keine submukosale Tiefeninfiltration SM3).</li>
                    <li><strong>Minimal-invasive Chirurgie:</strong> Laparoskopische Resektion等同 offener Chirurgie onkologisch sicher.</li>
                </ul>
                <h3>Adjuvante Therapie (Kolonkarzinom)</h3>
                <ul>
                    <li><strong>Stadium II (Niedrigrisiko):</strong> Keine adjuvante Chemotherapie empfohlen.</li>
                    <li><strong>Stadium II (Hochrisiko):</strong> Folgende Faktoren: T4, <12 Lymphknoten, G3/4, Lymphgefäßinvasion, perineurale Invasion, Tumorobstruktion, POLE-Mutation. Empfehlung: Capecitabin oder 5-FU/Folinsäure.</li>
                    <li><strong>Stadium III:</strong> Oxaliplatin-haltige Regime (FOLFOX oder CAPOX) oder Capecitabin/5-FU bei Kontraindikation gegen Oxaliplatin.</li>
                </ul>
                <h3>Neoadjuvante Therapie (Kolonkarzinom) - NEU in v3.0</h3>
                <ul>
                    <li><strong>Empfehlung 9.16:</strong> Bei lokal fortgeschrittenem Kolonkarzinom (cT4 oder cN+) mit Resektionsbedrohung benachbarter Organen kann eine neoadjuvante Chemotherapie (CAPOX oder FOLFOX) erwogen werden.</li>
                    <li><strong>Empfehlung 9.17:</strong> Bei synchronen Lebermetastasen mit Primärtumor-bedingter Resektionsbedrohung kann eine neoadjuvante Chemotherapie zur Downstaging des Primärtumors erwogen werden.</li>
                    <li>Ziel: Erhöhung der R0-Resektabilität, bessere Organerhaltung, Behandlung von Mikrometastasen.</li>
                    <li>Re-Staging nach 2-4 Zyklen empfohlen.</li>
                </ul>
                <h3>Therapie bei Fernmetastasen</h3>
                <ul>
                    <li><strong>Resektabilität:</strong> Bei resektablen Leber- oder Lungenmetastasen R0-Resektion anstreben.</li>
                    <li><strong>Konversion:</strong> FOLFOXIRI + Bevacizumab bei potenziell resektablen Metastasen zur Konversion.</li>
                    <li><strong>Palliative Systemtherapie:</strong> Siehe Kapitel 6.</li>
                </ul>`
            },
            {
                title: "Therapie des Rektumkarzinoms",
                html: `<h3>Differenzierte Therapie nach Lokalisation</h3>
                <p>Die Therapie des Rektumkarzinoms richtet sich nach der Tumorlokalisation:</p>
                <ul>
                    <li><strong>Oberes Rektumdrittel:</strong> ≥ 12 cm ab Anokutanlinie</li>
                    <li><strong>Mittleres Rektumdrittel:</strong> 6-12 cm ab Anokutanlinie</li>
                    <li><strong>Unteres Rektumdrittel:</strong> < 6 cm ab Anokutanlinie</li>
                </ul>
                <h3>Oberes Rektumdrittel</h3>
                <ul>
                    <li><strong>Stadium I (cT1-2 N0):</strong> Primärchirurgische Resektion (TME).</li>
                    <li><strong>Stadium II/III (cT3-4 oder N+):</strong> Adjuvante Radiochemotherapie nach Resektion oder neoadjuvante RCT gefolgt von Chirurgie und adjuvanter Chemotherapie.</li>
                </ul>
                <h3>Mittleres Rektumdrittel</h3>
                <ul>
                    <li><strong>Stadium I (cT1 N0, günstig):</strong> Lokale Exzision (TEM) bei ausgewählten Patienten mit T1-Karzinom.</li>
                    <li><strong>Stadium I (cT1-2 N0):</strong> Primärchirurgische Resektion (TME) mit totaler mesorektaler Exzision.</li>
                    <li><strong>Stadium II/III (cT3 N0 oder jedes T N+):</strong> Neoadjuvante Therapie Standard.</li>
                </ul>
                <h3>Unteres Rektumdrittel</h3>
                <ul>
                    <li><strong>Stadium I (cT1 N0):</strong> Lokale Exzision oder abdominoperitoneale Resektion (APR) bei ungünstigen Kriterien.</li>
                    <li><strong>Stadium II/III:</strong> Neoadjuvante Radiochemotherapie oder TNT obligat. Watch-and-Wait-Strategie bei klinisch kompletter Remission (cCR) in ausgewählten Fällen.</li>
                </ul>
                <h3>Neoadjuvante Therapieoptionen</h3>
                <ul>
                    <li><strong>Langzeit-Radiochemotherapie:</strong> 1,8-2,0 Gy + 5-FU/Capecitabin über 5-5,5 Wochen. Präferenziell bei tief sitzenden Tumoren.</li>
                    <li><strong>Kurzzeitbestrahlung:</strong> 5x5 Gy innerhalb einer Woche, sofortige Operation. Bei älteren Patienten oder Kontraindikation gegen simultane Chemotherapie.</li>
                    <li><strong>Totale Neoadjuvante Therapie (TNT):</strong> 4-6 Zyklen FOLFOX/CAPolgt von langzeitOX gef-RCT, dann OP. Für cT3/cN+ Tumoren des mittleren und unteren Drittels empfohlen.</li>
                </ul>
                <h3>Chirurgische Verfahren</h3>
                <ul>
                    <li><strong>TME (Totale Mesorektale Exzision):</strong> Goldstandard für mittleres und unteres Drittel.</li>
                    <li><strong>Partielle mesorektale Exzision (PME):</strong> Ausreichend für obere Rektumdrittel-Tumoren (mindestens 5 cm distaler Sicherheitsabstand).</li>
                    <li><strong>APR (Abdominoperineale Resektion):</strong> Bei Tumoren mit Infiltration des M. sphincter ani internus oder bei Tumorpenetration der Linea dentata nach distal.</li>
                    <li><strong>Intersphinktäre Resektion:</strong> Bei sehr tief sitzenden Karzinomen zur Sphinktererhaltung.</li>
                </ul>
                <h3>Pathologisches Assessment</h3>
                <ul>
                    <li><strong>pCR (pathologische komplette Remission):</strong> Keine vitalen Tumorzellen im Präparat. Prognostisch günstig.</li>
                    <li><strong>CRM (Circumferential Resection Margin):</strong> ≤ 1 mm: R1-Resektion.</li>
                    <li><strong>EMVI (Extramurale Veneninvasion):</strong> Prognosefaktor.</li>
                </ul>`
            },
            {
                title: "Palliative Systemtherapie",
                html: `<h3>Therapieprinzipien</h3>
                <ul>
                    <li>Ziel: Verlängerung des Überlebens, Erhalt/Verbesserung der Lebensqualität, Symptomkontrolle.</li>
                    <li>Therapiefähigkeit, Tumorlast, Symptome und Patientenwunsch bestimmen die Therapieintensität.</li>
                    <li>Sequenztherapie mit mehreren Linien anstreben.</li>
                </ul>
                <h3>Erstlinientherapie</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subgruppe</th>
                                <th>Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>RAS-Wildtyp</strong><br/>Linksseitiger Tumor</td>
                                <td>FOLFOX/FOLFIRI + Anti-EGFR (Cetuximab/Panitumumab). Bevacizumab Alternative.</td>
                            </tr>
                            <tr>
                                <td><strong>RAS-Wildtyp</strong><br/>Rechtsseitiger Tumor</td>
                                <td>FOLFOX/FOLFIRI + Bevacizumab bevorzugt. Anti-EGFR nur nach sorgfältiger Nutzen-Risiko-Abwägung.</td>
                            </tr>
                            <tr>
                                <td><strong>RAS-Mutation</strong></td>
                                <td>FOLFOX/FOLFIRI + Bevacizumab.</td>
                            </tr>
                            <tr>
                                <td><strong>MSI-H/dMMR</strong></td>
                                <td>Immuntherapie (Pembrolizumab/Nivolumab) als Erstlinie.</td>
                            </tr>
                            <tr>
                                <td><strong>BRAF V600E-Mutation</strong></td>
                                <td>FOLFOXIRI + Bevacizumab. Encorafenib + Cetuximab nach BRAF-Inhibitor in Zweitlinie.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Zweitlinientherapie</h3>
                <ul>
                    <li>Bei Progression unter Erstlinientherapie: Wechsel der Chemotherapie backbone ± Wechsel des Antikörpers.</li>
                    <li><strong>RAM-Therapie:</strong> Ramucirumab + FOLFIRI bei Progression unter Bevacizumab.</li>
                    <li><strong>Trifluridin/Tipiracil:</strong> Oraler Thymidinphosphorylase-Inhibitor bei Drittlinie.</li>
                    <li><strong>Regorafenib:</strong> TKI bei Drittlinie.</li>
                </ul>
                <h3>Drittlinie und Folgetherapien</h3>
                <ul>
                    <li>Trifluridin/Tipiracil bei Progression unter mindestens zwei systemischen Therapien.</li>
                    <li>Regorafenib als weitere Option.</li>
                    <li>HER2-positive Tumoren (IHC 3+ oder ISH positiv): Trastuzumab + Pertuzumab oder Trastuzumab-Deruxtecan.</li>
                    <li>NTRK-Fusionen: Larotrectinib oder Entrectinib.</li>
                </ul>`
            },
            {
                title: "Hereditäres & Familiäres KRK",
                html: `<h3>Allgemeines</h3>
                <p>Circa 5-10 % aller kolorektalen Karzinome sind hereditary bedingt. Die Identifikation von Risikopersonen ist entscheidend für gezielte Prävention und Früherkennung.</p>
                <h3>Lynch-Syndrom (HNPCC)</h3>
                <ul>
                    <li><strong>Epidemiologie:</strong> Häufigstes hereditäres KRK-Syndrom. Autosomal-dominant. Lebenszeitrisiko für KRK 25-70 % je nach Gen.</li>
                    <li><strong>Genetik:</strong> Pathogene Varianten in MMR-Genen: MLH1, MSH2, MSH6, PMS2. EpCAM-Deletionen.</li>
                    <li><strong>Risikostratifizierung nach Gen:</strong></li>
                </ul>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Gen</th>
                                <th>KRK-Risiko</th>
                                <th>EC-Risiko</th>
                                <th>Früherkennung Start</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>MLH1</strong></td>
                                <td>25-70 %</td>
                                <td>20-50 %</td>
                                <td>20-25 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>MSH2</strong></td>
                                <td>25-70 %</td>
                                <td>20-50 %</td>
                                <td>20-25 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>MSH6</strong></td>
                                <td>10-30 %</td>
                                <td>10-20 %</td>
                                <td>30-35 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>PMS2</strong></td>
                                <td>10-20 %</td>
                                <td>5-10 %</td>
                                <td>30-35 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li><strong>Diagnostik:</strong> Immunhistochemie für MMR-Proteine, MSI-Analyse, Methylierungsanalyse von MLH1, genspezifische genetische Testung.</li>
                    <li><strong>Früherkennung:</strong> Koloskopie alle 1-2 Jahre ab Alter entsprechend Gen. Ösophagogastroduodenoskopie (OGD) alle 2-3 Jahre ab 25-30 Jahre (erhöhtes Magenkarzinomrisiko). Transvaginaler Ultraschall/Endometriumbiopsie bei Frauen.</li>
                    <li><strong>Chirurgische Option:</strong> Bei KRK: Segmentresektion vs. Hemikolektomie (abhängig von Tumorlokalisation). Bei Frauen: Hysterektomie + Ovarektomie nach Familienplanung (EC-Risiko).</li>
                </ul>
                <h3>Familiäre adenomatöse Polyposis (FAP)</h3>
                <ul>
                    <li><strong>Epidemiologie:</strong> Autosomal-dominant. APC-Genmutation. Lebenszeitrisiko für KRK nahezu 100 %.</li>
                    <li><strong>Klinik:</strong> >100 kolorektale Adenome (typischerweise im 2. Lebensjahrzehnt).</li>
                    <li><strong>Attenuierte FAP (AFAP):</strong> Weniger Polypen, spätere Manifestation. APC-Mutationen im 5'- oder 3'-Bereich.</li>
                </ul>
                <h3>Spigelman-Klassifikation (Duodenaladenome)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Punkte</th>
                                <th>Karzinomrisiko</th>
                                <th>Überwachung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>3 %</td>
                                <td>Alle 4 Jahre</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>1-4</td>
                                <td>3 %</td>
                                <td>Alle 2-3 Jahre</td>
                            </tr>
                            <tr>
                                <td>II</td>
                                <td>5-6</td>
                                <td>3-10 %</td>
                                <td>Alle 1-3 Jahre</td>
                            </tr>
                            <tr>
                                <td>III</td>
                                <td>7-12</td>
                                <td>30-50 %</td>
                                <td>Alle 6-12 Monate/Chirurgie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li><strong>OP-Indikation bei FAP:</strong>
                    <ul>
                        <li>Bei >20-30 Adenomen oder Polypen mit hochgradiger Dysplasie</li>
                        <li>Bei Spigelman-Stadium III</li>
                        <li>Bei Familienanamnese mit Duodenal- oder Pankreaskarzinom</li>
                        <li>Meist prophylaktische Kolektomie im jungen Erwachsenenalter (20-25 Jahre)</li>
                    </ul>
                    </li>
                    <li><strong>Überwachung:</strong> Koloskopie jährlich ab 10-12 Jahre. OGD mit Seitblickduodenoskopie ab 20-25 Jahre (Spigelman-Score). Gastritis-/Magenpolypen-Überwachung.</li>
                </ul>
                <h3>MUTYH-assoziierte Polyposis (MAP)</h3>
                <ul>
                    <li><strong>Genetik:</strong> Autosomal-rezessiv. Biallelische MUTYH-Mutationen.</li>
                    <li><strong>Klinik:</strong> 10-100 kolorektale Adenome. KRK-Risiko 25-40 % bis 50 Jahre, 40-70 % bis 70 Jahre.</li>
                    <li><strong>Management:</strong> Koloskopie jährlich ab 20 Jahre. Polypektomie. Bei hoher Polypenlast: Kolektomie. OGD-Überwachung (Duodenaladenome).</li>
                </ul>
                <h3>Serratiertes Polyposis-Syndrom (SPS) - NEU in v3.0</h3>
                <ul>
                    <li><strong>Definition:</strong> Mindestens 5 serratiierte Polypen proximal des Sigmas, oder ≥2 serratiierte Polypen proximal des Sigmas bei Verwandtem 1. Grades mit SPS, oder >20 serratiierte Polypen im gesamten Kolon.</li>
                    <li><strong>Genetik:</strong> Meist sporadisch. Risiko für KRK 15-30 %. Kein einzelnes Gen identifiziert, familiäre Häufung möglich.</li>
                    <li><strong>Management:</strong> Koloskopie alle 1-2 Jahre ab Diagnose. Vollständige Entfernung aller Polypen. OGD empfohlen (Duodenal/S gastric adenomatöse Polypen).</li>
                </ul>
                <h3>Risikogruppen-Übersicht</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Syndrom</th>
                                <th>Gen</th>
                                <th>KRK-Risiko</th>
                                <th>Früherkennung Start</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Gruppe 1</strong></td>
                                <td>Lynch (MLH1/MSH2)</td>
                                <td>MLH1, MSH2</td>
                                <td>25-70 %</td>
                                <td>20-25 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Gruppe 2</strong></td>
                                <td>Lynch (MSH6/PMS2)</td>
                                <td>MSH6, PMS2</td>
                                <td>10-30 %</td>
                                <td>30-35 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Gruppe 3</strong></td>
                                <td>FAP/AFAP</td>
                                <td>APC</td>
                                <td>~100 % / 60-70 %</td>
                                <td>10-12 Jahre</td>
                            </tr>
                            <tr>
                                <td><strong>Gruppe 4</strong></td>
                                <td>MAP/SPS</td>
                                <td>MUTYH/-</td>
                                <td>25-70 %</td>
                                <td>20 Jahre</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Strukturierte Nachsorge</h3>
                <p>Die Nachsorge erfolgt bei Patienten im UICC-Stadium I-III mit dem Ziel der Früherkennung von Rezidiven und metachronen Tumoren.</p>
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
                                <td>Anamnese, körperliche Untersuchung, CEA</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, CEA</td>
                            </tr>
                            <tr>
                                <td>Jahr 1, 3, 5</td>
                                <td>-</td>
                                <td>Koloskopie, CT Thorax/Abdomen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Wertigkeit diagnostischer Methoden</h3>
                <ul>
                    <li><strong>Anamneseerhebung:</strong> Klinische Zeichen und Symptome erfassen.</li>
                    <li><strong>CEA-Bestimmung:</strong> Verlaufskontrolle, nicht als alleinige Nachsorgemethode geeignet.</li>
                    <li><strong>Sonografie:</strong> Erstliniendiagnostik für Lebermetastasen.</li>
                    <li><strong>Endosonografie:</strong> Bei Rektumkarzinom zur Lokalrezidiv-Diagnostik.</li>
                    <li><strong>Röntgen-Thorax:</strong> Lungenmetastasen.</li>
                    <li><strong>Computertomografie:</strong> Standard für Abdomen und Thorax.</li>
                    <li><strong>Koloskopie:</strong> Zum Nachweis von metachronen Kolonkarzinomen und Adenomen. Bei Zustand nach Polypektomie: Nachsorge nach aktueller DEGEA-Leitlinie.</li>
                    <li><strong>PET-CT:</strong> Nur bei Verdacht auf Rezidiv mit unklarer Konvention.</li>
                </ul>
                <h3>Altersbegrenzung</h3>
                <p>Eine Altersbegrenzung der Nachsorge kann bei steigender Lebenserwartung nicht gegeben werden. Bei entsprechender Lebenserwartung und fehlender Komorbidität kann individuell auch nach dem 75. Lebensjahr eine Fortführung erwogen werden.</p>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Lebensstilberatung (Ernährung, Bewegung).</li>
                    <li>Raucherentwöhnung.</li>
                    <li>Psychoonkologische Betreuung anbieten.</li>
                    <li>Stomakontrolle und -versorgung bei Patienten nach Rektumkarzinom-OP.</li>
                </ul>`
            },
            {
                title: "Supportivtherapie & Rehabilitation",
                html: `<h3>Psychoonkologie</h3>
                <ul>
                    <li>Allen Patienten soll eine psychoonkologische Betreuung angeboten werden.</li>
                    <li>Bereits erkrankte Personen sowie gesunde Anlageträger und Risikopersonen sollen auf Möglichkeit und Nutzen einer psychosozialen Beratung und Betreuung hingewiesen werden.</li>
                    <li>Psychosoziales Screening mittels standardisierter Instrumente (z.B. PHQ-2, PHQ-9, Distress-Thermometer).</li>
                    <li>Koordination mit psychosozialen Diensten, Selbsthilfegruppen und Sozialdienst.</li>
                </ul>
                <h3>Ernährungstherapie</h3>
                <ul>
                    <li>Eine Ernährungsberatung sollte bei Bedarf erfolgen.</li>
                    <li>Ernährungsinterventionen bei Mangelernährung oder tumorbedingten Ernährungsstörungen.</li>
                    <li>Screening auf Mangelernährung mittels PG-SGA oder vergleichbaren Instrumenten.</li>
                    <li>Beratung zur evidenzbasierten Ernährung: ballaststoffreich, mediterrane Kost, Reduktion von rotem Fleisch und Alkohol.</li>
                </ul>
                <h3>Bewegungstherapie</h3>
                <ul>
                    <li>Regelmäßige körperliche Aktivität wird empfohlen.</li>
                    <li>Bewegungsprogramme können die Lebensqualität verbessern.</li>
                    <li>Sport- und Bewegungstherapie während und nach Therapie empfohlen (z.B. onkologische Reha).</li>
                    <li>Prävention und Behandlung von Tumorfatigue durch Bewegung.</li>
                </ul>
                <h3>Low Anterior Resection Syndrome (LARS)</h3>
                <ul>
                    <li><strong>Definition:</strong> Darmfunktionsstörung nach tiefer anteriorer Resektion mit rektaler Anastomose. Symptome: Stuhlfrequenz, Dringlichkeit, Stuhlinkontinenz, Fragmentierung.</li>
                    <li><strong>Prävalenz:</strong> Bis zu 80 % der Patienten nach tiefer Resektion.</li>
                    <li><strong>Schweregrad:</strong> Minor LARS (0-15 Punkte) und Major LARS (20-34 Punkte) nach LARS-Score.</li>
                    <li><strong>Management:</strong>
                    <ul>
                        <li>Konservativ: Beckenbodentraining, Ernährungsoptimierung (Ballaststoffanpassung), Stuhlregulierung (Loperamid).</li>
                        <li>Chirurgisch: Anale Irrigation, neuromodulierende Verfahren (Sakralnervenstimulation), Rektumangelegte bei therapieresistentem Major LARS.</li>
                    </ul>
                    </li>
                    <li>Strukturierte Erfassung des LARS mittels LARS-Score in der Nachsorge empfohlen.</li>
                </ul>
                <h3>Komplementärmedizin</h3>
                <ul>
                    <li>Patienten sollten zu komplementärmedizinischen Maßnahmen beraten werden.</li>
                    <li>Eine kritische Bewertung alternativer Heilverfahren sollte erfolgen.</li>
                    <li>Evidenzbasierte komplementäre Methoden (z.B. Sport, Ernährung, Entspannungstechniken) fördern.</li>
                </ul>
                <h3>Palliativversorgung</h3>
                <ul>
                    <li>Frühzeitige Integration der Palliativmedizin bei fortgeschrittenem Krankheitsstadien.</li>
                    <li>Symptomkontrolle (Schmerz, Übelkeit, Dyspnoe, Obstipation, Fatigue etc.).</li>
                    <li>Psychosoziale und spirituelle Unterstützung.</li>
                    <li>Advance Care Planning und Patientenverfügung.</li>
                    <li>Hospizversorgung bei Bedarf.</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Eine Anschlussrehabilitation (AHB) sollte nach der Akutbehandlung angeboten werden.</li>
                    <li>Ziele: Wiederherstellung der körperlichen Leistungsfähigkeit, psychische Stabilisierung, berufliche Wiedereingliederung.</li>
                    <li>Stoma-Beratung und -Schulung.</li>
                    <li>Multimodale Konzepte: Physio-/Ergotherapie, Psychoonkologie, Ernährungsberatung, Sozialberatung.</li>
                </ul>
                <h3>Tertiärprävention</h3>
                <ul>
                    <li>Versorgungskontinuität und Fortführung der gesundheitsförderlichen Aktivitäten nach Akuttherapie und Rehabilitation.</li>
                    <li>Physikalische Aktivität und Ernährung zur Rezidivprophylaxe.</li>
                    <li>Langfristige Nachsorge und Betreuung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Kolorektales Karzinom. Version 3.0 – September 2025. AWMF-Registernummer: 021-007OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
