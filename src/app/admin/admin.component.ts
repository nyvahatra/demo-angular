import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  movies = [
    'bi bi-gear',
    'bi bi-people-fill',
    'bi bi-people',
    'bi bi-gear-fill',
    'bi bi-card-checklist',
    'bi bi-card-list',
    'bi bi-speedometer2',
    'bi bi-speedometer',
    'bi bi-bootstrap',
  ];
  
  titleComponent: string = 'Administrateur Component'
  liste_menu:any
  nextRang: any = ''
  constructor(private testService:TestService, private toast:ToastService) { }

  ngOnInit(): void {
    this.listeMenu()
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.liste_menu, event.previousIndex, event.currentIndex);
  }

  getIcon(icon:any){
    console.log(icon)
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
            this.listeMenu()
            Swal.fire(
              'Supprimée !',
              'Opération réussie',
              'success'
            )
          }
        )
      }
    })
  }

  ajouterMenu(){
    console.log(this.movies)
  }

  enregistrer(){
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
