import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-platforms',
  standalone: false,
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent implements OnInit {
  
  constructor(
    private metaService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setSEO();
    
    // Listen for navigation to child routes to scroll to the games section
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // If we are navigating to a specific platform (e.g., /platforms/pc)
      if (event.urlAfterRedirects && event.urlAfterRedirects !== '/platforms' && event.urlAfterRedirects.startsWith('/platforms')) {
        setTimeout(() => {
          const element = document.getElementById('games-section');
          if (element) {
            // Offset for the fixed navbar
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
      }
    });
  }

  private setSEO(): void {
    // this.titleService.setTitle('Game Platforms | Madnolia - Connect with Gamers');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Browse gaming platforms including PC, Mobile, Nintendo, PlayStation and Xbox. Find players and schedule matches for your favorite games.' 
    });
    
    this.metaService.addTags([
      { name: 'keywords', content: 'gaming platforms, PC, Mobile, Nintendo, PlayStation, Xbox, find players, schedule matches' },
      { property: 'og:title', content: 'Game Platforms | Madnolia' },
      { property: 'og:description', content: 'Connect with players across all major gaming platforms' },
      { property: 'og:image', content: 'https://madnolia.app/public/images/platforms-social.jpg' },
      { property: 'og:url', content: 'https://madnolia.app/platforms' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}