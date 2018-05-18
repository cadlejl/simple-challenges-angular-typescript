import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'conditional-radio-button',
    templateUrl: 'conditional-radio-button.component.html',
    styles: [`
        h3 {margin-bottom:40px}
        .auto {margin-top: auto;
            margin-bottom: auto;}
        .mat-radio-group {
            display:inline-flex;
            flex-direction: column;
        }
        .btn {display:block;margin-top:25px;}
        .image {height:300px;}
    `]
})

export class ConditionalRadioButtonComponent {

    private preference = "Make a selection"; 
    private display: boolean = false;
    private imgUrl: string;

    private devices = [
        "pencil",
        "pen",
        "phone",
        "tablet"
    ];

    select(choice:string) {
        let displayPreference = `You chose ${choice}`;

        this.display = true;

        if (choice) {
            this.preference = displayPreference;
            this.imgUrl = `../../assets/${choice}.png`;
            //console.log(imgUrl);
        }
    }
}