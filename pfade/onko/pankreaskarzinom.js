(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "pankreaskarzinom",
        module: "onko",
        title: "Pankreaskarzinom",
        name: "Pankreaskarzinom",
        category: "onko-gi",
        stand: "02/26",
        sections: [
            {
                title: "1. Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Dritthäufigste krebsbedingte Todesursache in westlichen Ländern</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel im 7.-8. Lebensjahrzehnt</li>
                    <li>Männer etwas häufiger betroffen als Frauen</li>
                    <li>5-Jahres-Überleben ca. 8-10% (ungünstige Prognose)</li>
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
                                <td><strong>Lebensstil</strong></td>
                                <td>Rauchen (wichtigster vermeidbarer Risikofaktor), Adipositas, körperliche Inaktivität.</td>
                            </tr>
                            <tr>
                                <td><strong>Erkrankungen</strong></td>
                                <td>Chronische Pankreatitis, Diabetes mellitus (neu aufgetreten), Zysten (IPMN).</td>
                            </tr>
                            <tr>
                                <td><strong>Genetisch</strong></td>
                                <td>Hereditäres Pankreaskarzinom-Syndrom (BRCA1/2, PALB2, CDKN2A, STK11), Lynch-Syndrom, FAMMM-Syndrom.</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Mindestens 2 Verwandte ersten Grades mit Pankreaskarzinom.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "2. Diagnostik & Staging",
                html: `<h3>Primärdiagnostik</h3>
                <ul>
                    <li><strong>Abdomensonographie:</strong> Initial, aber sensitivitätslimitiert.</li>
                    <li><strong>Multiphasisches CT Abdomen:</strong> Standard für Diagnose und Staging.</li>
                    <li><strong>MRT Abdomen:</strong> Bei CT-unklaren Befunden oder Kontraindikationen.</li>
                </ul>
                <h3>Weitere Diagnostik</h3>
                <ul>
                    <li><strong>Endosonographie (EUS):</strong> Feinnadelpunktion zur histologischen Sicherung.</li>
                    <li><strong>ERCP:</strong> Bei Ikterus für Stentimplantation und Zytologie.</li>
                    <li><strong>CT Thorax:</strong> Metastasen-Ausschluss.</li>
                    <li><strong>Laparoskopie:</strong> Bei resektablen Tumoren zum Ausschluss okkulter Peritonealkarzinose.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li><strong>CA 19-9:</strong> Wichtigster Tumormarker (nicht spezifisch, für Verlaufskontrolle).</li>
                    <li><strong>CEA:</strong> Ergänzend.</li>
                </ul>
                <h3>Molekulare Diagnostik</h3>
                <ul>
                    <li><strong>Keimbahntestung:</strong> Bei positiver Familienanamnese oder jungem Alter.</li>
                    <li><strong>Somatische Mutationen:</strong> KRAS, BRCA1/2 für zielgerichtete Therapien.</li>
                </ul>`
            },
            {
                title: "3. Therapie",
                html: `<h3>Chirurgische Therapie</h3>
                <ul>
                    <li><strong>Kephalische Duodenopankreatektomie (Kausch-Whipple):</strong> Standard bei Kopfprozess.</li>
                    <li><strong>Pankreaslinksresektion:</strong> Bei Tumoren im Korpus/Schwanzbereich.</li>
                    <li><strong>Totalpankreatektomie:</strong> Bei ausgedehnten Befunden.</li>
                    <li><strong>Venenresektion:</strong> Bei Gefäßinfiltration möglich.</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Standard:</strong> FOLFIRINOX (5-FU, Folinsäure, Irinotecan, Oxaliplatin) bei gutem Allgemeinzustand.</li>
                    <li><strong>Alternative:</strong> Gemcitabin + Capecitabin.</li>
                    <li><strong>Bestrahlung:</strong> Keine Routine, ggf. bei R1-Situation.</li>
                </ul>
                <h3>Neoadjuvante Therapie</h3>
                <ul>
                    <li><strong>Borderline resektabel:</strong> FOLFIRINOX oder Gemcitabin/Nab-Paclitaxel gefolgt von Resektion.</li>
                    <li><strong>Lokal fortgeschritten:</strong> Systemtherapie mit Reevaluation der Resektabilität.</li>
                </ul>
                <h3>Palliative Systemtherapie</h3>
                <ul>
                    <li><strong>Erstlinie (ECOG 0-1):</strong> FOLFIRINOX oder Gemcitabin + Nab-Paclitaxel.</li>
                    <li><strong>Erstlinie (ECOG 2):</strong> Gemcitabin oder 5-FU-basiert.</li>
                    <li><strong>Zweitlinie:</strong> Nach Versagen FOLFOX oder 5-FU/Folinsäure.</li>
                    <li><strong>Bei BRCA-Mutation:</strong> Olaparib (Erhaltung nach Chemotherapie).</li>
                </ul>
                <h3>Supportive Maßnahmen</h3>
                <ul>
                    <li><strong>Biliäre Drainage:</strong> Bei Ikterus (endoskopisch oder perkutan).</li>
                    <li><strong>Duodenalstent:</strong> Bei Magenausgangsstenose.</li>
                    <li><strong>Pankreasenzymsubstitution:</strong> Bei exokriner Insuffizienz.</li>
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
                                <td>Anamnese, körperliche Untersuchung, Labor (CA 19-9), CT</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, körperliche Untersuchung, Labor (CA 19-9), CT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Diabetesscreening und -einstellung.</li>
                    <li>Ernährungsberatung und Pankreasenzymsubstitution.</li>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Frühzeitige Integration der Palliativmedizin.</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Exokrines Pankreaskarzinom. AWMF-Registernummer: 032-010OL. Leitlinienprogramm Onkologie.</p>"
    });
})();