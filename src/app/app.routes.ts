import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { MatchPageComponent } from './features/match/match-page/match-page.component';
import { PlatformsComponent } from './features/platforms/platforms.component';
import { PlatformComponent } from './features/platforms/platform/platform.component';

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
    ] },
    { path: '**', redirectTo: '' }
  ];