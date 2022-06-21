import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private testService: TestService) { }
  titreComponent: string = 'Accueil Component'
  info_user: any = []

  ngOnInit(): void {
    this.listUtilisateur()
  }

  listUtilisateur() {
    this.testService.getInfo().subscribe((res) => {
      this.info_user= res;
    })
  }

}
