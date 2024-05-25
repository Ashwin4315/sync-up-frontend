import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../event/event.service';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.css'
})
export class ManageEventComponent {

  constructor(private router: Router, private eventService: EventService) { }

  events

  ngOnInit(): void {
    this.eventService.getInfo().subscribe((event) => {
      this.events = event;
    })


  }

  onClickEvent(id) {

    this.router.navigate(["./list",id])
  }
}
