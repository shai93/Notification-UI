import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AgentsComponent } from './agents.component';
import { FormioModule } from 'angular-formio';
import { ApiService } from '../api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



describe('AgentsComponent', () => {
  let component: AgentsComponent;
  let fixture: ComponentFixture<AgentsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  let submission =
  {
    "alertName": "leakAlert",
    "templateName": "sampleTemplateeeee",
    "templateParams": {
      "fname": "Pooja",
      "lname": "Salot"
    },
    "emailConfig": {
      "type": "gmail",
      "host": "smtp.gmail.com",
      "port": 587,
      "username": "notify.micro.service@gmail.com",
      "password": "notify@2018",
      "debug_to_email": "pooja.salot@accionlabs.com",
      "secure": "false",
      "security": "STARTTLS",
      "service": "gmail",
      "from": "notify.micro.service@gmail.com",
      "replyTo": "notify.micro.service@gmail.com"
    }

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormioModule, HttpClientTestingModule],
      declarations: [AgentsComponent],
      providers: [ApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should  create', () => {
    httpClient = TestBed.get(HttpClient);
    expect(httpClient).toBeTruthy();
  });

  it('should  create and test apiservice dependency', () => {
    apiService = TestBed.get(ApiService);
    expect(apiService).toBeTruthy();
  });

  it('should  submit agent form', () => {
    apiService = TestBed.get(ApiService);
    apiService.createAgent(submission).subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });


});
