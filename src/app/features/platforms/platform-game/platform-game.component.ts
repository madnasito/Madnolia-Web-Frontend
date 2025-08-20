import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { getPlatformIdBySlug, PlatformInfo } from '../../../core/utils/get-platform-id-by-slug';
import { MatchService } from '../../../core/services/match.service';
import { MatchInfo } from '../../../core/interfaces/match/match-info.interface';
import { Game } from '../../../core/interfaces/game/game.interface';
import { GamesService } from '../../../core/services/games.service';
import { resizeGameImage } from '../../../shared/utils/resize-imate.util';

@Component({
  selector: 'app-platform-game',
  standalone: false,
  templateUrl: './platform-game.component.html',
  styleUrl: './platform-game.component.scss'
})
export class PlatformGameComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly matchService = inject(MatchService);
  private readonly gamesService = inject(GamesService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  matches$!: Observable<MatchInfo[]>;
  game$!: Observable<Game>;
  platform!: PlatformInfo;
  currentGameName: string = '';
  currentPlatformName: string = '';
  imageUrl: string = '';

  ngOnInit() {
  try {
    this.game$ = this.route.params.pipe(
      switchMap(params => {
        const gameSlug = params['game-slug'];
        return this.gamesService.getGameBySlug(gameSlug).pipe(
          tap(game => {
            this.currentGameName = this.formatName(game.name);
            this.imageUrl = game.background || this.getGameImageUrl();
            this.updateGameSEOMetadata();
          })
        );
      })
    );

    this.matches$ = this.route.params.pipe(
      switchMap(params => {
        const platformSlug = params['platform-slug'];
        const gameSlug = params['game-slug'];
        this.platform = getPlatformIdBySlug(platformSlug);
        this.currentPlatformName = this.formatName(platformSlug);
        return this.matchService.getMatchesByGameSlugAndPlatform(this.platform.id, gameSlug).pipe(
          tap(matches => {
            this.game$.subscribe(game => {
              this.generateGameSchema(game, matches);
            });
          })
        );
      })
    );
  } catch (error) {
    this.router.navigateByUrl('/platforms');
  }
}

  private updateGameSEOMetadata(): void {
    const title = `${this.currentGameName} Matches for ${this.currentPlatformName} | Madnolia`;
    const description = `Find and join ${this.currentGameName} matches on ${this.currentPlatformName}. Schedule games, connect with players, and compete.`;

    this.titleService.setTitle(title);
    
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: this.getGameImageUrl() });
    // this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  private formatName(slug: string): string {
    return slug.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private getGameImageUrl(): string {
    // Implement logic to get proper game image URL
    return 'https://madnolia.app/public/images/game-default-social.jpg';
  }

  private generateGameSchema(game: Game, matches: MatchInfo[]): void {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.name,
    "description": `Play ${game.name} on ${this.currentPlatformName} with other players`,
    "image": game.background,
    "gamePlatform": this.currentPlatformName,
    "playMode": "Multiplayer",
    "gameLocation": matches.map(match => ({
      "@type": "Event",
      "name": match.title,
      "startDate": match.date,
      "url": `${window.location.origin}/match/${match._id}`
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

}