import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event/event.service';
import { AuthService } from '../../login/authService.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService) { }

  event
  user
  spots
  isRegistered=false

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params["id"]

    this.eventService.getEventsById(id).subscribe((event) => {
      this.event = event;
         console.log(event)
      if (this.event.participants) {
        this.spots = this.event.maxEnrollment - this.event.participants.length
      } else {
        this.spots = this.event.maxEnrollment
      }
    })


  }

  isIdInParticipants(id, obj) {
    return obj.participants.find(participant => participant.id === id) !== undefined;
}

  redirectToNewTab() {
    window.open("https://www.google.com/maps/place/11%C2%B001'00.1%22N+77%C2%B000'44.5%22E/@" + this.event.lat + "," + this.event.lng + ",13z/data=!4m4!3m3!8m2!3d11.016689!4d77.01237?entry=ttu"
      , '_blank');
  }


}
