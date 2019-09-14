import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BaseModule } from './base/base.module';
import { PagesComponent } from './pages.component';
import { LoginModule } from './login/login.module';
import { PesquisaModule } from './pesquisa/pesquisa.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
    LoginModule,
    PesquisaModule,
    RelatorioModule,
    ChatbotModule,
  ]
})
export class PagesModule { }
