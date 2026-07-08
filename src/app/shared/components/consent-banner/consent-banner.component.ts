import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

declare let gtag: Function;

@Component({
  selector: 'app-consent-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="showBanner" class="consent-banner bg-dark text-light p-3 position-fixed bottom-0 start-0 w-100 shadow-lg animate__animated animate__fadeInUp" style="z-index: 1050;">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div class="mb-3 mb-md-0 me-md-4">
          <h5 class="mb-1">Aviso de Privacidad y Cookies</h5>
          <p class="mb-0 small text-light text-opacity-75">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios, fines analíticos y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación. 
          </p>
        </div>
        <div class="d-flex gap-2 flex-shrink-0">
          <button class="btn btn-outline-light btn-sm px-4" (click)="deny()">Rechazar</button>
          <button class="btn btn-primary btn-sm px-4" (click)="accept()">Aceptar Todas</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .consent-banner {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  `]
})
export class ConsentBannerComponent implements OnInit {
  showBanner = false;
  private readonly CONSENT_KEY = 'cookie_consent_status';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem(this.CONSENT_KEY);
      if (!consent) {
        // Delaying slightly to allow page load first
        setTimeout(() => {
          this.showBanner = true;
        }, 800);
      } else {
        // Initialize gtag with the saved consent from a previous session
        this.updateConsent(consent as 'granted' | 'denied');
      }
    }
  }

  accept(): void {
    this.updateConsent('granted');
    this.closeBanner('granted');
  }

  deny(): void {
    // Explicitly update to denied
    this.updateConsent('denied');
    this.closeBanner('denied');
  }

  private updateConsent(status: 'granted' | 'denied'): void {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'ad_storage': status,
        'ad_user_data': status,
        'ad_personalization': status,
        'analytics_storage': status
      });
    }
  }

  private closeBanner(status: string): void {
    this.showBanner = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.CONSENT_KEY, status);
    }
  }
}
