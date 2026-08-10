import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-nav-link',
  standalone: false,
  templateUrl: './atom-nav-link.component.html',
  styleUrl: './atom-nav-link.component.scss'
})
export class AtomNavLinkComponent {
  @Input() label: string = '';
  @Input() link: string = '';
  @Input() icon: any;
  @Input() ariaLabel: string = '';
  @Input() exact: boolean = false;
}
