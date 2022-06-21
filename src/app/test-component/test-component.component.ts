import { Component, OnInit } from '@angular/core';
import Swal from '../../assets/plugins/sweetalert/sweetalert.js';
import { User } from '../model/utilisateur';
import { UserService } from '../services/user.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {

  username: string = sessionStorage.getItem('username');
  titleComponent: string = "Admin Component";
  imageComponent: any = '../../assets/images/icons8-sun.gif';
  users: User[] = [];
  // user: User = {nom_utilisateur:'', mot_de_passe:''};
  ifEmpty: boolean = false;
  contenuIfEmpty: string = "Aucun utilisateur trouvé";
  
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  
  toastSuccess(message){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: message == "" || message == undefined || message == null ? 'Opération réussie' : message
      })
  }  
  toastError(message){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: message == "" || message == undefined || message == null ? 'Echec de l\'opération' : message
      })
  }
  toastWarning(message){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        title: message == "" || message == undefined || message == null ? 'Opération annulée' : message
      })
  }
  
  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getAll().subscribe(
      (data: User[]) => {
        if(!data){
          this.ifEmpty = true;
        } else {
          this.users = data;
          this.ifEmpty = false;
        }
      },
      (err) => {
        console.log(err);
        this.toastError('Liste non récuperée');
      }
    )
  }

  // AVEC FormBuilder
  addFormUser = this.formBuilder.group({
    lastname : ['', Validators.required],
    firstname : ['', Validators.required],
    username : ['', Validators.required],
    motDePasse : ['', Validators.required],
    confirm_motDePasse : ['', Validators.required]
  });
  
  addUserForm(data: NgForm){
    if(data['motDePasse'] != data['confirm_motDePasse']){
      this.toastError('Mot de passe incorrect');
    } else {
      this.userService.addUser(data).subscribe(
        (res: User) => {
          this.users.push(res);
          this.toastSuccess('Utilisateur enregistré!!');
          this.getUser();
          this.addFormUser.reset();
        },
        (err) => (this.toastError('Utilisateur non enregistré'))
      );
    }
  }
}
