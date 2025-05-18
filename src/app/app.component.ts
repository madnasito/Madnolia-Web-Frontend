import { Component, inject, Renderer2, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { SeoService } from './core/services/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeaturesModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'madnolia-web-frontend';
  seoService: SeoService = inject(SeoService);
  translateService: TranslateService = inject(TranslateService);
  private renderer = inject(Renderer2);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.seoService.init();
    this.translateService.langs = ['en', 'es'];
    
    // Set default language based on browser language
    const browserLang = isPlatformBrowser(this.platformId) 
      ? this.translateService.getBrowserLang()
      : 'en';
    const defaultLang = browserLang === 'es' ? 'es' : 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
    
    // Update HTML lang attribute only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.updateHtmlLangAttribute(defaultLang);
    }
  }

  ngOnInit(): void {
    // Listen for language changes
    this.translateService.onLangChange.subscribe((event) => {
      if (isPlatformBrowser(this.platformId)) {
        this.updateHtmlLangAttribute(event.lang);
      }
    });
  }

  private updateHtmlLangAttribute(lang: string): void {
    const htmlElement = document.documentElement;
    this.renderer.setAttribute(htmlElement, 'lang', lang);
  }
}