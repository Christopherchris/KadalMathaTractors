import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit, AfterViewInit {
  doctorData: any = [];
  selecedItems: string = "";
  doctordetails_display: boolean = false;
  isCollapsedDoctorInfo: boolean = false;
  isCollapsedAppointments: boolean = true;
  isDelete: boolean = false;
  isDeleteAppointment: boolean = false;
  rangedata: any = 0.1;
  constructor() {

  }
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnInit() {
    this.loadDoctorData();

  }
  ngAfterViewInit() {
    // $('#range_01').ionRangeSlider();
  }

  loadDoctorData() {
    this.doctorData = [
      {
        name: 'Vivek',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'Smith',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'christopher',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'saravanan',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'saravanakumar',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'ravi',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      }, {
        name: 'ramu',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'kumar',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'devid',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
      {
        name: 'sibi',
        comingappoinment: '7 upcoming appointments',
        lastappointment: 'Yesterday ',
        comingappoinmentNtes: 'Composite I',
        nextappointment: 'Tomorrow',
        nextappointmentNotes: "Composite I"
      },
    ];
  }
  show_doctorDetails(doctor?) {
    this.doctordetails_display = true;
  }
}
