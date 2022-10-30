import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-gen-stats',
  templateUrl: './gen-stats.component.html',
  styleUrls: ['./gen-stats.component.css']
})
export class GenStatsComponent implements OnInit {
  private bills = this.repo.getBills();
  private totExp : number = 0;
  private avgBill : number = 0;
  constructor(private repo: Repo) { }

  ngOnInit() {
    for ( let bill of this.bills){
      this.totExp += bill.sum;
    };

    this.avgBill = this.totExp / this.bills.length;
  }

}
