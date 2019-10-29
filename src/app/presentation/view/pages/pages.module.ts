import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { BaseModule } from './base/base.module';
import { PagesComponent } from './pages.component';
import { LoginModule } from './login/login.module';
import { ConsultaModule } from './consulta/consulta.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [PagesComponent, MobileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    BaseModule,
    LoginModule,
    RelatorioModule,
    ConsultaModule,
    ChatbotModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
