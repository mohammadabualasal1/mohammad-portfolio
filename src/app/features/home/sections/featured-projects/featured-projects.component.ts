import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../../../core/data/projects.data';
import { Project } from '../../../../core/models/project.model';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.scss',
})
export class FeaturedProjectsComponent {
  readonly projects: Project[] = [...PROJECTS].sort((a, b) => a.order - b.order);

  index(order: number): string {
    return order < 10 ? `0${order}` : `${order}`;
  }

  repoStatus(project: Project): string {
    return project.repo.status === 'private' ? 'Private Repository' : 'Public Repository';
  }
}
