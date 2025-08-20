import { inject, Injectable } from '@angular/core';
import { RecoverPasswordDto } from '../interfaces/auth/recover-password.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private baseUrl = `${environment.apiUrl}/auth`;

  // En el AuthService
  updatePassword(payload: RecoverPasswordDto) {

    const token = sessionStorage.getItem('p-token');
    
    if (!token) {
      return throwError(() => new Error('No authentication token found'));
    }

    return this.http.patch(
      `${this.baseUrl}/update-password`,
      payload,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).pipe(
      catchError((error) => {
        console.error('API Error:', error);
        return throwError(() => error);
      })
    );
  }
}
