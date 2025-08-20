import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-token-handler',
  standalone: false,
  templateUrl: './password-token-handler.component.html',
  styleUrl: './password-token-handler.component.scss'
})
export class PasswordTokenHandlerComponent implements OnInit{
   constructor(private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecutar en el navegador
      this.handleToken();
    } else {
      // En SSR, redirigir directamente
      this.router.navigate(['/']);
    }
  }


  private handleToken(): void {
    const token = this.route.snapshot.paramMap.get('token');
    
    if (token) {
      // Guarda el token en sessionStorage solo en el navegador
      sessionStorage.setItem('p-token', token);
      this.router.navigate(['/auth/recover-password']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
