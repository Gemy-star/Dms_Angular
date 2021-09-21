import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../Services/DoctorService/doctor.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  data:any[]=[];
  gradient = false;
  constructor(private doctorService:DoctorService,) {
  }

  ngOnInit(): void {
    this.doctorService.GetDoctorPerPaitent().subscribe((data:any)=>{
      console.log(data)
      this.data = data;
    })
  }

}
