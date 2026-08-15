export interface EngineeringDecision {
  id: string;
  title: string;
  description: string;
}

export const ENGINEERING_DECISIONS: EngineeringDecision[] = [
  {
    id: 'validation',
    title: 'Backend validation',
    description:
      'Important business rules are validated by the ASP.NET Core API rather than relying only on Angular forms, since client-side checks can be bypassed or simply missed.',
  },
  {
    id: 'authorization',
    title: 'Authorization',
    description:
      'Angular route guards improve the user experience by hiding screens a user shouldn’t see, but role permissions are also enforced at the endpoint level, where they actually matter.',
  },
  {
    id: 'jwt',
    title: 'JWT authentication',
    description:
      'JWT was used to support authenticated API communication between the Angular client and the ASP.NET Core backend — a project-appropriate choice for stateless, token-based API access, not a claim that it universally beats other approaches.',
  },
  {
    id: 'relational-databases',
    title: 'Relational databases',
    description:
      'PostgreSQL and SQL Server were used because these applications contain structured entities and relationships — merchants and orders, clients and appointments, donors and requests — that benefit from relational constraints and querying.',
  },
  {
    id: 'rest',
    title: 'REST APIs',
    description:
      'Predictable, resource-oriented endpoints make the communication between Angular and ASP.NET Core easier to understand, consume, and maintain over time.',
  },
  {
    id: 'workflow-states',
    title: 'Workflow states',
    description:
      'Systems such as Wasel and FlowCore depend on controlled state transitions — delivery statuses, task and column movements — to prevent invalid business operations from happening.',
  },
];
