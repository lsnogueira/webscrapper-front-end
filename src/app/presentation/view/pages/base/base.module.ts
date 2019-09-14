import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BaseComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule
  ],
  exports: [
    BaseComponent
  ]
})
export class BaseModule { }
