import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { GuardGuard } from './Servicios/guard.guard';


const routes: Routes = [
  {path: '', component: InicioComponent, canActivate: [GuardGuard]},
  {path: 'login', component: LoginComponent},
 
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
