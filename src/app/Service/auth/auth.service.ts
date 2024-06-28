import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',

})
export class AuthService {
  baseUrl = "https://localhost:44311/api/"
  private headers = {'Access-Control-Allow-Origin': '*/*'}
  private tokenVar !: string;
  constructor(private http: HttpClient, private route:Router) { }
  Utente = {
    Nome:"Alexandru",
    cognome:"Stefu",
    Email:"alessandro.stefu06@gmail.com",
    Password:"admin1"
  }
  Login(utente: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Auth/Login`, utente, { headers: this.headers }).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.token);
        // Puoi gestire il redirect qui se necessario
        // this.router.navigateByUrl('/dashboard');
      })
    );
  }
  // setToken(token: string): void {
  //   this.token = token;
  // }
  getToken(tokenName: string): any {
    return localStorage.getItem(tokenName) ;
  }
  Register(Utente:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}Auth/Register`, Utente);
  }
  isUserLogged() {
    return localStorage.getItem('accessToken') != null;
  }
  extractTokenPayload(tokenName: string) {
    const token = this.getToken(tokenName);
    if (token === null)
      return null;
    return JSON.parse(atob(token.split('.')[1]));
  }
  Logout(){
     localStorage.removeItem('accessToken');
    this.route.navigate(['/login']);
  }
}
