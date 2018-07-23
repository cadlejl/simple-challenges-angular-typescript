import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-counter',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  count: any = null;
  oddArray: number[] = [];
  evenArray: number[] = [];
  evenCreated = 0;
  oddCreated = 0;
  oddDestroyed = 0;
  evenDestroyed = 0;
  seconds: number;
  intString: string;

  ngOnInit() {
    this.intervalString('create');
  }

  countMeathod(count: any) {
    if ((count !== -1) 
      || (count === -1 && this.count !== null)
    ) {
      if (count > this.count || this.count === null) {
        this.createMethod(count);
      }
      else this.destroyMethod(count);
    }
  }

  createMethod(count: any) {
    this.intervalString('create');
    this.count = count;
      if(this.count % 2 !== 0) {
        this.oddArray.push(this.count);
      }
      else this.evenArray.push(this.count);
  }

  destroyMethod(count: any) {
    // Either destroying, soft reset, or hard reset.
    // If not hard reset
    if (count !== -1) {
      // Destroying
      this.intervalString('destroy');
      this.count = count;
      // Count is a decrement of the current tally, so ...
      // If even was emitted, pop an odd.
      if(this.count % 2 === 0) {
        this.oddArray.pop();
        this.oddDestroyed++;
      } 
      // If odd was emitted, pop an even.
      else if (this.count%2 !== 0) {
        this.evenArray.pop();
        this.evenDestroyed++;
      }
      if (this.count === 0) this.intervalString('create');
    }
    else {
      this.count = null;
      this.oddArray = [];
      this.evenArray = [];
      this.evenCreated = 0;
      this.oddCreated = 0;
      this.intervalString('create');
      this.oddDestroyed = 0;
      this.evenDestroyed = 0;
    }
  }

  evenCreatedMethod(number: any) {
    this.evenCreated = ++number;
  }
  
  oddCreatedMethod(number: any) {
    this.oddCreated = ++number;
  }

  intervalString(key: string) {
    if (key === 'create') {
      this.intString = "new component will be created every";
    }
    if (key === 'destroy') {
      this.intString = "component will be destroyed every";
    }
  }
}
