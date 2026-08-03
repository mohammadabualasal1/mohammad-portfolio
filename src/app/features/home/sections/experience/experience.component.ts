import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from '../../../../core/data/resume.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
}
