import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faSearch, faTools, faMicrophoneSlash, faCheckCircle, faGamepad, faClock, faNetworkWired, faDownload, faCalendarPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  standalone: false
})
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timezoneVideo') timezoneVideo!: ElementRef<HTMLVideoElement>;
  private observer: IntersectionObserver | undefined;

  faSearch = faSearch;
  faTools = faTools;
  faMicrophoneSlash = faMicrophoneSlash;
  faCheckCircle = faCheckCircle;
  faGamepad = faGamepad;
  faClock = faClock;
  faNetworkWired = faNetworkWired;
  faDownload = faDownload;
  faCalendarPlus = faCalendarPlus;
  faHeadset = faHeadset;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    console.log('[DEBUG] ngAfterViewInit, timezoneVideo:', this.timezoneVideo);
    if (isPlatformBrowser(this.platformId) && this.timezoneVideo) {
      console.log('[DEBUG] Setting up IntersectionObserver');
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          console.log('[DEBUG] Video intersection ratio:', entry.intersectionRatio, 'isIntersecting:', entry.isIntersecting);
          if (entry.isIntersecting) {
            console.log('[DEBUG] Attempting to play video...');
            this.timezoneVideo.nativeElement.play().then(() => {
              console.log('[DEBUG] Video playing successfully.');
            }).catch(e => {
              console.warn('[DEBUG] Video play blocked by browser:', e);
            });
          } else {
            console.log('[DEBUG] Pausing video...');
            this.timezoneVideo.nativeElement.pause();
          }
        });
      }, { threshold: 0.25 });
      
      this.observer.observe(this.timezoneVideo.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
