import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeFeatureCardComponent } from './molecule-feature-card/molecule-feature-card.component';
import { MoleculeStepCardComponent } from './molecule-step-card/molecule-step-card.component';
import { MoleculeDownloadBtnComponent } from './molecule-download-btn/molecule-download-btn.component';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [
    MoleculeFeatureCardComponent,
    MoleculeStepCardComponent,
    MoleculeDownloadBtnComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    MoleculeFeatureCardComponent,
    MoleculeStepCardComponent,
    MoleculeDownloadBtnComponent
  ]
})
export class MoleculesModule { }
