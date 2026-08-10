import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ¡IMPORTANTE!
import { RouterModule } from '@angular/router';

import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { PasswordTokenHandlerComponent } from './password-token-handler/password-token-handler.component';
import { ToastsContainer } from "../../shared/atoms/atom-toast-container";
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RecoverPasswordComponent,
    PasswordTokenHandlerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ToastsContainer,
    NgbTooltipModule,
    TranslateModule
]
})
export class AuthModule { }