import { NgModule } from '@angular/core';

/* Bob's Pizza, Note Taking */
import { MatRadioModule } from '@angular/material/radio';

// Bob's Pizza
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

// Days Between Dates
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { /*MatNativeDateModule,*/ MatInputModule } from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
/* import { BrowserAnimationsModule } Imported in app.module */

// Component Counter
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from "@angular/material";

@NgModule({
    imports: [ 
        MatRadioModule,
        MatCheckboxModule,
        MatGridListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        //MatNativeDateModule,
        MatInputModule,
        MatMomentDateModule,
        MatSliderModule,
        MatCardModule
    ],
    exports: [ 
        MatRadioModule,
        MatCheckboxModule,
        MatGridListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        //MatNativeDateModule,
        MatInputModule,
        MatMomentDateModule,
        MatSliderModule,
        MatCardModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
