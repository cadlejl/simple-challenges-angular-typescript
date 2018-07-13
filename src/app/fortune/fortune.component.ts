import { Component } from '@angular/core';

@Component({
    selector: 'fortune',
    templateUrl: 'fortune.component.html',
    styleUrls: [ 'fortune.component.css' ]
})

export class FortuneComponent {

    private age: number = null;
    private money: number = null;
    private ageReply: number = null;
    private moneyReply: number = null;
    private fortune: boolean;
    private yourAge: boolean;
    private yourMoney: boolean;
    private num = true;

    tellFortune() {
        this.fortune = false;
        this.yourAge = false;
        this.yourMoney = false;
        this.num = true;
    
        if (+this.age && +this.money) {
            this.ageReply = this.age;
            this.moneyReply = this.money;
            this.fortune = true;
        } else if (this.age && +this.money) {
            this.ageReply = this.age;
            this.yourAge = true;
        } else if (+this.age && this.money) {
            this.moneyReply = this.money;
            this.yourMoney = true;
        } else if (this.age && this.money) {
            this.ageReply = this.age;
            this.moneyReply = this.money;
            this.num = false;
        }
    }
}