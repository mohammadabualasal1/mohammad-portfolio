export interface Capability {
  title: string;
  description: string;
  projectName: string;
  projectSlug: string;
}

export const CAPABILITIES: Capability[] = [
  {
    title: 'Delivery Workflow',
    description:
      'Modeling merchant orders through controlled, validated stages from intake to final delivery.',
    projectName: 'Wasel',
    projectSlug: 'wasel',
  },
  {
    title: 'Role-Based Authorization',
    description:
      'Enforcing endpoint-level permissions across four distinct clinic roles, backed by JWT authentication.',
    projectName: 'GrandeVet',
    projectSlug: 'grandevet',
  },
  {
    title: 'Workspace-Scoped Authorization',
    description:
      'Enforcing permissions that depend on both the authenticated user and the workspace or resource being accessed, across 8 controllers.',
    projectName: 'FlowCore',
    projectSlug: 'flowcore',
  },
  {
    title: 'AI Integration',
    description:
      'Integrating the Anthropic Claude API server-side to summarize aggregated news articles safely.',
    projectName: 'Daily Plus',
    projectSlug: 'daily-plus',
  },
];
