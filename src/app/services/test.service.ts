import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  REST_API = "http://localhost:3000";
  
  getInfo(){
    var API_URL = this.REST_API+'/get-info';
    return this.http.get(API_URL, {})
  }

  getMenu(){
    var API_URL = this.REST_API+'/get-menu';
    return this.http.get(API_URL, {})
  }

  getLogin(matricule:string, password:string){
    var API_URL = this.REST_API+'/get-login';
    return this.http.post(API_URL, {matricule, password}, httpOptions)
  }
}
