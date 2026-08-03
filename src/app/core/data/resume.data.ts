import { CertificationEntry, EducationEntry, ExperienceEntry } from '../models/resume.model';

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Software Engineering Intern',
    organization: 'Advanced Tech',
    dates: 'July 2025 – September 2025',
    description:
      'Worked within an Agile software engineering team and gained hands-on exposure to team-based development workflows and the software development lifecycle.',
    responsibilities: [
      'Collaborated on shared codebases using Git and GitHub',
      'Worked with branching workflows, pull requests, and merge-conflict resolution',
      'Used Azure DevOps for work-item tracking within an Agile team',
      'Gained exposure to requirements analysis, implementation, and testing',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Jordan University of Science and Technology',
    date: 'February 2026',
    detail: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Operating Systems',
      'Software Engineering',
    ],
  },
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    name: 'Full Stack Web Development — ASP.NET and Angular',
    institution: 'Princess Sumaya University for Technology',
    date: 'October 2025',
  },
];
