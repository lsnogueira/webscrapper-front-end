import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILoginUsecase } from './interfaces';
import { LoginUsecaseService } from './usecases';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ILoginUsecase, useClass: LoginUsecaseService }
  ]
})
export class CoreModule { }
