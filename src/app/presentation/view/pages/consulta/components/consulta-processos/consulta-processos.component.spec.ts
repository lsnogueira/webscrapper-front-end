import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProcessosComponent } from './consulta-processos.component';

describe('ConsultaProcessosComponent', () => {
  let component: ConsultaProcessosComponent;
  let fixture: ComponentFixture<ConsultaProcessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaProcessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
