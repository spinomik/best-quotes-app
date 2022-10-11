import { Component, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showform: boolean;
  quotation: Quotation;

  constructor() { 
    this.showform = true;
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
    this.newQuotation.emit(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0
    }
  }

}
