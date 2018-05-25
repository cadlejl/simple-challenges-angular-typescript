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
        .orderTotal {
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
    private toppingList:string[]  = [];
    private toppingTotal: number = 0;
    private sizePrice: number = 0;
    private crustPrice: number = 0;
    private subtotal: number = 0;

    sizeCrustChange($event:any) {
        let val = $event.value;
        let price = val.price;

        if(val.size) this.sizePrice = price;
        else/*(val.type)*/ this.crustPrice = price;

        this.setSubtotal(this.sizePrice, this.crustPrice, this.toppingTotal);
    }

    setSubtotal(sizePrice:number, crustPrice:number, toppingTotal:number) {
        this.subtotal = sizePrice + crustPrice + toppingTotal;
    }

    chooseToppings($event: any) {
        let val = $event.source.value;
        let topping: string = val.type;
        let toppingPrice: number = val.price;
        
        if($event.checked) {
            this.toppingTotal += toppingPrice;
            this.toppingList.push(topping);
        }
        else {
            this.toppingTotal -= toppingPrice;
            this.toppingList.forEach(element => {
                if(element.includes(topping)) {
                    let tIndex = this.toppingList.indexOf(element);
                    this.toppingList.splice(tIndex,1);
                }
            });
        }
        
        //this.checkSpecial(this.toppingList);
        this.setSubtotal(this.sizePrice, this.crustPrice, this.toppingTotal);
        this.configureToppingString(this.toppingList);
    }
    
    configureToppingString(tList:string[]) {
        let t:string[] = [];
        let tListLast:number = this.toppingList.length - 1;

       if(tList.length === 1) t[0] = (' ' + tList[0] + '!!');

       if(tList.length === 2){
           t[0] = (' ' + tList[0] + ',');
           t[1] = (' and ' + tList[1] + '!!');
       }

       if(tList.length > 2) {
           t[0] = (' ' + tList[0] + ',');
           
           for(let i = 1; i < tListLast; i++) {
               t[i] = (' ' + tList[i] + ',');
           }
           
           t[tListLast] = (' and ' + tList[tListLast] + '!!');
       };

        this.yourToppings = t;
    }

    // checkSpecial(toppingList: string[]) {
    //     let t = toppingList;
    //     let t2:string;
    //     let tt = t.includes(t2);
    //     if(
    // }

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