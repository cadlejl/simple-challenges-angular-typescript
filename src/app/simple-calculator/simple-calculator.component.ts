import { Component } from '@angular/core';

@Component({
    selector: 'simple-calc',
    templateUrl: './simple-calculator.component.html',
    styles: [`
        input {width: 90%; font-size: 1.5rem;}
        .operatorButton { 
            width: 2.5rem; 
            height: 2.5rem; }
        #result { 
            font-size: 2rem; 
            background-color: blue; 
            min-width: 2.5rem; 
            text-align: center; 
            margin: 0; 
        }
        #opLabel {
            font-size: 3rem; 
            position: relative;
            top: 32%;
        }
        #equal { font-size: 3rem; }
    `]
})

export class SimpleCalculatorComponent {

    private value_1: number;
    private value_2: number;
    private result: number | string;
    private operators = ["+","-","*","/"];
    private operatorLabel = "";

    // Clear
    private firstValueField: string = "";
    private secondValueField: string = "";

    doMath(operator: string) {

        if(+this.value_1 && +this.value_2) {
            this.operatorLabel = operator;
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

        } else this.result = "Please enter two numeric values" 
    }
    
    clear() {
        this.firstValueField = "";
        this.secondValueField = "";
        this.operatorLabel = "";
        this.value_1 = null;
        this.value_2 = null;
        this.result = null;
    }
}