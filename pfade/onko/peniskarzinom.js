(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "peniskarzinom",
        module: "onko",
        title: "Peniskarzinom",
        name: "Peniskarzinom",
        category: "onko-uro",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Seltene Tumorentität (ca. 0,5% aller Malignome bei Männern)</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 6.-7. Lebensjahrzehnt</li>
                    <li>Geografische Variation: Höhere Inzidenz in Entwicklungsländern</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> Ca. 95% aller Peniskarzinome.</li>
                    <li><strong>Basaloidkarzinom:</strong> Variante mit schlechterer Prognose.</li>
                    <li><strong>Verruköses Karzinom:</strong> Buschke-Löwenstein-Tumor, niedrig maligne.</li>
                    <li><strong>Seltene Typen:</strong> Melanom, Sarkom, Basalzellkarzinom.</li>
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
                                <td><strong>Infektiös</strong></td>
                                <td>HPV-Infektion (v.a. HPV 16, 18), HIV.</td>
                            </tr>
                            <tr>
                                <td><strong>Lokal</strong></td>
                                <td>Phimose, chronische Entzündungen, Lichen sclerosus.</td>
                            </tr>
                            <tr>
                                <td><strong>Hygiene</strong></td>
                                <td>Mangelnde Hygiene, Smegma-Retention.</td>
                            </tr>
                            <tr>
                                <td><strong>UV-Licht</strong></td>
                                <td>PUVA-Therapie (Psoriasis).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Inspektion und Palpation des Penis und der Leistenregion.</li>
                    <li><strong>Biopsie:</strong> Inzisionsbiopsie oder Exzisionsbiopsie zur histologischen Sicherung.</li>
                    <li><strong>HPV-Test:</strong> Optional.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>MRT Penis:</strong> Bei Verdacht auf tiefe Infiltration.</li>
                    <li><strong>Ultraschall der Leisten:</strong> Beurteilung inguinaler Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen/Becken:</strong> Bei Verdacht auf Fernmetastasen.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium.</li>
                </ul>
                <h3>Lymphknoten-Staging</h3>
                <ul>
                    <li><strong>Klinisch negative Leisten:</strong> Überwachung oder Sentinel-Lymphknoten-Biopsie.</li>
                    <li><strong>Palpable Lymphknoten:</strong> Feinnadelpunktion oder Exzisionsbiopsie.</li>
                </ul>
                <h3>TNM-Klassifikation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Tis</strong></td>
                                <td>Carcinoma in situ</td>
                            </tr>
                            <tr>
                                <td><strong>Ta</strong></td>
                                <td>Nicht-invasives verruköses Karzinom</td>
                            </tr>
                            <tr>
                                <td><strong>T1</strong></td>
                                <td>Invasion des subepithelialen Bindegewebes</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Invasion des Corpus cavernosum/spongiosum</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Invasion der Urethra</td>
                            </tr>
                            <tr>
                                <td><strong>T4</strong></td>
                                <td>Invasion benachbarter Strukturen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Lokale Therapie des Primärtumors</h3>
                <ul>
                    <li><strong>Tis/Ta/T1 (oberflächlich):</strong> Topische Therapie (5-FU, Imiquimod), Lasertherapie, Kryotherapie.</li>
                    <li><strong>T1 (low-grade):</strong> Glansresektion oder lokale Exzision mit Sicherheitsabstand.</li>
                    <li><strong>T1 (high-grade) / T2:</strong> Partielle Penektomie mit 1-2 cm Sicherheitsabstand.</li>
                    <li><strong>T3/T4:</strong> Totale Penektomie mit Perineostomie.</li>
                </ul>
                <h3>Regionäre Lymphknoten</h3>
                <div class="callout callout-wichtig">
                    <p>Das Lymphknoten-Staging ist der wichtigste prognostische Faktor und sollte frühzeitig erfolgen.</p>
                </div>
                <ul>
                    <li><strong>cN0 (klinisch negativ):</strong>
                        <ul>
                            <li>Low-risk: Surveillance möglich</li>
                            <li>High-risk: Modifizierte inguinale Lymphadenektomie oder Sentinel-Biopsie</li>
                        </ul>
                    </li>
                    <li><strong>cN+ (palpable Lymphknoten):</strong> Bilaterale inguinale Lymphadenektomie.</li>
                    <li><strong>Pelvine Lymphknoten:</strong> Bei inguinalem Befall oder pN3.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Radiatio:</strong> Bei pN+ nach Lymphadenektomie (inguinal/pelvin).</li>
                    <li><strong>Chemotherapie:</strong> Bei multiplen Lymphknotenmetastasen.</li>
                </ul>
                <h3>Palliative Therapie</h3>
                <ul>
                    <li><strong>Chemotherapie:</strong> Cisplatin-basiert (TIP: Paclitaxel, Ifosfamid, Cisplatin).</li>
                    <li><strong>Best supportive care:</strong> Schmerztherapie, Wundmanagement.</li>
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
                                <td>Lokale Untersuchung, Leistenpalpation</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Lokale Untersuchung, Leistenpalpation</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Lokale Untersuchung, Leistenpalpation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bildgebung bei Symptomen (CT, MRT).</li>
                    <li>Psychoonkologische Betreuung (Körperbild, Sexualität).</li>
                    <li>Rekonstruktive Verfahren bei Bedarf.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Peniskarzinom. AWMF-Registernummer: 032-049OL. Leitlinienprogramm Onkologie.</p>"
    });
})();