import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { provideNativeDateAdapter } from '@angular/material/core';

import { CardComponent } from './card/card.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { SelectComponent } from './select/select.component';
import { CalenderComponent } from './calender/calender.component';
import { ButtonComponent } from './button/button.component';
import { MapComponent } from './maps/maps.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CardComponent,
    DisplayCardComponent,
    SelectComponent,
    CalenderComponent,
    ButtonComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    LeafletModule

  ],
  providers: [provideNativeDateAdapter()],
  exports: [
    CardComponent,
    DisplayCardComponent,
    SelectComponent,
    CalenderComponent,
    ButtonComponent,
    FormsModule,
    MapComponent,
    AppRoutingModule
  ]
})
export class SharedModule { }
