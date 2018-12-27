import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,
         Validators } from "@angular/forms";
import { ExpansionCase } from '@angular/compiler';
import { Expense } from '../Models/bill';

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {

  expenseForm : FormGroup;

  private newForm(){
    return new FormGroup({
      name : new FormControl(''),
      quantity:new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
    })
  }

  @Output() addRequest = new EventEmitter<Expense>();

  constructor(
    private fb: FormBuilder
    ) { }

    ngOnInit() {
      this.expenseForm = this.newForm();
    }

  private onSubmit(){
    this.addRequest.emit(this.expenseForm.value);
    this.expenseForm = this.newForm();
    document.getElementById("nameBox").focus();
  }

}
