import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DailyworkreportComponent } from './dailyworkreport/dailyworkreport.component';

@NgModule({
  declarations: [DailyworkreportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
