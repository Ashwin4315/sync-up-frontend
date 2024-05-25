import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    DisplayComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[DisplayComponent]
})
export class DisplayModule { }
