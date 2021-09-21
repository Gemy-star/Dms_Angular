import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import {SecretaryPageComponent} from "../../pages/secretary-page/secretary-page.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SecretaryPageComponent,
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    NgbModule,
    ReactiveFormsModule,



  ]
})
export class SecretaryModule { }
