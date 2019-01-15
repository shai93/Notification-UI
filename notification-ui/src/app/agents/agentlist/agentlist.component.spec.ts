import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentslistComponent } from './agentlist.component';

describe('AgentsComponent', () => {
  let component: AgentslistComponent;
  let fixture: ComponentFixture<AgentslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
