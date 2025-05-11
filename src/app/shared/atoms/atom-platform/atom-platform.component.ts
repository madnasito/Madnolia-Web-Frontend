import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-platform',
  standalone: false,
  templateUrl: './atom-platform.component.html',
  styleUrl: './atom-platform.component.scss'
})
export class AtomPlatformComponent {
  @Input() iconClass: string = '';
  @Input() size: string = '';
  @Input() link: string | any[] = '/';

  
}
