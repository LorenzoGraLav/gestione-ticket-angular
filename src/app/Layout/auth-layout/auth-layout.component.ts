import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../Service/auth/auth.service";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {



}
