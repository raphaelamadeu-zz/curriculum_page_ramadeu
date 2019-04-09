import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadspaceComponent } from './leadspace.component';

describe('LeadspaceComponent', () => {
  let component: LeadspaceComponent;
  let fixture: ComponentFixture<LeadspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
