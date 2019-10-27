import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';
import { BaseModule } from '../base/base.module';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    CommonModule,
    BaseModule,
    AppMaterialModule
  ],
  exports: [
    RelatorioComponent,
  ]
})
export class RelatorioModule { }
