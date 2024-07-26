import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Ticket} from "../Model/Ticket";
import {tick} from "@angular/core/testing";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {
  baseUrl = "https://localhost:44311/api/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }


  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('${this.baseUrl}/Ticket/GetAll')
  }

  getTicket(id: number): Observable<Ticket> {
    const url = `${this.baseUrl}/Ticket/GetTicket/${id}`;
    return this.http.get<Ticket>(url)

  }

  addTicket(ticket: Ticket): Observable<Ticket> {
    const url=`${this.baseUrl}/Ticket/GetTicket/PostTicket` ;
    return this.http.post<Ticket>(url, ticket, this.httpOptions);
  }

  updateTicket(ticket: Ticket): Observable<any> {
    const url=`${this.baseUrl}/Ticket/GetTicket/PutTicket` ;

    return this.http.put(url, ticket, this.httpOptions)
  }







}
