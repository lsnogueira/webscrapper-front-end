import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IConsultaUsecase } from '../../interfaces/usecases/iconsulta-usecase';
import {
  ConsultaCivilModel,
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel
} from '../../domain/entity/models';
import { IConsultaRepository } from '../../interfaces/repositories/iconsulta-repository';

@Injectable({
  providedIn: 'root'
})
export class ConsultaUsecaseService implements IConsultaUsecase {

  constructor(
    private consultaRepository: IConsultaRepository
  ) {}

  getConsultaCivil(): Observable<any> {
    return this.consultaRepository.getConsultaCivil();
  }
  getConsultaJuridica(): Observable<ConsultaJuridicaModel> {
    return this.consultaRepository.getConsultaJuridica();
  }
  getConsultaProcessos(): Observable<ConsultaProcessosModel> {
    return this.consultaRepository.getConsultaProcessos();
  }
  getConsultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    return this.consultaRepository.getConsultaAutomotiva();
  }
  getConsultaCriminal(): Observable<ConsultaCriminalModel> {
    return this.consultaRepository.getConsultaCriminal();
  }
}
