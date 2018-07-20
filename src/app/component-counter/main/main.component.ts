import { Component } from '@angular/core';
import { element } from '../../../../node_modules/protractor';
import { send } from '../../../../node_modules/@types/q';
import { FileDetector } from '../../../../node_modules/@types/selenium-webdriver/remote';

@Component({
  selector: 'component-counter',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  count: any = null;
  oddArray: number[] = [];
  evenArray: number[] = [];
  evenCreated = 0;
  oddCreated = 0;
  seconds: number;

  countMeathod(count: any) {
    if (
      count > this.count 
      || this.count === null
    ) this.createMethod(count);
    else this.destroyMethod(count);
  }

  createMethod(count: any) {
    this.count = count;
    if(this.count % 2 !== 0 /*&& this.count != null*/) {
      this.oddArray.push(this.count);
    } 
    else /*(this.count%2 === 0 && count !== 0)*/ {
      this.evenArray.push(this.count);
    }
  }

  destroyMethod(count: any) {
    // if (count !== 0) {}
    this.count = count;
    if(this.count % 2 === 0 /*&& count !== 0*/) {
      this.oddArray.pop();
    } 
    else if (this.count%2 !== 0 /*&& count !== 0*/) {
      this.evenArray.pop();
    }
    else {
      this.count = null;
      this.oddArray = [];
      this.evenArray = [];
      this.evenCreated = 0;
      this.oddCreated = 0;
    }
  }

  evenCreatedMethod(number: any) {
    this.evenCreated = ++number;
  }
  
  oddCreatedMethod(number: any) {
    this.oddCreated = ++number;
  }
}
