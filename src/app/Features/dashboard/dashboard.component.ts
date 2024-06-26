import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth/auth.service";
import {AreaService} from "../../Service/area.service";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
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
