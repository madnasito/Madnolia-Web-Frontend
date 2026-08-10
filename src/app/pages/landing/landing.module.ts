import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { OrganismsModule } from '../../shared/organisms/organisms.module';
import { MoleculesModule } from '../../shared/molecules/molecules.module';
import { AtomsModule } from '../../shared/atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FontAwesomeModule,
    RouterModule,
    OrganismsModule,
    MoleculesModule,
    AtomsModule
  ],
  declarations: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }