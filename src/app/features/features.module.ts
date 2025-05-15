import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../shared/atoms/atoms.module';
import { PlatformsModule } from './platforms/platforms.module';
import { DownloadModule } from './download/download.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    PlatformsModule,
    DownloadModule
  ],
  exports: []
})
export class FeaturesModule { }
