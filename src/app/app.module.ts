import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { FilterPipe } from './utilities/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
