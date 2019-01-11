import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceconfComponent } from './serviceconf.component';


const routes: Routes = [
  {
    path: '',
    component: ServiceconfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceconfRoutingModule { }