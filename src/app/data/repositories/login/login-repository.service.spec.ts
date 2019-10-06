import { TestBed } from '@angular/core/testing';

import { LoginRepositoryService } from './login-repository.service';

describe('LoginRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRepositoryService = TestBed.get(LoginRepositoryService);
    expect(service).toBeTruthy();
  });
});
