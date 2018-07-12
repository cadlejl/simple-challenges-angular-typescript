import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'mat-speed-slider',
  templateUrl: './mat-speed-slider.component.html',
  styleUrls: ['./mat-speed-slider.component.css']
})
export class MatSpeedSliderComponent implements OnInit{
  @Output() outputValue = new EventEmitter<number>();
  value = 1000;
  autoTicks = true;
  disabled = false;
  invert = true;
  max = 1900;
  min = 100;
  showTicks = true;
  step = 100;
  thumbLabel = true;
  vertical = false;

  ngOnInit() {
    this.valueChange();
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 100;

  valueChange() {
    this.outputValue.emit(this.value);
  }
}
