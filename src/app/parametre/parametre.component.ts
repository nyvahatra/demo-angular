import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private testService:TestService, private router:Router) { }

  titleComponent: string = 'Paramètre Component';
  imageComponent: any = '../../assets/images/icons8-paramètres.gif';
  
  menuFormControl = this.formBuilder.group({
    nomMenu: [''],
    rootMenu: [''],
    iconMenu: ['']
  })

  onSubmit(data:any){
    let nom_menu = data.nomMenu
    let root_menu = data.rootMenu
    let icon_menu = data.iconMenu

    this.testService.addMenu(nom_menu, root_menu, icon_menu).subscribe(data => {
      window.location.reload()
    })
  }

  ngOnInit(): void {
  }

}
