import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'funky-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  myAds: any[] = [
    {
      title: "Buy Cialis",
      imageUrl: "https://media.giphy.com/media/sFQ7ZC6nnpVV6/giphy.gif"
    },
    {
      title: "Lighting Leffer for Circuit Court judge",
      imageUrl: "https://media.giphy.com/media/11i0XyP1zBpYOc/giphy.gif"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
