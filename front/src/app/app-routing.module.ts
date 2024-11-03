import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./UI/Pages/home/home.component";
import {LaboratoryComponent} from "./UI/Pages/laboratory/laboratory.component";
import {BookingComponent} from "./UI/Pages/booking/booking.component";
import {CustomerComponent} from "./UI/Pages/customer/customer.component";
import {LoginComponent} from "./UI/Pages/login/login.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home page | GLAB'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login |  GLAB'
  },
  {
    path:'laboratorios',
    component:LaboratoryComponent,
    title:'Laboratorios |  GLAB'
  },
  {
    path:'reservas',
    component:BookingComponent,
    title:'Reservas |  GLAB'
  },
  {
    path:'usuarios',
    component: CustomerComponent,
    title: 'Usuarios |  GLAB'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
