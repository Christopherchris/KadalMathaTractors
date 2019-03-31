import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalaryComponent } from './salary.component';

const routes: Routes = [
    {
        path: '', component: SalaryComponent, data: {
            title: 'Salary'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalaryRoutingModule { }
