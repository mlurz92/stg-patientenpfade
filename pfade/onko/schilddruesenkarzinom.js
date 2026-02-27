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
                title: "Symptome & Klinische Untersuchung",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Palpabler Schilddrüsenknoten.</li>
                    <li>Schwellung der Halsregion.</li>
                    <li>Heiserkeit (Rekurrensparese).</li>
                    <li>Dysphagie, Atemnot.</li>
                    <li>Medulläres Karzinom: Diarrhö (Calcitonin).</li>
                </ul>
                <h3>Klinische Untersuchung</h3>
                <ul>
                    <li>Palpation der Schilddrüse und Halslymphknoten.</li>
                    <li>Beurteilung von Stimmbandbeweglichkeit (Laryngoskopie bei Verdacht auf Rekurrensparese).</li>
                    <li>Erhebung der Familienanamnese (MEN2-Syndrom).</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Sonographie (Ultraschall)</h3>
                <ul>
                    <li><strong>Standarduntersuchung:</strong> Beurteilung der Knotenstruktur, Größe, Echogenität, Randkontur.</li>
                    <li><strong>TI-RADS-Klassifikation:</strong> System zur Einteilung des Malignitätsrisikos (TR1-TR5).</li>
                    <li><strong>Elastographie:</strong> Gewebesteifigkeit zur Differenzierung benigner/maligner Knoten.</li>
                    <li><strong>Zervikale Lymphknotensonographie:</strong> Beurteilung regionärer Lymphknoten.</li>
                </ul>
                <h3>Szintigraphie</h3>
                <ul>
                    <li><strong>Schilddrüsenszintigraphie:</strong> Mit Technetium-99m (Tc-99m) oder Iod-123.</li>
                    <li><strong>Differenzierung:</strong> Heiße (hyperfunktionell) vs. kalte (hypofunktionelle) Knoten.</li>
                    <li><strong>Indikation:</strong> Bei erniedrigtem TSH zur Abklärung autonomer Areale.</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Ausbreitungsdiagnostik bei Verdacht auf extrathyroidale Extension, Lymphknotenmetastasen.</li>
                    <li><strong>Kontrastmittel:</strong> Orale und intravenöse Kontrastierung.</li>
                    <li><strong>Untersuchungsbereich:</strong> Hals und Thorax (oberer Mediastinum).</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei Infiltration von Trachea, Ösophagus, oder.weichteilen.</li>
                    <li><strong>Vorteil:</strong> Keine Strahlenbelastung, bessere Weichteildarstellung.</li>
                </ul>
                <h3>Weitere Bildgebung</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenen Tumoren, Radiojod-refraktärer Erkrankung, oder Rezidivverdacht.</li>
                    <li><strong> Röntgen-Thorax:</strong> Metastasensuche (Lunge), Trachea.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Schilddrüsenfunktionsparameter</h3>
                <ul>
                    <li><strong>TSH (Thyreoidea-stimulierendes Hormon):</strong> Primärer Screening-Parameter.</li>
                    <li><strong>freies T3/freies T4:</strong> Bei Schilddrüsenüber- oder -unterfunktion.</li>
                    <li><strong>Thyreoglobulin (Tg):</strong> Tumormarker für differenzierte Karzinome (nur nach Thyreoidektomie aussagekräftig).</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>Calcitonin:</strong> Spezifischer Marker für medulläres Schilddrüsenkarzinom (C-Zell-Karzinom).</li>
                    <li><strong>CEA (Carcinoembryonales Antigen):</strong> Ergänzender Marker bei medullärem Karzinom, Prognosefaktor.</li>
                    <li><strong>Tg-Antikörper (Anti-Tg):</strong> Können Tg-Messung interferieren, müssen mitbestimmt werden.</li>
                </ul>
                <h3>Calcitonin-Stimulationstest</h3>
                <ul>
                    <li><strong>Indikation:</strong> Bei grenzwertig erhöhtem Calcitonin, Verdacht auf medulläres Karzinom.</li>
                    <li><strong>Durchführung:</strong> Pentagastrin- oder Kalzium-Stimulationstest.</li>
                    <li><strong>Interpretation:</strong> Anstieg des Calcitonins auf > 100 pg/ml spricht für medulläres Karzinom.</li>
                </ul>
                <h3>Labor baseline</h3>
                <ul>
                    <li>Blutbild, Leber- und Nierenwerte, Elektrolyte.</li>
                    <li>Bei Therapieüberwachung: Calcium (Hypokalzämie-Risiko nach Chirurgie).</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Feinnadelpunktion (FNP)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Suspekte Schilddrüsenknoten (TI-RADS TR4-TR5), alle Knoten > 1 cm mit suspekten Ultraschallmerkmalen.</li>
                    <li><strong>Durchführung:</strong> Unter Ultraschallkontrolle, zytologische Begutachtung.</li>
                    <li><strong>Bethesda-Klassifikation:</strong> System zur Kategorisierung der Zytologiebefunde (I-VI).</li>
                </ul>
                <h3>Zytologische Diagnostik</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Bezeichnung</th>
                                <th>Malignitätsrisiko</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Bethesda I</strong></td>
                                <td>Nicht diagnostisch</td>
                                <td>1-4%</td>
                            </tr>
                            <tr>
                                <td><strong>Bethesda II</strong></td>
                                <td>Benigne</td>
                                <td>0-3%</td>
                            </tr>
                            <tr>
                                <td><strong>Bethesda III</strong></td>
                                <td>Atypische Zellen (AUS/FLUS)</td>
                                <td>6-18%</td>
                            </tr>
                            <tr>
                                <td><strong>Bethesda IV</strong></td>
                                <td>Follikuläre Neoplasie/Suspizion</td>
                                <td>28-34%</td>
                            </tr>
                            <tr>
                                <td><strong>Bethesda V</strong></td>
                                <td>Verdacht auf Malignität</td>
                                <td>75-96%</td>
                            </tr>
                            <tr>
                                <td><strong>Bethesda VI</strong></td>
                                <td>Maligne</td>
                                <td>97-99%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Histologischer Typ:</strong> Papillär, Follikulär, Medullär, Anaplastisch, Andere.</li>
                    <li><strong>Grading:</strong> Differenzierungsgrad (G1-G3).</li>
                    <li><strong>Tumorgröße:</strong> Maximaler Durchmesser in mm.</li>
                    <li><strong>Extrathyroidale Extension (ETE):</strong> Minimal oder ausgedehnt.</li>
                    <li><strong>Gefäßinvasion:</strong> Bei follikulärem Karzinom prognostisch relevant.</li>
                    <li><strong>Lymphknotenstatus:</strong> Zahl befallener/untersuchte Lymphknoten.</li>
                </ul>
                <h3>Immunhistochemie</h3>
                <ul>
                    <li><strong>Medulläres Karzinom:</strong> Calcitonin, Chromogranin, Synaptophysin positiv.</li>
                    <li><strong>Papilläres Karzinom:</strong> TTF-1, Thyreoglobulin, HBME-1, Cytokeratin-19 positiv.</li>
                    <li><strong>Ki-67:</strong> Proliferationsindex, prognostisch relevant.</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik & Genetik",
                html: `<h3>Genetische Testung</h3>
                <ul>
                    <li><strong>RET-Protoonkogen:</strong> Mutationsanalyse bei medullärem Schilddrüsenkarzinom (MTC).</li>
                    <li><strong>Indikation:</strong> Alle Patienten mit medullärem Karzinom, familiäre Formen (MEN2A, MEN2B).</li>
                    <li><strong>Keimbahnmutationen:</strong> Bei familiärem MTC Nachweis von RET-Mutationen.</li>
                </ul>
                <h3>Molekulare Marker - Differenziertes Karzinom</h3>
                <ul>
                    <li><strong>BRAF-V600E-Mutation:</strong> Häufig bei papillärem Karzinom (ca. 45-70%), prognostisch relevant.</li>
                    <li><strong>TERT-Promotor-Mutation:</strong> Assoziiert mit aggressivem Verlauf, schlechter Prognose.</li>
                    <li><strong>NRAS, KRAS Mutationen:</strong> Bei follikulären Karzinomen.</li>
                    <li><strong>RET/PTC-Rearrangement:</strong> Häufig bei papillärem Karzinom nach Strahlenexposition.</li>
                </ul>
                <h3>Molekulare Marker - Anaplastisches Karzinom</h3>
                <ul>
                    <li><strong>BRAF-V600E:</strong> Bei ca. 25-50% der anaplastischen Karzinome.</li>
                    <li><strong>TMB (Tumor Mutational Burden):</strong> Bestimmung für Immuntherapie-Indikation.</li>
                    <li><strong>PD-L1 Expression:</strong> Für Immuntherapie-Response-Prädiktion.</li>
                </ul>
                <h3>Familiäre Syndrome</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Syndrom</th>
                                <th>Gen</th>
                                <th>Assoziierte Tumoren</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>MEN2A</strong></td>
                                <td>RET</td>
                                <td>Medulläres SD-Karzinom, Phäochromozytom, Hyperparathyreoidismus</td>
                            </tr>
                            <tr>
                                <td><strong>MEN2B</strong></td>
                                <td>RET</td>
                                <td>Medulläres SD-Karzinom, Phäochromozytom, Mukosa-Neurinome, Marfanoid</td>
                            </tr>
                            <tr>
                                <td><strong>Familiäres MTC</strong></td>
                                <td>RET</td>
                                <td>Nur medulläres SD-Karzinom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Genetische Beratung</h3>
                <ul>
                    <li>Indikation bei familiärem MTC oder MEN2-Verdacht.</li>
                    <li>Beratung und Testung von Verwandten ersten Grades.</li>
                    <li>Präsymptomatische Testung bei bekannter Keimbahnmutation.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Lokales Staging</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Palpation von Schilddrüse und Halslymphknoten.</li>
                    <li><strong>Bildgebung:</strong> Sonographie, ggf. CT/MRT.</li>
                    <li><strong>Stimmbandprüfung:</strong> Laryngoskopie bei Verdacht auf Rekurrensbeteiligung.</li>
                </ul>
                <h3>Regional nodal</h3>
                <ul>
                    <li><strong>Sonographie:</strong> Beurteilung zervikaler Lymphknoten.</li>
                    <li><strong>CT/MRT:</strong> Bei Verdacht auf Lymphknotenmetastasen, zentralem und lateralem Kompartment.</li>
                </ul>
                <h3>Fernmetastasen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen:</strong> Standard bei Verdacht auf Fernmetastasen.</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Knochenschmerzen oder erhöhtem alkalischen Phosphatase.</li>
                    <li><strong>PET-CT:</strong> Bei Radiojod-refraktärer Erkrankung.</li>
                    <li><strong>Leberultraschall:</strong> Alternative zum CT.</li>
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
                                <td>Tumor ≤ 2 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T1a</strong></td>
                                <td>Tumor ≤ 1 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T1b</strong></td>
                                <td>Tumor > 1 cm aber ≤ 2 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Tumor > 2-4 cm, auf Schilddrüse beschränkt</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Tumor > 4 cm oder minimale extrathyreoidale Ausbreitung</td>
                            </tr>
                            <tr>
                                <td><strong>T4a</strong></td>
                                <td>Infiltration von Trachea, Ösophagus, Rekurrensnerv oder subcutaneous Weichteile</td>
                            </tr>
                            <tr>
                                <td><strong>T4b</strong></td>
                                <td>Infiltration von Prävertebralfaszie, A. carotis oder mediastinalen Gefäßen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>N-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>N0</strong></td>
                                <td>Keine Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>N1</strong></td>
                                <td>Lymphknotenmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>N1a</strong></td>
                                <td>Metastasen in Level VI (prätracheal, paratracheal, Delphian)</td>
                            </tr>
                            <tr>
                                <td><strong>N1b</strong></td>
                                <td>Metastasen in anderen zervikalen Lymphknoten</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>M-Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>M0</strong></td>
                                <td>Keine Fernmetastasen</td>
                            </tr>
                            <tr>
                                <td><strong>M1</strong></td>
                                <td>Fernmetastasen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Stadieneinteilung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>T</th>
                                <th>N</th>
                                <th>M</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>T1</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T2</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T3</td>
                                <td>N0</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>T1-3</td>
                                <td>N1a</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVA</strong></td>
                                <td>T4a</td>
                                <td>jedes N</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVB</strong></td>
                                <td>T4b</td>
                                <td>jedes N</td>
                                <td>M0</td>
                            </tr>
                            <tr>
                                <td><strong>IVC</strong></td>
                                <td>jedes T</td>
                                <td>jedes N</td>
                                <td>M1</td>
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