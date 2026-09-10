export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  subsection?: string;
  businessProblem: string;
  objective?: string;
  dataSource: string;
  tools: string[];
  keyInsights: string[];
  businessImpact: string;
  kpis?: { label: string; value: string; change?: string }[];
  accentColor: string;
  image?: string;
  imagePlaceholder?: string;
  links?: {
    linkedin?: string;
    excelDashboard?: string;
    github?: string;
    liveDemo?: string;
  };
  detailedCaseStudy: {
    overview: string;
    problem: string;
    objective?: string;
    toolsUsed: string[];
    data: string;
    analysisProcess: string;
    dataVisualization: string;
    keyInsights: string[];
    results: string[];
    lessonsLearned: string[];
    solution?: string;
    metricsBeforeAfter?: { metric: string; before: string; after: string }[];
  };
}

export type SkillCategory =
  | 'data-analysis'
  | 'data-visualization'
  | 'programming'
  | 'databases'
  | 'business-intelligence'
  | 'tools-technologies';

export interface SkillNode {
  id: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  highlight: string;
  description: string;
  subCapabilities: string[];
  indicator?: string; // Visual competency indicator, e.g. "Primary Stack", "Core Method", "Analytical"
  codeSnippet?: string;
  relatedSkills: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  position: string;
  company: string;
  location?: string;
  type?: string;
  responsibilities: string[];
  achievements: string[];
  toolsUsed: string[];
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  faculty?: string;
  period: string;
  location?: string;
  grade?: string;
  gpa?: string;
  logoUrl?: string;
  campusImageUrl?: string;
  relevantStudies?: string[];
  achievements?: string[];
  degreeAr?: string;
  facultyAr?: string;
  institutionAr?: string;
  gradeAr?: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  badgePlaceholder?: string;
  isPlaceholder?: boolean;
}

export interface PipelineStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  inputs: string;
  actions: string[];
  output: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  title: string;
  field: string;
  tagline: string;
  heroHeadline: string;
  shortIntroduction: string;
  fullBio: string;
  professionalJourney: string;
  approachToData: string;
  interests: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  profilePhoto: {
    url?: string;
    placeholderLabel: string;
    initials: string;
  };
  stats?: {
    label: string;
    value: string;
    sub: string;
  }[];
  philosophy: {
    quote: string;
    tenets: { title: string; desc: string }[];
  };
}

