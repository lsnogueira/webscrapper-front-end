import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pesquisa.component';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule,
    PesquisaRoutingModule,
    AppMaterialModule
  ]
})
export class PesquisaModule { }
