import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../../core/data/site.data';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly site = SITE;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'Home', fragment: 'top' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Skills', fragment: 'skills' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
