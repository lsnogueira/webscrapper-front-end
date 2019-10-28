import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ConsultaCivilModel } from 'src/app/core/domain/entity/models';

@Component({
  selector: 'app-consulta-civil',
  templateUrl: './consulta-civil.component.html',
  styleUrls: ['./consulta-civil.component.scss']
})
export class ConsultaCivilComponent implements OnInit {

  civilForm: FormGroup;

  @Input()
  stepper: MatStepper = new MatStepper(null, null);
  @Output()
  body = new EventEmitter<ConsultaCivilModel>();

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit(formGroup: FormGroup) {
    if (formGroup.invalid) {
      return;
    }
    const controls = formGroup.controls;
    const result: ConsultaCivilModel = {
      nome: controls.name.value,
      cpf: controls.cpf.value,
      dataNascimento: controls.birthday.value,
      nomeMae: controls.motherName.value,
      numero_processo: controls.processNumber.value,
      rg: controls.rg.value
    };
    this.body.emit(result);
    this.stepper.next();
  }

  private initForm(): void {
    this.civilForm = new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      motherName: new FormControl(''),
      birthday: new FormControl(''),
      processNumber: new FormControl('', Validators.required),
      rg: new FormControl('')
    });
  }
}
