import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
  private titleService = inject(Title);
  private metaService = inject(Meta);
  
  platformWithMatches$!: Observable<PlatformWithMatches[]>;
  private parentId: number = 0;
  currentPlatformName!: string;

  ngOnInit() {
    this.platformWithMatches$ = this.route.params.pipe(
      switchMap(params => {
        const platformName: string = params['platform-name'];
        this.currentPlatformName = this.formatPlatformName(platformName);
        this.setParentId(platformName);
        this.setPlatformSEOMetadata(this.currentPlatformName);
        return this.matchService.getMatchesByPlatformParent(this.parentId);
      })
    );
  }

  private setPlatformSEOMetadata(platformName: string): void {
    const title = `${platformName} Games - Find Players & Matches | Madnolia`;
    const description = `Find and join ${platformName} gaming matches or create your own. Connect with players for ${platformName} games.`;

    this.titleService.setTitle(title);
    
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    // this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  private formatPlatformName(platformName: string): string {
    return platformName.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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