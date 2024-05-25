import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.css'
})
export class DisplayCardComponent {
  list=[1,2,3,4,5]

  @Input() title;
  @Input() events;
}
