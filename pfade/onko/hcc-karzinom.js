(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA =[];
    window.SOP_DATA.push({
        id: "hcc-karzinom",
        module: "onko",
        title: "Hepatozelluläres Karzinom (HCC)",
        name: "Hepatozelluläres Karzinom (HCC)",
        category: "onko",
        stand: "06/2025",
        sections:[
            {
                title: "1. Risikofaktoren & Prävention",
                html: `<h3>Primäre Prävention (Impfung)</h3>
                <p>Entsprechend den Empfehlungen der STIKO sollen gegen das Hepatitis-B-Virus geimpft werden:</p>
                <ul>
                    <li>Alle Säuglinge ab dem vollendeten 2. Lebensmonat.</li>
                    <li>Alle Neugeborenen HBsAg-positiver Mütter oder unbekanntem Status (innerhalb von 12 Stunden).</li>
                    <li>Alle noch nicht geimpften Kinder/Jugendlichen bis zum 17. Lebensjahr (möglichst vor der Pubertät).</li>
                    <li>Personen mit erhöhtem Hepatitis-B-Risiko (gemäß Indikationsliste).</li>
                </ul>
                <h3>Sekundäre & Tertiäre Prävention</h3>
                <ul>
                    <li><strong>Behandlung der Grunderkrankung:</strong> Konsequente Behandlung der chronischen Lebererkrankung (z.B. antivirale Therapie bei HBV/HCV), um eine Progression zum HCC zu verhindern. Auch nach kurativer HCC-Behandlung soll bei HCV eine DAAD-Behandlung angeboten werden.</li>
                    <li><strong>Lebensstilmaßnahmen:</strong> Patienten sollen <strong>keinen Alkohol</strong> trinken. Der Konsum von <strong>Kaffee</strong> sollte empfohlen werden.</li>
                    <li><strong>Metabolische Faktoren:</strong> Bei Patienten mit chronischer Lebererkrankung und Typ-2-Diabetes sollte Metformin geprüft werden, um das HCC-Risiko zu senken.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Nomenklatur-Update 2025:</strong> MASLD (Metabolic Dysfunction Associated Steatotic Liver Disease) ersetzt den Begriff NAFLD. Die NASH wurde zu MASH umbenannt.</p>
                </div>`
            },
            {
                title: "2. Früherkennung (Screening)",
                html: `<h3>Überwachungsmodalität</h3>
                <p>Im Rahmen der HCC-Früherkennung soll <strong>alle 6 Monate eine Ultraschalluntersuchung</strong> der Leber durchgeführt werden. Diese kann durch eine Bestimmung von <strong>AFP (Alpha-Fetoprotein)</strong> ergänzt werden.</p>
                <h3>Indikation zur Früherkennung (Risikogruppen)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikogruppe</th>
                                <th>Kriterium für Screening</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Leberzirrhose</strong></td>
                                <td>Stadium Child-Pugh A und B sowie alle Patienten, die zur Lebertransplantation gelistet sind.</td>
                            </tr>
                            <tr>
                                <td><strong>Chronische Hepatitis B</strong></td>
                                <td>Ab einem <strong>PAGE-B Score ≥ 10</strong>.</td>
                            </tr>
                            <tr>
                                <td><strong>Chronische Hepatitis C</strong></td>
                                <td>Bei fortgeschrittener Fibrose (auch nach SVR durch DAAD-Therapie).</td>
                            </tr>
                            <tr>
                                <td><strong>Nicht-virale Ursachen (MASLD, MASH, ALD)</strong></td>
                                <td>Die Teilnahme kann bei <strong>fortgeschrittener Leberfibrose</strong> (F3/F4) angeboten werden. Das Fibrosestadium sollte wiederholt erhoben werden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "3. Bildgebende Diagnostik & Algorithmus",
                html: `<h3>Bildgebung in der zirrhotischen Leber</h3>
                <ul>
                    <li><strong>Mittel der Wahl:</strong> Dynamisches Kontrastmittel-MRT.</li>
                    <li><strong>Typisches KM-Verhalten:</strong> Arterielle Hypervaskularisation und Auswaschen (Wash-out) in der portalvenösen oder spätvenösen Phase (auch im CEUS validiert).</li>
                </ul>
                <h3>Diagnostikalgorithmus nach Herdgröße</h3>
                <ul>
                    <li><strong>Unklare Leberherde < 1 cm:</strong> Kontrolle in 3-Monatsintervallen mittels bestgeeignetem KM-Schnittbildverfahren.</li>
                    <li><strong>Leberherde ≥ 1 cm (untypisches KM-Verhalten):</strong>
                        <ul>
                            <li>Bei kurativer Indikation: Zweite kontrastmittelverstärkte Bildgebung (CT oder CEUS) empfohlen.</li>
                            <li>Bei nicht-kurativem Ansatz und Indikation zur tumorgerichteten Therapie: <strong>Biopsie obligat.</strong></li>
                        </ul>
                    </li>
                </ul>
                <h3>Staging & Klassifikation</h3>
                <ul>
                    <li><strong>Systemisches Staging:</strong> Kontrastverstärktes CT von Thorax und Abdomen (bzw. natives CT-Thorax, falls MRT das Abdomen abdeckt).</li>
                    <li><strong>Stratifizierungssysteme:</strong> BCLC-System (beinhaltet Tumorlast, Leberfunktion, Leistungsstatus). Vor OP/LTx soll ergänzend die TNM-Klassifikation angewendet werden.</li>
                </ul>`
            },
            {
                title: "4. Histopathologie & Molekularpathologie",
                html: `<h3>Stellenwert der Biopsie (Wesentliche Neuerung 2025)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Klinische Situation</th>
                                <th>Empfehlung zur bioptischen Sicherung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Nicht-zirrhotische Leber</strong></td>
                                <td>Bioptische Sicherung soll als zentraler Bestandteil der Diagnose immer erfolgen.</td>
                            </tr>
                            <tr>
                                <td><strong>Zirrhotische Leber (kurativ)</strong></td>
                                <td>Biopsie sollte bei unklarem Kontrastmittelverhalten eingesetzt werden.</td>
                            </tr>
                            <tr>
                                <td><strong>Palliative Situation (Systemtherapie)</strong></td>
                                <td>Eine bioptische Sicherung <strong>sollte</strong> erfolgen (Aufwertung 2025 zur Ermöglichung molekularer Charakterisierung).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Tumortypisierung</h3>
                <ul>
                    <li>Typisierung nach aktueller WHO-Klassifikation.</li>
                    <li>Sichere Unterscheidung von Sonderformen erforderlich (fibrolamelläres HCC, kombiniertes HCC/CCA, intrahepatisches Cholangiokarzinom, Metastasen, benigne Tumoren).</li>
                    <li><strong>Prädiktive molekulare Analysen:</strong> Sind in der regulären Diagnostik noch nicht verpflichtend, können aber zur erweiterten Therapieplanung (insbesondere im molekularen Tumorboard) eingesetzt werden.</li>
                </ul>`
            },
            {
                title: "5. Therapiealgorithmus (BCLC)",
                html: `<p>Jeder Patient muss vor Therapiebeginn und bei Änderung der Therapiestrategie in einer <strong>interdisziplinären Tumorkonferenz</strong> vorgestellt werden.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>BCLC-Stadium</th>
                                <th>Status / Ausdehnung</th>
                                <th>Primäre Therapieoptionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>A (Früh)</strong></td>
                                <td>Singulär (jeder Größe) oder bis 3 Herde ≤ 3 cm<br>Erhaltene Leberfunktion, ECOG 0</td>
                                <td>Resektion, Ablation oder Lebertransplantation (LTX)</td>
                            </tr>
                            <tr>
                                <td><strong>B (Intermediär)</strong></td>
                                <td>Multinodulär (> 3 Herde oder > 3 cm)<br>Kein extrahepatischer Befall, ECOG 0</td>
                                <td>Transarterielle Chemoembolisation (TACE) oder TARE</td>
                            </tr>
                            <tr>
                                <td><strong>C (Fortgeschritten)</strong></td>
                                <td>Makrovaskuläre Invasion (Pfortader) oder Fernmetastasen<br>ECOG 1-2, erhaltene Leberfunktion</td>
                                <td>Systemtherapie</td>
                            </tr>
                            <tr>
                                <td><strong>D (Endstadium)</strong></td>
                                <td>Schlechte Leberfunktion (Child-Pugh C) oder ECOG 3-4</td>
                                <td>Best Supportive Care (Palliativmedizin)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-cave">
                    <p>Die Kombination von Systemtherapie mit lokoregionären Therapien im Stadium BCLC B kann aufgrund der aktuellen Datenlage derzeit <strong>nicht</strong> generell empfohlen werden.</p>
                </div>`
            },
            {
                title: "6. Operative Therapien & Lebertransplantation",
                html: `<h3>Leberresektion</h3>
                <ul>
                    <li><strong>Ohne Zirrhose:</strong> Soll erfolgen, wenn eine R0-Resektion möglich ist.</li>
                    <li><strong>Mit Zirrhose:</strong> Sollte bei singulärem HCC-Knoten und funktioneller Resektabilität (insbesondere Herde > 3 cm) erfolgen. Bei multiplen Knoten innerhalb der Mailand-Kriterien <em>kann</em> eine Resektion erfolgen.</li>
                    <li><strong>Minimalinvasiv:</strong> Kann erfolgen, besonders bevorzugt bei Patienten, die künftig für eine LTX infrage kommen.</li>
                </ul>
                <h3>Lebertransplantation (LTX) - Selektionskriterien</h3>
                <p>Extrahepatische Manifestationen oder makrovaskuläre Invasion stellen eine <strong>Kontraindikation</strong> dar. Bei einem AFP-Wert > 1000 ng/ml sollte keine LTX ohne neoadjuvantes Downstaging erfolgen.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Solitärer Knoten</th>
                                <th>Mehrere Knoten</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Mailand-Kriterien</strong></td>
                                <td>≤ 5 cm</td>
                                <td>Maximal 3 Herde, jeweils ≤ 3 cm</td>
                            </tr>
                            <tr>
                                <td><strong>matchMELD (BÄK)</strong></td>
                                <td>≥ 2 cm und ≤ 5 cm</td>
                                <td>2-3 Herde, jeweils ≥ 1 cm und ≤ 3 cm</td>
                            </tr>
                            <tr>
                                <td><strong>Up-to-7 Kriterien</strong></td>
                                <td>≤ 6 cm</td>
                                <td>Summe aus Durchmesser des größten Tumors (cm) + Anzahl der Knoten ≤ 7</td>
                            </tr>
                            <tr>
                                <td><strong>UCSF-Kriterien</strong></td>
                                <td>≤ 6,5 cm</td>
                                <td>Max. 3 Herde ≤ 4,5 cm UND addierter Maximaldurchmesser aller Herde ≤ 8 cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Bridging und Downstaging zur LTX</h3>
                <ul>
                    <li><strong>Bridging (Innerhalb Mailand):</strong> Soll erfolgen, sofern Leberfunktion zulässig. Optionen: Resektion, Ablation, TACE, TARE, SBRT.</li>
                    <li><strong>Downstaging (Außerhalb Mailand, innerhalb UCSF):</strong> Durch lokoregionäre Verfahren in die Mailand-Kriterien, um eine LTX zu ermöglichen.</li>
                </ul>`
            },
            {
                title: "7. Lokoregionäre & Interventionelle Verfahren",
                html: `<h3>Perkutane Ablation (RFA / MWA)</h3>
                <ul>
                    <li><strong>Herde ≤ 3 cm:</strong> Ablation und Resektion sind als <strong>äquivalente Verfahren</strong> anzusehen.</li>
                    <li><strong>Herde 3 - 5 cm:</strong> Vor einer Thermoablation sollte bei erhaltener Leberfunktion eine TACE (Chemoembolisation) erfolgen.</li>
                </ul>
                <h3>Transarterielle Chemoembolisation (TACE)</h3>
                <ul>
                    <li>Soll im intermediären Stadium (BCLC B) angeboten werden, sofern keine kurativen Optionen vorliegen und die Leberfunktion erhalten ist.</li>
                    <li>Konventionelle TACE und Drug-eluting-TACE (DEB-TACE) sind gleichwertig.</li>
                    <li><strong>Verlauf:</strong> Soll mehrfach durchgeführt werden, solange ein Ansprechen nachweisbar ist (mRECIST). Indikation ist zwingend <strong>nach 2 Zyklen im Tumorboard zu überprüfen</strong>.</li>
                </ul>
                <h3>Transarterielle Radioembolisation (TARE / SIRT)</h3>
                <ul>
                    <li>Kann anstelle einer TACE bei erhaltener Leberfunktion im intermediären Stadium nach Tumorboard-Beschluss eingesetzt werden.</li>
                    <li>Sollte anhand einer personalisierten Dosimetrie ("Partitionsmodel") erfolgen.</li>
                </ul>
                <h3>Stereotaxie (SBRT)</h3>
                <ul>
                    <li>Sollte geprüft werden, wenn andere lokale Therapieverfahren nicht oder nur mit Einschränkungen möglich sind, oder als Bridging zur LTX.</li>
                </ul>`
            },
            {
                title: "8. Systemtherapie",
                html: `<h3>Erstlinientherapie bei erhaltener Leberfunktion (Child-Pugh A, BCLC B/C)</h3>
                <p>Standard sind Immun-Kombinationstherapien:</p>
                <ul>
                    <li><strong>Atezolizumab + Bevacizumab</strong> (PD-L1 + VEGF Inhibitoren)</li>
                    <li><strong>Durvalumab + Tremelimumab</strong> (PD-L1 + CTLA-4 Inhibitoren)</li>
                </ul>
                <p>Bei Kontraindikationen für die Kombinationstherapien stehen folgende Alternativen zur Verfügung:</p>
                <ul>
                    <li><strong>Durvalumab als Monotherapie</strong> (Neu in S3-Leitlinie 2025 ergänzt).</li>
                    <li><strong>Tyrosinkinase-Inhibitoren (TKI):</strong> Lenvatinib oder Sorafenib.</li>
                </ul>
                <h3>Therapie bei eingeschränkter Leberfunktion (Child-Pugh B)</h3>
                <div class="callout callout-wichtig">
                    <p><strong>Neuerung 2025:</strong> Bei Patienten im Stadium Child-Pugh B (bis 8 Punkte) mit Fernmetastasen/irresektablem Befund und ECOG 0-1 kann nun neben <strong>Sorafenib</strong> auch <strong>Lenvatinib</strong> angeboten werden. In Einzelfällen ist auch eine Immuntherapie mit Anti-PD-1-Antikörpern vertretbar.</p>
                </div>
                <ul>
                    <li><strong>Child-Pugh C:</strong> Bei diesen Patienten sollte <strong>keine</strong> Systemtherapie mehr durchgeführt werden (nur BSC).</li>
                </ul>
                <h3>Zweitlinientherapie (Sequenztherapie)</h3>
                <ul>
                    <li><strong>Nach Sorafenib-Versagen:</strong> Regorafenib, Cabozantinib oder Ramucirumab (nur bei AFP ≥ 400 ng/ml zugelassen).</li>
                    <li><strong>Nach Immuntherapie-Versagen (Atezolizumab/Bevacizumab o.ä.):</strong> Umstellung auf einen zugelassenen TKI.</li>
                    <li><strong>Nach Lenvatinib-Versagen:</strong> Eine weitere tumorspezifische Therapie soll angeboten werden.</li>
                </ul>
                <div class="callout callout-cave">
                    <p>Sonderfälle: Bei einem Fibrolamellären Karzinom oder einem kombinierten HCC/CCA gibt es keine Phase-III-Evidenz; hier sollte zwingend eine molekulare Tumorboard-Vorstellung (ECOG 0-1) zur individuellen Therapieplanung erfolgen.</p>
                </div>`
            },
            {
                title: "9. Verlaufskontrolle, Nachsorge & Supportivtherapie",
                html: `<h3>Nachsorge (Kurative Therapie)</h3>
                <ul>
                    <li><strong>Nach Ablation/Resektion:</strong> Bildgebung (mehrphasisches CT/MRT) nach 4-12 Wochen, dann im 1. Jahr alle 3 Monate, im 2. Jahr alle 3-6 Monate.</li>
                    <li><strong>Nach LTX:</strong> Keine adjuvante Therapie außerhalb von Studien.</li>
                    <li>Nach Abschluss der Tumornachsorge (nach 5 Jahren) müssen die Patienten wegen der Grunderkrankung wieder in das 6-monatliche Ultraschall-Früherkennungsprogramm aufgenommen werden.</li>
                </ul>
                <h3>Verlaufskontrolle (Unter Systemtherapie / TACE)</h3>
                <ul>
                    <li>Schnittbildgebung (CT/MRT) alle 6-12 Wochen.</li>
                    <li>Remissionsbeurteilung nach standardisierten Kriterien: <strong>RECIST 1.1, mRECIST, EASL, LI-RADS TR oder iRECIST</strong> (bei Immuntherapie).</li>
                </ul>
                <h3>Supportiv- und Palliativtherapie</h3>
                <ul>
                    <li><strong>Ernährung:</strong> Erfassung und Behandlung von Mangelernährung ist essenziell für Lebensqualität und Therapietoleranz.</li>
                    <li><strong>Palliativversorgung:</strong> Soll bei nichtheilbarer Erkrankung (z.B. BCLC D) frühzeitig angeboten werden, unabhängig davon, ob eine tumorspezifische Therapie durchgeführt wird.</li>
                    <li><strong>Psychoonkologie:</strong> Patientenzentrierte Kommunikation und frühzeitige Einbindung psychoonkologischer Hilfen.</li>
                </ul>`
            }
        ],
        sources: "S3-Leitlinie Diagnostik und Therapie des Hepatozellulären Karzinoms und biliärer Karzinome. Kurzversion 5.2 - Juni 2025. AWMF-Registernummer: 032-053OL. Herausgeber: Leitlinienprogramm Onkologie (DKG, DKH, AWMF)."
    });
})();