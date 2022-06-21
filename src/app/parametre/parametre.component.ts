import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor() { }

  titleComponent: string = 'Paramètre Component';
  imageComponent: any = '../../assets/images/icons8-paramètres.gif'; 

  ngOnInit(): void {
  }

}
