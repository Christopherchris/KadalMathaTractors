import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageComponent } from './damage.component';
import { DamageRoutingModule } from './damage-routing.module';

@NgModule({
  declarations: [DamageComponent],
  imports: [
    CommonModule,
    DamageRoutingModule
  ]
})
export class DamageModule { }
