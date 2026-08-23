import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { faDesktop, faMobileScreen, faWifi, faHeadset, faGamepad, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download',
  standalone: false,
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent implements OnInit {
  faDesktop = faDesktop;
  faMobileScreen = faMobileScreen;
  faWifi = faWifi;
  faHeadset = faHeadset;
  faGamepad = faGamepad;
  faDownload = faDownload;

  detectedOS: 'windows' | 'linux' | 'other' = 'windows'; // Por defecto Windows

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (userAgent.includes('linux') && !userAgent.includes('android')) {
        this.detectedOS = 'linux';
      } else if (userAgent.includes('win')) {
        this.detectedOS = 'windows';
      }
    }
  }
}
