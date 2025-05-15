import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { getPlatformIdBySlug, PlatformInfo } from '../utils/get-platform-id-by-slug';
import { MatchService } from '../../../core/services/match.service';
import { MatchInfo } from '../../../core/interfaces/match/match-info.interface';
import { Game } from '../../../core/interfaces/game/game.interface';
import { GamesService } from '../../../core/services/games.service';

@Component({
  selector: 'app-platform-game',
  standalone: false,
  templateUrl: './platform-game.component.html',
  styleUrl: './platform-game.component.scss'
})
export class PlatformGameComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly matchService = inject(MatchService);
  private readonly gamesService = inject(GamesService);

  matches$!: Observable<MatchInfo[]>;
  game$!: Observable<Game>;
  platform!:PlatformInfo;

  // matches = [
  //   {
  //     id: 1,
  //     gameName: 'Cyberpunk 2077',
  //     gameImage: 'https://via.placeholder.com/30',
  //     matchType: '1v1 Tournament',
  //     date: new Date('2023-06-15'),
  //     platformName: 'PlayStation 5',
  //     platformSlug: 'playstation'
  //   },
  //   {
  //     id: 2,
  //     gameName: 'Halo Infinite',
  //     gameImage: 'https://via.placeholder.com/30',
  //     matchType: 'Team Deathmatch',
  //     date: new Date('2023-06-18'),
  //     platformName: 'Xbox Series X',
  //     platformSlug: 'xbox'
  //   },
  //   {
  //     id: 3,
  //     gameName: 'Valorant',
  //     gameImage: 'https://via.placeholder.com/30',
  //     matchType: 'Competitive',
  //     date: new Date('2023-06-20'),
  //     platformName: 'PC',
  //     platformSlug: 'pc'
  //   }
  // ];
  ngOnInit() {
    try {
      this.game$ = this.route.params.pipe(
        switchMap(params => {
          const game = params['game-slug'];
          
          return this.gamesService.getGameBySlug(game);
        })
      )
      this.matches$ = this.route.params.pipe(
        switchMap(params => {
          const platform: string = params['platform-slug'];
          const game: string = params['game-slug'];
          this.platform = getPlatformIdBySlug(platform);
          return this.matchService.getMatchesByGameSlugAndPlatform(this.platform.id, game);
        })
      );
    } catch (error) {
      this.router.navigateByUrl('/platforms');
    }
    }
}
