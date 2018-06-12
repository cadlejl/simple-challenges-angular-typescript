import { Component } from '@angular/core';
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
            margin: 10px 0; 
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
        .orderTotal { 
            font-size: 1.5rem; 
        }
        .special { 
            color: #dc3545; 
        }
        // mat-grid-tile { border: 2px solid white; }
        p { margin: 10px 0; }
    `]
})

export class BobsPizzaComponent {

    private yourPizza: string;
    private yourCrust: string;
    private yourToppings: string[] = [];
    private toppingList: string[]  = [];
    private toppingTotal: number = 0;
    private sizePrice: number = 0;
    private crustPrice: number = 0;
    private subtotal: number = 0;
    private total: number = 0;
    private special: number = 0;

    sizeCrustChange($event:any) {
        let val = $event.value;
        let price = val.price;

        if (val.size) this.sizePrice = price;
        else/*(val.type)*/ this.crustPrice = price;

        this.setTotal(this.sizePrice, this.crustPrice, this.toppingTotal);
    }

    setTotal(sizePrice:number, crustPrice:number, toppingTotal:number) {
        this.subtotal = sizePrice + crustPrice + toppingTotal;
        this.total = this.subtotal - this.special;
    }

    chooseToppings($event: any) {
        let val = $event.source.value;
        let topping: string = val.type;
        let toppingPrice: number = val.price;
        let tList: string[] = this.toppingList;
        
        if ($event.checked) {
            this.toppingTotal += toppingPrice;
            tList.push(topping);
        }
        else {
            this.toppingTotal -= toppingPrice;
            tList.forEach(element => {
                if (element.includes(topping)) {
                    let tIndex = tList.indexOf(element);
                    tList.splice(tIndex,1);
                }
            });
        }
        
        if (tList.length > 2) this.checkSpecial(tList);
        else this.special = 0;

        this.setTotal(this.sizePrice, this.crustPrice, this.toppingTotal);
        this.configureToppingString(tList);
    }
    
    configureToppingString(tList:string[]) {
        let t: string[] = [];
        let tLength: number = tList.length;
        let tListLast: number = tLength - 1;

       if (tLength === 1) t[0] = (' ' + tList[0] + '!');

       if (tLength === 2){
           t[0] = (' ' + tList[0] + ',');
           t[1] = (' and ' + tList[1] + '!');
       };

       if (tLength > 2) {
           for(let i = 0; i < tListLast; i++) {
               t[i] = (' ' + tList[i] + ',');
           }
           
           t[tListLast] = (' and ' + tList[tListLast] + '!');
       };

        this.yourToppings = t;
    }

    checkSpecial(t: string[]) {
        if ((t.some(x => x === "pepperoni")
        && t.some(x => x === "green peppers")
        && t.some(x => x === "anchovies"))
        || (t.some(x => x === "pepperoni")
        && t.some(x => x === "red peppers")
        && t.some(x => x === "onions"))) {
            this.special = 2;
        } else this.special = 0;
    }

    pizzas: Pizza[] = [
        { size: 'Baby Bob Size (10")', price: 10 },
        { size: 'Mama Bob Size (13")', price: 13 },
        { size: 'Papa Bob Size (16")', price: 16 }
    ]

    crusts: Crust[] = [
        { type: "thin crust", price: null },
        { type: "deep dish", price: 2 }
    ]

    toppings: Topping[] = [
        { type: "pepperoni", price: 1.5 },
        { type: "onions", price: 0.75 },
        { type: "green peppers", price: 0.50 },
        { type: "red peppers", price: 0.75 },
        { type: "mushrooms", price: 0.75 },
        { type: "anchovies", price: 2 }
    ]
}