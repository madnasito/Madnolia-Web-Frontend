import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeFeatureCardComponent } from './molecule-feature-card/molecule-feature-card.component';
import { MoleculeStepCardComponent } from './molecule-step-card/molecule-step-card.component';
import { MoleculeDownloadBtnComponent } from './molecule-download-btn/molecule-download-btn.component';
import { MoleculePlatformCardComponent } from './molecule-platform-card/molecule-platform-card.component';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [
    MoleculeFeatureCardComponent,
    MoleculeStepCardComponent,
    MoleculeDownloadBtnComponent,
    MoleculePlatformCardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    MoleculeFeatureCardComponent,
    MoleculeStepCardComponent,
    MoleculeDownloadBtnComponent,
    MoleculePlatformCardComponent
  ]
})
export class MoleculesModule { }
