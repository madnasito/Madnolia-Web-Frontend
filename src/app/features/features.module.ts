import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { AtomsModule } from '../shared/atoms/atoms.module';



@NgModule({
  declarations: [PlatformsComponent],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: []
})
export class FeaturesModule { }
