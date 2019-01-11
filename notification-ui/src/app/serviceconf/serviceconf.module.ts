
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ServiceconfComponent } from './serviceconf.component';
import { ServiceconfRoutingModule } from './serviceconf-routing.module';
import { FormioModule } from 'angular-formio';

@NgModule({
    imports: [CommonModule, RouterModule, ServiceconfRoutingModule,FormioModule],
    exports: [ServiceconfComponent],
    declarations: [ServiceconfComponent],
    providers: []
})
export class ServiceconfModule {
}
