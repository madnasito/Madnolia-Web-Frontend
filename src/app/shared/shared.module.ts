import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from './organisms/organisms.module';



@NgModule({
  declarations: [],
  imports: [
    OrganismsModule,
    CommonModule
  ],
  exports: [OrganismsModule]
})
export class SharedModule { }
