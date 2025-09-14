import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { IconsModule } from './UI/icons/icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgParticlesModule } from 'ng-particles';

import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/Components/header/header.component';
import { FooterComponent } from './UI/Components/footer/footer.component';
import { ConfirmComponent } from './UI/Components/confirm/confirm.component';

import { HomeComponent } from './UI/Pages/home/home.component';
import { SliderComponent } from './UI/Pages/home/Components/slider/slider.component';
import { CifrasComponent } from './UI/Pages/home/Components/cifras/cifras.component';
import { SoftwareComponent } from './UI/Pages/home/Components/software/software.component';

import { LaboratoryComponent } from './UI/Pages/laboratory/laboratory.component';
import { ModalFormLaboratoryComponent } from './UI/Pages/laboratory/components/modal-form-laboratory/modal-form-laboratory.component';

import { BookingComponent } from './UI/Pages/booking/booking.component';
import { CalendarComponent } from './UI/Pages/booking/components/calendar/calendar.component';
import { ModalBookingComponent } from './UI/Pages/booking/components/modal-booking/modal-booking.component';
import { SelectHoursComponent } from './UI/Pages/booking/components/select-hours/select-hours.component';

import { CustomerComponent } from './UI/Pages/customer/customer.component';
import { ModalFormCustomerComponent } from './UI/Pages/customer/components/modal-form-customer/modal-form-customer.component';

import { LoginComponent } from './UI/Pages/login/login.component';

import { QuipuViewerComponent } from './UI/Components/quipu-viewer/quipu-viewer.component';
import { QuipuPageComponent } from './UI/Pages/quipu-page/quipu-page.component';

import { LabSampleComponent } from './lab-sample/lab-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmComponent,
    HomeComponent,
    SliderComponent,
    CifrasComponent,
    SoftwareComponent,
    LaboratoryComponent,
    ModalFormLaboratoryComponent,
    BookingComponent,
    CalendarComponent,
    ModalBookingComponent,
    SelectHoursComponent,
    CustomerComponent,
    ModalFormCustomerComponent,
    LoginComponent,
    QuipuViewerComponent,
    QuipuPageComponent,
    LabSampleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IconsModule,
    FontAwesomeModule,
    NgParticlesModule,
    TooltipModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
