import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { QueryTypes } from 'src/app/presentation/shared/enums';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { saveAs } from 'file-saver';

import { ConsultaControllerService } from 'src/app/presentation/controllers/consulta/consulta-controller.service';
import { GlobalsService } from 'src/app/presentation/shared/services';
import { ConsultaCivilModel } from 'src/app/core/domain/entity/models';
import { MatStepper } from '@angular/material';

const QUERY_TYPES = QueryTypes;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, OnDestroy {
  formQueryTypes: FormGroup;
  options = Object.values(QUERY_TYPES);
  filteredOptions: Observable<string[]>;
  selectedOption: string;
  formValues: ConsultaCivilModel;
  isLoading: boolean;
  isError: boolean;

  private subscription = new Subscription();

  constructor(
    private consultaController: ConsultaControllerService,
    private globals: GlobalsService
  ) {}

  ngOnInit() {
    this.initForm();
    this.filteredOptions = this.formTypes.queryType.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(formGroup: FormGroup): void {
    const control = formGroup.controls.queryType;
    this.selectedOption = control.valid ? control.value : null;
  }

  appendBody(body: any): void {
    this.formValues = body;
  }

  search(stepper: MatStepper): void {
    this.isLoading = true;
    this.isError = false;
    switch (this.selectedOption) {
      case this.options[0]:
        this.formValues = {
          cpf: String(this.formValues.cpf),
          dataNascimento: String(this.formValues.dataNascimento),
          nome: String(this.formValues.nome),
          nomeMae: String(this.formValues.nomeMae),
          numero_processo: String(this.formValues.numero_processo),
          rg: String(this.formValues.numero_processo),
        };
        this.subscription.add(
          this.consultaController.getConsultaCivil(this.formValues).subscribe(
            (res: ArrayBuffer) => {
              this.isLoading = false;
              this.downloadFile(res, 'consulta-civil');
              stepper.reset();
            },
            rej => {
              this.isLoading = false;
              this.isError = true;
              console.error(rej);
              setTimeout(() => {
                this.isError = false;
                stepper.reset();
              }, 10000);
            }
          )
        );
        break;

      default:
        break;
    }
  }

  get formTypes() {
    return this.formQueryTypes.controls;
  }

  private initForm(): void {
    this.formQueryTypes = new FormGroup({
      queryType: new FormControl(null, Validators.required)
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value ? value.toLowerCase() : '';

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private downloadFile(file: ArrayBuffer, fileName: string) {
    const blob = new Blob([file], { type: 'application/pdf' });
    const currentDate = this.globals.getFormatDate();
    saveAs(blob, `${fileName}-${currentDate}.pdf`);
  }
}
