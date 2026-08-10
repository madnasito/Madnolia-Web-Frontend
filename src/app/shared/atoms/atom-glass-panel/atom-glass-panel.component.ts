import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-glass-panel',
  standalone: false,
  templateUrl: './atom-glass-panel.component.html',
  styleUrl: './atom-glass-panel.component.scss'
})
export class AtomGlassPanelComponent {
  @Input() additionalClasses: string = '';
}
