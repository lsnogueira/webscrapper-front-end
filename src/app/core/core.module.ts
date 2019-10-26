import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILoginUsecase, IConsultaUsecase } from './interfaces';
import { LoginUsecaseService, ConsultaUsecaseService } from './usecases';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ILoginUsecase, useClass: LoginUsecaseService },
    { provide: IConsultaUsecase, useClass: ConsultaUsecaseService },
  ]
})
export class CoreModule { }
