import {Component, OnInit} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../Service/auth/auth.service";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCard,
    FormsModule,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    NgIf,
    MatSuffix,
    MatButton,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  implements OnInit{
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  userForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Nome: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      Cognome: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });

    // Aggiungi un listener per il cambiamento dei valori nei campi Password e ConfirmPassword
    this.userForm.get('Password')?.valueChanges.subscribe(() => {
      this.updateConfirmPasswordValidity();
    });

    this.userForm.get('ConfirmPassword')?.valueChanges.subscribe(() => {
      this.updateConfirmPasswordValidity();
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('Password');
    const confirmPassword = control.get('ConfirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  // Metodo per aggiornare la validità di ConfirmPassword in base alla corrispondenza con Password
  updateConfirmPasswordValidity() {
    const passwordControl = this.userForm.get('Password');
    const confirmPasswordControl = this.userForm.get('ConfirmPassword');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ 'passwordMismatch': true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  Register() {
    console.log(this.userForm.valid)
    if (this.userForm.valid) {
      console.log("valido")

      this.authService.Register(this.userForm.value).subscribe(
        res => {
          console.log("response", res);
          this.router.navigate(['/login']);
        },
        error => {
          console.error("error", error);
          // Gestione degli errori
        }
      );
    } else {
      console.error("Form is invalid");
    }
  }
  navigaLogin(){
    this.router.navigate(['/login']);
  }
}
