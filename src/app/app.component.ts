import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private authService:AuthService){}
  
  title = 'demo-angular'
  innerWidth: any;
  isUserLoggedIn = false;
  
  @HostListener('window:resize', ['$event'])
  ngOnInit(){
    this.innerWidth = window.innerWidth

    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log("StoreData:" + storeData);

    if(storeData != null && storeData == "true"){
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}
