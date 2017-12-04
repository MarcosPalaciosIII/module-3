import { Component, OnInit } from '@angular/core';

import { raulArray } from "./raul-array";

@Component({
  selector: 'app-raul-fiilter',
  templateUrl: './raul-fiilter.component.html',
  styleUrls: ['./raul-fiilter.component.css']
})
export class RaulFiilterComponent implements OnInit {

  listOfRauls: any[] = raulArray;

  raulSearch: string = "";

  constructor() { }

  ngOnInit() {
  }

}
