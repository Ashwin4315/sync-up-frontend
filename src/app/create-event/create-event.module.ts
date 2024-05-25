import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { RadioSelectComponent } from './radio-select/radio-select.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';





@NgModule({
  declarations: [
    CreateEventComponent,
    DatePickerComponent,
    RadioSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatRadioModule,
    MatFormFieldModule, 
    MatInputModule,
     MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],

  exports:[CreateEventComponent]
})
export class CreateEventModule { }
