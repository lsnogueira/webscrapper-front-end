import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCriminalComponent } from './consulta-criminal.component';

describe('ConsultaCriminalComponent', () => {
  let component: ConsultaCriminalComponent;
  let fixture: ComponentFixture<ConsultaCriminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
