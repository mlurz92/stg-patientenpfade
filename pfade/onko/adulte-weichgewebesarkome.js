(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "adulte-weichgewebesarkome",
        module: "onko",
        title: "Adulte Weichgewebesarkome",
        name: "Adulte Weichgewebesarkome",
        category: "onko-sonst",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Seltene Tumoren (ca. 1% aller Malignome)</li>
                    <li>Inzidenz: ca. 4-5/100.000 pro Jahr</li>
                    <li>Median bei Diagnose: ca. 60 Jahre</li>
                    <li>Männer : Frauen = 1,1 : 1</li>
                    <li>5-Jahres-Überleben: ca. 50-60% (stark abhängig von Stadium und Grading)</li>
                </ul>
                <h3>Histologische Subtypen (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Undifferenziertes pleomorphes Sarkom</strong></td>
                                <td>Ca. 20%</td>
                                <td>Häufigster Subtyp bei Erwachsenen</td>
                            </tr>
                            <tr>
                                <td><strong>Liposarkom</strong></td>
                                <td>Ca. 15-20%</td>
                                <td>Untertypen: well-diff., dediff., myxoid, pleomorph</td>
                            </tr>
                            <tr>
                                <td><strong>Leiomyosarkom</strong></td>
                                <td>Ca. 10-15%</td>
                                <td>Glattmuskulärer Ursprung</td>
                            </tr>
                            <tr>
                                <td><strong>Synovialsarkom</strong></td>
                                <td>Ca. 5-10%</td>
                                <td>t(X;18), häufig bei jungen Erwachsenen</td>
                            </tr>
                            <tr>
                                <td><strong>Angiosarkom</strong></td>
                                <td>Ca. 2-4%</td>
                                <td>Gefäßursprung, nach Bestrahlung möglich</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Bestrahlung:</strong> Sekundäres Sarkom nach Radiotherapie (nach 10-20 Jahren).</li>
                    <li><strong>Genetische Syndrome:</strong> Li-Fraumeni, Neurofibromatose Typ 1, Retinoblastom.</li>
                    <li><strong>Lymphödem:</strong> Risiko für Angiosarkom (Stewart-Treves-Syndrom).</li>
                    <li><strong>Chemikalien:</strong> Vinylchlorid, Arsen (Angiosarkom der Leber).</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Schmerzlose, langsam wachsende Raumforderung.</li>
                    <li>Größe >5 cm sollte an Sarkom denken lassen.</li>
                    <li>Lokalisation: Extremitäten (60%), Retroperitoneum (20%), Stamm (15%).</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>MRT:</strong> Bildgebung der Wahl für Extremitätensarkome.</li>
                    <li><strong>CT:</strong> Für retroperitoneale und thorakale Sarkome.</li>
                    <li><strong>Biopsie:</strong> Stanzbiopsie (nicht Exzision!) vor Therapieplanung.</li>
                    <li><strong>Referenzpathologie:</strong> Essenziell für korrekte Diagnose.</li>
                    <li><strong>Molekulare Diagnostik:</strong> FISH, PCR für spezifische Translokationen.</li>
                </ul>
                <h3>Grading (FNCLCC)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Differenzierung</th>
                                <th>Mitosen</th>
                                <th>Nekrosen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>G1</strong></td>
                                <td>Gut differenziert</td>
                                <td>Niedrig</td>
                                <td><50%</td>
                            </tr>
                            <tr>
                                <td><strong>G2</strong></td>
                                <td>Mäßig differenziert</td>
                                <td>Intermediär</td>
                                <td><50%</td>
                            </tr>
                            <tr>
                                <td><strong>G3</strong></td>
                                <td>Schlecht differenziert</td>
                                <td>Hoch</td>
                                <td>&ge;50%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>TNM-Staging (AJCC 8. Auflage)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>T-Kategorie</th>
                                <th>N</th>
                                <th>M</th>
                                <th>Grading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>IA</strong></td>
                                <td>T1 (&le;5 cm)</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G1, GX</td>
                            </tr>
                            <tr>
                                <td><strong>IB</strong></td>
                                <td>T2 (>5 cm)</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G1, GX</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T1-T2</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G2-G3</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T2</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G3</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Jedes T</td>
                                <td>N1 oder jedes N</td>
                                <td>M1</td>
                                <td>Jedes G</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Lokalisierte Erkrankung</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Weite Resektion (R0) mit Sicherheitsabstand.</li>
                    <li><strong>Neoadjuvante/adjuvante Radiotherapie:</strong> Bei Tumoren >5 cm oder G2/G3.</li>
                    <li><strong>Neoadjuvante Chemotherapie:</strong> Bei hochmalignen, großen Tumoren (kontrovers).</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li><strong>Präoperativ:</strong> 50 Gy, kleineres Bestrahlungsfeld.</li>
                    <li><strong>Postoperativ:</strong> 60-66 Gy nach R0/R1-Resektion.</li>
                    <li><strong>Brachytherapie:</strong> Als Boost oder alleinige Bestrahlung.</li>
                </ul>
                <h3>Chemotherapie (adjuvant)</h3>
                <ul>
                    <li>Kontrovers diskutiert.</li>
                    <li>Keine Standardempfehlung.</li>
                    <li>Bei hohem Rezidivrisiko individuell erwägen (Anthrazyklin-basiert).</li>
                </ul>
                <h3>Metastasierte Erkrankung</h3>
                <ul>
                    <li><strong>Erstlinie:</strong> Doxorubicin ± Ifosfamid (Standard).</li>
                    <li><strong>Alternative:</strong> Doxorubicin + Olaratumab (keine Zulassung mehr).</li>
                    <li><strong>Zweitlinie:</strong> Trabectedin (v.a. bei Lipo-/Leiomyosarkom).</li>
                    <li><strong>Pazopanib:</strong> Tyrosinkinase-Inhibitor nach Anthrazyklin-Versagen.</li>
                    <li><strong>Eribulin:</strong> Bei Lipo-/Leiomyosarkom.</li>
                </ul>
                <h3>Spezifische Subtypen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Besondere Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>GIST</strong></td>
                                <td>Imatinib, Sunitinib, Regorafenib (nicht klassisches Sarkom)</td>
                            </tr>
                            <tr>
                                <td><strong>Dermatofibrosarcoma protuberans</strong></td>
                                <td>Imatinib bei inoperablen Tumoren</td>
                            </tr>
                            <tr>
                                <td><strong>Alveoläres Weichgewebesarkom</strong></td>
                                <td>Pembrolizumab + Axitinib</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
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
                                <td>Alle 3-4 Monate</td>
                                <td>MRT/CT der Primärlokalisation, Thorax-CT</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>MRT/CT der Primärlokalisation, Thorax-CT</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>MRT/CT der Primärlokalisation, Thorax-CT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bei retroperitonealen Sarkomen: Abdomen-CT.</li>
                    <li>Bei hohem Risiko engmaschigere Kontrollen.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Physiotherapie nach Extremitätenresektion.</li>
                </ul>
                <h3>Prognosefaktoren</h3>
                <ul>
                    <li><strong>Günstig:</strong> G1, T1, Extremitätenlokalisation, R0-Resektion.</li>
                    <li><strong>Ungünstig:</strong> G3, T2, Retroperitoneum, R1/R2-Resektion.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li>Re-Resektion wenn möglich.</li>
                    <li>Re-Bestrahlung bei ausgewählten Fällen.</li>
                    <li>Systemtherapie bei nicht-resektablen Rezidiven.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitleitung Weichgewebesarkome. AWMF-Registernummer: 025-004. Leitlinienprogramm Onkologie.</p>"
    });
})();