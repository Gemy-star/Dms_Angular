import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorPageComponent} from "../../pages/doctor-page/doctor-page.component";
import {SecretaryPageComponent} from "../../pages/secretary-page/secretary-page.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'',component: SecretaryPageComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
