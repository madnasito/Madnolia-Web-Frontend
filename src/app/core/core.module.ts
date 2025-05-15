import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchService } from './services/match.service';
import { GamesService } from './services/games.service';



@NgModule({
  providers: [
    MatchService,
    GamesService
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
