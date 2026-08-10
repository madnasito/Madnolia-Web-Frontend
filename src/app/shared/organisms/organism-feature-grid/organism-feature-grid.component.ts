import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organism-feature-grid',
  standalone: false,
  templateUrl: './organism-feature-grid.component.html',
  styleUrl: './organism-feature-grid.component.scss'
})
export class OrganismFeatureGridComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() gradientClass: 'text-gradient' | 'text-gradient-lan' | 'text-gradient-platforms' | 'text-gradient-download' | 'text-gradient-matches' = 'text-gradient';
}
