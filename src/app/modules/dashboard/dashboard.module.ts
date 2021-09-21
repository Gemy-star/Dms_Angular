import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardPageComponent} from "../../pages/dashboard-page/dashboard-page.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,

  ]
})
export class DashboardModule { }
