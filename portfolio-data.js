/**
 * ═══════════════════════════════════════════════════════════════
 * INNAGO ENGINEERING PORTFOLIO — CENTRAL DATA FILE
 * ═══════════════════════════════════════════════════════════════
 *
 * All portfolio data lives here. Update values in this file and
 * every page that includes it will reflect the changes.
 *
 * PLACEHOLDER values are marked with:
 *   "PLACEHOLDER" in strings, or 0/null in numbers
 *   Search for "PLACEHOLDER" to find all items needing real data.
 *
 * Usage in HTML pages:
 *   <script src="portfolio-data.js"></script>
 *   <script> console.log(PORTFOLIO.headline.totalReleases); </script>
 */

var PORTFOLIO = {

  // ─── METADATA ───────────────────────────────────────────────
  meta: {
    timespan: "Jan 2023 — Mar 2026",
    months: 39,
    quartersCount: 13,
    startDate: "2023-01-01",
    endDate: "2026-03-31",
    lastUpdated: "2026-03-30"
  },

  // ─── HEADLINE STATS (used on index, exec summary) ──────────
  headline: {
    totalReleases: 265,
    totalFeatures: 174,
    totalMilestones: 165,
    pillarsCount: 7,
    quartersShipping: 13,
    releasesPerMonth: 7,        // approximate average
    integrationsAdded: 15
  },

  // ─── QUARTERLY RELEASE DATA (used on velocity, exec summary, DORA) ──
  quarterlyReleases: [
    { q: "Q1 2023", Feature: 7,  Infrastructure: 1, Support: 0,  total: 8  },
    { q: "Q2 2023", Feature: 17, Infrastructure: 1, Support: 11, total: 29 },
    { q: "Q3 2023", Feature: 6,  Infrastructure: 0, Support: 4,  total: 10 },
    { q: "Q4 2023", Feature: 12, Infrastructure: 0, Support: 10, total: 22 },
    { q: "Q1 2024", Feature: 12, Infrastructure: 0, Support: 13, total: 25 },
    { q: "Q2 2024", Feature: 16, Infrastructure: 0, Support: 10, total: 26 },
    { q: "Q3 2024", Feature: 14, Infrastructure: 1, Support: 5,  total: 20 },
    { q: "Q4 2024", Feature: 18, Infrastructure: 0, Support: 4,  total: 22 },
    { q: "Q1 2025", Feature: 21, Infrastructure: 0, Support: 6,  total: 27 },
    { q: "Q2 2025", Feature: 19, Infrastructure: 1, Support: 4,  total: 24 },
    { q: "Q3 2025", Feature: 12, Infrastructure: 3, Support: 1,  total: 16 },
    { q: "Q4 2025", Feature: 10, Infrastructure: 6, Support: 1,  total: 17 },
    { q: "Q1 2026", Feature: 10, Infrastructure: 0, Support: 9,  total: 19 }
  ],

  releaseColors: {
    Feature: "#3498DB",
    Infrastructure: "#7C3AED",
    Support: "#D97706"
  },

  // ─── YEARLY SUMMARIES ──────────────────────────────────────
  yearlySummaries: [
    { year: 2023, releases: 69 },
    { year: 2024, releases: 93 },
    { year: 2025, releases: 84 },
    { year: 2026, releases: 19, note: "Q1 only" }
  ],

  // ─── PLATFORM SCALE METRICS (exec summary) ─────────────────
  // PLACEHOLDER — These are eng-adjacent business metrics you own
  platformScale: {
    // Transaction volume processed through the platform per quarter
    quarterlyTransactionVolume: [
      { q: "Q1 2023", volume: 0, label: "PLACEHOLDER" },
      { q: "Q2 2023", volume: 0, label: "PLACEHOLDER" },
      { q: "Q3 2023", volume: 0, label: "PLACEHOLDER" },
      { q: "Q4 2023", volume: 0, label: "PLACEHOLDER" },
      { q: "Q1 2024", volume: 0, label: "PLACEHOLDER" },
      { q: "Q2 2024", volume: 0, label: "PLACEHOLDER" },
      { q: "Q3 2024", volume: 0, label: "PLACEHOLDER" },
      { q: "Q4 2024", volume: 0, label: "PLACEHOLDER" },
      { q: "Q1 2025", volume: 0, label: "PLACEHOLDER" },
      { q: "Q2 2025", volume: 0, label: "PLACEHOLDER" },
      { q: "Q3 2025", volume: 0, label: "PLACEHOLDER" },
      { q: "Q4 2025", volume: 0, label: "PLACEHOLDER" },
      { q: "Q1 2026", volume: 0, label: "PLACEHOLDER" }
    ],
    // Active users on platform (accounts, tenants, landlords)
    activeUsers: {
      current: 0,               // PLACEHOLDER — total active users as of Mar 2026
      auth0Migrated: 300000,    // known: ~300K migrated to Auth0
      growth: "PLACEHOLDER"     // e.g., "3.2x since Jan 2023"
    },
    // Integration adoption (how many tenants/landlords use each integration)
    integrationAdoption: [
      { name: "QuickBooks",     adopters: 0, label: "PLACEHOLDER" },
      { name: "Zillow",         adopters: 0, label: "PLACEHOLDER" },
      { name: "Brevo",          adopters: 0, label: "PLACEHOLDER" },
      { name: "HubSpot",        adopters: 0, label: "PLACEHOLDER" },
      { name: "Experian",       adopters: 0, label: "PLACEHOLDER" },
      { name: "Transunion",     adopters: 0, label: "PLACEHOLDER" }
    ],
    // Payment success rate (if Hyperswitch improved routing)
    paymentSuccessRate: {
      before: 0,                // PLACEHOLDER — % before Hyperswitch
      after: 0,                 // PLACEHOLDER — % after Hyperswitch
      label: "PLACEHOLDER"
    }
  },

  // ─── DORA METRICS (Engineering Effectiveness page) ──────────
  dora: {
    // Deployment Frequency — already have this from release data
    // (derived from quarterlyReleases above)

    // Lead Time for Changes: PR open → merged → deployed
    // PLACEHOLDER — pull from GitHub API
    leadTime: {
      unit: "hours",
      quarterly: [
        { q: "Q1 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2026", median: 0, label: "PLACEHOLDER" }
      ],
      currentMedian: 0,         // PLACEHOLDER — current median lead time in hours
      trend: "PLACEHOLDER"      // e.g., "Improved 40% since 2023"
    },

    // Change Failure Rate: hotfixes or rollbacks / total deploys
    // PLACEHOLDER — derive from release tags + incident data
    changeFailureRate: {
      unit: "percent",
      quarterly: [
        { q: "Q1 2023", rate: 0, label: "PLACEHOLDER" },
        { q: "Q2 2023", rate: 0, label: "PLACEHOLDER" },
        { q: "Q3 2023", rate: 0, label: "PLACEHOLDER" },
        { q: "Q4 2023", rate: 0, label: "PLACEHOLDER" },
        { q: "Q1 2024", rate: 0, label: "PLACEHOLDER" },
        { q: "Q2 2024", rate: 0, label: "PLACEHOLDER" },
        { q: "Q3 2024", rate: 0, label: "PLACEHOLDER" },
        { q: "Q4 2024", rate: 0, label: "PLACEHOLDER" },
        { q: "Q1 2025", rate: 0, label: "PLACEHOLDER" },
        { q: "Q2 2025", rate: 0, label: "PLACEHOLDER" },
        { q: "Q3 2025", rate: 0, label: "PLACEHOLDER" },
        { q: "Q4 2025", rate: 0, label: "PLACEHOLDER" },
        { q: "Q1 2026", rate: 0, label: "PLACEHOLDER" }
      ],
      currentRate: 0,           // PLACEHOLDER — current quarter CFR %
      trend: "PLACEHOLDER"
    },

    // Mean Time to Recovery (MTTR): incident → resolution
    // PLACEHOLDER — from incident logs / PagerDuty / Freshdesk
    mttr: {
      unit: "hours",
      quarterly: [
        { q: "Q1 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2023", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2024", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q2 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q3 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q4 2025", median: 0, label: "PLACEHOLDER" },
        { q: "Q1 2026", median: 0, label: "PLACEHOLDER" }
      ],
      currentMedian: 0,         // PLACEHOLDER — current median MTTR in hours
      trend: "PLACEHOLDER"
    },

    // Overall DORA classification
    // Elite: DF on-demand, LT <1hr, CFR <5%, MTTR <1hr
    // High: DF daily-weekly, LT <1day, CFR <10%, MTTR <1day
    // Medium: DF weekly-monthly, LT <1month, CFR <15%, MTTR <1day
    // Low: DF monthly+, LT >1month, CFR >15%, MTTR >1week
    currentClassification: "PLACEHOLDER",  // e.g., "High" or "Medium"
    targetClassification: "PLACEHOLDER"    // e.g., "Elite"
  },

  // ─── TEAM & CAPACITY ──────────────────────────────────────
  team: {
    // Headcount over time
    headcount: [
      { period: "Q1 2023", count: 0, label: "PLACEHOLDER" },
      { period: "Q2 2023", count: 0, label: "PLACEHOLDER" },
      { period: "Q3 2023", count: 0, label: "PLACEHOLDER" },
      { period: "Q4 2023", count: 0, label: "PLACEHOLDER" },
      { period: "Q1 2024", count: 0, label: "PLACEHOLDER" },
      { period: "Q2 2024", count: 0, label: "PLACEHOLDER" },
      { period: "Q3 2024", count: 0, label: "PLACEHOLDER" },
      { period: "Q4 2024", count: 0, label: "PLACEHOLDER" },
      { period: "Q1 2025", count: 0, label: "PLACEHOLDER" },
      { period: "Q2 2025", count: 0, label: "PLACEHOLDER" },
      { period: "Q3 2025", count: 0, label: "PLACEHOLDER" },
      { period: "Q4 2025", count: 0, label: "PLACEHOLDER" },
      { period: "Q1 2026", count: 0, label: "PLACEHOLDER" }
    ],
    headcountRange: "30–45",    // known approximate range
    currentHeadcount: 0,        // PLACEHOLDER — exact current number

  },

  // ─── ROADMAP ──────────────────────────────────────────────
  roadmap: {
    // Next 2-3 quarters of planned initiatives
    upcoming: [
      {
        name: "PLACEHOLDER — Initiative 1",
        description: "PLACEHOLDER",
        quarter: "Q2 2026",
        pillar: "PLACEHOLDER",
        status: "planned"       // planned | in-progress | shipped
      },
      {
        name: "PLACEHOLDER — Initiative 2",
        description: "PLACEHOLDER",
        quarter: "Q2 2026",
        pillar: "PLACEHOLDER",
        status: "planned"
      },
      {
        name: "PLACEHOLDER — Initiative 3",
        description: "PLACEHOLDER",
        quarter: "Q3 2026",
        pillar: "PLACEHOLDER",
        status: "planned"
      },
      {
        name: "PLACEHOLDER — Initiative 4",
        description: "PLACEHOLDER",
        quarter: "Q3 2026",
        pillar: "PLACEHOLDER",
        status: "planned"
      },
      {
        name: "Snowflake AI Insights",
        description: "Centralized data warehouse powering AI-driven analytics and predictive insights",
        quarter: "Q2 2026",
        pillar: "Analytics & AI",
        status: "in-progress"
      },
      {
        name: "AI Support Agents",
        description: "Freshdesk tickets triaged and resolved by AI agents with human review gates",
        quarter: "Q2 2026",
        pillar: "Analytics & AI",
        status: "in-progress"
      }
    ]
  },

  // ─── ACTIVE MIGRATIONS & COMPLETION ────────────────────────
  migrations: [
    {
      name: "AWS EKS Migration",
      percentComplete: 0,       // PLACEHOLDER — 0-100
      status: "PLACEHOLDER",    // e.g., "85% complete, 3 services remaining"
      targetCompletion: "PLACEHOLDER"
    },
    {
      name: ".NET Modernization",
      percentComplete: 0,       // PLACEHOLDER
      status: "PLACEHOLDER",
      targetCompletion: "PLACEHOLDER"
    }
  ],

};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────
// Use these in pages to check if a value is a placeholder

PORTFOLIO.isPlaceholder = function(val) {
  if (val === 0 || val === null || val === undefined) return true;
  if (typeof val === 'string' && val.indexOf('PLACEHOLDER') !== -1) return true;
  return false;
};

PORTFOLIO.formatNumber = function(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num.toString();
};

PORTFOLIO.shortQuarter = function(q) {
  return q.replace(' 20', " '");
};
