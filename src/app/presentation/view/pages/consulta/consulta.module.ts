import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from 'src/app/app-material.module';

import { ConsultaComponent } from './consulta.component';
import { BaseModule } from '../base/base.module';
import { ConsultaCivilComponent } from './components/consulta-civil/consulta-civil.component';
import { ConsultaJuridicaComponent } from './components/consulta-juridica/consulta-juridica.component';
import { ConsultaProcessosComponent } from './components/consulta-processos/consulta-processos.component';
import { ConsultaAutomotivaComponent } from './components/consulta-automotiva/consulta-automotiva.component';
import { ConsultaCriminalComponent } from './components/consulta-criminal/consulta-criminal.component';
import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ConsultaComponent,
    ConsultaCivilComponent,
    ConsultaJuridicaComponent,
    ConsultaProcessosComponent,
    ConsultaAutomotivaComponent,
    ConsultaCriminalComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BaseModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class ConsultaModule {}
