import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../shared/atoms/atoms.module';
import { PlatformsModule } from './platforms/platforms.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    PlatformsModule
  ],
  exports: []
})
export class FeaturesModule { }
