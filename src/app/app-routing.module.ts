import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from './containers/error/p404/p404.component';
import { P500Component } from './containers/error/p500/p500.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', loadChildren: './containers/containers.module#ContainersModule', data: {
      title: 'Login'
    },
  },
  {
    path: 'main', loadChildren: './view/view.module#ViewModule'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  { path: '**', component: P404Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
