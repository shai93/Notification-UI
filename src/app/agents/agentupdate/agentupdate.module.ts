
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AgentupdateComponent } from './agentupdate.component';
import { AgentupdateRoutingModule } from './agentupdate-routing.module';
import { FormioModule } from 'angular-formio';

@NgModule({
    imports: [CommonModule,RouterModule,AgentupdateRoutingModule,FormioModule],
    exports: [AgentupdateComponent],
    declarations: [AgentupdateComponent],
    providers: []
})
export class AgentupdateModule {
}
