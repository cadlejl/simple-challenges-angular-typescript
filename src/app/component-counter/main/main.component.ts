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
  count: any;
  odd: boolean;
  even: boolean;
  oddArray: number[] = [];
  evenArray: number[] = [];
  evenCreated = 0;
  oddCreated = 0;
  seconds: number;

  countMeathod(count: any) {
    this.count = count;
    if(this.count%2 !== 0 && this.count != null) {
      this.odd = true;
      this.even = false;
      this.oddArray.push(this.count);
    } 
    else if (this.count%2 === 0 && count !== 0) {
      this.odd = false;
      this.even = true;
      this.evenArray.push(this.count);
    } 
    else {
      this.oddArray = [];
      this.evenArray = [];
      this.evenCreated = 0;
      this.oddCreated = 0;
    }
  }


  // b(Key: any) {
  // //  let field = document.createEvent();
  // //   element(field).sendKeys('text', Key.cho, 'a', Key.NULL, 'NOW TEXT IS')
  // //   return field.sendKeys()


  //   Actions action = new Action();
  // }



  evenCreatedMethod(number: any) {
    this.evenCreated = ++number;
  }
  
  oddCreatedMethod(number: any) {
    this.oddCreated = ++number;
  }
}
