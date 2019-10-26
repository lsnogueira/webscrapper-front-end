import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCivilComponent } from './consulta-civil.component';

describe('ConsultaCivilComponent', () => {
  let component: ConsultaCivilComponent;
  let fixture: ComponentFixture<ConsultaCivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
