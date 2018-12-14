import { Injectable } from '@angular/core';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root',
})

export class Repo {
  private bills = [
    new Bill ( 1, new Date(2018, 12, 1), "Lidl", 34.4),
    new Bill ( 2, new Date(2018, 12, 1), "Aldi", 34.4),
    new Bill ( 3, new Date(2018, 12, 1), "Carrefour", 34.4),
    new Bill ( 4, new Date(2018, 12, 1), "IP", 34.4),
    new Bill ( 5, new Date(2018, 12, 1), "Lidl", 34.4),
  ];

  getBills() : Bill[]{
    return this.bills;
  }

  createBill (
     id: number,
     date: Date,
     vendor: string,
     sum : number ) {
      this.bills.push(
        new Bill(id, date, vendor, sum)
      )
  }
}
