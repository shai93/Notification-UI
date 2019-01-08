import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceconfComponent} from './serviceconf/serviceconf.component';
import {AgentsComponent} from './agents/agents.component';
import { EmailnotificationComponent } from './emailnotification/emailnotification.component';

const routes: Routes = [
  {
    path:'',
    component:EmailnotificationComponent
  },
  {
    path:'notification-control-panel',
    component:EmailnotificationComponent
  },
  {
    path:'notification-control-panel/agents',
    component:AgentsComponent
  },
  {
    path:'notification-control-panel/serviceconfig',
    component:ServiceconfComponent
  },
  {
    path:'notification-control-panel/emailnotification',
    component:EmailnotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
