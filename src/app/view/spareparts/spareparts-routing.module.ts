import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SparepartsComponent } from './spareparts.component';

const routes: Routes = [
    { path: '', component: SparepartsComponent, data: {
        title: 'Spare parts'
      }, }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SparepartsRoutingModule { }
