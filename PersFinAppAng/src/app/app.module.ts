import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillDisplayComponent } from './bill-display/bill-display.component';
import { GenStatsComponent } from './gen-stats/gen-stats.component';

import {MiscUrls} from './misc-urls';
import { BillCreationComponent } from './bill-creation/bill-creation.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component'


@NgModule({
  declarations: [
    AppComponent,
    BillDisplayComponent,
    GenStatsComponent,
    BillCreationComponent,
    ExpenseInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
