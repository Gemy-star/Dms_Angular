import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {REST_API_SERVER} from "../../IModels/Constants";
import {IPaitent} from "../../IModels/IPaitent";

@Injectable({
  providedIn: 'root'
})
export class PaitentService {
  header : any;
  constructor(private http : HttpClient) {
    const headerSettings: {[name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);
  }
  CreatePaitent(paitent:IPaitent)
  {
    return this.http.post(REST_API_SERVER + 'Paitent', paitent, { headers: this.header})
  }

  GetPaitents()
  {
    return this.http.get(REST_API_SERVER + 'Paitent')
  }


}
