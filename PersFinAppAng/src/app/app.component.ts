import { Component } from '@angular/core';
import { MiscUrls } from './misc-urls';
import { Repo } from "./repo";
import { Bill } from './Models/bill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersFinAppAng';

  private imgs = new MiscUrls();

  constructor(private repo : Repo){
  }

  saveBillComponent(bill: Bill){
    this.repo.createBill(bill);
  }

  getNameOfTheBeast(id: number): string{
    return `${id} the Name of The Beast!!!... (C) Slayer`
  }
}
