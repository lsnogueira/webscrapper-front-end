import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'consulta', component: BaseComponent },
      { path: 'relatorio', component: RelatorioComponent },
      { path: 'chatbot', component: ChatbotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
