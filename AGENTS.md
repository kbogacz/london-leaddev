# Londyn LeadDev PWA - Project Reference

## Quick Start
- **Project path:** `/Users/krzysztof.bogacz/Developer/London`
- **Live URL:** https://kbogacz.github.io/london-leaddev/londyn-leaddev.html
- **GitHub repo:** https://github.com/kbogacz/london-leaddev (public)

## Git Setup (Dual Account)
- Uses **personal SSH key** (not company)
- SSH host alias: `github-personal`
- Remote: `git@github-personal:kbogacz/london-leaddev.git`
- Commits use: `kbogacz@gmail.com`
- **Feature branches**: create with `git checkout -b feature/name`, merge to main when ready

## Files
| File | Purpose |
|------|---------|
| `londyn-leaddev.html` | Main PWA app (all-in-one HTML/CSS/JS) |
| `sw.js` | Service Worker (bump CACHE_VERSION for updates) |
| `manifest.json` | PWA manifest |
| `leaflet.min.js` | Local Leaflet library |
| `london-map.png` | Static offline map (placeholder - needs real image) |
| `icon-192.png` / `icon-512.png` | App icons (Big Ben) |

## Workflow
1. Make changes to files
2. Say "commit and push" or just "push"
3. **Always bump `CACHE_VERSION`** in `sw.js` (currently v26)
4. `git add . && git commit -m "message" && git push`
5. GitHub Pages auto-deploys (~60s)

## Current State (v26)
- PWA fully functional with offline support
- Refresh button in header + auto update toast
- **Sticky time tracker** for Sunday/Monday/Thursday with DEMO mode
- **Auto-scroll pills** to current day on load
- **Dual route options** (sunny/rainy) for key segments
- All 5 days fully planned

## Key Features

### Time Tracker Banner
- Shows on Sunday (sunset 21:09), Monday (Hercules 19:30), Thursday (flight 21:20)
- Displays **DEMO** badge when not the real day
- Progress bar, buffer calculation, current/next activity
- Controlled by `SUNDAY_CONFIG`, `MONDAY_CONFIG`, `THURSDAY_CONFIG` objects

### Route Alternatives
- Format: `next:{m:'icon', x:'main route', alt:'alternative route'}`
- Weather-based: "☀️ Ładna pogoda" vs "🌧️ Jak leje — Tube"

### Restaurant Format
- Always include: `⭐ rating · Description. Polecane: dish1, dish2`

### Google Images Links
- `seeLink()` function creates links from `see:[]` arrays
- Use recognizable attraction names (e.g., "Daunt Books Marylebone" not "Książki ułożone geograficznie")

### Walking Indicators
- Use `🚶` before walking times in transit descriptions
- Format: `🚶 ~X min pieszo do [destination]`

## Code Structure

### Data Objects
- `DAYS[]` - all day plans with blocks
- `POIS[]` - map points of interest
- `AUDIO[]` - audio guide scripts (mostly placeholders)
- `STATIONS{}` - tube station coordinates for auto-linking

### Key Functions
- `renderPills()` / `renderTL()` - render day tabs and timeline
- `updateTimeTracker()` - update sticky banner every 30s
- `detectCurrentDay()` - auto-select day based on date
- `scrollPillsToCurrentDay()` - scroll pills to show current day first
- `seeLink()` - create Google Images search links
- `linkStations()` - add map links to station names

## Thursday Plan (04.06)
1. Checkout 08:30, bagaż ze sobą
2. Śniadanie Canary Wharf
3. **Liverpool Street** - zostawić bagaż w Stasher (~£6)
4. Dennis Severs' House (rezerwacja!)
5. Postman's Park
6. Hunterian Museum (gratis)
7. Sir John Soane's Museum (gratis)
8. Lunch Holborn
9. Leake Street Tunnel
10. Daunt Books
11. **Liverpool Street** - odebrać bagaż
12. Stansted Express → lot 21:20

## TODO / Pending
- [ ] Replace `london-map.png` with actual London map screenshot
- [ ] Add audio guide scripts content
- [ ] Consider Wednesday timer (Wicked 19:30)

## Trip Dates
- **31.05 (Sun):** Arrival Stansted 15:00, e-bike tour, sunset St James's, hotel South Quay
- **01.06 (Mon):** Museums (V&A, Tate) + Hercules 19:30 Theatre Royal
- **02.06 (Tue):** LeadDev Day 1 @ InterContinental O2
- **03.06 (Wed):** LeadDev Day 2 + Wicked 19:30 Apollo Victoria
- **04.06 (Thu):** Hidden gems tour + flight 21:20 Stansted → Poznań

## Technical Notes
- Apostrophe in JS: use `\u2019` (e.g., `St James\u2019s`)
- Service Worker requires CACHE_VERSION bump to force update
- PWA works offline with cached assets
- Leaflet map tiles require online connection
