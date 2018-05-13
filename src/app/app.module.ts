import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FortuneComponent } from './fortune/fortune.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { ConditionalRadioButtonComponent } from './conditional-radio-button/conditional-radio-button.component'

@NgModule({
  declarations: [
    AppComponent,
    FortuneComponent,
    SimpleCalculatorComponent,
    ConditionalRadioButtonComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
