import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatDivider} from "@angular/material/divider";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {AuthService} from "../../Service/auth/auth.service";
import {Utente} from "../../Model/Utente";
import {NgIf} from "@angular/common";
import {Ruolo} from "../../Model/Ruolo";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-area-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDivider,
    MatGridList,
    MatGridTile,
    MatIcon,
    MatToolbar,
    NgIf,
    FlexModule
  ],
  templateUrl: './area-layout.component.html',
  styleUrl: './area-layout.component.scss'
})
export class AreaLayoutComponent implements OnInit{
  user!:Utente
  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.extractTokenPayload('accessToken')
  }
  checkRuolo():string{
    if (typeof this.user.Ruolo === 'string') {
      this.user.Ruolo = this.getRuoloFromString(this.user.Ruolo);
    }
    if(this.user.Ruolo == Ruolo.Tecnico){
      return "Tecnico"
    }
    return "Utente"
  }
  getRuoloFromString(ruoloStr: string): Ruolo | undefined {
    return Ruolo[ruoloStr as keyof typeof Ruolo];
  }
  //per effettuare logout
  Logout(){
    this.authService.Logout();
  }
}
