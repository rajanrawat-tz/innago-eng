# Innago Engineering Portfolio

## What This Is
A static HTML site (GitHub Pages) showcasing 3 years of Innago engineering execution (Jan 2023 — Mar 2026). Target audience: CXOs, investors, internal leadership. Built by a project manager of the engineering team.

## Tech Stack
- **Pure static HTML** — no build step, no framework, no bundler
- **Hosted on GitHub Pages** — just push HTML files to `main`
- **All CSS/JS inline** per page — no external stylesheets or scripts (except `portfolio-data.js`)
- **Fonts**: Plus Jakarta Sans (body) + JetBrains Mono (data/labels) via Google Fonts CDN
- **No dependencies** — zero npm, zero package.json

## Central Data File
`portfolio-data.js` contains ALL portfolio metrics in a single `PORTFOLIO` global object. Pages include it via `<script src="portfolio-data.js"></script>` and read from `PORTFOLIO.*`. When adding new data points, add them to this file — not inline in HTML.

Search for `"PLACEHOLDER"` in `portfolio-data.js` to find all data points that still need real values. See `need-data.md` for a checklist of what's needed.

## Design System
- **Brand color**: `#1A56DB` (Innago Blue)
- **Accent colors**: Purple `#7C3AED`, Green `#059669`, Amber `#D97706`, Cyan `#0891B2`, Rose `#E11D48`
- **Gray scale**: 50 (`#F9FAFB`) through 900 (`#111827`)
- **Border radius**: 16px (cards), 10px (smaller)
- **Shadows**: sm/md/lg/xl progression
- **Container max-width**: 1100-1200px with 48px side padding
- **Responsive breakpoints**: 900px, 800px, 600px

## Page Structure (8 pages)
1. `index.html` — Landing page with navigation cards
2. `innago-exec-summary.html` — One-pager (start here)
3. `innago-3yr-release-timeline.html` — 265-release chronology
4. `innago-platform-evolution.html` — Before/after across 7 pillars
5. `innago-capability-maturity.html` — Quarterly heatmap + cumulative growth
6. `innago-engineering-effectiveness.html` — DORA metrics + release composition
7. `innago-team-roadmap.html` — Team headcount, roadmap, risks
8. `innago-ai-reality-check.html` — AI adoption and forward-looking

## Navigation
All pages share an identical sticky nav bar. When adding/removing pages, update the nav in ALL HTML files. The nav HTML block starts with `<nav class="site-nav">` and uses `.active` class on the current page link.

## Conventions
- Every page has a 4-5px gradient top bar (`.top-accent` or `.top-bar`)
- Cards use `.card` class with hover effects
- Monospace data labels use JetBrains Mono
- Section titles: 13px, uppercase, letter-spacing 1.5px, gray-400
- Animations: fadeIn on load, staggered entrance for card grids
- Print support via `@media print` block

## Key Data Points
- 265 releases, 174 features, 165 milestones
- 7 platform pillars, 13 consecutive quarters
- Team size: 30-45 (fluctuates)
- Auth0 migration: ~300K users
- 15+ integrations added

## Data → Page Wiring

Which sections of `portfolio-data.js` feed which pages:

| Data Section in `PORTFOLIO.*` | Used By Page | What It Populates |
|---|---|---|
| `headline.*` | index, exec-summary | Top-level stats (265 releases, 174 features, etc.) |
| `quarterlyReleases[]` | exec-summary | Velocity bar chart on exec summary |
| `platformScale.*` | exec-summary | Platform Scale section (users, transactions, integrations) |
| `dora.leadTime.*` | engineering-effectiveness | Lead time card + chart |
| `dora.changeFailureRate.*` | engineering-effectiveness | CFR card + chart |
| `dora.mttr.*` | engineering-effectiveness | MTTR card + chart |
| `dora.currentClassification` | engineering-effectiveness | DORA classification badge |
| `team.headcount[]` | team-roadmap | Headcount bar chart + releases/engineer calc |
| `roadmap.upcoming[]` | team-roadmap | Roadmap cards |
| `migrations[]` | team-roadmap | Migration progress bars |

**Pages NOT yet wired to portfolio-data.js** (data is still inline in their HTML):
- `innago-3yr-release-timeline.html` — 265 releases hardcoded inline
- `innago-platform-evolution.html` — before/after content is static
- `innago-capability-maturity.html` — heatmap data is inline
- `innago-ai-reality-check.html` — AI adoption data is inline

These could be migrated to `portfolio-data.js` later if needed, but they change rarely.

## Data Sources Guide
`need-data.md` maps every PLACEHOLDER to a suggested data source (GitHub API, Freshdesk, Auth0, DB queries, etc.). Consult it when filling in data.

## When Editing
- Keep pages self-contained (inline CSS) for GitHub Pages simplicity
- Data that changes → put in `portfolio-data.js`
- Static layout content → stays inline in HTML
- Test locally: just open HTML files in browser, no server needed
- Keep nav in sync across all pages when adding/removing links
