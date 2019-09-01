import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
