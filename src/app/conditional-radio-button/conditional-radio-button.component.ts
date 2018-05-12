import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'conditional-radio-button',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5 offset-lg-1">
                    <h3>Your Note Taking Preferrences</h3>
                    <mat-radio> Pencil<br />
                    <mat-radio> Pen<br />
                    <mat-radio> Phone<br />
                    <mat-radio> Tablet<br />
                    <p></p>
                </div>
            </div>
        </div>
    `
})

export class ConditionalRadioButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}