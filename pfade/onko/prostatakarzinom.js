(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "prostatakarzinom",
        module: "onko",
        title: "Prostatakarzinom",
        name: "Prostatakarzinom",
        category: "onko-uro",
        stand: "08/25",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Häufigste Krebserkrankung des Mannes in Deutschland</li>
                    <li>Zweithäufigste krebsbedingte Todesursache bei Männern</li>
                    <li>Inzidenz steigt stark mit dem Alter</li>
                    <li>Median bei Diagnose: ca. 70 Jahre</li>
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
                                <td>Familiäre Vorbelastung (Vater/Bruder betroffen), BRCA1/2-Mutation, Lynch-Syndrom.</td>
                            </tr>
                            <tr>
                                <td><strong>Ethnisch</strong></td>
                                <td>Höheres Risiko bei afroamerikanischer Abstammung.</td>
                            </tr>
                            <tr>
                                <td><strong>Lebensstil</strong></td>
                                <td>Adipositas, fettreiche Ernährung (diskutiert).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Früherkennung (Version 8.1)</h3>
                <ul>
                    <li>Keine digitale rektale Untersuchung zur Früherkennung empfohlen</li>
                    <li>Männer ab 45 Jahren mit Lebenserwartung >10 Jahre: PSA-Bestimmung anbieten</li>
                    <li>Risikoadaptierte Intervalle: PSA ≤1,5 ng/ml alle 5 Jahre, PSA 1,5-2,99 ng/ml alle 2 Jahre</li>
                    <li>Bei PSA ≥3 ng/ml: Weiterführende Diagnostik</li>
                    <li>Bei familiärer Belastung/genetischer Prädisposition: Humangenetische Sprechstunde empfohlen</li>
                </ul>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>PSA (Prostataspezifisches Antigen):</strong> Wichtigster Tumormarker.</li>
                    <li><strong>MRT der Prostata (mpMRT):</strong> Vor Biopsie zur Lokalisation empfohlen.</li>
                    <li><strong>Prostatabiopsie:</strong> Systematisch (10-12 Stanzen) oder MRT-gezielt (Fusion).</li>
                    <li><strong>PI-RADS-Klassifikation:</strong> Bei PI-RADS 1 und 2 keine Biopsie empfohlen.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Abdomen/Becken:</strong> Bei ungünstigem intermediärem oder hohem/sehr hohem Risiko.</li>
                    <li><strong>PSMA-PET/CT:</strong> Hochsensitiv für Lymphknoten- und Fernmetastasen.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Symptomen oder erhöhtem Risiko.</li>
                </ul>
                <h3>Risikogruppen (NCCN Klassifikation, Version 8.1)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risiko</th>
                                <th>Kriterien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Niedrig</strong></td>
                                <td>cT1-2a, PSA <10, ISUP Grad 1 (Gleason ≤6)</td>
                            </tr>
                            <tr>
                                <td><strong>Günstig intermediär</strong></td>
                                <td>cT2b-2c oder PSA 10-20 oder ISUP Grad 2 (Gleason 3+4)</td>
                            </tr>
                            <tr>
                                <td><strong>Ungünstig intermediär</strong></td>
                                <td>cT2b-2c oder PSA 10-20 oder ISUP Grad 3-4 (Gleason 3+4 oder 4+3)</td>
                            </tr>
                            <tr>
                                <td><strong>Hoch/sehr hoch</strong></td>
                                <td>cT3-4 oder PSA >20 oder ISUP Grad 5 (Gleason 8-10)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li>Bei metastasierter Erkrankung: Humangenetische Beratung empfohlen</li>
                    <li>Bei Verdacht auf Tumorrisikosyndrom: Genetische Testung</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Lokal begrenztes Prostatakarzinom - Niedriges Risikoprofil</h3>
                <ul>
                    <li><strong>Active Surveillance:</strong> Initial empfohlene Therapieoption</li>
                    <li>Keine lokale Therapie als Erstoption bei niedrigem Risikoprofil</li>
                </ul>
                <h3>Lokal begrenztes Prostatakarzinom - Intermediäres/hohes Risikoprofil</h3>
                <ul>
                    <li><strong>Active Surveillance:</strong> Bei günstigem intermediärem Risiko möglich</li>
                    <li><strong>Radikale Prostatektomie:</strong> Offen oder laparoskopisch/roboterassistiert mit Lymphadenektomie</li>
                    <li><strong>Perkutane Strahlentherapie:</strong> Mit Fraktionierung und begleitender ADT</li>
                    <li><strong>Brachytherapie:</strong> LDR oder HDR, ggf. Kombination mit perkutaner Strahlentherapie</li>
                </ul>
                <h3>Lokal fortgeschrittenes Prostatakarzinom</h3>
                <ul>
                    <li><strong>Strahlentherapie + ADT:</strong> Standard für cT3/4 oder N+</li>
                    <li><strong>Radikale Prostatektomie + erweiterte Lymphadenektomie:</strong> In ausgewählten Fällen</li>
                </ul>
                <h3>Lymphknotenpositives Prostatakarzinom</h3>
                <ul>
                    <li>Erweiterte begleitende hormonablative Therapie mit GnRH-Analogon und Abirateron/Prednison (2 Jahre) empfohlen</li>
                </ul>
                <h3>Metastasiertes Prostatakarzinom</h3>
                <ul>
                    <li><strong>HSPC (hormonsensitiv):</strong> ADT + Darolutamid oder Abirateron oder Docetaxel</li>
                    <li><strong>mCRPC (kastrationsresistent):</strong>
                        <ul>
                            <li>Abirateron + Prednison</li>
                            <li>Enzalutamid</li>
                            <li>Apalutamid</li>
                            <li>Darolutamid</li>
                            <li>Docetaxel + Prednison</li>
                            <li>Cabazitaxel (nach Docetaxel)</li>
                            <li>Radium-223 (bei symptomatischen Knochenmetastasen)</li>
                            <li>Olaparib/Rucaparib (bei BRCA-Mutation)</li>
                            <li>Lutetium-177-Vipivotidtetraxetan (nach ARPI-Therapie)</li>
                        </ul>
                    </li>
                </ul>
                <h3>PSA-Rezidiv</h3>
                <ul>
                    <li><strong>Enzalutamid ± ADT:</strong> Bei high-risk biochemischem Rezidiv</li>
                    <li>Salvage-Strahlentherapie nach radikaler Prostatektomie</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge nach kurativer Therapie</h3>
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
                                <td>PSA, Anamnese, körperliche Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>PSA, Anamnese, körperliche Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>PSA, Anamnese, körperliche Untersuchung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>PSA-Rezidiv Definition</h3>
                <ul>
                    <li><strong>Nach Prostatektomie:</strong> PSA >0,2 ng/ml bestätigt</li>
                    <li><strong>Nach Bestrahlung:</strong> PSA-Anstieg >2 ng/ml über Nadir (Phoenix-Kriterium)</li>
                </ul>
                <h3>Supportivtherapie</h3>
                <ul>
                    <li>Urin- und Stuhlinkontinenz-Beurteilung</li>
                    <li>Sexuelle Funktion (Erektionsfähigkeit)</li>
                    <li>Knochendichte-Messung unter ADT</li>
                    <li>Management von Nebenwirkungen der Androgenrezeptor-Signalweg-Inhibitoren</li>
                    <li>Monitoring unter Chemotherapie (Taxane)</li>
                    <li>Radioligandentherapie: Hämatologische Kontrollen</li>
                </ul>
                <h3>Palliative Versorgung</h3>
                <ul>
                    <li>Frühzeitige Integration von Palliativversorgung</li>
                    <li>Multiprofessionelle symptomorientierte Betreuung</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Prostatakarzinom. AWMF-Registernummer: 043-022OL. Version 8.1 - August 2025. Leitlinienprogramm Onkologie.</p>"
    });
})();
