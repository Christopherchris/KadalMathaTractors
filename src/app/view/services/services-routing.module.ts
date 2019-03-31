import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const routes: Routes = [
    {
        path: '', component: ServicesComponent, data: {
            title: 'Services'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
