import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {REST_API_SERVER} from "../../IModels/Constants";
import {IAppointment} from "../../IModels/IAppointment";
import {ISearchAppointment} from "../../IModels/ISearchAppointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

header:any;
  constructor(private httpClient: HttpClient) {
    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  public GetAllApointments(){
    var url = REST_API_SERVER+'Appointment'
    return this.httpClient.get(url);
  }

  public AddNewAppointment(appointment:IAppointment){
    var url = REST_API_SERVER+'Appointment'
    return this.httpClient.post(url, appointment, { headers: this.header})

  }
  public filterAppointment(search:ISearchAppointment){
    var url = REST_API_SERVER+'Appointment/FilterAppointment'
    return this.httpClient.post(url, search, { headers: this.header})

  }

  public GetTodayAppointment(id:number){
    return this.httpClient.get(REST_API_SERVER + 'Appointment/GetTodayAppointment' ,  {
      params: {
        id: id,
      },
      observe: 'response'
    })
  }




}
