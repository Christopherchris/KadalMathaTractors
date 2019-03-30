import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamagerepairComponent } from './damagerepair.component';
import { DamagerepairRoutingModule } from './damagerepair-routing.module';

@NgModule({
  declarations: [DamagerepairComponent],
  imports: [
    CommonModule,
    DamagerepairRoutingModule
  ]
})
export class DamagerepairModule { }
