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

  // message:string = 'Valide';
  // username:string = '';
  // password:string = '';
  // validation:boolean = false;

  // /* SANS FormBuilder
  //   authentificationForm = new FormGroup({
  //     username : new FormControl(''),
  //     password : new FormControl('')
  //   });
  // */  
  
  // // AVEC FormBuilder
  // // Validators.required rend le champ obligatoire
  // authentificationForm = this.formBuilder.group({
  //   username : ['', Validators.required],
  //   password : ['', Validators.required]
  // });

  // ngOnInit(): void {
  // }

  // onSubmit(data: any){
  //   this.username = data.username;
  //   this.password = data.password;

  //   this.authService.login(this.username, this.password).subscribe(data=>{
  //     if(data) this.router.navigate(['test']);
  //     else this.validation = true;
  //   })
  // }

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
