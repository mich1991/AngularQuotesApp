import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  @Input() quotes : Quotation[]
  @Output() quoteListEvent = new EventEmitter<object>();

  constructor() { 
    this.quotes= []
  }

}
