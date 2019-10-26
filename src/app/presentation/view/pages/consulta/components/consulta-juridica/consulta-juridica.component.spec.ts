import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaJuridicaComponent } from './consulta-juridica.component';

describe('ConsultaJuridicaComponent', () => {
  let component: ConsultaJuridicaComponent;
  let fixture: ComponentFixture<ConsultaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
