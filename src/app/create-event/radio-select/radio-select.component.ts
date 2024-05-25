import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-select',
  templateUrl: './radio-select.component.html',
  styleUrl: './radio-select.component.css'
})
export class RadioSelectComponent {
  types = [
    {
      name: 'Online',
      value: 'online'
    },
    { 
      name: 'Offline' ,
      value: 'offline' 

  }];

  @Output() select: EventEmitter<string> = new EventEmitter();


  onSelect(value) {
    this.select.emit(value.value)
  }
}

