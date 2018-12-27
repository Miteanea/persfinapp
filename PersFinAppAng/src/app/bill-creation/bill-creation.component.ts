import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Bill, Expense } from "../Models/bill";

@Component({
  selector: 'app-bill-creation',
  templateUrl: './bill-creation.component.html',
  styleUrls: ['./bill-creation.component.css']
})
export class BillCreationComponent implements OnInit {
  @Output() inputExpenses = false;

  billForm: FormGroup;
  expenses: Expense[];

  private newBill(){
    return new FormGroup({
      date: new FormControl('', Validators.required),
      vendor: new FormControl('', Validators.required)
    })
  }

  constructor() { }

  ngOnInit() {
    this.billForm = this.newBill();
    this.expenses = [];

  }

  private AddExpense(expense : Expense){
    this.expenses.push(expense)
  }
}
