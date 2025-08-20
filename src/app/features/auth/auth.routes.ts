import { Routes } from "@angular/router";
import { RecoverPasswordComponent } from "./recover-password/recover-password.component";
import { AuthGuard } from "./auth.guard";
import { PasswordTokenHandlerComponent } from "./password-token-handler/password-token-handler.component";


export const authRoutes: Routes = [
  { 
    path: 'auth',
    children: [
      { 
        path: 'recover-password-token/:token', 
        // canActivate: [TokenGuard],
        pathMatch: 'full',
        component: PasswordTokenHandlerComponent
        // NOTA: Hemos eliminado el redirectTo aquí
      },
      { 
        path: 'recover-password', 
        component: RecoverPasswordComponent,
        canActivate: [AuthGuard],
        data: {
          seo: {
            title: 'Recover Password | Madnolia',
            description: 'Recover your Madnolia account password'
          }
        }
      }
    ]
  }
];