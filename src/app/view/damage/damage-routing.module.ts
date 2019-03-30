import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DamageComponent } from './damage.component';

const routes: Routes = [
    { path: '', component: DamageComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DamageRoutingModule { }
