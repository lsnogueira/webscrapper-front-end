import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PagesComponent } from './pages.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { MobileComponent } from './mobile/mobile.component';

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
      { path: 'consulta', component: ConsultaComponent },
      { path: 'relatorio', component: RelatorioComponent },
      { path: 'chatbot', component: ChatbotComponent },
      { path: 'mobile', component: MobileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
