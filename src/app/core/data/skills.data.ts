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
      'ASP.NET Core Identity',
      'LINQ',
      'RESTful API Design',
      'JWT Authentication',
      'Role-Based Authorization',
      'SignalR',
      'Dependency Injection',
      'Swagger / OpenAPI',
      'API Validation',
      'Error Handling',
    ],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'Bootstrap', 'Angular CDK', 'Angular Signals'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'Relational Database Design'],
  },
  {
    label: 'Integrations',
    items: ['Google Maps JavaScript API', 'Cloudinary', 'Anthropic Claude API'],
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
