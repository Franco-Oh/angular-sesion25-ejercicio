import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'', component: HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'register', component: RegisterComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'list', component: ListComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'login', component: LoginComponent},
  {path:'newuser', component: UserRegisterComponent},
  {path:'**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
