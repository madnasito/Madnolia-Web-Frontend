import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organism-split-info',
  standalone: false,
  templateUrl: './organism-split-info.component.html',
  styleUrl: './organism-split-info.component.scss'
})
export class OrganismSplitInfoComponent {
  @Input() title: string = '';
  @Input() icon?: any;
  @Input() iconColorClass: string = 'text-white';
  @Input() gradientClass: 'text-gradient' | 'text-gradient-lan' | 'text-gradient-platforms' | 'text-gradient-download' | 'text-gradient-matches' = 'text-gradient';
  @Input() reverseLayout: boolean = false;
}
