import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CreateEventModule } from './create-event/create-event.module';
import { DisplayModule } from './display/display.module';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ProfileModule } from './profile/profile.module';
import { RegisteredEventModule } from './registered-event/registered-event.module';
import { ManageEventModule } from './manage-event/manage-event.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    CreateEventModule,
    DisplayModule,
    SignUpModule,
    SharedModule,
    LoginModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ManageEventModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
