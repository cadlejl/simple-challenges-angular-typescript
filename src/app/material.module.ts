import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [ 
        MatRadioModule,
        MatCheckboxModule
    ],
    exports: [ 
        MatRadioModule,
        MatCheckboxModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
