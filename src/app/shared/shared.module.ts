import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from './organisms/organisms.module';
import { TranslateDirective, TranslateModule, TranslatePipe } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    OrganismsModule,
    CommonModule,
    TranslatePipe,
    TranslateDirective
  ],
  exports: [OrganismsModule, TranslateModule]
})
export class SharedModule { }
