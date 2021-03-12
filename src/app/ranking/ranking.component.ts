import { Component, Input, OnInit } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input() quotes:Quotation[];
  @Input() rank:number
  
  constructor() {
    this.quotes = [];
    this.rank=0
   }

  ngOnInit(): void {
  }

  quotesRanking(value:number){
    switch (value) {
      case -1:
        return [...this.quotes].sort((a,b) => a.votes - b.votes).slice(0,3)
      case 1:
        return [...this.quotes].sort((a,b) => b.votes - a.votes).slice(0,3)
      default:
        return this.quotes
    }
  }
}
