import { Component, OnInit } from '@angular/core';
import {AppointmentsService} from "../../Services/AppointmentsService/appointments.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaitentService} from "../../Services/PaitentService/paitent.service";
import {IPaitent} from "../../IModels/IPaitent";
import {Router} from "@angular/router";
import {DoctorService} from "../../Services/DoctorService/doctor.service";
import {IAppointment} from "../../IModels/IAppointment";

@Component({
  selector: 'app-secretary-page',
  templateUrl: './secretary-page.component.html',
  styleUrls: ['./secretary-page.component.css']
})
export class SecretaryPageComponent implements OnInit {
  appointments:any = [];
  closeResult: string='';
  Paitentform: FormGroup;
  appointForm:FormGroup;
  paitents:any=[];
  doctors:any=[];
  constructor(private router:Router,fb: FormBuilder,private modalService: NgbModal,private doctorService:DoctorService,
              private dataService: AppointmentsService , private paitentService:PaitentService) {

    this.Paitentform = fb.group(   {
      name : new FormControl('' , Validators.required ),
      sex:new FormControl('' , Validators.required),
      birthDate:new FormControl( '', Validators.required),
      address:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),

    });
    this.appointForm = fb.group(   {
      startDateTime : new FormControl('' , Validators.required ),
      detail:new FormControl('' , Validators.required),
      patientId:new FormControl( '', Validators.required),
      doctorId:new FormControl('',Validators.required),
    });
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {

    this.dataService.GetAllApointments().subscribe((data:any)=>{
      console.log(data)
      this.appointments = data;
    })
    this.paitentService.GetPaitents().subscribe((data:any)=>{
      console.log(data)
      this.paitents = data;
    })
    this.doctorService.GetDoctors().subscribe((data:any)=>{
      console.log(data)
      this.doctors = data;
    })
  }
  get name() { return this.Paitentform.controls.name; }
  get bithDate() { return this.Paitentform.controls.birthdate;  }
  get address() { return this.Paitentform.controls.address;  }
  get sex() { return this.Paitentform.controls.sex;  }
  get phone() { return this.Paitentform.controls.phone;  }

  get start() { return this.appointForm.controls.startDateTime; }
  get detail() { return this.appointForm.controls.detail;  }
  get patient() { return this.appointForm.controls.patientId;  }
  get doctor() { return this.appointForm.controls.doctorId;  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onFormSubmit()
  {
    const user = this.Paitentform.value;
    this.Creatpaitent(user);
  }
  Creatpaitent(paitent:IPaitent)
  {
    this.paitentService.CreatePaitent(paitent).subscribe(
      (data)=>
      {
        console.log(data);
        this.Paitentform.reset();
        this.modalService.dismissAll();
        this.reloadCurrentRoute();
      });
  }

  onapppointFormSubmit()
  {
    const appoint = this.appointForm.value;
    this.CreateAppointment(appoint);
  }
  CreateAppointment(appoint:IAppointment) {
    this.dataService.AddNewAppointment(appoint).subscribe(
      (data) => {
        console.log(data);
        this.appointForm.reset();
        this.reloadCurrentRoute();
        this.modalService.dismissAll()

      }
    )
  }
}
