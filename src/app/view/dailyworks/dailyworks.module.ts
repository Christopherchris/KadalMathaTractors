import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyworksComponent } from './dailyworks.component';
import { DailyworksRoutingModule } from './dailyworks-routing.module';

@NgModule({
  declarations: [DailyworksComponent],
  imports: [
    CommonModule,
    DailyworksRoutingModule
  ]
})
export class DailyworksModule { }
