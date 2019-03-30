import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DueComponent } from './due.component';
import { DueRoutingModule } from './due-routing.module';

@NgModule({
  declarations: [DueComponent],
  imports: [
    CommonModule,
    DueRoutingModule
  ]
})
export class DueModule { }
