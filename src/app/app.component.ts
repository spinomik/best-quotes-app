import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showform: boolean;
  quotes: Quotation[];
  quotation: Quotation;

  constructor() {
    this.showform = false;
    this.quotes = QUOTES;
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0,
    }
  }

  editModeOn() {
    this.showform = !this.showform;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    }
  }

  addVote(quotation: Quotation, vote: number) {
    quotation.votes += vote;
  }
}
