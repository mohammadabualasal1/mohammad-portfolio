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
    title: 'Blood Matching Workflow',
    description:
      'Matching eligible donors to hospital requests by compatibility, with a separate verification and notification flow.',
    projectName: 'BloodBridge',
    projectSlug: 'bloodbridge',
  },
  {
    title: 'AI Integration',
    description:
      'Integrating the Anthropic Claude API server-side to summarize aggregated news articles safely.',
    projectName: 'Daily Plus',
    projectSlug: 'daily-plus',
  },
];
