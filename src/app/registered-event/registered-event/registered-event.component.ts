import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../event/event.service';

@Component({
  selector: 'app-registered-event',
  templateUrl: './registered-event.component.html',
  styleUrl: './registered-event.component.css'
})
export class RegisteredEventComponent {

  constructor(private router: Router, private eventService: EventService) { }

  events

  ngOnInit(): void {
    this.eventService.getEventsByParticipantId().subscribe((event) => {
      this.events = event;
    })


  }

  onClickEvent(id) {

    this.router.navigate(["./display",id])
  }
}
