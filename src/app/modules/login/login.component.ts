import { Component,Renderer2, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/guards/auth.service';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  standalone: true,
  providers: [
    FormGroup,
    FormBuilder
  ],
  imports: [PasswordModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  loginForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  _authService = inject(AuthService);
  _router = inject(Router);
  constructor(private renderer: Renderer2,) {
  }
  

  onSubmit(e:Event): void {
    e.preventDefault();
    this._authService.login(this.loginForm.value).subscribe(() => {
      this._router.navigate(['/']);
    });
  }
}
