import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {VoceMenu} from "../Model/VoceMenu";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  menu: VoceMenu[] = [
    {
      nomeIcona: "dashboard",
      url: "dashboard",
      startUrl: "dashboard",
      title: "Dashboard"
    },

  ];

  getVoceMenu() {
    return this.menu;
  }
  private isSidebarOpenedSource = new BehaviorSubject<boolean>(false);
  isSidebarOpened$ = this.isSidebarOpenedSource.asObservable();

  setSidebarOpened(isOpened: boolean): void {
    this.isSidebarOpenedSource.next(isOpened);
  }
  constructor() { }
}
