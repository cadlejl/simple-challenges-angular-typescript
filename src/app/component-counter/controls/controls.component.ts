import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() seconds = new EventEmitter<number>();
  @Output() interval = new EventEmitter<number>();
  id: any;
  number = 0;
  timer: number;
  speed = 1000;
  createBtn: boolean;
  destroyBtn: boolean;
  pauseBtn: boolean; 
  resetBtn: boolean;
  creating: boolean;
  destroying: boolean;

  ngOnInit() {
    /* Not needed due to slider emitting outputValue OnInit which calls speedChange($event) */
    //this.seconds.emit(this.speed/1000);

    this.buttons(0);
  }

  create() {
    this.creating = true;
    this.destroying = false;
    this.pause();
    this.buttons(1);
    this.action('+');
  }

  destroy() {
    this.creating = false;
    this.destroying = true;
    this.pause();
    this.buttons(2);
    this.action('-')
  }

  action(operation: string) {
    this.emitter(operation);
    this.intervalSetter(operation);
  }

  intervalSetter(operation: string) {
    this.id = setInterval(() => {
      /* In "create" mode, action() increments this.number before calling intervalSetter(), therefore this.number can only be 0 here in "destroy" mode, requiring a soft reset. */
      this.number > 0 ? this.emitter(operation) : this.reset();
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
    clearInterval(this.id);
    this.speed = event;
    this.seconds.emit(this.speed/1000);
    if (!this.pauseBtn) {
      if (this.creating) this.create();
      else if (this.destroying) this.destroy();
    }
  }

  pause(key?: number) {
    if (key) this.buttons(3);
    clearInterval(this.id);
  }

  reset(hardReset?: boolean) {
    this.creating = false;
    this.destroying = false;
    this.buttons(0);
    clearInterval(this.id);
    if (hardReset) {  
      this.number = 0;
      this.interval.emit(-1);
    }
  }

  buttons(key: number) {
    let c; let d; let p; let r;
    switch (key) {
      case 0: c = false; d = true; p = true; r = true; break;
      case 1: c = true; d = false; p = false; r = false; break;
      case 2: c = false; d = true; p = false; r = false; break;
      case 3: c = false; d = false; p = true; r = false; break;
    }
    this.createBtn = c;
    this.destroyBtn = d;
    this.pauseBtn = p; 
    this.resetBtn = r;
  }
}
