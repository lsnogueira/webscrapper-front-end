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
  consultaProcessos(): Observable<ConsultaProcessosModel> {
    return this.consultaUsecase.consultaProcessos();
  }
  consultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    return this.consultaUsecase.consultaAutomotiva();
  }
  consultaCriminal(): Observable<ConsultaCriminalModel> {
    return this.consultaUsecase.consultaCriminal();
  }
}
