import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-calc',
    templateUrl: './simple-calculator.component.html',
    styles: [`
        .operatorButton { width: 2.5rem; height: 2.5rem; }
        #result { font-size: 2rem; background-color: blue; min-width: 2.5rem; text-align: center; margin: 0; }
        #equal { font-size: 2rem; }
    `]
})

export class SimpleCalculatorComponent {

    private value_1: number;
    private value_2: number;
    private result: number | string;
    private operators = ["+","-","*","/"];

    // Clear
    private firstValueField: string = "";
    private secondValueField: string = "";
    clear() {
        this.firstValueField = "";
        this.secondValueField = "";
        this.result = "";
    }

    doMath(operator: string) {
        if(+this.value_1 && +this.value_2) {
            switch(operator) {
                case "+": this.add(); break;
                case "-": this.subtract(); break;
                case "*": this.multiply(); break;
                case "/": this.divide(); break;
            }
        } else { this.result = "Please enter two numeric values" }
    }

    add() { this.result = +this.value_1 + +this.value_2; }
    subtract() { this.result = +this.value_1 - +this.value_2; }
    multiply() { this.result = +this.value_1 * +this.value_2; }
    divide() { this.result = +this.value_1 / +this.value_2; }
}