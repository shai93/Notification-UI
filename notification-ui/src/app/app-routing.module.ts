import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: "",
    component: AppComponent,
    children: [
      {
        path:"",
        redirectTo:"/notification-control-panel/notificationdemo",
        pathMatch:'full'
      }, 
      {
        path: 'notification-control-panel',
        loadChildren: "./emailnotification/emailnotification.module#EmailnotificationModule"
      },
      {
        path: 'notification-control-panel/createagent',
        loadChildren: "./agents/agents.module#AgentsModule"
      },
      {
        path: 'notification-control-panel/agentslist',
        loadChildren: "./agents/agentlist/agentlist.module#AgentslistModule"
      },
      {
        path: 'notification-control-panel/updateagent',
        loadChildren: "./agents/agentupdate/agentupdate.module#AgentupdateModule"
      },
      {
        path: 'notification-control-panel/updateagent/:alertName',
        loadChildren: "./agents/agentupdate/agentupdate.module#AgentupdateModule"
      },
      {
        path: 'notification-control-panel/serviceconf',
        loadChildren: "./serviceconf/serviceconf.module#ServiceconfModule"
      },
      {
        path: 'notification-control-panel/notificationdemo',
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
