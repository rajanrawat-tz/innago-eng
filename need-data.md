# Data Needed for Portfolio Completion

All placeholder data lives in `portfolio-data.js`. Update values there and the pages will reflect the changes.

---

## 1. Platform Scale (Exec Summary)

These are engineering-adjacent metrics you own in your DB. They bridge "we shipped it" → "it gets used."

| Data Point | Where in `portfolio-data.js` | Source Suggestion |
|---|---|---|
| Transaction volume per quarter (13 quarters) | `platformScale.quarterlyTransactionVolume[].volume` | Database — aggregate payment transactions per quarter |
| Total active users (current) | `platformScale.activeUsers.current` | Auth0 dashboard or DB user count |
| User growth multiplier since Jan 2023 | `platformScale.activeUsers.growth` | Compare current vs Jan 2023 user count |
| Integration adoption counts (per integration) | `platformScale.integrationAdoption[].adopters` | DB — count of accounts using each integration |
| Payment success rate before/after Hyperswitch | `platformScale.paymentSuccessRate.before/after` | Payment logs — success % pre vs post Hyperswitch |

---

## 2. DORA Metrics (Engineering Effectiveness Page)

Industry-standard engineering effectiveness metrics. Even 2 of 4 with a note is valuable.

| Metric | Where in `portfolio-data.js` | Source Suggestion |
|---|---|---|
| **Lead Time for Changes** — median hours from PR open → deployed, per quarter | `dora.leadTime.quarterly[].median` | GitHub API — PR created_at vs merged_at + deploy time |
| Lead time current median | `dora.leadTime.currentMedian` | Most recent quarter from above |
| Lead time trend | `dora.leadTime.trend` | e.g., "Improved 40% since 2023" |
| **Change Failure Rate** — % of deploys causing a hotfix/rollback, per quarter | `dora.changeFailureRate.quarterly[].rate` | Release tags — count hotfix releases / total releases |
| CFR current rate | `dora.changeFailureRate.currentRate` | Most recent quarter |
| CFR trend | `dora.changeFailureRate.trend` | e.g., "Reduced from 12% to 5%" |
| **MTTR** — median hours from incident detection → resolution, per quarter | `dora.mttr.quarterly[].median` | Freshdesk / PagerDuty incident logs |
| MTTR current median | `dora.mttr.currentMedian` | Most recent quarter |
| MTTR trend | `dora.mttr.trend` | e.g., "Down from 8hr to 2hr" |
| DORA classification (current & target) | `dora.currentClassification` / `targetClassification` | Self-assessment based on DORA benchmarks (Elite/High/Medium/Low) |

**Tip**: Deployment Frequency is already derived from your release data — you only need the other 3.

---

## 3. Team Headcount (Team & Roadmap Page)

| Data Point | Where in `portfolio-data.js` | Source Suggestion |
|---|---|---|
| Headcount per quarter (13 quarters) | `team.headcount[].count` | HR / team records — approximate is fine |
| Current exact headcount | `team.currentHeadcount` | Current team roster |

---

## 4. Roadmap (Team & Roadmap Page)

| Data Point | Where in `portfolio-data.js` | Source Suggestion |
|---|---|---|
| Planned initiatives for Q2-Q3 2026 | `roadmap.upcoming[]` | Your roadmap / planning docs — name, description, quarter, pillar |

**Note**: Snowflake AI Insights and AI Support Agents are already filled in as in-progress.

---

## 5. Migrations (Team & Roadmap Page)

| Data Point | Where in `portfolio-data.js` | Source Suggestion |
|---|---|---|
| AWS EKS migration % complete | `migrations[0].percentComplete` | Infra team — how many services migrated |
| Auth0 migration % complete | `migrations[1].percentComplete` | Auth0 dashboard — users + services migrated |
| .NET modernization % complete | `migrations[2].percentComplete` | Count of services on modern .NET vs legacy |
| Migration status descriptions | `migrations[].status` | Brief text, e.g., "85% — 3 services remaining" |
| Target completion dates | `migrations[].targetCompletion` | e.g., "Q3 2026" |

---

## Quick Start

1. Open `portfolio-data.js`
2. Search for `PLACEHOLDER`
3. Replace with real values
4. Open any HTML page in browser to verify
5. Push to GitHub Pages

Even filling in **just the team headcount + 2 DORA metrics** would make the new pages immediately useful.
