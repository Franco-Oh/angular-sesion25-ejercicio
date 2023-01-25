import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { AppRoutingModule } from  'src/app/app-routing.module';



@NgModule({
  declarations: [
    ListComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule,
    AppRoutingModule
  ],
 exports: [
    ListComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserRegisterComponent
  ]
})
export class PagesModule { }
