import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserRegisteredComponent } from './user-registered/user-registered.component';



@NgModule({
  declarations: [
    ManageEventComponent,
    UserRegisteredComponent,
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ]
})
export class ManageEventModule { }
