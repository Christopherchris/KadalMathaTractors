import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparepartsComponent } from './spareparts.component';
import { SparepartsRoutingModule } from './spareparts-routing.module';

@NgModule({
  declarations: [SparepartsComponent],
  imports: [
    CommonModule,
    SparepartsRoutingModule
  ]
})
export class SparepartsModule { }
