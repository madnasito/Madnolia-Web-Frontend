import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../shared/atoms/atoms.module';
import { PlatformsModule } from './platforms/platforms.module';
import { DownloadModule } from './download/download.module';
import { LandingModule } from './landing/landing.module';
import { MatchModule } from './match/match.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingModule,
    AtomsModule,
    PlatformsModule,
    DownloadModule,
    MatchModule
  ],
  exports: []
})
export class FeaturesModule { }
