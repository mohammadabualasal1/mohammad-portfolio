import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { FeaturedProjectsComponent } from './sections/featured-projects/featured-projects.component';
import { WhatIBuildComponent } from './sections/what-i-build/what-i-build.component';
import { EngineeringDecisionsComponent } from './sections/engineering-decisions/engineering-decisions.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SkillsComponent } from './sections/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedProjectsComponent,
    WhatIBuildComponent,
    EngineeringDecisionsComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
