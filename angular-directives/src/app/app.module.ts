import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { TravelSelectionComponent } from './travel-selection/travel-selection.component';
import { TextConfiguratorComponent } from './text-configurator/text-configurator.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent,
    AnimalListComponent,
    TravelSelectionComponent,
    TextConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
