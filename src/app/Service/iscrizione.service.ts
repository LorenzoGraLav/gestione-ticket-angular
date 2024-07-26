import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../Model/Ticket";
import {Iscrizione} from "../Model/Iscrizione";

@Injectable({
  providedIn: 'root'
})
export class IscrizioneService {
  baseUrl = "https://localhost:44311/api/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getIscrizione(): Observable<Iscrizione[]> {
    return this.http.get<Iscrizione[]>('${this.baseUrl}/Iscrizione/GetAll')
  }

  getIscrizioniPerUtente(): Observable<Iscrizione[]> {
    return this.http.get<Iscrizione[]>('${this.baseUrl}/Iscrizione/GetTicketSeguitiPerUtente')
  }

}
