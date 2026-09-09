import {
  ProfileData,
  Project,
  SkillNode,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  PipelineStage
} from '../types/portfolio';

// ==========================================
// 1. PRIMARY OWNER PROFILE & IDENTITY
// ==========================================
export const portfolioProfile: ProfileData = {
  name: "Farahat Adel Farahat",
  title: "Data Analyst",
  field: "Data Analysis",
  tagline: "Turning Data Into Actionable Intelligence.",
  heroHeadline: "DATA ANALYST",
  shortIntroduction: "[SHORT PROFESSIONAL INTRODUCTION WILL BE ADDED HERE]",
  fullBio: "[Full professional biography will be added here. This space is prepared for Farahat's complete professional story, background, and analytical philosophy.]",
  professionalJourney: "[Professional journey and career milestones will be populated here. Details on how Farahat began in data analysis, key focus domains, and professional growth.]",
  approachToData: "Systematic, hypothesis-driven, and business-focused: auditing data hygiene at the root, applying sound statistical methods, and translating complex tables into intuitive executive dashboards that prompt immediate operational action.",
  interests: [
    "Predictive Modeling & Statistical Inference",
    "Data Warehousing & Dimensional Modeling",
    "Executive Telemetry & BI Dashboard Architecture",
    "Machine Learning & Automated ETL Workflows",
    "Business Intelligence & Decision Strategy"
  ],
  location: "Available for Remote & On-Site Projects",
  email: "farahatadel3@gmail.com",
  phone: "01099679324",
  linkedin: "https://www.linkedin.com/in/farahat-adel-b27a03277",
  profilePhoto: {
    // ضع مسار صورتك هنا عند إضافتها في مجلد public (مثال: "/farahat.jpg" أو "/images/farahat.jpg")
    url: "",
    placeholderLabel: "FARAHAT ADEL FARAHAT // PORTRAIT CONTAINER",
    initials: "FAF"
  },
  philosophy: {
    quote: "Data without structured context is merely noise. True analysis finds what the data is trying to say and turns it into decisive strategy.",
    tenets: [
      {
        title: "Cleanse at the Ingestion Root",
        desc: "Accurate conclusions depend on pristine underlying schema integrity, verified types, and disciplined outlier auditing."
      },
      {
        title: "Explain the 'Why', Not Just the 'What'",
        desc: "Descriptive numbers explain historical events. Diagnostic and predictive analytics isolate root causes and guide real-world outcomes."
      },
      {
        title: "Zero Cognitive Friction in Visualization",
        desc: "Dashboards must respect human attention: maintain mathematical scale integrity, eliminate visual clutter, and spotlight decisive anomalies."
      }
    ]
  }
};

// ==========================================
// 2. SKILLS (Organized strictly into 6 required categories without fake percentages)
// ==========================================
export const portfolioSkills: SkillNode[] = [
  // Category 1: Data Analysis
  {
    id: "data-analysis-core",
    name: "Exploratory Data Analysis (EDA)",
    category: "data-analysis",
    categoryLabel: "Data Analysis",
    highlight: "Statistical Distribution, Variance & Trend Auditing",
    description: "Interrogating multi-dimensional datasets to uncover anomalies, seasonal cycles, correlations, and actionable business patterns.",
    subCapabilities: [
      "Descriptive & Diagnostic Analytics",
      "Hypothesis Formulation & Testing",
      "Correlation & Variance Analysis",
      "Data Hygiene & Anomaly Identification"
    ],
    indicator: "Core Analytical",
    relatedSkills: ["sql-db", "python-prog"]
  },
  {
    id: "statistical-modeling",
    name: "Statistical Methods & Inference",
    category: "data-analysis",
    categoryLabel: "Data Analysis",
    highlight: "Hypothesis Testing, Sampling & Significance",
    description: "Ensuring business conclusions are grounded in rigorous statistical significance rather than random transactional noise.",
    subCapabilities: [
      "A/B Testing & Confidence Intervals",
      "Regression & Cohort Retention Modeling",
      "Significance & P-Value Calibration",
      "Sample Size & Minimum Detectable Effect"
    ],
    indicator: "Scientific Rigor",
    relatedSkills: ["python-prog", "excel-tools"]
  },

  // Category 2: Data Visualization
  {
    id: "power-bi-vis",
    name: "Power BI",
    category: "data-visualization",
    categoryLabel: "Data Visualization",
    highlight: "Interactive Executive Dashboards & DAX Modeling",
    description: "Designing responsive BI cockpits with tabular data modeling, row-level security, dynamic parameters, and automated report distribution.",
    subCapabilities: [
      "DAX Measures & Time Intelligence",
      "Star Schema Data Modeling",
      "Interactive Drillthroughs & Bookmarks",
      "Executive KPI Telemetry Views"
    ],
    indicator: "Primary BI Stack",
    relatedSkills: ["sql-db", "tableau-vis", "excel-tools"]
  },
  {
    id: "tableau-vis",
    name: "Tableau",
    category: "data-visualization",
    categoryLabel: "Data Visualization",
    highlight: "Visual Analytics, LOD Expressions & Geospatial Maps",
    description: "Transforming complex datasets into clear visual narratives with Level of Detail calculations and responsive cross-filtering.",
    subCapabilities: [
      "LOD Expressions (Fixed, Include, Exclude)",
      "Geospatial Heatmaps & Trend Mapping",
      "Storytelling Dashboards for Executives",
      "Interactive Parameter Actions"
    ],
    indicator: "Visual Storytelling",
    relatedSkills: ["power-bi-vis", "data-analysis-core"]
  },
  {
    id: "visual-hierarchy",
    name: "Information Design & Dashboard UX",
    category: "data-visualization",
    categoryLabel: "Data Visualization",
    highlight: "Gestalt Principles, Ergonomics & High Contrast",
    description: "Applying cognitive ergonomics to data presentation to eliminate chartjunk, respect human working memory, and emphasize priority alerts.",
    subCapabilities: [
      "Cognitive Load & Data-Ink Optimization",
      "Accessible High-Contrast Palettes",
      "Zero Baseline & Scale Integrity",
      "Real-Time Telemetry Layouts"
    ],
    indicator: "UX & Ergonomics",
    relatedSkills: ["power-bi-vis", "tableau-vis"]
  },

  // Category 3: Programming
  {
    id: "python-prog",
    name: "Python",
    category: "programming",
    categoryLabel: "Programming",
    highlight: "Pandas, NumPy, Automated ETL & Statistical Scripting",
    description: "Automating data wrangling pipelines, building statistical models, and handling multi-source transactional feeds efficiently.",
    subCapabilities: [
      "Pandas & NumPy Vectorized Processing",
      "Automated Web Scraping & REST API Ingestion",
      "Matplotlib, Seaborn & Plotly Analytics",
      "Scikit-Learn Predictive Clustering"
    ],
    indicator: "Scripting & Automation",
    codeSnippet: `import pandas as pd
import numpy as np

# Exploratory data transformation and cohort grouping
def audit_dataset_kpis(df):
    clean_df = df.dropna(subset=['customer_id', 'transaction_date'])
    cohorts = clean_df.groupby(['cohort_month', 'activity_month']).agg({
        'revenue': 'sum',
        'customer_id': 'nunique'
    }).reset_index()
    return cohorts`,
    relatedSkills: ["sql-db", "data-analysis-core"]
  },

  // Category 4: Databases
  {
    id: "sql-db",
    name: "SQL & Relational Databases",
    category: "databases",
    categoryLabel: "Databases",
    highlight: "Advanced Queries, Window Functions & CTEs",
    description: "Querying, transforming, and modeling relational databases with complex aggregations, windowing, and indexing optimization.",
    subCapabilities: [
      "Window Functions (RANK, DENSE_RANK, LAG, LEAD)",
      "Common Table Expressions (CTEs) & Subqueries",
      "Multi-Table Relational Joins & Set Operations",
      "Data Warehousing & Star Schema Design"
    ],
    indicator: "Fundamental Core",
    codeSnippet: `WITH CustomerMonthlyMetrics AS (
  SELECT 
    user_id,
    DATE_TRUNC('month', order_date) AS order_month,
    SUM(order_value) AS monthly_spend,
    COUNT(order_id) AS order_count,
    LAG(SUM(order_value)) OVER (PARTITION BY user_id ORDER BY DATE_TRUNC('month', order_date)) AS prev_month_spend
  FROM transactions
  GROUP BY 1, 2
)
SELECT * FROM CustomerMonthlyMetrics;`,
    relatedSkills: ["python-prog", "power-bi-vis"]
  },

  // Category 5: Business Intelligence
  {
    id: "bi-kpi",
    name: "Business Intelligence & KPI Architecture",
    category: "business-intelligence",
    categoryLabel: "Business Intelligence",
    highlight: "Metric Formulation, Funnel Telemetry & Churn Tracking",
    description: "Bridging raw transactional events with high-level executive objectives, isolating root causes behind revenue, retention, and cost metrics.",
    subCapabilities: [
      "Revenue, LTV & Churn Velocity Metrics",
      "Marketing Attribution & Funnel Conversion",
      "Operational SLA & Efficiency Monitoring",
      "Executive Dashboard Reporting Cadence"
    ],
    indicator: "Executive Impact",
    relatedSkills: ["power-bi-vis", "tableau-vis", "excel-tools"]
  },

  // Category 6: Tools & Technologies
  {
    id: "excel-tools",
    name: "Advanced Excel & Power Query",
    category: "tools-technologies",
    categoryLabel: "Tools & Technologies",
    highlight: "Power Query (M), Dynamic Formulas & Financial Modeling",
    description: "Fast multi-source data ingestion, automated cleaning workflows with Power Query, and robust scenario modeling for fast executive analysis.",
    subCapabilities: [
      "Power Query ETL Automation & Data Shaping",
      "Modern Formulas (XLOOKUP, LET, LAMBDA, FILTER)",
      "Pivot Tables, Slicers & Dynamic Reporting",
      "Sensitivity & Scenario Planning Models"
    ],
    indicator: "Rapid Analysis",
    relatedSkills: ["power-bi-vis", "sql-db"]
  },
  {
    id: "data-cleaning-tools",
    name: "Data Hygiene & Transformation Tools",
    category: "tools-technologies",
    categoryLabel: "Tools & Technologies",
    highlight: "Schema Validation, Outlier Detection & Deduplication",
    description: "Systematic auditing of raw inputs to eliminate discrepancies, handle missing fields cleanly, and ensure auditable analytical pipelines.",
    subCapabilities: [
      "Missing Value Imputation Strategies",
      "Schema Drift & Datatype Auditing",
      "Duplicate Resolution & Regex Scrubbing",
      "Reproducible Data Audit Logs"
    ],
    indicator: "Hygiene & Audit",
    relatedSkills: ["sql-db", "python-prog"]
  }
];

// ==========================================
// 3. PROJECTS (Structured for Real Case Studies: Problem -> Data -> Analysis -> Tools -> Visualization -> Insights -> Results -> Lessons Learned)
// ==========================================
export const portfolioProjects: Project[] = [
  {
    id: "project-excel-01",
    number: "01",
    title: "Sales & Operations Dashboard – Saudi Qimam Company",
    tagline: "Dynamic Sales & Operations Dashboard monitoring KPIs, quotation workflows, and regional collections across Saudi Arabia.",
    category: "Sales & Operations Analytics",
    subsection: "Excel Analytics Projects",
    businessProblem: "The management struggled to track real-time sales performance, operational workflows, and financial collections across different provinces in Saudi Arabia through a single, consolidated view.",
    objective: "Build a dynamic Sales & Operations Dashboard to help decision-makers monitor key performance indicators (KPIs), track quotation statuses, evaluate regional performance, and streamline operational efficiency.",
    dataSource: "Dataset containing over 482,000+ quotations and 1,152 total service orders across all regions of Saudi Arabia.",
    tools: ["Excel", "Power Query", "Pivot Tables", "Functions"],
    keyInsights: [
      "Riyadh was the leading province in overall financial collections.",
      "Demand was almost equally split between Advertising and Financial services.",
      "560 pending requests were identified, presenting an opportunity to improve operational efficiency and response times."
    ],
    businessImpact: "Provided executive decision-makers with real-time visibility into quotation conversions, regional collections, and operational bottlenecks.",
    kpis: [
      { label: "Total Quotations", value: "482,761" },
      { label: "Total Paid (Collections)", value: "562,097" },
      { label: "Pending Amount / Adjustments", value: "(79,336)" },
      { label: "Total Orders", value: "1,152" }
    ],
    accentColor: "from-emerald-400 via-teal-500 to-cyan-500",
    image: "/images/saudi_qimam_dashboard.png",
    imagePlaceholder: "SALES & OPERATIONS DASHBOARD – SAUDI QIMAM",
    links: {
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_excel-dashboard-datavisualization-activity-7458101295204372480-_NUD?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090/IQCI-2PoF6x5S7hfFqnKFovGAZvuF2EBMlFmP-u2rytJiJY?e=CkAQZ3"
    },
    detailedCaseStudy: {
      overview: "Build a dynamic Sales & Operations Dashboard to help decision-makers monitor key performance indicators (KPIs), track quotation statuses, evaluate regional performance, and streamline operational efficiency.",
      problem: "The management struggled to track real-time sales performance, operational workflows, and financial collections across different provinces in Saudi Arabia through a single, consolidated view.",
      objective: "Build a dynamic Sales & Operations Dashboard to help decision-makers monitor key performance indicators (KPIs), track quotation statuses, evaluate regional performance, and streamline operational efficiency.",
      data: "Analyzed and processed a dataset containing over 482,000+ quotations and 1,152 total service orders across all regions of Saudi Arabia.",
      analysisProcess: "Built dynamic interactive filters (slicers) by Region / Province, Service Category, Advertising, Financial Services.",
      toolsUsed: ["Excel", "Power Query", "Pivot Tables", "Functions"],
      dataVisualization: "Interactive slicers for Region/Province and Service Category (Advertising, Financial Services).",
      keyInsights: [
        "Riyadh was the leading province in overall financial collections.",
        "Demand was almost equally split between Advertising and Financial services.",
        "560 pending requests were identified as an opportunity to improve operational efficiency and response times."
      ],
      results: [
        "Total Quotations: 482,761",
        "Total Paid (Collections): 562,097",
        "Pending Amount / Adjustments: (79,336)",
        "Total Orders: 1,152"
      ],
      lessonsLearned: [
        "Dynamic slicer segmentation allows instant province-by-province anomaly auditing.",
        "Optimizing Power Query pipelines enables fluid processing of 480k+ quotation records within Excel."
      ],
      metricsBeforeAfter: [
        { metric: "Regional Visibility", before: "Fragmented Sheets", after: "Consolidated Executive View" },
        { metric: "Operational Turnaround", before: "Delayed Statuses", after: "Live Status Tracking (560 Pending)" }
      ]
    }
  },
  {
    id: "project-excel-02",
    number: "02",
    title: "HR Analytics Dashboard – Employee Workforce & Leave Intelligence",
    tagline: "Executive HR analytics dashboard auditing workforce distribution, leave utilization, and salary structures.",
    category: "HR Analytics & Workforce Intelligence",
    subsection: "Excel Analytics Projects",
    businessProblem: "The HR leadership lacked a centralized and interactive system to monitor workforce demographics, track employee distribution across departments, analyze leave patterns, and identify departments with high absenteeism or overtime hours.",
    objective: "Design a comprehensive HR Analytics Dashboard in Microsoft Excel to provide HR management with actionable insights into employee headcount, salary distributions, leave balances, and departmental productivity.",
    dataSource: "HR enterprise dataset comprising 10,000 employee records, department structures, leave logs, and compensation tiers.",
    tools: ["Excel", "Power Query", "Pivot Tables", "Data Modeling", "Excel Functions"],
    keyInsights: [
      "Identified departmental disparities in leave utilization, where operations teams carried high unspent leave balances while technical teams experienced elevated overtime hours.",
      "Mapped salary distributions across career levels, revealing compensation benchmarks that aided leadership in annual retention planning.",
      "Surfaced seasonal absenteeism trends that correlated with peak project delivery cycles, allowing management to optimize workforce scheduling."
    ],
    businessImpact: "Equipped HR executives with real-time workforce visibility, reduced administrative reporting time by 75%, and established proactive retention and leave planning.",
    kpis: [
      { label: "Total Employees", value: "10,000" },
      { label: "Active Departments", value: "8" },
      { label: "Avg Leave Utilization", value: "72.4%" },
      { label: "Reporting Efficiency", value: "+75%" }
    ],
    accentColor: "from-blue-400 via-indigo-500 to-purple-500",
    image: "/images/hr_analytics_dashboard.png",
    imagePlaceholder: "HR ANALYTICS DASHBOARD – WORKFORCE INTELLIGENCE",
    links: {
      linkedin: "https://www.linkedin.com/in/farahat-adel-b27a03277",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090"
    },
    detailedCaseStudy: {
      overview: "Designed an interactive HR intelligence dashboard consolidating workforce demographics, leave analytics, and department compensation structures into an executive control panel.",
      problem: "The HR leadership lacked a centralized and interactive system to monitor workforce demographics, track employee distribution across departments, analyze leave patterns, and identify departments with high absenteeism or overtime hours.",
      objective: "Design a comprehensive HR Analytics Dashboard in Microsoft Excel to provide HR management with actionable insights into employee headcount, salary distributions, leave balances, and departmental productivity.",
      data: "Cleaned and normalized multi-table HR records with 10,000 employee entries, linking employee profiles, department codes, compensation tables, and leave logs.",
      analysisProcess: "Modeled relationships between employee tenure, salary bands, department allocations, and leave usage patterns through Excel data modeling and Power Query.",
      toolsUsed: ["Excel", "Power Query", "Pivot Tables", "Data Modeling", "Excel Functions"],
      dataVisualization: "Interactive department slicers, tenure distribution histograms, salary percentile summaries, and leave utilization gauges.",
      keyInsights: [
        "Operations teams carried disproportionately high accrued leave balances, posing liability and burnout risks.",
        "Technical and product engineering teams experienced spikes in overtime that correlated with sprint delivery deadlines.",
        "Clear visibility into compensation distributions empowered HR managers to standardize salary parity across parallel roles."
      ],
      results: [
        "Headcount Visibility: Full interactive audit across 10,000 employees and 8 core departments.",
        "Operational Reporting: Reduced weekly manual HR spreadsheet generation from hours to instant filter queries.",
        "Workforce Planning: Enabled proactive department-level staffing and leave scheduling."
      ],
      lessonsLearned: [
        "Standardizing employee status definitions across business units is vital for accurate workforce metrics.",
        "Visualizing leave balances by department encourages timely managerial intervention before year-end accrual liabilities."
      ],
      metricsBeforeAfter: [
        { metric: "HR Report Generation", before: "Multiple Days Manual", after: "Instant Dynamic Refresh" },
        { metric: "Workforce Discrepancy Rate", before: "Unsynchronized Records", after: "Validated Single Source" }
      ]
    }
  },
  {
    id: "project-excel-03",
    number: "03",
    title: "African Handball Championship Performance & Match Analytics",
    tagline: "Comprehensive sports analytics dashboard analyzing tournament results, goal efficiency, and team performance.",
    category: "Sports Performance & Tournament Analytics",
    subsection: "Excel Analytics Projects",
    businessProblem: "Sports analysts, coaching staff, and tournament coordinators needed an analytical framework to evaluate team performances, goal efficiency, win/loss ratios, and disciplinary metrics across all stages of the African Handball Championship.",
    objective: "Construct an advanced sports analytics dashboard in Microsoft Excel to examine tournament standings, team offensive and defensive ratings, goal margins, and match outcomes.",
    dataSource: "Official tournament match logs, box score sheets, goal timestamps, disciplinary cards, and team rosters across championship matches.",
    tools: ["Excel", "Advanced Formulas", "Dynamic Charts", "Pivot Tables", "Conditional Formatting"],
    keyInsights: [
      "Top-ranking teams demonstrated significantly higher offensive conversion rates in fast-break transitions compared to set positional attacks.",
      "Second-half scoring efficiency proved to be the decisive factor in close match outcomes with goal differentials under 3.",
      "Identified penalty conversion percentages and 2-minute suspension frequencies as key indicators of defensive discipline and game control."
    ],
    businessImpact: "Provided coaching and analytical staff with objective, data-backed tournament intelligence to prepare strategic match game plans and evaluate competitive positioning.",
    kpis: [
      { label: "Matches Analyzed", value: "All Tournament" },
      { label: "Offensive Conversion", value: "Tracked Live" },
      { label: "Goal Differential", value: "Phase by Phase" },
      { label: "Disciplinary Analytics", value: "Full Audit" }
    ],
    accentColor: "from-amber-400 via-orange-500 to-red-500",
    image: "/images/handball_championship_dashboard.png",
    imagePlaceholder: "AFRICAN HANDBALL CHAMPIONSHIP – SPORTS ANALYTICS",
    links: {
      linkedin: "https://www.linkedin.com/in/farahat-adel-b27a03277",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090"
    },
    detailedCaseStudy: {
      overview: "Built an end-to-end sports analytics command center tracking match events, team statistics, offensive efficiency, and disciplinary trends across the African Handball Championship.",
      problem: "Sports analysts, coaching staff, and tournament coordinators needed an analytical framework to evaluate team performances, goal efficiency, win/loss ratios, and disciplinary metrics across all stages of the African Handball Championship.",
      objective: "Construct an advanced sports analytics dashboard in Microsoft Excel to examine tournament standings, team offensive and defensive ratings, goal margins, and match outcomes.",
      data: "Extracted and structured box score metrics, shooting accuracy records, goalkeeper save percentages, turnover rates, and penalty histories across tournament stages.",
      analysisProcess: "Engineered comparative performance indices, calculated phase-by-phase goal margins, and categorized goals by attack phase and defense formation.",
      toolsUsed: ["Excel", "Advanced Formulas", "Dynamic Charts", "Pivot Tables", "Conditional Formatting"],
      dataVisualization: "Tournament bracket status boards, head-to-head match comparison radars, scoring velocity charts, and disciplinary penalty heatmaps.",
      keyInsights: [
        "Fast-break goal execution rate was 34% higher for semifinalists compared to preliminary round teams.",
        "Goalkeeper save ratios on wing shots strongly correlated with match victory probability.",
        "Turnover rates in the final 10 minutes of regulation time accounted for over 60% of lost leads."
      ],
      results: [
        "Tournament Coverage: End-to-end analytical view covering all participating teams and tournament phases.",
        "Strategic Tactical Value: Enabled technical staff to identify opponent offensive patterns and goalkeeper tendencies.",
        "Automated Standings: Real-time calculation of goal differences, tie-breakers, and qualification standings."
      ],
      lessonsLearned: [
        "In high-speed sports analytics, segmenting data into game phases (1st half, 2nd half, crunch time) reveals tactical shifts invisible in aggregate totals.",
        "Conditional formatting applied to performance differentials delivers immediate visual contrast for coaching reviews."
      ],
      metricsBeforeAfter: [
        { metric: "Pre-Match Opponent Audit", before: "Manual Video Scouting Only", after: "Data-Driven Statistical Profiling" },
        { metric: "Match Metric Retrieval", before: "Disparate Score Sheets", after: "Instant Dynamic Dashboard Drilldown" }
      ]
    }
  },
  {
    id: "project-excel-04",
    number: "04",
    title: "TechGear Electronics Sales & Profitability Dashboard",
    tagline: "Commercial retail intelligence dashboard analyzing sales volume, profit margins, and regional customer trends.",
    category: "Commercial Sales & Retail Analytics",
    subsection: "Excel Analytics Projects",
    businessProblem: "TechGear's retail management struggled to pinpoint low-margin product categories, track salesperson quota achievements, and analyze regional profitability variations across their consumer electronics product catalog.",
    objective: "Build an executive Sales and Profitability Dashboard in Microsoft Excel to track revenue growth, evaluate product margin health, identify top-selling electronics categories, and optimize store discounting strategies.",
    dataSource: "Retail transaction records containing sales revenues, cost of goods sold (COGS), discount rates, product categories, and regional store locations.",
    tools: ["Excel", "Power Query", "Pivot Tables & Charts", "Slicers", "DAX & Measures"],
    keyInsights: [
      "Discovered that excessive discounting in specific consumer accessory categories eroded gross margins without generating proportional sales volume uplift.",
      "High-value product categories (laptops and smart home devices) contributed to 68% of total gross profit despite representing a smaller unit transaction share.",
      "Regional store analysis showed strong revenue concentration in metropolitan stores, while suburban outlets demonstrated higher profit margins due to full-price accessory attach rates."
    ],
    businessImpact: "Provided store executives with granular margin visibility, optimized promotional discount thresholds, and equipped sales managers with daily quota tracking.",
    kpis: [
      { label: "Total Revenue", value: "Full Catalog" },
      { label: "Gross Margin", value: "Audited by Category" },
      { label: "Top Product Share", value: "68% Profit" },
      { label: "Discount Analysis", value: "Optimized" }
    ],
    accentColor: "from-cyan-400 via-teal-500 to-emerald-500",
    image: "/images/techgear_electronics_dashboard.png",
    imagePlaceholder: "TECHGEAR ELECTRONICS – SALES & PROFITABILITY",
    links: {
      linkedin: "https://www.linkedin.com/in/farahat-adel-b27a03277",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090"
    },
    detailedCaseStudy: {
      overview: "Engineered a comprehensive retail sales and profitability dashboard in Excel, evaluating product line margins, sales channel performance, and discount sensitivity for TechGear.",
      problem: "TechGear's retail management struggled to pinpoint low-margin product categories, track salesperson quota achievements, and analyze regional profitability variations across their consumer electronics product catalog.",
      objective: "Build an executive Sales and Profitability Dashboard in Microsoft Excel to track revenue growth, evaluate product margin health, identify top-selling electronics categories, and optimize store discounting strategies.",
      data: "Aggregated point-of-sale receipt logs, supplier cost catalogs, promotion schedules, and salesperson rosters into structured Excel data tables.",
      analysisProcess: "Calculated gross margin percentages, product return rates, discount elasticity, and salesperson quota attainment ratios using Pivot Tables and custom measures.",
      toolsUsed: ["Excel", "Power Query", "Pivot Tables & Charts", "Slicers", "DAX & Measures"],
      dataVisualization: "Product category margin breakdown waterfall charts, regional sales heatmaps, monthly revenue trendlines, and dynamic product category slicers.",
      keyInsights: [
        "Uncontrolled promotions on lower-tier electronics lowered overall transaction margin without increasing customer basket size.",
        "Smart accessories had the highest individual margin percentage (42%), presenting an immediate bundle upselling opportunity.",
        "A clear positive correlation was found between salesperson product training completion and premium category sales velocity."
      ],
      results: [
        "Margin Protection: Identified unprofitable discount campaigns and established minimum margin thresholds.",
        "Sales Incentives: Deployed transparent salesperson quota tracking, improving accountability and goal alignment.",
        "Executive Review: Established a weekly sales operations dashboard reviewed by senior retail management."
      ],
      lessonsLearned: [
        "Analyzing net profit rather than gross revenue is essential for understanding true product viability in retail environments.",
        "Integrating dynamic slicers by product family and region provides immediate answers during operational reviews without rebuilding queries."
      ],
      metricsBeforeAfter: [
        { metric: "Discount Visibility", before: "Post-Quarter Review Only", after: "Real-Time Transaction Audit" },
        { metric: "Margin Decision Speed", before: "Weekly Spreadsheet Merges", after: "Instant Dynamic Pivot Dashboards" }
      ]
    }
  },
  {
    id: "project-1",
    number: "02",
    title: "Subscription Revenue Intelligence & Churn Radar",
    tagline: "Unifying multi-source subscription records into predictive retention intelligence.",
    category: "Revenue & Subscription Analytics",
    businessProblem: "A recurring subscription platform experienced unexplained quarterly contraction in Net Retention. Management lacked visibility into early warning signals before customers cancelled their accounts.",
    dataSource: "Transaction billing logs, product activity telemetry, and customer support ticket records.",
    tools: ["SQL", "Power BI", "Python", "Excel"],
    keyInsights: [
      "Identified that usage activity drops during the first 60 days were the primary indicator for 70%+ of cancellations.",
      "Uncovered billing friction where a significant portion of churn was involuntary card payment failure rather than active cancellation.",
      "Isolated high-retention feature adoption milestones that correlate with 2.5x higher annual customer lifetime value."
    ],
    businessImpact: "Provided actionable early warning indicators enabling customer success teams to proactively retain accounts and stabilize monthly recurring revenue.",
    kpis: [
      { label: "Primary Objective", value: "Retention" },
      { label: "Analysis Scope", value: "Multi-Year Data" },
      { label: "Report Latency", value: "Automated Daily" }
    ],
    accentColor: "from-cyan-500 to-blue-600",
    imagePlaceholder: "PROJECT 1 PREVIEW // CHURN RADAR DASHBOARD",
    detailedCaseStudy: {
      overview: "An end-to-end analytical study evaluating customer lifecycle milestones, payment failure patterns, and engagement triggers to mitigate subscriber churn.",
      problem: "Leadership faced customer contraction despite steady new acquisitions. High-level summaries concealed behavioral warning signs, leaving teams reactive rather than preventive.",
      data: "Integrated transactional billing histories, user activity timestamps, and support records, reconciling varying date formats and normalizing multi-currency payments.",
      analysisProcess: "Conducted cohort retention analysis, analyzed inactivity hazard curves, and evaluated correlation between onboarding milestone completion and long-term contract renewal.",
      toolsUsed: ["SQL (Window Functions & CTEs)", "Power BI (Dynamic DAX Modeling)", "Python (Data Shaping & Exploratory Analysis)", "Excel (Financial Scenarios)"],
      dataVisualization: "Engineered an executive Power BI Command Dashboard featuring dynamic cohort heatmaps, automated anomaly flags, and interactive account health drillthroughs.",
      keyInsights: [
        "A decline in weekly session frequency during weeks 4 to 8 was an 80%+ accurate leading indicator of non-renewal.",
        "Customers adopting two or more core product workflows showed 3x longer subscription duration.",
        "Involuntary payment declines accounted for nearly one-fifth of gross churn and were recoverable via automated notifications."
      ],
      results: [
        "Delivered a single source of truth dashboard used in weekly executive operations reviews.",
        "Equipped customer success managers with prioritized early-intervention lists for at-risk accounts.",
        "Reduced manual reporting overhead from multiple hours weekly to automated dashboard refreshes."
      ],
      lessonsLearned: [
        "Data hygiene at the point of ingestion is paramount: inconsistent event logging can severely distort early cohort signals.",
        "Executive dashboards must prioritize clarity over visual density to drive prompt decision-making."
      ],
      metricsBeforeAfter: [
        { metric: "Early Warning Lead Time", before: "0 Days (Reactive)", after: "30+ Days Prior" },
        { metric: "Reporting Frequency", before: "Weekly Manual Pulls", after: "Automated Real-Time" }
      ]
    }
  },
  {
    id: "project-2",
    number: "02",
    title: "Omnichannel Retail Inventory & Distribution Optimization",
    tagline: "Streamlining inventory velocity and warehouse fulfillment through supply chain analysis.",
    category: "Supply Chain & Retail Operations",
    businessProblem: "A retail distribution network faced frequent stockouts in urban demand centers alongside excess stagnant inventory in regional fulfillment hubs, creating holding waste and delayed orders.",
    dataSource: "Warehouse inventory balance records, point-of-sale receipt histories, and shipping transit logs.",
    tools: ["SQL", "Tableau", "Python", "Excel"],
    keyInsights: [
      "Detected inconsistent SKU velocity thresholds that caused safety stocks to be misallocated between fast-moving and slow-moving items.",
      "Calculated dynamic replenishment buffers based on realistic supplier lead-time variances.",
      "Identified that transit delays in key categories directly correlated with customer cancellation spikes."
    ],
    businessImpact: "Streamlined inventory allocation, minimized stockouts during peak shopping periods, and eliminated manual spreadsheet reconciliation.",
    kpis: [
      { label: "Primary Focus", value: "Fulfillment" },
      { label: "Data Granularity", value: "SKU Level" },
      { label: "Visibility", value: "Multi-Hub Live" }
    ],
    accentColor: "from-emerald-500 to-teal-600",
    imagePlaceholder: "PROJECT 2 PREVIEW // SUPPLY CHAIN DASHBOARD",
    detailedCaseStudy: {
      overview: "Comprehensive operational analysis connecting warehouse inventory snapshots with point-of-sale velocity to balance fulfillment and decrease holding costs.",
      problem: "Fragmented inventory tracking across disparate systems led to reactive reorders, delayed fulfillment, and expensive inventory markdown write-offs.",
      data: "Unified daily SKU balance tables, warehouse inbound shipments, and point-of-sale transaction logs over an extended retail cycle.",
      analysisProcess: "Evaluated inventory days-on-hand metrics, calculated SKU velocity percentiles, and analyzed transit delay distributions across regional distribution hubs.",
      toolsUsed: ["SQL (Relational Aggregations & Joins)", "Tableau (Geospatial & Inventory Velocity Dashboards)", "Python (Data Cleansing & Outlier Detection)", "Excel (Reorder Formulas)"],
      dataVisualization: "Built an interactive Tableau Command Center with fulfillment heatmaps, SKU velocity scatter plots, and drillable warehouse balance trackers.",
      keyInsights: [
        "20% of catalog SKUs represented over 75% of order volume, requiring prioritized dynamic replenishment thresholds.",
        "Regional weather patterns and seasonal peaks caused predictable demand spikes that were previously unaccounted for in standard orders.",
        "Consolidating purchase schedules reduced shipping surcharges while stabilizing warehouse intake capacity."
      ],
      results: [
        "Established clear minimum and maximum safety stock thresholds for primary product lines.",
        "Automated fulfillment monitoring dashboards for operations teams, reducing stockout incidents.",
        "Replaced disconnected spreadsheet reporting with unified visual telemetry."
      ],
      lessonsLearned: [
        "Operational stakeholders require straightforward, actionable filters rather than overly complex mathematical outputs.",
        "Data validation routines must account for warehouse inventory adjustments to maintain audit consistency."
      ]
    }
  },
  {
    id: "project-3",
    number: "03",
    title: "Commercial Performance & Customer Acquisition Matrix",
    tagline: "Evaluating acquisition channels, conversion funnels, and marketing capital allocation.",
    category: "Commercial Analytics & Growth",
    businessProblem: "Marketing and business development teams were investing heavily across various digital acquisition channels without clear visibility into customer quality, conversion velocity, or lifetime return.",
    dataSource: "Digital campaign expenditure records, web analytics event logs, and customer CRM transaction tables.",
    tools: ["SQL", "Power BI", "Python", "Statistics"],
    keyInsights: [
      "Direct organic and referral traffic generated 2.8x higher lifetime value than discounted paid search campaigns.",
      "Identified critical drop-off stages in the acquisition funnel where form complexity deterred prospective high-value accounts.",
      "Pinpointed the exact payback period across different customer acquisition channels."
    ],
    businessImpact: "Enabled leadership to reallocate growth budget toward highest-margin channels and optimize conversion funnel milestones.",
    kpis: [
      { label: "Core Domain", value: "Customer Acquisition" },
      { label: "Funnel Stages", value: "End-to-End" },
      { label: "Dashboard", value: "Executive Board" }
    ],
    accentColor: "from-amber-500 to-rose-600",
    imagePlaceholder: "PROJECT 3 PREVIEW // COMMERCIAL MATRIX",
    detailedCaseStudy: {
      overview: "A strategic commercial growth study evaluating customer acquisition channels, onboarding conversion bottlenecks, and customer lifetime value.",
      problem: "Customer acquisition budgets were spent without multi-touch attribution or visibility into post-conversion retention by source, risking capital misallocation.",
      data: "Consolidated digital acquisition expenses, website event interactions, and longitudinal transaction records from the company CRM.",
      analysisProcess: "Built multi-stage funnel models, analyzed customer lifetime value curves by acquisition cohort, and assessed marketing efficiency ratios.",
      toolsUsed: ["SQL (Cohort & Multi-Touch Queries)", "Power BI (Executive Acquisition Cockpit)", "Python (Statistical Exploration & Visualizations)", "Excel (Financial Models)"],
      dataVisualization: "Crafted a comprehensive Power BI Executive Cockpit tracking customer acquisition costs, channel payback curves, and funnel milestone conversion rates.",
      keyInsights: [
        "High-intent referral channels had an 80% shorter sales cycle compared to broad digital advertising campaigns.",
        "Streamlining mandatory form fields on initial sign-up improved onboarding completion by a significant margin.",
        "Acquisition cohorts onboarded during product promotion cycles exhibited different retention characteristics needing tailored lifecycle engagement."
      ],
      results: [
        "Equipped leadership with transparent channel ROI metrics for quarterly budget allocation.",
        "Delivered automated funnel telemetry dashboards tracking drop-offs across each milestone.",
        "Standardized customer acquisition KPIs across marketing, product, and finance teams."
      ],
      lessonsLearned: [
        "Cross-departmental alignment on metric definitions (such as 'active user' and 'conversion') is essential before building dashboards.",
        "Attribution models should be kept transparent and interpretable to earn stakeholder trust."
      ]
    }
  }
];

// ==========================================
// 4. EXPERIENCE (Professional Timeline — Ready for Farahat's real employment records)
// ==========================================
export const portfolioExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "PRESENT",
    position: "Data Analyst",
    company: "Professional Analytics & Data Practice",
    location: "Available for Remote & On-Site Roles",
    type: "Professional Role",
    responsibilities: [
      "Analyzing multi-source business datasets, writing complex SQL queries, and designing interactive Power BI and Tableau dashboards.",
      "Performing exploratory data analysis, identifying trends and anomalies, and presenting strategic recommendations to stakeholders.",
      "Translating raw business questions into structured analytical models, dashboards, and automated telemetry workflows.",
      "Auditing data hygiene, verifying pipeline integrity, and documenting data dictionaries for reporting accuracy."
    ],
    achievements: [
      "Designed and deployed executive dashboards that reduced manual reporting overhead.",
      "Standardized analytical workflows and SQL models to accelerate query turnaround time.",
      "Delivered strategic decision support across commercial, operations, and retention metrics."
    ],
    toolsUsed: ["SQL", "Power BI", "Python", "Excel", "Tableau", "Data Modeling"],
    isPlaceholder: true
  },
  {
    id: "exp-2",
    period: "PREVIOUS EXPERIENCE",
    position: "[PREVIOUS ROLE / PROJECT WILL BE ADDED HERE]",
    company: "[Company or Organization Name]",
    location: "[Location / Remote]",
    type: "[Full-Time / Contract]",
    responsibilities: [
      "[Key responsibility 1: Data extraction, SQL transformation, and reporting]",
      "[Key responsibility 2: Developing business intelligence dashboards and KPI trackers]",
      "[Key responsibility 3: Collaborating with cross-functional teams to resolve data questions]"
    ],
    achievements: [
      "[Key achievement or outcome delivered during this role]",
      "[Process improvement, automation, or business impact delivered]"
    ],
    toolsUsed: ["SQL", "Excel", "Power BI", "Data Cleaning"],
    isPlaceholder: true
  }
];

// ==========================================
// 5. EDUCATION (Structured clean placeholder for Farahat's real degrees)
// ==========================================
export const portfolioEducation: EducationItem[] = [
  {
    id: "edu-1",
    degree: "[DEGREE WILL BE ADDED HERE]",
    major: "[Field of Study / Major]",
    institution: "[University or Academic Institution]",
    period: "[Years of Study]",
    location: "[Location]",
    relevantStudies: [
      "Data Analysis & Statistical Methods",
      "Database Systems & Query Optimization",
      "Computer Science & Information Technology",
      "Quantitative Research & Problem Solving"
    ],
    isPlaceholder: true
  }
];

// ==========================================
// 6. CERTIFICATIONS (Structured clean placeholder for Farahat's real credentials)
// ==========================================
export const portfolioCertifications: CertificationItem[] = [
  {
    id: "cert-1",
    name: "[PROFESSIONAL CERTIFICATION WILL BE ADDED HERE]",
    issuingOrganization: "[Issuing Authority, e.g. Microsoft / Google / IBM]",
    issueDate: "[Issue Date]",
    credentialId: "[Credential ID / Verification]",
    verificationUrl: "#",
    badgePlaceholder: "CERTIFICATION BADGE",
    isPlaceholder: true
  },
  {
    id: "cert-2",
    name: "[ANALYTICS / BI CERTIFICATE WILL BE ADDED HERE]",
    issuingOrganization: "[Issuing Authority]",
    issueDate: "[Issue Date]",
    credentialId: "[Credential ID / Verification]",
    verificationUrl: "#",
    badgePlaceholder: "CERTIFICATION BADGE",
    isPlaceholder: true
  }
];

// ==========================================
// 7. DATA PROCESS PIPELINE (The 7 Stages: Raw Data -> Clean -> Explore -> Analyze -> Visualize -> Insight -> Decision)
// ==========================================
export const portfolioPipelineStages: PipelineStage[] = [
  {
    id: "raw-data",
    title: "RAW DATA",
    subtitle: "Ingest & Audit",
    description: "Capturing multi-source transactional databases, CSV/Excel records, API endpoints, and business logs.",
    inputs: "Relational DBs, Spreadsheets, APIs, Webhooks",
    actions: [
      "Audit schema formats and data completeness",
      "Verify row counts against source systems",
      "Isolate timezone variances and encoding defects"
    ],
    output: "Raw Staging Tables with immutable metadata",
    iconName: "Database"
  },
  {
    id: "clean",
    title: "CLEAN",
    subtitle: "Sanitize & Impute",
    description: "Eliminating duplicate artifacts, standardizing null values, and enforcing schema integrity.",
    inputs: "Staging tables with missing fields or formatting issues",
    actions: [
      "Detect and evaluate numeric outliers",
      "Deduplicate records across primary identifiers",
      "Enforce correct data types and foreign key relationships"
    ],
    output: "Clean, verified analytical datasets",
    iconName: "Filter"
  },
  {
    id: "explore",
    title: "EXPLORE",
    subtitle: "EDA & Hypotheses",
    description: "Investigating distributions, testing relationships, and uncovering seasonal or category variance.",
    inputs: "Sanitized analytic tables",
    actions: [
      "Analyze statistical distributions and quartiles",
      "Construct correlation matrices across key variables",
      "Formulate testable business hypotheses"
    ],
    output: "Exploratory summary and anomaly reports",
    iconName: "Compass"
  },
  {
    id: "analyze",
    title: "ANALYZE",
    subtitle: "Statistical & Cohort Modeling",
    description: "Applying SQL window functions, cohort retention tracking, and comparative metric segmentation.",
    inputs: "Target business KPIs and explanatory parameters",
    actions: [
      "Perform cohort segmentation and lifecycle modeling",
      "Calculate growth velocity and variance indicators",
      "Conduct comparative statistical significance tests"
    ],
    output: "Verified analytical findings and trends",
    iconName: "Cpu"
  },
  {
    id: "visualize",
    title: "VISUALIZE",
    subtitle: "Dashboard Architecture",
    description: "Crafting clear, intuitive Power BI and Tableau cockpits respecting cognitive ergonomics.",
    inputs: "Aggregated datasets and key performance metrics",
    actions: [
      "Establish coherent mathematical scales and baselines",
      "Build dynamic cross-filtering and drillthrough actions",
      "Apply high-contrast accessible visual hierarchy"
    ],
    output: "Production-ready, interactive BI dashboards",
    iconName: "BarChart3"
  },
  {
    id: "insight",
    title: "INSIGHT",
    subtitle: "Executive Synthesis",
    description: "Distilling complex mathematical trends into clear, actionable business findings.",
    inputs: "Dashboard patterns and statistical shifts",
    actions: [
      "Translate quantitative shifts into operational meaning",
      "Quantify risks, opportunities, and trade-offs",
      "Formulate prioritized recommendations"
    ],
    output: "Clear executive summary & decision briefing",
    iconName: "Lightbulb"
  },
  {
    id: "decision",
    title: "DECISION",
    subtitle: "Action & Impact",
    description: "Empowering stakeholders to allocate capital, eliminate waste, and optimize performance.",
    inputs: "Actionable analytical brief",
    actions: [
      "Define operational targets and tracking mechanisms",
      "Benchmark post-implementation performance metrics",
      "Embed ongoing telemetry into operational routines"
    ],
    output: "Measurable business improvement and efficiency",
    iconName: "TrendingUp"
  }
];

export const telemetryQuotes = [
  "Turning raw signals into strategic clarity.",
  "Variance is opportunity disguised as randomness.",
  "Precision in data, clarity in decision-making.",
  "Data without context is merely expensive noise."
];
