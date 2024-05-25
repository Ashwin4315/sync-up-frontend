import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {
  selected: Date | null;

  @Output() time: EventEmitter<string> = new EventEmitter();

  onSelect(value) {
    this.time.emit(value)
  }
}
