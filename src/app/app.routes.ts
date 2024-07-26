import { Routes } from '@angular/router';
import {DashboardComponent} from "./Features/dashboard/dashboard.component";
import {LoginComponent} from "./Features/login/login.component";
import {AuthLayoutComponent} from "./Layout/auth-layout/auth-layout.component";
import {inject} from "@angular/core";
import {AuthService} from "./Service/auth/auth.service";
import {FeaturesLayoutComponent} from "./Layout/features-layout/features-layout.component";
import {RegisterComponent} from "./Features/register/register.component";
import {authGuard} from "./Service/auth/authGuard";
import {AreaComponent} from "./Features/area/area.component";
import {AreaLayoutComponent} from "./Layout/area-layout/area-layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // LAYOUT AUTH ------------------------------------
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ],
  },
  //LAYOUT-BASE--------------------------------------
  {
    path: 'app',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    component: FeaturesLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
    ],
  },
  //LAYOUT AREA------------------------------------------
  {
    path: 'app/area',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    component: AreaLayoutComponent,
    children: [
      {path: '', redirectTo: 'area', pathMatch: 'full'},
      {path: 'area', component: AreaComponent},
    ],
  },
  {path: 'dashboard', redirectTo: 'app/dashboard'},
  {path: '**', redirectTo: 'error'},
];
