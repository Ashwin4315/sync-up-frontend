import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


import { RegisteredEventComponent } from './registered-event/registered-event.component';



@NgModule({
  declarations: [
    RegisteredEventComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[RegisteredEventComponent]
})
export class RegisteredEventModule { }
