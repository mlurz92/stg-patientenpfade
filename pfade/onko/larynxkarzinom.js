(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "larynxkarzinom",
        module: "onko",
        title: "Larynxkarzinom",
        name: "Larynxkarzinom",
        category: "onko-hno",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste bösartige Erkrankung des Kehlkopfes</li>
                    <li>In Deutschland ca. 3.500 Neuerkrankungen/Jahr</li>
                    <li>Männer : Frauen = 5 : 1</li>
                    <li>Median bei Diagnose: ca. 65 Jahre</li>
                    <li>5-Jahres-Überleben abhängig vom Stadium (I: ca. 80-90%)</li>
                </ul>
                <h3>Lokalisation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Lokalisation</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Glottis</strong></td>
                                <td>Ca. 60-65%</td>
                                <td>Frühe Symptome (Heiserkeit), günstige Prognose</td>
                            </tr>
                            <tr>
                                <td><strong>Supraglottis</strong></td>
                                <td>Ca. 30-35%</td>
                                <td>Späte Symptome, frühe Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>Subglottis</strong></td>
                                <td>Ca. 1-5%</td>
                                <td>Sehr selten, späte Diagnose</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Rauchen:</strong> Hauptrisikofaktor (ca. 90% der Patienten).</li>
                    <li><strong>Alkohol:</strong> Synergismus mit Rauchen.</li>
                    <li><strong>HPV-Infektion:</strong> Insbesondere bei Supraglottis-Karzinomen.</li>
                    <li><strong>Asbest:</strong> Erhöhtes Risiko.</li>
                    <li><strong>Chronische Laryngitis:</strong> Langjährige Entzündung.</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li><strong>Glottis:</strong> Anhaltende Heiserkeit (>3 Wochen) als Frühsymptom.</li>
                    <li><strong>Supraglottis:</strong> Dysphagie, Globusgefühl, Otalgie, Halslymphknoten.</li>
                    <li><strong>Subglottis:</strong> Dyspnoe, Stridor (Spätsymptome).</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Laryngoskopie:</strong> Direkte und indirekte Untersuchung.</li>
                    <li><strong>Stroboskopie:</strong> Beurteilung der Stimmlippenbewegung.</li>
                    <li><strong>Panendoskopie:</strong> Ausschluss Zweittumor (Ösophagus, Bronchien).</li>
                    <li><strong>Biopsie:</strong> Histologische Sicherung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT/MRT Hals:</strong> Ausbreitung, Knorpelinfiltration, Lymphknoten.</li>
                    <li><strong>CT Thorax:</strong> Metastasenausschluss.</li>
                    <li><strong>Ultraschall Hals:</strong> Lymphknotenbeurteilung.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium.</li>
                </ul>
                <h3>TNM-Klassifikation</h3>
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
                                <td>Auf eine Unterregion beschränkt, normale Mobilität</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Befall mehrerer Unterregionen oder eingeschränkte Mobilität</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Fixation der Stimmlippe oder Befall angrenzender Strukturen</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Durchbruch durch Knorpel, Befall von Schilddrüse, Ösophagus</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Prävertebralfaszie, Mediastinum, Karotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Frühstadium (T1-T2, N0)</h3>
                <ul>
                    <li><strong>Strahlentherapie:</strong> Alternative zur Operation, gute funktionelle Ergebnisse.</li>
                    <li><strong>Laserchirurgie:</strong> Transorale endoskopische Resektion.</li>
                    <li><strong>Offene Chirurgie:</strong> Bei bestimmten Lokalisationen.</li>
                    <li>Organerhalt ist primäres Ziel.</li>
                </ul>
                <h3>Lokal fortgeschritten (T3-T4, N+)</h3>
                <ul>
                    <li><strong>Laryngektomie:</strong> Totale Entfernung des Kehlkopfes bei T4.</li>
                    <li><strong>Radiochemotherapie:</strong> Alternativ bei Organerhaltswunsch.</li>
                    <li><strong>Neck Dissection:</strong> Bei Lymphknotenbefall.</li>
                    <li><strong>Induktionschemotherapie:</strong> Gefolgt von Bestrahlung bei ausgewählten Patienten.</li>
                </ul>
                <h3>Rekonstruktion</h3>
                <ul>
                    <li><strong>Stimmprothese:</strong> Shunt-Ventil nach Laryngektomie.</li>
                    <li><strong>Ösophagusstimme:</strong> Training der Ruktusstimme.</li>
                    <li><strong>Elektrolarynx:</strong> Externe Stimmhilfe.</li>
                </ul>
                <h3>Metastasiertes Stadium</h3>
                <ul>
                    <li><strong>Systemtherapie:</strong> Platin-basierte Chemotherapie ± Cetuximab.</li>
                    <li><strong>Immuntherapie:</strong> Nivolumab oder Pembrolizumab bei rezidivierter/metastasierter Erkrankung.</li>
                    <li>Palliative Bestrahlung zur Symptomkontrolle.</li>
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
                                <td>Jahr 1</td>
                                <td>Alle 1-3 Monate</td>
                                <td>Laryngoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 2</td>
                                <td>Alle 2-4 Monate</td>
                                <td>Laryngoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 4-6 Monate</td>
                                <td>Laryngoskopie, Halsultraschall</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Laryngoskopie, Halsultraschall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Regelmäßige Panendoskopie zur Früherkennung von Zweittumoren.</li>
                    <li>Logopädische Betreuung (Stimm- und Sprechtraining).</li>
                    <li>Raucherentwöhnung.</li>
                    <li>Alkoholkarenz.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Zweitkarzinome</h3>
                <ul>
                    <li>Erhöhtes Risiko für Zweittumoren (ca. 10-15%).</li>
                    <li>Häufigste Lokalisationen: Mundhöhle, Pharynx, Ösophagus, Lunge.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Larynxkarzinom. AWMF-Registernummer: 007-102OL. Leitlinienprogramm Onkologie.</p>"
    });
})();