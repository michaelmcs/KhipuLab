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
    title:'Home page | CUC'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login | CUC'
  },
  {
    path:'laboratorios',
    component:LaboratoryComponent,
    title:'Laboratorios | CUC'
  },
  {
    path:'reservas',
    component:BookingComponent,
    title:'Reservas | CUC'
  },
  {
    path:'usuarios',
    component: CustomerComponent,
    title: 'Usuarios | CUC'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
