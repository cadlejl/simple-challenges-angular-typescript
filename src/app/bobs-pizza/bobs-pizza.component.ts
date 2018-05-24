import { Component, EventEmitter } from '@angular/core';
import { Pizza, Crust, Topping } from './model';

@Component({
    selector: 'bobs-pizza',
    templateUrl: 'bobs-pizza.component.html',
    styles: [`
        .header {
            margin-bottom: 50px;
        }
        img {
            width: 150px;
        }
        .row {
            margin: 40px 0;
        }
        .menuRow {
            margin: 30px 0;
        }
        .check-radio_Group {
            display: inline-flex;
            flex-direction: column;
        }
        .check-radio {
            margin: 4px;
        }
        .yourOrder {
            font-size: 1.5rem;
        }
        p {
            margin: 10px 0;
        }
    `]
})

export class BobsPizzaComponent {

    private yourPizza: string;
    private yourCrust: string;
    private yourToppings: string[] = [];
    private tList:string[]  = [];

    chooseToppings($event: any) {
        
        let topping: string = $event.source.value.type;
        
        if($event.checked) this.tList.push(topping);
        else {
            this.tList.forEach(element => {
                if(element.includes(topping)) {
                    let tRemove = this.tList.indexOf(element);
                    this.tList.splice(tRemove,1);
                }
            });
        }

        this.configureToppingString(this.tList);
    }
    
    configureToppingString(tList:string[]) {

        let t:string[] = [];
        let tListLast:number = this.tList.length - 1;
        let tLast:number = t.length-1;

       if(tList.length === 1) t[0] = (' ' + tList[0] + '!!');

       if(tList.length === 2){
           t[0] = (' ' + tList[0] + ',');
           t[1] = (' and ' + tList[1] + '!!');
       };

       if(tList.length > 2){

           t[0] = (' ' + tList[0] + ',');
           
           for(let i = 1; i < tListLast; i++) {
               t[i] = (' ' + tList[i] + ',');
            }
            
            t[tListLast] = (' and ' + tList[tListLast] + '!!');
       }
        
        this.yourToppings = t;
    }








    private pizzas: Pizza[] = [
        { size: 'Baby Bob Size (10")', price: 10 },
        { size: 'Mama Bob Size (13")', price: 13 },
        { size: 'Papa Bob Size (16")', price: 16 }
    ]

    private crusts: Crust[] = [
        { type: "thin crust", price: null },
        { type: "deep dish", price: 2 }
    ]

    private toppings: Topping[] = [
        { type: "pepperoni", price: 1.5 },
        { type: "onions", price: 0.75 },
        { type: "green peppers", price: 0.50 },
        { type: "red peppers", price: 0.75 },
        { type: "mushrooms", price: 0.75 },
        { type: "anchovies", price: 2 }
    ]
}