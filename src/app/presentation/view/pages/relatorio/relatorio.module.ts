import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';
import { BaseModule } from '../../base/base.module';



@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    RelatorioComponent,
  ]
})
export class RelatorioModule { }
