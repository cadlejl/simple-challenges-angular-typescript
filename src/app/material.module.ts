import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [ 
        MatRadioModule,
        MatCheckboxModule,
        MatGridListModule
    ],
    exports: [ 
        MatRadioModule,
        MatCheckboxModule,
        MatGridListModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
