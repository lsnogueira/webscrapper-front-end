import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ConsultaCriminalModel } from 'src/app/core/domain/entity/models';

@Component({
  selector: 'app-consulta-criminal',
  templateUrl: './consulta-criminal.component.html',
  styleUrls: ['./consulta-criminal.component.scss']
})
export class ConsultaCriminalComponent implements OnInit {

  criminalForm: FormGroup;

  @Input()
  stepper: MatStepper = new MatStepper(null, null);
  @Output()
  body = new EventEmitter<ConsultaCriminalModel>();

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit(formGroup: FormGroup) {
    if (formGroup.invalid) {
      return;
    }
    const controls = formGroup.controls;
    const result: ConsultaCriminalModel = {
      apresentacao: String(controls.apresentacao.value),
      instituicoes: String(controls.instituicoes.value),
      departamentos: String(controls.departamentos.value),
      seccionais: String(controls.seccionais.value),
      distritos: String(controls.distritos.value),
    };
    this.body.emit(result);
    this.stepper.next();
  }

  private initForm(): void {
    this.criminalForm = new FormGroup({
      apresentacao: new FormControl('', Validators.required),
      instituicoes: new FormControl(''),
      departamentos: new FormControl(''),
      seccionais: new FormControl(''),
      distritos: new FormControl('')
    });
  }
}
