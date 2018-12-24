import { Component, OnInit, Output } from '@angular/core';
import { Bill, Expense } from "../Models/bill";

@Component({
  selector: 'app-bill-creation',
  templateUrl: './bill-creation.component.html',
  styleUrls: ['./bill-creation.component.css']
})
export class BillCreationComponent implements OnInit {
  @Output() inputExpenses = false;
  expenses = [ new Expense("test", 11, 11, "test")];

  constructor() { }

  ngOnInit() {
  }

  private AddExpense(expense : Expense){
    this.expenses.push(expense)
  }
}
