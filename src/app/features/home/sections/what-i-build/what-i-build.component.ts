import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CAPABILITIES } from '../../../../core/data/what-i-build.data';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-what-i-build',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './what-i-build.component.html',
  styleUrl: './what-i-build.component.scss',
})
export class WhatIBuildComponent {
  readonly capabilities = CAPABILITIES;
}
