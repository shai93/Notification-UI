
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AgentslistComponent } from './agentlist.component';
import { AgentslistRoutingModule } from './agentlist-routing.module';
import { FormioModule } from 'angular-formio';

@NgModule({
    imports: [CommonModule, RouterModule, AgentslistRoutingModule,FormioModule],
    exports: [AgentslistComponent],
    declarations: [AgentslistComponent],
    providers: []
})
export class AgentslistModule {
}
