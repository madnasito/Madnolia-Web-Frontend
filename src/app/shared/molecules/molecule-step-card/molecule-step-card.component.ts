import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-step-card',
  standalone: false,
  templateUrl: './molecule-step-card.component.html',
  styleUrl: './molecule-step-card.component.scss'
})
export class MoleculeStepCardComponent {
  @Input() stepNumber: string | number = '';
  @Input() stepColorClass: string = 'bg-primary';
  @Input() icon: any;
  @Input() iconColorClass: string = 'text-primary';
  @Input() title: string = '';
  @Input() description: string = '';
}
