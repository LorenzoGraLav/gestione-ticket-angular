import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {SidebarComponent} from "./Component/sidebar/sidebar.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {NgIf} from "@angular/common";

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
    NgIf
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'gestione-ticket-angular';
}
