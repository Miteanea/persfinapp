import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,
         Validators } from "@angular/forms";
import { ExpansionCase } from '@angular/compiler';
import { Expense } from '../Models/bill';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {
  expense: Expense;
  name: string;
  quantity: number;
  price: number;
  category: string;

  @Output() addRequest = new EventEmitter<Expense>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  private SaveExpense(){
    this.expense = new Expense(
      this.name, this.quantity, this.price, this.name);

      this.addRequest.emit(this.expense);
  }

}
