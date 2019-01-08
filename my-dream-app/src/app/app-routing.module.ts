import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {
    path:'',
    component:ThirdComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'third',
    component:ThirdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
