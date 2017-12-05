import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { CounterService } from './services/counter.service';

import { AppComponent } from './app.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
