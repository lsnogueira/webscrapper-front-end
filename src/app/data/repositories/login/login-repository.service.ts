import { Injectable } from '@angular/core';
import { ILoginRepository } from 'src/app/core/interfaces';
import { LoginModel, LoginResponseModel } from 'src/app/core/domain/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// aqui faremos as requisições http
export class LoginRepositoryService implements ILoginRepository {

  constructor() {}

  login(body: LoginModel): Observable<LoginResponseModel> {
    throw new Error('Method not implemented.');
  }
  logoff(body: LoginModel): Observable<LoginResponseModel> {
    throw new Error('Method not implemented.');
  }
}
