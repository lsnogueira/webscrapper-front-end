import { TestBed } from '@angular/core/testing';

import { ConsultaUsecaseService } from './consulta-usecase.service';

describe('ConsultaUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaUsecaseService = TestBed.get(ConsultaUsecaseService);
    expect(service).toBeTruthy();
  });
});
