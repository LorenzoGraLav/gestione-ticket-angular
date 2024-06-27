import {Component} from '@angular/core';
import {AuthService} from "../../Service/auth/auth.service";
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    RouterLink, MatCard, MatIcon, MatError, NgIf, MatIconButton, MatSuffix],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router :Router
  ) {
  }

  utenteForm = this.formBuilder.group(
    {
      Email: new FormControl("", [Validators.required, Validators.email]),
      Password: new FormControl("", Validators.required)
    }
  )
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  SubmitLogin(){
    if (this.utenteForm.valid) {
      this.authService.Login(this.utenteForm.getRawValue()).subscribe({
        next: (response) => {
          console.log(response );
          if (response.token) {
            this.router.navigate(['/dashboard']);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
  naviaRegistrazione(){
    this.router.navigate(['/register']);
  }
}
