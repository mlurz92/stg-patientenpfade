(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "lungenkarzinom",
        module: "onko",
        title: "Lungenkarzinom",
        name: "Lungenkarzinom",
        category: "onko-pulmo",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste krebsbedingte Todesursache weltweit</li>
                    <li>In Deutschland ca. 55.000 Neuerkrankungen/Jahr</li>
                    <li>Männer : Frauen = 2 : 1 (Angleichung)</li>
                    <li>Median bei Diagnose: ca. 70 Jahre</li>
                    <li>5-Jahres-Überleben gesamt: ca. 20%</li>
                </ul>
                <h3>Histologische Typen</h3>
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
                                <td>Ca. 30%</td>
                                <td>Zentral, starke Raucherassoziation</td>
                            </tr>
                            <tr>
                                <td><strong>Kleinzelliges Karzinom (SCLC)</strong></td>
                                <td>Ca. 15%</td>
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
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Verantwortlich für ca. 85% der Fälle (Dosis-Wirkungs-Beziehung).</li>
                    <li><strong>Passivrauchen:</strong> Erhöhtes Risiko bei Exposition.</li>
                    <li><strong>Asbest:</strong> Synergismus mit Rauchen.</li>
                    <li><strong>Radon:</strong> Natürliche Strahlenbelastung.</li>
                    <li><strong>Genetik:</strong> Familiäre Häufung, EGFR-Mutationen bei Adenokarzinomen.</li>
                    <li><strong>Luftverschmutzung:</strong> Feinstaub.</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li><strong>Lokal:</strong> Husten, Hämoptysen, Dyspnoe, Thoraxschmerzen.</li>
                    <li><strong>Paraneoplastisch:</strong> Hyperkalzämie, SIADH, Lambert-Eaton-Syndrom.</li>
                    <li><strong>Metastasen:</strong> Knochenschmerzen, neurologische Ausfälle.</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Thorax-CT:</strong> Charakterisierung des Tumors, Lymphknoten.</li>
                    <li><strong>Bronchoskopie:</strong> Biopsie bei zentralen Tumoren.</li>
                    <li><strong>CT-gesteuerte Biopsie:</strong> Bei peripheren Tumoren.</li>
                    <li><strong>Mediastinoskopie:</strong> Bei unklarem Lymphknotenstatus.</li>
                </ul>
                <h3>Molekulare Testung (NSCLC)</h3>
                <ul>
                    <li><strong>EGFR-Mutation:</strong> Exon 19-Deletion, L858R.</li>
                    <li><strong>ALK-Translokation:</strong> EML4-ALK.</li>
                    <li><strong>ROS1-Translokation:</strong> Selten, zielgerichtete Therapie möglich.</li>
                    <li><strong>KRAS-Mutation:</strong> Häufig bei Rauchern.</li>
                    <li><strong>PD-L1-Expression:</strong> Für Immuntherapie.</li>
                    <li><strong>BRAF V600E:</strong> Zielgerichtete Therapie möglich.</li>
                </ul>
                <h3>TNM-Stadien (NSCLC)</h3>
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
                                <td><strong>I</strong></td>
                                <td>T1-2 N0 M0</td>
                                <td>Lokalisiert, operabel</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T1-2 N1 M0, T3 N0 M0</td>
                                <td>Lokal fortgeschritten, operabel</td>
                            </tr>
                            <tr>
                                <td><strong>IIIA</strong></td>
                                <td>T3 N1 M0, T1-3 N2 M0</td>
                                <td>Lokal fortgeschritten, potenziell operabel</td>
                            </tr>
                            <tr>
                                <td><strong>IIIB/IIIC</strong></td>
                                <td>T4 N2-3 M0, T3-4 N3 M0</td>
                                <td>Lokal fortgeschritten, inoperabel</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Jedes T, jedes N, M1</td>
                                <td>Metastasiert</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>SCLC-Stadien</h3>
                <ul>
                    <li><strong>Limited Disease:</strong> Auf einen Hemithorax beschränkt.</li>
                    <li><strong>Extensive Disease:</strong> Ausgedehnte Erkrankung.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>NSCLC - Frühe Stadien (I-II)</h3>
                <ul>
                    <li><strong>Chirurgische Resektion:</strong> Lobektomie als Standard.</li>
                    <li><strong>Adjuvante Chemotherapie:</strong> Bei Stadium II und selektiertem Stadium IB.</li>
                    <li><strong>Adjuvante Immuntherapie:</strong> Atezolizumab bei PD-L1 ≥1% nach Chemotherapie.</li>
                    <li><strong>Stereotaktische Bestrahlung:</strong> Bei Inoperabilität.</li>
                </ul>
                <h3>NSCLC - Lokal fortgeschritten (III)</h3>
                <ul>
                    <li><strong>Resektable Fälle:</strong> Operation + adjuvante Chemotherapie ± Radiotherapie.</li>
                    <li><strong>Nicht-resektable Fälle:</strong> Definitive Radiochemotherapie + Durvalumab-Erhaltung.</li>
                </ul>
                <h3>NSCLC - Metastasiert (IV)</h3>
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
                                <td>TKI (Osimertinib) als Erstlinie</td>
                            </tr>
                            <tr>
                                <td><strong>ALK-Translokation</strong></td>
                                <td>TKI (Alectinib, Brigatinib, Lorlatinib)</td>
                            </tr>
                            <tr>
                                <td><strong>ROS1-Translokation</strong></td>
                                <td>TKI (Crizotinib, Entrectinib)</td>
                            </tr>
                            <tr>
                                <td><strong>BRAF V600E</strong></td>
                                <td>Dabrafenib + Trametinib</td>
                            </tr>
                            <tr>
                                <td><strong>PD-L1 ≥50%, keine Treibermutation</strong></td>
                                <td>Pembrolizumab-Monotherapie</td>
                            </tr>
                            <tr>
                                <td><strong>PD-L1 <50%, keine Treibermutation</strong></td>
                                <td>Chemo-Immuntherapie (Pembrolizumab + Platin/Pemetrexed)</td>
                            </tr>
                            <tr>
                                <td><strong>Keine Treibermutation, PD-L1 negativ</strong></td>
                                <td>Platin-basierte Chemotherapie ± Immuntherapie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>SCLC - Limited Disease</h3>
                <ul>
                    <li><strong>Radiochemotherapie:</strong> Cisplatin/Etoposid + thorakale Bestrahlung.</li>
                    <li><strong>Prophylaktische Hirnbestrahlung:</strong> Bei Ansprechen.</li>
                </ul>
                <h3>SCLC - Extensive Disease</h3>
                <ul>
                    <li><strong>Chemo-Immunotherapie:</strong> Cisplatin/Carboplatin + Etoposid + Atezolizumab/Durvalumab.</li>
                    <li><strong>Zweitlinie:</strong> Topotecan oder Lurbinectedin.</li>
                </ul>`
            },
            {
                title: "4. Nachsorge",
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
                                <td>Anamnese, körperliche Untersuchung, CT Thorax</td>
                            </tr>
                            <tr>
                                <td>Jahr 3</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, CT Thorax</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 4</td>
                                <td>Jährlich</td>
                                <td>Anamnese, körperliche Untersuchung, CT Thorax</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bildgebung bei klinischem Verdacht auf Rezidiv.</li>
                    <li>Raucherentwöhnung.</li>
                    <li>Pneumologische Rehabilitation.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Impfungen (Influenza, Pneumokokken).</li>
                </ul>
                <h3>SCLC-Nachsorge</h3>
                <ul>
                    <li>Engmaschigere Kontrollen (alle 3 Monate in den ersten 2 Jahren).</li>
                    <li>MRT Schädel bei Bedarf.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Lungenkarzinom. AWMF-Registernummer: 020-007OL. Leitlinienprogramm Onkologie.</p>"
    });
})();