(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "speicheldruesentumoren",
        module: "onko",
        title: "Speicheldrüsentumoren des Kopfes",
        name: "Speicheldrüsentumoren des Kopfes",
        category: "onko-hno",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Seltene Tumoren (ca. 3-5% aller Kopf-Hals-Tumoren)</li>
                    <li>In Deutschland ca. 500-700 Neuerkrankungen/Jahr</li>
                    <li>Große Speicheldrüsen: Parotis am häufigsten betroffen</li>
                    <li>Altersgipfel: 50-70 Jahre</li>
                    <li>5-Jahres-Überleben stark abhängig von Histologie und Stadium</li>
                </ul>
                <h3>Lokalisation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Speicheldrüse</th>
                                <th>Anteil</th>
                                <th>Malignitätsrate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Parotis</strong></td>
                                <td>Ca. 80%</td>
                                <td>Ca. 20% maligne</td>
                            </tr>
                            <tr>
                                <td><strong>Submandibularis</strong></td>
                                <td>Ca. 10-15%</td>
                                <td>Ca. 40% maligne</td>
                            </tr>
                            <tr>
                                <td><strong>Sublingualis</strong></td>
                                <td><5%</td>
                                <td>Ca. 70-90% maligne</td>
                            </tr>
                            <tr>
                                <td><strong>Minor-Speicheldrüsen</strong></td>
                                <td>Ca. 5-10%</td>
                                <td>Ca. 50% maligne</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Histologische Typen (WHO-Klassifikation)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Typ</th>
                                <th>Häufigkeit</th>
                                <th>Prognose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Mukoepidermoidkarzinom</strong></td>
                                <td>Häufigstes Malignom</td>
                                <td>Abhängig vom Grading</td>
                            </tr>
                            <tr>
                                <td><strong>Adenoid-zystisches Karzinom</strong></td>
                                <td>Zweithäufigstes</td>
                                <td>Perineurale Invasion, späte Metastasen</td>
                            </tr>
                            <tr>
                                <td><strong>Azinzellkarzinom</strong></td>
                                <td>Häufig</td>
                                <td>Günstiger</td>
                            </tr>
                            <tr>
                                <td><strong>Speichelgangkarzinom</strong></td>
                                <td>Seltener</td>
                                <td>Aggressiv, HER2-positiv möglich</td>
                            </tr>
                            <tr>
                                <td><strong>Karzinom ex pleomorphes Adenom</strong></td>
                                <td>Seltener</td>
                                <td>Sehr aggressiv</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Bestrahlung:</strong> Frühere Strahlenexposition im Kopfbereich.</li>
                    <li><strong>Pleomorphes Adenom:</strong> Risiko der malignen Transformation bei langem Bestehen.</li>
                    <li><strong>Genetik:</strong> Familiäre Häufung selten.</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Ultraschall</h3>
                <ul>
                    <li><strong>Hals-Sonographie:</strong> Erste Bildgebung, Beurteilung der Konsistenz (zystisch vs. solid), Durchblutung (Doppler), Schallschatten.</li>
                    <li><strong>Ultrasonographie der Speicheldrüsen:</strong> Standard bei Verdacht auf Raumforderung.</li>
                    <li><strong>Elastographie:</strong> Zur Unterscheidung benigner vs. maligner Läsionen.</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT der Speicheldrüsen/Hals:</strong> Goldstandard für Ausbreitungsdiagnostik.</li>
                    <li><strong>Indikationen:</strong> Tumorausbreitung, Fazialisnervbeurteilung, Lymphknotenstatus, perineurale Invasion.</li>
                    <li><strong>Kontrastmittel:</strong> Gadolinium-haltiges KM für bessere Abgrenzung.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT der Speicheldrüsen:</strong> Alternative bei Kontraindikationen für MRT.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Standard für Metastasenausschluss (Lunge, Leber).</li>
                    <li><strong>Knochen-CT:</strong> Bei Verdacht auf Knochenmetastasen.</li>
                </ul>
                <h3>PET-CT</h3>
                <ul>
                    <li><strong>FDG-PET-CT:</strong> Bei hochmalignen Tumoren, Verdacht auf Fernmetastasen, okkulte Primärtumoren.</li>
                    <li><strong>Indikationen:</strong> Restaging nach Therapie, Rezidivdiagnostik.</li>
                </ul>
                <h3>Weitere Bildgebung</h3>
                <ul>
                    <li><strong>Zahnfilm/Orthopantomogramm:</strong> Bei Verdacht auf Unterkieferinfiltration.</li>
                    <li><strong>Sonographie der Halslymphknoten:</strong> Ergänzend zur Beurteilung des Nodalstatus.</li>
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
                </ul>
                <h3>Tumormarker (begrenzte Relevanz)</h3>
                <ul>
                    <li><strong>CEA:</strong> Unspezifischer Marker, gelegentlich erhöht bei Speicheldrüsenkarzinomen.</li>
                    <li><strong>CA 19-9:</strong> Kann bei Speichelgangkarzinomen erhöht sein.</li>
                    <li><strong>CA 125:</strong> Bei Verdacht auf peritoneale Metastasierung.</li>
                </ul>
                <h3>Entzündungsparameter</h3>
                <ul>
                    <li><strong>CRP, BSG:</strong> Bei Verdacht auf Entzündung oder Tumorprogress.</li>
                </ul>
                <h3>Speicheldrüsen-spezifische Diagnostik</h3>
                <ul>
                    <li><strong>Speicheltests:</strong> Keine routinemäßige Anwendung in der Diagnostik.</li>
                    <li><strong>Sialometrie:</strong> Messung der Speichelflussrate (postoperativ/bei Xerostomie).</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Zytologische Untersuchung, Erstdiagnostik. Sensitivität 60-80%, abhängig von Erfahrung.</li>
                    <li><strong>Stanzbiopsie:</strong> Gewebeprobenentnahme mit Hohlnadel, bessere Beurteilung der Architektur.</li>
                    <li><strong>Inzisionsbiopsie:</strong> Bei großen Tumoren, wenn Exzisionsbiopsie nicht möglich.</li>
                    <li><strong>Exzisionsbiopsie:</strong> Komplette Entfernung des Tumors mit Kapsel, Standard bei benignem Verdacht.</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Tumorart und -typ:</strong> WHO-Klassifikation (Mukoepidermoidkarzinom, Adenoid-zystisch, Azinzellkarzinom, etc.).</li>
                    <li><strong>Grading:</strong> Differenzierungsgrad (G1-G3) oder low-grade/high-grade.</li>
                    <li><strong>Tumorgröße:</strong> Maximaler Durchmesser in mm.</li>
                    <li><strong>Perineurale Invasion (PNI):</strong> Besonders relevant bei adenoid-zystischem Karzinom.</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Nachweis von Tumorzellen in Lymphgefäßen.</li>
                    <li><strong>Resektionsränder:</strong> R0 (mikroskopisch tumorfrei), R1 (mikroskopisch Tumorzellen), R2 (makroskopisch Tumor).</li>
                </ul>
                <h3>Immunhistochemie (IHC)</h3>
                <ul>
                    <li><strong>CK (Cytokeratin):</strong> Epithelialer Marker.</li>
                    <li><strong>p63/p40:</strong> Plattenepithelmarker.</li>
                    <li><strong>DOG1:</strong> Spezifischer Marker für Azinzellkarzinom und Speichelgangkarzinom.</li>
                    <li><strong>SOX10:</strong> Myoepithelmarker.</li>
                    <li><strong>HER2:</strong> Speichelgangkarzinom (HER2-positiv in ca. 30%).</li>
                    <li><strong>PD-L1:</strong> Bei Verdacht auf Immuntherapie-Option.</li>
                </ul>
                <h3>Zytologische Begutachtung</h3>
                <ul>
                    <li><strong>Zytomorphologie:</strong> Beurteilung von Zellverbänden, Kernatypien, Mitosen.</li>
                    <li><strong>Liquid-based Cytology:</strong> Alternative zur konventionellen FNP.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HER2-Status</h3>
                <ul>
                    <li><strong>Immunhistochemie (IHC):</strong> 0, 1+, 2+, 3+.</li>
                    <li><strong>ISH/FISH:</strong> Bei IHC 2+ zur Bestätigung der HER2-Amplifikation.</li>
                    <li><strong>HER2-positiv:</strong> IHC 3+ oder ISH positiv (ca. 30% der Speichelgangkarzinome).</li>
                    <li><strong>Therapieimplikation:</strong> Anti-HER2-Therapie (Trastuzumab, Pertuzumab) bei HER2-positiven Tumoren.</li>
                </ul>
                <h3>PD-L1-Expression</h3>
                <ul>
                    <li><strong>IHC-Bestimmung:</strong> PD-L1 (SP263, 22C3).</li>
                    <li><strong>TPS (Tumor Proportion Score):</strong> Anteil positiver Tumorzellen.</li>
                    <li><strong>Therapieimplikation:</strong> Immuntherapie-Option bei PD-L1-positiven Tumoren.</li>
                </ul>
                <h3>Genetische Alterationen</h3>
                <ul>
                    <li><strong>CRTC1-MAML2-Fusion:</strong> Mukoepidermoidkarzinom (CRT).</li>
                    <li><strong>MYB-NFIB-Fusion:</strong> Adenoid-zystisches Karzinom.</li>
                    <li><strong>PLAG1-Translokationen:</strong> Pleomorphes Adenom, Azinzellkarzinom.</li>
                    <li><strong>NR4A3-Translokationen:</strong> Azinzellkarzinom.</li>
                </ul>
                <h3>Molekulare Subtypen</h3>
                <ul>
                    <li><strong>CRTC1/3-MAML2+:</strong> Mukoepidermoidkarzinom, bessere Prognose.</li>
                    <li><strong>MYB-NFIB+:</strong> Adenoid-zystisches Karzinom, perineurale Invasion.</li>
                    <li><strong>HER2+:</strong> Speichelgangkarzinom, zielgerichtete Therapie.</li>
                    <li><strong>Triple-negativ:</strong> Schlechte Prognose, keine zielgerichteten Optionen.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinische Untersuchung</h3>
                <ul>
                    <li><strong>Inspektion:</strong> Schwellung, Asymmetrie, Hautveränderungen.</li>
                    <li><strong>Palpation:</strong> Konsistenz (hart/weich), Mobilität, Schmerzhaftigkeit.</li>
                    <li><strong>Fazialisfunktion:</strong> Parese als Malignitätszeichen bei Parotistumoren.</li>
                    <li><strong>Halslymphknoten:</strong> Palpation der Levels I-VI.</li>
                </ul>
                <h3>TNM-Klassifikation (Große Speicheldrüsen)</h3>
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
                                <td>Tumor &le;2 cm, keine extraparenchymale Ausbreitung</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor >2-4 cm, keine extraparenchymale Ausbreitung</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor >4 cm und/oder extraparenchymale Ausbreitung</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Infiltration von Haut, Unterkiefer, Gehörgang, Fazialisnerv</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Schädelbasis, Pterygoid, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>N- und M-Kategorie</h3>
                <ul>
                    <li><strong>N-Kategorie:</strong> Wie bei anderen Kopf-Hals-Tumoren (N0-N3).</li>
                    <li><strong>M-Kategorie:</strong> M0 (keine Fernmetastasen), M1 (Fernmetastasen).</li>
                    <li><strong>Fernmetastasen:</strong> Lunge (häufigste), Leber, Knochen, Gehirn.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT Hals:</strong> Lokale Tumorausbreitung, Fazialisnerv, Lymphknoten.</li>
                    <li><strong>CT Thorax:</strong> Metastasenausschluss (Lunge).</li>
                    <li><strong>CT Abdomen:</strong> Bei Verdacht auf hepatische Metastasen.</li>
                    <li><strong>PET-CT:</strong> Bei hochmalignen Tumoren, Verdacht auf Fernmetastasen.</li>
                </ul>
                <h3>Stadieneinteilung</h3>
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
                            <tr><td>I</td><td>T1</td><td>N0</td><td>M0</td></tr>
                            <tr><td>II</td><td>T2</td><td>N0</td><td>M0</td></tr>
                            <tr><td>III</td><td>T3</td><td>N0</td><td>M0</td></tr>
                            <tr><td>III</td><td>T1-3</td><td>N1</td><td>M0</td></tr>
                            <tr><td>IVA</td><td>T4a</td><td>N0-1</td><td>M0</td></tr>
                            <tr><td>IVB</td><td>jedes T</td><td>N2-3</td><td>M0</td></tr>
                            <tr><td>IVC</td><td>jedes T</td><td>jedes N</td><td>M1</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgie (Standard)</h3>
                <ul>
                    <li><strong>Parotis:</strong> Laterale oder totale Parotidektomie mit Fazialis-Erhalt wenn möglich.</li>
                    <li><strong>Submandibularis:</strong> Komplette Exstirpation der Drüse.</li>
                    <li><strong>Neck Dissection:</strong> Bei klinisch positiven Lymphknoten oder hochmalignen Tumoren elektiv.</li>
                    <li><strong>Rekonstruktion:</strong> Bei Fazialisresektion (Nerventransplantation).</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Strahlentherapie:</strong> Indiziert bei:
                        <ul>
                            <li>Positiven Resektionsrändern.</li>
                            <li>Hochmalignen Tumoren.</li>
                            <li>Perineuralem Wachstum.</li>
                            <li>Lymphknotenbefall.</li>
                        </ul>
                    </li>
                    <li><strong>Chemotherapie:</strong> Kein Standard, in Studien oder palliativ.</li>
                </ul>
                <h3>Spezielle Entitäten</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Entität</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Adenoid-zystisches Karzinom</strong></td>
                                <td>Perineurale Ausbreitung, späte Fernmetastasen (Lunge), langjähriges Nachsorge</td>
                            </tr>
                            <tr>
                                <td><strong>Speichelgangkarzinom</strong></td>
                                <td>HER2-positiv in 30%, Anti-HER2-Therapie möglich</td>
                            </tr>
                            <tr>
                                <td><strong>Mukoepidermoidkarzinom</strong></td>
                                <td>Low-grade: gute Prognose; High-grade: aggressiv</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Metastasiertes Stadium</h3>
                <ul>
                    <li><strong>Systemtherapie:</strong> Platin-basierte Chemotherapie (Cisplatin + Paclitaxel).</li>
                    <li><strong>Targeted Therapy:</strong> HER2-gerichtete Therapie bei HER2-Positivität.</li>
                    <li><strong>Immuntherapie:</strong> In Studien, bei PD-L1-Expression.</li>
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
                                <td>Klinische Untersuchung, Ultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Klinische Untersuchung, Ultraschall</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Klinische Untersuchung, Ultraschall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Besonderheiten beim adenoid-zystischen Karzinom</h3>
                <ul>
                    <li>Langzeit-Nachsorge erforderlich (10+ Jahre).</li>
                    <li>Späte Fernmetastasen (Lunge, Knochen, Leber).</li>
                    <li>Regelmäßige CT Thorax.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Fazialisfunktion prüfen.</li>
                    <li>Logopädie bei Fazialisschwäche.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Komplikationen nach Therapie</h3>
                <ul>
                    <li><strong>Fazialisparese:</strong> Nach Parotidektomie (temporär oder permanent).</li>
                    <li><strong>Frey-Syndrom:</strong> Schweißbildung beim Essen.</li>
                    <li><strong>Xerostomie:</strong> Nach Bestrahlung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Speicheldrüsenkarzinome. AWMF-Registernummer: 007-101OL. Leitlinienprogramm Onkologie.</p>"
    });
})();