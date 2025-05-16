import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatchInfo } from '../interfaces/match/match-info.interface';
import { Observable } from 'rxjs';
import { PlatformWithMatches } from '../interfaces/match/platform-with-matches.interface';
import { MatchWithGame } from '../interfaces/match/match-with-game.interface';

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

  getMatchWithGame(matchId: string): Observable<MatchWithGame> {
    try {
      return this.http.get<MatchWithGame>(`${environment.apiUrl}/match/with-game/${matchId}`);
    } catch (error) {
      throw error;
    }
  }

  getMatchesByPlatformParent(parent: number): Observable<PlatformWithMatches[]> {
    try {
      return this.http.get<PlatformWithMatches[]>(`${environment.apiUrl}/match/get-by`, {params: {
        parent
      }}
    );
    } catch (error) {
      throw error;
    }
  }
  getMatchesByGameSlugAndPlatform(platform: number, game: string): Observable<MatchInfo[]>  {
    try {
      return this.http.get<MatchInfo[]>(`${environment.apiUrl}/match/by-platform-and-game-slug/${platform}/${game}`);
    } catch (error) {
      throw error;
    }
  }

}
