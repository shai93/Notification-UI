import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * create notification url
   */
  API_URL = 'https://breeze.accion.rocks/notification-ms/send';
  /**
   * template url
   */
  TEMPLATE_URL = 'https://breeze.accion.rocks/template-engine-api/api/v1';
  /**
   * create agent url
   */
  AGENT_POST_URL = "https://breeze.accion.rocks/notification-admin/admin/api/saveAgent";
  /**
   * get agent url
   */
  AGENT_GET_URL = "https://breeze.accion.rocks/notification-admin/admin/api/listAgents";
  /**
   * update agent url
   */
  AGENT_UPDATE_URL = "https://breeze.accion.rocks/notification-admin/admin/api/updateAgent";

  /**
   * create instance of ApiService
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * create notification
   * @param submission 
   */
  createNotification(submission) {
    return this.http.post(this.API_URL, submission);
  }

  /**
   * create agent
   * @param submission 
   */
  createAgent(submission) {
    return this.http.post(this.AGENT_POST_URL, submission);
  }

  /**
   * get all templates
   */
  getTemplates() {
    return this.http.get(this.TEMPLATE_URL);
  }

  /**
   * get all agents
   */
  getAgentsList() {
    return this.http.get(this.AGENT_GET_URL);
  }

  /**
   * get particular agent based on alertname
   * @param alertName 
   */
  getAgent(alertName: any) {
    return this.http.get(this.AGENT_GET_URL, {
      params: { alertName: alertName }
    });
  }

  /**
   * update particular agent
   * @param submission 
   */
  updateAgent(submission) {
    return this.http.put(this.AGENT_UPDATE_URL, submission);
  }

}
