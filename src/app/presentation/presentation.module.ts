import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConsultaController } from '../core/interfaces';
import { ConsultaControllerService } from './controllers/consulta/consulta-controller.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: IConsultaController, useClass: ConsultaControllerService }
  ]
})
export class PresentationModule { }
