import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../Services/DoctorService/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {
doctors:any[]=[];
  constructor(private doctorService:DoctorService , private router:Router) {

  }
DoctorAppointPage(id:string){
    this.router.navigate(['doctor/doctor-details/'], { queryParams: { id: id } });

}
  ngOnInit(): void {
    this.doctorService.GetDoctors().subscribe((data:any)=>{
      this.doctors = data;
    })

  }

}
