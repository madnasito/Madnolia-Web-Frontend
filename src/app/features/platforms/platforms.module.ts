import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsComponent } from './platforms.component';
import { PlatformComponent } from './platform/platform.component';
import { AtomsModule } from '../../shared/atoms/atoms.module';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './platforms.routes';



@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    RouterOutlet
  ],
  declarations: [
    PlatformsComponent,
    PlatformComponent
  ],
  providers: [
    provideRouter(routes),
  ]
})
export class PlatformsModule { }
