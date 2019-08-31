import { LoginModel, LoginResponseModel } from '../../domain/entity';
import { Observable } from 'rxjs';

export abstract class ILoginUsecase {
  abstract login(body: LoginModel): Observable<LoginResponseModel>;
  abstract logoff(body: LoginModel): Observable<LoginResponseModel>;
}
