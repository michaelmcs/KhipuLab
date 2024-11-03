import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from "./tooltip/tooltip.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/Pages/home/home.component';
import { HeaderComponent } from './UI/Components/header/header.component';
import { IconsModule } from './UI/icons/icons.module';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SliderComponent } from './UI/Pages/home/Components/slider/slider.component';
import { NgParticlesModule } from "ng-particles";
import { CifrasComponent } from './UI/Pages/home/Components/cifras/cifras.component';
import { SoftwareComponent } from './UI/Pages/home/Components/software/software.component';
import { FooterComponent } from './UI/Components/footer/footer.component';
import { LaboratoryComponent } from './UI/Pages/laboratory/laboratory.component';
import { ModalFormLaboratoryComponent } from './UI/Pages/laboratory/components/modal-form-laboratory/modal-form-laboratory.component';
import { ConfirmComponent } from './UI/Components/confirm/confirm.component';
import { BookingComponent } from './UI/Pages/booking/booking.component';
import { CalendarComponent } from './UI/Pages/booking/components/calendar/calendar.component';
import { CustomerComponent } from './UI/Pages/customer/customer.component';
import { ModalFormCustomerComponent } from './UI/Pages/customer/components/modal-form-customer/modal-form-customer.component';
import { ModalBookingComponent } from './UI/Pages/booking/components/modal-booking/modal-booking.component';
import { SelectHoursComponent } from './UI/Pages/booking/components/select-hours/select-hours.component';
import { LoginComponent } from './UI/Pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CifrasComponent,
    SoftwareComponent,
    FooterComponent,
    LaboratoryComponent,
    ModalFormLaboratoryComponent,
    ConfirmComponent,
    BookingComponent,
    CalendarComponent,
    CustomerComponent,
    ModalFormCustomerComponent,
    ModalBookingComponent,
    SelectHoursComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IconsModule,
    FontAwesomeModule,
    NgParticlesModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
