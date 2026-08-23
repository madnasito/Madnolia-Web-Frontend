import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../shared/atoms/atoms.module';
import { MoleculesModule } from '../shared/molecules/molecules.module';
import { OrganismsModule } from '../shared/organisms/organisms.module';
import { PlatformsModule } from './platforms/platforms.module';
import { DownloadModule } from './download/download.module';
import { LandingModule } from './landing/landing.module';
import { MatchModule } from './match/match.module';
import { ChildSafetyComponent } from './child-safety/child-safety.component';
import { AuthModule } from './auth/auth.module';
import { MatchesInfoComponent } from './matches-info/matches-info.component';
import { LanPartyComponent } from './lan-party/lan-party.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MatchesInfoComponent,
    LanPartyComponent
  ],
  imports: [
    CommonModule,
    LandingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    PlatformsModule,
    DownloadModule,
    MatchModule,
    ChildSafetyComponent,
    AuthModule,
    FontAwesomeModule,
    RouterModule,
    TranslateModule
  ],
  exports: []
})
export class PagesModule { }
