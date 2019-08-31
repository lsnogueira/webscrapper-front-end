import { Injectable } from '@angular/core';
import { ILoginUsecase, ILoginRepository } from '../../interfaces';
import { LoginModel, LoginResponseModel } from '../../domain/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUsecaseService implements ILoginUsecase {
  constructor(
    private loginRepository: ILoginRepository
  ) {}

  login(body: LoginModel): Observable<LoginResponseModel> {
    return this.loginRepository.login(body);
  }

  logoff(body: LoginModel): Observable<LoginResponseModel> {
    return this.loginRepository.logoff(body);
  }
}
