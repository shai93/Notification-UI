import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentslistComponent } from './agentlist.component';

/**
 * set default routing
 */
const routes: Routes = [
  {
    path: '',
    component: AgentslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentslistRoutingModule { }