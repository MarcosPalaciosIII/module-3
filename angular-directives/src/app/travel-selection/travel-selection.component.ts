import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-selection',
  templateUrl: './travel-selection.component.html',
  styleUrls: ['./travel-selection.component.css']
})
export class TravelSelectionComponent implements OnInit {

  destination: string = "";

  constructor() { }

  ngOnInit() {
  }

}
