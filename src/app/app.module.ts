import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Imports for Angular Material
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FortuneComponent } from './fortune/fortune.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ConditionalRadioButtonComponent } from './conditional-radio-button/conditional-radio-button.component';
import { BobsPizzaComponent } from './bobs-pizza/bobs-pizza.component';
import { DaysBtwDatesComponent } from "./days-btw-dates/days-btw-dates.component";

@NgModule({
  declarations: [
    AppComponent,
    FortuneComponent,
    SimpleCalculatorComponent,
    ConditionalRadioButtonComponent,
    BobsPizzaComponent,
    DaysBtwDatesComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
