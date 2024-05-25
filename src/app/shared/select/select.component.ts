import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() title;
  @Input() inputs;

  @Output() select: EventEmitter<string> = new EventEmitter();

  onSelect(value) {
    this.select.emit(value)
  }

}
