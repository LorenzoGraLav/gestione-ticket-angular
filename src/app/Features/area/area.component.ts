import {Component, OnInit} from '@angular/core';
import {AreaService} from "../../Service/area.service";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Ruolo} from "../../Model/Ruolo";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgForOf,
    MatCard,
    MatIcon,
    FlexModule,
    MatCardTitle,
    NgStyle
  ],
  templateUrl: './area.component.html',
  styleUrl: './area.component.scss'
})
export class AreaComponent implements OnInit{
  areaList:any
  utente: any
constructor(private areaService: AreaService) {
}

  ngOnInit(): void {
    this.areaService.getAree().subscribe(resp => {
      console.log(resp)
      this.areaList = resp.$values;
      console.log('aree', this.areaList);
    });
  }
  getCircleClass(index: number): string {
    const colors = ['circle-green', 'circle-yellow', 'circle-red'];
    const colorClass = colors[index % colors.length];

    if (this.isHovered && this.hoveredIndex === index) {
      return `${colorClass} hovered-circle`;
    } else {
      return colorClass;
    }
  }
  protected readonly Ruolo = Ruolo;
  isHovered = false;
  hoveredIndex: number | null = null;

  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.hoveredIndex = null;
    this.isHovered = false;
  }


}

