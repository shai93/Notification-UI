import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
const routes: Routes = [
  {
    path:'',
    component:FirstComponent
  },
  {
    path:'notification-control-panel',
    component:FirstComponent
  },
  {
    path:'notification-control-panel/second',
    component:SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
