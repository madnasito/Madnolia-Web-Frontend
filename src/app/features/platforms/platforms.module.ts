import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsComponent } from './platforms.component';
import { PlatformComponent } from './platform/platform.component';
import { AtomsModule } from '../../shared/atoms/atoms.module';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './platforms.routes';
import { PlatformGameComponent } from './platform-game/platform-game.component';
import { AboutModule } from '../about/about.module';
import { TranslateDirective, TranslateModule, TranslatePipe } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    RouterOutlet,
    RouterModule,
    AboutModule,
    TranslateModule,
    TranslatePipe, 
    TranslateDirective
  ],
  declarations: [
    PlatformsComponent,
    PlatformComponent,
    PlatformGameComponent
  ],
  providers: [
    provideRouter(routes),
  ]
})
export class PlatformsModule { }
