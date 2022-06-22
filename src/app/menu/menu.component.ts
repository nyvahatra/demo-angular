import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private route:Router, private authService:AuthService, private testService:TestService) { }

  @Input() titleComponent: string = '';
  innerWidth: boolean = true;
  liste_menu:any = []
  test:any = 'fa-solid fa-cloud-check'

  ngOnInit(): void {    
    this.onResize()
    this.listMenu()
  }
  
  deconnexion(){
    this.authService.logout()
    this.route.navigate(['/'])
  }

  
  listMenu() {
    this.testService.getMenu().subscribe((res) => {
      this.liste_menu= res      
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.innerWidth = window.innerWidth < 1270 ? false : true
  }

}
