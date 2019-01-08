import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioModule } from 'angular-formio';
import { AgentsComponent } from './agents/agents.component';
import { ServiceconfComponent } from './serviceconf/serviceconf.component';
import { EmailnotificationComponent } from './emailnotification/emailnotification.component';
import {ApiService} from './api.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    ServiceconfComponent,
    EmailnotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
