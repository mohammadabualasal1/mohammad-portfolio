import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'wasel',
    order: 1,
    name: 'Wasel',
    category: 'B2B Last-Mile Delivery Management System',
    featured: true,
    summary:
      'A B2B delivery management platform that takes merchant orders from intake through final delivery, with role-based workflows for operations staff, drivers, and administrators.',
    overview:
      'Wasel is a delivery management platform built for merchants who need a structured way to submit delivery orders and follow them through to the final customer. It coordinates merchants, operations staff, drivers, and administrators around a single, shared order record — from intake to completion.',
    cover: {
      src: '/assets/images/projects/wasel/landing-page.png',
      alt: 'Wasel landing page',
    },
    userRoles: ['Merchant', 'Operations / Delivery Staff', 'Driver', 'Administrator'],
    problem:
      'Merchants need a structured system for submitting delivery orders and following each order through the delivery lifecycle until it reaches the final customer, while operations staff and drivers need clear, reliable visibility into status and assignment at every stage.',
    solution:
      'Wasel centralizes merchant order intake, delivery-order management, and role-based operational workflows in a single ASP.NET Core and Angular application backed by PostgreSQL. Merchants submit orders, operations and delivery staff move them through controlled status transitions, and administrators oversee the system as a whole.',
    coreCapabilities: [
      'Merchant order intake',
      'Delivery lifecycle tracking',
      'Role-based access control',
      'Business-rule validation',
    ],
    businessLogic: [
      'Merchant order intake with validation before an order enters the delivery pipeline',
      'Delivery-order creation, assignment, and lifecycle tracking through defined statuses',
      'Controlled status transitions that prevent an order from skipping or reversing workflow stages',
      'Role-based operational workflows for operations staff, drivers, and administrators',
      'Customer delivery information tracked alongside each order, even though final customers do not operate the system directly',
    ],
    architecture:
      'The backend is an ASP.NET Core Web API with a clear separation between controllers, business and validation logic, and data access, paired with an Angular frontend. The focus throughout is on maintainable, predictable request handling rather than a specific named architectural pattern.',
    database:
      'Wasel uses PostgreSQL accessed through Entity Framework Core, with relational entities modeling merchants, delivery orders, delivery information, and the operational relationships between them.',
    authentication:
      'Access is controlled with JWT authentication, and endpoints enforce role-based authorization so that merchants, operations staff, drivers, and administrators can only reach the actions relevant to their role.',
    engineeringDecisions: [
      {
        title: 'Backend-enforced business rules',
        description:
          'Delivery rules that determine whether an order can move forward are validated in the ASP.NET Core API rather than trusted to the Angular forms alone.',
      },
      {
        title: 'Controlled status transitions',
        description:
          'Order-status changes follow a defined set of allowed transitions, which keeps the workflow from reaching an invalid state.',
      },
      {
        title: 'Role-based authorization',
        description:
          'Merchant, operations, driver, and administrator permissions are enforced at the API level, independent of the Angular UI.',
      },
      {
        title: 'Relational data modeling',
        description:
          'Merchants, delivery orders, and delivery information are modeled as related entities so the schema reflects how deliveries actually move through the business.',
      },
    ],
    challenges: [
      'Representing a delivery order consistently across multiple workflow stages',
      'Preventing invalid order updates as more roles and actions were added',
      'Keeping authorization consistent between the Angular client and the ASP.NET Core API',
      'Designing relational entities around real delivery operations rather than individual screens',
      'Keeping backend logic maintainable as the number of modules and roles grew',
    ],
    lessonsLearned: [
      'Large business systems need clear rules defined before implementation begins.',
      'Status-based workflows require careful validation at every transition.',
      'Authorization must exist in the backend even when Angular route protection is already in place.',
      'Entity relationships should reflect business behavior, not just the screens built on top of them.',
      'Maintainability becomes more important, not less, as modules and roles increase.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core',
      'Entity Framework Core',
      'PostgreSQL',
      'JWT Authentication',
      'Angular',
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
    slug: 'grandevet',
    order: 2,
    name: 'GrandeVet',
    category: 'Large Animal Veterinary Clinic Management System',
    featured: false,
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
    slug: 'bloodbridge',
    order: 3,
    name: 'BloodBridge',
    category: 'Blood Donation and Hospital Request Platform',
    featured: false,
    summary:
      'A full-stack platform connecting blood donors with hospitals, matching eligible donors to blood requests and managing the donation-confirmation workflow.',
    overview:
      'BloodBridge connects blood donors with hospitals through a structured request-and-response workflow. Hospitals publish blood requests, the system identifies eligible donors, and administrators verify participating hospitals before they can take part.',
    cover: {
      src: '/assets/images/projects/bloodbridge/bloodbridge-landing.png',
      alt: 'BloodBridge landing page showing the platform name and donation statistics',
    },
    userRoles: ['Admin', 'Hospital', 'Donor'],
    problem:
      'Hospitals need a structured way to publish blood requests and reach eligible donors, while administrators need to verify and manage which hospitals are allowed to participate on the platform.',
    solution:
      'BloodBridge separates the platform into three roles — admin, hospital, and donor — and builds the request, response, and confirmation cycle around donor eligibility, hospital verification, and role-based access control.',
    coreCapabilities: [
      'Donor registration',
      'Hospital verification',
      'Blood request matching',
      'Donation confirmation',
    ],
    businessLogic: [
      'Donor registration and profile management, including the details needed to determine eligibility',
      'Hospital registration, followed by administrator verification before a hospital can publish requests',
      'Blood-request creation and management by verified hospitals',
      'Automated donor-matching and notification workflow based on blood compatibility',
      'Donation tracking through to a confirmation step',
    ],
    architecture:
      'BloodBridge is a full-stack application built with an ASP.NET Core Web API backend, an Angular 17 frontend, and Entity Framework Core over a PostgreSQL database.',
    database:
      'PostgreSQL stores donors, hospitals, blood requests, and donation records, with relationships modeling which donors were matched to which requests and how each donation was confirmed.',
    authentication:
      'Authentication uses JWT with role-based authorization across the admin, hospital, and donor roles, and passwords are hashed with BCrypt.',
    engineeringDecisions: [
      {
        title: 'Compatibility-driven donor matching',
        description:
          'Eligible donors are identified according to blood-type compatibility rules rather than a simple broadcast to every registered donor.',
      },
      {
        title: 'Explicit hospital verification',
        description:
          'A hospital account cannot publish blood requests until an administrator has verified it, keeping that authority with the admin role rather than self-service.',
      },
      {
        title: 'Separated notification workflow',
        description:
          'Donor-matching and notification are treated as a workflow distinct from request creation, keeping the two concerns independent.',
      },
      {
        title: 'Role-based access across three roles',
        description:
          'Admin, hospital, and donor permissions are enforced at the API level so each role can only perform the actions appropriate to it.',
      },
    ],
    challenges: [
      'Designing the blood-request workflow from creation to confirmation',
      'Identifying eligible donors according to compatibility rules',
      'Managing the hospital verification process',
      'Coordinating request, response, and confirmation states without conflicts',
      'Maintaining role-based endpoint access across admin, hospital, and donor roles',
    ],
    lessonsLearned: [
      'Matching logic should be represented clearly and tested carefully.',
      'Verification workflows need explicit state and a clear administrative authority.',
      'Notification workflows should be separated from core request creation.',
      'Role permissions must be enforced in the backend, not assumed from the UI.',
    ],
    techStack: [
      'C#',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'Angular 17',
      'TypeScript',
      'Bootstrap 5',
      'PostgreSQL',
      'JWT Authentication',
      'BCrypt',
      'Swagger',
    ],
    screenshots: [
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-landing.png',
        alt: 'BloodBridge landing page',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-login.png',
        alt: 'BloodBridge login page',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-admin-dashboard.png',
        alt: 'BloodBridge admin dashboard for hospital verification',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-hospital-dashboard.png',
        alt: 'BloodBridge hospital dashboard',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-hospital-blood-requests.png',
        alt: 'Hospital blood request management screen',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-donor-profile.png',
        alt: 'Donor profile completion screen',
      },
      {
        src: '/assets/images/projects/bloodbridge/bloodbridge-donor-dashboard.png',
        alt: 'Donor dashboard',
      },
    ],
    repo: {
      status: 'public',
      url: 'https://github.com/mohammadabualasal1/BloodBridge',
      label: 'View on GitHub',
    },
  },
  {
    slug: 'daily-plus',
    order: 4,
    name: 'Daily Plus',
    category: 'AI-Powered News Aggregation Platform',
    featured: false,
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
