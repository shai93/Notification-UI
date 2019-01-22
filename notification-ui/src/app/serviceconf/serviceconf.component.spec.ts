import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceconfComponent } from './serviceconf.component';
import { FormioModule } from 'angular-formio';

describe('ServiceconfComponent', () => {
  let component: ServiceconfComponent;
  let fixture: ComponentFixture<ServiceconfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormioModule],
      declarations: [ ServiceconfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
