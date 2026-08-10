import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-step-circle',
  standalone: false,
  templateUrl: './atom-step-circle.component.html',
  styleUrl: './atom-step-circle.component.scss'
})
export class AtomStepCircleComponent {
  @Input() number: string | number = '';
  @Input() colorClass: string = 'bg-primary';
}
