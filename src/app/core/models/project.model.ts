export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface RepoInfo {
  status: 'public' | 'private';
  url?: string;
  label: string;
}

export interface EngineeringPoint {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  order: number;
  name: string;
  category: string;
  featured: boolean;
  summary: string;
  overview: string;
  cover: ProjectScreenshot | null;
  userRoles: string[];
  problem: string;
  solution: string;
  coreCapabilities: string[];
  businessLogic: string[];
  architecture: string;
  database: string;
  authentication: string;
  engineeringDecisions: EngineeringPoint[];
  challenges: string[];
  lessonsLearned: string[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  repo: RepoInfo;
}
