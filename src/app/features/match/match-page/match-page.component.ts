import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { MatchService } from '../../../core/services/match.service';
import { MatchWithGame } from '../../../core/interfaces/match/match-with-game.interface';
import { getPlatformById, PlatformInfo } from '../../../core/utils/get-platform-id-by-slug';
import { SeoService } from '../../../core/services/seo.service';
import { resizeGameImage } from '../../../shared/utils/resize-imate.util';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrl: './match-page.component.scss',
  standalone: false
})
export class MatchPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly matchService = inject(MatchService);
  private readonly seoService = inject(SeoService);

  matchInfo$!: Observable<MatchWithGame>;
  currentPlatform!: PlatformInfo;

  ngOnInit() {
    try {
      this.matchInfo$ = this.route.params.pipe(
        switchMap(params => {
          const matchId = params['id'];
          return this.matchService.getMatchWithGame(matchId).pipe(
            tap(match => {
              this.currentPlatform = getPlatformById(match.platform);
              this.updateMatchSEOMetadata(match);
            })
          );
        })
      );
    } catch (error) {
      console.error(error);
      this.router.navigateByUrl('/');
    }
  }

  private updateMatchSEOMetadata(match: MatchWithGame): void {
    const title = `${match.game.name} Match - ${match.title} | ${this.currentPlatform.name}`;
    const description = `Join this ${match.game.name} match on ${this.currentPlatform.name}. ${match.description || 'Compete with players worldwide.'}`;
    const image = resizeGameImage( match.game.background);

    this.seoService.setSocialMediaTags(title, description, image);
  }
}
