import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : Quotation[] = QUOTES
  quotation: Quotation = {sentence: '' , author: '', votes:0}

  addVote(event:any){
    const {quote, value} = event
    quote.votes += value
  }
  onNewQuotation(quote:Quotation){
    this.quotes.unshift(quote)
  }
}
