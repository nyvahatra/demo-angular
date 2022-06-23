import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  erreur: boolean = false
  status: boolean = false
  
  authentificationForm = this.formBuilder.group({
    matricule: ['',Validators.required],
    password: ['',Validators.required]
  })

  ngOnInit(){

  }

  onSubmit(data: any){        
    this.matricule = data.matricule
    this.password = data.password
    if(this.authentificationForm.status == 'INVALID'){
      this.erreur = false
      this.status = true
    } else {
      this.status = false
      // Use Test Services
      this.testService.getLogin(this.matricule, this.password).subscribe( 
        data => this.resultat = data[0].count,
        error => {},
        () => { // Async
          console.log('resultat : '+ this.resultat);
          // Use Auth Services
          this.authService.login(this.matricule, this.resultat).subscribe(data => {
            if(data){
              this.router.navigate(['/accueil'])
            } else {
              this.erreur = true
            }
          });
        }
      )
    }
  }


}
