export interface ExperienceEntry {
  role: string;
  organization: string;
  dates: string;
  description: string;
  responsibilities: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  date: string;
  detail?: string[];
}

export interface CertificationEntry {
  name: string;
  institution: string;
  date: string;
}
