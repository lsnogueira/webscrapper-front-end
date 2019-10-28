import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { States } from 'src/app/presentation/shared/enums';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ConsultaProcessosModel } from 'src/app/core/domain/entity/models';

const STATES = States;
@Component({
  selector: 'app-consulta-processos',
  templateUrl: './consulta-processos.component.html',
  styleUrls: ['./consulta-processos.component.scss']
})
export class ConsultaProcessosComponent implements OnInit {

  states = Object.values(STATES);
  processoForm: FormGroup;

  @Input()
  stepper: MatStepper = new MatStepper(null, null);
  @Output()
  body = new EventEmitter<ConsultaProcessosModel>();

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit(formGroup: FormGroup) {
    if (formGroup.invalid) {
      return;
    }
    const controls = formGroup.controls;
    const result: ConsultaProcessosModel = {
      nomeProcesso: String(controls.processName.value),
      numeroProcesso: String(controls.processNumber.value),
      estado: String(controls.state.value),
      nomeRegistrado: String(controls.registerName.value),
      cpfRegistrado: String(controls.cpf.value),
    };
    this.body.emit(result);
    this.stepper.next();
  }

  private initForm(): void {
    this.processoForm = new FormGroup({
      processName: new FormControl(''),
      processNumber: new FormControl('', Validators.required),
      registerName: new FormControl(''),
      state: new FormControl(''),
      cpf: new FormControl('')
    });
  }
}
