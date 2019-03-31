import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DamagerepairComponent } from './damagerepair.component';

const routes: Routes = [
    {
        path: '', component: DamagerepairComponent, data: {
            title: 'Damage Repair'
        },
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DamagerepairRoutingModule { }
