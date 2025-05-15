import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { MatchPageComponent } from './features/match/match-page/match-page.component';
import { PlatformsComponent } from './features/platforms/platforms.component';
import { PlatformComponent } from './features/platforms/platform/platform.component';
import { PlatformGameComponent } from './features/platforms/platform-game/platform-game.component';
import { DownloadComponent } from './features/download/download.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { 
      path: 'match', 
      children: [
        { path: '', redirectTo: '/', pathMatch: 'full' },
        { path: ':id', component: MatchPageComponent }
      ]
    },
    { path: 'platforms', component: PlatformsComponent, children: [
      { path: ':platform-name', component: PlatformComponent}
    ]},
    { path: 'platform/:platform-slug/:game-slug', component: PlatformGameComponent },
    { path: 'download', component: DownloadComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', redirectTo: '' }
  ];