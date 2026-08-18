import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-platform-card',
  standalone: false,
  templateUrl: './molecule-platform-card.component.html',
  styleUrls: ['./molecule-platform-card.component.scss']
})
export class MoleculePlatformCardComponent {
  @Input() imagePath: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
