import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    LandingComponent // Add your component to declarations
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }