import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillDisplayComponent } from './bill-display/bill-display.component';
import { GenStatsComponent } from './gen-stats/gen-stats.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

import {MiscUrls} from './misc-urls'

@NgModule({
  declarations: [
    AppComponent,
    BillDisplayComponent,
    GenStatsComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
