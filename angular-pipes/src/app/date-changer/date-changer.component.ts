import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-changer',
  templateUrl: './date-changer.component.html',
  styleUrls: ['./date-changer.component.css']
})
export class DateChangerComponent implements OnInit {

  rightNow: Date = new Date();

  constructor() { }

  ngOnInit() {
  }
    addOneHour() {

      // make a copy of the date so that Angular detects the change
      const dateCopy = new Date(this.rightNow);

      // get the new hours by adding 1 to the old hours
      const newHours = this.rightNow.getHours() + 1;

      // set the new hours in the copied date object
      dateCopy.setHours(newHours);

      // save the copy as the new date
      this.rightNow = dateCopy;

    } // addOneHour()

    addDays(amountOfDays: number) {

      // make a copy of the date so that Angular detects the change
      const dateCopy = new Date(this.rightNow);

      // get the new day by adding to the old day
      const newDay = this.rightNow.getDate() + amountOfDays;

      // save the copy as a new date object
      dateCopy.setDate(newDay);

      // replace the old date with the copy
      this.rightNow = dateCopy;

    } // addDays(amountOfDays)

}
