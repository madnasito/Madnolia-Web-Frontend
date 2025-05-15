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
    });
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
}