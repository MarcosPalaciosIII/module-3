import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// FormsModule is required to use "ngModel"
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CryptoTrackerComponent } from './crypto-tracker/crypto-tracker.component';
import { DateChangerComponent } from './date-changer/date-changer.component';
import { EmojifyPipe } from './my-pipes/emojify.pipe';
import { RaulFiilterComponent } from './raul-fiilter/raul-fiilter.component';
import { SearchByNamePipe } from './my-pipes/search-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CryptoTrackerComponent,
    DateChangerComponent,
    EmojifyPipe,
    RaulFiilterComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule
    // FormsModule is requred to use "ngModel" in your input
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
