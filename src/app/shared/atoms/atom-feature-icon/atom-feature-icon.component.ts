import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-feature-icon',
  standalone: false,
  templateUrl: './atom-feature-icon.component.html',
  styleUrl: './atom-feature-icon.component.scss'
})
export class AtomFeatureIconComponent {
  @Input() icon: any;
  @Input() colorClass: string = 'text-primary';
  @Input() sizeClass: string = 'fs-1';
  @Input() additionalClasses: string = '';
}
