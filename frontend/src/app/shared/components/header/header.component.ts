import { Component, effect, inject, Renderer2, signal } from '@angular/core';
import { AccountIconComponent } from '../../icons/account-icon/account-icon.component';
import { SunIconComponent } from '../../icons/sun-icon/sun-icon.component';
import { ShoppingIconComponent } from '../../icons/shopping-icon/shopping-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AccountIconComponent,
    SunIconComponent,
    ShoppingIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  darkMode = signal<boolean>(this.initializeDarkMode());
  navigationLinks = signal([
    { path: '/new', label: 'Nouveautés' },
    { path: '/bestsellers', label: 'Meilleures ventes' },
    { path: '/catalog', label: 'Catalogue' },
  ]);
  private readonly themeService = inject(Renderer2);

  constructor() {
    effect(() => {
      this.updateThemeClass(this.darkMode());
    });
  }

  toggleDarkMode(): void {
    this.darkMode.update((current) => !current);
  }

  private initializeDarkMode(): boolean {
    const theme = localStorage.getItem('theme');
    return theme === 'dark';
  }

  private updateThemeClass(isDark: boolean): void {
    if (isDark) {
      this.themeService.addClass(document.documentElement, 'dark-theme');
    } else {
      this.themeService.removeClass(document.documentElement, 'dark-theme');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
