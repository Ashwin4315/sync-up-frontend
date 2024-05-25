import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../event/event.service';



@Component({
  selector: 'app-user-registered',
  templateUrl: './user-registered.component.html',
  styleUrl: './user-registered.component.css'
})
export class UserRegisteredComponent {


  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService) { }

  participants
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource=[]

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params["id"]

    this.eventService.getEventsById(id).subscribe((event: any) => {
      this.participants = event?.participants;
      console.log(this.participants)

      this.dataSource = this.participants.map((user, index) => { return { position: index+1, name: user.username, email: user.email, } })
      
    })


  }







}
