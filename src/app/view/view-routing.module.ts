import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: DefaultLayoutComponent, data: {
      title: 'Home'
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'dailyworks', loadChildren: './dailyworks/dailyworks.module#DailyworksModule' },
      { path: 'damage', loadChildren: './damage/damage.module#DamageModule' },
      { path: 'damagerepair', loadChildren: './damagerepair/damagerepair.module#DamagerepairModule' },
      { path: 'due', loadChildren: './due/due.module#DueModule' },
      { path: 'insurance', loadChildren: './insurance/insurance.module#InsuranceModule' },
      { path: 'onlinebooking', loadChildren: './onlinebooking/onlinebooking.module#OnlinebookingModule' },
      { path: 'otherexpense', loadChildren: './otherexpense/otherexpense.module#OtherexpenseModule' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
      { path: 'salary', loadChildren: './salary/salary.module#SalaryModule' },
      { path: 'services', loadChildren: './services/services.module#ServicesModule' },
      { path: 'spareparts', loadChildren: './spareparts/spareparts.module#SparepartsModule' },
      { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule' },
      { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
    ],
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
