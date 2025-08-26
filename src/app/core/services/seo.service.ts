
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.updateTitle(data['title']);
      this.updateMetaTags(data['metaTags']);
      this.updateCanonicalUrl(data['canonicalUrl']);
    });
  }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public setMetaTags(metaTags: any[]): void {
    metaTags.forEach(tag => {
      this.metaService.updateTag(tag);
    });
  }

  public setCanonicalUrl(url: string): void {
    const canonicalLink = this.metaService.getTag('rel="canonical"');
    if (url) {
      if (canonicalLink) {
        this.metaService.updateTag({ rel: 'canonical', href: url });
      } else {
        this.metaService.addTag({ rel: 'canonical', href: url });
      }
    } else if (canonicalLink) {
      this.metaService.removeTag('rel="canonical"');
    }
  }

  private updateTitle(title: string): void {
    if (title) {
      this.titleService.setTitle(title);
    }
  }

  private updateMetaTags(metaTags: any[]): void {
    if (metaTags) {
      metaTags.forEach(tag => {
        this.metaService.updateTag(tag);
      });
    }
  }

  private updateCanonicalUrl(url: string): void {
    this.setCanonicalUrl(url);
  }

  public setSocialMediaTags(title: string, description: string, image: string): void {
    const tags = [
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];
    this.setTitle(title);
    this.setMetaTags(tags);
  }
}
