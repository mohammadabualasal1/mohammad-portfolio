import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../../core/data/skills.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
