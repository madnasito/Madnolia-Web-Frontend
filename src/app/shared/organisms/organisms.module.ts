import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismHeroSectionComponent } from './organism-hero-section/organism-hero-section.component';
import { OrganismSplitInfoComponent } from './organism-split-info/organism-split-info.component';
import { OrganismFeatureGridComponent } from './organism-feature-grid/organism-feature-grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    OrganismHeroSectionComponent,
    OrganismSplitInfoComponent,
    OrganismFeatureGridComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule,
    RouterModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    OrganismHeroSectionComponent,
    OrganismSplitInfoComponent,
    OrganismFeatureGridComponent
  ]
})
export class OrganismsModule { }
