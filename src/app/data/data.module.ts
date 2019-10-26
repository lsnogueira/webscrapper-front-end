import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILoginRepository, IConsultaRepository } from '../core/interfaces';
import { LoginRepositoryService, ConsultaRepositoryService } from './repositories';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: ILoginRepository, useClass: LoginRepositoryService },
    { provide: IConsultaRepository, useClass: ConsultaRepositoryService },
  ]
})
export class DataModule { }
