(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hodgkin-lymphom",
        module: "onko",
        title: "Hodgkin-Lymphom",
        name: "Hodgkin-Lymphom",
        category: "onko-haem",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Inzidenz: ca. 2-3/100.000 pro Jahr</li>
                    <li>Bimodale Altersverteilung: Gipfel bei 20-30 und >60 Jahre</li>
                    <li>Männer : Frauen = 1,3 : 1</li>
                    <li>5-Jahres-Überleben: ca. 90% (frühe Stadien >95%)</li>
                </ul>
                <h3>Histologische Subtypen (WHO)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Subtyp</th>
                                <th>Häufigkeit</th>
                                <th>Besonderheiten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Klassisches HL (cHL)</strong></td>
                                <td>Ca. 95%</td>
                                <td>CD30+, CD15+, CD20 variabel</td>
                            </tr>
                            <tr>
                                <td>- Nodulär sklerosierend</td>
                                <td>Ca. 70%</td>
                                <td>Häufigster Subtyp, Mediastinalbefall</td>
                            </tr>
                            <tr>
                                <td>- Gemischtzellig</td>
                                <td>Ca. 20%</td>
                                <td>Häufiger bei älteren Patienten</td>
                            </tr>
                            <tr>
                                <td>- Lymphozytenreich</td>
                                <td>Ca. 5%</td>
                                <td>Gute Prognose</td>
                            </tr>
                            <tr>
                                <td>- Lymphozytenarm</td>
                                <td><5%</td>
                                <td>Seltene, schlechte Prognose</td>
                            </tr>
                            <tr>
                                <td><strong>Noduläres Lymphozyten-predominantes HL (NLPHL)</strong></td>
                                <td>Ca. 5%</td>
                                <td>CD20+, CD30-, CD15-, LP-Zellen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>EBV-Infektion:</strong> Assoziation mit ca. 30-40% der Fälle.</li>
                    <li><strong>Immunodefizienz:</strong> HIV, Post-Transplantation.</li>
                    <li><strong>Familiäre Häufung:</strong> Erhöhtes Risiko bei Verwandten.</li>
                </ul>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Symptome</h3>
                <ul>
                    <li>Schmerzlose Lymphadenopathie (zervikal, supraklavikulär, mediastinal).</li>
                    <li>B-Symptome: Fieber, Nachtschweiß, Gewichtsverlust (ca. 30%).</li>
                    <li>Pruritus, Alkoholschmerz (selten).</li>
                    <li>Mediastinaler Befall: Dyspnoe, Vena-cava-superior-Syndrom.</li>
                </ul>
                <h3>Diagnostik</h3>
                <ul>
                    <li><strong>Biopsie:</strong> Exzisionsbiopsie eines Lymphknotens (Goldstandard).</li>
                    <li><strong>Histologie:</strong> Nachweis von Hodgkin-/Reed-Sternberg-Zellen.</li>
                    <li><strong>Immunhistochemie:</strong> CD30+, CD15+, PAX5 (dim), CD20 variabel.</li>
                    <li><strong>Knochenmarkbiopsie:</strong> Bei B-Symptomen oder fortgeschrittenem Stadium.</li>
                    <li><strong>PET-CT:</strong> Standard für Staging und Response-Assessment.</li>
                    <li><strong>Labor:</strong> BSG, LDH, Blutbild, Leber/Niere, Immunstatus.</li>
                </ul>
                <h3>Ann-Arbor-Staging</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>Befall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Ein Lymphknotenregion (I) oder ein extranodaler Ort (IE)</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>&ge;2 Lymphknotenregionen auf einer Zwerchfellseite</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Lymphknotenregionen auf beiden Zwerchfellseiten</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Disseminierter extranodaler Befall</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li><strong>A:</strong> Ohne B-Symptome.</li>
                    <li><strong>B:</strong> Mit B-Symptomen.</li>
                </ul>
                <h3>Risikogruppen (GHSG)</h3>
                <ul>
                    <li><strong>Frühstadium (favorable):</strong> CS I-II ohne Risikofaktoren.</li>
                    <li><strong>Frühstadium (unfavorable):</strong> CS I-II mit Risikofaktoren.</li>
                    <li><strong>Fortgeschritten:</strong> CS III-IV.</li>
                    <li>Risikofaktoren: großer Mediastinaltumor, extranodaler Befall, hohe BSG, >2 Lymphknotenareale.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Frühstadium (favorable, CS I-II ohne Risikofaktoren)</h3>
                <ul>
                    <li><strong>2 Zyklen ABVD + 20 Gy Bestrahlung (IF-RT):</strong> Standard.</li>
                    <li><strong>Alternative:</strong> 2 Zyklen BEACOPP baseline + 30 Gy.</li>
                </ul>
                <h3>Frühstadium (unfavorable, CS I-II mit Risikofaktoren)</h3>
                <ul>
                    <li><strong>2 Zyklen BEACOPP eskaliert + 2 Zyklen ABVD + 30 Gy:</strong> Standard.</li>
                    <li><strong>Alternative:</strong> 4 Zyklen ABVD + 30 Gy.</li>
                </ul>
                <h3>Fortgeschrittenes Stadium (CS III-IV)</h3>
                <ul>
                    <li><strong>BEACOPP eskaliert (6-8 Zyklen):</strong> Standard für Patienten <60 Jahre.</li>
                    <li><strong>ABVD (6-8 Zyklen):</strong> Alternative bei älteren Patienten oder Toxizitätsbedenken.</li>
                    <li><strong>Brentuximab Vedotin + AVD:</strong> Alternative Erstlinie (ECHELON-1).</li>
                    <li><strong>PET-adaptierte Therapie:</strong> Deeskalation bei guter Response möglich.</li>
                </ul>
                <h3>NLPHL</h3>
                <ul>
                    <li><strong>Frühstadium:</strong> Bestrahlung allein (30-30 Gy) oder Chemo + Bestrahlung.</li>
                    <li><strong>Fortgeschritten:</strong> ABVD-ähnliche Chemotherapie.</li>
                    <li><strong>Rituximab:</strong> Bei CD20+-Tumoren wirksam.</li>
                </ul>
                <h3>Rezidivtherapie</h3>
                <ul>
                    <li><strong>Salvage-Chemotherapie + ASCT:</strong> Standard bei rezidiviertem/refraktärem HL.</li>
                    <li><strong>Brentuximab Vedotin:</strong> Nach ASCT-Versagen oder als Brücke zur Transplantation.</li>
                    <li><strong>Pembrolizumab/Nivolumab:</strong> PD-1-Inhibitoren bei rezidiviertem/refraktärem HL.</li>
                    <li><strong>Allogene Stammzelltransplantation:</strong> Bei mehrfach rezidivierter Erkrankung.</li>
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
                                <td>Anamnese, körperliche Untersuchung, Labor, CT/PET-CT bei Bedarf</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, körperliche Untersuchung, Labor</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Spätfolgen</h3>
                <ul>
                    <li><strong>Sekundärmalignome:</strong> Erhöhtes Risiko (M. breast, Lunge, Schilddrüse, AML).</li>
                    <li><strong>Kardiotoxizität:</strong> Nach Anthracyclinen (Doxorubicin) und Bestrahlung.</li>
                    <li><strong>Infertilität:</strong> Nach Chemotherapie (Gonadotoxizität).</li>
                    <li><strong>Schilddrüsenfunktionsstörungen:</strong> Nach Bestrahlung.</li>
                    <li><strong>Pulmonale Toxizität:</strong> Nach Bleomycin.</li>
                </ul>
                <h3>Screening auf Spätfolgen</h3>
                <ul>
                    <li>Lebenslange Nachsorge empfohlen.</li>
                    <li>Kardiologische Untersuchungen (Echokardiographie).</li>
                    <li>Mammographie/MRT (nach Thoraxbestrahlung).</li>
                    <li>Schilddrüsenfunktion.</li>
                    <li>Lungenfunktion.</li>
                </ul>
                <h3>Fertilitätserhalt</h3>
                <ul>
                    <li>Aufklärung vor Therapiebeginn essenziell.</li>
                    <li>Kryokonservierung von Spermien/Eizellen.</li>
                    <li>GnRH-Analoga bei Frauen (kontrovers).</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Hodgkin-Lymphom. AWMF-Registernummer: 068-005. Leitlinienprogramm Onkologie.</p>"
    });
})();