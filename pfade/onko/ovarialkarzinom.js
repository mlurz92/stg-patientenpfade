(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "ovarialkarzinom",
        module: "onko",
        title: "Ovarialkarzinom",
        name: "Ovarialkarzinom",
        category: "onko-gyn",
        stand: "01/26", // Version 6.1, Januar 2026
        sections: [
            {
                title: "Epidemiologie, Früherkennung und Risikofaktoren",
                html: `<h3>Epidemiologie</h3>
                <ul>
                    <li>Fünftthäufigste Krebserkrankung bei Frauen in Deutschland</li>
                    <li>Höchste Sterblichkeit unter den gynäkologischen Malignomen (ca. 6.000 Todesfälle/Jahr)</li>
                    <li>Inzidenz steigt mit dem Alter, Gipfel um 65-70 Jahre</li>
                    <li>5-Jahres-Überleben ca. 45% (ungünstige Prognose aufgrund spätem Diagnosezeitpunkt)</li>
                    <li>Ca. 70% der Patientinnen werden in fortgeschrittenen Stadien diagnostiziert</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Hochgradiges seröses Karzinom:</strong> Ca. 70%, häufig BRCA-assoziiert, aggressiver Verlauf</li>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 10-15%, häufig mit endometrialer Karzinomassoziation</li>
                    <li><strong>Klarzelliges Karzinom:</strong> Ca. 5-10%, schlechte Prognose, assoziiert mit Lynch-Syndrom</li>
                    <li><strong>Muzinöses Karzinom:</strong> Ca. 3-5%, langsamer wachsend</li>
                    <li><strong>Niedriggradiges seröses Karzinom (LGSOC):</strong> Selten (ca. 5%), indolenter Verlauf</li>
                    <li><strong>Borderlinetumoren (BOT):</strong> Nicht-invasive Tumoren mit günstiger Prognose</li>
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
                                <td><strong>Genetisch</strong></td>
                                <td>BRCA1/2-Mutation (ca. 15% der Fälle), Lynch-Syndrom (MSI-H), andere HRR-Gen-Mutationen</td>
                            </tr>
                            <tr>
                                <td><strong>Familiär</strong></td>
                                <td>Familiäre Häufung ohne bekannte Mutation, positive Familienanamnese</td>
                            </tr>
                            <tr>
                                <td><strong>Hormonell</strong></td>
                                <td>Nulliparität, späte Menopause (>55 Jahre), frühe Menarche (<12 Jahre), postmenopausale Hormontherapie</td>
                            </tr>
                            <tr>
                                <td><strong>Protektiv</strong></td>
                                <td>Ovulationshemmer (5 Jahre+), Schwangerschaften, Stillzeit, Tubenligatur, Bilaterale Salpingo-Oophorektomie (BSO)</td>
                            </tr>
                            <tr>
                                <td><strong>Sonstige</strong></td>
                                <td>Adipositas, Endometriose, DES-Exposition (Diethylstilbestrol)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Früherkennung</h3>
                <ul>
                    <li>Keine evidenzbasierte Früherkennung für die Allgemeinbevölkerung</li>
                    <li>Bei hohem Risiko (BRCA-Mutation, stark positive Familienanamnese): Screening mit transvaginalem Ultraschall + CA-125</li>
                    <li>Präventive BSO bei BRCA-Mutationsträgern ab 40-45 Jahren (oder nach Familienplanung)</li>
                </ul>`
            },
            {
                title: "Bildgebende Diagnostik",
                html: `<h3>Primärdiagnostik - Klinische Untersuchung</h3>
                <ul>
                    <li><strong>Gynäkologische Untersuchung:</strong> Bimanuelle Palpation zur Beurteilung von Ovarien, Adnexen und Beckenorganen</li>
                    <li><strong>Palpation des Abdomens:</strong> Zur Erfassung von Aszites, Resistenzen oder Organomegalie</li>
                </ul>
                <h3>Ultraschall</h3>
                <ul>
                    <li><strong>Transvaginaler Ultraschall (TVS):</strong> Goldstandard für die Beurteilung von Ovarialtumoren</li>
                    <li>Beurteilung von: Tumorgröße, Morphologie (zystisch, solid, gemischt), Gefäßversorgung (Doppler), Wanddicke bei Zysten</li>
                    <li><strong>Abdomensonographie:</strong> Ergänzend zur Beurteilung von Leber, Milz, Nieren und Aszites</li>
                </ul>
                <h3>Computertomographie (CT)</h3>
                <ul>
                    <li><strong>CT Abdomen/Becken:</strong> Standard für die Ausbreitungsdiagnostik</li>
                    <li>Detektion von: Peritonealkarzinose, Lymphknotenbefall, Organmetastasen (Leber, Milz), Tumorausdehnung</li>
                    <li><strong>CT Thorax:</strong> Zum Ausschluss von Lungenmetastasen und mediastinalem Lymphknotenbefall</li>
                </ul>
                <h3>Magnetresonanztomographie (MRT)</h3>
                <ul>
                    <li><strong>MRT Becken:</strong> Alternative bei Kontraindikationen zur CT (z.B. Schwangerschaft, Kontrastmittelallergie)</li>
                    <li>Überlegene Weichteildifferenzierung, besonders nützlich bei komplexen Ovarialmassen</li>
                </ul>
                <h3>Positronenemissionstomographie (PET-CT)</h3>
                <ul>
                    <li><strong>PET-CT:</strong> Optional bei unklaren Befunden oder Verdacht auf extraperitoneale Metastasen</li>
                    <li>Kombination von Stoffwechselinformationen (FDG) mit anatomischer Bildgebung</li>
                </ul>`
            },
            {
                title: "Labordiagnostik",
                html: `<h3>Tumormarker</h3>
                <ul>
                    <li><strong>CA-125:</strong> Wichtigster Tumormarker für Ovarialkarzinom</li>
                    <li>Erhöht bei ca. 80% der high-grade serösen Karzinome</li>
                    <li>Sensitivität: 80-90%, Spezifität: 70-80% (bei postmenopausal)</li>
                    <li><strong>HE4 (Human Epididymis Protein 4):</strong> Ergänzender Marker</li>
                    <li>Höhere Spezifität als CA-125 bei Endometriose</li>
                    <li><strong>ROMA-Score (Risk of Ovarian Malignancy Algorithm):</strong> Kombination aus CA-125 und HE4</li>
                    <li>Besseres Sensitivität/Spezifität-Profil als einzelne Marker</li>
                    <li>Berechnung basierend auf Menopausenstatus und Markerwerten</li>
                </ul>
                <h3>Weitere Laborparameter</h3>
                <ul>
                    <li><strong>Blutbild:</strong> Anämie, Leukozytose</li>
                    <li><strong>Leberwerte:</strong> GOT, GPT, Gamma-GT, Bilirubin</li>
                    <li><strong>Nierenwerte:</strong> Kreatinin, Harnstoff</li>
                    <li><strong>LDH:</strong> Laktatdehydrogenase, Prognoseparameter</li>
                    <li><strong>Entzündungsparameter:</strong> CRP, BSG</li>
                </ul>`
            },
            {
                title: "Pathologie & Histologie",
                html: `<h3>Biopsie-Verfahren</h3>
                <ul>
                    <li><strong>Primärtumorbiopsie:</strong> In der Regel nicht vor Operation erforderlich</li>
                    <li><strong>Zielbiopsie:</strong> Nur bei suspektem Befund oder inoperabler Erkrankung</li>
                    <li><strong>Zytologie bei Aszites:</strong> Bei Vorliegen von Aszites kann zytologische Untersuchung erfolgen</li>
                    <li><strong>Peritonealkarzinose-Biopsie:</strong> CT-gesteuerte Biopsie bei Verdacht auf Peritonealkarzinose</li>
                </ul>
                <h3>Histologische Typen</h3>
                <ul>
                    <li><strong>Hochgradiges seröses Karzinom:</strong> Ca. 70%, häufig BRCA-assoziiert, aggressiver Verlauf</li>
                    <li><strong>Endometrioides Karzinom:</strong> Ca. 10-15%, häufig mit endometrialer Karzinomassoziation</li>
                    <li><strong>Klarzelliges Karzinom:</strong> Ca. 5-10%, schlechte Prognose, assoziiert mit Lynch-Syndrom</li>
                    <li><strong>Muzinöses Karzinom:</strong> Ca. 3-5%, langsamer wachsend</li>
                    <li><strong>Niedriggradiges seröses Karzinom (LGSOC):</strong> Selten (ca. 5%), indolenter Verlauf</li>
                    <li><strong>Borderlinetumoren (BOT):</strong> Nicht-invasive Tumoren mit günstiger Prognose</li>
                </ul>
                <h3>Histopathologische Begutachtung</h3>
                <ul>
                    <li><strong>Tumorart und -typ:</strong> Histologische Klassifikation nach WHO</li>
                    <li><strong>Differenzierungsgrad:</strong> G1 (gut), G2 (mäßig), G3 (schlecht) differenziert</li>
                    <li><strong>Tumorgröße:</strong> Maximaler Durchmesser in mm</li>
                    <li><strong>Lymphknotenstatus:</strong> Zahl befallener Lymphknoten / untersuchte Lymphknoten</li>
                    <li><strong>Lymphgefäßinvasion (LVI):</strong> Nachweis von Tumorzellen in Lymphgefäßen</li>
                    <li><strong>Resektionsränder:</strong> R0 (mikroskopisch tumorfrei), R1 (mikroskopisch Tumorzellen), R2 (makroskopisch Tumor)</li>
                </ul>`
            },
            {
                title: "Molekulare Diagnostik",
                html: `<h3>BRCA-Testung</h3>
                <ul>
                    <li><strong>BRCA1/2-Testung:</strong> Empfohlen bei allen high-grade serösen Karzinomen</li>
                    <li>Testung auf Keimbahn- und somatische Mutationen</li>
                    <li>Therapeutische Relevanz: PARP-Inhibitoren bei nachgewiesener Mutation</li>
                </ul>
                <h3>HRD-Status (Homologous Recombination Deficiency)</h3>
                <ul>
                    <li><strong>HRD-Score:</strong> Für die Selektion von PARP-Inhibitor-Therapie</li>
                    <li>HRD-positiv: Besseres Ansprechen auf platinbasierte Chemotherapie und PARP-Inhibitoren</li>
                </ul>
                <h3>MSI-Status / MMR-Proteine</h3>
                <ul>
                    <li><strong>MSI-Status:</strong> Bei Verdacht auf Lynch-Syndrom oder klarzelligem Karzinom</li>
                    <li>Immunhistochemie für MLH1, PMS2, MSH2, MSH6</li>
                    <li>PCR-Analyse zur Bestätigung bei Verlust in der IHC</li>
                </ul>
                <h3>HRR-Gen-Panel</h3>
                <ul>
                    <li><strong>HRR-Gen-Panel:</strong> Optional für die Identifikation weiterer HRD-assoziierter Mutationen</li>
                    <li>Gene: RAD51C, RAD51D, BRIP1, PALB2, ATM, CHEK2</li>
                </ul>`
            },
            {
                title: "Staging",
                html: `<h3>Klinisches Staging</h3>
                <ul>
                    <li><strong>Anamnese und körperliche Untersuchung:</strong> Erfassung von Symptomen, Gewichtsverlust, Leistungsminderung</li>
                    <li><strong>Gynäkologische Untersuchung:</strong> Bimanuelle Palpation, Beurteilung von Adnexen und Beckenorganen</li>
                    <li><strong>Aszitesbeurteilung:</strong> Klinisch und sonographisch</li>
                </ul>
                <h3>Bildgebendes Staging</h3>
                <ul>
                    <li><strong>CT Abdomen/Becken:</strong> Standard für die Ausbreitungsdiagnostik</li>
                    <li><strong>CT Thorax:</strong> Metastasen-Ausschluss</li>
                    <li><strong>MRT Becken:</strong> Alternative bei Kontraindikationen zur CT</li>
                    <li><strong>PET-CT:</strong> Optional bei Verdacht auf extraperitoneale Metastasen</li>
                </ul>
                <h3>FIGO-Stadieneinteilung (2018)</h3>
                <h4>Stadium I - Tumor begrenzt auf Ovarien oder Eileiter</h4>
                <ul>
                    <li>IA: Tumor auf ein Ovarium/Eileiter begrenzt, Kapsel intakt</li>
                    <li>IB: Tumor auf beide Ovarien/Eileiter begrenzt, Kapseln intakt</li>
                    <li>IC: Tumor auf ein oder beide Ovarien/Eileiter mit Kapselruptur oder Tumor an Ovarialoberfläche</li>
                </ul>
                <h4>Stadium II - Tumor mit Ausbreitung auf Beckenorgane</h4>
                <ul>
                    <li>IIA: Ausbreitung auf Uterus und/oder Eileiter</li>
                    <li>IIB: Ausbreitung auf andere Beckenorgane</li>
                </ul>
                <h4>Stadium III - Tumor mit Peritonealkarzinose</h4>
                <ul>
                    <li>IIIA: Mikroskopische Peritonealkarzinose</li>
                    <li>IIIB: Makroskopische Peritonealkarzinose ≤2 cm</li>
                    <li>IIIC: Peritonealkarzinose >2 cm und/oder regionäre Lymphknotenmetastasen</li>
                </ul>
                <h4>Stadium IV - Distante Metastasen</h4>
                <ul>
                    <li>IVA: Pleuraerguss mit positiver Zytologie</li>
                    <li>IVB: Parenchymatöse Leber- oder Lungenmetastasen</li>
                </ul>
                <h3>Metastasenlokalisation</h3>
                <ul>
                    <li><strong>Peritoneum:</strong> Häufigste Lokalisation bei fortgeschrittener Erkrankung</li>
                    <li><strong>Lymphknoten:</strong> Pelvine und paraaortale Lymphknoten</li>
                    <li><strong>Leber:</strong> Leberparenchymmetastasen</li>
                    <li><strong>Lunge:</strong> Lungenmetastasen</li>
                    <li><strong>Gehirn:</strong> Selten</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Chirurgische Therapie (Frühstadium, FIGO I-II)</h3>
                <ul>
                    <li><strong>Standardoperation:</strong> Totale Abdominalhysterektomie (TAH) + Bilaterale Salpingo-Oophorektomie (BSO) + Omentektomie + Peritonealbiopsien + Lymphadenektomie (Pelvis + Paraaortal)</li>
                    <li><strong>Fertilitätserhalt:</strong> Bei jungen Patientinnen mit FIGO IA (einseitige Adnektomie + Omentektomie + Staging) – nur bei low-grade oder Borderlinetumoren</li>
                    <li><strong>Re-Staging:</strong> Bei inkomplett operiertem Frühstadium (z. B. nur Adnektomie ohne Staging)</li>
                </ul>
                <h3>Chirurgische Therapie (Fortgeschrittenes Stadium, FIGO III-IV)</h3>
                <ul>
                    <li><strong>Primär Debulking Operation (PDS):</strong> Ziel: Komplette Resektion (R0) – nur in spezialisierten Zentren</li>
                    <li><strong>Neoadjuvante Chemotherapie (NACT):</strong> Bei primär inoperabler Erkrankung (3-6 Zyklen) gefolgt von Intervalldebulking</li>
                    <li><strong>Peritonektomie:</strong> Bei ausgedehnter Peritonealkarzinose (z. B. Diaphragmen-Peritonektomie)</li>
                    <li><strong>Lymphonodektomie:</strong> Bei klinisch oder radiologisch suspektem Lymphknotenbefall</li>
                </ul>
                <h3>Systemtherapie - Adjuvant</h3>
                <ul>
                    <li><strong>Standard:</strong> Carboplatin (AUC 5-6) + Paclitaxel (175 mg/m²) alle 3 Wochen, 6 Zyklen</li>
                    <li><strong>Addition von Bevacizumab:</strong> Bei hohem Risiko (FIGO III-IV, Residualtumour >1 cm) – 15 mg/kg alle 3 Wochen, 12 Zyklen</li>
                    <li><strong>PARP-Inhibitoren (Erhaltung):</strong> Olaparib (300 mg bid), Niraparib (200-300 mg qd) oder Rucaparib (600 mg bid) bei BRCA-Mutation oder HRD-positiv</li>
                </ul>
                <h3>Systemtherapie - First-Line (Fortgeschritten)</h3>
                <ul>
                    <li><strong>Platin-basierte Kombination:</strong> Carboplatin + Paclitaxel ± Bevacizumab</li>
                    <li><strong>Alternativen:</strong> Carboplatin + Gemcitabin, Carboplatin + Doxorubicin liposomal</li>
                    <li><strong>PARP-Inhibitoren (Erhaltung):</strong> Empfohlen bei BRCA-Mutation oder HRD-positiv nach platin-sensitiver Therapie</li>
                </ul>
                <h3>Systemtherapie - Rezidiv</h3>
                <ul>
                    <li><strong>Platin-sensitiv (>6 Monate):</strong> Platin-basierte Kombination + Bevacizumab + optional PARP-Inhibitor</li>
                    <li><strong>Platin-partiell sensitiv (4-6 Monate):</strong> Individuelle Therapieentscheidung (Platin vs. Nicht-Platin)</li>
                    <li><strong>Platin-resistent (<4 Monate):</strong> Nicht-Platin-basierte Monotherapie (Liposomal Doxorubicin, Topotecan, Gemcitabin, Paclitaxel wöchentlich, Vinorelbin)</li>
                    <li><strong>Targeted Therapien:</strong> PARP-Inhibitoren (BRCA-Mutation/HRD), Bevacizumab, Immuntherapien (PD-1/PD-L1-Inhibitoren)</li>
                </ul>
                <h3>Therapie des low-grade serösen Ovarialkarzinoms (LGSOC)</h3>
                <ul>
                    <li><strong>Chirurgie:</strong> Wie bei high-grade Karzinomen, aber weniger aggressive Debulking</li>
                    <li><strong>Chemotherapie:</strong> Weniger empfindlich auf Platin – alternative Therapien wie MEK-Inhibitoren (Trametinib)</li>
                    <li><strong>Hormontherapie:</strong> Tamoxifen, Aromatase-Inhibitoren (Letrozol) bei Rezidiv</li>
                </ul>`
            },
            {
                title: "Nachsorge, Rehabilitation und Psychoonkologie",
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
                                <td>Anamnese, klinische Untersuchung, CA-125, ggf. Bildgebung bei Verdacht</td>
                            </tr>
                            <tr>
                                <td>Jahr 3-5</td>
                                <td>Alle 6 Monate</td>
                                <td>Anamnese, klinische Untersuchung, CA-125</td>
                            </tr>
                            <tr>
                                <td>Ab Jahr 5</td>
                                <td>Jährlich</td>
                                <td>Anamnese, klinische Untersuchung, CA-125</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Bildgebung</h3>
                <ul>
                    <li>CT Thorax/Abdomen bei klinischem Verdacht auf Rezidiv (Anamnese, CA-125-Anstieg)</li>
                    <li>PET-CT bei unklaren Befunden oder Verdacht auf extraperitoneale Metastasen</li>
                    <li>Keine routinemäßige Bildgebung ohne Hinweise auf Rezidiv</li>
                </ul>
                <h3>Rehabilitation</h3>
                <ul>
                    <li>Physikalische Rehabilitation bei postoperativen Einschränkungen (z. B. Beweglichkeit, Lymphödeme)</li>
                    <li>Nutritionale Beratung bei Mangelernährung oder gastrointestinale Problemen</li>
                    <li>Berufliche Rehabilitation bei Arbeitsunfähigkeit</li>
                </ul>
                <h3>Psychoonkologie</h3>
                <ul>
                    <li>Frühzeitige Identifikation von psychischen Belastungen (Angst, Depression)</li>
                    <li>Psychotherapeutische Unterstützung (CBT, Unterstützungsgruppe)</li>
                    <li>Pharmakologische Therapie bei schweren psychischen Störungen</li>
                </ul>
                <h3>Supportive Therapie</h3>
                <ul>
                    <li>Aszites-Punktion bei symptomatischer Ascites</li>
                    <li>Schmerztherapie nach WHO-Stufenplan</li>
                    <li>Antiemetische Prophylaxe bei Chemotherapie</li>
                    <li>Thromboseprophylaxe bei stationärer Behandlung</li>
                </ul>`
            },
            {
                title: "Genetik, Prävention und Besondere Situationen",
                html: `<h3>Genetische Beratung</h3>
                <ul>
                    <li>Empfohlen bei:</li>
                    <li>– Patientinnen mit BRCA-Mutation</li>
                    <li>– Positive Familienanamnese für Ovarial- oder Mammakarzinom</li>
                    <li>– Klarzellem Ovarialkarzinom (Lynch-Syndrom-Verdacht)</li>
                    <li>– Patientinnen unter 50 Jahren</li>
                </ul>
                <h3>Präventive Maßnahmen</h3>
                <ul>
                    <li><strong>Ovulationshemmer:</strong> Reduktion des Risikos um ca. 50% bei langjähriger Einnahme (≥5 Jahre)</li>
                    <li><strong>Tubenligatur:</strong> Reduktion des Risikos um ca. 30%</li>
                    <li><strong>Präventive BSO:</strong> Bei BRCA-Mutationsträgern ab 40-45 Jahren (oder nach Familienplanung) – reduziert das Risiko um >90%</li>
                    <li><strong>Salpingektomie:</strong> Option bei Hysterektomie (reduziert das Risiko für High-Grade-Seröse Karzinome)</li>
                </ul>
                <h3>Berufskrankheit</h3>
                <ul>
                    <li>Ovarialkarzinom als meldepflichtige Berufskrankheit bei:</li>
                    <li>– Arbeit mit Asbest (BerufskrankheitNr. 4101)</li>
                    <li>– Arbeit im Pflanzenölbereich (z. B. Baumwollverarbeitung)</li>
                    <li>– Bestätigung durch das Berufsgenossenschaft</li>
                </ul>
                <h3>Familiale Risikomanagement</h3>
                <ul>
                    <li>Genetischer Testung von Familienmitgliedern bei bekanntem Mutationsträger</li>
                    <li>Individuelle Beratung zu Screening und Prävention</li>
                    <li>Psychologische Unterstützung bei familiärer Belastung</li>
                </ul>`
            }
        ],
        sources: "<p>S3-Leitlinie Diagnostik, Therapie und Nachsorge maligner Ovarialtumoren. Version 6.1 - Januar 2026. AWMF-Registernummer: 032-035OL. Leitlinienprogramm Onkologie.</p>"
    });
})();