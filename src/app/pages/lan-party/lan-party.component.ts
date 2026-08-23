import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faNetworkWired, faPlayCircle, faDesktop, faGamepad, faToggleOn, faImage, faCheckCircle, faWifi, faShareAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lan-party',
  standalone: false,
  templateUrl: './lan-party.component.html',
  styleUrl: './lan-party.component.scss'
})
export class LanPartyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lanGamesVideo') lanGamesVideo!: ElementRef<HTMLVideoElement>;
  private hls: any = null; // Usar any porque lo importaremos dinámicamente

  faNetworkWired = faNetworkWired;
  faPlayCircle = faPlayCircle;
  faDesktop = faDesktop;
  faGamepad = faGamepad;
  faToggleOn = faToggleOn;
  faImage = faImage;
  faCheckCircle = faCheckCircle;
  faWifi = faWifi;
  faShareAlt = faShareAlt;
  faArrowRight = faArrowRight;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.lanGamesVideo) {
      const video = this.lanGamesVideo.nativeElement;
      const videoSrc = 'public/media/lan_games_hls/master.m3u8';

      // Primero chequear soporte nativo (Safari)
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.play().catch(() => {});
      } else {
        // Importación dinámica de hls.js para no saturar el bundle principal
        const Hls = (await import('hls.js')).default;
        
        if (Hls.isSupported()) {
          this.hls = new Hls();
          this.hls.loadSource(videoSrc);
          this.hls.attachMedia(video);
          
          this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(e => console.log('Autoplay prevented:', e));
          });
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.hls) {
      this.hls.destroy();
    }
  }
}
