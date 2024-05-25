import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

  @Output() time: EventEmitter<string> = new EventEmitter();

  onSelect(value) {
    this.time.emit(value.value)
  }
}
