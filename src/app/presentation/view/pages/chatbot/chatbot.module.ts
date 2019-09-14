import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { BaseModule } from '../../base/base.module';
=======
import { BaseModule } from '../base/base.module';
>>>>>>> router-refact
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
