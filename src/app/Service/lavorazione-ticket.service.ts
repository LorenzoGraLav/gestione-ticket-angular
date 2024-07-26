import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Ticket} from "../Model/Ticket";
import {Lavorazione} from "../Model/Lavorazione";

@Injectable({
  providedIn: 'root'
})
export class LavorazioneTicketService {

  baseUrl = "https://localhost:44311/api/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getLavorazioni(): Observable<Lavorazione[]> {
    return this.http.get<Lavorazione[]>('${this.baseUrl}/lavorazioneTicket')
  }

  getLavorazione(id: number): Observable<Lavorazione> {
    const url = `${this.baseUrl}/lavorazioneTicket/${id}`;
    return this.http.get<Lavorazione>(url).pipe(
      catchError(this.handleError<Lavorazione>(`getLavorazione id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);


      return of(result as T);
    };
  }
}
