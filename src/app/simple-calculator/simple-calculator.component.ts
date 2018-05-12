import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-calc',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 offset-lg-1">
                    <h2>Simple Calculator</h2>
                    <p>First Value </p>
                    <input (blur)="value_1=$event.target.value"><br /><br />
                    <p>Second Value </p>
                    <input (blur)="value_2=$event.target.value"><br /><br />
                    <button (click)="add()">+</button>&nbsp;
                    <button (click)="subtract()">-</button>&nbsp;
                    <button (click)="multiply()">*</button>&nbsp;
                    <button (click)="divide()">/</button>&nbsp;
                    <span id="equal"> = </span>
                    <label id ="result">{{result}}</label><br /><br />
                </div>
            </div>
        </div>
    `,
    styles: [`
        button { width: 2.5rem; height: 2.5rem; }
        input, p { display: inline; }
        #result { font-size: 2rem; background-color: blue; min-width: 2.5rem; text-align: center; margin: 0; }
        #equal { font-size: 2rem; }
    `]
})

export class SimpleCalculatorComponent /*implements OnInit*/ {

    private value_1: number;
    private value_2: number;
    private result: number;

    add() { this.result = +this.value_1 + +this.value_2; }
    subtract() { this.result = +this.value_1 - +this.value_2; }
    multiply() { this.result = +this.value_1 * +this.value_2; }
    divide() { this.result = +this.value_1 / +this.value_2; }

    // constructor() { }ngOnInit() { }
}