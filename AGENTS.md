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

## Files
| File | Purpose |
|------|---------|
| `londyn-leaddev.html` | Main PWA app (all-in-one) |
| `sw.js` | Service Worker (bump CACHE_VERSION for updates) |
| `manifest.json` | PWA manifest |
| `leaflet.min.js` | Local Leaflet library |
| `london-map.png` | Static offline map (placeholder - needs real image) |
| `icon-192.png` / `icon-512.png` | App icons (placeholders) |

## Workflow
1. Make changes to files
2. Say "commit and push"
3. Bump `CACHE_VERSION` in `sw.js` if content changed
4. `git add . && git commit -m "message" && git push`
5. GitHub Pages auto-deploys (~60s)

## Current State
- PWA fully functional with offline support
- Refresh button in header
- Auto update toast when new version detected
- Thursday (04.06) plan added - flight 21:20 to Poznań

## TODO / Pending
- [ ] Replace placeholder icons with real ones
- [ ] Replace `london-map.png` with actual London map screenshot
- [ ] Add audio guide scripts content

## Trip Dates
- **31.05 (Sun):** Arrival Stansted 15:00, bike tour, hotel South Quay
- **01.06 (Mon):** Museums (V&A, Tate) + Hercules 19:30
- **02.06 (Tue):** LeadDev Day 1
- **03.06 (Wed):** LeadDev Day 2 + Wicked 19:30
- **04.06 (Thu):** Free day + flight 21:20 Stansted → Poznań
