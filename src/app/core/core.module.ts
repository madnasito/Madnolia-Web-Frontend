import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MatchService } from './services/match.service';



@NgModule({
  providers: [
    provideHttpClient(
      withFetch()
    ),
    MatchService
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
