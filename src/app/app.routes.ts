import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { MatchPageComponent } from './features/match/match-page/match-page.component';
import { PlatformsComponent } from './features/platforms/platforms.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'match', component: MatchPageComponent},
    { path: 'platforms', component: PlatformsComponent}
];
