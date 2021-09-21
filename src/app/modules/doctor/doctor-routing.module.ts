import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "../../pages/home-page/home-page.component";
import {DoctorPageComponent} from "../../pages/doctor-page/doctor-page.component";
import {DoctorAppointmentComponent} from "../../pages/doctor-page/doctor-appointment/doctor-appointment.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'doctors-list', pathMatch: 'full' },
      { path: 'doctors-list', component: DoctorPageComponent },
      { path: 'doctor-details', component: DoctorAppointmentComponent },
    ])
  ],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
