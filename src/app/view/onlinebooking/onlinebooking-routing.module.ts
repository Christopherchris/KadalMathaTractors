import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinebookingComponent } from './onlinebooking.component';

const routes: Routes = [
    {
        path: '', component: OnlinebookingComponent, data: {
            title: 'Online Booking'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnlinebookingRoutingModule { }
