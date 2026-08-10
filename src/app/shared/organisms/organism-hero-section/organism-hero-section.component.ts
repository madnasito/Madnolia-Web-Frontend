import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organism-hero-section',
  standalone: false,
  templateUrl: './organism-hero-section.component.html',
  styleUrl: './organism-hero-section.component.scss'
})
export class OrganismHeroSectionComponent {
  @Input() title: string = '';
  @Input() highlightedText: string = '';
  @Input() titleSuffix: string = '';
  @Input() subtitle: string = '';
  @Input() gradientClass: 'text-gradient' | 'text-gradient-lan' | 'text-gradient-platforms' | 'text-gradient-download' | 'text-gradient-matches' = 'text-gradient';
}
