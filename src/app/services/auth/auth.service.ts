import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private cookies:CookieService) { }

  username_log:string = "T9000";
  password_log:string = "test";
  isUserLoggedIn: boolean = false;

  login(username:string, password:string): Observable<any>{
    this.isUserLoggedIn = username == this.username_log && password == this.password_log;

    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); // Local Storage
    this.cookies.set('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false' ); // Cookies Services
    
    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val =>{
        console.log("Is User Authentication is successful: " + val);
        
        sessionStorage.setItem('username', username); // Session Storage 
        this.cookies.set('username', username); // Cookies Services
      
      })
    )
  }

  logout(): void{
    this.isUserLoggedIn = false;
    
    localStorage.removeItem("isUserLoggedIn"); // Local Storage
    this.cookies.delete('username') // Cookies Services
  
  }
  
}
