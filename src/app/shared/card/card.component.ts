import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private router: Router) { }
  @Input() event

  onClick() {
    this.router.navigate(["/display",this.event.id])
  }
}
