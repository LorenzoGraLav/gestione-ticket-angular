import { Injectable } from '@angular/core';
import {HttpClient, withInterceptors} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  baseUrl = "https://localhost:44311/api/"
  constructor(private http: HttpClient) { }
  getAree():Observable<any>{
    return this.http.get(`${this.baseUrl}Area/GetAree`)
  }
}
