import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../../core/data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly site = SITE;
}
