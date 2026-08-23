import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { faNetworkWired, faPlayCircle, faDesktop, faGamepad, faToggleOn, faImage, faCheckCircle, faWifi, faShareAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Hls from 'hls.js';

@Component({
  selector: 'app-lan-party',
  standalone: false,
  templateUrl: './lan-party.component.html',
  styleUrl: './lan-party.component.scss'
})
export class LanPartyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('lanGamesVideo') lanGamesVideo!: ElementRef<HTMLVideoElement>;
  private hls: Hls | null = null;

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

  ngAfterViewInit() {
    if (this.lanGamesVideo) {
      const video = this.lanGamesVideo.nativeElement;
      const videoSrc = 'public/media/lan_games_hls/master.m3u8';

      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(videoSrc);
        this.hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support for Safari
        video.src = videoSrc;
      }
    }
  }

  ngOnDestroy() {
    if (this.hls) {
      this.hls.destroy();
    }
  }
}
