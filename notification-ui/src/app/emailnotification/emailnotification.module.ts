
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmailnotificationComponent } from './emailnotification.component';
import { EmailnotificationRoutingModule } from './emailnotification-routing.module';
import { FormioModule } from 'angular-formio';

@NgModule({
    imports: [CommonModule, RouterModule, EmailnotificationRoutingModule,FormioModule],
    exports: [EmailnotificationComponent],
    declarations: [EmailnotificationComponent],
    providers: []
})
export class EmailnotificationModule {
}
