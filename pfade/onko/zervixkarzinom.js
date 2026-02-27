(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "zervixkarzinom",
        module: "onko",
        title: "Zervixkarzinom",
        name: "Zervixkarzinom",
        category: "onko-gyn",
        stand: "03/22",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Viertthäufigstes gynäkologisches Malignom weltweit</li>
                    <li>In Deutschland rückläufige Inzidenz durch Screening</li>
                    <li>Median bei Diagnose: ca. 53 Jahre</li>
                    <li>5-Jahres-Überleben abhängig vom Stadium (FIGO I: ca. 90%)</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Plattenepithelkarzinom:</strong> Ca. 70-80%.</li>
                    <li><strong>Adenokarzinom:</strong> Ca. 15-20%, schlechtere Prognose.</li>
                    <li><strong>Adenosquamöses Karzinom:</strong> Selten.</li>
                    <li><strong>Neuroendokrines Karzinom:</strong> Selten, sehr aggressiv.</li>
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
                                <td>HPV-Infektion (v.a. HPV 16, 18) - notwendige Bedingung.</td>
                            </tr>
                            <tr>
                                <td><strong>Sexuell</strong></td>
                                <td>Früher erster Geschlechtsverkehr, multiple Sexualpartner.</td>
                            </tr>
                            <tr>
                                <td><strong>Immunsuppression</strong></td>
                                <td>HIV-Infektion, Organtransplantation.</td>
                            </tr>
                            <tr>
                                <td><strong>Weitere</strong></td>
                                <td>Rauchen, orale Kontrazeptiva (langjährig).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Prävention</h3>
                <ul>
                    <li><strong>HPV-Impfung:</strong> Primärprävention (Impfung vor erstem Geschlechtsverkehr).</li>
                    <li><strong>Screening:</strong> Zervixabstrich (Pap-Test) und HPV-Test.</li>
                </ul>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Kolposkopie:</strong> Inspektion der Zervix mit Essigsäure und Jodlösung.</li>
                    <li><strong>Zervixbiopsie:</strong> Gezielte Biopsie bei suspekten Arealen.</li>
                    <li><strong>Konisation:</strong> Diagnostisch und therapeutisch bei CIN/frühem Karzinom.</li>
                </ul>
                <h3>Staging-Untersuchungen</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Unter Narkose zur Beurteilung der Parametrien.</li>
                    <li><strong>MRT Becken:</strong> Beurteilung der lokalen Ausbreitung und Lymphknoten.</li>
                    <li><strong>CT Thorax/Abdomen:</strong> Bei fortgeschrittenem Stadium.</li>
                    <li><strong>Zystoskopie/Rektoskopie:</strong> Bei Verdacht auf Organinfiltration.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium.</li>
                </ul>
                <h3>FIGO-Stadien</h3>
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
                                <td><strong>IA1</strong></td>
                                <td>Stromainvasion ≤3 mm, Breite ≤7 mm</td>
                            </tr>
                            <tr>
                                <td><strong>IA2</strong></td>
                                <td>Stromainvasion 3-5 mm, Breite ≤7 mm</td>
                            </tr>
                            <tr>
                                <td><strong>IB1-IB3</strong></td>
                                <td>Auf Zervix beschränkt, verschiedene Größen</td>
                            </tr>
                            <tr>
                                <td><strong>IIA/IIB</strong></td>
                                <td>Befall oberes Drittel Vagina / Parametrien</td>
                            </tr>
                            <tr>
                                <td><strong>IIIA/IIIB</strong></td>
                                <td>Befall unteres Drittel Vagina / Beckenwand</td>
                            </tr>
                            <tr>
                                <td><strong>IVA/IVB</strong></td>
                                <td>Befall Blase/Rektum / Fernmetastasen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Pathologie",
                html: `<h3>Klassifikation invasiver Zervixkarzinome</h3>
                <ul>
                    <li><strong>Tumortypisierung:</strong> Nach WHO-Klassifikation 2020.</li>
                    <li><strong>Stadieneinteilung:</strong> FIGO-Stadieneinteilung für gynäkologische Malignome.</li>
                    <li><strong>TNM-Parameter:</strong> Tumorgröße, Lymphknotenbefall, Metastasierung.</li>
                </ul>
                <h3>Aufarbeitung des Gewebes</h3>
                <ul>
                    <li><strong>Diagnostische Biopsien:</strong> Histologische Sicherung.</li>
                    <li><strong>Konisationen:</strong> Diagnostisch und therapeutisch.</li>
                    <li><strong>Trachelektomie:</strong> Fertilitätserhaltend.</li>
                    <li><strong>Radikale Hysterektomie:</strong> Standardverfahren.</li>
                </ul>
                <h3>Morphologische Prognosefaktoren</h3>
                <ul>
                    <li>Tumorgröße und -differenzierung</li>
                    <li>Stromainvasionstiefe</li>
                    <li>Lymphgefäßinvasion</li>
                    <li>Lymphknotenbefall</li>
                    <li>HPV-Status (insbesondere bei Adenokarzinomen)</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Frühstadium (FIGO IA1-IB1)</h3>
                <ul>
                    <li><strong>Konisation:</strong> Bei IA1 ohne Lymphgefäßinvasion (fertilitätserhaltend möglich).</li>
                    <li><strong>Trachelektomie:</strong> Fertilitätserhaltend bei IA2-IB1 (<2 cm).</li>
                    <li><strong>Radikale Hysterektomie:</strong> Standard bei IB1.</li>
                    <li><strong>Lymphadenektomie:</strong> Pelvin ± paraaortal (Sentinel-Node-Biopsie möglich).</li>
                </ul>
                <h3>Lokal fortgeschritten (FIGO IB2-IVA)</h3>
                <ul>
                    <li><strong>Radiochemotherapie:</strong> Standard (externe Bestrahlung + Brachytherapie + Cisplatin).</li>
                    <li><strong>Dosierung:</strong> 45-50 Gy extern + Brachytherapie-Boost.</li>
                </ul>
                <h3>Metastasiertes Stadium</h3>
                <ul>
                    <li><strong>Chemotherapie:</strong> Cisplatin + Paclitaxel ± Bevacizumab.</li>
                    <li><strong>Immuntherapie:</strong> Pembrolizumab bei PD-L1-positivem rezidiviertem/metastasiertem Karzinom.</li>
                    <li><strong>Immuntherapie + Chemotherapie:</strong> Pembrolizumab + Platin/Taxan als Erstlinie.</li>
                    <li><strong>Tisotumab Vedotin:</strong> Antibody-Drug-Conjugat nach Vortherapie.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>Zentralrezidiv:</strong> Exenteration bei ausgewählten Patientinnen.</li>
                    <li><strong>Laterales Rezidiv:</strong> Radiochemotherapie (wenn nicht vorbestrahlt).</li>
                    <li><strong>Fernmetastasen:</strong> Systemtherapie.</li>
                </ul>`
            },
            {
                title: "Strahlentherapie",
                html: `<h3>Radio(chemo)therapie</h3>
                <ul>
                    <li><strong>Techniken:</strong> Perkutane Strahlentherapie (intensitätsmoduliert), Brachytherapie.</li>
                    <li><strong>Simultane Chemotherapie:</strong> Cisplatin-Monotherapie.</li>
                    <li><strong>Indikation:</strong> Lokal fortgeschrittene Tumoren (FIGO IB2-IVA).</li>
                    <li><strong>Adjuvante Therapie:</strong> Nach primärer Operation bei Risikofaktoren.</li>
                </ul>
                <h3>Brachytherapie</h3>
                <ul>
                    <li>Wesentlicher Bestandteil der kurativen Therapie</li>
                    <li>Hohe lokale Dosis in Begrenzung des Normalgewebes</li>
                    <li>Combination mit externer Bestrahlung</li>
                </ul>
                <h3>Unterstützende Maßnahmen</h3>
                <ul>
                    <li>Anämieprophylaxe und -behandlung</li>
                    <li>Prophylaxe von Strahlenzystitis und -proktitis</li>
                </ul>`
            },
            {
                title: "Medikamentöse Therapie",
                html: `<h3>Primärbehandlung</h3>
                <ul>
                    <li><strong>Neoadjuvante Chemotherapie:</strong> Option bei großen Tumoren (≥4 cm).</li>
                    <li><strong>Adjuvante Chemotherapie:</strong> Nach Operation bei Risikofaktoren.</li>
                </ul>
                <h3>Systemische Therapie</h3>
                <ul>
                    <li><strong>Erstlinie:</strong> Cisplatin + Paclitaxel ± Bevacizumab</li>
                    <li><strong>Zweitlinie:</strong> Pembrolizumab, Tisotumab Vedotin</li>
                    <li><strong>Immuntherapie:</strong> PD-1/PD-L1-Inhibitoren bei PD-L1-positivem Tumor</li>
                </ul>`
            },
            {
                title: "Supportivtherapie & Rehabilitation",
                html: `<h3>Supportivtherapie</h3>
                <ul>
                    <li><strong>Radiogene Nebenwirkungen:</strong> Zystitis, Proktitis, Vulvovaginitis.</li>
                    <li><strong>Lymphödem:</strong> Physikalische Therapie, Kompressionsträger.</li>
                    <li><strong>Vaginalstenose:</strong> Dilatatoren, lokale Hormone.</li>
                    <li><strong>Sexuelle Funktionsstörungen:</strong> Beratung, Lokaltherapie.</li>
                </ul>
                <h3>Psychoonkologie</h3>
                <ul>
                    <li>Psychosoziale Beratung und Unterstützung</li>
                    <li>Behandlung von Angst und Depression</li>
                    <li>Beratung zu Sexualität</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Physiotherapie für Kontinenzstörungen</li>
                    <li>Training gegen Fatigue</li>
                    <li>Beratung zu Lebensqualität</li>
                </ul>`
            },
            {
                title: "Palliativmedizinische Begleitung",
                html: `<h3>Ziele der Palliativversorgung</h3>
                <ul>
                    <li>Linderung von Symptomen (Schmerz, Dyspnoe, Obstruktion)</li>
                    <li>Steigerung der Lebensqualität</li>
                    <li>Unterstützung der Angehörigen</li>
                </ul>
                <h3>Symptomorientierte Therapie</h3>
                <ul>
                    <li><strong>Schmerz:</strong> Opioide, adjuvante Analgetika.</li>
                    <li><strong>Blutungen:</strong> Radiotherapie, Embolisation.</li>
                    <li><strong>Obstruktion:</strong> Stenting, chirurgische Intervention.</li>
                    <li><strong>Lymphödem:</strong> Kompression, Physiotherapie.</li>
                </ul>
                <h3>Frühzeitige Integration</h3>
                <ul>
                    <li>Palliativberatung bereits bei der Diagnose einer nicht heilbaren Erkrankung</li>
                    <li>Koordination mit onkologischer Therapie</li>
                    <li>Beratung zu Therapieziel setzen</li>
                </ul>`
            },
            {
                title: "Kinderwunsch & Fertilitätsprotektion",
                html: `<h3>Operative Optionen</h3>
                <ul>
                    <li><strong>Konisation:</strong> Bei IA1 ohne Lymphgefäßinvasion.</li>
                    <li><strong>Trachelektomie:</strong> Fertilitätserhaltend bei IA2-IB1 (<2 cm).</li>
                </ul>
                <h3>Fertilitätsprotektion</h3>
                <ul>
                    <li><strong>Ovariopexie:</strong> Schutz vor Radiotherapie.</li>
                    <li><strong>Kryokonservierung:</strong> Oozyten oder Ovarialgewebe.</li>
                    <li><strong>IVF:</strong> Vor Chemotherapie.</li>
                </ul>
                <h3>Beratung</h3>
                <ul>
                    <li>Individuelle Risikobewertung</li>
                    <li>Information zu alternativen Familienplanungsmöglichkeiten</li>
                    <li>Psychosoziale Unterstützung</li>
                </ul>`
            },
            {
                title: "Zervixkarzinom in der Schwangerschaft",
                html: `<h3>Diagnostik</h3>
                <ul>
                    <li><strong>Zytologie:</strong> Pap-Test wie bei Nichtschwangeren.</li>
                    <li><strong>Kolposkopie:</strong> Sicherung der Diagnose.</li>
                    <li><strong>Biopsie:</strong> Nur bei suspekten Arealen.</li>
                </ul>
                <h3>Therapieplanung</h3>
                <ul>
                    <li>Abhängig von Stadium und Schwangerschaftszeitpunkt</li>
                    <li><strong>Frühe Schwangerschaft (<20 SSW):</strong> Operation oder Abortion + Therapie.</li>
                    <li><strong>Späte Schwangerschaft (>24 SSW):</strong> Warte bis Lungenreife, dann Kaiserschnitt + Hysterektomie.</li>
                </ul>
                <h3>Besondere Situationen</h3>
                <ul>
                    <li><strong>FIGO IA1:</strong> Beobachtung bis Geburt, dann Therapie.</li>
                    <li><strong>FIGO IB1:</strong> Trachelektomie bei Wunsch nach Kindern.</li>
                    <li><strong>Fortgeschrittene Stadien:</strong> Individuelle Entscheidung.</li>
                </ul>`
            },
            {
                title: "Spezielle Situationen",
                html: `<h3>Akzidentelles Zervixkarzinom nach Hysterektomie</h3>
                <ul>
                    <li>Definition: Karzinom diagnostiziert nach einfacher Hysterektomie.</li>
                    <li>Therapie: Abhängig von Stadium und Residualbefall.</li>
                    <li>Optionen: Lymphadenektomie, Radiochemotherapie.</li>
                </ul>
                <h3>Neuroendokrines Zervixkarzinom</h3>
                <ul>
                    <li>Selten, aggressiver Typ</li>
                    <li>Hohe Rezidivrate</li>
                    <li>Therapie: Kombination aus Operation, Chemotherapie und Radiotherapie</li>
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
                                <td>Anamnese, gynäkologische Untersuchung, Zervixabstrich</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, gynäkologische Untersuchung, Zervixabstrich</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, gynäkologische Untersuchung, Zervixabstrich</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bildgebung bei klinischem Verdacht auf Rezidiv.</li>
                    <li>SCC-Antigen (nur bei Plattenepithelkarzinom) optional.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Sexualberatung.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Zervixkarzinom. AWMF-Registernummer: 032-033OL. Leitlinienprogramm Onkologie. Kurzversion 2.2, März 2022.</p>"
    });
})();