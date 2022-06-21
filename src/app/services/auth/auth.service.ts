import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username_log:string = "Ny Vahatra";
  password_log:string = "test";
  isUserLoggedIn: boolean = false;

  login(username:string, password:string): Observable<any>{
    this.isUserLoggedIn = username == this.username_log && password == this.password_log;
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val =>{
        console.log("Is User Authentication is successful: " + val);
        sessionStorage.setItem('username', username);
      })
    )
  }

  logout(): void{
    this.isUserLoggedIn = false;
    localStorage.removeItem("isUserLoggedIn");
  }
  
  constructor() { }
}
