import { TestBed } from '@angular/core/testing';

import { ConsultaControllerService } from './consulta-controller.service';

describe('ConsultaControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaControllerService = TestBed.get(ConsultaControllerService);
    expect(service).toBeTruthy();
  });
});
