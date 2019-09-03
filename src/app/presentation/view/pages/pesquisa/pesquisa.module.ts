import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pesquisa.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { BaseModule } from '../../base/base.module';
import { RelatorioModule } from '../relatorio/relatorio.module';
import { ChatbotModule } from '../chatbot/chatbot.module';


@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule,
    PesquisaRoutingModule,
    AppMaterialModule,
    BaseModule,
    RelatorioModule,
    ChatbotModule
  ]
})
export class PesquisaModule { }
