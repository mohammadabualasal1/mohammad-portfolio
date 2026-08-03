import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getProjectBySlug } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);

  readonly project = signal<Project | undefined>(undefined);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const slug = params.get('slug');
      const found = slug ? getProjectBySlug(slug) : undefined;

      if (!found) {
        this.router.navigate(['/']);
        return;
      }

      this.project.set(found);
      this.titleService.setTitle(`${found.name} — Mohammad Abu-Alasal`);
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
