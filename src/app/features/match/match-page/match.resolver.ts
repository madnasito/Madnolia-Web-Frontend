import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatchService } from '../../../core/services/match.service';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../core/services/seo.service';
import { MatchWithGame } from '../../../core/interfaces/match/match-with-game.interface';
import { getPlatformById } from '../../../core/utils/get-platform-id-by-slug';
import { resizeGameImage } from '../../../shared/utils/resize-imate.util';
import { SocialTags } from '../../../core/interfaces/seo/social-tags.interface';

export const matchResolver: ResolveFn<MatchWithGame> = (route: ActivatedRouteSnapshot) => {
  const matchService = inject(MatchService);
  const seoService = inject(SeoService);
  const translate = inject(TranslateService);
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
        const title = translate.instant('SEO.MATCH_PAGE_TITLE', { 
          game: match.game.name, 
          matchTitle: match.title, 
          platform: platform.name 
        });
        const description = translate.instant('SEO.MATCH_PAGE_DESCRIPTION', {
          game: match.game.name,
          platform: platform.name,
          description: match.description || translate.instant('SEO.MATCH_PAGE_DEFAULT_DESCRIPTION')
        });
        const image = resizeGameImage(match.game.background);
        const socialTags: SocialTags = { title, description, image }
        seoService.setSocialMediaTags(socialTags);
      }
    }),
    catchError(() => {
      router.navigate(['/']);
      return EMPTY;
    })
  );
};
