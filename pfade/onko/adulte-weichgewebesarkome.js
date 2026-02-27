(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "adulte-weichgewebesarkome",
        module: "onko",
        title: "Adulte Weichgewebesarkome",
        name: "Adulte Weichgewebesarkome",
        category: "onko-sonst",
        stand: "06/22",
        sections: [
            {
                title: "Epidemiologie & Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Seltene Tumoren (ca. 1% aller Malignome)</li>
                    <li>Inzidenz: ca. 4-5/100.000 pro Jahr in Deutschland</li>
                    <li>Relative 5-Jahres-Überlebensraten: 64% (Männer), 49%</li>
                    <li>Absolute 5-Jahres-Überlebensraten: 55% (Männer), 44% (Frauen)</li>
                    <li>Männer : Frauen = 1,1 : 1</li>
                </ul>
                <h3>Histologische Subtypen (WHO 2020)</h3>
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
                                <td><strong>Gastrointestinale Stromatumoren (GIST)</strong></td>
                                <td>Ca. 22%</td>
                                <td>Häufigster mesenchimaler Tumor des GI-Trakts</td>
                            </tr>
                            <tr>
                                <td><strong>Sarkome, nicht weiter spezifiziert</strong></td>
                                <td>Ca. 17%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Leiomyosarkome</strong></td>
                                <td>Ca. 11,5%</td>
                                <td>Glattmuskulärer Ursprung</td>
                            </tr>
                            <tr>
                                <td><strong>Liposarkome</strong></td>
                                <td>Ca. 10%</td>
                                <td>Untertypen: well-diff., dediff., myxoid, pleomorph</td>
                            </tr>
                            <tr>
                                <td><strong>Angiosarkome</strong></td>
                                <td>Ca. 6,5%</td>
                                <td>Gefäßursprung, nach Bestrahlung möglich</td>
                            </tr>
                            <tr>
                                <td><strong>Synovialsarkome</strong></td>
                                <td>Ca. 2%</td>
                                <td>t(X;18), häufig bei jungen Erwachsenen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Risikofaktoren</h3>
                <ul>
                    <li><strong>Bestrahlung:</strong> Sekundäres Sarkom nach Radiotherapie (nach 10-20 Jahren).</li>
                    <li><strong>Genetische Syndrome:</strong> Li-Fraumeni (TP53), Neurofibromatose Typ 1 (NF1), SDH-Defizienz.</li>
                    <li><strong>Lymphödem:</strong> Risiko für Angiosarkom (Stewart-Treves-Syndrom).</li>
                    <li><strong>Chemikalien:</strong> Vinylchlorid, Arsen (Angiosarkom der Leber).</li>
                    <li><strong>Infektionen:</strong> EBV bei Immunschwäche.</li>
                </ul>
                <h3>Genetische Beratung</h3>
                <ul>
                    <li>Li-Fraumeni-Syndrom: Diagnose vor dem 46. LJ + Li-Fraumeni-Tumor bei Verwandten</li>
                    <li>SDH-Mutationen: Bei Wildtyp-GIST ohne KIT/PDGFRA-Mutation</li>
                    <li>NF1: Bei MPNST oder plexiformen Neurofibromen</li>
                </ul>`
            },
            {
                title: "Diagnostik & Staging",
                html: `<h3>Diagnostische Standards</h3>
                <ul>
                    <li>Diagnostik und Therapie soll in/zusammen mit einem zertifizierten Sarkomzentrum erfolgen.</li>
                    <li>Prätherapeutische Vorstellung im interdisziplinären Tumorboard (Chirurgie, Onkologie, Pathologie, Radiologie, Radioonkologie).</li>
                </ul>
                <h3>Bildgebung</h3>
                <ul>
                    <li><strong>MRT:</strong> Bildgebung der Wahl für Extremitätensarkome.</li>
                    <li><strong>CT:</strong> Für retroperitoneale, thorakale Sarkome und Staging.</li>
                    <li><strong>Biopsie:</strong> Stanzbiopsie (nicht Exzision!) vor Therapieplanung.</li>
                    <li>Mindestens 16G Stanzen in Koaxialtechnik.</li>
                    <li>Biopsiezugang so wählen, dass er mit dem Resektat entfernt werden kann.</li>
                </ul>
                <h3>Grading (FNCLCC)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Differenzierung</th>
                                <th>Mitosen/10 HPF</th>
                                <th>Nekrosen</th>
                                <th>Gesamtscore</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>G1</strong></td>
                                <td>Gut differenziert</td>
                                <td>0-9</td>
                                <td><50%</td>
                                <td>2-3</td>
                            </tr>
                            <tr>
                                <td><strong>G2</strong></td>
                                <td>Mäßig differenziert</td>
                                <td>10-19</td>
                                <td><50%</td>
                                <td>4-5</td>
                            </tr>
                            <tr>
                                <td><strong>G3</strong></td>
                                <td>Schlecht differenziert</td>
                                <td>&ge;20</td>
                                <td>&ge;50%</td>
                                <td>6-8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Molekularpathologie</h3>
                <ul>
                    <li>Referenzpathologische Zweitmeinung bei unsicherer Diagnose.</li>
                    <li>NGS-Panel für Fusionen bei nicht eindeutiger Zuordnung.</li>
                    <li>Spezifische Nachweise: MDM2/CDK4 (Liposarkom), STAT6 (SFT), SS18-SSX (Synovialsarkom), etc.</li>
                </ul>
                <h3>TNM-Staging (AJCC 8. Auflage)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Stadium</th>
                                <th>T</th>
                                <th>N</th>
                                <th>M</th>
                                <th>Grading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>IA</strong></td>
                                <td>T1 (&le;5 cm)</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G1, GX</td>
                            </tr>
                            <tr>
                                <td><strong>IB</strong></td>
                                <td>T2 (>5 cm)</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G1, GX</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>T1-T2</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G2-G3</td>
                            </tr>
                            <tr>
                                <td><strong>IIIA</strong></td>
                                <td>T2</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G2-G3</td>
                            </tr>
                            <tr>
                                <td><strong>IIIB</strong></td>
                                <td>T3-T4</td>
                                <td>N0</td>
                                <td>M0</td>
                                <td>G2-G3</td>
                            </tr>
                            <tr>
                                <td><strong>IIIC</strong></td>
                                <td>jedes T</td>
                                <td>N1</td>
                                <td>M0</td>
                                <td>jedes G</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>jedes T</td>
                                <td>jedes N</td>
                                <td>M1</td>
                                <td>jedes G</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie des lokalisierten Sarkoms",
                html: `<h3>Operative Therapie</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Weite Resektion (R0) mit tumorfreien Resektionsrändern.</li>
                    <li><strong>Extremitätenerhalt:</strong> Primäres Ziel bei Extremitätensarkomen.</li>
                    <li>Resektion des Biopsiezugangs en-bloc mit dem Tumor.</li>
                    <li>Nach R1-Resektion: Vorstellung im Sarkomzentrum zur Prüfung einer Nachresektion.</li>
                </ul>
                <h3>Strahlentherapie</h3>
                <ul>
                    <li><strong>G1-Tumoren, R0:</strong> Keine postoperative Strahlentherapie erforderlich.</li>
                    <li><strong>G2/G3-Tumoren:</strong> Prä- oder postoperative Strahlentherapie soll erfolgen.</li>
                    <li><strong>Präoperativ:</strong> 50 Gy/25 Fraktionen.</li>
                    <li><strong>Postoperativ:</strong> 60-66 Gy nach R0/R1-Resektion.</li>
                    <li>IMRT/VMAT bevorzugt einsetzen.</li>
                </ul>
                <h3>Chemotherapie</h3>
                <ul>
                    <li><strong>Neoadjuvant:</strong> Bei Tumoren >5 cm, tiefsitzend, G2/3 mit chemosensiblem Subtyp möglich.</li>
                    <li><strong>Adjuvant:</strong> Gleiche Kriterien wie neoadjuvant.</li>
                    <li><strong>Schemata:</strong> Anthrazyklin-basierte Kombinationstherapie (Doxorubicin ± Ifosfamid).</li>
                </ul>
                <h3>Retroperitoneale Sarkome</h3>
                <ul>
                    <li>En-bloc-Resektion von Nachbarorganen auch ohne sicheren Infiltrationsnachweis.</li>
                    <li>Keine Re-Resektion bei R1-Resektion.</li>
                    <li>Multiviszerale Resektion erfordert präoperative Nierenfunktionsclearance.</li>
                </ul>
                <h3>Uterine Sarkome</h3>
                <ul>
                    <li>Hysterektomie ohne Morcellement bei Leiomyosarkom und ESS.</li>
                    <li>Keine systematische Lymphadenektomie bei unauffälligen Lymphknoten.</li>
                </ul>
                <h3>Besondere Therapieoptionen</h3>
                <ul>
                    <li><strong>Isolierte Extremitätenperfusion (ILP):</strong> Bei lokal fortgeschrittenen Tumoren zur Extremitätenerhaltung.</li>
                    <li><strong>Regionale Tiefenhyperthermie:</strong> In Kombination mit neoadjuvanter Chemotherapie bei Hochrisiko-Sarkomen.</li>
                </ul>`
            },
            {
                title: "Therapie des metastasierten Sarkoms",
                html: `<h3>Systemtherapie - Erstlinie</h3>
                <ul>
                    <li><strong>Standard:</strong> Doxorubicin-Monotherapie oder Anthrazyklin-haltige Kombination.</li>
                    <li><strong>Kombinationstherapie:</strong> Bei hohem Behandlungsdruck oder symptomatischer Erkrankung.</li>
                    <li><strong>Doxorubicin + Dacarbazin:</strong> Kann bei Leiomyosarkom/Liposarkom eingesetzt werden.</li>
                </ul>
                <h3>Systemtherapie - Zweitlinie und Folgetherapie</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Substanz</th>
                                <th>Indikation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Pazopanib</strong></td>
                                <td>Nicht-adipozytäre Sarkome nach Anthrazyklin (nicht beim Liposarkom!)</td>
                            </tr>
                            <tr>
                                <td><strong>Trabectedin</strong></td>
                                <td>Weichgewebesarkome nach Anthrazyklin ± Ifosfamid</td>
                            </tr>
                            <tr>
                                <td><strong>Eribulin</strong></td>
                                <td>Nur beim Liposarkom nach Anthrazyklin</td>
                            </tr>
                            <tr>
                                <td><strong>Gemcitabin ± Docetaxel</strong></td>
                                <td>Bei vorbehandelten Patienten</td>
                            </tr>
                            <tr>
                                <td><strong>Ifosfamid</strong></td>
                                <td>Bei Vorbehandlung</td>
                            </tr>
                            <tr>
                                <td><strong>Dacarbazin</strong></td>
                                <td>Bei Vorbehandlung</td>
                            </tr>
                            <tr>
                                <td><strong>Larotrectinib/Entrectinib</strong></td>
                                <td>Bei NTRK-Fusion</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Metastasenchirurgie</h3>
                <ul>
                    <li>Bei pulmonalen Metastasen: R0-Resektion möglich, Intervall >12 Monate, kein unresektables Lokalrezidiv.</li>
                    <li>Bei Lebermetastasen: R0-Resektion möglich, Intervall >24 Monate.</li>
                    <li>Multidisziplinäre Entscheidungsfindung erforderlich.</li>
                </ul>
                <h3>GIST - Spezifische Therapie</h3>
                <ul>
                    <li><strong>Adjuvant:</strong> Imatinib 3 Jahre bei intermediärem/hohem Risiko.</li>
                    <li><strong>Metastasiert:</strong> Imatinib kontinuierlich bis Progression.</li>
                    <li><strong>Zweitlinie:</strong> Sunitinib.</li>
                    <li><strong>Drittlinie:</strong> Regorafenib.</li>
                    <li><strong>Viertlinie:</strong> Ripretinib (seit 2022).</li>
                    <li><strong>Avapritinib:</strong> Bei PDGFRA D842V Mutation.</li>
                </ul>
                <h3>Supportive Therapie</h3>
                <ul>
                    <li><strong>Trabectedin:</strong> Dexamethason 20mg i.v. vor Gabe, Monitoring der Leberwerte.</li>
                    <li><strong>Ifosfamid:</strong> Methylenblau-Prophylaxe bei Enzephalopathie-Risiko.</li>
                </ul>`
            },
            {
                title: "Nachsorge",
                html: `<h3>Nachsorge - Low-grade Sarkome (G1)</h3>
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
                                <td>Alle 3-6 Monate</td>
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 6</td>
                                <td>Jährlich</td>
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Nachsorge - High-grade Sarkome (G2-G3)</h3>
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
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 6</td>
                                <td>Jährlich</td>
                                <td>körperliche Untersuchung, Tumorregion (MRT), Lunge (Low-dose CT)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Retroperitoneale Sarkome</h3>
                <ul>
                    <li>G2/G3: Alle 3 Monate in den ersten 2 Jahren.</li>
                    <li>G1 Liposarkome: Alle 6 Monate.</li>
                    <li>Bildgebung: CT Abdomen (bei Artefakten oder Kontraindikationen gegen MRT).</li>
                </ul>
                <h3>GIST-Nachsorge</h3>
                <ul>
                    <li>Risiko-adaptierte Nachsorge nach Resektion.</li>
                    <li>CT Thorax/Abdomen in risikobasierten Intervallen.</li>
                </ul>
                <h3>Weitere Maßnahmen</h3>
                <ul>
                    <li>Psychoonkologische Betreuung.</li>
                    <li>Physiotherapie nach Extremitätenresektion.</li>
                    <li>Anschlussrehabilitation (AHB/AR) nach Primärtherapie.</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Alle rehabilitationsfähigen Patienten sollten eine Anschlussrehabilitation erhalten.</li>
                    <li>Onkologische Rehabilitation mit orthopädischem Schwerpunkt bei Bedarf.</li>
                </ul>`
            },
            {
                title: "Spezifische Sarkomsubtypen",
                html: `<h3>GIST (Gastrointestinale Stromatumoren)</h3>
                <ul>
                    <li>ca. 90% der mesenchimalen GI-Tumoren.</li>
                    <li>CD117 (KIT), DOG1 positiv.</li>
                    <li>Mutationsanalyse: KIT (Exon 9, 11), PDGFRA (Exon 18) obligat.</li>
                    <li>Risikoklassifikation: Konturkarten nach Miettinen/Lasota.</li>
                    <li>Minimaler Sicherheitsabstand kann unter 1 cm betragen.</li>
                    <li>Keine Lymphadenektomie (außer bei SDH-defizienten GIST mit Lymphknotenbefall).</li>
                    <li>Tumorruptur vermeiden!</li>
                </ul>
                <h3>Solitäre Fibröse Tumoren (SFT)</h3>
                <ul>
                    <li>STAT6 nukleär positiv (diagnostisch).</li>
                    <li>NAB2-STAT6 Genfusion.</li>
                    <li>Selten chemosensibel.</li>
                    <li>Sunitinib, ggf. Temozolomid + Bevacizumab.</li>
                </ul>
                <h3>Angiosarkome</h3>
                <ul>
                    <li>Hohe Chemotherapie-Sensitivität (Anthrazykline, Taxane).</li>
                    <li>MYC-Überexpression bei strahleninduzierten Fällen.</li>
                    <li>Hohe Fernmetastasierungsrate.</li>
                    <li>Kombinierte Radiochemotherapie kann wirksam sein.</li>
                </ul>
                <h3>Alveoläres Weichgewebesarkom (ASPS)</h3>
                <ul>
                    <li>Tritt bei jungen Erwachsenen auf.</li>
                    <li>Cerebrale Metastasen häufig → MRT Schädel obligat.</li>
                    <li>Indolenter Verlauf auch metastasiert.</li>
                    <li>Konventionelle Chemotherapie weitgehend refraktär.</li>
                    <li>Axitinib + Pembrolizumab in Erprobung.</li>
                </ul>
                <h3>Epitheloide Sarkome</h3>
                <ul>
                    <li>INI1-Verlust in ca. 90%.</li>
                    <li>EZH2 als Onkotreiber.</li>
                    <li>Tazemetostat seit 2020 zugelassen (bei INI1-Verlust).</li>
                </ul>
                <h3>Inflammatorische myofibroblastische Tumoren (IMT)</h3>
                <ul>
                    <li>ALK-Genfusion in >50%.</li>
                    <li>Crizotinib bei ALK-positiven Tumoren wirksam.</li>
                    <li>Lokale Resektion oft kurativ.</li>
                </ul>
                <h3>Uterine Sarkome</h3>
                <ul>
                    <li>Leiomyosarkome, Low-/High-grade ESS, undifferenzierte Sarkome.</li>
                    <li>Karzinosarkome werden wie Endometriumkarzinome behandelt.</li>
                    <li>Morcellation vermeiden!</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Adulte Weichgewebesarkome. AWMF-Registernummer: 032/044OL. Version 1.1 - Juni 2022. Leitlinienprogramm Onkologie (Deutsche Krebsgesellschaft, Deutsche Krebshilfe, AWMF).</p>"
    });
})();
