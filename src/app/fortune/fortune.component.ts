import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fortune',
    templateUrl: 'fortune.component.html',
    styleUrls: [ 'fortune.component.css' ]
})

export class FortuneComponent /*implements OnInit*/ {

    private age: number = null;
    private money: number = null;
    private ageReply: number = null;
    private moneyReply: number = null;
    private fortune = false;

    tellFortune() {
        if (this.age && this.money) {
            this.ageReply = this.age;
            this.moneyReply = this.money;
            this.fortune = true;
        }
    }
/*constructor(){} ngOnInit(){}*/
}