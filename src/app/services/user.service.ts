import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost/angular-projet/api';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl+'/list').pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  } 

  addUser(data: NgForm){
    return this.http.post(this.baseUrl+'/ajout',{data: data}).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }
}

