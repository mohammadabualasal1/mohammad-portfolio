import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Mohammad Abu-Alasal — Junior Full-Stack .NET Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/project-detail/project-detail.component').then(
        (m) => m.ProjectDetailComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
