import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { validateHorizontalPosition } from '../../../../node_modules/@angular/cdk/overlay';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  //@Output() increment = new EventEmitter<number>();
  @Output() seconds = new EventEmitter<number>();
  @Output() interval = new EventEmitter<number>();
  id: any;
  number = 0;
  disableCreate = false;
  timer: number;
  speed = 1000;
  someCreated = false;
  canDestroy = true;

  ngOnInit() {
    this.seconds.emit(this.speed/1000)
  }

  create() {
    this.pause();
    this.someCreated = true;
    this.canDestroy = true
    this.disableCreate = true;
    this.action('+');
  }

  destroy() {
    this.canDestroy = false;
    this.pause();
    this.action('-')
  }

  action(operation: string) {
    this.emitter(operation);
    this.intervalSetter(operation);
  }

  intervalSetter(operation: string) {
    this.id = setInterval(() => {
      this.number > 0 ? this.emitter(operation) : this.reset();
    // if (this.number >= 0) this.emitter(operation)
    // else this.reset();
    }, this.speed);
  }

  emitter(operation: string) {
    let int: number;
    switch (operation) {
      case '+': int = ++this.number; break;
      case '-': int = --this.number; break;
    }
    this.interval.emit(int);
  }

  speedChange(event: any) {
    this.pause();
    this.speed = event;
    this.seconds.emit(this.speed/1000)
    if (this.someCreated) this.create();
  }

  pause() {
    clearInterval(this.id);
    this.disableCreate = false;
  }

  reset() {
    clearInterval(this.id);
    this.number = 0;
    this.interval.emit(this.number);
    this.someCreated = false;
    this.disableCreate = false;
  }

  buttonAccess() {
    
  }

}
