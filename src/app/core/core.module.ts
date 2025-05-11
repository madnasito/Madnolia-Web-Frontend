import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchService } from './services/match.service';



@NgModule({
  providers: [
    MatchService
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
