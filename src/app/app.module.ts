import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './presentation/view/base/base.component';
import { ChatbotComponent } from './presentation/view/pages/chatbot/chatbot.component';
import { RelatorioComponent } from './presentation/view/pages/relatorio/relatorio.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ChatbotComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
