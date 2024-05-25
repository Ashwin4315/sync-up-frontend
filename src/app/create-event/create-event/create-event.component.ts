import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../../event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  constructor(private eventService: EventService,private router :Router) {
    this.getCurrentLocation()
  }

  position = { lat: 11.3, lng: 44.4 }
  locationObtained: boolean = false;

  fileToUpload: File | null = null;


  createFormData = {

    time: null,
    type: "",
    domain: "",
    lat: 33,
    lng: 33,
    eventImage: null
  }


  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.position.lat = position.coords.latitude;
          this.position.lng = position.coords.longitude;
          this.locationObtained = true;
        },
        (error) => {
          console.error('Error getting location:', error);
          this.position.lat = 9.11111
          this.position.lng = 9.44444
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }


  type = [
    { value: 'technology', viewValue: 'Technology' },
    { value: 'science', viewValue: 'Science' },
    { value: 'agriculture', viewValue: 'Agriculture' },
    { value: 'program', viewValue: 'Program' },
    { value: 'arts', viewValue: 'Arts' },

  ];


  onMarkerMoved(pos) {
    this.position = pos;
    this.createFormData = { ...this.createFormData, lat: this.position.lat, lng: this.position.lng }
  }

  onSelect(event) {
    this.createFormData = { ...this.createFormData, domain: event }
  }

  onSelectType(event) {
    this.createFormData = { ...this.createFormData, type: event }
  }
  onSelectTime(event) {
    this.createFormData = { ...this.createFormData, time: event }
  }



  onCreate(createForm: NgForm) {

    if(!createForm.valid){
      alert("Enter valid data")
      return
    }
    this.createFormData = { ...this.createFormData, ...createForm.value }

    const formData = new FormData();

    formData.append('eventImage', this.fileToUpload);

    for (const key in this.createFormData) {
      if (this.createFormData.hasOwnProperty(key)) {
        formData.append(key, this.createFormData[key]);
      }
    }
    this.eventService.createEvent(formData).subscribe(data => {
      this.createFormData = {
        time: null,
        type: "",
        domain: "",
        lat: null,
        lng: null,
        eventImage: null
      }
      createForm.reset()
      this.router.navigate(["./"])
    })
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }

  }


}
