import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  constructor() { }

  titleComponent = 'Demande Component';
  imageComponent = '../../assets/images/icons8-info.gif';

  ngOnInit(): void {
  }

}
