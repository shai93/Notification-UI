import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormioModule } from 'angular-formio';
import { ActivatedRoute } from "@angular/router";
import { AgentupdateComponent } from './agentupdate.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { of } from 'rxjs/observable/of';
// import { Observable } from 'rxjs/Observable';
import { Observable, of, throwError } from 'rxjs';

describe('AgentsupdateComponent', () => {
  let component: AgentupdateComponent;
  let fixture: ComponentFixture<AgentupdateComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const route = ({ params: of({ alertName: 'SAMPLETEMPLATE' }) } as any) as ActivatedRoute;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormioModule, HttpClientTestingModule],
      declarations: [AgentupdateComponent],
      providers: [{ provide: ActivatedRoute, useValue: route }],
     
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should  create', () => {
    httpClient = TestBed.get(HttpClient);
    expect(httpClient).toBeTruthy();
  });
});
