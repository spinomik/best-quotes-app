import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  quotes: Quotation[];
  navbarTitle: string;

  constructor() {
    this.navbarTitle = 'Najlepsze cytaty';
    this.quotes = QUOTES;
  }

  addVote(quotation: Quotation, vote: number) {
    quotation.votes += vote;
  }

  bestQuotes() {
    return this.quotes.filter(quotes => quotes.votes > 0)
  }

  worstQuotes() {
    return this.quotes.filter(quotes => quotes.votes < 0)
  }


  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }

}
