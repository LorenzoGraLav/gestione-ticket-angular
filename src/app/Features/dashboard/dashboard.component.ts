import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth/auth.service";
import {AreaService} from "../../Service/area.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatGridList} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatGridList,
    MatIcon,
    MatCardTitle,
    FlexModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  constructor(
    private auth: AuthService,
    private area: AreaService
) {
  }

  ngOnInit(): void {
    // this.auth.Login()
    // this.area.getAree().subscribe(resp => console.log(resp)
    // )
  }
}
