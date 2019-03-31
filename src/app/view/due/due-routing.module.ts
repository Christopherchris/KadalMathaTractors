import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DueComponent } from './due.component';

const routes: Routes = [
    {
        path: '', component: DueComponent, data: {
            title: 'Due'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DueRoutingModule { }
