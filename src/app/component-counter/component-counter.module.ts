import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";

import { MainComponent } from "./main/main.component";
import { ControlsComponent } from "./controls/controls.component";
import { EvenComponent } from "./even/even.component";
import { OddComponent } from "./odd/odd.component";
import { MatSpeedSliderComponent } from "./mat-speed-slider/mat-speed-slider.component";

@NgModule({
  imports: [ 
    CommonModule, 
    MaterialModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    ControlsComponent,
    EvenComponent,
    OddComponent,
    MatSpeedSliderComponent
  ],
  exports: [ MainComponent ]
})
export class ComponentCounterModule { }