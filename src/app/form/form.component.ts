import { Component, EventEmitter, Output } from '@angular/core';
import {Quotation} from '../models/quotation'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  showForm = false;
  quotation: Quotation = {sentence: '' , author: '', votes:0}
  
  onSwitchForm(): void {
    this.showForm = !this.showForm
    console.log(this.showForm)
  }
  addQuote(){
    this.newQuotation.emit(this.quotation)
    this.quotation = {sentence: '' , author: '', votes:0}
  }
}
