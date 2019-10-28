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
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRepositoryService implements IConsultaRepository {
  constructor(private http: HttpClient) {}

  getConsultaCivil(body: any): Observable<ArrayBuffer> {
    return this.http
      .post<ArrayBuffer>(`${environment.serverUrl}/civil`, body, {
        responseType: 'arraybuffer' as 'json'
      })
      .pipe(retry(3));
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
