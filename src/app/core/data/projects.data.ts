import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'wasel',
    order: 1,
    name: 'Wasel',
    category: 'B2B Delivery Management System',
    featured: true,
    summary:
      "A B2B delivery management platform connecting business clients with a dedicated delivery team, with real-time status updates, proximity-based route ordering, and a two-phase pickup-and-delivery workflow across four user roles.",
    overview:
      "Wasel is a delivery management platform that connects business clients with a delivery team and manages pickup and delivery operations end-to-end. Admins, warehouse managers, captains, and clients share a single system built around structured shifts, real-time status updates, and location-aware delivery workflows.",
    cover: {
      src: '/assets/images/projects/wasel/landing-page.png',
      alt: 'Wasel landing page',
    },
    userRoles: ['Admin', 'Warehouse Manager', 'Captain', 'Client'],
    problem:
      "Business clients need a structured way to hand off pickup and delivery operations to a dedicated delivery team, while warehouse managers need visibility into shift assignment, order status, and captain workload, and captains need a clear, location-aware workflow for each stop.",
    solution:
      "Wasel organizes delivery operations into pickup and delivery shifts, assigns captains to those shifts, and moves each order through controlled status transitions from pickup to confirmed delivery. Google Maps location selection, SignalR-based real-time status updates, and Cloudinary-backed photo confirmation tie the workflow together across all four roles.",
    coreCapabilities: [
      'Two-phase pickup & delivery workflow',
      'Real-time order status updates (SignalR)',
      'Proximity-based route ordering',
      'Google Maps location handling & photo confirmation',
    ],
    businessLogic: [
      "Two-phase delivery workflow: pickup shifts move orders from clients into the system, and delivery shifts move them on to their final destination",
      "Shift creation and captain assignment, with each shift representing a captain's set of pickup or delivery stops for a given period",
      "Proximity-based route ordering that sorts a captain's stops using a Nearest Neighbor algorithm over Haversine-formula distances, reducing unnecessary travel between stops",
      'Photo confirmation at pickup and delivery, stored through Cloudinary, so each handoff has supporting evidence',
      'Controlled order-status transitions that keep pickup and delivery stages from being skipped or reversed',
      'Manager oversight through order filtering by status, client, and date range, alongside shift creation, captain assignment, and captain management',
    ],
    architecture:
      'The backend is an ASP.NET Core Web API with a SignalR hub for pushing real-time order-status updates to connected clients, paired with an Angular frontend that integrates the Google Maps JavaScript API for location selection and Cloudinary for photo confirmation uploads.',
    database:
      'Wasel uses PostgreSQL, accessed through Entity Framework Core where currently applicable, with relational entities modeling clients, shifts, captains, and delivery orders across the pickup and delivery workflow.',
    authentication:
      'Access is controlled with JWT authentication, and endpoints enforce role-based authorization across the Admin, Warehouse Manager, Captain, and Client roles so each role can only reach the actions relevant to it.',
    engineeringDecisions: [
      {
        title: 'Proximity-based route ordering',
        description:
          "Captain stops are sorted with a Nearest Neighbor algorithm over Haversine-formula distances between coordinates. This is proximity-based route ordering, not an exact solution to the Traveling Salesman Problem, but it meaningfully reduces unnecessary travel between stops.",
      },
      {
        title: 'Two-phase pickup and delivery workflow',
        description:
          'Splitting the order lifecycle into pickup shifts and delivery shifts keeps responsibility and status clearly separated at each stage, and creates accountability across the full delivery lifecycle.',
      },
      {
        title: 'Real-time status updates with SignalR',
        description:
          'Order-status changes are pushed to connected clients through SignalR, so clients see delivery progress without manually refreshing the page.',
      },
      {
        title: 'Google Maps location handling',
        description:
          'Pickup and delivery locations are captured through interactive pin-drop selection, reverse geocoding, and Places Autocomplete against the Google Maps JavaScript API, rather than free-text addresses.',
      },
      {
        title: 'Photo confirmation through Cloudinary',
        description:
          'Pickup and delivery confirmations are backed by an uploaded photo, stored and served through Cloudinary, so each handoff has supporting evidence.',
      },
      {
        title: 'Backend-enforced role-based authorization',
        description:
          'Admin, warehouse manager, captain, and client permissions — along with the order-status transition rules — are enforced in the ASP.NET Core API, not only in the Angular interface.',
      },
    ],
    challenges: [
      'Implementing proximity-based route ordering without overstating it as an exact optimal-route solution',
      'Synchronizing SignalR real-time updates with the underlying order-status state',
      'Integrating Google Maps pin-drop selection, reverse geocoding, and Places Autocomplete into the delivery workflow',
      'Coordinating photo confirmation uploads through Cloudinary as part of the pickup and delivery flow',
      'Keeping the two-phase pickup/delivery workflow and its status transitions consistent across four roles',
      'Enforcing role-based authorization and business validation in the backend rather than the Angular client',
    ],
    lessonsLearned: [
      'A proximity-based heuristic like Nearest Neighbor can meaningfully reduce travel distance without needing an exact route-optimization solution.',
      'Real-time features such as SignalR updates still depend on a correctly modeled status workflow underneath.',
      'Third-party map integrations need careful handling of geocoding and location-selection edge cases.',
      'Two-phase workflows make accountability easier to reason about than a single generic status field.',
      'Backend authorization and validation remain necessary even when the Angular UI already restricts access.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'Angular',
      'PostgreSQL',
      'SignalR',
      'Google Maps JavaScript API',
      'Cloudinary',
      'JWT Authentication',
      'Entity Framework Core',
      'Role-Based Authorization',
    ],
    screenshots: [
      {
        src: '/assets/images/projects/wasel/landing-page.png',
        alt: 'Wasel landing page',
      },
      {
        src: '/assets/images/projects/wasel/login.png',
        alt: 'Wasel login page',
      },
      {
        src: '/assets/images/projects/wasel/register.png',
        alt: 'Wasel registration page',
      },
      {
        src: '/assets/images/projects/wasel/client-dashboard.png',
        alt: 'Merchant dashboard showing order summary',
      },
      {
        src: '/assets/images/projects/wasel/create-order.png',
        alt: 'Merchant creating a new delivery order',
      },
      {
        src: '/assets/images/projects/wasel/my-orders.png',
        alt: 'Merchant order history',
      },
      {
        src: '/assets/images/projects/wasel/manager-dashboard.png',
        alt: 'Operations manager dashboard with shift summary',
      },
      {
        src: '/assets/images/projects/wasel/manager-orders.png',
        alt: 'Manager order management view',
      },
      {
        src: '/assets/images/projects/wasel/create-shift.png',
        alt: 'Manager creating a new delivery shift',
      },
      {
        src: '/assets/images/projects/wasel/manager-shifts.png',
        alt: 'Manager shift management view',
      },
      {
        src: '/assets/images/projects/wasel/captains-management.png',
        alt: 'Manager view of registered drivers',
      },
      {
        src: '/assets/images/projects/wasel/captain-shifts.png',
        alt: "Driver view of assigned shifts",
      },
      {
        src: '/assets/images/projects/wasel/captain-confirm.png',
        alt: 'Driver delivery confirmation screen',
      },
    ],
    repo: {
      status: 'private',
      label: 'Private Repository — Code available upon request',
    },
  },
  {
    slug: 'flowcore',
    order: 2,
    name: 'FlowCore',
    category: 'Kanban Project Management System',
    featured: true,
    summary:
      'A full-stack Trello-style project management platform for organizing workspaces, projects, boards, tasks, and team collaboration through structured Kanban workflows.',
    overview:
      'FlowCore is a full-stack Trello-style Kanban project management system designed and implemented from a self-authored technical blueprint. The platform organizes work through workspaces, projects, boards, board columns, tasks, comments, and team membership, so a workspace can go from a top-level container down to an individual task without losing structure along the way.',
    cover: {
      src: '/assets/images/projects/flowcore/landing-page.png',
      alt: 'FlowCore landing page',
    },
    userRoles: ['Owner', 'Member'],
    problem:
      'Teams need a structured way to organize work across workspaces, projects, and boards, while permissions need to depend on who is requesting an action and which resource it touches — not just a single global role.',
    solution:
      'FlowCore models a clear hierarchy — a workspace contains projects, projects contain boards, boards contain columns, and tasks belong to board columns and move through the Kanban workflow. Workspace-scoped authorization decides what an Owner or Member can do with a given resource, and an Angular CDK drag-and-drop board keeps that hierarchy interactive while the backend keeps it valid.',
    coreCapabilities: [
      'Workspace, project & board organization',
      'Drag-and-drop Kanban board',
      'Workspace-scoped authorization',
      'Automatic task-completion tracking',
    ],
    businessLogic: [
      'A workspace contains projects, projects contain boards, boards contain columns, and tasks belong to board columns and move through the Kanban workflow',
      'Workspace members collaborate through task assignment, comments, and controlled permissions',
      "Certain task-editing operations are restricted to the workspace Owner, while task movement is allowed to the Owner or the assigned user",
      'Moving a task between columns can automatically set or clear its completion timestamp',
      'Deleting a workspace, project, or board cascades through related data via explicit soft-delete rules rather than default database behavior',
    ],
    architecture:
      'FlowCore is a full-stack application with an ASP.NET Core Web API backend — organized around workspaces, projects, boards, tasks, and comments across 8 controllers — and an Angular 21 frontend built with standalone components and signals.',
    database:
      'The backend uses PostgreSQL through a 7-entity relational schema in Entity Framework Core, with explicit cascading soft-delete behavior and automatic task-completion tracking that sets or clears completion timestamps based on column transitions.',
    authentication:
      'Authentication is handled with ASP.NET Core Identity and JWT authentication. Authorization is a separate, workspace-scoped layer on top of that: permissions depend on both the authenticated user and the workspace or resource being accessed, and are enforced by the backend across all 8 controllers rather than only by the Angular interface.',
    engineeringDecisions: [
      {
        title: 'Workspace-scoped authorization',
        description:
          'Permissions depend on both the authenticated user and the workspace or resource being accessed, not just a single global role.',
      },
      {
        title: 'Resource-level business rules',
        description:
          "Some operations depend on ownership or task assignment — task editing is restricted to the workspace Owner, while task movement is allowed to the Owner or the assigned user.",
      },
      {
        title: 'Kanban task movement',
        description:
          'Angular CDK powers the drag-and-drop interaction, but the backend remains responsible for validating whether a given move is actually allowed.',
      },
      {
        title: 'Automatic task completion',
        description:
          'Moving a task between board columns can automatically set or clear its completion timestamp, keeping completion state tied to the workflow instead of a manual toggle.',
      },
      {
        title: 'Soft-delete relationships',
        description:
          'Deleting a workspace, project, or board cascades through related data according to explicitly designed soft-delete rules rather than relying on default database behavior.',
      },
      {
        title: 'Full-stack architecture',
        description:
          'Angular owns the interactive Kanban experience while ASP.NET Core owns authentication, authorization, persistence, and business rules.',
      },
    ],
    challenges: [
      'Designing workspace-scoped permissions that account for both the requesting user and the resource being accessed',
      'Enforcing resource-level authorization, such as owner-only task edits and owner-or-assignee task moves',
      'Synchronizing drag-and-drop UI behavior in Angular with backend validation rules',
      'Managing task-completion state based on column transitions',
      'Handling related data correctly through soft deletion across workspaces, projects, and boards',
      'Keeping authentication and authorization responsibilities clearly separated',
    ],
    lessonsLearned: [
      'Resource authorization can require more context than a simple role check.',
      'UI permissions must not replace API authorization.',
      'Drag-and-drop interfaces still require backend validation of every move.',
      'Workflow transitions are easier to reason about when represented explicitly in business logic.',
      'Relational deletion behavior should be planned rather than left to default cascading behavior.',
      'Clear technical documentation — a README, API reference, permissions model, and component-level design brief — improves long-term maintainability.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'PostgreSQL',
      'ASP.NET Core Identity',
      'JWT Authentication',
      'Angular',
      'Angular CDK',
      'Bootstrap 5',
      'TypeScript',
    ],
    screenshots: [
      {
        src: '/assets/images/projects/flowcore/landing-page.png',
        alt: 'FlowCore landing page',
      },
      {
        src: '/assets/images/projects/flowcore/login-page.png',
        alt: 'FlowCore login page',
      },
      {
        src: '/assets/images/projects/flowcore/auth.png',
        alt: 'FlowCore account registration page',
      },
      {
        src: '/assets/images/projects/flowcore/workspaces-list.png',
        alt: 'Workspaces list view',
      },
      {
        src: '/assets/images/projects/flowcore/workspace-members.png',
        alt: 'Workspace members and role management',
      },
      {
        src: '/assets/images/projects/flowcore/projects-list.png',
        alt: 'Projects list within a workspace',
      },
      {
        src: '/assets/images/projects/flowcore/kanban-board.png',
        alt: 'Kanban board with drag-and-drop task columns',
      },
      {
        src: '/assets/images/projects/flowcore/task-details.png',
        alt: 'Task details panel with priority, due date, and comments',
      },
      {
        src: '/assets/images/projects/flowcore/swagger1-api.png',
        alt: 'FlowCore API reference (Swagger)',
      },
      {
        src: '/assets/images/projects/flowcore/swagger2-api.png',
        alt: 'FlowCore API reference (Swagger) — additional endpoints',
      },
      {
        src: '/assets/images/projects/flowcore/swagger3-api.png',
        alt: 'FlowCore API reference (Swagger) — additional endpoints',
      },
    ],
    repo: {
      status: 'private',
      label: 'Private Repository — Code available upon request',
    },
  },
  {
    slug: 'grandevet',
    order: 3,
    name: 'GrandeVet',
    category: 'Large Animal Veterinary Clinic Management System',
    featured: true,
    summary:
      'A full-stack veterinary clinic platform that organizes clients, animals, appointments, medical records, prescriptions, and inventory across four staff roles.',
    overview:
      "GrandeVet is a full-stack management platform for a large-animal veterinary clinic, built with ASP.NET Core Web API, Angular, and Microsoft SQL Server. Rather than leaving client records, animal histories, appointments, prescriptions, and medicine inventory scattered across separate tools, it brings all five into one system, with a role-aware dashboard so a client, doctor, receptionist, or inventory manager only sees the parts of the clinic relevant to their work. Appointments, medical records, and prescriptions all read from and write to the same underlying client and animal data, so nothing is entered twice.",
    cover: null,
    userRoles: ['Client', 'Doctor', 'Receptionist', 'Inventory Manager'],
    problem:
      'A large-animal veterinary clinic needs one system to organize clients, animals, appointments, medical information, prescriptions, and medicine inventory across different staff responsibilities, instead of relying on separate, disconnected records.',
    solution:
      "GrandeVet models the clinic around four user roles — client, doctor, receptionist, and inventory manager — each with a role-aware dashboard, and connects appointments, medical records, and prescriptions directly to the clients and animals they belong to.",
    coreCapabilities: [
      'Client & animal management',
      'Appointment scheduling',
      'Medical records & prescriptions',
      'Medicine inventory',
    ],
    businessLogic: [
      'Client and animal records that anchor every appointment, medical record, and prescription, so nothing is entered as a free-standing record',
      'Appointment scheduling and management tied to specific clients, animals, and doctors, so a booking always resolves to who is being seen, which animal, and by whom',
      'Medical record keeping alongside prescription management, keeping a visit and the prescriptions it produced linked together',
      'Medicine inventory tracked as its own module for the inventory manager role, decoupled from — but referenced by — the clinical workflow it supports',
      'Role-aware dashboards so each of the four roles — client, doctor, receptionist, inventory manager — sees only the operations relevant to their responsibilities',
    ],
    architecture:
      "GrandeVet is a modular full-stack application: an ASP.NET Core Web API backend organized around the clinic's core modules — clients & animals, appointments, medical records, prescriptions, and inventory — an Angular frontend with role-aware routing, Entity Framework Core for data access, and a relational SQL Server database underneath.",
    database:
      "Data is stored in Microsoft SQL Server through Entity Framework Core, with relational tables connecting clients, animals, appointments, medical records, prescriptions, and inventory — modeled so an animal's full history can be traced through its appointments and prescriptions without duplicating client or animal data across modules.",
    authentication:
      "GrandeVet uses JWT-based authentication with role-based authorization, and Angular route guards complement — but do not replace — the authorization enforced at the API level.",
    engineeringDecisions: [
      {
        title: 'Endpoint-level authorization for four roles',
        description:
          "Client, doctor, receptionist, and inventory manager permissions are enforced on the API itself, not only through Angular's route guards.",
      },
      {
        title: 'Role-aware UI backed by backend rules',
        description:
          'The Angular interface adapts to each role, but the underlying permissions are decided by the backend so the UI is never the security boundary.',
      },
      {
        title: 'Relational modeling around clinical workflows',
        description:
          'Appointments, medical records, and prescriptions are modeled as related entities connected to clients, animals, and doctors, so the schema mirrors how a clinic visit actually unfolds.',
      },
      {
        title: 'Resource-oriented API design',
        description:
          'Endpoints are organized around the clinic\'s core resources — clients, animals, appointments, prescriptions, inventory — so the API surface stays predictable as new screens are added.',
      },
      {
        title: 'Five modules, one shared data model',
        description:
          'Client management, appointments, medical records, prescriptions, and inventory are built as separate modules that all read from and write to one underlying relational schema, instead of duplicating client or animal data per module.',
      },
    ],
    challenges: [
      'Coordinating different role permissions across four distinct user types',
      'Connecting appointments to clients, animals, and doctors correctly',
      'Managing medical records and prescriptions as related, not isolated, data',
      'Keeping Angular routes and UI role-aware without weakening backend authorization',
      'Enforcing authorization consistently at the API level',
      'Refreshing UI data correctly after operational changes',
    ],
    lessonsLearned: [
      'Frontend guards improve navigation but do not replace backend authorization.',
      'Multi-role applications require clearly separated responsibilities.',
      'Medical workflows require consistent relationships between appointments, animals, prescriptions, and history.',
      'API contracts must remain consistent with the Angular interfaces built on top of them.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Angular',
      'TypeScript',
      'Microsoft SQL Server',
      'JWT Authentication',
      'RESTful APIs',
    ],
    screenshots: [],
    repo: {
      status: 'public',
      url: 'https://github.com/mohammadabualasal1/GrandeVet',
      label: 'View on GitHub',
    },
  },
  {
    slug: 'daily-plus',
    order: 4,
    name: 'Daily Plus',
    category: 'AI-Powered News Aggregation Platform',
    featured: true,
    summary:
      'A full-stack news aggregator that retrieves articles from external sources and uses the Anthropic Claude API to generate concise AI summaries.',
    overview:
      'Daily Plus retrieves news articles from an external news API and uses the Anthropic Claude API to generate concise summaries, giving readers a faster way to see what an article is about before deciding whether to read it in full.',
    cover: {
      src: '/assets/images/projects/daily-plus/dailyplus-home.png',
      alt: 'Daily Plus home feed showing aggregated news articles',
    },
    userRoles: ['Reader', 'Admin'],
    problem:
      'Readers need a faster way to review articles from multiple sources without reading every full article before deciding what is relevant to them.',
    solution:
      'Daily Plus retrieves articles through an external news API, constructs a prompt for each one, and sends it to the Claude API to generate a summary, which is then persisted alongside the original article for the Angular frontend to display.',
    coreCapabilities: [
      'External news integration',
      'Claude AI summarization',
      'Article persistence',
      'Angular reading experience',
    ],
    businessLogic: [
      'Article retrieval from an external news API',
      'Prompt construction and request handling for the Claude API',
      'Response parsing, with error handling and rate-limit handling around the external call',
      'Article persistence together with the generated AI summary',
      'An Angular interface for browsing articles and their summaries',
    ],
    architecture:
      'The backend is an ASP.NET Core Web API that sits between the Angular frontend and two external services — a news API and the Anthropic Claude API — keeping the internal domain model separate from the shape of either external response.',
    database:
      'PostgreSQL, accessed through Entity Framework Core, stores retrieved articles, their source metadata, and the AI-generated summaries associated with them.',
    authentication:
      'The service layer that calls the Claude API and the news API runs entirely on the backend, so API credentials are never exposed in the Angular frontend.',
    engineeringDecisions: [
      {
        title: 'External responses treated as untrusted input',
        description:
          'Both the news API and the Claude API are external services, so their responses are validated and defensively handled before anything is persisted.',
      },
      {
        title: 'Server-side API credentials',
        description:
          'Calls to the Claude API and the news API happen entirely on the backend, so API keys are never exposed to the Angular client.',
      },
      {
        title: 'Separation between external and internal models',
        description:
          "Article and summary data from external services is mapped into the application's own domain model rather than passed through directly.",
      },
      {
        title: 'LLM output treated as non-guaranteed data',
        description:
          'Generated summaries are stored and displayed as AI-assisted content, not treated as verified or guaranteed-accurate information.',
      },
    ],
    challenges: [
      'Working with multiple external API response formats',
      'Constructing prompts consistently for each article',
      "Parsing the Claude API's responses into a usable summary",
      'Handling API failures and rate limits without breaking the reading experience',
      'Protecting API credentials',
      'Keeping external-service failures from affecting the rest of the application',
    ],
    lessonsLearned: [
      'Third-party integrations require defensive error handling.',
      'API credentials must remain server-side.',
      'External responses should be validated before persistence.',
      'LLM output should be treated as external, non-guaranteed data.',
      'Clear service boundaries make integrations easier to maintain.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Anthropic Claude API',
      'External News API',
    ],
    screenshots: [
      {
        src: '/assets/images/projects/daily-plus/dailyplus-home.png',
        alt: 'Daily Plus home feed',
      },
      {
        src: '/assets/images/projects/daily-plus/dailyplus-article-detail.png',
        alt: 'Daily Plus article detail page with AI-generated summary',
      },
      {
        src: '/assets/images/projects/daily-plus/dailyplus-login.png',
        alt: 'Daily Plus login page',
      },
      {
        src: '/assets/images/projects/daily-plus/dailyplus-register.png',
        alt: 'Daily Plus registration page',
      },
      {
        src: '/assets/images/projects/daily-plus/dailyplus-admin.png',
        alt: 'Daily Plus admin panel for managing articles',
      },
      {
        src: '/assets/images/projects/daily-plus/dailyplus-preferences.png',
        alt: 'Daily Plus reader preferences page',
      },
    ],
    repo: {
      status: 'public',
      url: 'https://github.com/mohammadabualasal1/Daily-plus',
      label: 'View on GitHub',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
