
import { inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SocialTags } from '../interfaces/seo/social-tags.interface';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private translate = inject(TranslateService);
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
      if(data['social']){
        const payload: SocialTags = data['social'];
        // let title: string;
        // let description: string;
        // this.translate.get(payload.title).subscribe((res: string) => title = res);
        // this.translate.get(payload.description).subscribe((res: string) => description = res);
        const title = this.translate.instant(payload.title);
        const description = this.translate.instant(payload.description);
        const image = payload.image;
        const socialData: SocialTags = { title, description, image }
        this.setSocialMediaTags(socialData);
      }
      const metaTagsPayload = data['metaTags'];
      metaTagsPayload.forEach((metaTag: any) => {
        const content = this.translate.instant(metaTag.content);
        metaTag.content = content;
      });
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
      this.translate.get(title).subscribe((res: string) => this.titleService.setTitle(res));
      // this.titleService.setTitle(title);
    }
  }

  private updateMetaTags(metaTags: any[]): void {
    if (metaTags) {
      metaTags.forEach(tag => {
        this.metaService.updateTag(tag);
      });
    }
    console.log(metaTags)
    this.setMetaTags(metaTags);
  }

  private updateCanonicalUrl(url: string): void {
    this.setCanonicalUrl(url);
  }

  public setSocialMediaTags(payload: SocialTags): void {
    const tags = [
      { name: 'og:title', content: payload.title },
      { name: 'og:description', content: payload.description },
      { name: 'og:image', content: payload.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: payload.title },
      { name: 'twitter:description', content: payload.description },
      { name: 'twitter:image', content: payload.image },
    ];
    // this.updateMetaTags(tags);
    this.setMetaTags(tags);
  }
}
