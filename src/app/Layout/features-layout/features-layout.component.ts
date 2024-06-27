import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {NgClass, NgIf} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../Component/sidebar/sidebar.component";

@Component({
  selector: 'app-features-layout',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    NgIf,
    RouterOutlet,
    SidebarComponent,
    NgClass
  ],
  templateUrl: './features-layout.component.html',
  styleUrl: './features-layout.component.scss'
})
export class FeaturesLayoutComponent {

}
