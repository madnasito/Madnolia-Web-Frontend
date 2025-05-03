import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  providers: [
    provideHttpClient(
      withFetch()
    )
  ],
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
