import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatchService } from '../../../core/services/match.service';
import { SeoService } from '../../../core/services/seo.service';
import { MatchWithGame } from '../../../core/interfaces/match/match-with-game.interface';
import { getPlatformById } from '../../../core/utils/get-platform-id-by-slug';
import { resizeGameImage } from '../../../shared/utils/resize-imate.util';

export const matchResolver: ResolveFn<MatchWithGame> = (route: ActivatedRouteSnapshot) => {
  const matchService = inject(MatchService);
  const seoService = inject(SeoService);
  const router = inject(Router);
  const matchId = route.paramMap.get('id');

  if (!matchId) {
    router.navigate(['/']);
    return EMPTY;
  }

  return matchService.getMatchWithGame(matchId).pipe(
    tap(match => {
      if (match) {
        const platform = getPlatformById(match.platform);
        const title = `${match.game.name} Match - ${match.title} | ${platform.name}`;
        const description = `Join this ${match.game.name} match on ${platform.name}. ${match.description || 'Compete with players worldwide.'}`;
        const image = resizeGameImage(match.game.background);
        seoService.setSocialMediaTags(title, description, image);
      }
    }),
    catchError(() => {
      router.navigate(['/']);
      return EMPTY;
    })
  );
};
