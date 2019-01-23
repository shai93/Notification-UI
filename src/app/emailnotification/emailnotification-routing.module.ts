import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailnotificationComponent } from './emailnotification.component';

/**
 * set default routing
 */
const routes: Routes = [
  {
    path: '',
    component: EmailnotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailnotificationRoutingModule { }