import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../../shared/atoms/atoms.module';
import { MoleculesModule } from '../../shared/molecules/molecules.module';
import { OrganismsModule } from '../../shared/organisms/organisms.module';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ]
})
export class DownloadModule { }
