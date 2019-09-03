import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../../base/base.module';
import { ChatbotComponent } from './chatbot.component';



@NgModule({
  declarations: [ChatbotComponent],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    ChatbotComponent
  ]
})
export class ChatbotModule { }
