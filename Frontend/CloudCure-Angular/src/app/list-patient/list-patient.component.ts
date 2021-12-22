import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../AngularModels/Patient';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProfile } from '../AngularModels/UserProfile';
import { UserService } from '../services/user.service';
import { User } from '@auth0/auth0-angular';
import { PatientService } from '../services/patient.service';
import { Allergy } from '../AngularModels/Allergy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {

  @Input()
  patient: Patient = {} as Patient;

  @Input()
  role: number = 0;

  constructor(private router: Router, private patientAPI:PatientService) {
  }

  ngOnInit(): void {
  }

  addProfile()
  {
    this.patientAPI.currentPatientId = this.patient.id;
    this.router.navigateByUrl("/diagnosis");
  }

  viewProfile()
  {
    this.patientAPI.currentPatientId = this.patient.id;
    this.router.navigateByUrl("/patient-view");
  }

  assignDoctor()
  {
    this.patientAPI.assigningDoctor = true;
    this.patientAPI.currentPatientId = this.patient.id;
    this.router.navigateByUrl('/search');
  }

  finalize()
  {
    //not sure what we do when we finalize?
    this.router.navigateByUrl("/view-diagnosis");
  }
}