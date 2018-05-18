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
        this.result = null;
    }

    doMath(operator: string) {
        if(+this.value_1 && +this.value_2) {
            let v1 = +this.value_1;
            let v2 = +this.value_2;
            let r: number;

            switch(operator) {
                case "+": r = v1 + v2; break;
                case "-": r = v1 - v2; break;
                case "*": r = v1 * v2; break;
                case "/": r = v1 / v2; break;
            }

            this.result = r;

        } else { this.result = "Please enter two numeric values" }
    }
}