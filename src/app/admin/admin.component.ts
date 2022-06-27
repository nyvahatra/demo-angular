import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TestService } from '../services/test.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  titleComponent: string = 'Administrateur Component'
  liste_menu:any = []
  nextRang: any = 0
  constructor(private testService:TestService, private toast:ToastService) { }

  ngOnInit(): void {
    this.listeMenu()
  }

  listeMenu(){
    this.testService.getMenu().subscribe(
      data => this.liste_menu = data,
      error => {},
      () => {
        this.testService.getMaxRangMenu().subscribe(data => {
          this.nextRang = Number(data[0].max) + 1
        })
      }
    )
  }

  modifierMenu(data:any){
    
    let nom = data.nom_menu
    let route = data.route_menu
    let rang = data.rang_menu
    let icon = data.icon_menu
    let id = data.id_menu

    this.testService.updateMenu(nom,route,rang,icon,id).subscribe(data => {
      this.toast.Success('')
      this.listeMenu()
    })
  
  }
}
