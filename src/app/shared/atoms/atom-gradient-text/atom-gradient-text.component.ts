import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-gradient-text',
  standalone: false,
  templateUrl: './atom-gradient-text.component.html',
  styleUrl: './atom-gradient-text.component.scss'
})
export class AtomGradientTextComponent {
  @Input() tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' = 'h2';
  @Input() text: string = '';
  @Input() gradientClass: 'text-gradient' | 'text-gradient-lan' | 'text-gradient-platforms' | 'text-gradient-download' | 'text-gradient-matches' = 'text-gradient';
  @Input() additionalClasses: string = '';
}
