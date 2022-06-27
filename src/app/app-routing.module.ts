import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PageGuard } from './services/auth/page.guard';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'parametre', component: ParametreComponent, canActivate: [PageGuard]},
  { path: 'accueil', component: AccueilComponent, canActivate: [PageGuard]},
  { path: 'users', component: UtilisateurComponent, canActivate: [PageGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [PageGuard]},
  { path: '**', pathMatch: 'full', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}