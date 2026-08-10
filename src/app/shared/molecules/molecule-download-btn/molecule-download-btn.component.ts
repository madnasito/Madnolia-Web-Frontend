import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecule-download-btn',
  standalone: false,
  templateUrl: './molecule-download-btn.component.html',
  styleUrl: './molecule-download-btn.component.scss'
})
export class MoleculeDownloadBtnComponent {
  @Input() type: 'store' | 'button' = 'button';
  @Input() url: string = '#';
  
  // Store props
  @Input() imageSrc: string = 'assets/google-play-badge.png';
  @Input() altText: string = 'Get it on Google Play';
  @Input() imgWidth: string | number = '220';

  // Button props
  @Input() text: string = 'Descargar';
  @Input() buttonClass: string = 'btn-primary';
}
