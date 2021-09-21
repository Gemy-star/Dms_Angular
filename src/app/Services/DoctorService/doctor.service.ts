import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {REST_API_SERVER} from "../../IModels/Constants";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  header : any;
  constructor(private http : HttpClient) {
    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }

  GetDoctorById(id:number){
    return this.http.get(REST_API_SERVER + 'Doctor/GetDoctorById' ,  {
      params: {
        id: id,
      },
      observe: 'response'
    })
  }
  GetDoctors()
  {
    return this.http.get(REST_API_SERVER + 'Doctor')
  }
  GetDoctorPerPaitent()
  {
    return this.http.get(REST_API_SERVER + 'Doctor/GetDoctorPerPaitent')
  }
}
