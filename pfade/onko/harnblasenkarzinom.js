(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "harnblasenkarzinom",
        module: "onko",
        title: "Harnblasenkarzinom",
        name: "Harnblasenkarzinom",
        category: "onko-uro",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Zehnthäufigste Krebserkrankung weltweit</li>
                    <li>Häufigster maligner Tumor des Urogenitaltrakts bei Männern</li>
                    <li>Männer 3-4x häufiger betroffen als Frauen</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 7. Lebensjahrzehnt</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Urothelkarzinom:</strong> Ca. 90% aller Blasenkarzinome.</li>
                    <li><strong>Plattenepithelkarzinom:</strong> Ca. 5%, assoziiert mit chronischer Entzündung.</li>
                    <li><strong>Adenokarzinom:</strong> Selten, ca. 2%.</li>
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
                                <td><strong>Exposition</strong></td>
                                <td>Rauchen (wichtigster Risikofaktor, 50% der Fälle), aromatische Amine (Berufsexposition).</td>
                            </tr>
                            <tr>
                                <td><strong>Medikamente</strong></td>
                                <td>Cyclophosphamid, Phenacetin.</td>
                            </tr>
                            <tr>
                                <td><strong>Infektionen</strong></td>
                                <td>Schistosomiasis (Plattenepithelkarzinom), chronische Harnwegsinfekte.</td>
                            </tr>
                            <tr>
                                <td><strong>Weitere</strong></td>
                                <td>Bestrahlung des Beckens, Arsen im Trinkwasser.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Zystoskopie:</strong> Goldstandard zur Beurteilung der Blasenschleimhaut und Biopsieentnahme.</li>
                    <li><strong>Urinzytologie:</strong> Detektion von Tumorzellen im Urin.</li>
                    <li><strong>Urinmarker:</strong> NMP22, UroVysion (FISH) als Ergänzung.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>Transurethrale Resektion (TUR-B):</strong> Diagnostisch und therapeutisch, komplette Abtragung.</li>
                    <li><strong>CT Urogramm:</strong> Ausschluss oberer Harnwege und Fernmetastasen.</li>
                    <li><strong>MRT Becken:</strong> Alternative bei Kontraindikationen für CT.</li>
                    <li><strong>Bimanuelle Untersuchung:</strong> In Narkose zur Beurteilung der Infiltrationstiefe.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>FGFR3-Mutation:</strong> Bei nicht-muskelinvasivem Urothelkarzinom häufig.</li>
                    <li><strong>PD-L1:</strong> Für Immuntherapie bei fortgeschrittenem Stadium.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Nicht-muskelinvasives Blasenkarzinom (NMIBC, Ta/T1/CIS)</h3>
                <ul>
                    <li><strong>TUR-B:</strong> Komplette transurethrale Resektion als Primärtherapie.</li>
                    <li><strong>Intravesikale Instillation:</strong> Mitomycin C als einmalige postoperative Instillation.</li>
                    <li><strong>BCG-Instillation:</strong> Bei intermediärem/hohem Risiko (Induktionskurs + Erhaltung).</li>
                    <li><strong>Frühe Zystektomie:</strong> Bei BCG-Versagen oder Hochrisiko-Tumoren.</li>
                </ul>
                <h3>Muskelinvasives Blasenkarzinom (MIBC, ≥T2)</h3>
                <ul>
                    <li><strong>Radikale Zystektomie:</strong> Standard mit pelviner Lymphadenektomie.</li>
                    <li><strong>Neoadjuvante Chemotherapie:</strong> Cisplatin-haltig (MVAC oder Gemcitabin/Cisplatin).</li>
                    <li><strong>Trimodale Therapie:</strong> TUR-B + Radiochemotherapie (bei Inoperabilität oder Organerhaltungswunsch).</li>
                </ul>
                <h3>Metastasiertes Blasenkarzinom</h3>
                <ul>
                    <li><strong>Erstlinie cisplatin-fähig:</strong> Gemcitabin + Cisplatin oder MVAC.</li>
                    <li><strong>Erstlinie cisplatin-unfähig:</strong> Gemcitabin + Carboplatin oder Atezolizumab/Pembrolizumab (bei PD-L1-Positivität).</li>
                    <li><strong>Zweitlinie:</strong> Pembrolizumab, Atezolizumab, Enfortumab Vedotin.</li>
                </ul>
                <h3>Harnableitung nach Zystektomie</h3>
                <ul>
                    <li>Ileum-Conduit (incontinent).</li>
                    <li>Neoblase (kontinent).</li>
                    <li>Kutane Ureterostomie.</li>
                </ul>`
            },
            {
                title: "4. Nachsorge",
                html: `<h3>Nachsorge bei NMIBC</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Intervall Zystoskopie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Niedriges Risiko</td>
                                <td>Nach 3 Monaten, dann jährlich für 5 Jahre</td>
                            </tr>
                            <tr>
                                <td>Intermediäres Risiko</td>
                                <td>Alle 3-6 Monate für 2 Jahre, dann jährlich</td>
                            </tr>
                            <tr>
                                <td>Hohes Risiko</td>
                                <td>Alle 3 Monate für 2 Jahre, dann alle 6 Monate</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Nachsorge bei MIBC nach Zystektomie</h3>
                <ul>
                    <li><strong>Jahr 1-2:</strong> Alle 3-6 Monate (körperliche Untersuchung, Labor, Bildgebung).</li>
                    <li><strong>Jahr 3-5:</strong> Alle 6 Monate.</li>
                    <li><strong>Ab Jahr 5:</strong> Jährlich.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Urinzytologie bei jedem Nachsorgetermin.</li>
                    <li>Obere Harnwege: Jährliche Bildgebung.</li>
                    <li>Raucherentwöhnung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Harnblasenkarzinom. AWMF-Registernummer: 032-038OL. Leitlinienprogramm Onkologie.</p>"
    });
})();