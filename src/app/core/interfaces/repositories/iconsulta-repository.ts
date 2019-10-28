import {
  ConsultaCivilModel,
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel
} from '../../domain/entity/models';
import { Observable } from 'rxjs';

export abstract class IConsultaRepository {
  abstract consultaCivil(body: ConsultaCivilModel): Observable<ArrayBuffer>;
  abstract consultaJuridica(body: ConsultaJuridicaModel): Observable<ArrayBuffer>;
  abstract consultaProcessos(body: ConsultaProcessosModel): Observable<ArrayBuffer>;
  abstract consultaAutomotiva(): Observable<ConsultaAutomotivaModel>;
  abstract consultaCriminal(): Observable<ConsultaCriminalModel>;
}
