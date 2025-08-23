import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslatePipe,
    TranslateDirective
  ],
  exports: [NavbarComponent]
})
export class OrganismsModule { }
