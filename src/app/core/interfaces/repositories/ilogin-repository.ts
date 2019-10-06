import { Observable } from 'rxjs';
import { LoginModel, LoginResponseModel } from '../../domain/entity';

export abstract class ILoginRepository {
  abstract login(body: LoginModel): Observable<LoginResponseModel>;
  abstract logoff(body: LoginModel): Observable<LoginResponseModel>;
}
