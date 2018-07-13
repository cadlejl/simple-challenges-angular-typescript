import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() increment = new EventEmitter<number>();
  // @Output() increment = new EventEmitter<number>();
  @Output() seconds = new EventEmitter<number>();
  id: any;
  number = 0;
  disable = false;
  timer: number;
  speed = 1000;
  started = false;

  ngOnInit() {
    this.seconds.emit(this.speed/1000)
  }

  start() {
    this.started = true;
    this.disable = true;
    this.increment.emit(++this.number)
    this.id = setInterval(() => {
      this.increment.emit(++this.number)
    }, this.speed);
  }

  // destroy() {
  //   this.decrement
  // }

  speedChange(event: any) {
    this.pause();
    this.speed = event;
    this.seconds.emit(this.speed/1000)
    if (this.started) this.start();
  }

  pause() {
    clearInterval(this.id);
    this.disable = false;
  }

  reset() {
    this.started = false;
    clearInterval(this.id);
    this.number = 0;
    this.increment.emit(this.number);
    this.disable = false;
  }

}
