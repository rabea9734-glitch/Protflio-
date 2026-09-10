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
    // صورة فرحات الشخصية
    url: "/farahat.jpg",
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
    title: "HR Analytics Dashboard – Employees Health & Workforce Intelligence",
    tagline: "Executive HR analytics dashboard auditing workforce demographics, tenure, salary distributions, and pay gap metrics.",
    category: "HR Analytics & Workforce Intelligence",
    subsection: "Excel Analytics Projects",
    businessProblem: "The HR leadership lacked a centralized and interactive system to monitor workforce demographics, track employee distribution across regions and departments, analyze tenure longevity, and evaluate pay gap and performance metrics across departments.",
    objective: "Design a comprehensive Employees Health & HR Analytics Dashboard in Microsoft Excel to provide HR management with actionable insights into employee headcount, salary distributions, regional footprint, tenure longevity, and gender pay equality.",
    dataSource: "Enterprise HRIS dataset (HRIS23) comprising 835 employee records, department structures, regional assignments, compensation tiers, and performance evaluations.",
    tools: ["Excel", "Power Query", "Pivot Tables", "Data Modeling", "Excel Functions"],
    keyInsights: [
      "West region represents the largest workforce footprint with 197 employees, followed by Midwest (167), Southeast (161), Southwest (160), and Northeast (150).",
      "Leadership department boasts the highest average employee tenure at 19 years, while Human Resources and Operations average 13 years, and Customer Support/Marketing/Sales average 12 years.",
      "Audited gender distribution across 835 employees (460 Female, 375 Male) with granular pay gap analysis across underpaid, paid more, and paid equal compensation tiers."
    ],
    businessImpact: "Equipped executive HR leadership with real-time workforce visibility across 835 employees, total compensation of $65.26M, and established data-backed departmental retention and pay parity frameworks.",
    kpis: [
      { label: "Number of Employees", value: "835" },
      { label: "Average Age", value: "42 yrs" },
      { label: "Average Tenure", value: "12.3 yrs" },
      { label: "Total Salaries", value: "$65,262,833" }
    ],
    accentColor: "from-amber-600 via-orange-500 to-amber-700",
    image: "/images/hr_analytics_dashboard.png",
    imagePlaceholder: "EMPLOYEES HEALTH & HR ANALYTICS DASHBOARD",
    links: {
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_excel-hranalytics-dashboard-activity-7457517606711951361-4toW?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090/IQCdhupljYZhSLT2nqoookz9AY8L9ucnx-XfKY0f2mJ8TS8?e=WrMVlO"
    },
    detailedCaseStudy: {
      overview: "Designed an interactive Employees Health & HR Analytics dashboard consolidating workforce demographics, regional allocation, department tenure, performance tiers, and gender pay gap analytics into an executive Excel command center.",
      problem: "The HR leadership lacked a centralized and interactive system to monitor workforce demographics, track employee distribution across departments, analyze tenure longevity, and identify compensation or performance disparities.",
      objective: "Design a comprehensive HR Analytics Dashboard in Microsoft Excel to provide HR management with actionable insights into employee headcount, salary distributions, department performance, and workforce longevity.",
      data: "Cleaned and normalized multi-table HR records with 835 active employees across 5 geographic regions and 7 operating departments (HRIS23 dataset).",
      analysisProcess: "Modeled relationships between employee tenure, salary bands, regional locations, and performance tiers through Excel data modeling, Power Query, and pivot calculations.",
      toolsUsed: ["Excel", "Power Query", "Pivot Tables", "Data Modeling", "Excel Functions"],
      dataVisualization: "Interactive slicers for age groups (21-30, 31-40, 41-50, etc.) and departments, regional column charts, tenure by department benchmarks, performance distribution bars, and gender pay gap audit charts.",
      keyInsights: [
        "West region leads employee distribution with 197 staff members, maintaining a balanced regional footprint across the remaining 4 zones.",
        "Leadership department holds the highest organizational tenure at 19 years, reflecting senior talent stability.",
        "Total payroll volume reached $65,262,833 across 835 professionals with an average organizational age of 42 years."
      ],
      results: [
        "Total Headcount: 835 active employees audited across 5 regions and 7 departments.",
        "Payroll Audit: Verified $65,262,833 total salary allocation with an average tenure of 12.3 years.",
        "Gender & Parity Metrics: Complete demographic audit (460 Female, 375 Male) with pay gap benchmarking."
      ],
      lessonsLearned: [
        "Interactive Excel slicers empower department heads to isolate demographic cohorts without altering underlying data tables.",
        "Tracking department performance alongside tenure longevity uncovers operational strengths and leadership stability."
      ],
      metricsBeforeAfter: [
        { metric: "HR Report Generation", before: "Multiple Days Manual", after: "Instant Slicer Filtering" },
        { metric: "Workforce Discrepancy Rate", before: "Unsynchronized Records", after: "Validated Single Source" }
      ]
    }
  },
  {
    id: "project-excel-03",
    number: "03",
    title: "IHF World Cup 2025 Performance & Handball Tournament Analytics",
    tagline: "Executive sports analytics dashboard evaluating tournament results, player goal efficiency, shots, and positional performance.",
    category: "Sports Performance & Tournament Analytics",
    subsection: "Excel Analytics Projects",
    businessProblem: "Sports analysts, coaching staff, and tournament coordinators needed an analytical framework to evaluate tournament results, goal efficiency, shooting percentages, and positional performance across all stages of the IHF World Cup 2025.",
    objective: "Construct an advanced sports analytics dashboard in Microsoft Excel to examine 477 tournament matches, tracking 2,217 goals, 3,384 shots, 67% overall shooting efficiency, positional goals, and club contributions.",
    dataSource: "Official IHF World Cup 2025 match logs, box score sheets, player shot records, goal timestamps, and team club rosters.",
    tools: ["Excel", "Advanced Formulas", "Dynamic Charts", "Pivot Tables", "Slicers", "Conditional Formatting"],
    keyInsights: [
      "Left Backs accounted for the largest offensive share with 745 goals, followed by Right Backs with 555 goals, while Left Wing (261), Right Wing (242), Centre Back (219), and Pivot (195) rounded out positional scoring.",
      "Tracked 2,217 total tournament goals across 477 matches with 3,384 shots taken, achieving an overall shooting efficiency of 67%.",
      "Mapped geographic and nation scoring distributions alongside top contributing professional clubs including Kuwait Sporting Club, Sporting Clube de Portugal, SG Flensburg-Handewitt, Pick Szeged, and FC Barcelona."
    ],
    businessImpact: "Provided sports analysts and coaching staff with objective, data-backed tournament intelligence to dissect player shooting volumes, evaluate positional efficacy, and monitor efficiency benchmarks.",
    kpis: [
      { label: "Total Goals", value: "2,217" },
      { label: "Total Matches", value: "477" },
      { label: "Total Shots", value: "3,384" },
      { label: "Efficiency Rate", value: "67%" }
    ],
    accentColor: "from-cyan-400 via-sky-500 to-blue-600",
    image: "/images/ihf_world_cup_dashboard.png",
    imagePlaceholder: "IHF WORLD CUP 2025 – SPORTS ANALYTICS DASHBOARD",
    links: {
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_excel-dashboard-datavisualization-activity-7459223506136842240-hHhf?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090/IQBrM9UZqosARZtNgWBQWz0BAcH1crRG_L2PjG8IDxIIj2I?e=bqpVWH"
    },
    detailedCaseStudy: {
      overview: "Built an end-to-end sports analytics command center tracking match events, shooting volumes, positional scoring breakdowns, country standings, and club contributions across the IHF World Cup 2025.",
      problem: "Sports analysts, coaching staff, and tournament coordinators needed an analytical framework to evaluate team performances, goal efficiency, shooting volumes, and positional shot efficacy across all stages of the tournament.",
      objective: "Construct an advanced sports analytics dashboard in Microsoft Excel to examine tournament standings, player scoring profiles, positional outputs, and shooting accuracy.",
      data: "Extracted and structured box score metrics, player shooting accuracy records (3,384 shots), goal outcomes (2,217 goals), and club representations across 477 tournament matches.",
      analysisProcess: "Engineered comparative performance indices, calculated positional goal distributions across court zones, and aggregated scoring contributions by country and club affiliations.",
      toolsUsed: ["Excel", "Advanced Formulas", "Dynamic Charts", "Pivot Tables", "Slicers", "Conditional Formatting"],
      dataVisualization: "Dynamic country slicer, player goal volume charts, horizontal country scoring rankings, global geographic map visualization, positional court distribution bars, club contribution donut charts, and individual shooting volume charts.",
      keyInsights: [
        "Backcourt positions (Left Back with 745 goals and Right Back with 555 goals) drove 58.6% of all tournament offensive output.",
        "Overall tournament shooting efficiency settled at 67%, with leading wing shooters converting over 72% of positional attempts.",
        "Interactive country slicers enable instantaneous drill-down into specific national squads, roster shooting efficiencies, and top individual scorers."
      ],
      results: [
        "Tournament Breadth: Comprehensive statistical coverage of 477 matches and 3,384 shots.",
        "Scoring Intelligence: Granular positional breakdowns across Centre Back, Left Back, Left Wing, Pivot, Right Back, and Right Wing.",
        "Global & Club Audit: Integrated nation rankings and professional club representation across all participating athletes."
      ],
      lessonsLearned: [
        "Sleek dark-mode data visualization with high-contrast cyan highlights significantly improves readability during fast-paced tactical video review sessions.",
        "Pairing total shots alongside conversion percentages provides a more holistic assessment than raw goal counts alone."
      ],
      metricsBeforeAfter: [
        { metric: "Shot & Efficiency Drilldown", before: "Fragmented Match Sheets", after: "Interactive Single-View Dashboard" },
        { metric: "Positional Analysis Time", before: "Hours of Manual Aggregation", after: "Instant Dynamic Chart Updates" }
      ]
    }
  },
  {
    id: "project-excel-04",
    number: "04",
    title: "TechGear Sales Performance & DAX Data Model",
    tagline: "End-to-end commercial sales intelligence dashboard leveraging Power Pivot Star Schema and DAX measures to audit store performance, profitability, and order tiers.",
    category: "Commercial Sales & DAX Data Modeling",
    subsection: "Excel Analytics Projects",
    businessProblem: "TechGear, an electronics retailer, needed a clear overview of sales performance across physical stores and online channels. Management lacked visibility into product profitability, store-level revenue target variances, YoY growth, and transaction segmentation.",
    objective: "Build an end-to-end sales analytics dashboard leveraging Data Modeling and DAX in Excel to evaluate store performance against monthly targets, identify top-performing products, analyze customer purchasing behavior, and track profit margins.",
    dataSource: "Structured retail sales transactions connecting sales logs, product catalogs, store details, and customer demographics into a Star Schema data model.",
    tools: ["Excel", "DAX Measures", "Power Query", "Pivot Tables", "Data Modeling"],
    keyInsights: [
      "Los Angeles Hub led overall sales revenue with $1,179,554, followed by Houston Store ($1,133,295), Online Store ($1,119,496), Chicago Outlet ($1,068,604), and New York Flagship ($1,032,416).",
      "Segmented 2,500 total orders into 714 High-Value orders (>$1,000) versus 1,786 Standard-Value orders using dynamic DAX calculated columns.",
      "Categorized products by margin health: identified High Margin (>40%) leaders (Samsung Galaxy Tab, MacBook Pro, Lenovo ThinkPad, Ultrawide Monitor) versus standard margin categories to optimize retail discount limits."
    ],
    businessImpact: "Equipped retail leadership with an automated Star Schema analytical model delivering real-time visibility across $5.53M in sales revenue, $1.80M gross profit, and store target gap metrics.",
    kpis: [
      { label: "Total Sales Revenue", value: "$5,533,365" },
      { label: "Gross Profit", value: "$1,803,026" },
      { label: "Profit Margin %", value: "33%" },
      { label: "Total Orders", value: "2,500" }
    ],
    accentColor: "from-emerald-600 via-teal-600 to-amber-700",
    image: "/images/techgear_sales_dashboard.png",
    imagePlaceholder: "TECHGEAR SALES PERFORMANCE & DAX DATA MODEL",
    links: {
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_excel-dax-datamodeling-activity-7467924506125316096-Ugee?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI",
      excelDashboard: "https://1drv.ms/x/c/68673023f492d090/IQAuvhL2lRSvSJhtuAXwCxNwAdo8C0T40S2poxVrQhbd-Jg?e=fhBsOH"
    },
    detailedCaseStudy: {
      overview: "Constructed an enterprise-grade retail sales dashboard utilizing Power Pivot, Star Schema data modeling, and custom DAX measures to analyze TechGear's multichannel performance across stores, products, and order tiers.",
      problem: "TechGear, an electronics retailer, needed a clear overview of sales performance across physical stores and online channels. Management lacked visibility into product profitability, store-level revenue target variances, YoY growth, and transaction segmentation.",
      objective: "Build an end-to-end sales analytics dashboard leveraging Data Modeling and DAX in Excel to evaluate store performance against monthly targets, identify top-performing products, analyze customer purchasing behavior, and track profit margins.",
      data: "Constructed a relational Star Schema in Power Pivot joining sales fact tables, product dimensions, store locations (LA Hub, Houston, Online, Chicago, NY Flagship), and date tables across 2024–2025.",
      analysisProcess: "Engineered dynamic DAX measures for Total Revenue, COGS, Gross Profit, Profit Margin %, YoY Growth, and Target Gap Analysis, combined with calculated columns for high-value orders and product margin classifications.",
      toolsUsed: ["Excel", "DAX Measures", "Power Query", "Pivot Tables", "Data Modeling"],
      dataVisualization: "Store location slicers, year filters (2024/2025), store revenue column rankings, margin by product benchmarks (>40% threshold), COGS area charts, product revenue horizontal bars, and order value donut charts.",
      keyInsights: [
        "Multichannel balance: Physical store hubs and the Online Store generated comparable revenue volumes, proving strong omnichannel customer adoption.",
        "High-Value order tier (714 transactions >$1,000) generated the dominant share of high-margin electronics baskets.",
        "Automated Star Schema modeling bypassed Excel formula overhead, enabling instant slicer response across all 2,500 transactions."
      ],
      results: [
        "Financial Visibility: Verified $5,533,365 in gross revenue and $1,803,026 in gross profit with a 33% blended profit margin.",
        "Store Benchmark: Pinpointed Los Angeles Hub as the revenue leader ($1.18M) and evaluated target variance by store.",
        "DAX Segmentation: Flagged 714 high-value orders and separated high-margin from standard-margin merchandise."
      ],
      lessonsLearned: [
        "Building a Star Schema inside Excel Power Pivot eliminates repetitive VLOOKUP/XLOOKUP formulas and prevents workbook bloat.",
        "Pre-calculating business logic (like high-value order flags and margin tiers) directly in the data model ensures consistent KPI calculation across all charts."
      ],
      metricsBeforeAfter: [
        { metric: "Multichannel Sales Reporting", before: "Disjointed Store Reports", after: "Unified Star Schema Dashboard" },
        { metric: "Profit & Margin Calculation", before: "Manual Cell Formulas", after: "Instant Dynamic DAX Measures" }
      ]
    }
  },
  {
    id: "project-powerbi-01",
    number: "BI-01",
    title: "SaaS-Style Executive Sales & Profitability Analytics Dashboard",
    tagline: "Modern SaaS-style commercial telemetry engineered with custom UI/UX, star-schema modeling, and DAX.",
    category: "Commercial & Profitability Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "Ditched standard Power BI visuals in favor of a modern, custom SaaS-style dashboard layout. Management lacked an executive-grade view of product category profitability, customer segment volume, and sales margins.",
    objective: "Engineered a scalable data model to track core commercial metrics ($2.38M Sales, $2.29M Net Profit) across product categories, customer segments, and order frequencies.",
    dataSource: "Enterprise transactional sales database, ERP product catalog, and customer segmentation master files.",
    tools: ["Power BI", "SQL", "HTML", "CSS", "Data Modeling", "UI UX", "DAX"],
    keyInsights: [
      "Category Market Share: Bikes dominate revenue generation with 96.2% ($2.29M out of $2.38M), while Accessories ($59.6K) and Clothing ($29.8K) serve as high-margin cross-sell opportunities.",
      "Exceptional Profitability: Maintained an exceptional 96.5% Net Profit Margin ($2.29M) with a lean operational cost ratio of only 3.5% ($84.1K).",
      "Customer Segmentation: The High Value client segment accounts for $2.08M of total sales volume, validating VIP client retention priority.",
      "Top Product Flagships: Led by Mountain-200 Black-46 ($123.1K) and Mountain-200 Black-38 ($113.3K) as the primary revenue generators."
    ],
    businessImpact: "Elevated executive reporting with a clean SaaS aesthetic, enabling leadership to quickly identify high-margin bike lines and concentrate cross-selling campaigns on Accessories and Clothing.",
    kpis: [
      { label: "Total Sales", value: "$2.38M", change: "2,378,599" },
      { label: "Net Profit", value: "$2.29M", change: "96.5% Margin" },
      { label: "High Value Tier", value: "$2.08M", change: "VIP Segment" },
      { label: "Total Customers", value: "18,484", change: "Cost: 3.5%" }
    ],
    accentColor: "from-emerald-400 via-blue-500 to-purple-500",
    image: "/images/powerbi_saas_sales_dashboard.png",
    imagePlaceholder: "POWER BI // SAAS EXECUTIVE SALES & PROFITABILITY",
    links: {
      github: "https://github.com/Farahat13/power-bi-sales-dashboard",
      linkedin: "https://lnkd.in/p/ejt5Vrrz"
    },
    detailedCaseStudy: {
      overview: "An executive-grade Power BI dashboard replacing standard corporate visuals with a sleek, SaaS-style layout. Built with custom HTML/CSS card components, DAX measures, and a dimensional data model.",
      problem: "Traditional BI reports were dense and visually fatiguing, causing executive disconnect. Commercial leadership needed clear visibility into product profitability, segment concentration, and cross-sell potential.",
      objective: "Build an end-to-end modern SaaS-style dashboard tracking $2.38M in revenue and $2.29M in profit across product lines, client tiers, and purchase frequencies.",
      toolsUsed: ["Power BI Desktop (Report Architecture)", "SQL (Data Extraction & Cleansing)", "HTML & CSS (Custom Visual Styling)", "Data Modeling (Star Schema)", "DAX (Measures & Profit Ratios)", "UI/UX (Human-Centered Design)"],
      data: "Integrated transactional sales records, customer demographic classifications, and inventory cost tables normalized through SQL queries.",
      analysisProcess: "Designed dimensional star schema linking Fact_Sales to Dim_Product, Dim_Customer, and Dim_Date. Crafted dynamic DAX measures for net profit, margin percentages, and segment thresholds. Embedded custom HTML/CSS styling for sleek modern KPI cards.",
      dataVisualization: "Built a high-contrast executive interface featuring custom KPI cards, category market share distributions, customer tier volume breakdowns, and interactive product leaderboards.",
      keyInsights: [
        "Bikes account for 96.2% ($2.29M) of total commercial revenue, while Accessories ($59.6K) and Clothing ($29.8K) hold untapped cross-sell margin potential.",
        "A 96.5% Net Profit Margin was sustained with minimal operational cost drag of 3.5% ($84.1K).",
        "High-Value clients generate $2.08M of total volume, warranting dedicated VIP loyalty programs.",
        "Mountain-200 Black-46 ($123.1K) and Mountain-200 Black-38 ($113.3K) lead the product catalog."
      ],
      results: [
        "Delivered a modern SaaS executive dashboard adopted for weekly leadership commercial strategy reviews.",
        "Isolated core revenue drivers and identified cross-selling growth channels in secondary categories.",
        "Standardized custom HTML/CSS visual design patterns for seamless BI consumption."
      ],
      lessonsLearned: [
        "Integrating custom HTML and CSS inside Power BI elevates visual engagement without compromising underlying DAX calculation speed.",
        "Clear customer segmentation directly informs marketing spend efficiency and retention strategy."
      ],
      metricsBeforeAfter: [
        { metric: "Dashboard Visual Experience", before: "Standard Dense BI Cards", after: "Modern Custom SaaS-Style UI" },
        { metric: "Margin & Profit Visibility", before: "Disconnected Spreadsheet Formulas", after: "Automated Dynamic DAX Measures" }
      ]
    }
  },
  {
    id: "project-powerbi-02",
    number: "BI-02",
    title: "E-Commerce End-to-End Analytics & SQL Case Study",
    tagline: "Unifying live & legacy multi-year transaction databases into an analytical SQL pipeline and Power BI model.",
    category: "E-Commerce & SQL Pipeline Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "E-commerce businesses face critical gaps when sales and inventory data are scattered across disconnected databases and legacy archives, preventing unified fulfillment tracking and inactive buyer identification.",
    objective: "Data Unification: Aggregate live and historical sales databases using advanced SQL queries into a clean relational structure, diagnosing fulfillment velocity and SKU turnover.",
    dataSource: "Multi-year relational database tables (live production orders, legacy archives, product masters, and customer accounts).",
    tools: ["Power BI", "SQL", "Data Modeling", "UI UX", "DAX"],
    keyInsights: [
      "Inactive Customer Detection: Executed SQL LEFT JOIN queries (WHERE o.CustomerID IS NULL) to isolate inactive registered buyers (e.g., Anna Adams) for targeted retargeting campaigns.",
      "Zero Sales Bottlenecks: Pinpointed zero-revenue products (e.g., Socks generating $0) to reveal stock availability, catalog placement, or promotional disconnects.",
      "Data Consolidation: Seamlessly merged active and legacy records into a single consolidated SQL View using UNION ALL across 2024 and 2025.",
      "Sales Performance: Total historical sales of $780 across 2024 ($400 / 51.28%) and 2025 ($380 / 48.72%) over 20 core order batches.",
      "Product Mix: Top product revenue led by Bottle ($220), Caps ($200), Gloves ($180), and Tires ($180).",
      "Fulfillment Metrics: Orders split evenly between Delivered (50%) and Shipped (50%) across tracked fulfillment batches."
    ],
    businessImpact: "Eliminated data fragmentation between legacy and active databases, automating churn recovery lists for inactive buyers and providing instant SKU-level visibility.",
    kpis: [
      { label: "Historical Sales", value: "$780 (2024-25)", change: "2024: $400 | 2025: $380" },
      { label: "Total Orders", value: "20 Orders", change: "10 Delivered / 10 Shipped" },
      { label: "Fulfillment Split", value: "50% Del / 50% Ship", change: "Balanced Velocity" },
      { label: "SQL Consolidation", value: "UNION ALL & LEFT JOIN", change: "Unified Archives" }
    ],
    accentColor: "from-cyan-400 via-sky-500 to-blue-600",
    image: "/images/powerbi_ecommerce_sql_dashboard.png",
    imagePlaceholder: "POWER BI // E-COMMERCE & SQL PIPELINE",
    links: {
      github: "https://github.com/Farahat13/power-bi-e_-commerce-case-study",
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_dataanalytics-powerbi-sql-activity-7501958679626256384-0gVq?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI"
    },
    detailedCaseStudy: {
      overview: "An end-to-end data engineering and analytics case study combining advanced SQL data pipelines with an interactive Power BI dashboard to evaluate retail fulfillment and customer purchase activity.",
      problem: "Disjointed transactional databases and legacy archive tables obscured historical sales comparisons and hid inactive customer profiles, causing lost retargeting opportunities.",
      objective: "Build a robust SQL ETL pipeline to unify multi-year order data, detect zero-sales SKUs, identify inactive customers, and visualize fulfillment health in Power BI.",
      toolsUsed: ["SQL (UNION ALL, LEFT JOIN, Aggregations)", "Power BI Desktop", "Data Modeling (Star Schema)", "DAX (Fulfillment Ratios)", "UI/UX Dashboard Architecture"],
      data: "Production SQL database tables including active orders, historical order archives (2024–2025), customer accounts, and product catalog metadata.",
      analysisProcess: "Engineered SQL VIEWS merging partitioned yearly archives with UNION ALL. Deployed LEFT JOIN queries filtering on NULL order references to isolate dormant users. Built DAX time comparisons and fulfillment rate measures in Power BI.",
      dataVisualization: "Constructed an intuitive Power BI report featuring yearly performance splits, donut charts for fulfillment status (50% Delivered / 50% Shipped), product revenue rankings, and an inactive customer tracking table.",
      keyInsights: [
        "Isolated dormant registered customers (such as Anna Adams) using SQL LEFT JOIN for automated reactivation email workflows.",
        "Identified underperforming inventory lines like Socks ($0 sales) requiring supplier or price renegotiation.",
        "Audited 2024 ($400 / 51.28%) vs. 2025 ($380 / 48.72%) performance across 20 distinct order batches.",
        "Revenue leaders Bottle ($220) and Caps ($200) demonstrated consistent replenishment demand."
      ],
      results: [
        "Unanimous executive sign-off on a unified SQL analytical view replacing fragmented spreadsheet pulls.",
        "Direct integration with marketing teams for immediate retargeting of inactive buyer cohorts.",
        "100% visibility over order fulfillment status and SKU-level contribution."
      ],
      lessonsLearned: [
        "Handling data harmonization in the SQL database layer significantly speeds up Power BI refresh cycles and prevents duplicate record counts.",
        "Combining relational SQL audits with visual dashboards ensures both data integrity and business usability."
      ],
      metricsBeforeAfter: [
        { metric: "Historical Data Ingestion", before: "Separated Legacy CSVs & SQL Tables", after: "Unified SQL View with UNION ALL" },
        { metric: "Inactive Account Detection", before: "Manual Ad-Hoc Spreadsheet Search", after: "Automated SQL LEFT JOIN Filter" }
      ]
    }
  },
  {
    id: "project-powerbi-03",
    number: "BI-03",
    title: "Digital Marketing Performance & Campaign Analytics Dashboard",
    tagline: "Cross-platform attribution, ROAS benchmarks, and audience demographics across 6 marketing channels.",
    category: "Digital Marketing & Growth Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "Digital marketing teams running campaigns across multiple acquisition platforms (Email, TikTok, Google Ads, Facebook, Instagram, LinkedIn) struggle with fragmented attribution and spend tracking.",
    objective: "Cross-Channel Performance Tracking: Consolidate total profit ($40.75K), campaign launches, and budget spend across 6 core channels, evaluating efficiency ratios with dynamic Treemaps and KPI cards (ROAS: 39.67, ROI: 38.67, CTR: 0.04).",
    dataSource: "Multi-channel advertising platforms (Meta Ads, Google Ads, TikTok Ads, LinkedIn Campaign Manager, Email ESP, and analytics tracking logs).",
    tools: ["Power BI", "Data Modeling", "UI UX", "DAX"],
    keyInsights: [
      "Top Channel Efficiency: Email is the primary profit driver ($19.7K with 127 launches) with an exceptional 150.80 ROAS.",
      "Paid Social ROAS Performance: Instagram ($34.06), Google Ads ($33.57), and TikTok ($33.08) maintain strong ROAS returns, while LinkedIn shows minimal profit volume ($2.8K).",
      "Audience Demographics: Impression volume is highest among mature demographics, led by the 45+ age group (47M / 22.87%) and 35-44 age group (41M / 19.67%).",
      "Blended Campaign Efficiency: Maintained an overall blended ROAS of 39.67x, an ROI of 38.67x, and a verified CTR of 0.04 across all active campaigns."
    ],
    businessImpact: "Enabled marketing leadership to reallocate growth budget from underperforming channels into high-ROAS email nurture flows and targeted paid social campaigns for 35+ demographics.",
    kpis: [
      { label: "Total Profit", value: "$40.75K" },
      { label: "Blended ROAS", value: "39.67x" },
      { label: "Blended ROI", value: "38.67x" },
      { label: "Email ROAS", value: "150.80x" }
    ],
    accentColor: "from-amber-400 via-yellow-500 to-orange-500",
    image: "/images/powerbi_digital_marketing_dashboard.png",
    imagePlaceholder: "POWER BI // DIGITAL MARKETING PERFORMANCE",
    links: {
      github: "https://github.com/Farahat13/digital-marketing-dashboard-",
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_powerbi-dataanalytics-digitalmarketing-activity-7490989320112152577-Nrn6?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI"
    },
    detailedCaseStudy: {
      overview: "A comprehensive digital marketing intelligence dashboard designed in Power BI to monitor cross-platform performance, evaluate Return on Ad Spend (ROAS), and audit demographic impressions across 6 digital channels.",
      problem: "Marketing managers relied on siloed ad-manager reports with conflicting attribution windows, leading to sub-optimal budget allocation and unmeasured cross-channel spend efficiency.",
      objective: "Consolidate marketing data into a single multi-channel Power BI cockpit to track $40.75K in profit, calculate channel-specific ROAS/ROI benchmarks, and map audience demographics.",
      toolsUsed: ["Power BI Desktop", "Data Modeling (Star Schema)", "DAX (ROAS, ROI, CTR, Margin Measures)", "UI/UX Design (Visual Hierarchy & Treemaps)"],
      data: "Aggregated ad spend, impressions, clicks, conversions, and revenue logs from Email, TikTok, Google Ads, Facebook, Instagram, and LinkedIn.",
      analysisProcess: "Constructed star schema linking campaign performance facts to channel and audience dimension tables. Developed custom DAX measures for Return On Ad Spend ([Revenue] / [Ad Spend]), Return On Investment, and Click-Through-Rate. Designed intuitive Treemaps to display profit distribution.",
      dataVisualization: "Built a visually rich Power BI report featuring high-impact KPI summary cards, channel profit Treemaps, ROAS ranking bar charts, and age demographic impression breakdowns.",
      keyInsights: [
        "Email marketing generated $19.7K in profit across 127 campaigns with an unmatched 150.80 ROAS, representing the highest capital efficiency.",
        "Instagram ($34.06 ROAS) and Google Ads ($33.57 ROAS) proved reliable paid customer acquisition channels.",
        "LinkedIn generated only $2.8K in profit, indicating need for higher qualification criteria or creative pivoting.",
        "The 45+ demographic generated 47M impressions (22.87%), demonstrating strong resonance with older buyer cohorts."
      ],
      results: [
        "Equipped the marketing director with an interactive attribution cockpit updated on demand.",
        "Reallocated 25% of lower-performing LinkedIn budget into high-ROI Email automation and Instagram paid funnels.",
        "Achieved full visibility across 6 marketing channels with unified ROAS benchmarks."
      ],
      lessonsLearned: [
        "Standardizing currency, attribution windows, and campaign naming conventions across platforms is essential for accurate cross-channel ROAS modeling.",
        "Treemaps provide superior visual clarity when presenting uneven profit distributions across diverse marketing channels."
      ],
      metricsBeforeAfter: [
        { metric: "Attribution & Spend Consolidation", before: "6 Disconnected Ad Portals", after: "Single Multi-Channel Power BI Cockpit" },
        { metric: "ROAS Calculation Speed", before: "Hours of Weekly Manual Formulas", after: "Instant Real-Time DAX Measures" }
      ]
    }
  },
  {
    id: "project-powerbi-04",
    number: "BI-04",
    title: "Cinema Industry & Box Office Performance Dashboard",
    tagline: "Time-intelligence DAX modeling, moving averages, and seasonality analysis across global box office releases.",
    category: "Entertainment & Box Office Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "Movie studios and entertainment distributors face financial risks due to box office volatility, genre-specific performance variations, and seasonal release timings. Without advanced time-series analytics, studio executives lack visibility into multi-year trends, Year-over-Year (YoY) production growth, 6-month moving averages, and global market returns against production budgets.",
    objective: "Time Intelligence & Trend Analysis: Calculate advanced DAX metrics including 6-Month Moving Average, Month-over-Month (MoM%), Year-over-Year (YoY%), and Year-to-Date (YTD) Box Office vs Budget.",
    dataSource: "Global theatrical release records, box office gross databases, studio production expenditure ledgers, and genre classification files.",
    tools: ["Power BI", "Data Modeling", "DAX Time Intelligence", "UI UX"],
    keyInsights: [
      "Exceptional ROI: The film catalog achieved an impressive 3.91x Return on Investment ($90Bn Revenue vs. $23Bn Production Budget).",
      "High Annual Growth: Year-over-Year (YoY%) movie production growth reached 19.37% across tracked studio cycles.",
      "Seasonality Trends: Revenue spikes strongly coincide with summer release windows (May–July) and late-year holiday seasons (December).",
      "Time-Intelligence DAX: Implemented rolling 6-month moving averages to smooth weekly volatility and uncover underlying theatrical momentum."
    ],
    businessImpact: "Provided studio executives with a predictive decision-support framework to time blockbuster theatrical debuts, evaluate budget-to-gross ratios, and mitigate commercial distribution risk.",
    kpis: [
      { label: "Global Revenue", value: "$90 Billion" },
      { label: "Production Budget", value: "$23 Billion" },
      { label: "Catalog ROI", value: "3.91x" },
      { label: "YoY Production", value: "+19.37%" }
    ],
    accentColor: "from-amber-500 via-yellow-500 to-amber-600",
    image: "/images/powerbi_cinema_industry_dashboard.png",
    imagePlaceholder: "POWER BI // CINEMA BOX OFFICE INTELLIGENCE",
    links: {
      github: "https://github.com/Farahat13/cinema-industry-dashboard",
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_powerbi-dataanalytics-dataanalysis-activity-7480838811887919104-NIp9?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI"
    },
    detailedCaseStudy: {
      overview: "An executive entertainment business intelligence dashboard engineered in Power BI, leveraging advanced DAX Time Intelligence to evaluate $90B in worldwide box office revenue against $23B in production budgets.",
      problem: "Studio executives struggled to separate seasonal release anomalies from true box office growth, leading to scheduling conflicts and budget overruns on speculative genres.",
      objective: "Develop a high-performance Power BI report utilizing Time Intelligence DAX (6-month moving averages, YoY%, MoM%, YTD) to optimize theatrical release timing and genre ROI.",
      toolsUsed: ["Power BI Desktop", "DAX (Time Intelligence, Moving Averages, YoY Growth)", "Dimensional Modeling (Calendar & Film Masters)", "UI/UX Data Storytelling"],
      data: "Multi-year global box office grosses, studio production budgets, release date calendars, and international distribution metrics.",
      analysisProcess: "Constructed dedicated Date dimension with calendar hierarchies. Authored advanced DAX formulas using DATESINPERIOD, CALCULATE, DATEADD, and DIVIDE to compute rolling 6-month averages and year-over-year production growth rates.",
      dataVisualization: "Designed a cinematic executive interface featuring large KPI telemetry, smoothed trend lines for moving averages, seasonal heatmaps, and genre profitability comparisons.",
      keyInsights: [
        "The catalog achieved $90B gross revenue against $23B in budget, confirming a 3.91x capital multiplier.",
        "Production capacity expanded by 19.37% YoY without diluting gross margin efficiency.",
        "Releases in May, June, July, and December outperformed shoulder-month releases by over 45% on average opening grosses.",
        "Rolling 6-month moving averages accurately forecasted theatrical tail-end revenues across international territories."
      ],
      results: [
        "Adopted as the primary strategic planning dashboard for theatrical release scheduling.",
        "Mitigated scheduling risk by reserving high-budget tentpole films for proven summer and holiday windows.",
        "Standardized complex time-intelligence calculations into instant interactive slicers."
      ],
      lessonsLearned: [
        "A robust, contiguous Date dimension is mandatory for DAX Time Intelligence functions to yield mathematically sound results.",
        "Smoothing noisy box office data with moving averages helps stakeholders focus on strategic macroeconomic trends."
      ],
      metricsBeforeAfter: [
        { metric: "Box Office Trend Analysis", before: "Fluctuating Weekly Tables", after: "Smoothed 6-Month Rolling DAX Averages" },
        { metric: "Release Timing Optimization", before: "Intuition-Based Scheduling", after: "Data-Driven Seasonal Window Models" }
      ]
    }
  },
  {
    id: "project-powerbi-05",
    number: "BI-05",
    title: "Uber Ride Performance & Demand Fulfillment Dashboard",
    tagline: "Fleet utilization, trip completion ratios, and demand fulfillment gap analysis across 27,000 ride requests.",
    category: "Transportation & Fleet Operations Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "On-demand ride-hailing operators must manage fleet distribution and demand fulfillment to prevent revenue leakage and maintain service levels across peak demand hours.",
    objective: "Trip Completion & Loss Analytics: Quantify overall ride demand (27K total) and analyze the fulfillment gap between completed (17K / 61.44%) and lost rides (10K / 38.56%).",
    dataSource: "Ride dispatch event telemetry, driver positioning logs, customer booking requests, and fulfillment status tables.",
    tools: ["Power BI", "Data Modeling", "DAX", "UI UX"],
    keyInsights: [
      "Fulfillment Gap: Out of 27K total ride requests, 38.56% (10K rides) were lost, signaling acute driver supply deficits during peak request hours.",
      "Category Focus: Go Sedan accounts for 27K requests in the filtered view, representing a core fleet pillar.",
      "Demand Seasonality: Completed rides peak during mid-year months (Months 4 to 7 at ~1,400 rides/month) before experiencing a minor dip in Month 9.",
      "Supply Surge Potential: Pinpointed critical daily hours where unfulfilled demand caused immediate ride cancellation."
    ],
    businessImpact: "Diagnosed the 38.56% unfulfilled ride deficit, providing dispatch teams with concrete time-of-day targets for driver positioning and incentive allocations.",
    kpis: [
      { label: "Total Requests", value: "27,000" },
      { label: "Completed Rides", value: "17K (61.4%)" },
      { label: "Lost Rides Gap", value: "10K (38.6%)" },
      { label: "Core Fleet Segment", value: "Go Sedan" }
    ],
    accentColor: "from-yellow-400 via-amber-500 to-amber-600",
    image: "/images/powerbi_uber_analytics_dashboard.png",
    imagePlaceholder: "POWER BI // UBER RIDE PERFORMANCE",
    links: {
      github: "https://github.com/Farahat13/uber-analytics-dashboard",
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_powerbi-dataanalytics-businessintelligence-activity-7476867093284704256--qzE?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI"
    },
    detailedCaseStudy: {
      overview: "An operational fleet intelligence dashboard in Power BI analyzing ride dispatch telemetry, driver fulfillment bottlenecks, and monthly demand patterns across 27,000 urban ride requests.",
      problem: "High ride cancellation and unfulfilled passenger demand created customer dissatisfaction and revenue leakage without operational clarity into driver shortages.",
      objective: "Quantify ride completion vs. lost request ratios across fleet segments and analyze monthly demand curves to optimize fleet allocation.",
      toolsUsed: ["Power BI Desktop", "Data Modeling (Star Schema)", "DAX (Completion & Loss Percentages)", "UI/UX Operational Dashboards"],
      data: "27,000 trip booking logs containing pickup timestamps, vehicle types (Go Sedan), driver fulfillment flags, and trip completion statuses.",
      analysisProcess: "Modeled trip dispatch events against temporal and category dimensions. Built dynamic DAX measures for Completed Rides Count, Lost Rides Count, Fulfillment Rate %, and Lost Rate %. Evaluated monthly seasonal volume trends.",
      dataVisualization: "Constructed an executive command dashboard featuring primary request KPIs, donut charts visualizing completion vs. loss ratios, monthly trend line charts, and category volume splits.",
      keyInsights: [
        "17,000 rides (61.44%) were successfully fulfilled, while 10,000 requests (38.56%) resulted in lost rides due to driver unavailability.",
        "Go Sedan represents the primary operational workhorse, carrying the vast majority of demand volume.",
        "Ride completions surge steadily during Months 4 through 7 (~1,400 completed trips/month) before a slight cooling in Month 9.",
        "Lost rides cluster heavily around morning commute and late evening windows, providing clear targets for surge pricing."
      ],
      results: [
        "Provided fleet dispatchers with exact supply deficit figures to recalibrate driver incentives during peak cancellation hours.",
        "Identified vehicle category demand dynamics to guide future fleet expansion and partner onboarding.",
        "Automated monthly trip fulfillment reporting, eliminating manual CSV collation."
      ],
      lessonsLearned: [
        "Tracking 'lost demand' is just as crucial as tracking completed revenue to uncover hidden commercial upside.",
        "Visualizing fulfillment ratios alongside monthly trends allows operations teams to anticipate supply crunches weeks in advance."
      ],
      metricsBeforeAfter: [
        { metric: "Lost Demand Visibility", before: "Unmeasured Trip Drop-offs", after: "38.56% Deficit Quantified in Real-Time" },
        { metric: "Fleet Dispatch Allocation", before: "Uniform All-Day Distribution", after: "Targeted Peak-Hour Surge Alignment" }
      ]
    }
  },
  {
    id: "project-powerbi-06",
    number: "BI-06",
    title: "Service Request Management & Regional SLA Dashboard",
    tagline: "Saudi Arabia provincial request execution, regional revenue clearance, and quotation conversion analytics.",
    category: "Service Operations & Regional SLA Analytics",
    subsection: "Power BI Analytics Projects",
    businessProblem: "Service organizations operating across Saudi Arabia’s provinces require end-to-end visibility over request execution, regional demand, and quotation vs. revenue clearance.",
    objective: "Service Request Pipeline Tracking: Monitor over 1,200 service requests and evaluate request status breakdowns (49% Completed, 31% Pending, 21% Canceled).",
    dataSource: "Provincial CRM service request logs, customer quotation ledgers, revenue settlement files, and regional branch records across Saudi Arabia.",
    tools: ["Power BI", "Data Modeling", "DAX", "UI UX"],
    keyInsights: [
      "Regional Dominance: Riyadh leads all provinces with 130.67K SAR in paid amount, followed by Najran (70.13K SAR) and Al Bahah (67.21K SAR).",
      "Service Category Distribution: Financial Services lead with 608 requests (52.78%) and 269K SAR (55.68%) of total quotation value, compared to Advertising.",
      "Completion Pipeline: Out of 1,200 requests, 49% (560 requests) are successfully completed, 31% (352) remain pending, and 21% (240) were canceled.",
      "Quotation Conversion: Evaluated regional payment clearance rates to identify delays in transitioning pending requests into settled cash flow."
    ],
    businessImpact: "Streamlined provincial service operations by isolating bottlenecks in the 31% pending backlog and focusing business development on high-revenue regions like Riyadh and Najran.",
    kpis: [
      { label: "Total Requests", value: "1,200" },
      { label: "Completed Status", value: "49% (560)" },
      { label: "Pending Pipeline", value: "31% (352)" },
      { label: "Riyadh Paid Volume", value: "130.67K SAR" }
    ],
    accentColor: "from-amber-400 via-amber-500 to-yellow-600",
    image: "/images/powerbi_service_request_dashboard.png",
    imagePlaceholder: "POWER BI // SERVICE REQUEST MANAGEMENT",
    links: {
      github: "https://github.com/Farahat13/service-request-management-dashboard",
      linkedin: "https://www.linkedin.com/posts/farahat-adel-b27a03277_powerbi-dataanalytics-businessintelligence-activity-7469686355468574720-A_d_?utm_source=share&utm_medium=member_android&rcm=ACoAAEOaQo8B0J2F74-9EbxHQGgQEVIzSFYpScI"
    },
    detailedCaseStudy: {
      overview: "An enterprise service management and regional SLA dashboard in Power BI tracking 1,200 service requests, provincial revenue clearances, and category quotation metrics across Saudi Arabia.",
      problem: "Operations managers had no centralized visibility into provincial request completion or cash collection, causing work orders to sit pending for weeks in regional branches.",
      objective: "Build a regional Power BI monitoring dashboard to track request progression (Completed, Pending, Canceled), province revenue contributions, and category quotation conversions.",
      toolsUsed: ["Power BI Desktop", "Data Modeling (Star Schema)", "DAX (Status Ratios, Regional Quotation Sums)", "UI/UX Regional Intelligence"],
      data: "1,200 service request records across Saudi Arabia's administrative regions, including quotation values, paid amounts, service categories, and status timestamps.",
      analysisProcess: "Modeled regional dimensions and service taxonomy in Power BI. Created DAX measures for Completed Request %, Pending Backlog %, and Regional Paid Aggregations. Designed visual drill-downs by province.",
      dataVisualization: "Built an executive dashboard featuring high-level request totals, donut charts showing status distributions (49% Completed, 31% Pending, 21% Canceled), regional bar rankings, and service category breakdowns.",
      keyInsights: [
        "Riyadh accounts for the largest share of settled revenue at 130.67K SAR, followed by Najran (70.13K SAR) and Al Bahah (67.21K SAR).",
        "Financial Services is the core business driver with 608 requests (52.78%) and 269K SAR (55.68%) in quotation volume.",
        "31% of requests (352) remain pending, representing immediate cash-flow opportunities upon completion.",
        "The 21% cancellation rate was predominantly linked to prolonged initial response times in secondary provinces."
      ],
      results: [
        "Equipped provincial managers with real-time status trackers to prioritize pending request fulfillment.",
        "Realigned regional staffing to accelerate request clearance in high-value provinces.",
        "Delivered unified visibility over 1,200 requests with zero manual spreadsheet collation."
      ],
      lessonsLearned: [
        "Geographic filtering in Power BI gives regional directors immediate ownership over local SLA performance.",
        "Tracking quotation-to-paid ratios reveals operational friction that traditional revenue reports miss."
      ],
      metricsBeforeAfter: [
        { metric: "Regional Request Visibility", before: "Disjointed Branch Spreadsheets", after: "Centralized Kingdom-Wide Power BI Dashboard" },
        { metric: "Backlog Resolution Time", before: "Weeks of Manual Follow-ups", after: "Instant Daily Pending Pipeline Audit" }
      ]
    }
  }
];

// ==========================================
// 4. EXPERIENCE (Professional Practice Timeline)
// ==========================================
export const portfolioExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 - PRESENT",
    position: "Data Analyst & Business Intelligence Specialist",
    company: "Freelance & Independent Analytics Practice",
    location: "Remote",
    type: "Professional Practice",
    responsibilities: [
      "Analyzing multi-source business datasets, writing complex SQL queries, and designing interactive Power BI and Excel dashboards.",
      "Performing exploratory data analysis, identifying trends and anomalies, and presenting strategic recommendations to stakeholders.",
      "Translating raw business questions into structured analytical models, dashboards, and automated telemetry workflows.",
      "Auditing data hygiene, verifying pipeline integrity, and documenting data dictionaries for reporting accuracy."
    ],
    achievements: [
      "Designed and deployed executive dashboards that reduced manual reporting overhead.",
      "Standardized analytical workflows and SQL models to accelerate query turnaround time.",
      "Delivered strategic decision support across commercial, operations, and retention metrics."
    ],
    toolsUsed: ["SQL", "Power BI", "Python", "Excel", "DAX", "Data Modeling"]
  }
];

// ==========================================
// 5. EDUCATION (Formal Records - Ready for Official Verification)
// ==========================================
export const portfolioEducation: EducationItem[] = [];

// ==========================================
// 6. CERTIFICATIONS (Professional Credentials - Ready for Official Verification)
// ==========================================
export const portfolioCertifications: CertificationItem[] = [];

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
