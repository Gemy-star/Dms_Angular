import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from "../../pages/dashboard-page/dashboard-page.component";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'',component: DashboardPageComponent}
    ])
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
