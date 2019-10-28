import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ConsultaJuridicaModel } from 'src/app/core/domain/entity/models';

@Component({
  selector: 'app-consulta-juridica',
  templateUrl: './consulta-juridica.component.html',
  styleUrls: ['./consulta-juridica.component.scss']
})
export class ConsultaJuridicaComponent implements OnInit {
  juridicoForm: FormGroup;

  @Input()
  stepper: MatStepper = new MatStepper(null, null);
  @Output()
  body = new EventEmitter<ConsultaJuridicaModel>();
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(formGroup: FormGroup) {
    if (formGroup.invalid) {
      return;
    }
    const controls = formGroup.controls;
    const result: ConsultaJuridicaModel = {
      nome: controls.name.value,
      cnpj: controls.cnpj.value
    };
    this.body.emit(result);
    this.stepper.next();
  }

  private initForm(): void {
    this.juridicoForm = new FormGroup({
      name: new FormControl(''),
      cnpj: new FormControl('', Validators.required)
    });
  }

}
