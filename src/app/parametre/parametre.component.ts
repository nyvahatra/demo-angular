import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(private formBuilder: UntypedFormBuilder, private testService:TestService, private router:Router) { }

  titleComponent: string = 'Paramètre Component';

  ngOnInit(): void {
  }

}
