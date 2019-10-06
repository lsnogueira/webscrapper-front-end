import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILoginRepository } from '../core/interfaces';
import { LoginRepositoryService } from './repositories';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ILoginRepository, useClass: LoginRepositoryService }
  ]
})
export class DataModule { }
