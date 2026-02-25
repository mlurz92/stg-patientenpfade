(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "ovarialkarzinom",
        module: "onko",
        title: "Ovarialkarzinom",
        name: "Ovarialkarzinom",
        category: "onko-gyn",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Fünftthäufigste Krebserkrankung bei Frauen</li>
                    <li>Höchste Sterblichkeit unter den gynäkologischen Malignomen</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel um 65 Jahre</li>
                    <li>5-Jahres-Überleben ca. 45% (ungünstige Prognose)</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Hochgradiges seröses Karzinom:</strong> Ca. 70%, häufig BRCA-assoziiert.</li>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 10-15%.</li>
                    <li><strong>Klarzelliges Karzinom:</strong> Ca. 5-10%, schlechte Prognose.</li>
                    <li><strong>Muzinöses Karzinom:</strong> Ca. 3-5%.</li>
                    <li><strong>Niedriggradiges seröses Karzinom:</strong> Selten, langsam wachsend.</li>
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
                                <td>BRCA1/2-Mutation (ca. 15%), Lynch-Syndrom.</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Familiäre Häufung ohne bekannte Mutation.</td>
                            </tr>
                            <tr>
                                <td><strong>Hormonell</strong></td>
                                <td>Nulliparität, späte Menopause, frühe Menarche.</td>
                            </tr>
                            <tr>
                                <td><strong>Protektiv</strong></td>
                                <td>Ovulationshemmer, Schwangerschaften, Stillzeit, Tubenligatur.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Palpation des Abdomens und gynäkologische Untersuchung.</li>
                    <li><strong>Transvaginaler Ultraschall:</strong> Beurteilung der Ovarien.</li>
                    <li><strong>Tumormarker:</strong> CA-125 (erhöht bei ca. 80%), HE4.</li>
                    <li><strong>ROMA-Score:</strong> Risikoabschätzung basierend auf CA-125 und HE4.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Abdomen/Becken:</strong> Ausbreitungsdiagnostik.</li>
                    <li><strong>CT Thorax:</strong> Metastasen-Ausschluss.</li>
                    <li><strong>MRT Becken:</strong> Alternative bei Kontraindikationen.</li>
                    <li><strong>Parazentese:</strong> Bei Aszites zur Zytologie und Entlastung.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>BRCA1/2-Testung:</strong> Bei allen high-grade serösen Karzinomen.</li>
                    <li><strong>HRD-Status (Homologous Recombination Deficiency):</strong> Für PARP-Inhibitor-Therapie.</li>
                    <li><strong>MSI-Status:</strong> Bei Verdacht auf Lynch-Syndrom.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie (Frühstadium)</h3>
                <ul>
                    <li><strong>FIGO I-IIA:</strong> Hysterektomie, bilaterale Adnektomie, Omentektomie, Peritonealbiopsien, Lymphadenektomie.</li>
                    <li><strong>Fertilitätserhalt:</strong> Bei jungen Patientinnen mit FIGO IA (einseitige Adnektomie).</li>
                </ul>
                <h3>Chirurgische Therapie (Fortgeschritten)</h3>
                <ul>
                    <li><strong>Debulking-Operation:</strong> Ziel: Komplette Resektion (R0).</li>
                    <li><strong>Peritonektomie:</strong> Bei Peritonealkarzinose.</li>
                    <li><strong>Intervalldebulking:</strong> Nach neoadjuvanter Chemotherapie bei primär inoperabel.</li>
                </ul>
                <h3>Systemtherapie - Adjuvant</h3>
                <ul>
                    <li><strong>Standard:</strong> Carboplatin + Paclitaxel (6 Zyklen).</li>
                    <li><strong>Bevacizumab:</strong> Addition bei hohem Risiko, dann Erhaltung.</li>
                    <li><strong>PARP-Inhibitoren (Erhaltung):</strong> Olaparib, Niraparib, Rucaparib bei BRCA-Mutation oder HRD-positiv.</li>
                </ul>
                <h3>Systemtherapie - Rezidiv</h3>
                <ul>
                    <li><strong>Platin-sensitiv (>6 Monate):</strong> Platin-basierte Kombination + Bevacizumab.</li>
                    <li><strong>Platin-resistent (<6 Monate):</strong> Nicht-Platin-basierte Monotherapie (Liposomal Doxorubicin, Topotecan, Gemcitabin, Paclitaxel wöchentlich).</li>
                    <li><strong>PARP-Inhibitoren:</strong> Bei BRCA-Mutation oder HRD.</li>
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
                                <td>Anamnese, klinische Untersuchung, CA-125</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, klinische Untersuchung, CA-125</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, klinische Untersuchung, CA-125</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Bildgebung</h3>
                <ul>
                    <li>CT Thorax/Abdomen bei klinischem Verdacht auf Rezidiv.</li>
                    <li>PET-CT bei unklaren Befunden.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Genetische Beratung bei BRCA-Mutation.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Supportive Therapie (Aszites-Punktion, Schmerztherapie).</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge maligner Ovarialtumoren. AWMF-Registernummer: 032-035OL. Leitlinienprogramm Onkologie.</p>"
    });
})();