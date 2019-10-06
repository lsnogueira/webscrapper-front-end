import { TestBed } from '@angular/core/testing';

import { LoginUsecaseService } from './login-usecase.service';

describe('LoginUsecaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginUsecaseService = TestBed.get(LoginUsecaseService);
    expect(service).toBeTruthy();
  });
});
