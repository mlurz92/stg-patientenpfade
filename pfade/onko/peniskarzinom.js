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
                    <li>In Deutschland ca. 950 Neuerkrankungen/Jahr</li>
                    <li>Relatives 5-Jahres-Überleben: ca. 71%</li>
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
                                <td>HPV-Infektion (v.a. HPV 16, 18) - notwendige Bedingung.</td>
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
                title: "Bildgebende Diagnostik",
                html: `<h3>Primärtumor</h3>
                <ul>
                    <li><strong>Klinische Untersuchung:</strong> Inspektion und Palpation des Penis und der Leistenregion.</li>
                    <li><strong>Sonographie:</strong> Beurteilung des Primärtumors und der Lymphknoten.</li>
                    <li><strong>MRT Penis:</strong> Bei Verdacht auf tiefe Infiltration (T3/T4), insbesondere zur Beurteilung der Corpora cavernosa.</li>
                </ul>
                <h3>Lymphknoten-Staging</h3>
                <ul>
                    <li><strong>Ultraschall der Leisten:</strong> Beurteilung inguinaler Lymphknoten, erste Bildgebung bei Verdacht auf Lymphknotenmetastasen.</li>
                    <li><strong>CT Thorax/Abdomen/Becken:</strong> Bei Verdacht auf Fernmetastasen oder bei positiven inguinalen Lymphknoten.</li>
                    <li><strong>MRT:</strong> Zur genaueren Beurteilung bei adipösen Patienten oder bei unklarem CT-Befund.</li>
                    <li><strong>PET-CT:</strong> Bei fortgeschrittenem Stadium (cN+ oder T3/T4) zur Metastasensuche, hohe Sensitivität (56-100%) und Spezifität (84-100%).</li>
                </ul>
                <h3>Fernmetastasen</h3>
                <ul>
                    <li><strong>CT Thorax/Abdomen/Becken:</strong> Standard zur Metastasensuche.</li>
                    <li><strong>PET-CT:</strong> Höchste Sensitivität für Fernmetastasen (Lunge, Leber, Knochen).</li>
                    <li><strong>Skelettszintigraphie:</strong> Bei Verdacht auf Knochenmetastasen.</li>
                </ul>
                <h3>Indikationen für Schnittbildgebung</h3>
                <ul>
                    <li>Schnittbildverfahren sollten nur bei T3/T4-Tumoren oder positivem Lymphknotenstatus eingesetzt werden.</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Standard-Labor</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Differenzierung von Anämie, Leukozytose.</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin.</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff.</li>
                    <li><strong>Elektrolyte:</strong> Natrium, Kalium.</li>
                </ul>
                <h3>Infektionsdiagnostik</h3>
                <ul>
                    <li><strong>HPV-Test:</strong> Optional, Bestimmung von HPV 16/18 kann prognostisch relevant sein.</li>
                    <li><strong>HIV-Serologie:</strong> Bei Risikopatienten.</li>
                </ul>
                <h3>Tumormarker</h3>
                <ul>
                    <li>Keine spezifischen Tumormarker für das Peniskarzinom etabliert.</li>
                    <li>CEA kann in Einzelfällen verwendet werden, ist aber nicht diagnostisch spezifisch.</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Inzisionsbiopsie:</strong> Entnahme von repräsentativem Tumorgewebe aus verschiedenen Tumorarealen.</li>
                    <li><strong>Exzisionsbiopsie:</strong> Vollständige Entfernung kleiner Läsionen.</li>
                    <li>Die Biopsie soll eine hinreichend große Gewebemenge aus repräsentativen Tumorarealen liefern.</li>
                </ul>
                <h3>WHO-Klassifikation der histologischen Subtypen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Subtypen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nicht-HPV-assoziiert</strong></td>
                                <td>Plattenepithelkarzinom (gewöhnlich), Pseudohyperplastisches Karzinom, Verruköses Karzinom, Papilläres Karzinom, Adenosquamöses Karzinom, Sarkomatoides Karzinom</td>
                            </tr>
                            <tr>
                                <td><strong>HPV-assoziiert</strong></td>
                                <td>Basaloides Karzinom, Warziges (kondylomatöses) Karzinom, Klarzelliges Karzinom, Lymphoepitheliom-ähnliches Karzinom</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Grading</h3>
                <ul>
                    <li><strong>G1:</strong> Gut differenziert</li>
                    <li><strong>G2:</strong> Mäßig differenziert</li>
                    <li><strong>G3:</strong> Schlecht differenziert / undifferenziert</li>
                </ul>
                <h3>Prognostische Faktoren (pathologischer Befund)</h3>
                <ul>
                    <li><strong>Anatomische Lokalisation:</strong> Glans, Vorhaut, Sulcus coronarius, Schaft.</li>
                    <li><strong>Infiltrationstiefe:</strong> Wichtiger prognostischer Faktor.</li>
                    <li><strong>Perineurale Invasion (PNI):</strong> Negativer Prognosefaktor.</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Erhöhtes Metastasierungsrisiko.</li>
                    <li><strong>Venöse Gefäßinvasion:</strong> Negativer Prognosefaktor.</li>
                    <li><strong>Wachstumsmuster an der Invasionsfront:</strong> Prognostische Relevanz.</li>
                </ul>
                <h3>Lymphknoten-Assessment (pathologisch)</h3>
                <ul>
                    <li>Zahl und Lokalisation der präparierten Lymphknoten.</li>
                    <li>Zahl der befallenen Lymphknoten.</li>
                    <li>Maximale Metastasengröße.</li>
                    <li>Kapselüberschreitung (extrakapsuläres Wachstum).</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>HPV-Status</h3>
                <ul>
                    <li><strong>HPV-Nachweis:</strong> Der pathologische Befundbericht soll eine Aussage enthalten, ob das Peniskarzinom mit einer HPV-Infektion assoziiert ist.</li>
                    <li><strong>Methoden:</strong> p16-Immunhistochemie als Surrogatmarker, PCR-basierte HPV-Typisierung.</li>
                    <li><strong>Prognose:</strong> HPV-positive Tumoren haben tendenziell eine bessere Prognose.</li>
                </ul>
                <h3>Molekularbiologische Marker</h3>
                <ul>
                    <li>Es existieren bislang <strong>keine molekularbiologischen Marker</strong>, die für die Routinediagnostik des Peniskarzinoms empfohlen werden können.</li>
                    <li>PD-L1-Expression wird untersucht, ist aber noch nicht routinemäßig etabliert.</li>
                    <li>Forschung zu NTRK-Fusionen und anderen Targets läuft.</li>
                </ul>
                <h3>Genexpressionstests</h3>
                <ul>
                    <li>Derzeit keine Genexpressionstests für das Peniskarzinom verfügbar.</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>TNM-Klassifikation (8. Auflage, 2017):</strong> Obligat nach histologischer Diagnosesicherung.</li>
                    <li><strong>Verfahren:</strong> Klinische Untersuchung, Endoskopie, bildgebende Verfahren.</li>
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
                                <td>Carcinoma in situ (penile intraepitheliale Neoplasie)</td>
                            </tr>
                            <tr>
                                <td><strong>Ta</strong></td>
                                <td>Nicht-invasives lokalisiertes Plattenepithelkarzinom</td>
                            </tr>
                            <tr>
                                <td><strong>T1</strong></td>
                                <td>Invasion der Lamina propria (Glans) / Dermis (Vorhaut) / Bindegewebe (Schaft)</td>
                            </tr>
                            <tr>
                                <td><strong>T1a</strong></td>
                                <td>Ohne lymphovaskuläre/perineurale Infiltration, nicht schlecht differenziert</td>
                            </tr>
                            <tr>
                                <td><strong>T1b</strong></td>
                                <td>Mit lymphovaskulärer/perineuraler Infiltration oder schlecht differenziert</td>
                            </tr>
                            <tr>
                                <td><strong>T2</strong></td>
                                <td>Invasion des Corpus spongiosum</td>
                            </tr>
                            <tr>
                                <td><strong>T3</strong></td>
                                <td>Invasion des Corpus cavernosum</td>
                            </tr>
                            <tr>
                                <td><strong>T4</strong></td>
                                <td>Invasion benachbarter Strukturen (Skrotum, Prostata, Schambein)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>N-Klassifikation (klinisch)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>N0</strong></td>
                                <td>Keine palpablen Leistenlymphknoten</td>
                            </tr>
                            <tr>
                                <td><strong>N1</strong></td>
                                <td>Ein palpabler unilateraler Leistenlymphknoten</td>
                            </tr>
                            <tr>
                                <td><strong>N2</strong></td>
                                <td>Multiple oder bilaterale palpable mobile Leistenlymphknoten</td>
                            </tr>
                            <tr>
                                <td><strong>N3</strong></td>
                                <td>Fixierte Leistenlymphknotenpakete oder pelvine Lymphadenopathie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Lymphknoten-Staging Strategie</h3>
                <ul>
                    <li><strong>cN0 (klinisch negativ):</strong>
                        <ul>
                            <li>pT1a: Klinische Überwachung möglich</li>
                            <li>pT1b und höher: Invasive Diagnostik erforderlich (Sentinel-Lymphknoten-Biopsie oder modifizierte Lymphadenektomie)</li>
                        </ul>
                    </li>
                    <li><strong>cN+ (klinisch positiv):</strong>
                        <ul>
                            <li>Operative Entfernung und histologische Sicherung</li>
                            <li>Bei Metastasierung: ipsilaterale radikale Lymphadenektomie</li>
                        </ul>
                    </li>
                </ul>
                <h3>Stadium-Gruppen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>TNM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>0</td><td>Tis N0 M0</td></tr>
                            <tr><td>I</td><td>T1a N0 M0</td></tr>
                            <tr><td>IIA</td><td>T1b, T2 N0 M0</td></tr>
                            <tr><td>IIB</td><td>T3 N0 M0</td></tr>
                            <tr><td>IIIA</td><td>T1-3 N1 M0</td></tr>
                            <tr><td>IIIB</td><td>T1-3 N2 M0</td></tr>
                            <tr><td>IV</td><td>T4 jedes N M0 / jedes T N3 M0 / jedes T jedes N M1</td></tr>
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
                    <p>Das Lymphknoten-Staging ist der wichtigste Prognosefaktor und sollte frühzeitig erfolgen.</p>
                </div>
                <ul>
                    <li><strong>cN0 (klinisch negativ):</strong>
                        <ul>
                            <li>Low-risk (pTa, pT1a G1): Surveillance möglich</li>
                            <li>High-risk (≥pT1b): Modifizierte inguinale Lymphadenektomie oder Sentinel-Biopsie</li>
                        </ul>
                    </li>
                    <li><strong>cN+ (palpable Lymphknoten):</strong> Bilaterale inguinale Lymphadenektomie.</li>
                    <li><strong>Pelvine Lymphknoten:</strong> Bei inguinalem Befall (≥2 LK oder kapselüberschreitend).</li>
                </ul>
                <h3>Adjuvante Therapie</h3>
                <ul>
                    <li><strong>Radiatio:</strong> Bei pN+ nach Lymphadenektomie (inguinal/pelvin), Option bei hohem Rezidivrisiko.</li>
                    <li><strong>Chemotherapie:</strong> Adjuvant bei pN2/pN3 (Cisplatin/Paclitaxel/5-FU).</li>
                </ul>
                <h3>Neoadjuvante Therapie</h3>
                <ul>
                    <li>Bei fixierten inguinalen Lymphknoten (cN3): Neoadjuvante Chemotherapie (TIP: Paclitaxel, Ifosfamid, Cisplatin).</li>
                </ul>
                <h3>Palliative Therapie</h3>
                <ul>
                    <li><strong>Chemotherapie:</strong> Cisplatin-basiert (TIP: Paclitaxel, Ifosfamid, Cisplatin oder Cisplatin/5-FU).</li>
                    <li><strong>Radiotherapie:</strong> Palliative Bestrahlung bei Tumorulzera oder Metastasen.</li>
                    <li><strong>Best supportive care:</strong> Schmerztherapie, Wundmanagement.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Strukturierte Nachsorge - Primärtumor</h3>
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
                                <td>Klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Klinische Untersuchung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Strukturierte Nachsorge - Lymphknoten</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Jahr 1-2</th>
                                <th>Jahr 3-5</th>
                                <th>Untersuchungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>pNx (nicht untersucht)</td>
                                <td>Alle 3 Monate</td>
                                <td>Alle 6 Monate</td>
                                <td>Klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>pN0 (negativ)</td>
                                <td>Alle 3 Monate</td>
                                <td>Jährlich</td>
                                <td>Klinische Untersuchung</td>
                            </tr>
                            <tr>
                                <td>pN1-3 (positiv)</td>
                                <td>Alle 3 Monate</td>
                                <td>Alle 6 Monate</td>
                                <td>Klinische Untersuchung, optional Sonographie/CT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Bildgebung bei Symptomen (CT, MRT).</li>
                    <li>Psychoonkologische Betreuung (Körperbild, Sexualität).</li>
                    <li>Rekonstruktive Verfahren bei Bedarf.</li>
                    <li>Selbstuntersuchung zur Früherkennung von Rezidiven.</li>
                </ul>`
            }
        ],
        sources: `<p>S3-Leitlinie Peniskarzinom. AWMF-Registernummer: 043-042OL. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF). Version 1.0, August 2020.</p>`
    });
})();