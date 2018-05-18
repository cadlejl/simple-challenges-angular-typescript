import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-calc',
    templateUrl: './simple-calculator.component.html',
    styles: [`
        .operatorButton { width: 2.5rem; height: 2.5rem; }
        input, p { display: inline; }
        #result { font-size: 2rem; background-color: blue; min-width: 2.5rem; text-align: center; margin: 0; }
        #equal { font-size: 2rem; }

        .example-form-field {
            width: 200px;
            background-color: white;
          }
    `]
})

export class SimpleCalculatorComponent {

    private value_1: number;
    private value_2: number;
    private result: number | string;
    private operators = ["+","-","*","/"];

    clear() {
        //event.value1 = null;
        // let inputValue = document.getElementsByTagName("input");
        // console.log(inputValue);
        // inputValue[0].value = null;
        // this.value_1 = null;
        // this.value_2 = null;
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