import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platforms',
  standalone: false,
  templateUrl: './platforms.component.html',
  styleUrl: './platforms.component.scss'
})
export class PlatformsComponent implements OnInit {
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setSEO();
  }

  private setSEO(): void {
    this.titleService.setTitle('Game Platforms | Madnolia - Connect with Gamers');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Browse gaming platforms including Nintendo, PlayStation and Xbox. Find players and schedule matches for your favorite games.' 
    });
    
    this.metaService.addTags([
      { name: 'keywords', content: 'gaming platforms, Nintendo, PlayStation, Xbox, find players, schedule matches' },
      { property: 'og:title', content: 'Game Platforms | Madnolia' },
      { property: 'og:description', content: 'Connect with players across all major gaming platforms' },
      { property: 'og:image', content: 'https://madnolia.app/public/images/platforms-social.jpg' },
      { property: 'og:url', content: 'https://madnolia.app/platforms' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}