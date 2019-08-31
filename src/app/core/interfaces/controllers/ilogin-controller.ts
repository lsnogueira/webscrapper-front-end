import { LoginResponseModel, LoginModel } from './../../domain/entity';
import { Observable } from 'rxjs';

export abstract class ILoginController {
  abstract login(body: LoginModel): Observable<LoginResponseModel>;
  abstract logoff(body: LoginModel): Observable<LoginResponseModel>;
}
