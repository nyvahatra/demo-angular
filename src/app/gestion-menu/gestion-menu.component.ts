import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TestService } from '../services/test.service';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.css']
})
export class GestionMenuComponent implements OnInit {

  constructor(private testService:TestService, private toast:ToastService, private http:HttpClient) { 
    this.testService.getJson().subscribe(data=>{
      this.icon = data
      console.log(this.icon)
    })
  }

  icon: any 
  titleComponent: string = 'Gestion des Menus'
  liste_menu:any
  
  iconMenu: any = 'bi bi-plus-lg'
  nomMenu: any = ''
  routeMenu: any = ''
  nextRang: any = ''
  readyToAdd: boolean = true
  
  ngOnInit(): void {
    this.listeMenu()
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.liste_menu, event.previousIndex, event.currentIndex);
  }
  
  listeMenu(){
    this.testService.getMenu().subscribe(
      data => this.liste_menu = data
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

  getIcon(icon:any){
    this.iconMenu = icon
    this.readyToAdd = false
    this.testService.getMaxRangMenu().subscribe(
      data => this.nextRang = Number(data[0].max) + 1 
    )
  }

  supprimerMenu(id_menu:any){
    Swal.fire({
      title: 'Suppression',
      text: "Voulez-vous vraiment supprimer ce menu ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.testService.supprimerMenu(id_menu).subscribe(
          data => {
            Swal.fire({
              title: 'Supprimée !',
              text: 'Opération réussie',
              icon: 'success'
            }).then((result) => {
              if(result.isConfirmed){
                this.enregistrerRang()
              }
            })
          }
        )
      }
    })
  }

  ajouterMenu(icon:any, nom:any, route:any){
    if(nom == "" || route == ""){
      this.toast.Warning('Veuillez remplir les cases')
    } else {
      this.testService.insertMenu(nom, route, this.nextRang, icon).subscribe(
        data => {},
        error => {},
        () => {
          this.listeMenu()
          this.toast.Success('')
          this.iconMenu = 'bi bi-plus-lg'
          this.nomMenu = ''
          this.routeMenu = ''
          this.nextRang = ''
        }
      )
    }
  }

  annulerAjout(){
    this.iconMenu = 'bi bi-plus-lg'
    this.nomMenu = ''
    this.routeMenu = ''
    this.nextRang = ''
  }

  enregistrerRang(){
    for(let i = 0; i < this.liste_menu.length; i++){
      let range = i + 1 
      let id_menu = this.liste_menu[i].id_menu
      this.testService.updateRangMenu(range, id_menu).subscribe(
        data => this.liste_menu = data,
        error => {},
        () => {
          window.location.reload()
        }
      )
    }
  }


}
