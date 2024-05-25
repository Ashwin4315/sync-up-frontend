import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../login/authService.service';
import { Router } from '@angular/router';
import { EventService } from '../../event/event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private eventService: EventService) { }

  @Input() spots
  @Input() isRegistered
  @Input() id

  registered

  ngOnInit(): void {

    this.authService.user.subscribe(user => {
      if (user) {
        this.eventService.isUserParticipantInEvent(this.id).subscribe((data) => {
          this.registered = data
          console.log("is sdfdfdf",this.registered)
        })
      }

    })


  }

  register() {
    this.authService.user.subscribe(user => {
      if (!user) {
        this.router.navigate(["/login"])
      } else {
        this.eventService.registerEvent(this.id).subscribe(data => {
          console.log(data)
          this.router.navigate(["/"])

        })
      }

    })
  }

}



