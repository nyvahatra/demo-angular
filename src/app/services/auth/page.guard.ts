import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): true | UrlTree{
    console.log("Url: " + url)
    let val: string = localStorage.getItem('isUserLoggedIn');
    if(val != null && val == "true"){
      if(url == '/'){
        this.router.parseUrl('/accueil');
      } else {
        return true;
      }
    } else {
      return this.router.parseUrl('/');
    }
  }
  
}
