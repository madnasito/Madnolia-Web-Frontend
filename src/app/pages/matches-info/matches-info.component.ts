import { Component } from '@angular/core';
import { faSearch, faComments, faBolt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-matches-info',
  standalone: false,
  templateUrl: './matches-info.component.html',
  styleUrl: './matches-info.component.scss'
})
export class MatchesInfoComponent {
  faSearch = faSearch;
  faComments = faComments;
  faBolt = faBolt;
}
