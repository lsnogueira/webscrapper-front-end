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

  consultaCivil(body: ConsultaCivilModel): Observable<ArrayBuffer> {
    return this.consultaRepository.consultaCivil(body);
  }
  consultaJuridica(body: ConsultaJuridicaModel): Observable<ArrayBuffer> {
    return this.consultaRepository.consultaJuridica(body);
  }
  consultaProcessos(body: ConsultaProcessosModel): Observable<ArrayBuffer> {
    return this.consultaRepository.consultaProcessos(body);
  }
  consultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    return this.consultaRepository.consultaAutomotiva();
  }
  consultaCriminal(body: ConsultaCriminalModel): Observable<ArrayBuffer> {
    return this.consultaRepository.consultaCriminal(body);
  }
  getRelatorios(page: number): Observable<any>{
    return this.consultaRepository.getRelatorios(page);
  }
}
