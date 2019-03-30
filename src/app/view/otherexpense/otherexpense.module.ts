import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherexpenseComponent } from './otherexpense.component';
import { OtherexpenseRoutingModule } from './otherexpense-routing.module';

@NgModule({
  declarations: [OtherexpenseComponent],
  imports: [
    CommonModule,
    OtherexpenseRoutingModule
  ]
})
export class OtherexpenseModule { }
