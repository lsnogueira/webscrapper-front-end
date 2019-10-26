import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IConsultaRepository } from 'src/app/core/interfaces';
import {
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel
} from 'src/app/core/domain/entity/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRepositoryService implements IConsultaRepository {

  constructor(
    private http: HttpClient
  ) {}

  getConsultaCivil(): Observable<ArrayBuffer> {
    return this.http.get<ArrayBuffer>(`${environment.serverUrl}/civil`, {
      responseType: 'arraybuffer' as 'json'
    });
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
