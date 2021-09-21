
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'doctor' , loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule)},
  {path:'secretary' , loadChildren: () => import('./modules/secretary/secretary.module').then(m => m.SecretaryModule)},
  {path:'dashboard' , loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
