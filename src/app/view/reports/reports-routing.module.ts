import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyworkreportComponent } from './dailyworkreport/dailyworkreport.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports'
    },
    children: [
      {
        path: '',
        redirectTo: 'dailyworkreport'
      },
      {
        path: 'dailyworkreport',
        component: DailyworkreportComponent,
        data: {
          title: 'Daily Work Report'
        }
      },
    ]
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
