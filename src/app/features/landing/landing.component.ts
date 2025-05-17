import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: false
})
export class LandingComponent implements OnInit {
  
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Set page title
    this.titleService.setTitle('Madnolia');

    // Set meta tags
    this.metaService.addTags([
      { name: 'description', content: 'Platform to schedule matches for any retro or modern console. Connect with the global gaming community.' },
      { name: 'keywords', content: 'gaming, scheduled matches, gamers, retro consoles, gaming community' },
      { property: 'og:title', content: 'Madnolia - Connect with Players' },
      { property: 'og:description', content: 'Platform to schedule matches for any console' },
      // { property: 'og:image', content: 'https://madnolia.app/assets/images/og-image.jpg' },
      { property: 'og:url', content: 'https://madnolia.app.com' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}