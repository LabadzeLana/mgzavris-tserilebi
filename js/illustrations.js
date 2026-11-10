// ==========================================================================
// XIX საუკუნის გრავურისა და ხის კვეთის (Woodcut / Engraving) სტილის ილუსტრაციები
// ==========================================================================

const MGZAVRI_ILLUSTRATIONS = {
    // 1. ილია ჭავჭავაძე - მგზავრი (24 წლის, პეტერბურგიდან დაბრუნებული)
    iliaTraveler: `
    <svg viewBox="0 0 400 480" class="engraving-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="paper-etch">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.94  0 0 0 0 0.91  0 0 0 0 0.83  0 0 0 1 0" result="color"/>
                <feComposite in2="noise" in="SourceGraphic" operator="arithmetic" k1="0" k2="1" k3="0.05" k4="0"/>
            </filter>
            <pattern id="hatch-diagonal" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#2b1e16" stroke-width="1" stroke-opacity="0.35"/>
            </pattern>
            <pattern id="hatch-cross" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#2b1e16" stroke-width="0.8" stroke-opacity="0.3"/>
                <line x1="0" y1="0" x2="6" y2="0" stroke="#2b1e16" stroke-width="0.8" stroke-opacity="0.3"/>
            </pattern>
        </defs>
        <!-- Background Frame -->
        <rect width="400" height="480" fill="#f5ede0"/>
        <rect x="12" y="12" width="376" height="456" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <rect x="18" y="18" width="364" height="444" fill="none" stroke="#a37c3f" stroke-width="0.8" stroke-dasharray="4,2"/>
        <!-- Corner flourishes -->
        <path d="M 12 30 Q 30 30 30 12" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <path d="M 388 30 Q 370 30 370 12" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <path d="M 12 450 Q 30 450 30 468" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <path d="M 388 450 Q 370 450 370 468" fill="none" stroke="#2b1e16" stroke-width="2"/>

        <!-- Vignette oval -->
        <ellipse cx="200" cy="220" rx="145" ry="175" fill="#fbf7ee" stroke="#2b1e16" stroke-width="1.5"/>
        <ellipse cx="200" cy="220" rx="140" ry="170" fill="none" stroke="#a37c3f" stroke-width="0.75" stroke-dasharray="3,3"/>

        <!-- Engraving Art: Ilia Chavchavadze -->
        <g stroke="#2b1e16" stroke-linecap="round" stroke-linejoin="round">
            <!-- Overcoat & Torso -->
            <path d="M 110 390 C 120 310, 145 280, 175 270 L 225 270 C 255 280, 280 310, 290 390 Z" fill="#3c2f2f" stroke-width="2"/>
            <!-- Hatching on coat -->
            <path d="M 115 390 C 125 320, 145 290, 175 275 L 225 275 C 255 290, 275 320, 285 390 Z" fill="url(#hatch-diagonal)"/>
            <!-- Coat Collar & Lapels -->
            <path d="M 165 270 L 140 330 L 185 340 L 195 280" fill="#231710" stroke-width="1.5"/>
            <path d="M 235 270 L 260 330 L 215 340 L 205 280" fill="#231710" stroke-width="1.5"/>
            <!-- Scarf & Shirt Collar -->
            <path d="M 185 270 L 200 300 L 215 270 L 205 250 L 195 250 Z" fill="#e8dcbf" stroke-width="1.2"/>
            <path d="M 190 275 L 210 275 M 195 285 L 205 285" stroke-width="1"/>

            <!-- Neck -->
            <path d="M 182 250 L 182 215 C 185 210, 215 210, 218 215 L 218 250 Z" fill="#f4ebd9" stroke-width="1.2"/>
            <!-- Neck shadow hatch -->
            <line x1="184" y1="228" x2="216" y2="228" stroke-width="0.7"/>
            <line x1="186" y1="234" x2="214" y2="234" stroke-width="0.7"/>
            <line x1="188" y1="240" x2="212" y2="240" stroke-width="0.7"/>

            <!-- Face Oval -->
            <path d="M 165 160 C 165 110, 235 110, 235 160 C 235 205, 222 225, 200 228 C 178 225, 165 205, 165 160 Z" fill="#f4ebd9" stroke-width="1.8"/>

            <!-- Cheek and Jaw Shadow lines (Etching style) -->
            <path d="M 172 170 C 174 195, 185 215, 198 222" fill="none" stroke-width="0.7" stroke-dasharray="1.5,1.5"/>
            <path d="M 228 170 C 226 195, 215 215, 202 222" fill="none" stroke-width="0.7" stroke-dasharray="1.5,1.5"/>

            <!-- Hair (Youthful, voluminous 1860s style wavy hair) -->
            <path d="M 155 155 C 150 115, 175 95, 200 95 C 225 95, 250 115, 245 155 C 245 170, 238 180, 235 180 C 232 170, 234 140, 225 125 C 215 115, 185 115, 175 125 C 166 140, 168 170, 165 180 C 162 180, 155 170, 155 155 Z" fill="#2b1e16" stroke-width="1.5"/>
            <!-- Hair wave strokes -->
            <path d="M 170 120 C 185 105, 215 105, 230 120" fill="none" stroke="#f4ebd9" stroke-width="0.8"/>
            <path d="M 160 140 C 175 125, 215 125, 238 140" fill="none" stroke="#f4ebd9" stroke-width="0.8"/>
            <path d="M 162 155 C 170 148, 180 148, 185 152" fill="none" stroke="#f4ebd9" stroke-width="0.7"/>

            <!-- Eyes & Eyebrows (Piercing, visionary expression) -->
            <path d="M 175 152 Q 185 149 193 152" fill="none" stroke-width="1.8"/> <!-- Left Brow -->
            <path d="M 207 152 Q 215 149 225 152" fill="none" stroke-width="1.8"/> <!-- Right Brow -->
            <!-- Eyes -->
            <ellipse cx="184" cy="158" rx="5" ry="3" fill="#2b1e16"/>
            <circle cx="185" cy="157" r="1" fill="#fff"/>
            <ellipse cx="216" cy="158" rx="5" ry="3" fill="#2b1e16"/>
            <circle cx="217" cy="157" r="1" fill="#fff"/>
            <!-- Eyelids -->
            <path d="M 178 158 Q 184 154 190 158" fill="none" stroke-width="0.8"/>
            <path d="M 210 158 Q 216 154 222 158" fill="none" stroke-width="0.8"/>

            <!-- Nose -->
            <path d="M 200 154 L 198 178 L 193 183 M 198 183 L 205 182" fill="none" stroke-width="1.4"/>

            <!-- Youthful Mustache & Lips -->
            <path d="M 188 193 Q 200 196 212 193 Q 200 190 188 193 Z" fill="#2b1e16"/>
            <!-- Lips -->
            <path d="M 192 198 Q 200 200 208 198" fill="none" stroke-width="1"/>

            <!-- Book / Traveler's Notebook in hands -->
            <path d="M 160 355 L 240 355 L 235 390 L 165 390 Z" fill="#e8dcbf" stroke-width="1.5"/>
            <path d="M 200 355 L 200 390" stroke-width="1.2"/>
            <path d="M 170 365 L 192 365 M 170 372 L 192 372 M 208 365 L 230 365 M 208 372 L 230 372" stroke-width="0.6"/>

            <!-- Quill / Pen -->
            <path d="M 235 340 L 255 315 L 258 318 L 238 343 Z" fill="#8c6227" stroke-width="0.8"/>
        </g>

        <!-- Banner / Caption Plate -->
        <g transform="translate(60, 410)">
            <rect width="280" height="42" fill="#f4ebd9" stroke="#2b1e16" stroke-width="1.5"/>
            <rect x="3" y="3" width="274" height="36" fill="none" stroke="#a37c3f" stroke-width="0.7"/>
            <text x="140" y="21" font-family="'Noto Serif Georgian', serif" font-size="13" font-weight="bold" fill="#2b1e16" text-anchor="middle" letter-spacing="1">ილია ჭავჭავაძე</text>
            <text x="140" y="34" font-family="'Noto Serif Georgian', serif" font-size="9.5" font-style="italic" fill="#8c6227" text-anchor="middle">მგზავრი / „თერგდალეული“ (1861 წ.)</text>
        </g>
    </svg>
    `,

    // 2. რუსი ოფიცერი - იმპერიული სამხედრო მუნდირით
    russianOfficer: `
    <svg viewBox="0 0 400 480" class="engraving-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="hatch-vert" width="5" height="5" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="5" stroke="#2b1e16" stroke-width="0.8" stroke-opacity="0.35"/>
            </pattern>
        </defs>
        <!-- Background Frame -->
        <rect width="400" height="480" fill="#f5ede0"/>
        <rect x="12" y="12" width="376" height="456" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <rect x="18" y="18" width="364" height="444" fill="none" stroke="#8c6227" stroke-width="0.8" stroke-dasharray="4,2"/>

        <!-- Vignette Oval -->
        <ellipse cx="200" cy="220" rx="145" ry="175" fill="#fbf7ee" stroke="#2b1e16" stroke-width="1.5"/>

        <!-- Art: Russian Imperial Officer -->
        <g stroke="#2b1e16" stroke-linecap="round" stroke-linejoin="round">
            <!-- Military Uniform (Mundir) -->
            <path d="M 105 390 L 135 270 L 265 270 L 295 390 Z" fill="#263b32" stroke-width="2"/>
            <path d="M 110 390 L 138 275 L 262 275 L 290 390 Z" fill="url(#hatch-vert)"/>

            <!-- High Standing Imperial Collar -->
            <path d="M 165 260 L 165 220 L 235 220 L 235 260 Z" fill="#8b261e" stroke-width="1.5"/>
            <!-- Gold Collar Lace -->
            <path d="M 168 225 L 232 225 M 168 255 L 232 255" stroke="#c99e32" stroke-width="2"/>

            <!-- Brass Buttons Row -->
            <circle cx="200" cy="275" r="4" fill="#c99e32" stroke="#2b1e16" stroke-width="1"/>
            <circle cx="200" cy="298" r="4" fill="#c99e32" stroke="#2b1e16" stroke-width="1"/>
            <circle cx="200" cy="321" r="4" fill="#c99e32" stroke="#2b1e16" stroke-width="1"/>
            <circle cx="200" cy="344" r="4" fill="#c99e32" stroke="#2b1e16" stroke-width="1"/>
            <circle cx="200" cy="367" r="4" fill="#c99e32" stroke="#2b1e16" stroke-width="1"/>

            <!-- Gold Epaulettes with fringes -->
            <!-- Left Epaulette -->
            <ellipse cx="135" cy="272" rx="18" ry="10" fill="#c99e32" stroke="#2b1e16" stroke-width="1.2"/>
            <path d="M 120 278 L 118 300 M 125 280 L 124 302 M 132 281 L 132 304 M 140 280 L 142 302 M 148 278 L 150 298" stroke="#8c6227" stroke-width="1.2"/>
            <!-- Right Epaulette -->
            <ellipse cx="265" cy="272" rx="18" ry="10" fill="#c99e32" stroke="#2b1e16" stroke-width="1.2"/>
            <path d="M 250 278 L 248 298 M 258 280 L 257 302 M 265 281 L 265 304 M 272 280 L 274 302 M 280 278 L 282 300" stroke="#8c6227" stroke-width="1.2"/>

            <!-- Neck -->
            <rect x="180" y="200" width="40" height="25" fill="#f4ebd9" stroke-width="1"/>

            <!-- Officer Face (Stern, arrogant, puffy cheeks, double chin) -->
            <path d="M 168 150 C 168 120, 232 120, 232 150 C 235 190, 228 215, 200 218 C 172 215, 165 190, 168 150 Z" fill="#f4ebd9" stroke-width="1.8"/>

            <!-- Imperial Sideburns & Bristly Mustache -->
            <path d="M 166 145 C 166 175, 175 195, 180 195 L 175 170 Z" fill="#4a3728"/>
            <path d="M 234 145 C 234 175, 225 195, 220 195 L 225 170 Z" fill="#4a3728"/>
            <!-- Upturned Aristocratic Mustache -->
            <path d="M 176 182 Q 200 188 224 182 Q 235 175 220 186 Q 200 192 180 186 Q 165 175 176 182 Z" fill="#4a3728"/>

            <!-- Arrogant Eyes with heavy lids -->
            <path d="M 176 150 Q 185 146 194 150" fill="none" stroke-width="1.5"/>
            <path d="M 206 150 Q 215 146 224 150" fill="none" stroke-width="1.5"/>
            <ellipse cx="185" cy="154" rx="4" ry="2" fill="#2b1e16"/>
            <ellipse cx="215" cy="154" rx="4" ry="2" fill="#2b1e16"/>

            <!-- Nose (Broad, slightly red/imperial) -->
            <path d="M 200 148 L 198 172 L 194 175 M 198 175 L 204 174" fill="none" stroke-width="1.4"/>

            <!-- Officer Cap (Kepi / Peaked Cap with Imperial Cockade) -->
            <path d="M 160 135 C 160 110, 240 110, 240 135 Z" fill="#263b32" stroke-width="1.5"/>
            <path d="M 158 135 L 242 135 L 240 142 L 160 142 Z" fill="#8b261e" stroke-width="1.2"/>
            <!-- Imperial Cockade (Kokarda) -->
            <circle cx="200" cy="130" r="6" fill="#c99e32" stroke="#2b1e16" stroke-width="0.8"/>
            <circle cx="200" cy="130" r="3" fill="#2b1e16"/>
            <!-- Black Lacquered Visor -->
            <path d="M 162 142 Q 200 152 238 142 C 225 147, 175 147, 162 142 Z" fill="#1b140e" stroke="#2b1e16" stroke-width="1"/>

            <!-- Officer's Playing Cards (Symbol of boredom & inactivity) -->
            <g transform="translate(245, 330) rotate(-15)">
                <rect width="32" height="48" rx="2" fill="#fff" stroke="#2b1e16" stroke-width="1"/>
                <text x="5" y="14" font-size="10" fill="#a00" font-family="sans-serif">♥A</text>
                <path d="M 16 24 L 20 30 L 16 36 L 12 30 Z" fill="#a00"/>
            </g>
            <g transform="translate(262, 335) rotate(10)">
                <rect width="32" height="48" rx="2" fill="#fff" stroke="#2b1e16" stroke-width="1"/>
                <text x="5" y="14" font-size="10" fill="#000" font-family="sans-serif">♠K</text>
            </g>
        </g>

        <!-- Banner -->
        <g transform="translate(60, 410)">
            <rect width="280" height="42" fill="#f4ebd9" stroke="#2b1e16" stroke-width="1.5"/>
            <rect x="3" y="3" width="274" height="36" fill="none" stroke="#8c6227" stroke-width="0.7"/>
            <text x="140" y="21" font-family="'Noto Serif Georgian', serif" font-size="13" font-weight="bold" fill="#2b1e16" text-anchor="middle" letter-spacing="1">რუსი ოფიცერი</text>
            <text x="140" y="34" font-family="'Noto Serif Georgian', serif" font-size="9.5" font-style="italic" fill="#8c6227" text-anchor="middle">იმპერიული ბიუროკრატია & ქედმაღლობა</text>
        </g>
    </svg>
    `,

    // 3. მოხევე ლელო თათარაშვილი - ტრადიციულ სამოსში
    leloTatarashvili: `
    <svg viewBox="0 0 400 480" class="engraving-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="wool-texture" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 0 4 Q 2 2 4 4 T 8 4" fill="none" stroke="#2b1e16" stroke-width="0.7" stroke-opacity="0.35"/>
                <path d="M 0 8 Q 2 6 4 8 T 8 8" fill="none" stroke="#2b1e16" stroke-width="0.7" stroke-opacity="0.35"/>
            </pattern>
        </defs>
        <!-- Background Frame -->
        <rect width="400" height="480" fill="#f5ede0"/>
        <rect x="12" y="12" width="376" height="456" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <rect x="18" y="18" width="364" height="444" fill="none" stroke="#a37c3f" stroke-width="0.8" stroke-dasharray="4,2"/>

        <!-- Vignette Oval -->
        <ellipse cx="200" cy="220" rx="145" ry="175" fill="#fbf7ee" stroke="#2b1e16" stroke-width="1.5"/>

        <!-- Art: Lelo Tatarashvili -->
        <g stroke="#2b1e16" stroke-linecap="round" stroke-linejoin="round">
            <!-- Heavy Nabadi (Felt Cloak) & Chokha -->
            <path d="M 95 390 C 105 290, 140 260, 175 255 L 225 255 C 260 260, 295 290, 305 390 Z" fill="#322822" stroke-width="2"/>
            <path d="M 95 390 C 105 290, 140 260, 175 255 L 225 255 C 260 260, 295 290, 305 390 Z" fill="url(#wool-texture)"/>

            <!-- Gazyri (Cartridge pouches) on chest -->
            <rect x="135" y="300" width="35" height="18" fill="#4a3728" stroke-width="1"/>
            <path d="M 140 295 L 140 318 M 146 295 L 146 318 M 152 295 L 152 318 M 158 295 L 158 318 M 164 295 L 164 318" stroke="#f4ebd9" stroke-width="1.8"/>

            <rect x="230" y="300" width="35" height="18" fill="#4a3728" stroke-width="1"/>
            <path d="M 235 295 L 235 318 M 241 295 L 241 318 M 247 295 L 247 318 M 253 295 L 253 318 M 259 295 L 259 318" stroke="#f4ebd9" stroke-width="1.8"/>

            <!-- Traditional Silver Belt & Dagger (Kinzhal) Hilt -->
            <path d="M 155 350 L 245 350 L 245 362 L 155 362 Z" fill="#7a6b58" stroke-width="1.2"/>
            <rect x="190" y="348" width="20" height="16" fill="#c4b89b" stroke="#2b1e16" stroke-width="1"/>
            <!-- Dagger -->
            <path d="M 197 365 L 197 395 L 203 395 L 203 365 Z" fill="#8c6227" stroke-width="1.2"/>

            <!-- Neck & Weathered Chest -->
            <path d="M 180 255 L 180 225 C 185 220, 215 220, 220 225 L 220 255 Z" fill="#d9be9b" stroke-width="1.2"/>

            <!-- Weathered, Wise Mountain Face -->
            <path d="M 166 165 C 166 128, 234 128, 234 165 C 235 205, 222 225, 200 228 C 178 225, 166 205, 166 165 Z" fill="#d9be9b" stroke-width="1.8"/>

            <!-- Deep Forehead & Eye Wrinkles (Wisdom & Hard Life) -->
            <path d="M 178 145 Q 200 148 222 145" fill="none" stroke-width="1"/>
            <path d="M 180 150 Q 200 153 220 150" fill="none" stroke-width="0.8"/>
            <!-- Crow's feet -->
            <path d="M 170 162 L 165 160 M 170 165 L 164 166 M 170 168 L 166 172" stroke-width="0.8"/>
            <path d="M 230 162 L 235 160 M 230 165 L 236 166 M 230 168 L 234 172" stroke-width="0.8"/>

            <!-- Bushy Eyebrows -->
            <path d="M 172 155 Q 185 150 194 156" fill="none" stroke-width="2.5"/>
            <path d="M 206 156 Q 215 150 228 155" fill="none" stroke-width="2.5"/>

            <!-- Deep, Sincere Eyes -->
            <ellipse cx="184" cy="164" rx="4" ry="2.5" fill="#2b1e16"/>
            <circle cx="185" cy="163" r="0.8" fill="#fff"/>
            <ellipse cx="216" cy="164" rx="4" ry="2.5" fill="#2b1e16"/>
            <circle cx="217" cy="163" r="0.8" fill="#fff"/>

            <!-- Strong Mountain Nose -->
            <path d="M 200 158 L 197 184 L 192 188 M 197 188 L 206 186" fill="none" stroke-width="1.6"/>

            <!-- Long Gray/White Beard & Moustache (Mo-kheve Elder) -->
            <path d="M 174 186 Q 200 192 226 186 C 240 220, 225 255, 200 262 C 175 255, 160 220, 174 186 Z" fill="#ede5d3" stroke="#2b1e16" stroke-width="1.5"/>
            <!-- Beard hairs (engraving strokes) -->
            <path d="M 185 200 C 188 225, 192 245, 198 255" fill="none" stroke="#2b1e16" stroke-width="0.8"/>
            <path d="M 215 200 C 212 225, 208 245, 202 255" fill="none" stroke="#2b1e16" stroke-width="0.8"/>
            <path d="M 200 195 L 200 258" stroke="#2b1e16" stroke-width="0.8"/>

            <!-- High Traditional Sheepskin Hat (Papakha / Telpak) -->
            <path d="M 152 145 C 145 90, 160 70, 200 68 C 240 70, 255 90, 248 145 Z" fill="#2a1e17" stroke="#2b1e16" stroke-width="2"/>
            <!-- Fleece curly texture -->
            <circle cx="170" cy="95" r="8" fill="none" stroke="#4a3728" stroke-width="1.2"/>
            <circle cx="190" cy="85" r="9" fill="none" stroke="#4a3728" stroke-width="1.2"/>
            <circle cx="210" cy="88" r="8" fill="none" stroke="#4a3728" stroke-width="1.2"/>
            <circle cx="230" cy="100" r="7" fill="none" stroke="#4a3728" stroke-width="1.2"/>
            <circle cx="165" cy="120" r="8" fill="none" stroke="#4a3728" stroke-width="1.2"/>
            <circle cx="235" cy="125" r="8" fill="none" stroke="#4a3728" stroke-width="1.2"/>

            <!-- Shepherd's Wooden Staff (Alpenstock) -->
            <path d="M 115 240 L 115 395" stroke="#634832" stroke-width="4"/>
            <path d="M 112 245 Q 115 230 125 235" stroke="#634832" stroke-width="4" fill="none"/>
        </g>

        <!-- Banner -->
        <g transform="translate(60, 410)">
            <rect width="280" height="42" fill="#f4ebd9" stroke="#2b1e16" stroke-width="1.5"/>
            <rect x="3" y="3" width="274" height="36" fill="none" stroke="#a37c3f" stroke-width="0.7"/>
            <text x="140" y="21" font-family="'Noto Serif Georgian', serif" font-size="13" font-weight="bold" fill="#2b1e16" text-anchor="middle" letter-spacing="1">ლელო თათარაშვილი</text>
            <text x="140" y="34" font-family="'Noto Serif Georgian', serif" font-size="9.5" font-style="italic" fill="#8c6227" text-anchor="middle">ხალხური სიბრძნე & თავისუფლებისწყურვილი</text>
        </g>
    </svg>
    `,

    // 4. დარიალის ხეობა, მყინვარწვერი და თერგი
    darialiLandscape: `
    <svg viewBox="0 0 600 380" class="engraving-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="rock-hatch" width="8" height="8" patternTransform="rotate(30)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#2b1e16" stroke-width="0.8" stroke-opacity="0.4"/>
            </pattern>
            <pattern id="cloud-hatch" width="10" height="4" patternUnits="userSpaceOnUse">
                <line x1="0" y1="2" x2="10" y2="2" stroke="#2b1e16" stroke-width="0.5" stroke-opacity="0.25"/>
            </pattern>
        </defs>
        <!-- Background Parchment -->
        <rect width="600" height="380" fill="#f4ebd9"/>
        <!-- Ornate Border -->
        <rect x="10" y="10" width="580" height="360" fill="none" stroke="#2b1e16" stroke-width="2"/>
        <rect x="15" y="15" width="570" height="350" fill="none" stroke="#a37c3f" stroke-width="0.8" stroke-dasharray="6,3"/>

        <!-- Engraved Sky & Clouds -->
        <rect x="16" y="16" width="568" height="150" fill="url(#cloud-hatch)"/>

        <!-- Distant Snowcapped Kazbegi (Mkinvartsveri) Peak -->
        <polygon points="240,160 300,50 360,160" fill="#fcf9f2" stroke="#2b1e16" stroke-width="1.5"/>
        <polygon points="280,105 300,50 325,105" fill="#ffffff"/>
        <!-- Shading on right facet of Kazbek -->
        <polygon points="300,50 360,160 320,160" fill="url(#rock-hatch)"/>
        <text x="300" y="42" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#8c6227" text-anchor="middle" letter-spacing="1">მყინვარწვერი (5,047 მ)</text>

        <!-- Huge Jagged Dariali Canyon Cliffs (Left & Right) -->
        <!-- Left Cliff -->
        <polygon points="16,280 80,160 140,140 220,230 200,310 16,330" fill="#42342b" stroke="#2b1e16" stroke-width="2"/>
        <polygon points="16,280 80,160 140,140 220,230 200,310 16,330" fill="url(#rock-hatch)"/>
        <!-- Hatching facets on left cliff -->
        <path d="M 80 160 L 100 250 L 50 300 M 140 140 L 160 230 L 130 310" stroke="#f4ebd9" stroke-width="0.8" stroke-opacity="0.6"/>

        <!-- Right Cliff -->
        <polygon points="584,270 510,130 450,150 380,240 410,320 584,325" fill="#382c24" stroke="#2b1e16" stroke-width="2"/>
        <polygon points="584,270 510,130 450,150 380,240 410,320 584,325" fill="url(#rock-hatch)"/>
        <path d="M 510 130 L 480 230 L 520 300 M 450 150 L 420 240" stroke="#f4ebd9" stroke-width="0.8" stroke-opacity="0.6"/>

        <!-- Antique Dariali Castle Ruins on top of cliff -->
        <path d="M 125 140 L 125 125 L 145 125 L 145 140 M 130 125 L 130 120 L 133 120 L 133 125 M 137 125 L 137 120 L 140 120 L 140 125" stroke="#2b1e16" stroke-width="1.2" fill="#d8caa8"/>

        <!-- Georgian Military Road carved into the rock -->
        <path d="M 16 315 Q 160 300 240 290 Q 320 280 440 295 L 430 315 Q 310 300 230 310 Q 150 320 16 335 Z" fill="#d9cbab" stroke="#2b1e16" stroke-width="1.2"/>
        <text x="120" y="312" font-family="'Noto Serif Georgian', serif" font-size="8.5" fill="#3c2f2f" font-style="italic">საქართველოს სამხედრო გზა</text>

        <!-- Wild Turbulent River Tergi (White water foaming and rushing) -->
        <path d="M 220 290 C 240 290, 270 300, 250 330 C 230 360, 360 365, 380 340 C 400 310, 330 295, 310 285 Z" fill="#2d5257" stroke="#2b1e16" stroke-width="1.5"/>

        <!-- Swirling foam strokes -->
        <path d="M 230 300 Q 255 295 280 305 Q 310 298 335 305" stroke="#fcf9f2" stroke-width="2" fill="none"/>
        <path d="M 215 320 Q 250 310 290 325 Q 330 315 375 322" stroke="#fcf9f2" stroke-width="2.5" fill="none"/>
        <path d="M 240 345 Q 280 335 320 350 Q 360 335 400 342" stroke="#fcf9f2" stroke-width="3" fill="none"/>
        <path d="M 260 360 Q 300 350 350 362" stroke="#fcf9f2" stroke-width="2.5" fill="none"/>

        <!-- Engraved Waves -->
        <path d="M 225 310 Q 235 305 245 310 M 265 315 Q 275 310 285 315 M 315 320 Q 325 315 335 320" stroke="#162a2d" stroke-width="1.2" fill="none"/>

        <!-- Bottom Plate -->
        <g transform="translate(150, 332)">
            <rect width="300" height="28" fill="#f4ebd9" stroke="#2b1e16" stroke-width="1.2"/>
            <text x="150" y="18" font-family="'Noto Serif Georgian', serif" font-size="11" font-weight="bold" fill="#2b1e16" text-anchor="middle" letter-spacing="0.5">დარიალის კარი & ბობოქარი თერგი</text>
        </g>
    </svg>
    `,

    // 5. ეპოქალური ეტლი (Stagecoach / Post Chaise)
    carriageGMR: `
    <svg viewBox="0 0 500 240" class="engraving-svg" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="240" fill="#f4ebd9"/>
        <rect x="8" y="8" width="484" height="224" fill="none" stroke="#2b1e16" stroke-width="1.5"/>
        <rect x="12" y="12" width="476" height="216" fill="none" stroke="#a37c3f" stroke-width="0.6" stroke-dasharray="4,2"/>

        <g stroke="#2b1e16" stroke-linecap="round" stroke-linejoin="round">
            <!-- Road surface -->
            <line x1="20" y1="195" x2="480" y2="195" stroke-width="2"/>
            <path d="M 20 200 L 480 200 M 30 205 L 470 205 M 50 210 L 450 210" stroke-width="0.8" stroke-dasharray="6,4"/>

            <!-- Distant mountain silhouette -->
            <polygon points="30,195 90,140 160,195" fill="#e0d4bc" stroke="#2b1e16" stroke-width="0.8"/>
            <polygon points="140,195 210,120 290,195" fill="#d9cbab" stroke="#2b1e16" stroke-width="0.8"/>
            <polygon points="270,195 340,135 410,195" fill="#e0d4bc" stroke="#2b1e16" stroke-width="0.8"/>

            <!-- Carriage Cabin -->
            <path d="M 60 160 C 60 110, 80 95, 120 95 L 180 95 C 220 95, 240 110, 240 160 C 235 175, 215 180, 150 180 C 85 180, 65 175, 60 160 Z" fill="#3a2a1d" stroke-width="2"/>

            <!-- Carriage Door & Window -->
            <rect x="120" y="105" width="60" height="65" fill="#4a3728" stroke="#2b1e16" stroke-width="1.5"/>
            <rect x="130" y="112" width="40" height="28" rx="2" fill="#fcf7ee" stroke="#2b1e16" stroke-width="1.2"/>
            <!-- Ilia looking out of the window -->
            <circle cx="150" cy="124" r="7" fill="#f4ebd9" stroke="#2b1e16" stroke-width="1"/>
            <path d="M 145 120 Q 150 116 155 120" fill="none" stroke-width="1"/>

            <!-- Luggage trunk strapped on roof -->
            <rect x="110" y="78" width="80" height="17" fill="#6d533b" stroke-width="1.5"/>
            <line x1="130" y1="78" x2="130" y2="95" stroke-width="1.2"/>
            <line x1="170" y1="78" x2="170" y2="95" stroke-width="1.2"/>

            <!-- Coachman seat & Driver with whip -->
            <path d="M 235 130 L 265 130 L 260 160 L 235 160 Z" fill="#4a3728" stroke-width="1.5"/>
            <!-- Coachman -->
            <ellipse cx="250" cy="115" rx="8" ry="10" fill="#2b1e16"/>
            <!-- Fur hat -->
            <ellipse cx="250" cy="107" rx="9" ry="6" fill="#6d533b"/>
            <!-- Whip -->
            <path d="M 255 115 Q 290 85 340 90" fill="none" stroke="#2b1e16" stroke-width="1.2"/>

            <!-- Big Back Carriage Wheel -->
            <circle cx="95" cy="180" r="28" fill="#f4ebd9" stroke-width="2.5"/>
            <circle cx="95" cy="180" r="7" fill="#2b1e16"/>
            <!-- Spokes -->
            <line x1="95" y1="152" x2="95" y2="208" stroke-width="1.2"/>
            <line x1="67" y1="180" x2="123" y2="180" stroke-width="1.2"/>
            <line x1="75" y1="160" x2="115" y2="200" stroke-width="1.2"/>
            <line x1="75" y1="200" x2="115" y2="160" stroke-width="1.2"/>

            <!-- Front Carriage Wheel -->
            <circle cx="215" cy="185" r="22" fill="#f4ebd9" stroke-width="2.2"/>
            <circle cx="215" cy="185" r="5" fill="#2b1e16"/>
            <line x1="215" y1="163" x2="215" y2="207" stroke-width="1.2"/>
            <line x1="193" y1="185" x2="237" y2="185" stroke-width="1.2"/>
            <line x1="199" y1="169" x2="231" y2="201" stroke-width="1.2"/>
            <line x1="199" y1="201" x2="231" y2="169" stroke-width="1.2"/>

            <!-- Carriage Suspension Springs -->
            <path d="M 80 168 Q 95 158 110 168" fill="none" stroke-width="2"/>
            <path d="M 200 172 Q 215 162 230 172" fill="none" stroke-width="2"/>

            <!-- Harness Poles -->
            <line x1="235" y1="175" x2="350" y2="175" stroke-width="2.5"/>

            <!-- Galloping Horses (Troika silhouette) -->
            <!-- Horse 1 -->
            <g transform="translate(320, 110)">
                <!-- Body -->
                <ellipse cx="60" cy="50" rx="35" ry="18" fill="#3c2f2f" stroke-width="1.2"/>
                <!-- Neck & Head -->
                <path d="M 85 45 C 95 30, 105 20, 115 25 C 118 32, 110 40, 95 55 Z" fill="#3c2f2f" stroke-width="1.2"/>
                <!-- Legs in gallop -->
                <path d="M 40 60 L 25 82 M 50 62 L 40 85 M 75 60 L 95 80 M 85 60 L 110 78" stroke="#3c2f2f" stroke-width="2.5"/>
                <!-- Mane & Tail -->
                <path d="M 30 45 Q 15 50 10 65" stroke="#2b1e16" stroke-width="2" fill="none"/>
            </g>
        </g>

        <!-- Caption -->
        <text x="250" y="226" font-family="'Noto Serif Georgian', serif" font-size="10" font-weight="bold" fill="#8c6227" text-anchor="middle" letter-spacing="1">საფოსტო დილიჟანსი საქართველოს სამხედრო გზაზე (XIX ს.)</text>
    </svg>
    `
};

window.MGZAVRI_ILLUSTRATIONS = MGZAVRI_ILLUSTRATIONS;
