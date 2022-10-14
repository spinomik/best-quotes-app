import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  quotes: Quotation[];
  @Output()
  vote = new EventEmitter<QuotationEvent>();

  constructor() { }

  addVote(quotation: Quotation, vote: number) {
    this.vote.emit({quotation,vote})
  }
}

export interface QuotationEvent{
  quotation: Quotation
  vote: number
}
