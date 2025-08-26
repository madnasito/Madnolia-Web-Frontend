import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatchWithGame } from '../../../core/interfaces/match/match-with-game.interface';
import { getPlatformById, PlatformInfo } from '../../../core/utils/get-platform-id-by-slug';

@Component({
  selector: 'app-match-page',
  templateUrl: './match-page.component.html',
  styleUrl: './match-page.component.scss',
  standalone: false
})
export class MatchPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  matchInfo$!: Observable<MatchWithGame>;
  currentPlatform!: PlatformInfo;

  ngOnInit() {
    this.matchInfo$ = this.route.data.pipe(
      map(data => data['match']),
      tap(match => {
        if (match) {
          this.currentPlatform = getPlatformById(match.platform);
        }
      })
    );
  }
}
