import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IConsultaRepository } from 'src/app/core/interfaces';
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
export class ConsultaRepositoryService implements IConsultaRepository {

  constructor(
    private http: HttpClient
  ) {}

  getConsultaCivil(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get<any>('http://localhost:3000/civil', { responseType: 'arraybuffer' as 'json'});
  }
  getConsultaJuridica(): Observable<ConsultaJuridicaModel> {
    throw new Error('Method not implemented.');
  }
  getConsultaProcessos(): Observable<ConsultaProcessosModel> {
    throw new Error('Method not implemented.');
  }
  getConsultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    throw new Error('Method not implemented.');
  }
  getConsultaCriminal(): Observable<ConsultaCriminalModel> {
    throw new Error('Method not implemented.');
  }
}
