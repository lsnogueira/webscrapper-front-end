import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PagesComponent } from './pages.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'consulta', component: PesquisaComponent },
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
