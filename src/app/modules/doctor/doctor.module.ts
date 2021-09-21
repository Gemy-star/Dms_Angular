import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import {DoctorPageComponent} from "../../pages/doctor-page/doctor-page.component";
import {DoctorAppointmentComponent} from "../../pages/doctor-page/doctor-appointment/doctor-appointment.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppointmentComponent} from "../../pages/doctor-page/appointment/appointment.component";


@NgModule({
  declarations: [
    DoctorPageComponent,
    DoctorAppointmentComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ReactiveFormsModule,

  ]
})
export class DoctorModule { }
