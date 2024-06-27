import { Routes } from '@angular/router';
import {DashboardComponent} from "./Features/dashboard/dashboard.component";
import {LoginComponent} from "./Features/login/login.component";
import {AuthLayoutComponent} from "./Layout/auth-layout/auth-layout.component";
import {inject} from "@angular/core";
import {AuthService} from "./Service/auth/auth.service";
import {FeaturesLayoutComponent} from "./Layout/features-layout/features-layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: LoginComponent},
    ],
  },
  {
    path: 'app',
    component: FeaturesLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
    ],
  },
  {path: 'dashboard', redirectTo: 'app/dashboard'},
  {path: '**', redirectTo: 'error'},
];
