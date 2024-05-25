import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../login/authService.service';
import { EventService } from '../../event/event.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private eventService: EventService) { }

  profileUser: User
  eventHosted
  eventRegistered
  imageUrl
  futureEvents

  ngOnInit(): void {
    this.authService.user.subscribe((userData) => {
      if (userData) {
        this.imageUrl == userData.profilePhoto;
        this.profileUser = userData;
      }
    })

    this.eventService.getInfo().subscribe((event: any) => {
      this.eventHosted = event.length;
    })


    this.eventService.getEventsByParticipantId().subscribe((event: any) => {
      this.eventRegistered = event.length;

      const currentDate = new Date()
      this.futureEvents = event.filter(event => {
        const eventDate = new Date(event.time);
        return eventDate > currentDate;
      });



    })
  }


  submitProfileForm(profileForm: any) {
    console.log(this.profileUser);

    const formData = new FormData();

    formData.append('profilePhoto', this.profileUser.profilePhoto);

    for (const key in this.profileUser) {
      if (this.profileUser.hasOwnProperty(key) && key !== 'profilePhoto') {

        formData.append(key, this.profileUser[key]);
      }
    }

    this.authService.updateMe(formData).subscribe(data => {
      console.log(data)
    })
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.profileUser = { ...this.profileUser, profilePhoto: file }
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
