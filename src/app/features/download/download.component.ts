import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  standalone: false,
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Download GameMatch - The Ultimate Gaming Companion | Android App');
    
    this.meta.addTags([
      { name: 'description', content: 'Download GameMatch app to organize multiplayer matches, connect with players across platforms, and never game alone again. Available on Google Play.' },
      { property: 'og:title', content: 'Download GameMatch - The Ultimate Gaming Companion' },
      { property: 'og:description', content: 'Organize matches, connect with players, and never game alone again. Download now on Google Play.' },
      { property: 'og:image', content: 'https://yourdomain.com/assets/social-preview.jpg' },
      { property: 'og:url', content: 'https://yourdomain.com/download' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }
}
