import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IConsultaController, IConsultaUsecase } from 'src/app/core/interfaces';
import {
  ConsultaCivilModel,
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel
} from 'src/app/core/domain/entity/models';

@Injectable({
  providedIn: 'root'
})
export class ConsultaControllerService implements IConsultaController {

  constructor(
    private consultaUsecase: IConsultaUsecase,
  ) {}

  consultaCivil(body: ConsultaCivilModel): Observable<ArrayBuffer> {
    return this.consultaUsecase.consultaCivil(body);
  }
  consultaJuridica(body: ConsultaJuridicaModel): Observable<ArrayBuffer> {
    return this.consultaUsecase.consultaJuridica(body);
  }
  consultaProcessos(body: ConsultaProcessosModel): Observable<ArrayBuffer> {
    return this.consultaUsecase.consultaProcessos(body);
  }
  consultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    return this.consultaUsecase.consultaAutomotiva();
  }
  consultaCriminal(body: ConsultaCriminalModel): Observable<ArrayBuffer> {
    return this.consultaUsecase.consultaCriminal(body);
  }
}
