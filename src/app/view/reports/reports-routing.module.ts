import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyworkreportComponent } from './dailyworkreport/dailyworkreport.component';

const routes: Routes = [
  { path: '', redirectTo: 'dailyworkreport', pathMatch: 'full' },
  { path: 'dailyworkreport', component: DailyworkreportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
