import { Component } from '@angular/core';
import { faUsers, faComments, faVideo, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-matches-info',
  standalone: false,
  templateUrl: './matches-info.component.html',
  styleUrl: './matches-info.component.scss'
})
export class MatchesInfoComponent {
  faUsers = faUsers;
  faComments = faComments;
  faVideo = faVideo;
  faGlobe = faGlobe;
}
