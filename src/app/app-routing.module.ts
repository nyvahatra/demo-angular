import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PageGuard } from './services/auth/page.guard';
import { DemandeComponent } from './demande/demande.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'test', component: TestComponentComponent, canActivate: [PageGuard]},
  { path: 'page2', component: PageTwoComponent, canActivate: [PageGuard]},
  { path: 'parametre', component: ParametreComponent, canActivate: [PageGuard]},
  { path: 'parametre', component: ParametreComponent, canActivate: [PageGuard]},
  { path: 'accueil', component: AccueilComponent, canActivate: [PageGuard]},
  { path: '**', pathMatch: 'full', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}