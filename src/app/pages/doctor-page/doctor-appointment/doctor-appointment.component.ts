import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DoctorService} from "../../../Services/DoctorService/doctor.service";
import {AppointmentsService} from "../../../Services/AppointmentsService/appointments.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ISearchAppointment} from "../../../IModels/ISearchAppointment";

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  id:any;
  appointments:any[]= [];
  filteredappointments:any[]= [];
  doctor:any;
  searchForm:FormGroup;
  constructor(fb: FormBuilder, private route: ActivatedRoute,private doctorService:DoctorService,
              private appointmentService: AppointmentsService ) {
    this.searchForm = fb.group(   {
      startDateTime : new FormControl('' , Validators.required ),
      endDateTime:new FormControl('' , Validators.required),
      doctorId:new FormControl(this.id),

    });
  }
  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.appointmentService.GetTodayAppointment(this.id).subscribe((data:any)=>{
      console.log(data)
      this.appointments = data?.body;
    })
    this.doctorService.GetDoctorById(this.id).subscribe((data:any)=>{
      console.log(data)
      this.doctor = data?.body;
    })
    this.filteredappointments = this.appointments;
  }
  get startDateTime() { return this.searchForm.controls.startDateTime; }
  get endDateTime() { return this.searchForm.controls.endDateTime;  }

  onSearchSubmit()
  {
    const user = this.searchForm.value;
    user.doctorId = this.id;
    this.SearchAppointment(user);
    debugger;
  }
  SearchAppointment(search:ISearchAppointment)
  {
    this.appointmentService.filterAppointment(search).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.filteredappointments = data;
        this.searchForm.reset();
      });
  }


}
