import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VoceMenu} from "../../Model/VoceMenu";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {NgFor} from "@angular/common";
import {Router} from "@angular/router";
import {LayoutService} from "../../Service/layout.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIcon,MatButton,NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(
    public layoutService: LayoutService,
    public router: Router
  ) {
  }
  //creo un oggetto menu
  menu?: VoceMenu[]
  ngOnInit(): void {
    this.menu = this.layoutService.getVoceMenu();
    console.log(this.menu)
  }
  navigaPagina(voce: VoceMenu){
    this.router.navigate([voce.url], {state: {data: { title: voce.title}}});
  }

}
