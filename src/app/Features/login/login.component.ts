import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Utente} from "../../Model/Utente";
import {Router, RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private user !: Utente;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router :Router
  ) {
  }

  utenteForm = this.formBuilder.group(
    {
      Email: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required)
    }
  )
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
}
