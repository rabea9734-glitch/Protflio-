export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      lab: 'مختبر البيانات',
      experience: 'الخبرات والمسيرة',
      contact: 'تواصل معي',
      startProject: 'ابدأ مشروعاً',
      replayIntro: 'إعادة مشهد البداية',
      switchLang: 'English',
      langCode: 'EN',
      activeNode: 'العقدة النشطة',
    },

    // Hero Section
    hero: {
      verifiedBadge: 'هوية مهنية معتمدة',
      statusAvailable: 'متاح للمشاريع الجديدة والتعاقدات',
      name: 'فرحات عادل فرحات',
      title: 'محلل بيانات | Data Analyst',
      tagline: 'تحويل البيانات المعقدة إلى رؤى استراتيجية وقرارات تنفيذية دقيقة.',
      viewProjectsBtn: 'استكشاف المشاريع',
      contactBtn: 'تواصل معي',
      exploreSkillsBtn: 'استعراض المهارات',
      stats: {
        methodology: 'المنهجية التحليلية',
        methodologySub: 'قائمة على الفرضيات والاختبار',
        focus: 'التركيز الأساسي',
        focusSub: 'ذكاء الأعمال ونمذجة البيانات',
        tools: 'الأدوات الرئيسية',
        toolsSub: 'SQL • Power BI • Python • Excel',
      },
      telemetry: {
        systemReady: 'النظام جاهز',
        dataIntegrity: 'سلامة البيانات: 100%',
        uptime: 'متاح للعمل عن بُعد وحضورياً',
      }
    },

    // Personal Data & Bio (Home Page)
    profile: {
      sectionBadge: 'البيانات الشخصية والنبذة المهنية',
      sectionTitle: 'عن فرحات عادل فرحات',
      sectionSubtitle: 'محلل بيانات شغوف باستكشاف الأنماط الخفية في البيانات وبناء لوحات التحكم التفاعلية لدعم اتخاذ القرار.',
      
      // Personal Details Grid
      personalDataTitle: 'البيانات الشخصية والمعلومات الأساسية',
      fullNameLabel: 'الاسم الكامل:',
      fullNameVal: 'فرحات عادل فرحات',
      roleLabel: 'المسمى المهني:',
      roleVal: 'محلل بيانات (Data Analyst)',
      fieldLabel: 'مجال التخصص:',
      fieldVal: 'تحليل البيانات وذكاء الأعمال (Business Intelligence)',
      educationLabel: 'المؤهل الأكاديمي:',
      educationVal: 'بكالوريوس نظم معلومات الأعمال (BIS)',
      universityLabel: 'الجامعة والكلية:',
      universityVal: 'كلية التجارة، جامعة طنطا (2021 – 2025)',
      gradeLabel: 'التقدير العام والمعدل:',
      gradeVal: 'ممتاز مع مرتبة الشرف | GPA: 3.88 / 4.00',
      locationLabel: 'الموقع / نمط العمل:',
      locationVal: 'متاح للمشاريع عن بُعد وحضورياً',
      emailLabel: 'البريد الإلكتروني:',
      emailVal: 'farahatadel3@gmail.com',
      phoneLabel: 'رقم الهاتف:',
      phoneVal: '01099679324',
      linkedinLabel: 'حساب LinkedIn:',
      linkedinVal: 'linkedin.com/in/farahat-adel-b27a03277',

      // Bio & Story
      bioTab: 'النبذة المهنية',
      philosophyTab: 'فلسفتي في تحليل البيانات',
      interestsTab: 'مجالات الاهتمام',
      
      bioTitle: 'رحلتي المهنية في عالم البيانات',
      bioText: 'محلل بيانات متخصص في استخراج القيمة الكامنة من مجموعات البيانات متعددة المصادر. أركز على الربط الدقيق بين الأرقام المجردة والأهداف التجارية الحقيقية، عبر بناء نماذج استعلام متقدمة وتصميم لوحات تحكم تنفيذية ترشد القيادات نحو قرارات استباقية مبنية على حقائق ملموسة.',
      
      approachTitle: 'منهجيتي في التعامل مع البيانات',
      approachText: 'منهجية نظامية تنطلق من تدقيق جودة البيانات عند نقطة الإدخال، وتطبيق الأساليب الإحصائية السليمة، ثم صياغة لوحات تحكم تفاعلية تحترم وقت وتفكير صانع القرار، محوّلة الجداول الصامتة إلى استراتيجيات فورية.',

      philosophyQuote: 'البيانات دون سياق منظم هي مجرد ضجيج مكلف. التحليل الحقيقي هو اكتشاف ما تحاول البيانات قوله وتحويله إلى قرارات حاسمة.',
      
      tenetsTitle: 'المبادئ التحليلية الجوهرية',
      tenet1Title: 'تنظيف البيانات عند المنبع',
      tenet1Desc: 'دقة المخرجات تعتمد على سلامة البنية التحتية للبيانات وتدقيق القيم الشاذة والمفقودة.',
      tenet2Title: 'تفسير "لماذا" وليس فقط "ماذا"',
      tenet2Desc: 'الأرقام الوصفية تعرض ما حدث في الماضي، بينما التحليل التشخيصي والتنبؤي يحدد الأسباب ويقود النتائج.',
      tenet3Title: 'انعدام الإجهاد الإدراكي في العرض المرئي',
      tenet3Desc: 'يجب أن تقدم لوحات التحكم المعلومة بوضوح فوري، مع الالتزام بالدقة الرياضية والابتعاد عن التشتيت البصري.',

      interests: [
        'النمذجة التنبؤية والاستدلال الإحصائي',
        'مستودعات البيانات وتصميم النماذج النجمية (Star Schema)',
        'بناء لوحات القيادة التنفيذية بـ Power BI و Tableau',
        'أتمتة مسارات استخراج ومعالجة البيانات (ETL) بـ Python',
        'ذكاء الأعمال واستراتيجيات دعم القرار'
      ],

      quickNavTitle: 'استكشف بقية الأقسام المخصصة:',
      goToSkills: 'عرض المهارات والتقنيات',
      goToProjects: 'استعراض دراسات الحالة والمشاريع',
      goToContact: 'التواصل وبدء مناقشة مشروع'
    },

    // Skills Section
    skills: {
      sectionBadge: 'المنظومة التقنية // مهارات تحليل البيانات',
      sectionTitle: 'القدرات والمهارات التحليلية',
      sectionSubtitle: 'منظومة متكاملة تغطي كافة مراحل دورة حياة البيانات من الاستخراج والنمذجة حتى العرض المرئي.',
      categories: {
        all: 'جميع المهارات',
        'data-analysis': 'تحليل البيانات',
        'data-visualization': 'العرض المرئي للبيانات',
        'programming': 'البرمجة والأتمتة',
        'databases': 'قواعد البيانات و SQL',
        'business-intelligence': 'ذكاء الأعمال والمؤشرات',
        'tools-technologies': 'الأدوات والتقنيات المتقدمة'
      },
      proficiency: 'مستوى التمكن:',
      subSkills: 'القدرات الفرعية:',
      codePreview: 'معاينة شفرة برمجية / استعلام SQL:',
      viewDetails: 'عرض التفاصيل',
      closeModal: 'إغلاق'
    },

    // Projects Section
    projects: {
      sectionBadge: 'دراسات الحالة العملية // المشاريع',
      sectionTitle: 'مشاريع تحليل بيانات واقعية',
      sectionSubtitle: 'دراسات حالة معمقة توضح حل مشكلات الأعمال من البيانات الخام إلى الرؤى والتأثير القابل للقياس.',
      caseStudyBtn: 'قراءة دراسة الحالة الكاملة',
      problemLabel: 'المشكلة التجارية:',
      insightsLabel: 'أبرز الرؤى المكتشفة:',
      impactLabel: 'الأثر التجاري المحقق:',
      toolsLabel: 'الأدوات المستخدمة:',
      kpisLabel: 'مؤشرات الأداء:',
      overview: 'نظرة عامة على المشروع',
      dataSources: 'مصادر وهيكلية البيانات',
      analysisProcess: 'خطوات ومنهجية التحليل',
      resultsDelivered: 'النتائج المحققة',
      lessonsLearned: 'الدروس المستفادة'
    },

    // Data Lab & Process Section
    lab: {
      sectionBadge: 'المختبر التحليلي والمنهجية',
      sectionTitle: 'مختبر البيانات التفاعلي',
      sectionSubtitle: 'نماذج محاكاة حية لاختبار سيناريوهات التحليل واكتشاف الأنماط.',
      pipelineTitle: 'منهجية معالجة البيانات من 7 مراحل',
      pipelineSubtitle: 'المسار الدقيق المتبع لتحويل البيانات الخام إلى قرارات استثمارية وتشغيلية.',
      stages: {
        stage1: '1. البيانات الخام (Raw Data)',
        stage1Desc: 'استقبال وفحص البيانات من مختلف المصادر وقواعد البيانات.',
        stage2: '2. التنظيف والتدقيق (Clean & Sanitize)',
        stage2Desc: 'معالجة القيم المفقودة وإزالة التكرارات وضمان صحة الأنواع.',
        stage3: '3. الاستكشاف الأولي (EDA)',
        stage3Desc: 'دراسة التوزيعات الإحصائية وبناء مصفوفات الارتباط والفرضيات.',
        stage4: '4. التحليل والنمذجة (Analyze & Model)',
        stage4Desc: 'تطبيق الدوال التحليلية المتقدمة وتحليل الفئات (Cohorts).',
        stage5: '5. العرض المرئي (Visualize)',
        stage5Desc: 'بناء لوحات تحكم تفاعلية تركز على البساطة وسرعة القراءة.',
        stage6: '6. استخلاص الرؤى (Insights)',
        stage6Desc: 'ترجمة النتائج الإحصائية إلى تفسيرات تجارية واضحة.',
        stage7: '7. دعم القرار (Decisions)',
        stage7Desc: 'تمكين الإدارة من اتخاذ قرارات دقيقة مبنية على حقائق موثوقة.'
      }
    },

    // Experience & Metrics Section
    experience: {
      sectionBadge: 'المسيرة المهنية والتعليم',
      sectionTitle: 'الخبرات والإنجازات الأكاديمية',
      sectionSubtitle: 'محطات التطور المهني والتعليمي والشهادات التخصصية.',
      timelineTab: 'المسار المهني',
      educationTab: 'التعليم الأكاديمي',
      certificationsTab: 'الشهادات المهنية',
      standardsTab: 'المعايير المنهجية',
      responsibilities: 'المسؤوليات الرئيسية:',
      achievements: 'أبرز الإنجازات والنتائج:',
      toolsUsed: 'الأدوات الموظفة:',
      institution: 'المؤسسة التعليمية:',
      degree: 'المؤهل الدراسي:',
      issuer: 'الجهة المانحة:',
      verifyCred: 'التحقق من الشهادة'
    },

    // Contact Section
    contact: {
      sectionBadge: 'بدء التواصل // تواصل معي',
      sectionTitle: 'هل لديك بيانات؟ دعنا نكتشف قصتها معاً.',
      sectionSubtitle: 'سواء كانت لديك مشكلة تجارية، مجموعة بيانات تحتاج لتحليل، أو فرصة عمل وتعاقد، يسعدني التواصل معك.',
      directCards: 'قنوات التواصل المباشرة',
      emailCard: 'البريد الإلكتروني',
      phoneCard: 'رقم الهاتف',
      linkedinCard: 'ملف لينكد إن',
      locationCard: 'الموقع والجاهزية',
      copySuccess: 'تم نسخ البريد الإلكتروني بنجاح!',
      copyBtn: 'نسخ البريد',
      formTitle: 'إرسال رسالة مباشرة',
      nameField: 'الاسم الكريم',
      namePlaceholder: 'أدخل اسمك أو اسم المؤسسة...',
      emailField: 'بريدك الإلكتروني',
      emailPlaceholder: 'name@example.com',
      scopeField: 'نوع المشروع / الاستفسار',
      scopeOptions: {
        bi: 'بناء لوحات تحكم وذكاء أعمال (Power BI / Tableau)',
        eda: 'تحليل بيانات استكشافي ونمذجة إحصائية',
        cleaning: 'تنظيف وتجهيز مستودعات البيانات (SQL / Python)',
        contract: 'تعاقد / فرصة عمل كمحلل بيانات',
        other: 'استفسار آخر'
      },
      messageField: 'تفاصيل الرسالة أو المشكلة التحليلية',
      messagePlaceholder: 'اكتب نبذة عن البيانات أو المشروع الذي ترغب في مناقشته...',
      sendBtn: 'إرسال الرسالة',
      sentSuccessTitle: 'تم استلام رسالتك بنجاح!',
      sentSuccessDesc: 'شكراً لتواصلك، سيتم الرد عليك في أقرب وقت ممكن عبر البريد الإلكتروني.'
    },

    // Footer
    footer: {
      rights: 'جميع الحقوق محفوظة © فرحات عادل فرحات',
      role: 'محلل بيانات محترف',
      tagline: 'تحويل البيانات إلى قرارات ذكية ذات أثر ملموس.',
      designedFor: 'مصمم خصيصاً لعرض محفظة الأعمال التحليلية'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      skills: 'SKILLS',
      projects: 'PROJECTS',
      lab: 'DATA LAB',
      experience: 'EXPERIENCE',
      contact: 'CONTACT',
      startProject: 'START A PROJECT',
      replayIntro: 'REPLAY INTRO',
      switchLang: 'العربية',
      langCode: 'AR',
      activeNode: 'ACTIVE NODE',
    },

    // Hero Section
    hero: {
      verifiedBadge: 'VERIFIED PROFESSIONAL IDENTITY',
      statusAvailable: 'AVAILABLE FOR REMOTE & ON-SITE CONTRACTS',
      name: 'Farahat Adel Farahat',
      title: 'Data Analyst',
      tagline: 'Turning complex datasets into actionable intelligence and executive clarity.',
      viewProjectsBtn: 'EXPLORE PROJECTS',
      contactBtn: 'CONTACT ME',
      exploreSkillsBtn: 'VIEW SKILLS',
      stats: {
        methodology: 'METHODOLOGY',
        methodologySub: 'Hypothesis-Driven & Empirical',
        focus: 'CORE FOCUS',
        focusSub: 'BI Telemetry & Data Modeling',
        tools: 'KEY TOOLS',
        toolsSub: 'SQL • Power BI • Python • Excel',
      },
      telemetry: {
        systemReady: 'SYSTEM READY',
        dataIntegrity: 'DATA INTEGRITY: 100%',
        uptime: 'AVAILABLE REMOTE & ON-SITE',
      }
    },

    // Personal Data & Bio (Home Page)
    profile: {
      sectionBadge: 'PERSONAL DATA & PROFESSIONAL SUMMARY',
      sectionTitle: 'About Farahat Adel Farahat',
      sectionSubtitle: 'A dedicated Data Analyst passionate about uncovering hidden data patterns and architecting intuitive dashboards that drive decisive business strategy.',
      
      // Personal Details Grid
      personalDataTitle: 'Personal Coordinates & Essential Details',
      fullNameLabel: 'Full Name:',
      fullNameVal: 'Farahat Adel Farahat',
      roleLabel: 'Professional Role:',
      roleVal: 'Data Analyst',
      fieldLabel: 'Primary Field:',
      fieldVal: 'Data Analysis & Business Intelligence (BI)',
      educationLabel: 'Academic Qualification:',
      educationVal: "Bachelor's in Business Information Systems (BIS)",
      universityLabel: 'University & Faculty:',
      universityVal: 'Faculty of Commerce, Tanta University (2021 – 2025)',
      gradeLabel: 'Academic Grade & GPA:',
      gradeVal: 'Grade: Excellent | GPA: 3.88 / 4.00',
      locationLabel: 'Location / Work Mode:',
      locationVal: 'Available for Remote & On-Site Projects',
      emailLabel: 'Direct Email:',
      emailVal: 'farahatadel3@gmail.com',
      phoneLabel: 'Phone Number:',
      phoneVal: '01099679324',
      linkedinLabel: 'LinkedIn Profile:',
      linkedinVal: 'linkedin.com/in/farahat-adel-b27a03277',

      // Bio & Story
      bioTab: 'Professional Bio',
      philosophyTab: 'Analytical Philosophy',
      interestsTab: 'Core Interests',
      
      bioTitle: 'My Analytical Trajectory',
      bioText: 'A disciplined data analyst specialized in bridging raw transactional records with high-level executive objectives. I audit schema integrity at ingestion, apply sound statistical methods, and engineer intuitive BI dashboards that prompt immediate operational action.',
      
      approachTitle: 'Systematic Analytical Approach',
      approachText: 'Systematic, hypothesis-driven, and business-focused: auditing data hygiene at the root, applying rigorous statistical methods, and translating complex tables into intuitive executive cockpits that prompt decisive operational action.',

      philosophyQuote: 'Data without structured context is merely expensive noise. True analysis finds what the data is trying to say and turns it into decisive strategy.',
      
      tenetsTitle: 'Core Methodological Tenets',
      tenet1Title: 'Cleanse at the Ingestion Root',
      tenet1Desc: 'Accurate conclusions depend on pristine underlying schema integrity, verified types, and disciplined outlier auditing.',
      tenet2Title: 'Explain the "Why", Not Just the "What"',
      tenet2Desc: 'Descriptive numbers explain historical events. Diagnostic and predictive analytics isolate root causes and guide real-world outcomes.',
      tenet3Title: 'Zero Cognitive Friction in Visualization',
      tenet3Desc: 'Dashboards must respect human attention: maintain mathematical scale integrity, eliminate visual clutter, and spotlight decisive anomalies.',

      interests: [
        'Predictive Modeling & Statistical Inference',
        'Data Warehousing & Dimensional Modeling (Star Schema)',
        'Executive Telemetry & BI Dashboard Architecture',
        'Machine Learning & Automated ETL Workflows in Python',
        'Business Intelligence & Decision Strategy'
      ],

      quickNavTitle: 'Explore Dedicated Portfolio Sections:',
      goToSkills: 'View Skills & Technical Stack',
      goToProjects: 'View Case Studies & Projects',
      goToContact: 'Get in Touch & Start a Project'
    },

    // Skills Section
    skills: {
      sectionBadge: 'ANALYTICAL ECOSYSTEM // COMPETENCIES',
      sectionTitle: 'Skills & Technical Capabilities',
      sectionSubtitle: 'A structured analytical ecosystem covering every stage of the data lifecycle from ingestion to executive dashboards.',
      categories: {
        all: 'ALL SKILLS',
        'data-analysis': 'Data Analysis',
        'data-visualization': 'Data Visualization',
        'programming': 'Programming',
        'databases': 'Databases & SQL',
        'business-intelligence': 'Business Intelligence',
        'tools-technologies': 'Tools & Technologies'
      },
      proficiency: 'Proficiency Focus:',
      subSkills: 'Sub-capabilities:',
      codePreview: 'Code / Query Snippet:',
      viewDetails: 'View Details',
      closeModal: 'Close'
    },

    // Projects Section
    projects: {
      sectionBadge: 'PRACTICAL CASE STUDIES // PORTFOLIO',
      sectionTitle: 'Featured Data Case Studies',
      sectionSubtitle: 'In-depth analytical projects demonstrating real problem solving from raw data to measurable business impact.',
      caseStudyBtn: 'READ FULL CASE STUDY',
      problemLabel: 'Business Problem:',
      insightsLabel: 'Key Insights Discovered:',
      impactLabel: 'Business Impact:',
      toolsLabel: 'Tools Employed:',
      kpisLabel: 'Key Indicators:',
      overview: 'Project Overview',
      dataSources: 'Data Sources & Structure',
      analysisProcess: 'Analysis Process & Methodology',
      resultsDelivered: 'Delivered Outcomes',
      lessonsLearned: 'Lessons Learned'
    },

    // Data Lab & Process Section
    lab: {
      sectionBadge: 'ANALYTICAL LAB & METHODOLOGY',
      sectionTitle: 'Interactive Data Lab',
      sectionSubtitle: 'Interactive models and live simulation sandboxes exploring behavioral data variance.',
      pipelineTitle: 'The 7-Stage Analytical Pipeline',
      pipelineSubtitle: 'A structured, repeatable protocol for transforming raw signals into confident strategic actions.',
      stages: {
        stage1: '1. Raw Data Ingestion',
        stage1Desc: 'Capture multi-source transactional databases, CSV files, and API endpoints.',
        stage2: '2. Clean & Sanitize',
        stage2Desc: 'Eliminate duplicates, impute missing values, and enforce relational constraints.',
        stage3: '3. Exploratory Analysis (EDA)',
        stage3Desc: 'Investigate statistical distributions, correlation matrices, and testable hypotheses.',
        stage4: '4. Statistical Modeling',
        stage4Desc: 'Apply SQL window functions, cohort retention models, and significance tests.',
        stage5: '5. Visualization & Cockpits',
        stage5Desc: 'Design clear Power BI and Tableau dashboards respecting cognitive ergonomics.',
        stage6: '6. Executive Insights',
        stage6Desc: 'Distill quantitative trends into actionable business briefings.',
        stage7: '7. Decisive Action',
        stage7Desc: 'Empower stakeholders to optimize capital allocation, retention, and growth.'
      }
    },

    // Experience & Metrics Section
    experience: {
      sectionBadge: 'CAREER TIMELINE & CREDENTIALS',
      sectionTitle: 'Experience & Academic Foundations',
      sectionSubtitle: 'Professional track record, academic background, and professional certifications.',
      timelineTab: 'Career Timeline',
      educationTab: 'Education',
      certificationsTab: 'Certifications',
      standardsTab: 'Analytical Standards',
      responsibilities: 'Core Responsibilities:',
      achievements: 'Delivered Achievements:',
      toolsUsed: 'Tools Employed:',
      institution: 'Academic Institution:',
      degree: 'Degree / Program:',
      issuer: 'Issuing Authority:',
      verifyCred: 'Verify Credential'
    },

    // Contact Section
    contact: {
      sectionBadge: 'INITIATE ENGAGEMENT // CONTACT',
      sectionTitle: "Got Data? Let's Find The Story.",
      sectionSubtitle: 'Whether you have a business question, an unanalyzed dataset, or a full-time role, let us connect.',
      directCards: 'Direct Communication Coordinates',
      emailCard: 'Direct Email',
      phoneCard: 'Phone Number',
      linkedinCard: 'LinkedIn Profile',
      locationCard: 'Location & Availability',
      copySuccess: 'Email address copied to clipboard!',
      copyBtn: 'Copy Email',
      formTitle: 'Direct Terminal Inquiry',
      nameField: 'Your Name or Organization',
      namePlaceholder: 'Enter your name or business name...',
      emailField: 'Email Address',
      emailPlaceholder: 'name@example.com',
      scopeField: 'Project Scope / Inquiry Type',
      scopeOptions: {
        bi: 'Executive BI Dashboard Architecture (Power BI / Tableau)',
        eda: 'Exploratory Data Analysis & Statistical Modeling',
        cleaning: 'Data Cleaning & Relational Modeling (SQL / Python)',
        contract: 'Data Analyst Role / Long-Term Engagement',
        other: 'General Analytical Inquiry'
      },
      messageField: 'Project Details or Business Challenge',
      messagePlaceholder: 'Briefly describe your dataset or the analytical challenge you wish to solve...',
      sendBtn: 'DISPATCH TRANSMISSION',
      sentSuccessTitle: 'Message Dispatched Successfully!',
      sentSuccessDesc: 'Thank you for reaching out. I will respond to your email promptly.'
    },

    // Footer
    footer: {
      rights: 'All rights reserved © Farahat Adel Farahat',
      role: 'Professional Data Analyst',
      tagline: 'Transforming complex data into decisive business intelligence.',
      designedFor: 'Tailored Data Analytics Portfolio'
    }
  }
};
