import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { AuthService } from '../../core/guards/auth.service';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule,FormsModule, MatButtonModule],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm! : FormGroup;
  authService = inject(AuthService)
  router = inject(Router)
  errorMessage: any;
  ngOnInit(): void {
      this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        {next: (res: any) => {
          this.authService.setToken(res.jwtToken);
          this.authService.token$.next(res.jwtToken);
          this.authService.isLoggedIn.next(true);
          this.router.navigate(['/']);
        },
        error : (error: any) => { 
          if (error.error.message === 'Incorrect username or password!') {
        this.loginForm.get('email')?.setErrors({ notRecognized: true });
      }
          },
      },
      );
    }
  }

}
