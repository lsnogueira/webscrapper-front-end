import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IConsultaRepository } from 'src/app/core/interfaces';
import {
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaAutomotivaModel,
  ConsultaCriminalModel,
  ConsultaCivilModel
} from 'src/app/core/domain/entity/models';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaRepositoryService implements IConsultaRepository {
  constructor(private http: HttpClient) {}

  consultaCivil(body: ConsultaCivilModel): Observable<ArrayBuffer> {
    return this.http
      .post<ArrayBuffer>(`${environment.serverUrl}/civil`, body, {
        responseType: 'arraybuffer' as 'json'
      })
      .pipe(retry(3));
  }
  consultaJuridica(body: ConsultaJuridicaModel): Observable<ArrayBuffer> {
    return this.http
      .post<ArrayBuffer>(`${environment.serverUrl}/juridica`, body, {
        responseType: 'arraybuffer' as 'json'
      })
      .pipe(retry(3));
  }
  consultaProcessos(body: ConsultaProcessosModel): Observable<ArrayBuffer> {
    return this.http
      .post<ArrayBuffer>(`${environment.serverUrl}/processo`, body, {
        responseType: 'arraybuffer' as 'json'
      })
      .pipe(retry(3));
  }
  consultaAutomotiva(): Observable<ConsultaAutomotivaModel> {
    throw new Error('Method not implemented.');
  }
  consultaCriminal(body: ConsultaCriminalModel): Observable<ArrayBuffer> {
    return this.http
      .get<ArrayBuffer>(`${environment.serverUrl}/criminal`, {
        responseType: 'arraybuffer' as 'json'
      })
      .pipe(retry(3));
  }
  getRelatorios(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}/relatorio`);
  }
  downloadFile(id: string): Observable<ArrayBuffer> {
    const params = new HttpParams()
      .append('id', id);
    return this.http.get<any>(`${environment.serverUrl}/relatorio`, { params });
  }
}
