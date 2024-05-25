import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event/event.service';
import { FilterService } from '../../event/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private eventService: EventService,
    private filterService: FilterService,

    ) { }



  filterEvent = {
    lat: 0,
    lng: 0,
    time: new Date().toDateString(),
    domain: "",
    type: "",
  }

  events

  ngOnInit(): void {
    this.filterService.filter.subscribe(filter=>{
      this.eventService.getEventsByLocation(filter).subscribe((events) => {
        this.events = events
      })

    })
    this.getCurrentLocation()

  }


  foods = [
    { value: 'technology', viewValue: 'Technology' },
    { value: 'science', viewValue: 'Science' },
    { value: 'agriculture', viewValue: 'Agriculture' },
    { value: 'program', viewValue: 'Program' },
    { value: 'arts', viewValue: 'Arts' },

  ];
  type = [
    { value: 'online', viewValue: 'Online' },
    { value: 'offline', viewValue: 'Offline' },

  ];


  onSelectDomain(domain) {

    this.filterEvent = { ...this.filterEvent, domain }

    this.eventService.getEventsByLocation(this.filterEvent).subscribe((events) => {
      this.events = events
    })

  }
  onSelectType(type) {
    this.filterEvent = { ...this.filterEvent, type }

    this.eventService.getEventsByLocation(this.filterEvent).subscribe((events) => {
      this.events = events
    })
  }

  onDateChange(time) {
    this.filterEvent = { ...this.filterEvent, time: time.toDateString() }

    this.eventService.getEventsByLocation(this.filterEvent).subscribe((events) => {
      this.events = events

    })
  }



  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {

          this.filterEvent = {
            ...this.filterEvent,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.eventService.getEventsByLocation(this.filterEvent).subscribe((events) => {
            this.events = events
            console.log(events)
          })
        },
        (error) => {
          console.error('Error getting location:', error);
          this.eventService.getEvents().subscribe((events) => {
            this.events = events
          })
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }



}
