import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,
         Validators } from "@angular/forms";

@Component({
  selector: 'app-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent implements OnInit {

  singleExpenseForm= this.fb.group({
    name: ['', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
    category: ['', Validators.required],
  })
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
