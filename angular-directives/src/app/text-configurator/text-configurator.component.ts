import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-configurator',
  templateUrl: './text-configurator.component.html',
  styleUrls: ['./text-configurator.component.css']
})
export class TextConfiguratorComponent implements OnInit {

  userText: string = "";

  textConfig: any = {
    isBig: false,
    isComic: false,
    isColorful: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleBig() {
    if (this.textConfig.isBig) {
      this.textConfig.isBig = false;
    }
    else {
      this.textConfig.isBig = true
    }
    // PRO WAY
    // this.textConfig.isBig = !this.textConfig.isBig;
  } // toggleBig()

  toggleFont() {
    if (this.textConfig.isComic) {
      this.textConfig.isComic = false;
    }
    else {
      this.textConfig.isComic = true
    }
    // PRO WAY
    // this.textConfig.isComic = !this.textConfig.isComic;
  } // toggleFont()

  toggleColor() {
    if (this.textConfig.isColorful) {
      this.textConfig.isColorful = false;
    }
    else {
      this.textConfig.isColorful = true
    }
    // PRO WAY
    // this.textConfig.isColorful = !this.textConfig.isColorful;
  } // toggleColor()


}
