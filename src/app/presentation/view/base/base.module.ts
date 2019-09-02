import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
