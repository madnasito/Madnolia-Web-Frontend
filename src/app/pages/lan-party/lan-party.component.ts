import { Component } from '@angular/core';
import { faNetworkWired, faPlayCircle, faDesktop, faGamepad, faToggleOn, faImage, faCheckCircle, faWifi, faShareAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lan-party',
  standalone: false,
  templateUrl: './lan-party.component.html',
  styleUrl: './lan-party.component.scss'
})
export class LanPartyComponent {
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
}
