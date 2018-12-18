import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Bill } from "../Models/bill";
import { Output } from "@angular/core";

@Component({
  selector: 'app-bill-creation',
  templateUrl: './bill-creation.component.html',
  styleUrls: ['./bill-creation.component.css']
})
export class BillCreationComponent implements OnInit {
  @Output() saveRequest = new EventEmitter<Bill>();

  inputExpenses = false;

  bill : Bill;
  public saveBill(id, sum, date, vendor)  {

    this.bill = new Bill(
      id as number, date, vendor, sum as number, []);

    this.saveRequest.emit(this.bill);
  }

  constructor() { }

  ngOnInit() {
  }

}
