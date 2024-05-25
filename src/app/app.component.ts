import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './login/authService.service';
import { LocationService } from './service/location.service';
import { NgForm } from '@angular/forms';
import { EventService } from './event/event.service';
import { FilterService } from './event/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lastSegment
  isAuthenticated = false
  profileImage = ""

  filterEvent = {
    lat: 0,
    lng: 0,
    time: new Date().toDateString(),
    domain: "",
    type: "",
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private locationService: LocationService,
    private eventService: EventService,
    private filterService: FilterService,

  ) { }

  ngOnInit(): void {

    this.authService.user.subscribe((user) => {
      if (user) {
        this.profileImage = user.profilePhoto
        this.isAuthenticated = true

      }
      else {

        this.isAuthenticated = false;
        this.router.navigate(["./"])
      }
    })


    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const segments = event.urlAfterRedirects.split('/');
        const show = segments[segments.length - 1];
        this.lastSegment = show === "signup" ? true : show === "login" ? true : false;
        console.log(this.lastSegment)
      });
  }



  onSearch(location: NgForm) {

    this.locationService.getLocation(location.value.location).subscribe((data) => {
      this.filterEvent = {
        ...this.filterEvent,
        lat: data[0].lat,
        lng: data[0].lon
      }
      

      this.filterService.sendData(this.filterEvent)
    })

    this.eventService.getEventsByLocation(this.filterEvent).subscribe((data) => {
      console.log(data)
      this.router.navigate(["./"], { state: data })

    })


  }
  onLogout() {
    this.authService.signout()
  }
}
