import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('About Our Game Matchmaking Platform | Connect with Gamers Worldwide');
    
    this.meta.addTags([
      { name: 'description', content: 'Learn about our game matchmaking platform that connects players across all devices. Organize multiplayer matches with ease and never play alone again.' },
      { property: 'og:title', content: 'About Our Game Matchmaking Platform' },
      { property: 'og:description', content: 'Connect with gamers worldwide and organize multiplayer matches seamlessly across all platforms.' },
      { property: 'og:image', content: 'https://yourdomain.com/assets/social-preview.jpg' },
      { property: 'og:url', content: 'https://yourdomain.com/about' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}
