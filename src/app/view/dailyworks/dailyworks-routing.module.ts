import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyworksComponent } from './dailyworks.component';

const routes: Routes = [
    { path: '', component: DailyworksComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyworksRoutingModule { }
