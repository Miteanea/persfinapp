import { Component, OnInit } from '@angular/core';
import {Repo} from '../repo';
import { Bill } from '../bill';

@Component({
  selector: 'app-bill-display',
  templateUrl: './bill-display.component.html',
  styleUrls: ['./bill-display.component.css']
})
export class BillDisplayComponent implements OnInit {
  constructor(private repo : Repo) { }

  bills : Bill[]

  ngOnInit() {
    this.bills = this.repo.getBills();
  }

}
