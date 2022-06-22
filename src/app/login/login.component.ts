import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, private formBuilder:FormBuilder, private authService: AuthService) { }

  matricule: any
  password: any
  
  authentificationForm = this.formBuilder.group({
    matricule: [''],
    password: ['']
  })

  ngOnInit(){

  }

  onSubmit(data: any){        
    this.matricule = data.matricule
    this.password = data.password
    this.authService.login(this.matricule, this.password).subscribe(data => {
      if(data) this.router.navigate(['accueil'])
    })
  }


}
