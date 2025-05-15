import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Game } from '../interfaces/game/game.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private http = inject(HttpClient);

  getGameBySlug(slug: string): Observable<Game> {
    try {
      return this.http.get<Game>(`${environment.apiUrl}/games/${slug}`)
    } catch (error) {
      throw error;
    }
  }
}
