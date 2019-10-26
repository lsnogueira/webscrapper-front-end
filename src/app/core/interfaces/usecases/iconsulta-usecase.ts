import {
  ConsultaCivilModel,
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel
} from '../../domain/entity/models';
import { Observable } from 'rxjs';

export abstract class IConsultaUsecase {
  abstract getConsultaCivil(): Observable<ArrayBuffer>;
  abstract getConsultaJuridica(): Observable<ConsultaJuridicaModel>;
  abstract getConsultaProcessos(): Observable<ConsultaProcessosModel>;
  abstract getConsultaAutomotiva(): Observable<ConsultaAutomotivaModel>;
  abstract getConsultaCriminal(): Observable<ConsultaCriminalModel>;
}
