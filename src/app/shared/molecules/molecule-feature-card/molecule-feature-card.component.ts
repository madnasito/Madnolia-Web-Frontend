import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-feature-card',
  standalone: false,
  templateUrl: './molecule-feature-card.component.html',
  styleUrl: './molecule-feature-card.component.scss'
})
export class MoleculeFeatureCardComponent {
  @Input() icon: any;
  @Input() iconColorClass: string = 'text-primary';
  @Input() title: string = '';
  @Input() description: string = '';
}
