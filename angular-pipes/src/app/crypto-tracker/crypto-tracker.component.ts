import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-tracker',
  templateUrl: './crypto-tracker.component.html',
  styleUrls: ['./crypto-tracker.component.css']
})
export class CryptoTrackerComponent implements OnInit {

  currentFartcoinPrice: number = 11445;

  constructor() { }
  //"ngOnInit()" runs when the component is initialized
  //use it for extra setup needs to happen when the component loads
  ngOnInit() {
    setInterval(
      () => {
        // increase by 2.3%
        this.currentFartcoinPrice *= 1.023;
      },
      2000
    );
  }

}
