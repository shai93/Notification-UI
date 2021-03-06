import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentupdateComponent } from './agentupdate.component';

/**
 * set default routing
 */
const routes: Routes = [
  {
    path: '',
    component: AgentupdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentupdateRoutingModule { }