import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../../core/services/match.service';
import { PlatformFather } from '../enums/platform-father.enum';
import { PlatformWithMatches } from '../../../core/interfaces/match/platform-with-matches.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-platform',
  standalone: false,
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent {

  private matchService = inject(MatchService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  
  platformWithMatches$!: Observable<PlatformWithMatches[]>
  private parentId: number = 0;

  constructor() {
    const platfornName: string = this.route.snapshot.params['platform-name'];
    switch (platfornName) {
      case PlatformFather.PlayStation:
        this.parentId = 0
        break;
      case PlatformFather.Nintendo:
        this.parentId = 1;
        break;
      case PlatformFather.PC:
        this.parentId = 2
        break;
      case PlatformFather.Xbox:
        this.parentId = 3
        break;
      case PlatformFather.Mobile:
        this.parentId = 4
        break
      default:
        this.router.navigateByUrl('/platforms');
        break;
    }

    this.platformWithMatches$ = this.matchService.getMatchesByPlatformParent(this.parentId);
    
  }

}
