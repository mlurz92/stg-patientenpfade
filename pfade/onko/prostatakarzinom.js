(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "prostatakarzinom",
        module: "onko",
        title: "Prostatakarzinom",
        name: "Prostatakarzinom",
        category: "onko-uro",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
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
                                <td>Familiäre Vorbelastung (Vater/Bruder betroffen), BRCA2-Mutation, Lynch-Syndrom.</td>
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
                <h3>Vorläuferläsionen</h3>
                <ul>
                    <li>PIN (Prostatische intraepitheliale Neoplasie) - hochgradig.</li>
                    <li>ASAP (Atypische kleine azinäre Proliferation).</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>PSA (Prostataspezifisches Antigen):</strong> Wichtigster Tumormarker.</li>
                    <li><strong>Digital-rektale Untersuchung (DRU):</strong> Palpation der Prostata.</li>
                    <li><strong>MRT der Prostata (mpMRT):</strong> Vor Biopsie zur Lokalisation.</li>
                    <li><strong>Prostatabiopsie:</strong> Systematisch (10-12 Stanzen) oder MRT-gezielt (Fusion).</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT Abdomen/Becken:</strong> Bei hohem Risiko (PSA >20, Gleason >7, cT3/4).</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei PSA >10 ng/ml oder Symptomen.</li>
                    <li><strong>PSMA-PET/CT:</strong> Hochsensitiv für Lymphknoten- und Fernmetastasen.</li>
                </ul>
                <h3>Risikogruppen (nach D'Amico)</h3>
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
                                <td>cT1-2a, PSA <10, Gleason &le;6</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediär</strong></td>
                                <td>cT2b-2c oder PSA 10-20 oder Gleason 7</td>
                            </tr>
                            <tr>
                                <td><strong>Hoch</strong></td>
                                <td>cT3-4 oder PSA >20 oder Gleason 8-10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Lokal begrenztes Prostatakarzinom</h3>
                <ul>
                    <li><strong>Active Surveillance:</strong> Bei niedrigem Risiko und begrenzter Lebenserwartung.</li>
                    <li><strong>Radikale Prostatektomie:</strong> Offen oder laparoskopisch/roboterassistiert.</li>
                    <li><strong>Strahlentherapie:</strong> Externe Bestrahlung (EBRT) oder LDR-Brachytherapie.</li>
                    <li><strong>Watchful Waiting:</strong> Bei begrenzter Lebenserwartung ohne kurative Intention.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Nach Prostatektomie:</strong> Bestrahlung bei pT3/R1 oder Lymphknotenbefall.</li>
                    <li><strong>Nach Bestrahlung:</strong> ADT (Androgendeprivationstherapie) bei Hochrisiko.</li>
                </ul>
                <h3>Lokal fortgeschrittenes Prostatakarzinom</h3>
                <ul>
                    <li><strong>Strahlentherapie + ADT:</strong> Standard für cT3/4 oder N+.</li>
                    <li><strong>Radikale Prostatektomie + erweiterte Lymphadenektomie:</strong> In ausgewählten Fällen.</li>
                </ul>
                <h3>Metastasiertes Prostatakarzinom</h3>
                <ul>
                    <li><strong>Kastrationssensitiv:</strong> ADT (LHRH-Agonist/Antagonist) + Abirateron oder Docetaxel.</li>
                    <li><strong>Kastrationsresistent (CRPC):</strong>
                        <ul>
                            <li>Abirateron + Prednison</li>
                            <li>Enzalutamid</li>
                            <li>Docetaxel + Prednison</li>
                            <li>Cabazitaxel (nach Docetaxel)</li>
                            <li>Radium-223 (bei symptomatischen Knochenmetastasen)</li>
                            <li>Olparib (bei BRCA-Mutation)</li>
                            <li>Lu-177-PSMA-617 (nach anderen Therapien)</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "4. Nachsorge",
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
                <h3>PSA-Rezidiv</h3>
                <ul>
                    <li><strong>Nach Prostatektomie:</strong> PSA >0,2 ng/ml bestätigt.</li>
                    <li><strong>Nach Bestrahlung:</strong> PSA-Anstieg >2 ng/ml über Nadir (Phoenix-Kriterium).</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Urin- und Stuhlinkontinenz-Beurteilung.</li>
                    <li>Sexuelle Funktion (Erektionsfähigkeit).</li>
                    <li>Knochendichte-Messung unter ADT.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Prostatakarzinom. AWMF-Registernummer: 043-022OL. Leitlinienprogramm Onkologie.</p>"
    });
})();