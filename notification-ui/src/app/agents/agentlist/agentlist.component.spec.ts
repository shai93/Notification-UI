import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgentslistComponent } from './agentlist.component';

describe('AgentslistComponent', () => {
  let component: AgentslistComponent;
  let fixture: ComponentFixture<AgentslistComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ AgentslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should  create', () => {
    httpClient = TestBed.get(HttpClient);
    expect(httpClient).toBeTruthy();
   });

   let app: AgentslistComponent;



  it('getagentslist not to be empty', () => {
    component.getAgentsList();
    expect(component.getAgentsList()).not.toBeNull();
  });

});
