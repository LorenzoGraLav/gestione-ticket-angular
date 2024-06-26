import { Routes } from '@angular/router';
import {DashboardComponent} from "./Features/dashboard/dashboard.component";
import {LoginComponent} from "./Features/login/login.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];
