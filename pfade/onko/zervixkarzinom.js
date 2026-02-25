(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "zervixkarzinom",
        module: "onko",
        title: "Zervixkarzinom",
        name: "Zervixkarzinom",
        category: "onko-gyn",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
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
                title: "2. Diagnostik & Staging",
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
                                <td>Stromainvasion &le;3 mm, Breite &le;7 mm</td>
                            </tr>
                            <tr>
                                <td><strong>IA2</strong></td>
                                <td>Stromainvasion 3-5 mm, Breite &le;7 mm</td>
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
                title: "3. Therapie",
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
        sources: "<p>S3-Leitlinie Zervixkarzinom. AWMF-Registernummer: 032-033OL. Leitlinienprogramm Onkologie.</p>"
    });
})();