import { Component, OnInit } from '@angular/core';
import { States } from 'src/app/presentation/shared/enums';

const STATES = States;
@Component({
  selector: 'app-consulta-automotiva',
  templateUrl: './consulta-automotiva.component.html',
  styleUrls: ['./consulta-automotiva.component.scss']
})
export class ConsultaAutomotivaComponent implements OnInit {

  states = Object.values(STATES);

  constructor() { }

  ngOnInit() {
  }

}
