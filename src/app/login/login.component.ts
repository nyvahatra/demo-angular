import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, private formBuilder:FormBuilder, private authService: AuthService, private testService:TestService) { }

  matricule: any
  password: any
  resultat: any
  
  authentificationForm = this.formBuilder.group({
    matricule: [''],
    password: ['']
  })

  ngOnInit(){

  }

  onSubmit(data: any){        
    this.matricule = data.matricule
    this.password = data.password
    let resultat: any
    this.testService.getLogin(this.matricule, this.password).subscribe(
      data => resultat = data[0].count,
      error => {},
      () => {
        console.log('resultat : '+ resultat);
        this.authService.login(this.matricule, resultat).subscribe(data => {
          if(data) this.router.navigate(['/accueil'])
        });
      }
    )
  }


}
