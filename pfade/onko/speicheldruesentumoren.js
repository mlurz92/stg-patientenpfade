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
                title: "1. Epidemiologie & Risikofaktoren",
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
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Schmerzlose Schwellung (häufigstes Symptom).</li>
                    <li>Schmerzen, Fazialisparese (Malignitätszeichen bei Parotis).</li>
                    <li>Harte, fixierte Schwellung.</li>
                    <li>Schnell wachsende Tumoren deuten auf Malignität hin.</li>
                    <li>Halslymphknotenvergrößerung.</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Ultraschall:</strong> Erste Bildgebung, Beurteilung der Konsistenz.</li>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Zytologische Abklärung, Sensitivität begrenzt.</li>
                    <li><strong>MRT:</strong> Goldstandard für Ausbreitungsdiagnostik.</li>
                    <li><strong>CT:</strong> Alternative bei Kontraindikationen für MRT.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT Hals:</strong> Tumorausbreitung, Fazialisnerv, Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Metastasenausschluss.</li>
                    <li><strong>PET-CT:</strong> Bei hochmalignen Tumoren.</li>
                    <li><strong>Stanzbiopsie:</strong> Bei inoperablen Tumoren für Histologie.</li>
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
                </div>`
            },
            {
                title: "3. Therapie",
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
                title: "4. Nachsorge",
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