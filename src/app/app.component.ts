import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {SidebarComponent} from "./Component/sidebar/sidebar.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NgClass, NgIf} from "@angular/common";

@Component({
  imports: [
    RouterOutlet,
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    SidebarComponent,
    MatIcon,
    MatIconButton,
    MatToolbar,
    NgIf,
    NgClass
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'gestione-ticket-angular';
  contentWidth = '100%';
constructor(private router : Router) {
}
  onSidenavToggle(opened: boolean) {
    this.contentWidth = opened ? 'calc(100% - 15rem)' : '100%';
  }
  isLoginPage(): boolean {
  console.log(this.router.url)
    return this.router.url === '/login';
  }
}
