import { Component, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private cookies:CookieService){}
  
  title = 'demo-angular'
  innerWidth: any;
  isUserLoggedIn = false;
  
  @HostListener('window:resize', ['$event'])
  ngOnInit(){
    this.innerWidth = window.innerWidth
    let storeData = this.cookies.get('isUserLoggedIn')

    if(storeData != null && storeData == "true"){
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}
