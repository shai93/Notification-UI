import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {

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


  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ],
    providers: [ApiService]
  }));

  it('should  create', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should  get templates', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getTemplates().subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  get templates', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getTemplates().subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  create agent', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.createAgent(submission).subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });

  it('should  get agent', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getAgent('SAMPLETEMPLATE').subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  get agentslist', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getAgentsList().subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  update agent', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.updateAgent(submission).subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });

});
