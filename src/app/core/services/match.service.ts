import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatchInfo } from '../interfaces/match/match-info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private http = inject(HttpClient);

  getMatchById(matchId: string): Observable<MatchInfo> {
    try {
      return this.http.get<MatchInfo>(`${environment.apiUrl}/match/info/${matchId}`);
    } catch (error) {
      throw error;
    }
  }
}
