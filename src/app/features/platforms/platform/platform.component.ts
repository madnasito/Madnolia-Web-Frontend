import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../../core/services/match.service';
import { PlatformFather } from '../enums/platform-father.enum';
import { PlatformWithMatches } from '../../../core/interfaces/match/platform-with-matches.interface';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-platform',
  standalone: false,
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent implements OnInit {
  private matchService = inject(MatchService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  
  platformWithMatches$!: Observable<PlatformWithMatches[]>;
  private parentId: number = 0;

  ngOnInit() {
    this.platformWithMatches$ = this.route.params.pipe(
      switchMap(params => {
        const platformName: string = params['platform-name'];
        this.setParentId(platformName);
        return this.matchService.getMatchesByPlatformParent(this.parentId);
      })
    );
  }

  private setParentId(platformName: string): void {
    switch (platformName) {
      case PlatformFather.PlayStation:
        this.parentId = 0;
        break;
      case PlatformFather.Nintendo:
        this.parentId = 1;
        break;
      case PlatformFather.PC:
        this.parentId = 2;
        break;
      case PlatformFather.Xbox:
        this.parentId = 3;
        break;
      case PlatformFather.Mobile:
        this.parentId = 4;
        break;
      default:
        this.router.navigateByUrl('/platforms');
        break;
    }
  }
}