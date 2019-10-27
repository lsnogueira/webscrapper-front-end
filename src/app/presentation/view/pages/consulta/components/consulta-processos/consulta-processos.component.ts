import { Component, OnInit } from '@angular/core';
import { States } from 'src/app/presentation/shared/enums';

const STATES = States;
@Component({
  selector: 'app-consulta-processos',
  templateUrl: './consulta-processos.component.html',
  styleUrls: ['./consulta-processos.component.scss']
})
export class ConsultaProcessosComponent implements OnInit {

  states = Object.values(STATES);

  constructor() { }

  ngOnInit() {
  }

}
