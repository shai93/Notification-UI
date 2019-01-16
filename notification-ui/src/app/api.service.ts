import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL  =  'https://breeze.accion.rocks/notification-ms/send';
  TEMPLATE_URL = 'https://breeze.accion.rocks/template-engine-api/api/v1';
  AGENT_POST_URL= "https://breeze.accion.rocks/notification-admin/admin/api/saveAgent";
  AGENT_GET_URL= "https://breeze.accion.rocks/notification-admin/admin/api/listAgents";

  constructor(private  http:  HttpClient) {}

  createEmailNotification(submission){
    return this.http.post(this.API_URL,submission);
  }

  createAgent(submission){
    return this.http.post(this.AGENT_POST_URL,submission);
  }

  getTemplates() {
    return this.http.get(this.TEMPLATE_URL);
  }

  getAgentsList(){
    return this.http.get(this.AGENT_GET_URL);
  }

}
