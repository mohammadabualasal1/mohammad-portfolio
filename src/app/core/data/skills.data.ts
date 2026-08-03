export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Backend',
    items: [
      'C#',
      'ASP.NET Core Web API',
      'ASP.NET MVC',
      'Entity Framework Core',
      'LINQ',
      'RESTful API Design',
      'JWT Authentication',
      'Role-Based Authorization',
      'Dependency Injection',
      'Swagger / OpenAPI',
      'API Validation',
      'Error Handling',
    ],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'Relational Database Design'],
  },
  {
    label: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Azure DevOps',
      'Docker',
      'Postman',
      'Swagger',
      'Visual Studio',
      'Visual Studio Code',
      'pgAdmin',
    ],
  },
  {
    label: 'Engineering Practices',
    items: [
      'Object-Oriented Programming',
      'SOLID Principles',
      'Clean Code',
      'Layered Application Design',
      'Business-Rule Validation',
      'Role-Based Security',
      'API Contract Design',
      'Relational Data Modeling',
      'Agile Development',
      'Scrum',
      'Kanban',
    ],
  },
];
