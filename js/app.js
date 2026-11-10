// ==========================================================================
// ილია ჭავჭავაძე — „მგზავრის წერილები“ (1861)
// ინტერაქტიული აპლიკაციის მთავარი ლოგიკა (App Logic)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderHeroIllustrations();
    initAntiqueMap();
    initCharacterCards();
    initPhilosophyBank();
    initQuiz();
    initPedagogicalGuide();
    initAmbientAudio();
    initNavigationScroll();
    initModalEvents();
}

// ==========================================================================
// 1. ილუსტრაციების ჩატვირთვა (Illustrations Injection)
// ==========================================================================

function renderHeroIllustrations() {
    const heroTarget = document.getElementById("hero-illustration-slot");
    if (heroTarget && window.MGZAVRI_ILLUSTRATIONS) {
        heroTarget.innerHTML = window.MGZAVRI_ILLUSTRATIONS.iliaTraveler;
    }

    const landscapeTarget = document.getElementById("dariali-landscape-slot");
    if (landscapeTarget && window.MGZAVRI_ILLUSTRATIONS) {
        landscapeTarget.innerHTML = window.MGZAVRI_ILLUSTRATIONS.darialiLandscape;
    }

    const carriageTarget = document.getElementById("carriage-illustration-slot");
    if (carriageTarget && window.MGZAVRI_ILLUSTRATIONS) {
        carriageTarget.innerHTML = window.MGZAVRI_ILLUSTRATIONS.carriageGMR;
    }
}

// ==========================================================================
// 2. ანტიკვარული რუკის გენერაცია და ინტერაქცია (Interactive Antique Map)
// ==========================================================================

let currentActiveStationId = "vladikavkaz";

function initAntiqueMap() {
    const mapContainer = document.getElementById("antique-map-svg-container");
    if (!mapContainer) return;

    // ვხატავთ XIX საუკუნის სტილის SVG რუკას
    mapContainer.innerHTML = generateMilitaryRoadSVG();

    // ვაკავშირებთ ივენთებს რუკის პუნქტებზე
    setupMapInteractions();

    // გამოვსახავთ საწყის პუნქტს (ვლადიკავკაზი)
    displayStationDetails(currentActiveStationId);

    // ვაგენერირებთ ქვედა ტაიმლაინის ღილაკებს
    renderRouteTimelineButtons();
}

function generateMilitaryRoadSVG() {
    // 600x750 ანტიკვარული კარტოგრაფიული SVG
    return `
    <svg viewBox="0 0 600 750" class="military-road-svg" id="military-road-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <!-- რელიეფის შტრიხები -->
            <pattern id="contour-hatch" width="12" height="6" patternTransform="rotate(25)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="3" x2="12" y2="3" stroke="#2b1e16" stroke-width="0.5" stroke-opacity="0.25"/>
            </pattern>
            <pattern id="forest-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 5 1 L 2 8 L 8 8 Z" fill="#2d4f33" fill-opacity="0.2"/>
            </pattern>
            <!-- გზის პუნქტირების შტრიხი -->
            <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
        </defs>

        <!-- ძველი რუკის ფონი და ჩარჩო -->
        <rect width="600" height="750" fill="#f6eedc"/>
        <rect x="15" y="15" width="570" height="720" fill="none" stroke="#2b1e16" stroke-width="2.5"/>
        <rect x="22" y="22" width="556" height="706" fill="none" stroke="#a37c3f" stroke-width="0.8" stroke-dasharray="6,3"/>

        <!-- გეოგრაფიული მერიდიანები / კოორდინატთა ბადე -->
        <g stroke="#2b1e16" stroke-width="0.4" stroke-opacity="0.15">
            <line x1="22" y1="150" x2="578" y2="150"/>
            <line x1="22" y1="300" x2="578" y2="300"/>
            <line x1="22" y1="450" x2="578" y2="450"/>
            <line x1="22" y1="600" x2="578" y2="600"/>
            <line x1="150" y1="22" x2="150" y2="728"/>
            <line x1="300" y1="22" x2="300" y2="728"/>
            <line x1="450" y1="22" x2="450" y2="728"/>
        </g>

        <!-- კავკასიონის მთავარი ქედის მთათა მასივები (Hatched Mountain Relief) -->
        <!-- ჩრდილოეთის მთები (კავკავი - ლარსი) -->
        <g fill="#ebd8b5" stroke="#2b1e16" stroke-width="0.8">
            <!-- მარცხენა კლდეები -->
            <polygon points="40,240 100,160 180,240 120,270 40,240"/>
            <polygon points="70,180 130,120 190,190"/>
            <polygon points="120,260 200,180 250,270"/>
            <!-- მარჯვენა კლდეები -->
            <polygon points="360,260 420,170 490,260"/>
            <polygon points="430,210 490,130 550,220"/>
            <polygon points="470,250 530,180 570,250"/>
        </g>

        <!-- ცენტრალური კავკასიონი & მყინვარწვერი (5,047 მ) -->
        <g>
            <!-- მყინვარწვერის მასივი -->
            <polygon points="140,360 210,240 280,360" fill="#ffffff" stroke="#2b1e16" stroke-width="1.8"/>
            <polygon points="180,280 210,240 250,280" fill="#fdfcf8"/>
            <polygon points="210,240 280,360 240,360" fill="url(#contour-hatch)"/>
            <text x="210" y="232" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#8c6227" text-anchor="middle">მყინვარწვერი (5,047 მ)</text>

            <!-- ჯვრის უღელტეხილი (2,379 მ) -->
            <path d="M 285 410 L 320 410" stroke="#8a2522" stroke-width="2.5"/>
            <path d="M 302 398 L 302 422" stroke="#8a2522" stroke-width="2.5"/>
            <text x="345" y="414" font-family="'Noto Serif Georgian', serif" font-size="9" font-weight="bold" fill="#8a2522">ჯვრის უღელტეხილი (2,379 მ)</text>
        </g>

        <!-- სამხრეთის ქედები (ფასანაური - დუშეთი - მცხეთა) -->
        <g fill="#ebd8b5" stroke="#2b1e16" stroke-width="0.8">
            <polygon points="70,520 140,430 220,530"/>
            <polygon points="160,540 230,460 290,550"/>
            <polygon points="360,530 430,450 510,540"/>
            <polygon points="40,650 110,580 180,660"/>
            <polygon points="370,660 450,570 530,670"/>
        </g>

        <!-- მდინარე თერგი (მიედინება ჩრდილოეთისკენ კასპიის ზღვისკენ) -->
        <g>
            <path d="M 310 400 Q 300 320 315 250 Q 325 180 305 110 Q 295 70 290 35" fill="none" stroke="#26555c" stroke-width="4.5" stroke-linecap="round"/>
            <!-- თერგის ჩქერალები -->
            <path d="M 308 260 Q 318 250 328 260 M 315 190 Q 325 180 335 190" stroke="#ffffff" stroke-width="1.5" fill="none"/>
            <text x="335" y="175" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#26555c" font-style="italic">მდ. თერგი ➔</text>
        </g>

        <!-- მდინარე არაგვი (მიედინება სამხრეთისკენ მტკვრისკენ) -->
        <g>
            <path d="M 315 410 Q 330 470 310 520 Q 290 570 320 620 Q 335 650 330 680" fill="none" stroke="#366b73" stroke-width="4" stroke-linecap="round"/>
            <text x="345" y="555" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#366b73" font-style="italic">მდ. არაგვი ➔</text>
        </g>

        <!-- მდინარე მტკვარი (მცხეთასთან და თბილისთან) -->
        <path d="M 180 670 Q 280 675 330 680 Q 420 690 540 710" fill="none" stroke="#2d5257" stroke-width="5" stroke-linecap="round"/>
        <text x="450" y="695" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#2d5257" font-style="italic">მდ. მტკვარი ➔</text>

        <!-- საქართველოს სამხედრო გზა (Military Road Route) -->
        <path id="route-path-line" d="M 300 90 L 305 130 L 295 180 L 320 250 L 310 320 L 315 410 L 300 480 L 310 540 L 325 610 L 330 675 L 375 700" 
              fill="none" stroke="#8c6227" stroke-width="4.5" stroke-dasharray="8,5" stroke-linecap="round"/>
        <path d="M 300 90 L 305 130 L 295 180 L 320 250 L 310 320 L 315 410 L 300 480 L 310 540 L 325 610 L 330 675 L 375 700" 
              fill="none" stroke="#2b1e16" stroke-width="1.2" stroke-linecap="round"/>

        <!-- ქარის ვარდი / Compass Rose -->
        <g transform="translate(90, 95)">
            <circle cx="0" cy="0" r="32" fill="#fdfbf5" stroke="#2b1e16" stroke-width="1.2"/>
            <circle cx="0" cy="0" r="28" fill="none" stroke="#a37c3f" stroke-width="0.8" stroke-dasharray="2,2"/>
            <!-- ჩრდილოეთის ისარი -->
            <polygon points="0,-26 6,-6 0,0" fill="#8a2522"/>
            <polygon points="0,-26 -6,-6 0,0" fill="#2b1e16"/>
            <!-- სამხრეთის ისარი -->
            <polygon points="0,26 6,6 0,0" fill="#a37c3f"/>
            <polygon points="0,26 -6,6 0,0" fill="#f6eedc"/>
            <!-- აღმოსავლეთი/დასავლეთი -->
            <polygon points="26,0 6,6 0,0" fill="#a37c3f"/>
            <polygon points="-26,0 -6,-6 0,0" fill="#2b1e16"/>
            <!-- ასოები -->
            <text x="0" y="-30" font-family="'Noto Serif Georgian', serif" font-size="11" font-weight="bold" fill="#8a2522" text-anchor="middle">ჩ (N)</text>
            <text x="0" y="40" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#2b1e16" text-anchor="middle">ს (S)</text>
            <text x="36" y="4" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#2b1e16">ა (E)</text>
            <text x="-44" y="4" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#2b1e16">დ (W)</text>
        </g>

        <!-- მასშტაბის ხაზი (Scale Bar) -->
        <g transform="translate(420, 50)">
            <rect width="130" height="20" fill="#fdfaf3" stroke="#2b1e16" stroke-width="1"/>
            <rect x="0" y="0" width="32.5" height="10" fill="#2b1e16"/>
            <rect x="32.5" y="10" width="32.5" height="10" fill="#2b1e16"/>
            <rect x="65" y="0" width="32.5" height="10" fill="#2b1e16"/>
            <rect x="97.5" y="10" width="32.5" height="10" fill="#2b1e16"/>
            <text x="65" y="32" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#2b1e16" text-anchor="middle">მასშტაბი: 1 ვერსტი ≈ 1.06 კმ</text>
        </g>

        <!-- რუკის სათაურის ბანერი -->
        <g transform="translate(200, 35)">
            <rect x="-10" y="-12" width="220" height="26" fill="#f5ede0" stroke="#2b1e16" stroke-width="1.2"/>
            <text x="100" y="5" font-family="'Noto Serif Georgian', serif" font-size="10.5" font-weight="bold" fill="#2b1e16" text-anchor="middle" letter-spacing="1">საქართველოს სამხედრო გზა</text>
        </g>

        <!-- ======================================================= -->
        <!-- 5 ძირითადი მარშრუტის პუნქტი (Interactive Waypoint Pins) -->
        <!-- ======================================================= -->

        <!-- 1. ვლადიკავკაზი (Vladikavkaz) -->
        <g class="map-waypoint" id="pin-vladikavkaz" data-station="vladikavkaz" transform="translate(300, 90)">
            <circle class="pin-pulse" cx="0" cy="0" r="14" fill="#a37c3f" fill-opacity="0.25" stroke="#a37c3f" stroke-width="1.5"/>
            <circle cx="0" cy="0" r="9" fill="#8a2522" stroke="#fdfbf5" stroke-width="2"/>
            <circle cx="0" cy="0" r="3" fill="#fdfbf5"/>
            <text class="waypoint-label" x="18" y="4">I. ვლადიკავკაზი (კავკავი)</text>
            <text x="18" y="16" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#6d5849">670 მ / სტარტი</text>
        </g>

        <!-- 2. ლარსის ხეობა & თერგი (Larsi) -->
        <g class="map-waypoint" id="pin-larsi" data-station="larsi" transform="translate(320, 245)">
            <circle class="pin-pulse" cx="0" cy="0" r="14" fill="#26555c" fill-opacity="0.25" stroke="#26555c" stroke-width="1.5"/>
            <circle cx="0" cy="0" r="9" fill="#26555c" stroke="#fdfbf5" stroke-width="2"/>
            <circle cx="0" cy="0" r="3" fill="#fdfbf5"/>
            <text class="waypoint-label" x="18" y="4">II. ლარსის ხეობა & თერგი</text>
            <text x="18" y="16" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#6d5849">1,150 მ / 30 კმ</text>
        </g>

        <!-- 3. დარიალი და ყაზბეგი (Dariali & Kazbegi) -->
        <g class="map-waypoint" id="pin-dariali" data-station="dariali" transform="translate(310, 335)">
            <circle class="pin-pulse" cx="0" cy="0" r="14" fill="#a37c3f" fill-opacity="0.25" stroke="#a37c3f" stroke-width="1.5"/>
            <circle cx="0" cy="0" r="10" fill="#7a5824" stroke="#fdfbf5" stroke-width="2"/>
            <circle cx="0" cy="0" r="4" fill="#fdfbf5"/>
            <text class="waypoint-label" x="-15" y="-12" text-anchor="end">III. დარიალი & ყაზბეგი</text>
            <text x="-15" y="0" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#6d5849" text-anchor="end">ლელო თათარაშვილი</text>
        </g>

        <!-- 4. ფასანაური & დუშეთი (Pasanauri & Dusheti) -->
        <g class="map-waypoint" id="pin-pasanauri" data-station="pasanauri" transform="translate(310, 535)">
            <circle class="pin-pulse" cx="0" cy="0" r="14" fill="#a37c3f" fill-opacity="0.25" stroke="#a37c3f" stroke-width="1.5"/>
            <circle cx="0" cy="0" r="9" fill="#8c6227" stroke="#fdfbf5" stroke-width="2"/>
            <circle cx="0" cy="0" r="3" fill="#fdfbf5"/>
            <text class="waypoint-label" x="18" y="4">IV. ფასანაური & დუშეთი</text>
            <text x="18" y="16" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#6d5849">1,050 მ / ბარში დაშვება</text>
        </g>

        <!-- 5. მცხეთა & თბილისი (Mtskheta & Tbilisi) -->
        <g class="map-waypoint" id="pin-tbilisi" data-station="tbilisi" transform="translate(375, 700)">
            <circle class="pin-pulse" cx="0" cy="0" r="16" fill="#8a2522" fill-opacity="0.25" stroke="#8a2522" stroke-width="1.5"/>
            <circle cx="0" cy="0" r="11" fill="#8a2522" stroke="#fdfbf5" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="4" fill="#fdfbf5"/>
            <text class="waypoint-label" x="-18" y="4" text-anchor="end">V. მცხეთა & თბილისი</text>
            <text x="-18" y="16" font-family="'Noto Serif Georgian', serif" font-size="9" fill="#6d5849" text-anchor="end">ფინიში / ახალი ეპოქა</text>
        </g>
    </svg>
    `;
}

function setupMapInteractions() {
    const pins = document.querySelectorAll(".map-waypoint");
    pins.forEach(pin => {
        pin.addEventListener("click", () => {
            const stationId = pin.getAttribute("data-station");
            if (stationId) {
                selectStation(stationId);
            }
        });
    });
}

function selectStation(stationId) {
    currentActiveStationId = stationId;

    // განვაახლოთ პინების აქტიური კლასები
    document.querySelectorAll(".map-waypoint").forEach(pin => {
        pin.classList.remove("active");
    });
    const activePin = document.getElementById(`pin-${stationId}`);
    if (activePin) activePin.classList.add("active");

    // განვაახლოთ ქვედა ტაიმლაინის ღილაკები
    document.querySelectorAll(".timeline-step-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-station") === stationId);
    });

    // განვაახლოთ დეტალების პანელი
    displayStationDetails(stationId);
}

function displayStationDetails(stationId) {
    const station = window.MGZAVRI_DATA.routePoints.find(p => p.id === stationId);
    if (!station) return;

    const panel = document.getElementById("station-details-panel");
    if (!panel) return;

    panel.innerHTML = `
        <span class="panel-station-tag">${station.badge}</span>
        <h3 class="panel-station-title">${station.title}</h3>
        <div class="panel-station-subtitle">${station.subtitle}</div>

        <div class="station-meta-list">
            <div class="station-meta-item">
                <i class="fa-solid fa-mountain"></i>
                <div>სიმაღლე: <strong>${station.elevation}</strong></div>
            </div>
            <div class="station-meta-item">
                <i class="fa-solid fa-route"></i>
                <div>მანძილი: <strong>${station.distance}</strong></div>
            </div>
            <div class="station-meta-item">
                <i class="fa-solid fa-book-open"></i>
                <div>თავი: <strong>${station.chapterRef}</strong></div>
            </div>
            <div class="station-meta-item">
                <i class="fa-solid fa-location-dot"></i>
                <div>ადგილი: <strong>${station.geoName}</strong></div>
            </div>
        </div>

        <div class="station-quote-box">
            <i class="fa-solid fa-quote-left"></i>
            <p>${station.quote}</p>
        </div>

        <div class="station-text-body">
            <p class="drop-cap">${station.historicalContext}</p>
        </div>

        <div class="station-themes-title">საკვანძო იდეური თემები:</div>
        <ul class="station-themes-list">
            ${station.keyThemes.map(t => `<li>${t}</li>`).join("")}
        </ul>

        <button class="dialogue-modal-trigger-btn" onclick="openDialogueModal('${station.id}')">
            <i class="fa-solid fa-scroll"></i>
            დიალოგისა და იდეური ანალიზის სრული ნახვა
        </button>
    `;
}

function renderRouteTimelineButtons() {
    const timelineNav = document.getElementById("route-timeline-nav");
    if (!timelineNav) return;

    timelineNav.innerHTML = window.MGZAVRI_DATA.routePoints.map((p, index) => `
        <button class="timeline-step-btn ${p.id === currentActiveStationId ? 'active' : ''}" 
                data-station="${p.id}" 
                onclick="selectStation('${p.id}')">
            ${index + 1}. ${p.title.split(" ")[0]}
        </button>
    `).join("");
}

// ==========================================================================
// 3. პერსონაჟთა ტრიადა (Characters Triad)
// ==========================================================================

function initCharacterCards() {
    const grid = document.getElementById("characters-cards-grid");
    if (!grid) return;

    const illMap = {
        ilia: window.MGZAVRI_ILLUSTRATIONS.iliaTraveler,
        officer: window.MGZAVRI_ILLUSTRATIONS.russianOfficer,
        lelo: window.MGZAVRI_ILLUSTRATIONS.leloTatarashvili
    };

    grid.innerHTML = window.MGZAVRI_DATA.characters.map(c => `
        <div class="character-card">
            <div class="character-card-illustration">
                ${illMap[c.id] || ""}
            </div>
            <div class="character-card-body">
                <span class="character-role-tag">${c.role}</span>
                <h3 class="character-name">${c.name}</h3>
                <div class="character-archetype">${c.archetype} (${c.generation})</div>

                <p>${c.description}</p>

                <div class="character-details-list">
                    <div class="character-detail-row">
                        <strong>იდეოლოგია & მსოფლმხედველობა:</strong>
                        ${c.ideology}
                    </div>
                    <div class="character-detail-row">
                        <strong>დამოკიდებულება სამშობლოსადმი:</strong>
                        ${c.viewOnHomeland}
                    </div>
                    <div class="character-detail-row">
                        <strong>სიმბოლური მნიშვნელობა:</strong>
                        ${c.symbolism}
                    </div>
                </div>

                <div class="character-quote-box">
                    ${c.keyQuote}
                </div>
            </div>
        </div>
    `).join("");

    renderComparisonTable();
}

function renderComparisonTable() {
    const tableContainer = document.getElementById("comparison-table-slot");
    if (!tableContainer) return;

    const chars = window.MGZAVRI_DATA.characters;
    const criteria = [
        { name: "თაობა და სტატუსი", key: "generation" },
        { name: "მსოფლმხედველობა", key: "ideology" },
        { name: "სამშობლოს აღქმა", key: "viewOnHomeland" },
        { name: "მოქმედების ფორმულა", key: "actionFormula" },
        { name: "მხატვრული სიმბოლიკა", key: "symbolism" }
    ];

    tableContainer.innerHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>კრიტერიუმი</th>
                    ${chars.map(c => `<th>${c.name}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${criteria.map(crit => `
                    <tr>
                        <td class="criterion-col">${crit.name}</td>
                        ${chars.map(c => `<td>${c[crit.key]}</td>`).join("")}
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

// ==========================================================================
// 4. მოძრაობა vs უძრაობა — ციტატების ბანკი (Philosophy Bank)
// ==========================================================================

let activeQuoteIndex = 0;

function initPhilosophyBank() {
    const tabsContainer = document.getElementById("quote-bank-tabs");
    if (!tabsContainer) return;

    const quotes = window.MGZAVRI_DATA.philosophyBank;

    tabsContainer.innerHTML = quotes.map((q, idx) => `
        <button class="quote-tab-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuoteTab(${idx})">
            ${idx + 1}. ${q.concept}
        </button>
    `).join("");

    displayQuoteCard(0);
}

function selectQuoteTab(index) {
    activeQuoteIndex = index;
    document.querySelectorAll(".quote-tab-btn").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === index);
    });
    displayQuoteCard(index);
}

function displayQuoteCard(index) {
    const quote = window.MGZAVRI_DATA.philosophyBank[index];
    const displaySlot = document.getElementById("quote-display-slot");
    if (!displaySlot || !quote) return;

    displaySlot.innerHTML = `
        <div class="quote-display-card">
            <span class="quote-card-badge">${quote.category}</span>
            <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">${quote.title}</h3>
            
            <div class="quote-main-text">
                ${quote.quote}
            </div>

            <div class="quote-meta-bar">
                <span><i class="fa-solid fa-bookmark" style="color: var(--gold-dark); margin-right: 0.4rem;"></i> წყარო: <strong>${quote.source}</strong></span>
                <span><i class="fa-solid fa-feather-pointed" style="color: var(--gold-dark); margin-right: 0.4rem;"></i> ილია ჭავჭავაძე</span>
            </div>

            <div class="quote-deep-analysis">
                <h4><i class="fa-solid fa-lightbulb" style="color: var(--gold-dark);"></i> იდეური & ფილოსოფიური ანალიზი:</h4>
                <p>${quote.analysis}</p>
            </div>
        </div>
    `;
}

// ==========================================================================
// 5. ინტერაქტიული ქვიზი (Interactive Quiz Engine)
// ==========================================================================

let quizState = {
    currentIndex: 0,
    score: 0,
    answered: false,
    userAnswers: []
};

function initQuiz() {
    renderQuizQuestion(0);
}

function renderQuizQuestion(index) {
    const container = document.getElementById("quiz-card-slot");
    if (!container) return;

    const questions = window.MGZAVRI_DATA.quizQuestions;
    if (index >= questions.length) {
        showQuizResults();
        return;
    }

    const q = questions[index];
    quizState.answered = false;

    // პროგრესის განახლება
    const progressFill = document.getElementById("quiz-progress-fill");
    const progressText = document.getElementById("quiz-progress-text-display");
    if (progressFill && progressText) {
        const percent = ((index) / questions.length) * 100;
        progressFill.style.width = `${percent}%`;
        progressText.innerText = `კითხვა ${index + 1} / ${questions.length}`;
    }

    const letters = ["ა", "ბ", "გ", "დ"];

    container.innerHTML = `
        <div class="quiz-question-card active">
            <h3 class="question-text">${index + 1}. ${q.question}</h3>
            <ul class="options-list">
                ${q.options.map((opt, i) => `
                    <li>
                        <button class="quiz-option-btn" id="option-btn-${i}" onclick="handleOptionSelect(${i})">
                            <span class="option-letter">${letters[i]}</span>
                            <span>${opt}</span>
                        </button>
                    </li>
                `).join("")}
            </ul>

            <div class="quiz-feedback-box" id="quiz-feedback-box">
                <div class="quiz-feedback-title" id="quiz-feedback-title"></div>
                <p class="quiz-feedback-explanation" id="quiz-feedback-explanation"></p>
            </div>

            <div class="quiz-nav-actions" id="quiz-actions" style="display: none;">
                <button class="btn-primary" onclick="goToNextQuestion()">
                    ${index + 1 === questions.length ? 'შედეგების ნახვა' : 'შემდეგი კითხვა'}
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

function handleOptionSelect(selectedIndex) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = window.MGZAVRI_DATA.quizQuestions[quizState.currentIndex];
    const isCorrect = (selectedIndex === q.correctIndex);

    if (isCorrect) {
        quizState.score++;
    }

    // მონიშვნა ოფციებზე
    document.querySelectorAll(".quiz-option-btn").forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
            btn.classList.add("correct");
        } else if (idx === selectedIndex && !isCorrect) {
            btn.classList.add("wrong");
        }
    });

    // უკუკავშირის ბოქსი
    const feedbackBox = document.getElementById("quiz-feedback-box");
    const feedbackTitle = document.getElementById("quiz-feedback-title");
    const feedbackExp = document.getElementById("quiz-feedback-explanation");
    const actionsBox = document.getElementById("quiz-actions");

    if (feedbackBox && feedbackTitle && feedbackExp) {
        feedbackBox.classList.add("visible");
        if (isCorrect) {
            feedbackTitle.className = "quiz-feedback-title correct";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check"></i> სწორი პასუხია! შესანიშნავია!`;
        } else {
            feedbackTitle.className = "quiz-feedback-title wrong";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> პასუხი არასწორია.`;
        }
        feedbackExp.innerText = q.explanation;
    }

    if (actionsBox) actionsBox.style.display = "flex";
}

function goToNextQuestion() {
    quizState.currentIndex++;
    renderQuizQuestion(quizState.currentIndex);
}

function showQuizResults() {
    const container = document.getElementById("quiz-card-slot");
    if (!container) return;

    const total = window.MGZAVRI_DATA.quizQuestions.length;
    const score = quizState.score;
    const percent = Math.round((score / total) * 100);

    let evaluation = "";
    if (percent >= 85) {
        evaluation = "ბრწყინვალე შედეგი! თქვენ ნამდვილი „თერგდალეული“ ხართ — ღრმად ფლობთ ილია ჭავჭავაძის იდეებს, ისტორიულ კონტექსტსა და მხატვრულ სიმბოლიკას!";
    } else if (percent >= 60) {
        evaluation = "კარგი შედეგი! თქვენ კარგად ერკვევით ნაწარმოების ძირითად თემებში, თუმცა დეტალების გადამეორება კიდევ უფრო გააღრმავებს თქვენს ცოდნას.";
    } else {
        evaluation = "გირჩევთ, თავიდან გადაიკითხოთ „მგზავრის წერილების“ თავები და ყურადღება მიაქციოთ თერგისა და მყინვარის სიმბოლიზმს.";
    }

    container.innerHTML = `
        <div class="quiz-result-screen active">
            <div class="result-score-circle">
                <span class="score-number">${score}</span>
                <span class="score-max">${total}-დან (${percent}%)</span>
            </div>

            <h3 class="result-title">ტესტირება დასრულებულია!</h3>
            <p class="result-message">${evaluation}</p>

            <!-- Certificate Generator -->
            <div class="certificate-frame" id="certificate-print-area">
                <div class="certificate-seal">
                    <i class="fa-solid fa-feather-pointed"></i>
                </div>
                <h4 class="certificate-title">თერგდალეულის საპატიო სიგელი</h4>
                <p>ეს სერტიფიკატი ადასტურებს, რომ</p>
                <div class="certificate-recipient" id="certificate-user-name">მოსწავლე / მკითხველი</div>
                <p class="certificate-text">
                    წარმატებით გაიარა ილია ჭავჭავაძის უკვდავი ნაწარმოების <strong>„მგზავრის წერილების“</strong> სიღრმისეული საგანმანათლებლო კურსი (${percent}%).
                </p>
                <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: #8c7360; border-top: 1px solid #c4b598; padding-top: 0.5rem;">
                    <span>თარიღი: 1861 - დღემდე</span>
                    <span>ჟურნალი „საქართველოს მოამბე“</span>
                </div>
            </div>

            <div style="margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                <input type="text" id="user-name-input" placeholder="შეიყვანეთ თქვენი სახელი და გვარი" 
                       style="padding: 0.65rem 1rem; border: 1.5px solid var(--ink-dark); font-family: inherit; font-size: 0.95rem; border-radius: 2px; width: 280px;"
                       oninput="updateCertificateName(this.value)">
                <button class="btn-primary" onclick="restartQuiz()">
                    <i class="fa-solid fa-rotate-left"></i> ტესტის თავიდან გავლა
                </button>
            </div>
        </div>
    `;
}

function updateCertificateName(name) {
    const el = document.getElementById("certificate-user-name");
    if (el) {
        el.innerText = name.trim() ? name : "მოსწავლე / მკითხველი";
    }
}

function restartQuiz() {
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.answered = false;
    renderQuizQuestion(0);
}

// ==========================================================================
// 6. პედაგოგის კუთხე & სადისკუსიო საკითხები
// ==========================================================================

function initPedagogicalGuide() {
    const guide = window.MGZAVRI_DATA.pedagogicalGuide;
    const discussionsContainer = document.getElementById("pedagogy-discussions-slot");
    const essaysContainer = document.getElementById("pedagogy-essays-slot");

    if (discussionsContainer) {
        discussionsContainer.innerHTML = guide.discussionTopics.map((item, idx) => `
            <div class="pedagogy-accordion-item">
                <div class="accordion-title">
                    <i class="fa-solid fa-comments" style="color: var(--gold-dark); margin-right: 0.4rem;"></i>
                    ${idx + 1}. ${item.title}
                </div>
                <p class="accordion-body">${item.prompt}</p>
            </div>
        `).join("");
    }

    if (essaysContainer) {
        essaysContainer.innerHTML = `
            <ul style="list-style: none; padding-left: 0;">
                ${guide.essayPrompts.map((topic, i) => `
                    <li style="padding: 0.6rem 0; border-bottom: 1px dashed var(--border-soft); font-size: 0.92rem;">
                        <i class="fa-solid fa-pen-nib" style="color: var(--gold-dark); margin-right: 0.5rem;"></i>
                        <strong>თემა ${i + 1}:</strong> „${topic}“
                    </li>
                `).join("")}
            </ul>
            <div style="margin-top: 1.5rem; background-color: var(--bg-card); padding: 1rem; border-left: 3px solid var(--forest-green); font-size: 0.88rem;">
                <strong>სასწავლო მიზნები & კომპეტენციები:</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
                    ${guide.learningOutcomes.map(o => `<li>${o}</li>`).join("")}
                </ul>
            </div>
        `;
    }
}

// ==========================================================================
// 7. მოდალური ფანჯარა: დიალოგები და დეტალები
// ==========================================================================

function openDialogueModal(stationId) {
    const station = window.MGZAVRI_DATA.routePoints.find(p => p.id === stationId);
    if (!station) return;

    const modal = document.getElementById("dialogue-modal");
    const content = document.getElementById("dialogue-modal-body");
    if (!modal || !content) return;

    content.innerHTML = `
        <span class="modal-badge">${station.badge}</span>
        <h2 class="modal-title">${station.title}</h2>
        <div class="modal-subtitle">${station.subtitle}</div>
        
        <div class="ornate-divider">❧ ⚜ ☙</div>

        <div class="dialogue-script-box">
            <h4 style="margin-bottom: 0.75rem; color: var(--tergi-cyan);">
                <i class="fa-solid fa-comment-dots"></i> ${station.dialogueSnippet.speakers}:
            </h4>
            <div style="white-space: pre-line; font-size: 1.02rem;">
                ${station.dialogueSnippet.text}
            </div>
        </div>

        <div class="quote-deep-analysis" style="margin-bottom: 1.5rem;">
            <h4><i class="fa-solid fa-graduation-cap" style="color: var(--gold-dark);"></i> იდეურ-მხატვრული ანალიზი:</h4>
            <p>${station.dialogueSnippet.analysis}</p>
        </div>

        <div style="background-color: var(--bg-card); padding: 1rem; border: 1px solid var(--border-soft); font-size: 0.9rem;">
            <strong>ციტატა ნაწარმოებიდან:</strong>
            <p style="font-style: italic; margin-top: 0.4rem; margin-bottom: 0;">${station.quote}</p>
        </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("dialogue-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function initModalEvents() {
    const modal = document.getElementById("dialogue-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

// ==========================================================================
// 8. აუდიო ატმოსფერო: თერგის ხმაური & ნიავი (Web Audio API Synthesis)
// ==========================================================================

let audioCtx = null;
let noiseNode = null;
let isAudioPlaying = false;
let gainNode = null;

function initAmbientAudio() {
    const btn = document.getElementById("ambient-audio-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
        toggleAmbientAudio();
    });
}

function toggleAmbientAudio() {
    const btn = document.getElementById("ambient-audio-toggle");
    if (!isAudioPlaying) {
        startTergiSound();
        isAudioPlaying = true;
        if (btn) {
            btn.classList.add("playing");
            btn.innerHTML = `<i class="fa-solid fa-water"></i> თერგი ხმაურობს (გამორთვა)`;
        }
    } else {
        stopTergiSound();
        isAudioPlaying = false;
        if (btn) {
            btn.classList.remove("playing");
            btn.innerHTML = `<i class="fa-solid fa-water"></i> მოუსმინე თერგის ხმაურს`;
        }
    }
}

function startTergiSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();

        // ვაგენერირებთ 5 წამიან ბუფერს თეთრი/ვარდისფერი ხმაურით
        const bufferSize = audioCtx.sampleRate * 5;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            // ვარდისფერი/ყავისფერი ხმაურის ფილტრაცია მთის ჩქერალის სიმულაციისთვის
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = data[i];
            data[i] *= 3.5;
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        // Bandpass ფილტრი წყლის ნაკადისთვის
        const bandpass = audioCtx.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.frequency.value = 450;
        bandpass.Q.value = 0.8;

        // Lowpass ფილტრი ღრმა ბუბუნისთვის
        const lowpass = audioCtx.createBiquadFilter();
        lowpass.type = "lowpass";
        lowpass.frequency.value = 800;

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 2);

        noiseNode.connect(bandpass);
        bandpass.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        noiseNode.start();
    } catch (err) {
        console.warn("Web Audio API not supported or blocked by policy", err);
    }
}

function stopTergiSound() {
    if (gainNode && audioCtx) {
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        setTimeout(() => {
            if (noiseNode) {
                try { noiseNode.stop(); } catch(e){}
            }
            if (audioCtx) {
                try { audioCtx.close(); } catch(e){}
            }
        }, 1000);
    }
}

// ==========================================================================
// 9. ნავიგაციის სქროლი & აქტიური ლინკები
// ==========================================================================

function initNavigationScroll() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// გლობალური ექსპორტი ღილაკების ფუნქციონირებისთვის
window.selectStation = selectStation;
window.selectQuoteTab = selectQuoteTab;
window.handleOptionSelect = handleOptionSelect;
window.goToNextQuestion = goToNextQuestion;
window.restartQuiz = restartQuiz;
window.updateCertificateName = updateCertificateName;
window.openDialogueModal = openDialogueModal;
window.closeModal = closeModal;
