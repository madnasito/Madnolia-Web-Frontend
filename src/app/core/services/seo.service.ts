
import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SocialTags } from '../interfaces/seo/social-tags.interface';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);
  private rendererFactory = inject(RendererFactory2);
  private renderer: Renderer2;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data.pipe(
        map(data => ({ data, snapshot: route.snapshot }))
      ))
    ).subscribe(({ data, snapshot }) => {
      this.setJsonLd(null);
      if(data['social']){
        const payload: SocialTags = data['social'];
        const title = this.translate.instant(payload.title);
        const description = this.translate.instant(payload.description);
        const image = payload.image;
        const socialData: SocialTags = { title, description, image }
        this.setSocialMediaTags(socialData);
      }
      const metaTagsPayload = data['metaTags'] || [];
      metaTagsPayload.forEach((metaTag: any) => {
        const content = this.translate.instant(metaTag.content);
        metaTag.content = content;
      });
      
      const title = typeof data['title'] === 'function' ? data['title'](snapshot) : data['title'];
      const canonicalUrl = typeof data['canonicalUrl'] === 'function' ? data['canonicalUrl'](snapshot) : data['canonicalUrl'];

      this.updateTitle(title);
      this.updateMetaTags(metaTagsPayload);
      this.updateCanonicalUrl(canonicalUrl);
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
    let canonicalLink = this.document.querySelector('link[rel="canonical"]');
    if (url) {
      if (canonicalLink) {
        this.renderer.setAttribute(canonicalLink, 'href', url);
      } else {
        canonicalLink = this.renderer.createElement('link');
        this.renderer.setAttribute(canonicalLink, 'rel', 'canonical');
        this.renderer.setAttribute(canonicalLink, 'href', url);
        this.renderer.appendChild(this.document.head, canonicalLink);
      }
    } else if (canonicalLink) {
      this.renderer.removeChild(this.document.head, canonicalLink);
    }
  }

  private updateTitle(title: string): void {
    if (title) {
      this.translate.get(title).subscribe((res: string) => this.titleService.setTitle(res));
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

  public setSocialMediaTags(payload: SocialTags): void {
    const tags = [
      { name: 'description', content: payload.description },
      { property: 'og:title', content: payload.title },
      { property: 'og:description', content: payload.description },
      { property: 'og:image', content: payload.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: payload.title },
      { name: 'twitter:description', content: payload.description },
      { name: 'twitter:image', content: payload.image },
    ];
    this.updateMetaTags(tags);
  }

  public setJsonLd(data: any): void {
    let script = this.document.querySelector('script[type="application/ld+json"]');
    if (data) {
      if (script) {
        this.renderer.setProperty(script, 'text', JSON.stringify(data));
      } else {
        script = this.renderer.createElement('script');
        this.renderer.setAttribute(script, 'type', 'application/ld+json');
        this.renderer.setProperty(script, 'text', JSON.stringify(data));
        this.renderer.appendChild(this.document.head, script);
      }
    } else if (script) {
      this.renderer.removeChild(this.document.head, script);
    }
  }
}
