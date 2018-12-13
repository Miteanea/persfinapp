import { Component } from '@angular/core';
import { MiscUrls } from './misc-urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersFinAppAng';
  private imgs = new MiscUrls();

  getNameOfTheBeast(id: number): string{
    return `${id} the Name of The Beast!!!... (C) Slayer`
  }
}
