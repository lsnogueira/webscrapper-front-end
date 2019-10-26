import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAutomotivaComponent } from './consulta-automotiva.component';

describe('ConsultaAutomotivaComponent', () => {
  let component: ConsultaAutomotivaComponent;
  let fixture: ComponentFixture<ConsultaAutomotivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAutomotivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAutomotivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
