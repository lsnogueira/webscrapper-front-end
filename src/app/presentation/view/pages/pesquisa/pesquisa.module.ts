import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaComponent } from './pesquisa.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { BaseModule } from '../base/base.module';


@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    BaseModule
  ]
})
export class PesquisaModule { }
