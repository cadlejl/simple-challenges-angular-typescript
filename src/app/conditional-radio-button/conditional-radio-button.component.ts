import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'conditional-radio-button',
    templateUrl: 'conditional-radio-button.component.html',
    styles: [`
        #radio-group {display: inline-flex; flex-direction: column; }
        mat-radio-button { margin: 5px; }
        #selectedValue { nargin: 15px 0; }
    `]
})

export class ConditionalRadioButtonComponent /*implements OnInit*/ {

    private preference = "Make a selection";

    private devices = [
        "pencil",
        "pen",
        "phone",
        "tablet"
    ];

    select() {
        
        
    }


    
    // constructor() { }ngOnInit() { }
}