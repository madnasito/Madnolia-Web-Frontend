import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatchPageComponent } from './match-page/match-page.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { AtomsModule } from '../../shared/atoms/atoms.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    AtomsModule
  ],
  declarations: [MatchPageComponent],
})
export class MatchModule { }
