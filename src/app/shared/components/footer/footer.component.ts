import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../core/data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
