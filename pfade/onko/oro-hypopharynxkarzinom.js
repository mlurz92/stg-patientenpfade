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
                title: "Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li><strong>Oropharynx:</strong> Halsschmerzen, Otalgie, Dysphagie, Halslymphknoten.</li>
                    <li><strong>Hypopharynx:</strong> Dysphagie, Odynophagie, Gewichtsverlust, Heiserkeit (Rekurrensparese).</li>
                    <li>Späte Diagnose bei Hypopharynxkarzinomen typisch.</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Spiegelung/Laryngoskopie:</strong> Inspektion des Pharynx und Larynx.</li>
                    <li><strong>Panendoskopie:</strong> Direkte Laryngoskopie, Ösophagoskopie, Bronchoskopie.</li>
                    <li><strong>Biopsie:</strong> Histologische Sicherung.</li>
                    <li><strong>HPV-Testung:</strong> p16-Immunhistochemie als Surrogatmarker.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT/CT Hals:</strong> Tumorausbreitung, Lymphknotenstatus.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Metastasenausschluss.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium.</li>
                    <li><strong>Ultraschall Hals:</strong> Lymphknotenbeurteilung.</li>
                </ul>
                <h3>TNM-Klassifikation Oropharynx (p16-negativ)</h3>
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
                                <td>Tumor &le;2 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor >2-4 cm</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor >4 cm oder Befall Epiglottis</td>
                            </tr>
                            <tr>
                                <td><strong>T4</strong></td>
                                <td>Infiltration benachbarter Strukturen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>HPV-positives Oropharynxkarzinom</h3>
                <ul>
                    <li>p16-Positivität als Surrogatmarker für HPV.</li>
                    <li>Bessere Prognose, eigenes Staging-System.</li>
                    <li>Deeskalationsstudien zur Therapiereduktion.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Oropharynxkarzinom - Frühstadium (T1-T2, N0-1)</h3>
                <ul>
                    <li><strong>Strahlentherapie:</strong> Alleinige Bestrahlung (IMRT).</li>
                    <li><strong>Chirurgie:</strong> Transorale Laserchirurgie (TLM) oder Roboterchirurgie (TORS).</li>
                    <li><strong>Neck Dissection:</strong> Bei Lymphknotenbefall oder elektiv.</li>
                </ul>
                <h3>Oropharynxkarzinom - Fortgeschritten (T3-T4, N2-3)</h3>
                <ul>
                    <li><strong>Radiochemotherapie:</strong> Cisplatin-haltig, definitive Behandlung.</li>
                    <li><strong>Induktionschemotherapie:</strong> TPF gefolgt von Radiotherapie (ausgewählte Fälle).</li>
                    <li><strong>Chirurgie:</strong> Bei ausgewählten Patienten mit Rekonstruktion.</li>
                </ul>
                <h3>Hypopharynxkarzinom</h3>
                <ul>
                    <li><strong>Frühstadium:</strong> Laserchirurgie oder Radiotherapie.</li>
                    <li><strong>Fortgeschritten:</strong> Radiochemotherapie oder Pharyngolaryngektomie.</li>
                    <li><strong>Larynxerhalt:</strong> Ziel wenn onkologisch möglich.</li>
                </ul>
                <h3>HPV-positive Tumoren</h3>
                <ul>
                    <li>Bessere Prognose, Ansprechen auf Therapie.</li>
                    <li>Deeskalationsstudien: Reduktion der Therapieintensität.</li>
                    <li>Keine Änderung der Standardtherapie außerhalb von Studien.</li>
                </ul>
                <h3>Metastasiertes Stadium</h3>
                <ul>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab (PD-L1 ≥1%) oder Nivolumab.</li>
                    <li><strong>Chemo-Immuntherapie:</strong> Pembrolizumab + Platin/5-FU.</li>
                    <li><strong>Cetuximab:</strong> In Kombination mit Chemotherapie.</li>
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
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Regelmäßige Panendoskopie (Zweittumor-Screening).</li>
                    <li>Logopädie bei Schluckstörungen.</li>
                    <li>Zahnärztliche Betreuung (Kariesprophylaxe nach Bestrahlung).</li>
                    <li>Raucherentwöhnung, Alkoholkarenz.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Nachbestrahlung</h3>
                <ul>
                    <li>Lebenslange Fluoridierung der Zähne.</li>
                    <li>Kariesprophylaxe, Mundtrockenheit behandeln.</li>
                    <li>Unterkieferosteoradionekrose-Risiko beachten.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Oropharynxkarzinom und Hypopharynxkarzinom. AWMF-Registernummer: 007-092OL. Leitlinienprogramm Onkologie.</p>"
    });
})();