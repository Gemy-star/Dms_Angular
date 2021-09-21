import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
@Input()appointments:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
