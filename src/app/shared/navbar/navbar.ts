import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit, AfterViewInit {
  menuOpen = false;
  scrolled = false;
  private currentUrl = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUrl = this.router.url;
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentUrl = event.urlAfterRedirects;
        this.updateScrolledState();
      });
    this.updateScrolledState();
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateScrolledState());
    setTimeout(() => this.updateScrolledState(), 250);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateScrolledState();
  }

  @HostListener('window:hashchange')
  onHashChange() {
    this.updateScrolledState();
  }

  private updateScrolledState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const hasSectionHash =
      (!!window.location.hash && window.location.hash !== '#top') ||
      (this.currentUrl.includes('#') && !this.currentUrl.endsWith('#top'));
    const isSubPage = !!this.currentUrl && this.currentUrl !== '/' && !this.currentUrl.startsWith('/#');

    this.scrolled = scrollTop > 40 || hasSectionHash || isSubPage;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
