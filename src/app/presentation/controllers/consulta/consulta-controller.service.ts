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

  getConsultaCivil(): Observable<any> {
    return this.consultaUsecase.getConsultaCivil();
  }
  getConsultaJuridica(): Observable<ConsultaJuridicaModel> {
    return this.consultaUsecase.getConsultaJuridica();
  }
  getConsultaProcessos(): Observable<ConsultaProcessosModel> {
    return this.consultaUsecase.getConsultaProcessos();
  }
  getConsultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    return this.consultaUsecase.getConsultaAutomotiva();
  }
  getConsultaCriminal(): Observable<ConsultaCriminalModel> {
    return this.consultaUsecase.getConsultaCriminal();
  }
}
