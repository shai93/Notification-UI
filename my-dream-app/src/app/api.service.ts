import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_URL  =  'http://breeze.accion.rocks/notification-ms/send';

  constructor(private  http:  HttpClient) {}

  createEmailNotification(submission){
    return this.http.post(this.API_URL,submission);
  }


}
