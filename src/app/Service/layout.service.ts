import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {VoceMenu} from "../Model/VoceMenu";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  baseUrl = "https://localhost:44311/api/"
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
  constructor(private http:HttpClient) {
  }
}
