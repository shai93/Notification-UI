import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { EmailnotificationComponent } from './emailnotification.component';
import { FormioModule } from 'angular-formio';

describe('EmailnotificationComponent', () => {
  let component: EmailnotificationComponent;
  let fixture: ComponentFixture<EmailnotificationComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormioModule,HttpClientTestingModule],
      declarations: [ EmailnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should  create', () => {
    httpClient = TestBed.get(HttpClient);
    expect(httpClient).toBeTruthy();
   });
});
