import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherexpenseComponent } from './otherexpense.component';

const routes: Routes = [
    { path: '', component: OtherexpenseComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OtherexpenseRoutingModule { }
