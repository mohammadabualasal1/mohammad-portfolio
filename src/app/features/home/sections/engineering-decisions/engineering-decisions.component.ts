import { Component } from '@angular/core';
import { ENGINEERING_DECISIONS } from '../../../../core/data/engineering-decisions.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-engineering-decisions',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './engineering-decisions.component.html',
  styleUrl: './engineering-decisions.component.scss',
})
export class EngineeringDecisionsComponent {
  readonly decisions = ENGINEERING_DECISIONS;

  index(i: number): string {
    const n = i + 1;
    return n < 10 ? `0${n}` : `${n}`;
  }
}
