
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AgentsComponent } from './agents.component';
import { AgentsRoutingModule } from './agents-routing.module';
import { FormioModule } from 'angular-formio';

@NgModule({
    imports: [CommonModule, RouterModule, AgentsRoutingModule,FormioModule],
    exports: [AgentsComponent],
    declarations: [AgentsComponent],
    providers: []
})
export class AgentsModule {
}
