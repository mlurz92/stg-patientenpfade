(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "schilddruesenkarzinom",
        module: "onko",
        title: "Schilddrüsenkarzinom",
        name: "Schilddrüsenkarzinom",
        category: "onko-hno",
        stand: "02/26",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Inzidenz steigend (v.a. durch frühe Detektion kleiner Tumoren)</li>
                    <li>In Deutschland ca. 5.000-6.000 Neuerkrankungen/Jahr</li>
                    <li>Frauen : Männer = 3 : 1</li>
                    <li>Median bei Diagnose: ca. 50 Jahre</li>
                    <li>5-Jahres-Überleben gesamt: ca. 90% (abhängig vom Typ)</li>
                </ul>
                <h3>Histologische Typen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Typ</th>
                                <th>Häufigkeit</th>
                                <th>Prognose</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Papillär</strong></td>
                                <td>Ca. 60-70%</td>
                                <td>Sehr gut</td>
                                <td>Häufigste Form, langsam wachsend</td>
                            </tr>
                            <tr>
                                <td><strong>Follikulär</strong></td>
                                <td>Ca. 15-20%</td>
                                <td>Gut</td>
                                <td>Hämatogene Metastasierung</td>
                            </tr>
                            <tr>
                                <td><strong>Medullär</strong></td>
                                <td>Ca. 5-10%</td>
                                <td>Intermediär</td>
                                <td>C-Zell-Tumor, Calcitonin-Produktion, MEN2-Assoziation</td>
                            </tr>
                            <tr>
                                <td><strong>Anaplastisch</strong></td>
                                <td>Ca. 1-2%</td>
                                <td>Sehr schlecht</td>
                                <td>Hochaggressiv, medianes Überleben Monate</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Strahlenexposition:</strong> Kindheit (Tschernobyl, therapeutische Bestrahlung).</li>
                    <li><strong>Jodmangel:</strong> Assoziation mit follikulärem Karzinom.</li>
                    <li><strong>Genetik:</strong> MEN2-Syndrom (medulläres Karzinom), familiäre Formen.</li>
                    <li><strong>Geschlecht:</strong> Weibliches Geschlecht häufiger betroffen.</li>
                </ul>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Palpabler Schilddrüsenknoten.</li>
                    <li>Schwellung der Halsregion.</li>
                    <li>Heiserkeit (Rekurrensparese).</li>
                    <li>Dysphagie, Atemnot.</li>
                    <li>Medulläres Karzinom: Diarrhö (Calcitonin).</li>
                </ul>
                <h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Ultraschall:</strong> Beurteilung der Knotenstruktur (TI-RADS).</li>
                    <li><strong>Feinnadelpunktion (FNP):</strong> Zytologische Abklärung suspekter Knoten.</li>
                    <li><strong>Labor:</strong> TSH, bei medullärem Karzinom Calcitonin und CEA.</li>
                    <li><strong>Szintigraphie:</strong> Bei niedrigem TSH zur Differenzierung (heiß/kalt).</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>CT/MRT Hals/Thorax:</strong> Ausbreitung, Lymphknoten.</li>
                    <li><strong>Ösophagogastroskopie:</strong> Bei Infiltrationsverdacht.</li>
                    <li><strong>Calcitonin-Stimulationstest:</strong> Bei Verdacht auf medulläres Karzinom.</li>
                    <li><strong>Genetische Testung:</strong> RET-Protoonkogen bei medullärem Karzinom.</li>
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
                                <td>Tumor &le;2 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor >2-4 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor >4 cm oder minimale extrathyreoidale Ausbreitung</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Infiltration von Trachea, Ösophagus, Rekurrensnerv</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Prävertebralfaszie, A. carotis</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Differenziertes Karzinom (papillär/follikulär)</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Totale Thyreoidektomie (Standard).</li>
                    <li><strong>Hemithyreoidektomie:</strong> Bei kleinen, unifokalen Tumoren (<4 cm, low-risk).</li>
                    <li><strong>Zentrale Neck Dissection:</strong> Bei Lymphknotenbefall oder hohem Risiko.</li>
                    <li><strong>Radiojodtherapie:</strong> Adjuvant nach Thyreoidektomie (ab T2 oder Risikofaktoren).</li>
                    <li><strong>TSH-Suppression:</strong> Levothyroxin zur Rezidivprophylaxe.</li>
                </ul>
                <h3>Medulläres Karzinom</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Totale Thyreoidektomie mit zentraler Neck Dissection.</li>
                    <li><strong>Laterale Neck Dissection:</strong> Bei Lymphknotenbefall.</li>
                    <li><strong>Keine Radiojodtherapie:</strong> C-Zellen nehmen kein Jod auf.</li>
                    <li><strong>Genetische Beratung:</strong> RET-Mutation, Familien-Screening.</li>
                    <li><strong>Systemtherapie:</strong> Vandetanib, Cabozantinib bei metastasierter Erkrankung.</li>
                </ul>
                <h3>Anaplastisches Karzinom</h3>
                <ul>
                    <li><strong>Resektion:</strong> Wenn technisch möglich.</li>
                    <li><strong>Radiochemotherapie:</strong> Definitiv oder adjuvant.</li>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab bei TMB-hohen Tumoren.</li>
                    <li><strong>Targeted Therapy:</strong> Bei BRAF-V600E-Mutation (Dabrafenib + Trametinib).</li>
                </ul>
                <h3>Fortgeschrittenes/metastasiertes differenziertes Karzinom</h3>
                <ul>
                    <li><strong>Radiojodtherapie:</strong> Bei Jodspeicherung.</li>
                    <li><strong>TSH-Suppression:</strong> Fortsetzen.</li>
                    <li><strong>Multikinase-Inhibitoren:</strong> Lenvatinib, Sorafenib bei Radiojod-refraktären Tumoren.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Differenziertes Karzinom</h3>
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
                                <td>Jahr 1-3</td>
                                <td>Alle 3-6 Monate</td>
                                <td>Klinische Untersuchung, Ultraschall, Tg, TSH</td>
                            </tr>
                            <tr>
                                <td>Jahr 4-5</td>
                                <td>Alle 6-12 Monate</td>
                                <td>Klinische Untersuchung, Ultraschall, Tg, TSH</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Klinische Untersuchung, Ultraschall, Tg, TSH</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>Thyreoglobulin (Tg):</strong> Nach Thyreoidektomie sollte Tg niedrig/undetektierbar sein.</li>
                    <li><strong>Tg-Antikörper:</strong> Können Tg-Messung interferieren, eigenständiger Marker.</li>
                    <li><strong>Calcitonin/CEA:</strong> Bei medullärem Karzinom.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Lebenslange TSH-Suppression (Ziel abhängig vom Risiko).</li>
                    <li>Bei medullärem Karzinom: Familien-Screening auf RET-Mutation.</li>
                    <li>Psychoonkologische Betreuung.</li>
                </ul>
                <h3>Rezidivdiagnostik</h3>
                <ul>
                    <li>Steigendes Tg oder Calcitonin.</li>
                    <li>Ultraschall Hals.</li>
                    <li>Radiojod-Ganzkörperszintigraphie (bei differenziertem Karzinom).</li>
                    <li>PET-CT bei negativer Jodszintigraphie und steigendem Tg.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Schilddrüsenkarzinom. AWMF-Registernummer: 088-007. Leitlinienprogramm Onkologie.</p>"
    });
})();