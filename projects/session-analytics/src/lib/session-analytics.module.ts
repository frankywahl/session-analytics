import { NgModule } from '@angular/core';
import { SessionAnalyticsComponent } from './session-analytics.component';
import { NpsComponent } from './components/nps/nps.component';

@NgModule({
  declarations: [SessionAnalyticsComponent, NpsComponent],
  imports: [
  ],
  exports: [SessionAnalyticsComponent]
})
export class SessionAnalyticsModule { }
