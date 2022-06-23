import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { TestService } from '../test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private cookies:CookieService, private testService:TestService, private router:Router) { }

  username_log:string = "T9000";
  password_log:string = "test";
  isUserLoggedIn: boolean = false;

  login(matricule:string, resultat:any): Observable<any>{
    
    this.isUserLoggedIn = resultat > 0;
    this.cookies.set('isUserLoggedIn', this.isUserLoggedIn ? 'true' : 'false' ); // Cookies Services
    
    return of(this.isUserLoggedIn).pipe(
      delay(500),
      tap(val =>{
        console.log("Is User Authentication is successful: " + val);        
        this.cookies.set('matricule', matricule); // Cookies Services
      })
    )
  }

  logout(): void{
    this.isUserLoggedIn = false;
    this.cookies.delete('matricule') // Cookies Services
    this.cookies.delete('isUserLoggedIn') // Cookies Services
  }
  
}
