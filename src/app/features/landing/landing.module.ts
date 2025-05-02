import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menubar, MenubarModule } from 'primeng/menubar';
import { LandingComponent } from './landing.component';


@NgModule({
  providers: [
    
  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    MenubarModule,
    Menubar
  ]
})
export class LandingModule { }
