import { Injectable } from '@angular/core';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root',
})

export class Repo {
  private bills = [
    new Bill ( 1, "12/12/2018", "Lidl", 34.4),
    new Bill ( 2, "12/12/2018", "Aldi", 34.4),
    new Bill ( 3, "12/12/2018", "Carrefour", 34.4),
    new Bill ( 4, "12/12/2018", "IP", 34.4),
    new Bill ( 5, "12/12/2018", "Lidl", 34.4),
  ];

  getBills() : Bill[]{
    return this.bills;
  };

  createBill (bill : Bill ) {
      this.bills.push(bill);
  };
}
