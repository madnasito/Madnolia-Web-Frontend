import { Component } from '@angular/core';
import { faDesktop, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-download',
  standalone: false,
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {
  faDesktop = faDesktop;
  faMobileScreen = faMobileScreen;

  constructor() {}

  ngOnInit() {
  }
}
