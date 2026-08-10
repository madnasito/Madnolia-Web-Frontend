import { Component } from '@angular/core';
import { faGamepad, faUsers, faNetworkWired, faLaptopCode, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faGamepad = faGamepad;
  faUsers = faUsers;
  faNetworkWired = faNetworkWired;
  faLaptopCode = faLaptopCode;
  faDownload = faDownload;
}
