(function() {
    'use strict';

    var APP_VERSION = '3.2.0';

    var CATS = {
        'zna': { name: 'Zentrale Notaufnahme', icon: 'fa-house-medical', mod: 'zna', imgIcon: 'img/Icons/ZNA/zna_alle_pfade.png' },
        'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_kardio.png' },
        'pulmo': { name: 'Pneumologie', icon: 'fa-lungs', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_pneumologie.png' },
        'gi': { name: 'Gastroenterologie', icon: 'fa-burger', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_gastroenterologie.png' },
        'neuro': { name: 'Neurologie', icon: 'fa-brain', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_neurologie.png' },
        'nephro': { name: 'Nephrologie', icon: 'fa-kidney', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_nephrologie.png' },
        'metab': { name: 'Metabolisch', icon: 'fa-flask', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_metabolisch.png' },
        'haem': { name: 'Hämatologie', icon: 'fa-pills', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_haematologie.png' },
        'infekt': { name: 'Infektiologie', icon: 'fa-virus', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_infektiologie.png' },
        'tox': { name: 'Toxikologie', icon: 'fa-skull-crossbones', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_toxikologie.png' },
        'leit': { name: 'Leitsymptom', icon: 'fa-stethoscope', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_leitsymptome.png' },
        'sonst': { name: 'Sonstige', icon: 'fa-ellipsis', mod: 'zna', parent: 'zna', imgIcon: 'img/Icons/ZNA/zna_alle_pfade.png' },
        'onko': { name: 'Onkologie', icon: 'fa-ribbon', mod: 'onko', imgIcon: 'img/Icons/Onko/onko_alle_pfade.png' },
        'onko-gi': { name: 'Gastrointestinale Tumoren', icon: 'fa-burger', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_gi_tumore.png' },
        'onko-uro': { name: 'Urologische Tumoren', icon: 'fa-bladder', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_urologisch.png' },
        'onko-gyn': { name: 'Gynäkologische Tumoren', icon: 'fa-venus-mars', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_gyn.png' },
        'onko-pulmo': { name: 'Pulmonale Tumoren', icon: 'fa-lungs', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_pulmonal.png' },
        'onko-hno': { name: 'Kopf-Hals-Tumoren', icon: 'fa-user-nurse', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_kopf-hals.png' },
        'onko-haem': { name: 'Hämatologische Neoplasien', icon: 'fa-dna', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_haematologisch.png' },
        'onko-sonst': { name: 'Sonstige Tumoren', icon: 'fa-disease', mod: 'onko', parent: 'onko', imgIcon: 'img/Icons/Onko/onko_sonstige.png' }
    };

    var CNM = {};
    (function() {
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            CNM[CATS[keys[i]].name.toLowerCase()] = keys[i];
        }
    })();

    var SIC = {
        'Definition': 'fa-book-medical',
        'Ursachen': 'fa-magnifying-glass-chart',
        'Symptome': 'fa-clipboard-check',
        'Diagnostik': 'fa-microscope',
        'Therapie': 'fa-prescription-bottle-medical',
        'Merke': 'fa-lightbulb',
        'Disposition': 'fa-right-to-bracket',
        'Komplikationen': 'fa-triangle-exclamation',
        'Quellen': 'fa-quote-right',
        '1. Früherkennung & Risikobewertung': 'fa-magnifying-glass-chart',
        '2. Initialdiagnostik & Staging': 'fa-microscope',
        '3. BCLC Therapie-Algorithmus': 'fa-diagram-project',
        '4. Operative & Lokoregionäre Verfahren': 'fa-scalpel',
        '5. Systemtherapie (Erst- & Zweitlinie)': 'fa-pills',
        '6. Verlaufskontrolle & Nachsorge': 'fa-calendar-check',
        '7. Rezidivdiagnostik & Therapie': 'fa-rotate-left',
        '1. Definition & Risikofaktoren': 'fa-folder-tree',
        '2. Diagnostik, Typisierung & Staging': 'fa-microscope',
        '3. Molekulare Diagnostik & Zielstrukturen': 'fa-dna',
        '4. Operative Verfahren & Biliäre Drainage': 'fa-scalpel',
        '5. Systemtherapie (Adjuvant & Palliativ)': 'fa-hand-holding-medical',
        '6. Verlaufskontrolle, Nachsorge & Supportivtherapie': 'fa-calendar-check',
        '1. Epidemiologie & Risikofaktoren': 'fa-chart-line',
        '2. Diagnostik & Prognose': 'fa-microscope',
        '3. Therapie: Nicht-metastasiert & Lokal': 'fa-hospital-user',
        '4. Therapie: Metastasiert (Systemtherapie)': 'fa-pills',
        '5. Spezielle Situationen (Metastasen, nccRCC)': 'fa-shapes',
        '6. Erbliche Tumoren': 'fa-users-line',
        '7. Rehabilitation & Nachsorge': 'fa-person-walking-arrow-right',
        'Epidemiologie & Risikofaktoren': 'fa-users',
        'Epidemiologie': 'fa-users',
        'Prävention & Vorsorge': 'fa-shield-virus',
        'Diagnostik & Staging': 'fa-microscope',
        'Pathologie': 'fa-dna',
        'Pathologische Klassifikation und Diagnostik': 'fa-dna',
        'Stadieneinteilung und Prognose': 'fa-chart-pie',
        'Therapie': 'fa-prescription-bottle-medical',
        'Therapie des nicht-muskelinvasiven Blasenkarzinoms (NMIBC)': 'fa-user-md',
        'Therapie des muskelinvasiven Blasenkarzinoms (MIBC)': 'fa-user-md',
        'Palliative Systemtherapie': 'fa-pills',
        'Nachsorge': 'fa-calendar-check',
        'Supportive Therapie & Rehabilitation': 'fa-heart-pulse',
        'Supportivtherapie & Ernährung': 'fa-utensils',
        'Rehabilitation & Nachsorge': 'fa-person-walking-arrow-right',
        'Palliativmedizin': 'fa-hand-holding-heart',
        'Therapie - Frühstadium': 'fa-scalpel',
        'Therapie - Fortgeschrittenes Stadium': 'fa-pills',
        'Therapie - Chirurgische Verfahren': 'fa-scalpel',
        'Supportive Therapie': 'fa-heart-pulse',
        'Palliative Therapie': 'fa-hand-holding-heart',
        'Erstlinientherapie': 'fa-prescription-bottle',
        'Besondere Subgruppen': 'fa-users-viewfinder',
        'Rezidivtherapie': 'fa-rotate-left',
        'Rehabilitation und Nachsorge': 'fa-person-walking-arrow-right',
        'Supportivtherapie und Palliativmedizin': 'fa-hand-holding-heart',
        'Therapie des lokalisierten Sarkoms': 'fa-scalpel',
        'Therapie des metastasierten Sarkoms': 'fa-pills',
        'Spezifische Sarkomsubtypen': 'fa-layer-group',
        'Therapie des Seminoms': 'fa-dna',
        'Therapie des Nicht-Seminoms': 'fa-dna',
        'Restaging und Residualtumortherapie': 'fa-magnifying-glass',
        'Therapierefraktäre Tumoren und Rezidive': 'fa-rotate-left',
        'Sonderformen': 'fa-shapes',
        'Toxizität, Supportivtherapie und Spätfolgen': 'fa-heart-pulse',
        'Versorgungsqualität und Palliativmedizin': 'fa-hand-holding-heart',
        'Strahlentherapie': 'fa-radiation',
        'Medikamentöse Therapie': 'fa-pills',
        'Palliativmedizinische Begleitung': 'fa-hand-holding-heart',
        'Kinderwunsch & Fertilitätsprotektion': 'fa-baby',
        'Zervixkarzinom in der Schwangerschaft': 'fa-baby-carriage',
        'Spezielle Situationen': 'fa-circle-exclamation',
        'Subtypen und Risikofaktoren': 'fa-layer-group',
        'Subtypen (WHO-Klassifikation 5th ed. 2022)': 'fa-layer-group',
        'Risikofaktoren': 'fa-triangle-exclamation',
        'Prävention': 'fa-shield-virus',
        'Vorsorge': 'fa-calendar-check',
        'Risikofaktoren, Prävention und Früherkennung': 'fa-shield-virus',
        'Histopathologische und molekulare Diagnostik': 'fa-dna',
        'Bildgebende Diagnostik': 'fa-microscope',
        'Operative und interventionelle Therapieverfahren': 'fa-scalpel',
        'Systemtherapie': 'fa-pills',
        'Nachsorge & Verlauf': 'fa-calendar-check',
        'Therapieindikation': 'fa-clipboard-check',
        'Transplantationskandidaten (fit, ≤70 Jahre)': 'fa-user-md',
        'Nicht-Transplantationskandidaten (unfit/frail, >70 Jahre)': 'fa-user-injured',
        'Rezidivtherapie (1.-3. Rezidiv)': 'fa-rotate-left',
        'Supportivtherapie': 'fa-heart-pulse',
        'Komplikationen': 'fa-triangle-exclamation',
        'Rezidivdiagnostik & Therapie': 'fa-rotate-left',
        'Verlaufskontrolle': 'fa-chart-line',
        'Prävention und Früherkennung': 'fa-shield-virus',
        'Operative Therapie': 'fa-scalpel',
        'Lokoregionäre Therapie': 'fa-radiation',
        'Therapie - Primärtherapie': 'fa-scalpel',
        'Erhaltungstherapie': 'fa-pills',
        'Therapie des lokal begrenzten Prostatakarzinoms': 'fa-user-md',
        'Therapie des lokal fortgeschrittenen Prostatakarzinoms': 'fa-user-md',
        'Therapie des metastasierten kastrationsresistenten Prostatakarzinoms (mCRPC)': 'fa-pills',
        'Therapie des metastasierten kastrationssensitiven Prostatakarzinoms (mCSPC)': 'fa-pills',
        'Supportive Therapie & Nachsorge': 'fa-heart-pulse',
        'Therapie des Colitiskarzinoms': 'fa-pills',
        'Therapie des Rektumkarzinoms': 'fa-pills',
        'Therapie des Analkarzinoms': 'fa-pills',
        'Diagnostik und Therapie': 'fa-microscope',
        'Rezidiv und Metastasierung': 'fa-rotate-left'
    };

    var AO = ['Diagnostik', 'Therapie', '3. Therapie-Algorithmus (BCLC)', '5. Systemtherapie (Erst- & Zweitlinie)', '3. Molekulare Diagnostik & Zielstrukturen', '5. Systemtherapie (Adjuvant & Palliativ)', '3. Therapie: Nicht-metastasiert & Lokal', '4. Therapie: Metastasiert (Systemtherapie)'];

    var FSN = 13, FSX = 20, FSD = 15;
    var EDGE_MARGIN = 35;
    var SWIPE_THRESHOLD = 60;
    var SWIPE_VELOCITY = 0.3;
    var HORIZONTAL_THRESHOLD = 8;
    var SEG_TOUCH_THRESHOLD = 10;
    var SEG_TAP_TIMEOUT = 300;
    var PTH = 70;

    var CC = {
        'kardio': '#ef4444',
        'pulmo': '#3b82f6',
        'gi': '#f59e0b',
        'neuro': '#8b5cf6',
        'nephro': '#06b6d4',
        'metab': '#10b981',
        'haem': '#ec4899',
        'infekt': '#84cc16',
        'tox': '#f97316',
        'leit': '#6366f1',
        'sonst': '#64748b',
        'onko': '#be185d',
        'onko-gi': '#ea580c',
        'onko-uro': '#0891b2',
        'onko-gyn': '#db2777',
        'onko-pulmo': '#7c3aed',
        'onko-hno': '#059669',
        'onko-haem': '#dc2626',
        'onko-sonst': '#64748b'
    };

    var S = {
        data: [],
        tab: 'portal',
        mod: null,
        sopId: null,
        catD: 'all',
        catB: 'all',
        bQ: '',
        sQ: '',
        hQ: '',
        theme: 'light',
        fs: FSD,
        mob: window.innerWidth < 1024,
        allO: false,
        off: !navigator.onLine,
        ts: null,
        pY0: 0,
        pY: 0,
        pX0: 0,
        pull: false,
        refr: false,
        sCatOpen: false,
        bCatOpen: false,
        navStack: [],
        isNavigating: false,
        onkoCatOpen: false
    };

    var segTouchState = { startX: 0, startY: 0, startTime: 0, hasMoved: false, targetBtn: null };
    var pickerDragData = { startY: 0, currentY: 0, isDragging: false, startHeight: 0, sheet: null };
    var swipeData = { startX: 0, startY: 0, currentX: 0, isSwiping: false, canSwipe: false, startTime: 0 };
    var SAFE_AREA_RUNTIME = { bottom: 0, top: 0, isPWA: false, isIOS: false, lastMeasurement: 0 };
    var lastScrollY = 0;
    var fabVisible = true;
    var pullStartY = 0;
    var sObs = null;
    var sSec = '';
    var E = {};
    var mobileSidebarOpen = false;

    function cache() {
        var ids = [
            'app', 'mobileHeader', 'backBtn', 'mobileTitle', 'themeToggleMobile', 'themeToggleMobileIcon',
            'sidebar', 'appLogo', 'searchInput', 'searchClear', 'categoryFilters', 'navList',
            'themeToggle', 'themeToggleIcon', 'themeToggleLabel', 'mainContent', 'contentHeader',
            'breadcrumb', 'desktopTocBtn', 'contentScroll', 'viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP',
            'heroArea', 'catGrid', 'homeInfo', 'browseSearchInput', 'browseSearchClear',
            'browseCategoryFilters', 'browseList', 'searchViewInput', 'searchViewClear', 'searchResultsArea',
            'bottomNav', 'metaThemeColor', 'sectionPickerOverlay', 'sectionPickerBackdrop',
            'sectionPickerClose', 'sectionPickerList', 'sectionPickerPrint', 'offlineBanner', 'offlineTimestamp',
            'stickySectionBar', 'stickySectionIcon', 'stickySectionTitle', 'stickySopName',
            'stickySubcatBtn', 'stickySubcatLabel', 'stickySubcatMenu',
            'fontDecMobile', 'fontIncMobile', 'fontIndicatorMobile',
            'fontDecDesktop', 'fontIncDesktop', 'fontIndicatorDesktop', 'pullIndicator',
            'sidebarCatToggle', 'browseCatToggle', 'viewContainer',
            'spotlightOverlay', 'spotlightBackdrop', 'spotlightContainer', 'spotlightInput',
            'spotlightClear', 'spotlightResults', 'spotlightCancel', 'spotlightBtn',
            'skeletonOverlay', 'pickerSheet', 'pickerHandle', 'moduleSubtitle',
            'sidebarToggleMobile', 'sidebarMobileOverlay', 'sidebarMobileBackdrop', 'sidebarMobile',
            'sidebarMobileClose', 'searchInputMobile', 'searchClearMobile',
            'sidebarCatToggleMobile', 'categoryFiltersMobile', 'sidebarNavMobile', 'navListMobile',
            'themeToggleMobileBtn', 'themeToggleMobileIcon', 'themeToggleMobileLabel',
            'fontDecMobileBtn', 'fontIncMobileBtn', 'fontIndicatorMobileBtn',
            'stickySectionSelector', 'stickySectionMenu'
        ];
        for (var i = 0; i < ids.length; i++) {
            E[ids[i]] = document.getElementById(ids[i]);
        }
    }

    function rc(v) {
        if (!v) return 'sonst';
        var s = String(v).trim();
        if (CATS[s]) return s;
        var l = s.toLowerCase();
        if (CNM[l]) return CNM[l];
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            if (l.indexOf(keys[i]) !== -1 || keys[i].indexOf(l) !== -1) return keys[i];
        }
        return 'sonst';
    }

    function gc(k) {
        return CC[k] || '#64748b';
    }

    function renderCatIcon(catKey, color, sizeClass) {
        var cat = CATS[catKey];
        if (!cat) return '<i class="fa-solid fa-circle" style="color:' + color + '"></i>';
        if (cat.imgIcon) return '<img src="' + cat.imgIcon + '" alt="' + cat.name + '" class="cat-icon-img">';
        return '<i class="fa-solid ' + cat.icon + ' ' + sizeClass + '" style="color:' + color + '"></i>';
    }

    function isOnkoSubCat(k) {
        return CATS[k] && CATS[k].parent === 'onko';
    }

    function strip(html) {
        var d = document.createElement('div');
        d.innerHTML = html;
        return d.textContent || d.innerText || '';
    }

    function hl(text, query) {
        if (!query) return text;
        var e = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return text.replace(new RegExp('(' + e + ')', 'gi'), '<mark>$1</mark>');
    }

    function throttle(func, limit) {
        var inThrottle;
        return function() {
            var args = arguments, context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() { inThrottle = false; }, limit);
            }
        };
    }

    function debounce(func, wait) {
        var timeout;
        return function() {
            var args = arguments, context = this;
            clearTimeout(timeout);
            timeout = setTimeout(function() { func.apply(context, args); }, wait);
        };
    }

    function haptic(type) {
        if (!navigator.vibrate) return;
        var patterns = { light: 10, medium: 20, heavy: 50 };
        navigator.vibrate(patterns[type] || 10);
    }

    function normSop(d) {
        if (!d) return null;
        if (!d.name) d.name = d.title || 'Unbenannt';
        if (d.module === 'onkologie') d.module = 'onko';
        if (!d.module) d.module = 'zna';
        d.category = rc(d.category);
        if (!d.stand) d.stand = d.date || '';
        if (!d.sources) d.sources = d.quellen || d.references || '';
        if (!d.sections) d.sections = d.content || [];
        for (var i = 0; i < d.sections.length; i++) {
            var sec = d.sections[i];
            if (!sec.title) sec.title = sec.name || sec.heading || 'Abschnitt ' + (i + 1);
            if (!sec.html) sec.html = sec.content || sec.body || sec.text || '';
        }
        return d;
    }

    function router() {
        if (S.isNavigating) return;
        var h = window.location.hash || '#/';
        if (h === '#/') {
            S.mod = null; S.sopId = null;
            sTab('portal', false);
            return;
        }
        var p = h.substring(2).split('/');
        if (p[0] === 'sop' && p[1]) {
            var d = null;
            for (var i = 0; i < S.data.length; i++) { if (S.data[i].id === p[1]) { d = S.data[i]; break; } }
            if (d) { S.mod = d.module; S.sopId = d.id; sTab('sop', false); }
            else { window.location.hash = '#/'; }
        } else if (p[0] === 'zna' || p[0] === 'onko') {
            S.mod = p[0]; S.sopId = null;
            var targetTab = p[1] || 'home';
            sTab(targetTab, false);
        } else {
            window.location.hash = '#/';
        }
    }

    function updateUrl() {
        var h = '#/';
        if (S.tab === 'sop' && S.sopId) h = '#/sop/' + S.sopId;
        else if (S.mod && S.tab !== 'portal') h = '#/' + S.mod + '/' + S.tab;
        if (window.location.hash !== h) history.pushState(null, null, h);
    }

    function pushNav(newSopId) {
        if (S.isNavigating) return;
        S.isNavigating = true;
        S.navStack.push(window.location.hash);
        S.sopId = newSopId;
        if (mobileSidebarOpen) closeMobileSidebar();
        animatePush(function() {
            window.location.hash = '#/sop/' + newSopId;
            S.isNavigating = false;
        });
    }

    function popNav() {
        if (S.isNavigating) return;
        S.isNavigating = true;
        animatePop(function() {
            if (S.navStack.length > 0) window.location.hash = S.navStack.pop();
            else {
                if (S.tab === 'sop') window.location.hash = '#/' + S.mod + '/browse';
                else window.location.hash = '#/';
            }
            S.isNavigating = false;
        });
    }

    function animatePush(callback) {
        var views = ['viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'], activeView = null, nextView = E.viewSOP;
        for (var i = 0; i < views.length; i++) { if (E[views[i]] && E[views[i]].classList.contains('active')) { activeView = E[views[i]]; break; } }
        if (activeView && activeView !== nextView) {
            activeView.classList.remove('active'); activeView.classList.add('push-exit');
            if (nextView) {
                nextView.classList.add('push-enter'); void nextView.offsetWidth;
                nextView.classList.add('active'); nextView.classList.remove('push-enter');
            }
            setTimeout(function() { activeView.classList.remove('push-exit'); if (callback) callback(); }, 400);
        } else { if (callback) callback(); }
    }

    function animatePop(callback) {
        var views = ['viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'], activeView = null;
        for (var i = 0; i < views.length; i++) { if (E[views[i]] && E[views[i]].classList.contains('active')) { activeView = E[views[i]]; break; } }
        var nextView = S.mod ? E.viewHome : E.viewPortal;
        if (S.tab === 'sop') nextView = E.viewBrowse;
        if (activeView && activeView !== nextView) {
            activeView.classList.remove('active'); activeView.classList.add('pop-exit');
            if (nextView) {
                nextView.classList.add('pop-enter'); void nextView.offsetWidth;
                nextView.classList.add('active'); nextView.classList.remove('pop-enter');
            }
            setTimeout(function() { activeView.classList.remove('pop-exit'); if (callback) callback(); }, 400);
        } else { if (callback) callback(); }
    }

    function handleTouchStart(e) {
        if (S.tab === 'portal' || (S.tab !== 'sop' && S.tab !== 'browse')) return;
        var touch = e.touches[0];
        swipeData.startX = touch.clientX; swipeData.startY = touch.clientY;
        swipeData.currentX = touch.clientX; swipeData.isSwiping = false;
        swipeData.canSwipe = touch.clientX < EDGE_MARGIN;
        swipeData.startTime = e.timeStamp;
    }

    function handleTouchMove(e) {
        if (!swipeData.canSwipe) return;
        e.preventDefault();
        var touch = e.touches[0], deltaX = touch.clientX - swipeData.startX;
        if (Math.abs(deltaX) > HORIZONTAL_THRESHOLD) swipeData.isSwiping = true;
        if (swipeData.isSwiping && deltaX > 0) {
            swipeData.currentX = touch.clientX;
            var progress = Math.min(deltaX / window.innerWidth, 1), views = ['viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'], activeView = null;
            for (var i = 0; i < views.length; i++) { if (E[views[i]] && E[views[i]].classList.contains('active')) { activeView = E[views[i]]; break; } }
            if (activeView) {
                activeView.style.opacity = String(1 - (progress * 0.4));
                activeView.style.transform = 'translateX(' + (progress * 50) + 'px) scale(' + (1 - progress * 0.02) + ')';
                activeView.style.transition = 'none';
            }
        }
    }

    function handleTouchEnd(e) {
        if (!swipeData.canSwipe) return;
        var deltaX = swipeData.currentX - swipeData.startX, duration = e.timeStamp - (swipeData.startTime || e.timeStamp), velocity = deltaX / duration;
        var shouldPop = deltaX > SWIPE_THRESHOLD || (deltaX > SWIPE_THRESHOLD * 0.5 && velocity > SWIPE_VELOCITY);
        var views = ['viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'], activeView = null;
        for (var i = 0; i < views.length; i++) { if (E[views[i]] && E[views[i]].classList.contains('active')) { activeView = E[views[i]]; break; } }
        if (activeView) { activeView.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'; activeView.style.opacity = ''; activeView.style.transform = ''; }
        if (shouldPop) { haptic('light'); popNav(); }
        swipeData.isSwiping = false; swipeData.canSwipe = false;
    }

    function initSwipeGestures() {
        if (!E.contentScroll) return;
        E.contentScroll.addEventListener('touchstart', handleTouchStart, { passive: true });
        E.contentScroll.addEventListener('touchmove', handleTouchMove, { passive: false });
        E.contentScroll.addEventListener('touchend', handleTouchEnd, { passive: true });
        E.contentScroll.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    function openSpotlight() { if (!E.spotlightOverlay) return; E.spotlightOverlay.classList.add('show'); document.body.style.overflow = 'hidden'; setTimeout(function() { if (E.spotlightInput) E.spotlightInput.focus(); }, 100); haptic('light'); }
    function closeSpotlight() { if (!E.spotlightOverlay) return; E.spotlightOverlay.classList.remove('show'); document.body.style.overflow = ''; if (E.spotlightInput) { E.spotlightInput.value = ''; S.sQ = ''; } renderSpotlightResults(); }

    function renderSpotlightResults() {
        if (!E.spotlightResults) return;
        var query = S.sQ.trim().toLowerCase(), container = E.spotlightResults;
        if (!query) { container.innerHTML = '<div class="spotlight-empty"><i class="fa-solid fa-search"></i><p>Pfad eingeben zum Suchen</p></div>'; return; }
        var results = [];
        for (var i = 0; i < S.data.length; i++) {
            var d = S.data[i]; if (d.module !== S.mod) continue;
            if ((d.name || '').toLowerCase().indexOf(query) !== -1) results.push({ sop: d, match: 'name' });
        }
        if (results.length === 0) { container.innerHTML = '<div class="spotlight-empty"><i class="fa-solid fa-circle-xmark"></i><p>Keine Pfade gefunden</p></div>'; return; }
        var html = '', limit = Math.min(results.length, 10);
        for (var k = 0; k < limit; k++) {
            var r = results[k], obj = r.sop, cl = gc(obj.category), catName = CATS[obj.category] ? CATS[obj.category].name : '';
            html += '<div class="spotlight-result" data-id="' + obj.id + '"><div class="spotlight-result-icon" style="background:' + cl + ';color:#fff">';
            if (CATS[obj.category] && CATS[obj.category].imgIcon) html += '<img src="' + CATS[obj.category].imgIcon + '" alt="" class="cat-icon-img" style="width:20px;height:20px;border-radius:4px;">';
            else html += '<i class="fa-solid ' + (CATS[obj.category] ? CATS[obj.category].icon : 'fa-file-medical') + '"></i>';
            html += '</div><div class="spotlight-result-info"><div class="spotlight-result-name">' + hl(obj.name || '', query) + '</div><div class="spotlight-result-cat">' + catName + '</div></div><i class="fa-solid fa-chevron-right" style="color:var(--text3);font-size:0.8rem"></i></div>';
        }
        container.innerHTML = html;
        var items = container.querySelectorAll('.spotlight-result');
        for (var m = 0; m < items.length; m++) { (function(item) { item.addEventListener('click', function() { var id = item.getAttribute('data-id'); closeSpotlight(); pushNav(id); }); })(items[m]); }
    }

    function renderSegmentedControl(sopData) {
        if (!sopData || !sopData.sections) return '';
        var html = '<div class="segmented-control-wrapper" role="group" aria-label="Abschnitts-Navigation"><button class="segmented-scroll-arrow segmented-scroll-left" aria-label="Nach links scrollen" tabindex="-1"><i class="fa-solid fa-chevron-left"></i></button><div class="segmented-control" role="tablist" aria-label="Pfad-Abschnitte"><button class="segmented-btn active" role="tab" aria-selected="true" aria-controls="section-all" data-seg="all" title="Alle Abschnitte anzeigen"><i class="fa-solid fa-list" aria-hidden="true"></i> <span class="btn-text">Alle</span></button>';
        for (var i = 0; i < sopData.sections.length; i++) {
            var sec = sopData.sections[i], title = sec.title || 'Abschnitt ' + (i + 1), icon = SIC[title] || 'fa-circle';
            html += '<button class="segmented-btn" role="tab" aria-selected="false" aria-controls="section-' + i + '" data-seg="' + i + '" title="' + title.replace(/"/g, '&quot;') + '"><i class="fa-solid ' + icon + '" aria-hidden="true"></i> <span class="btn-text">' + title + '</span></button>';
        }
        html += '</div><button class="segmented-scroll-arrow segmented-scroll-right" aria-label="Nach rechts scrollen" tabindex="-1"><i class="fa-solid fa-chevron-right"></i></button></div>';
        return html;
    }

    function handleSegmentedClick(sopData, segIndex) {
        if (!sopData) return;
        haptic('light');
        var buttons = E.viewSOP.querySelectorAll('.segmented-btn');
        for (var i = 0; i < buttons.length; i++) {
            var active = buttons[i].getAttribute('data-seg') === String(segIndex);
            buttons[i].classList.toggle('active', active);
            buttons[i].setAttribute('aria-selected', active ? 'true' : 'false');
        }
        var bodies = E.viewSOP.querySelectorAll('.sop-section-body'), toggles = E.viewSOP.querySelectorAll('.sec-toggle');
        if (segIndex === 'all') { for (var j = 0; j < bodies.length; j++) { bodies[j].classList.add('open'); if (toggles[j]) toggles[j].classList.add('open'); } }
        else {
            for (var k = 0; k < bodies.length; k++) { bodies[k].classList.remove('open'); if (toggles[k]) toggles[k].classList.remove('open'); }
            var targetSection = E.viewSOP.querySelector('.sop-section[data-sec="' + segIndex + '"]');
            if (targetSection) {
                var body = targetSection.querySelector('.sop-section-body'), toggle = targetSection.querySelector('.sec-toggle');
                if (body) body.classList.add('open'); if (toggle) toggle.classList.add('open');
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    function initSegmentedKeyboardNav(container) {
        if (!container) return;
        var bts = container.querySelectorAll('.segmented-btn');
        for (var i = 0; i < bts.length; i++) {
            (function(btn) {
                btn.addEventListener('keydown', function(e) {
                    var btns = container.querySelectorAll('.segmented-btn'), cur = Array.prototype.indexOf.call(btns, e.target), next = -1;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (cur + 1) % btns.length;
                    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (cur - 1 + btns.length) % btns.length;
                    else if (e.key === 'Home') next = 0; else if (e.key === 'End') next = btns.length - 1;
                    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.target.click(); return; }
                    if (next >= 0) btns[next].focus();
                });
            })(bts[i]);
        }
    }

    function handleSegTouchStart(e, d, si) {
        var t = e.touches[0]; segTouchState.startX = t.clientX; segTouchState.startY = t.clientY;
        segTouchState.startTime = Date.now(); segTouchState.hasMoved = false; segTouchState.targetBtn = e.currentTarget;
        e.currentTarget.classList.add('tap-active');
    }

    function handleSegTouchMove(e) {
        if (!segTouchState.targetBtn) return;
        var t = e.touches[0], dx = Math.abs(t.clientX - segTouchState.startX), dy = Math.abs(t.clientY - segTouchState.startY);
        if (dx > SEG_TOUCH_THRESHOLD || dy > SEG_TOUCH_THRESHOLD) { segTouchState.hasMoved = true; segTouchState.targetBtn.classList.remove('tap-active'); }
    }

    function handleSegTouchEnd(e, d, si) {
        if (segTouchState.targetBtn) segTouchState.targetBtn.classList.remove('tap-active');
        if (!segTouchState.hasMoved && (Date.now() - segTouchState.startTime) < SEG_TAP_TIMEOUT) handleSegmentedClick(d, si);
        segTouchState.targetBtn = null; segTouchState.hasMoved = false;
    }

    function checkSegmentedScrollArrows() {
        var control = document.querySelector('.segmented-control'), leftArrow = document.querySelector('.segmented-scroll-left'), rightArrow = document.querySelector('.segmented-scroll-right');
        if (!control || !leftArrow || !rightArrow) return;
        var canL = control.scrollLeft > 5, canR = control.scrollLeft < (control.scrollWidth - control.clientWidth - 5), hasO = control.scrollWidth > control.clientWidth;
        if (!hasO) { leftArrow.style.opacity = '0'; leftArrow.style.pointerEvents = 'none'; rightArrow.style.opacity = '0'; rightArrow.style.pointerEvents = 'none'; return; }
        leftArrow.style.opacity = canL ? '0.5' : '0'; leftArrow.style.pointerEvents = canL ? 'auto' : 'none';
        rightArrow.style.opacity = canR ? '0.5' : '0'; rightArrow.style.pointerEvents = canR ? 'auto' : 'none';
    }

    function scrollSegmented(direction) {
        var control = document.querySelector('.segmented-control'); if (!control) return;
        control.scrollBy({ left: direction === 'left' ? -120 : 120, behavior: 'smooth' }); haptic('light');
    }

    function initSegmentedScrollArrows() {
        var control = document.querySelector('.segmented-control'), leftArrow = document.querySelector('.segmented-scroll-left'), rightArrow = document.querySelector('.segmented-scroll-right');
        if (!control) return;
        control.addEventListener('scroll', throttle(checkSegmentedScrollArrows, 50), { passive: true });
        if (leftArrow) leftArrow.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); scrollSegmented('left'); });
        if (rightArrow) rightArrow.addEventListener('click', function(e) { e.preventDefault(); e.stopPropagation(); scrollSegmented('right'); });
        setTimeout(checkSegmentedScrollArrows, 50); window.addEventListener('resize', debounce(checkSegmentedScrollArrows, 150));
    }

    function lTh() {
        var v = localStorage.getItem('sop-theme');
        if (v === 'dark' || v === 'light') S.theme = v;
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) S.theme = 'dark';
    }

    function aTh() {
        document.documentElement.setAttribute('data-theme', S.theme); localStorage.setItem('sop-theme', S.theme);
        var dk = S.theme === 'dark';
        if (E.themeToggleIcon) E.themeToggleIcon.className = dk ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (E.themeToggleMobileIcon) E.themeToggleMobileIcon.className = dk ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (E.themeToggleLabel) E.themeToggleLabel.textContent = dk ? 'Light Mode' : 'Dark Mode';
        if (E.themeToggleMobileLabel) E.themeToggleMobileLabel.textContent = dk ? 'Light Mode' : 'Dark Mode';
        if (E.metaThemeColor) E.metaThemeColor.setAttribute('content', dk ? '#1e293b' : '#ffffff');
    }

    function lFs() { var v = parseInt(localStorage.getItem('sop-fontsize'), 10); if (v >= FSN && v <= FSX) S.fs = v; }
    function aFs() { document.documentElement.style.setProperty('--font-base', S.fs + 'px'); localStorage.setItem('sop-fontsize', S.fs); if (E.fontIndicatorDesktop) E.fontIndicatorDesktop.textContent = S.fs; if (E.fontIndicatorMobile) E.fontIndicatorMobile.textContent = S.fs; if (E.fontIndicatorMobileBtn) E.fontIndicatorMobileBtn.textContent = S.fs; }
    function cFs(d) { S.fs = Math.max(FSN, Math.min(FSX, S.fs + d)); aFs(); }

    function showUpdateNotification(serverData) {
        var existing = document.getElementById('updateNotification'); if (existing) existing.remove();
        var notification = document.createElement('div'); notification.id = 'updateNotification';
        notification.innerHTML = '<div class="update-notif-content"><i class="fa-solid fa-cloud-arrow-down"></i><div class="update-notif-text"><strong>Neue Version verfügbar</strong><p>Tippen zum Aktualisieren</p></div><button id="updateNotifDismiss"><i class="fa-solid fa-xmark"></i></button></div>';
        document.body.appendChild(notification);
        notification.addEventListener('click', function(e) { if (e.target.closest('#updateNotifDismiss')) return; window.location.reload(true); });
        var dismissBtn = document.getElementById('updateNotifDismiss');
        if (dismissBtn) dismissBtn.addEventListener('click', function(e) { e.stopPropagation(); notification.style.animation = 'slideDownFade 0.3s ease forwards'; setTimeout(function() { notification.remove(); }, 300); });
    }

    function checkForUpdate() {
        var xhr = new XMLHttpRequest(); xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
        xhr.onreadystatechange = function() { if (xhr.readyState === 4 && xhr.status === 200) { try { var serverData = JSON.parse(xhr.responseText); if (serverData.version !== (localStorage.getItem('sop-app-version') || APP_VERSION)) showUpdateNotification(serverData); if (serverData.version === APP_VERSION) localStorage.setItem('sop-app-version', APP_VERSION); } catch (e) {} } };
        xhr.send();
    }

    function detectRuntimeEnvironment() { var isStandalone = window.matchMedia('(display-mode: standalone)').matches, isIOSStandalone = window.navigator.standalone === true, isAndroidWebApp = document.referrer.indexOf('android-app://') === 0; SAFE_AREA_RUNTIME.isPWA = isStandalone || isIOSStandalone || isAndroidWebApp; SAFE_AREA_RUNTIME.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); return SAFE_AREA_RUNTIME.isPWA; }

    function measureSafeAreaRuntime() {
        var measuredBottom = 0;
        if (SAFE_AREA_RUNTIME.isIOS && SAFE_AREA_RUNTIME.isPWA) {
            var screenH = window.screen.height, iPhoneWithNotch = [812, 844, 852, 896, 926, 932];
            for (var i = 0; i < iPhoneWithNotch.length; i++) { if (screenH >= iPhoneWithNotch[i] - 5 && screenH <= iPhoneWithNotch[i] + 5) { measuredBottom = 34; break; } }
            if (measuredBottom === 0 && screenH >= 1024 && /iPad/.test(navigator.userAgent)) measuredBottom = 20;
        }
        if (measuredBottom === 0 && SAFE_AREA_RUNTIME.isPWA) { var vDiff = window.screen.height - window.innerHeight; if (vDiff > 0 && vDiff < 150) { if (SAFE_AREA_RUNTIME.isIOS && vDiff >= 34) measuredBottom = 34; else if (vDiff >= 20 && vDiff < 50) measuredBottom = vDiff; } }
        if (measuredBottom === 0 && window.visualViewport) { var vvH = window.visualViewport.height, innerH = window.innerHeight; if (innerH > vvH) { var diff = innerH - vvH; if (diff > 0 && diff < 100) measuredBottom = diff; } }
        if (measuredBottom === 0) { var testEl = document.createElement('div'); testEl.style.cssText = 'position:fixed;bottom:0;left:0;width:1px;height:0;padding-bottom:env(safe-area-inset-bottom,0);visibility:hidden;'; document.body.appendChild(testEl); var envValue = parseInt(getComputedStyle(testEl).paddingBottom, 10) || 0; document.body.removeChild(testEl); if (envValue > 0) measuredBottom = envValue; }
        SAFE_AREA_RUNTIME.bottom = measuredBottom; SAFE_AREA_RUNTIME.lastMeasurement = Date.now(); return measuredBottom;
    }

    function applySafeAreaCSS() { var sab = SAFE_AREA_RUNTIME.bottom; document.documentElement.style.setProperty('--sab-js', sab + 'px'); document.documentElement.style.setProperty('--btm-nav-total', 'calc(56px + ' + sab + 'px)'); if (sab > 0) document.documentElement.classList.add('safe-area-detected'); else document.documentElement.classList.remove('safe-area-detected'); }

    function initSafeAreaRuntime() { detectRuntimeEnvironment(); measureSafeAreaRuntime(); applySafeAreaCSS(); window.addEventListener('orientationchange', function() { setTimeout(function() { measureSafeAreaRuntime(); applySafeAreaCSS(); }, 100); }); var resizeTimeout; window.addEventListener('resize', function() { clearTimeout(resizeTimeout); resizeTimeout = setTimeout(function() { measureSafeAreaRuntime(); applySafeAreaCSS(); }, 150); }); if (window.visualViewport) window.visualViewport.addEventListener('resize', function() { measureSafeAreaRuntime(); applySafeAreaCSS(); }); }

    function initDraggablePicker() {
        var picker = E.sectionPickerOverlay, sheet = E.pickerSheet, handle = E.pickerHandle; if (!sheet) return;
        pickerDragData.sheet = sheet;
        if (handle) { handle.addEventListener('touchstart', handleDragStart, { passive: true }); handle.addEventListener('touchmove', handleDragMove, { passive: false }); handle.addEventListener('touchend', handleDragEnd, { passive: true }); handle.addEventListener('mousedown', handleDragStart); }
        if (picker) { var head = picker.querySelector('.picker-head'); if (head) { head.addEventListener('touchstart', handleDragStart, { passive: true }); head.addEventListener('touchmove', handleDragMove, { passive: false }); head.addEventListener('touchend', handleDragEnd, { passive: true }); head.addEventListener('mousedown', handleDragStart); } }
    }

    function handleDragStart(e) { var sheet = pickerDragData.sheet; if (!sheet) return; pickerDragData.isDragging = true; pickerDragData.startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY; pickerDragData.startHeight = sheet.offsetHeight; sheet.style.transition = 'none'; sheet.style.cursor = 'grabbing'; document.body.style.overflow = 'hidden'; }
    function handleDragMove(e) { if (!pickerDragData.isDragging) return; e.preventDefault(); var sheet = pickerDragData.sheet, currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY, deltaY = currentY - pickerDragData.startY, newHeight = pickerDragData.startHeight - deltaY, maxHeight = window.innerHeight * 0.7; if (newHeight > maxHeight) newHeight = maxHeight; if (newHeight < 100) newHeight = 100; sheet.style.maxHeight = newHeight + 'px'; }
    function handleDragEnd(e) { if (!pickerDragData.isDragging) return; var sheet = pickerDragData.sheet; if (!sheet) return; pickerDragData.isDragging = false; sheet.style.transition = 'max-height 0.3s ease-out'; sheet.style.cursor = ''; document.body.style.overflow = ''; if (parseFloat(window.getComputedStyle(sheet).maxHeight) < window.innerHeight * 0.3) cPk(); else sheet.style.maxHeight = '70vh'; }

    function sTab(t, updateHash) {
        S.tab = t;
        var views = ['viewPortal', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];
        for (var i = 0; i < views.length; i++) { if (E[views[i]]) { E[views[i]].classList.remove('active'); E[views[i]].style.opacity = ''; E[views[i]].style.transform = ''; } }
        if (E.bottomNav) { var bns = E.bottomNav.querySelectorAll('.btm-btn'); for (var j = 0; j < bns.length; j++) bns[j].classList.remove('active'); }
        if (E.backBtn) E.backBtn.classList.remove('show');
        if (E.desktopTocBtn) E.desktopTocBtn.style.display = (window.innerWidth >= 768 && t === 'sop') ? 'flex' : 'none';
        if (E.stickySectionBar) E.stickySectionBar.classList.remove('show');
        if (E.sidebar) E.sidebar.classList.toggle('hidden', t === 'portal');
        
        updateSidebarToggleVisibility(); dSO();

        if (t === 'portal') { if (E.viewPortal) E.viewPortal.classList.add('active'); if (E.mobileTitle) E.mobileTitle.textContent = 'Patientenpfade'; rPortal(); rBC([]); }
        else if (t === 'home') {
            if (E.viewHome) E.viewHome.classList.add('active'); rHome(); rBC([]);
            var modTitle = S.mod === 'zna' ? 'Zentrale Notaufnahme' : 'Onkologie';
            if (E.mobileTitle) E.mobileTitle.textContent = modTitle; if (E.moduleSubtitle) E.moduleSubtitle.textContent = modTitle;
            if (E.bottomNav) { var hb = E.bottomNav.querySelector('[data-tab="home"]'); if (hb) hb.classList.add('active'); }
            if (E.backBtn) E.backBtn.classList.add('show');
        } else if (t === 'browse') {
            if (E.viewBrowse) E.viewBrowse.classList.add('active'); rBrowse(); rBC([{ label: 'Pfade' }]);
            if (E.mobileTitle) E.mobileTitle.textContent = 'Pfade';
            if (E.bottomNav) { var bb = E.bottomNav.querySelector('[data-tab="browse"]'); if (bb) bb.classList.add('active'); }
            if (E.backBtn) E.backBtn.classList.add('show');
        } else if (t === 'search') {
            if (E.viewSearch) E.viewSearch.classList.add('active'); rSearch(); rBC([{ label: 'Suche' }]);
            if (E.mobileTitle) E.mobileTitle.textContent = 'Suche';
            if (E.bottomNav) { var sb = E.bottomNav.querySelector('[data-tab="search"]'); if (sb) sb.classList.add('active'); }
            setTimeout(function() { if (E.searchViewInput) E.searchViewInput.focus(); }, 100); if (E.backBtn) E.backBtn.classList.add('show');
        } else if (t === 'sop') {
            if (E.viewSOP) E.viewSOP.classList.add('active'); rSOP(); if (E.backBtn) E.backBtn.classList.add('show');
            var d = null; for (var k = 0; k < S.data.length; k++) { if (S.data[k].id === S.sopId) { d = S.data[k]; break; } }
            if (d) { if (E.mobileTitle) E.mobileTitle.textContent = d.name || ''; rBC([{ label: 'Pfade', click: function() { S.sopId = null; window.location.hash = '#/' + S.mod + '/browse'; } }, { label: d.name || '' }]); }
            iSO();
        }
        if (updateHash !== false) updateUrl();
        if (E.contentScroll) E.contentScroll.scrollTop = 0;
        rSB(); rNav();
    }

    function rPortal() {
        if (!E.viewPortal) return;
        var cards = E.viewPortal.querySelectorAll('.portal-card');
        for (var i = 0; i < cards.length; i++) { (function(c) { c.addEventListener('click', function() { S.mod = c.getAttribute('data-module'); haptic('light'); window.location.hash = '#/' + S.mod + '/home'; }); })(cards[i]); }
    }

    function rSB() {
        if (!S.mod) return;
        if (E.categoryFilters) renderCategoryFilters(E.categoryFilters, S.catD, function(catKey) { if (catKey === 'onko') S.onkoCatOpen = !S.onkoCatOpen; else if (catKey !== 'all') S.onkoCatOpen = false; S.catD = catKey; rNav(); rSB(); });
        if (E.categoryFiltersMobile) renderCategoryFilters(E.categoryFiltersMobile, S.catD, function(catKey) { if (catKey === 'onko') S.onkoCatOpen = !S.onkoCatOpen; else if (catKey !== 'all') S.onkoCatOpen = false; S.catD = catKey; rNav(); rSB(); closeMobileSidebar(); });
    }

    function renderCategoryFilters(container, activeCat, onSelect) {
        if (!container || !S.mod) return;
        var counts = {}, keys = [], subKeys = [], allKeys = Object.keys(CATS);
        for (var i = 0; i < allKeys.length; i++) { var ck = allKeys[i], cat = CATS[ck]; if (cat.mod === S.mod) { if (cat.parent) subKeys.push(ck); else keys.push(ck); counts[ck] = 0; } }
        var modData = []; for (var j = 0; j < S.data.length; j++) { if (S.data[j].module === S.mod) { modData.push(S.data[j]); var c = S.data[j].category; if (counts[c] !== undefined) counts[c]++; } }
        var html = '<span class="sidebar-cat-chip' + (activeCat === 'all' ? ' active' : '') + '" data-cat="all">Alle <span class="cat-count">' + modData.length + '</span></span>';
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k], catObj = CATS[key], hasSub = false;
            for (var s = 0; s < subKeys.length; s++) { if (CATS[subKeys[s]].parent === key) { hasSub = true; break; } }
            if (counts[key] > 0 || hasSub) {
                var cl = gc(key); html += '<span class="sidebar-cat-chip' + (activeCat === key ? ' active' : '') + '" data-cat="' + key + '" style="--cat-color:' + cl + '">' + renderCatIcon(key, cl, '') + ' ' + catObj.name + ' <span class="cat-count">' + counts[key] + '</span></span>';
                if ((key === 'onko' && S.onkoCatOpen) || isOnkoSubCat(activeCat)) {
                    for (var t = 0; t < subKeys.length; t++) {
                        var sk = subKeys[t]; if (CATS[sk].parent === key && counts[sk] > 0) { var scl = gc(sk); html += '<span class="sidebar-cat-chip sidebar-subcat' + (activeCat === sk ? ' active' : '') + '" data-cat="' + sk + '" style="--cat-color:' + scl + '"><i class="fa-solid fa-corner-down-right"></i> ' + renderCatIcon(sk, scl, '') + ' ' + CATS[sk].name + ' <span class="cat-count">' + counts[sk] + '</span></span>'; }
                    }
                }
            }
        }
        container.innerHTML = html;
        var chips = container.querySelectorAll('.sidebar-cat-chip');
        for (var m = 0; m < chips.length; m++) { (function(ch) { ch.addEventListener('click', function() { var ck = ch.getAttribute('data-cat'); onSelect(ck); }); })(chips[m]); }
    }

    function rNav() { if (!S.mod) return; if (E.navList) renderNavList(E.navList); if (E.navListMobile) renderNavList(E.navListMobile, true); }
    function renderNavList(container, isMobile) {
        if (!container) return;
        var list = []; function matches(sc, sel) { if (sel === 'all' || sc === sel) return true; return CATS[sc] && CATS[sc].parent === sel; }
        for (var i = 0; i < S.data.length; i++) { if (S.data[i].module === S.mod && matches(S.data[i].category, S.catD)) list.push(S.data[i]); }
        if (S.hQ) { var q = S.hQ.toLowerCase(); list = list.filter(function(it) { return (it.name || '').toLowerCase().indexOf(q) !== -1; }); }
        var html = '';
        for (var k = 0; k < list.length; k++) { var d = list[k], cl = gc(d.category), isAct = S.sopId === d.id && S.tab === 'sop', nm = S.hQ ? hl(d.name || '', S.hQ) : (d.name || ''); html += '<li><a href="#/sop/' + d.id + '" class="' + (isAct ? 'active' : '') + '" data-id="' + d.id + '"><span class="nav-dot" style="background:' + cl + '"></span><span class="nav-label">' + nm + '</span></a></li>'; }
        container.innerHTML = html;
        var links = container.querySelectorAll('a');
        for (var m = 0; m < links.length; m++) { (function(a) { a.addEventListener('click', function(e) { e.preventDefault(); pushNav(a.getAttribute('data-id')); if (isMobile) closeMobileSidebar(); }); })(links[m]); }
    }

    function updateSidebarToggleVisibility() { if (!E.sidebarToggleMobile) return; if (S.tab !== 'portal' && window.innerWidth < 768) E.sidebarToggleMobile.classList.add('show'); else E.sidebarToggleMobile.classList.remove('show'); }
    function openMobileSidebar() { if (!E.sidebarMobileOverlay) return; E.sidebarMobileOverlay.classList.add('show'); document.body.style.overflow = 'hidden'; mobileSidebarOpen = true; haptic('light'); if (S.mod) { rSB(); rNav(); } }
    function closeMobileSidebar() { if (!E.sidebarMobileOverlay) return; E.sidebarMobileOverlay.classList.remove('show'); document.body.style.overflow = ''; mobileSidebarOpen = false; }

    function rHome() {
        if (!S.mod) return;
        var isZna = S.mod === 'zna', isOnko = S.mod === 'onko';
        if (E.heroArea) E.heroArea.innerHTML = '<img class="hero-logo-header" src="img/Patientenpfade_header.png" alt="Patientenpfade"><h1 class="hero-title">' + (isZna ? 'Zentrale Notaufnahme' : 'Onkologie') + '</h1><div class="hero-search"><i class="fa-solid fa-magnifying-glass"></i><input type="text" id="heroSearchInput" placeholder="Pfad schnell finden..." autocomplete="off"></div>';
        var hsi = document.getElementById('heroSearchInput'); if (hsi) hsi.addEventListener('input', function() { if (this.value.length >= 1) { S.sQ = this.value; openSpotlight(); if (E.spotlightInput) E.spotlightInput.value = this.value; renderSpotlightResults(); } });
        var counts = {}, keys = [], subKeys = [], allKeys = Object.keys(CATS);
        for (var i = 0; i < allKeys.length; i++) { var ck = allKeys[i], cat = CATS[ck]; if (cat.mod === S.mod) { if (cat.parent) subKeys.push(ck); else keys.push(ck); counts[ck] = 0; } }
        var modData = []; for (var j = 0; j < S.data.length; j++) { if (S.data[j].module === S.mod) { modData.push(S.data[j]); var c = S.data[j].category; if (counts[c] !== undefined) counts[c]++; } }
        var gh = '<div class="cat-card cat-card-all" data-cat="all" style="--cat-color:var(--primary)"><i class="fa-solid fa-list cat-card-icon" style="color:var(--primary)"></i><span class="cat-card-name">Alle Pfade</span><span class="cat-card-count">' + modData.length + ' Einträge</span></div>';
        for (var k = 0; k < keys.length; k++) { var key = keys[k]; for (var t = 0; t < subKeys.length; t++) { var sk = subKeys[t]; if (CATS[sk].parent === key && counts[sk] > 0) { var scl = gc(sk); gh += '<div class="cat-card" data-cat="' + sk + '" style="--cat-color:' + scl + '">' + renderCatIcon(sk, scl, 'cat-card-icon') + '<span class="cat-card-name">' + CATS[sk].name + '</span><span class="cat-card-count">' + counts[sk] + ' Pfade</span></div>'; } } }
        if (E.catGrid) { E.catGrid.innerHTML = gh; var bCards = E.catGrid.querySelectorAll('.cat-card'); for (var m = 0; m < bCards.length; m++) { (function(c) { c.addEventListener('click', function() { S.catB = c.getAttribute('data-cat'); window.location.hash = '#/' + S.mod + '/browse'; }); })(bCards[m]); } }
        if (E.homeInfo) E.homeInfo.innerHTML = '<p class="info-count">' + modData.length + ' Pfade im Modul verfügbar</p>';
    }

    function rBrowse() {
        if (!E.viewBrowse) return;
        var html = '<div class="browse-bar-top"><div class="browse-search"><i class="fa-solid fa-magnifying-glass"></i><input type="text" id="browseSearchInput" placeholder="Pfade filtern..." autocomplete="off" value="' + (S.bQ || '') + '"><button class="browse-search-clear' + (S.bQ ? ' show' : '') + '" id="browseSearchClear"><i class="fa-solid fa-xmark"></i></button></div><button class="browse-cat-toggle' + (S.bCatOpen ? ' open' : '') + '" id="browseCatToggle"><i class="fa-solid fa-filter"></i> Kategorien' + (S.catB !== 'all' ? ' <span class="browse-active-cat">' + ((CATS[S.catB] && CATS[S.catB].name) || '') + '</span>' : '') + '<i class="fa-solid fa-chevron-down toggle-icon"></i></button><div class="browse-cats' + (S.bCatOpen ? ' open' : '') + '" id="browseCategoryFilters"></div></div><div class="browse-list" id="browseList"></div>';
        E.viewBrowse.innerHTML = html; E.browseSearchInput = document.getElementById('browseSearchInput'); E.browseSearchClear = document.getElementById('browseSearchClear'); E.browseCatToggle = document.getElementById('browseCatToggle'); E.browseCategoryFilters = document.getElementById('browseCategoryFilters'); E.browseList = document.getElementById('browseList');
        if (E.browseSearchInput) { E.browseSearchInput.addEventListener('input', function() { S.bQ = this.value; if (E.browseSearchClear) E.browseSearchClear.classList.toggle('show', this.value.length > 0); rBrowseList(); }); }
        if (E.browseSearchClear) { E.browseSearchClear.addEventListener('click', function() { if (E.browseSearchInput) E.browseSearchInput.value = ''; S.bQ = ''; this.classList.remove('show'); rBrowseList(); }); }
        if (E.browseCatToggle && E.browseCategoryFilters) { E.browseCatToggle.addEventListener('click', function() { S.bCatOpen = !S.bCatOpen; this.classList.toggle('open', S.bCatOpen); E.browseCategoryFilters.classList.toggle('open', S.bCatOpen); }); }
        rBrowseCats(); rBrowseList();
    }

    function rBrowseCats() {
        if (!S.mod || !E.browseCategoryFilters) return;
        var counts = {}, keys = [], subKeys = [], allKeys = Object.keys(CATS);
        for (var i = 0; i < allKeys.length; i++) { var ck = allKeys[i], cat = CATS[ck]; if (cat.mod === S.mod) { if (cat.parent) subKeys.push(ck); else keys.push(ck); counts[ck] = 0; } }
        for (var j = 0; j < S.data.length; j++) { if (S.data[j].module === S.mod) { var c = S.data[j].category; if (counts[c] !== undefined) counts[c]++; } }
        var html = '<span class="browse-cat-chip' + (S.catB === 'all' ? ' active' : '') + '" data-cat="all">Alle</span>';
        for (var k = 0; k < keys.length; k++) {
            var key = keys[k], catObj = CATS[key], hasSub = false;
            for (var s = 0; s < subKeys.length; s++) { if (CATS[subKeys[s]].parent === key) { hasSub = true; break; } }
            if (counts[key] > 0 || hasSub) {
                var cl = gc(key); html += '<span class="browse-cat-chip' + (S.catB === key ? ' active' : '') + '" data-cat="' + key + '" style="--cat-color:' + cl + '">' + renderCatIcon(key, cl, '') + ' ' + catObj.name + '</span>';
                if ((key === 'onko' && S.onkoCatOpen) || isOnkoSubCat(S.catB)) {
                    for (var t = 0; t < subKeys.length; t++) {
                        var sk = subKeys[t]; if (CATS[sk].parent === key && counts[sk] > 0) { var scl = gc(sk); html += '<span class="browse-cat-chip browse-subcat' + (S.catB === sk ? ' active' : '') + '" data-cat="' + sk + '" style="--cat-color:' + scl + '"><i class="fa-solid fa-corner-down-right"></i> ' + renderCatIcon(sk, scl, '') + ' ' + CATS[sk].name + ' (' + counts[sk] + ')</span>'; }
                    }
                }
            }
        }
        E.browseCategoryFilters.innerHTML = html;
        var chips = E.browseCategoryFilters.querySelectorAll('.browse-cat-chip');
        for (var m = 0; m < chips.length; m++) { (function(ch) { ch.addEventListener('click', function() { var ck = ch.getAttribute('data-cat'); if (ck === 'onko') S.onkoCatOpen = !S.onkoCatOpen; else if (ck !== 'all') S.onkoCatOpen = false; S.catB = ck; if (ck !== 'all' && E.browseList) { var target = E.browseList.querySelector('.browse-cat-header[data-cat="' + ck + '"]'); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } else if (ck === 'all' && E.contentScroll) E.contentScroll.scrollTo({ top: 0, behavior: 'smooth' }); rBrowseCats(); }); })(chips[m]); }
    }

    function rBrowseList() {
        if (!E.browseList) return;
        var list = []; for (var i = 0; i < S.data.length; i++) if (S.data[i].module === S.mod) list.push(S.data[i]);
        if (S.bQ) { var q = S.bQ.toLowerCase(); list = list.filter(function(it) { return (it.name || '').toLowerCase().indexOf(q) !== -1; }); }
        var grouped = {}, order = [];
        for (var k = 0; k < list.length; k++) { var d = list[k], cat = d.category; if (!grouped[cat]) { grouped[cat] = []; order.push(cat); } grouped[cat].push(d); }
        var html = '';
        for (var c = 0; c < order.length; c++) {
            var ck = order[c], items = grouped[ck], cl = gc(ck), cn = CATS[ck] ? CATS[ck].name : '';
            html += '<div class="browse-cat-header" data-cat="' + ck + '"><span class="browse-cat-header-dot" style="background:' + cl + '"></span>' + renderCatIcon(ck, cl, '') + '<span class="browse-cat-header-name">' + cn + '</span><span class="browse-cat-header-count">' + items.length + '</span></div>';
            for (var m = 0; m < items.length; m++) { var it = items[m], itCl = gc(it.category), nm = S.bQ ? hl(it.name || '', S.bQ) : (it.name || ''); html += '<div class="browse-item" data-id="' + it.id + '"><span class="bi-dot" style="background:' + itCl + '"></span><span class="bi-name">' + nm + '</span><i class="fa-solid fa-chevron-right bi-arrow"></i></div>'; }
        }
        if (list.length === 0) html = '<div class="search-empty"><i class="fa-solid fa-search"></i><p>Keine Pfade gefunden.</p></div>';
        E.browseList.innerHTML = html;
        var bItems = E.browseList.querySelectorAll('.browse-item');
        for (var n = 0; n < bItems.length; n++) { (function(it) { it.addEventListener('click', function() { pushNav(it.getAttribute('data-id')); }); })(bItems[n]); }
    }

    function rSOP() {
        if (!E.viewSOP) return;
        var d = null; for (var x = 0; x < S.data.length; x++) if (S.data[x].id === S.sopId) { d = S.data[x]; break; }
        if (!d) { E.viewSOP.innerHTML = '<div class="search-empty"><p>Pfad nicht gefunden.</p></div>'; return; }
        var cl = gc(d.category), cn = CATS[d.category] ? CATS[d.category].name : '', ci = CATS[d.category] ? CATS[d.category].icon : 'fa-circle-info', secCount = d.sections ? d.sections.length : 0;
        var html = '<div class="sop-header"><div class="sop-header-top"><span class="sop-cat-badge" style="background:' + cl + '">';
        if (CATS[d.category] && CATS[d.category].imgIcon) html += '<img src="' + CATS[d.category].imgIcon + '" alt="" class="cat-icon-img" style="width:16px;height:16px;border-radius:3px;margin-right:4px;">';
        else html += '<i class="fa-solid ' + ci + '"></i> ';
        html += cn + '</span>' + (d.stand ? '<span class="sop-meta-item"><i class="fa-solid fa-calendar"></i> Stand: ' + d.stand + '</span>' : '') + '</div><h1 class="sop-title">' + d.name + '</h1><div class="sop-meta"><span class="sop-meta-item"><i class="fa-solid fa-layer-group"></i> ' + secCount + ' Abschnitte</span></div></div>' + renderSegmentedControl(d);
        if (d.sections) {
            for (var i = 0; i < d.sections.length; i++) {
                var sec = d.sections[i], title = sec.title || 'Abschnitt ' + (i + 1), ic = SIC[title] || 'fa-circle-info', isAO = false;
                for (var v = 0; v < AO.length; v++) if (AO[v] === title) { isAO = true; break; }
                var op = (d.module !== 'onko' && (S.allO || isAO));
                html += '<div class="sop-section" data-sec="' + i + '" style="animation-delay:' + (i * 0.05) + 's"><div class="sop-section-head" data-idx="' + i + '"><i class="fa-solid ' + ic + ' sec-icon" style="color:' + cl + '"></i><span class="sec-title">' + title + '</span><i class="fa-solid fa-chevron-down sec-toggle' + (op ? ' open' : '') + '"></i></div><div class="sop-section-body' + (op ? ' open' : '') + '">' + sec.html + '</div></div>';
            }
        }
        if (d.sources) html += '<div class="sop-section"><div class="sop-section-head" data-idx="sources"><i class="fa-solid fa-quote-right sec-icon" style="color:' + cl + '"></i><span class="sec-title">Quellen</span><i class="fa-solid fa-chevron-down sec-toggle"></i></div><div class="sop-section-body"><div class="sop-sources">' + d.sources + '</div></div></div>';
        E.viewSOP.innerHTML = html;
        var segBts = E.viewSOP.querySelectorAll('.segmented-btn');
        for (var j = 0; j < segBts.length; j++) { (function(bt) { var si = bt.getAttribute('data-seg'); bt.addEventListener('touchstart', function(e) { handleSegTouchStart(e, d, si); }, { passive: true }); bt.addEventListener('touchmove', handleSegTouchMove, { passive: true }); bt.addEventListener('touchend', handleSegTouchEnd, { passive: true }); bt.addEventListener('click', function(e) { if (e.detail !== 0) handleSegmentedClick(d, si); }); })(segBts[j]); }
        initSegmentedScrollArrows(); initSegmentedKeyboardNav(E.viewSOP.querySelector('.segmented-control'));
        var heads = E.viewSOP.querySelectorAll('.sop-section-head');
        for (var k = 0; k < heads.length; k++) { (function(hd) { hd.addEventListener('click', function() { var bd = hd.nextElementSibling, tg = hd.querySelector('.sec-toggle'), open = bd.classList.contains('open'); bd.classList.toggle('open', !open); if (tg) tg.classList.toggle('open', !open); }); })(heads[k]); }
        rPk();
    }

    function rBC(items) {
        if (!E.breadcrumb) return;
        var html = '<a href="#/" class="bc-portal">Portal</a>';
        if (S.mod) {
            var modName = S.mod === 'zna' ? 'Zentrale Notaufnahme' : 'Onkologie';
            html += '<span class="sep"><i class="fa-solid fa-chevron-right"></i></span><a href="#/' + S.mod + '/home" class="bc-home">' + modName + '</a>';
            var curCat = S.tab === 'browse' ? S.catB : S.catD;
            if (curCat && curCat !== 'all' && CATS[curCat]) { var cObj = CATS[curCat], label = cObj.name; if (cObj.parent && CATS[cObj.parent]) label = CATS[cObj.parent].name + ' > ' + label; html += '<span class="sep"><i class="fa-solid fa-chevron-right"></i></span><span class="bc-cat">' + label + '</span>'; }
        }
        for (var i = 0; i < items.length; i++) { html += '<span class="sep"><i class="fa-solid fa-chevron-right"></i></span>'; if (items[i].click) html += '<a href="#" class="bc-link" data-idx="' + i + '">' + items[i].label + '</a>'; else html += '<span>' + items[i].label + '</span>'; }
        E.breadcrumb.innerHTML = html;
        var links = E.breadcrumb.querySelectorAll('.bc-link');
        for (var j = 0; j < links.length; j++) { (function(l) { l.addEventListener('click', function(e) { e.preventDefault(); var idx = parseInt(l.getAttribute('data-idx'), 10); if (items[idx] && items[idx].click) items[idx].click(); }); })(links[j]); }
    }

    function rPk() {
        var d = null; for (var x = 0; x < S.data.length; x++) if (S.data[x].id === S.sopId) { d = S.data[x]; break; }
        if (!d || !E.sectionPickerList) return;
        var cl = gc(d.category), html = '';
        if (d.sections) for (var i = 0; i < d.sections.length; i++) { var ic = SIC[d.sections[i].title] || 'fa-circle-info'; html += '<li data-idx="' + i + '"><i class="fa-solid ' + ic + '" style="color:' + cl + '"></i> ' + d.sections[i].title + '</li>'; }
        if (d.sources) html += '<li data-idx="sources"><i class="fa-solid fa-quote-right" style="color:' + cl + '"></i> Quellen</li>';
        E.sectionPickerList.innerHTML = html;
        var lis = E.sectionPickerList.querySelectorAll('li');
        for (var j = 0; j < lis.length; j++) { (function(li) { li.addEventListener('click', function() { var idx = li.getAttribute('data-idx'); cPk(); var sec = (idx === 'sources' ? E.viewSOP.querySelector('.sop-section:last-child') : E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]')); if (sec) { var bd = sec.querySelector('.sop-section-body'), tg = sec.querySelector('.sec-toggle'); if (bd) bd.classList.add('open'); if (tg) tg.classList.add('open'); sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); })(lis[j]); }
    }

    function oPk() { if (!E.sectionPickerOverlay) return; E.sectionPickerOverlay.classList.add('show'); document.body.classList.add('picker-open'); haptic('light'); }
    function cPk() { if (!E.sectionPickerOverlay) return; E.sectionPickerOverlay.classList.remove('show'); document.body.classList.remove('picker-open'); }

    function handleFabVisibility() {
        var fab = E.fabAction; if (!fab || !fab.classList.contains('show') || !E.contentScroll) return;
        var cy = E.contentScroll.scrollTop, delta = cy - lastScrollY;
        if (delta > 5 && cy > 100 && fabVisible) { fab.style.transform = 'translateY(100px) scale(0.8)'; fab.style.opacity = '0'; fabVisible = false; }
        else if (delta < -5 && !fabVisible) { fab.style.transform = 'translateY(0) scale(1)'; fab.style.opacity = '1'; fabVisible = true; }
        lastScrollY = cy;
    }

    function handlePullStart(e) { if (!E.contentScroll || E.contentScroll.scrollTop !== 0) return; pullStartY = e.touches[0].clientY; }
    function handlePullMove(e) { if (!E.contentScroll || E.contentScroll.scrollTop !== 0) return; var dy = e.touches[0].clientY - pullStartY; if (dy > 0 && dy < PTH && E.pullIndicator) { E.pullIndicator.classList.add('show'); E.pullIndicator.style.transform = 'translateX(-50%) translateY(' + (dy - 40) + 'px)'; } }
    function handlePullEnd(e) {
        var dy = (E.contentScroll && E.contentScroll.scrollTop > 0) ? 0 : (e.changedTouches ? e.changedTouches[0].clientY - pullStartY : 0);
        if (E.pullIndicator) {
            E.pullIndicator.classList.remove('show'); E.pullIndicator.style.transform = '';
            if (dy > PTH / 2) { E.pullIndicator.classList.add('spin'); haptic('medium'); setTimeout(function() { if (S.tab === 'home') rHome(); rNav(); if (S.tab === 'browse') rBrowse(); if (S.tab === 'search') rSearch(); if (S.tab === 'sop') rSOP(); if (E.pullIndicator) E.pullIndicator.classList.remove('show', 'spin'); }, 600); }
        }
    }

    function uOff() { if (E.offlineBanner) { E.offlineBanner.classList.toggle('show', S.off); if (S.off && S.ts && E.offlineTimestamp) E.offlineTimestamp.textContent = '(' + S.ts.toLocaleTimeString('de-DE') + ')'; } }

    function uSticky() {
        if (S.tab !== 'sop' || !E.stickySectionBar || !E.contentScroll || !E.viewSOP) { if (E.stickySectionBar) E.stickySectionBar.classList.remove('show'); return; }
        var secs = E.viewSOP.querySelectorAll('.sop-section'), ct = E.contentScroll.scrollTop + 80, cur = null;
        for (var i = 0; i < secs.length; i++) if (secs[i].offsetTop <= ct) cur = secs[i];
        if (cur) {
            var hd = cur.querySelector('.sop-section-head'), ti = hd ? hd.querySelector('.sec-title') : null, ic = hd ? hd.querySelector('.sec-icon') : null;
            if (ti) {
                if (E.stickySectionTitle) E.stickySectionTitle.textContent = ti.textContent; if (ic && E.stickySectionIcon) E.stickySectionIcon.className = ic.className;
                var d = null; for (var j = 0; j < S.data.length; j++) if (S.data[j].id === S.sopId) { d = S.data[j]; break; }
                if (d) { if (E.stickySopName) E.stickySopName.textContent = d.name || ''; renderSubcatMenu(d); renderStickySectionMenu(d); }
                E.stickySectionBar.classList.add('show');
            }
        } else E.stickySectionBar.classList.remove('show');
    }

    function renderStickySectionMenu(d) {
        if (!d || !E.stickySectionMenu) return;
        var html = '';
        if (d.sections) {
            for (var i = 0; i < d.sections.length; i++) {
                var title = d.sections[i].title, icon = SIC[title] || 'fa-circle-info', active = sSec === String(i);
                html += '<button class="sticky-section-item' + (active ? ' active' : '') + '" data-idx="' + i + '"><i class="fa-solid ' + icon + '"></i> ' + title + '</button>';
            }
        }
        if (d.sources) html += '<button class="sticky-section-item' + (sSec === 'sources' ? ' active' : '') + '" data-idx="sources"><i class="fa-solid fa-quote-right"></i> Quellen</button>';
        E.stickySectionMenu.innerHTML = html;
        var items = E.stickySectionMenu.querySelectorAll('.sticky-section-item');
        for (var j = 0; j < items.length; j++) {
            (function(it) {
                it.addEventListener('click', function(e) {
                    e.stopPropagation(); var idx = it.getAttribute('data-idx');
                    E.stickySectionSelector.classList.remove('open');
                    var sec = (idx === 'sources' ? E.viewSOP.querySelector('.sop-section:last-child') : E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]'));
                    if (sec) {
                        var bd = sec.querySelector('.sop-section-body'), tg = sec.querySelector('.sec-toggle');
                        if (bd) bd.classList.add('open'); if (tg) tg.classList.add('open');
                        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            })(items[j]);
        }
    }

    function renderSubcatMenu(d) {
        if (!d || !E.stickySubcatMenu) return;
        var subcats = []; for (var k in CATS) if (CATS[k].parent === d.category) subcats.push(k);
        if (subcats.length === 0) { if (E.stickySubcatBtn) E.stickySubcatBtn.style.display = 'none'; return; }
        if (E.stickySubcatBtn) E.stickySubcatBtn.style.display = 'flex';
        var html = ''; for (var i = 0; i < subcats.length; i++) { var sk = subcats[i], scl = gc(sk); html += '<button class="sticky-subcat-item" data-cat="' + sk + '">' + renderCatIcon(sk, scl, '') + ' ' + CATS[sk].name + '</button>'; }
        E.stickySubcatMenu.innerHTML = html;
        var items = E.stickySubcatMenu.querySelectorAll('.sticky-subcat-item');
        for (var j = 0; j < items.length; j++) { (function(it, sk) { it.addEventListener('click', function() { S.catB = sk; window.location.hash = '#/' + S.mod + '/browse'; }); })(items[j], subcats[j]); }
    }

    function toggleSubcatMenu() { if (!E.stickySubcatBtn || !E.stickySubcatMenu) return; E.stickySubcatBtn.classList.toggle('open'); E.stickySubcatMenu.classList.toggle('open'); }
    function toggleSectionMenu() { if (!E.stickySectionSelector) return; E.stickySectionSelector.classList.toggle('open'); }
    function dSO() { if (sObs) { sObs.disconnect(); sObs = null; } sSec = ''; }

    function iSO() {
        if (!('IntersectionObserver' in window) || !E.viewSOP || !E.contentScroll) return;
        dSO(); var secs = E.viewSOP.querySelectorAll('.sop-section'); if (secs.length === 0) return;
        sObs = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    var idx = entries[i].target.getAttribute('data-sec') || '';
                    if (idx !== sSec) { sSec = idx; if (E.sectionPickerList) { var lis = E.sectionPickerList.querySelectorAll('li'); for (var j = 0; j < lis.length; j++) lis[j].classList.toggle('active', lis[j].getAttribute('data-idx') === idx); } }
                }
            }
        }, { root: E.contentScroll, threshold: 0.2 });
        for (var k = 0; k < secs.length; k++) sObs.observe(secs[k]);
    }

    function bind() {
        if (E.themeToggle) E.themeToggle.addEventListener('click', function() { S.theme = S.theme === 'dark' ? 'light' : 'dark'; aTh(); });
        if (E.themeToggleMobile) E.themeToggleMobile.addEventListener('click', function() { S.theme = S.theme === 'dark' ? 'light' : 'dark'; aTh(); });
        if (E.searchInput) E.searchInput.addEventListener('input', function() { S.hQ = this.value; rNav(); if (E.searchClear) E.searchClear.classList.toggle('show', this.value.length > 0); });
        if (E.searchClear) E.searchClear.addEventListener('click', function() { if (E.searchInput) E.searchInput.value = ''; S.hQ = ''; rNav(); this.classList.remove('show'); if (E.searchInput) E.searchInput.focus(); });
        if (E.appLogo) E.appLogo.addEventListener('click', function(e) { e.preventDefault(); S.navStack = []; S.mod = null; S.sopId = null; window.location.hash = '#/'; });
        if (E.sidebarCatToggle) E.sidebarCatToggle.addEventListener('click', function() { S.sCatOpen = !S.sCatOpen; this.classList.toggle('open', S.sCatOpen); if (E.categoryFilters) E.categoryFilters.classList.toggle('open', S.sCatOpen); });
        if (E.searchViewInput) E.searchViewInput.addEventListener('input', function() { S.sQ = this.value; rSearch(); if (E.searchViewClear) E.searchViewClear.classList.toggle('show', this.value.length > 0); });
        if (E.searchViewClear) E.searchViewClear.addEventListener('click', function() { if (E.searchViewInput) E.searchViewInput.value = ''; S.sQ = ''; rSearch(); this.classList.remove('show'); if (E.searchViewInput) E.searchViewInput.focus(); });
        if (E.fontDecDesktop) E.fontDecDesktop.addEventListener('click', function() { cFs(-1); });
        if (E.fontIncDesktop) E.fontIncDesktop.addEventListener('click', function() { cFs(1); });
        if (E.fontDecMobile) E.fontDecMobile.addEventListener('click', function() { cFs(-1); });
        if (E.fontIncMobile) E.fontIncMobile.addEventListener('click', function() { cFs(1); });
        if (E.backBtn) E.backBtn.addEventListener('click', function() { popNav(); });
        if (E.desktopTocBtn) E.desktopTocBtn.addEventListener('click', function() { oPk(); });
        if (E.stickySubcatBtn) E.stickySubcatBtn.addEventListener('click', function(e) { e.stopPropagation(); toggleSubcatMenu(); });
        if (E.stickySectionSelector) E.stickySectionSelector.addEventListener('click', function(e) { e.stopPropagation(); toggleSectionMenu(); });
        if (E.sectionPickerBackdrop) E.sectionPickerBackdrop.addEventListener('click', function() { cPk(); });
        if (E.sectionPickerClose) E.sectionPickerClose.addEventListener('click', function() { cPk(); });
        if (E.sectionPickerPrint) E.sectionPickerPrint.addEventListener('click', function() { cPk(); setTimeout(function() { S.allO = true; rSOP(); setTimeout(function() { window.print(); S.allO = false; rSOP(); }, 300); }, 200); });
        if (E.bottomNav) { var bns = E.bottomNav.querySelectorAll('.btm-btn'); for (var i = 0; i < bns.length; i++) { (function(bn) { bn.addEventListener('click', function() { var t = bn.getAttribute('data-tab'); if (t && S.mod) window.location.hash = '#/' + S.mod + '/' + t; }); })(bns[i]); } }
        if (E.contentScroll) { E.contentScroll.addEventListener('scroll', throttle(handleFabVisibility, 100), { passive: true }); E.contentScroll.addEventListener('scroll', throttle(uSticky, 50), { passive: true }); E.contentScroll.addEventListener('touchstart', handlePullStart, { passive: true }); E.contentScroll.addEventListener('touchmove', handlePullMove, { passive: true }); E.contentScroll.addEventListener('touchend', handlePullEnd, { passive: true }); }
        window.addEventListener('online', function() { S.off = false; uOff(); });
        window.addEventListener('offline', function() { S.off = true; S.ts = new Date(); uOff(); });
        window.addEventListener('resize', function() { 
            S.mob = window.innerWidth < 1024; updateSidebarToggleVisibility();
            if (E.desktopTocBtn) E.desktopTocBtn.style.display = (window.innerWidth >= 768 && S.tab === 'sop') ? 'flex' : 'none';
            if (E.spotlightOverlay && E.spotlightOverlay.classList.contains('show')) closeSpotlight();
            if (E.sectionPickerOverlay && E.sectionPickerOverlay.classList.contains('show')) cPk();
        });
        if (E.spotlightBtn) E.spotlightBtn.addEventListener('click', openSpotlight);
        if (E.spotlightBackdrop) E.spotlightBackdrop.addEventListener('click', closeSpotlight);
        if (E.spotlightCancel) E.spotlightCancel.addEventListener('click', closeSpotlight);
        if (E.spotlightInput) E.spotlightInput.addEventListener('input', function() { S.sQ = this.value; if (E.spotlightClear) E.spotlightClear.classList.toggle('show', this.value.length > 0); renderSpotlightResults(); });
        if (E.spotlightClear) E.spotlightClear.addEventListener('click', function() { if (E.spotlightInput) { E.spotlightInput.value = ''; S.sQ = ''; this.classList.remove('show'); renderSpotlightResults(); E.spotlightInput.focus(); } });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { if (E.spotlightOverlay && E.spotlightOverlay.classList.contains('show')) closeSpotlight(); if (E.sectionPickerOverlay && E.sectionPickerOverlay.classList.contains('show')) cPk(); if (mobileSidebarOpen) closeMobileSidebar(); if (E.stickySectionSelector) E.stickySectionSelector.classList.remove('open'); if (E.stickySubcatBtn) { E.stickySubcatBtn.classList.remove('open'); E.stickySubcatMenu.classList.remove('open'); } } if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSpotlight(); } });
        if (E.sidebarToggleMobile) E.sidebarToggleMobile.addEventListener('click', function() { if (mobileSidebarOpen) closeMobileSidebar(); else openMobileSidebar(); });
        if (E.sidebarMobileClose) E.sidebarMobileClose.addEventListener('click', function() { closeMobileSidebar(); });
        if (E.sidebarMobileBackdrop) E.sidebarMobileBackdrop.addEventListener('click', function() { closeMobileSidebar(); });
        if (E.sidebarCatToggleMobile) E.sidebarCatToggleMobile.addEventListener('click', function() { S.sCatOpen = !S.sCatOpen; this.classList.toggle('open', S.sCatOpen); if (E.categoryFiltersMobile) E.categoryFiltersMobile.classList.toggle('open', S.sCatOpen); });
        if (E.searchInputMobile) E.searchInputMobile.addEventListener('input', function() { S.hQ = this.value; rNav(); if (E.searchClearMobile) E.searchClearMobile.classList.toggle('show', this.value.length > 0); });
        if (E.searchClearMobile) E.searchClearMobile.addEventListener('click', function() { if (E.searchInputMobile) E.searchInputMobile.value = ''; S.hQ = ''; rNav(); this.classList.remove('show'); if (E.searchInputMobile) E.searchInputMobile.focus(); });
        if (E.themeToggleMobileBtn) E.themeToggleMobileBtn.addEventListener('click', function() { S.theme = S.theme === 'dark' ? 'light' : 'dark'; aTh(); });
        if (E.fontDecMobileBtn) E.fontDecMobileBtn.addEventListener('click', function() { cFs(-1); });
        if (E.fontIncMobileBtn) E.fontIncMobileBtn.addEventListener('click', function() { cFs(1); });
        document.addEventListener('click', function() { if (E.stickySectionSelector) E.stickySectionSelector.classList.remove('open'); if (E.stickySubcatBtn) { E.stickySubcatBtn.classList.remove('open'); E.stickySubcatMenu.classList.remove('open'); } });
        window.addEventListener('hashchange', router);
    }

    function init() {
        cache(); lTh(); aTh(); lFs(); aFs(); initSafeAreaRuntime();
        var rawData = (window.SOP_DATA || []).concat(window.PFADE_DATA || []);
        for (var i = 0; i < rawData.length; i++) {
            var d = normSop(rawData[i]);
            if (d && d.id) {
                var exists = false;
                for (var j = 0; j < S.data.length; j++) if (S.data[j].id === d.id) { exists = true; break; }
                if (!exists) S.data.push(d);
            }
        }
        S.data.sort(function(a, b) { return (a.name || '').localeCompare(b.name || '', 'de'); });
        bind(); initSwipeGestures(); initDraggablePicker(); updateSidebarToggleVisibility();
        if (E.spotlightOverlay) E.spotlightOverlay.classList.remove('show');
        if (E.sectionPickerOverlay) E.sectionPickerOverlay.classList.remove('show');
        if (E.skeletonOverlay) E.skeletonOverlay.classList.remove('show');
        router(); if (window.location.protocol !== 'file:') setTimeout(checkForUpdate, 1000);
    }

    window.registerSOP = function(d) {
        var n = normSop(d); if (!n || !n.id) return;
        var exists = false; for (var i = 0; i < S.data.length; i++) if (S.data[i].id === n.id) { exists = true; break; }
        if (!exists) { S.data.push(n); S.data.sort(function(a, b) { return (a.name || '').localeCompare(b.name || '', 'de'); }); }
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();