import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  canActivate(): boolean {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const token = sessionStorage.getItem('p-token');
      if (!token) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    } else {
      // En SSR, redirigir al home o manejar según necesidad
      this.router.navigate(['/']);
      return false;
    }
  }
}