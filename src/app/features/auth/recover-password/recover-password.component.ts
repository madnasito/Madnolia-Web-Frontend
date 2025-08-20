import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnDestroy, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToastService } from '../../../shared/services/toast-service';

@Component({
  selector: 'app-recover-password',
  standalone: false,
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss'
})
export class RecoverPasswordComponent implements OnDestroy {

  public updatePasswordForm: FormGroup;
  public isBrowser: boolean;
  public errorMessage: string = '';
  private isLoading: boolean = false;
  private readonly authService = inject(AuthService);
  private readonly toastService = inject(ToastService);
  @ViewChild('successTpl') successTpl!: TemplateRef<any>;
  @ViewChild('dangerTpl') dangerTpl!: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    this.updatePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(64)]],
      repeated_password: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    // Verificar token solo en el navegador
    if (this.isBrowser) {
      this.checkToken();
    }
  }

  private checkToken(): void {
    const token = sessionStorage.getItem('p-token');
    if (!token) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      sessionStorage.removeItem('p-token'); // Solo en navegador
    }
  }

  showDanger(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-danger text-light', delay: 15000 });
	}

  onSubmit(): void {
    if (this.updatePasswordForm.valid && this.isBrowser) {
      this.isLoading = true;
      
      const token = sessionStorage.getItem('p-token');
      if (!token) {
        this.router.navigate(['/']);
        return;
      }

      this.authService.updatePassword(this.updatePasswordForm.value).subscribe({
        next: (resp) => {
          this.isLoading = false;
          
          this.showSuccess(this.successTpl)

          this.updatePasswordForm.reset();
          
          setTimeout(() => {
            sessionStorage.removeItem('p-token');
            this.router.navigate(['/auth/login']);
          }, 3000);
        },
        error: (error) => {
          if(error.statusText) {
            this.errorMessage = error.message;
            this.showDanger(this.dangerTpl);
          }
          this.isLoading = false;
        }
      });
    }
  }


  showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-light', delay: 10000 });
	}

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    if (!(group instanceof FormGroup)) {
      return null;
    }

    const password = group.get('password');
    const confirmPassword = group.get('repeated_password');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value && confirmPassword.value) {
      return password.value === confirmPassword.value ? null : { passwordMismatch: true };
    }

    return null;
  }

  get password() {
    return this.updatePasswordForm.get('password');
  }

  get repeated_password() {
    return this.updatePasswordForm.get('repeated_password');
  }

  get formErrors() {
    return this.updatePasswordForm.errors;
  }
}