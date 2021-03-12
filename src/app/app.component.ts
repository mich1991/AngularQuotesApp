import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes : Quotation[] = QUOTES
  quotation: Quotation = {sentence: '' , author: '', votes:0}

  onSwitchForm(): void {
    this.showForm = !this.showForm
  }
  addQuote(){
    this.quotes.unshift(this.quotation)
    this.quotation = {sentence: '' , author: '', votes:0}
  }
  addVote(quote: Quotation, value: number){
    quote.votes += value
  }
}
