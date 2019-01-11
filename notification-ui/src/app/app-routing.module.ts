import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ServiceconfComponent } from './serviceconf/serviceconf.component';
import { AgentsComponent } from './agents/agents.component';
import { EmailnotificationComponent } from './emailnotification/emailnotification.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: "",
    component: AppComponent,
    children: [
      {
        path:"",
        redirectTo:"/notification-control-panel/emailnotification",
        pathMatch:'full'
      }, 
      {
        path: 'notification-control-panel',
        loadChildren: "./emailnotification/emailnotification.module#EmailnotificationModule"
      },
      {
        path: 'notification-control-panel/agents',
        loadChildren: "./agents/agents.module#AgentsModule"
      },
      {
        path: 'notification-control-panel/serviceconf',
        loadChildren: "./serviceconf/serviceconf.module#ServiceconfModule"
      },
      {
        path: 'notification-control-panel/emailnotification',
        loadChildren: "./emailnotification/emailnotification.module#EmailnotificationModule"
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
