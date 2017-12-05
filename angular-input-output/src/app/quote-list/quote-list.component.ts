import { Component, OnInit } from '@angular/core';
import { quotes } from './quotes';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  listOfQuotes: any[] = quotes;

  constructor() { }

  ngOnInit() {
  }

  deleteQuote(quoteId) {
    let quoteIndex;

    this.listOfQuotes.forEach((oneQuote, index) => {
      if(oneQuote.id === quoteId) {
        quoteIndex = index;
      }
    });

    this.listOfQuotes.splice(quoteIndex, 1);

    // PRO WAY
  //   this.listOfQuotes = this.listOfQuotes.filter(
  //   oneQuote => oneQuote.id !== quoteId
  // );
} // deleteQuote()

}
