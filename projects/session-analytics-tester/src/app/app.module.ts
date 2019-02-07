import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionAnalyticsModule } from 'session-analytics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SessionAnalyticsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
