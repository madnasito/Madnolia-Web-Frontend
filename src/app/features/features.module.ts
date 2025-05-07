import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { PlatformsComponent } from './platforms/platforms.component';



@NgModule({
  declarations: [PlatformsComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class FeaturesModule { }
