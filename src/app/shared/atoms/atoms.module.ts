import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomPlatformComponent } from './atom-platform/atom-platform.component';
import { AtomNavLinkComponent } from './atom-nav-link/atom-nav-link.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtomGlassPanelComponent } from './atom-glass-panel/atom-glass-panel.component';
import { AtomGradientTextComponent } from './atom-gradient-text/atom-gradient-text.component';
import { AtomStepCircleComponent } from './atom-step-circle/atom-step-circle.component';
import { AtomFeatureIconComponent } from './atom-feature-icon/atom-feature-icon.component';


@NgModule({
  declarations: [
    AtomPlatformComponent,
    AtomNavLinkComponent,
    AtomGlassPanelComponent,
    AtomGradientTextComponent,
    AtomStepCircleComponent,
    AtomFeatureIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports:[
    AtomPlatformComponent, 
    AtomNavLinkComponent, 
    AtomGlassPanelComponent, 
    AtomGradientTextComponent, 
    AtomStepCircleComponent, 
    AtomFeatureIconComponent
  ]
})
export class AtomsModule { }
