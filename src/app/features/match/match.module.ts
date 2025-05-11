import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatchPageComponent } from './match-page/match-page.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [],
})
export class MatchModule { }
