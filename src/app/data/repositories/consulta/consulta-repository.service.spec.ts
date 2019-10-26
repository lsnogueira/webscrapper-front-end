import { TestBed } from '@angular/core/testing';

import { ConsultaRepositoryService } from './consulta-repository.service';

describe('ConsultaRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaRepositoryService = TestBed.get(ConsultaRepositoryService);
    expect(service).toBeTruthy();
  });
});
