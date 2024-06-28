import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../Service/auth/auth.service";
import {AreaService} from "../../Service/area.service";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatGridList} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {Utente} from "../../Model/Utente";
import {Ruolo} from "../../Model/Ruolo";
import {NgIf} from "@angular/common";

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
    FlexModule,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  user !:Utente

  constructor(
    private auth: AuthService,
) {
  }

  ngOnInit(): void {
   this.user = this.auth.extractTokenPayload("accessToken");
    console.log(this.user)
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

  protected readonly Ruolo = Ruolo;
}
