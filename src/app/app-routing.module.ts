import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CreateEventComponent } from './create-event/create-event/create-event.component';
import { DisplayComponent } from './display/display/display.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RegisteredEventComponent } from './registered-event/registered-event/registered-event.component';
import { ManageEventComponent } from './manage-event/manage-event/manage-event.component';
import { UserRegisteredComponent } from './manage-event/user-registered/user-registered.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"create",
    component:CreateEventComponent
  },
  {
    path:"display/:id",
    component:DisplayComponent
  },
  {
    path:"signup",
    component:SignUpComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"registered",
    component:RegisteredEventComponent
  },
  {
    path:"manage",
    component:ManageEventComponent
  },
  {
    path:"list/:id",
    component:UserRegisteredComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
