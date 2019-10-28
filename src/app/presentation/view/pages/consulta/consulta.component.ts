import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { QueryTypes } from 'src/app/presentation/shared/enums';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

import { ConsultaControllerService } from 'src/app/presentation/controllers/consulta/consulta-controller.service';
import { GlobalsService } from 'src/app/presentation/shared/services';
import {
  ConsultaCivilModel,
  ConsultaJuridicaModel,
  ConsultaProcessosModel,
  ConsultaCriminalModel
} from 'src/app/core/domain/entity/models';
import { MatStepper } from '@angular/material';

const QUERY_TYPES = QueryTypes;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, OnDestroy {
  @ViewChild('stepper', {static: false})
  stepper: MatStepper;

  formQueryTypes: FormGroup;
  options = Object.values(QUERY_TYPES);
  filteredOptions: Observable<string[]>;
  selectedOption: string;
  isLoading: boolean;
  isError: boolean;
  formValues:
    | ConsultaCivilModel
    | ConsultaJuridicaModel
    | ConsultaProcessosModel
    | ConsultaCriminalModel;

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
    if (control.value === this.options[3]) {
      Swal.fire(
        'Info',
        'A opção selecionada ainda está em construção. Por favor selecione outra',
        'info'
      );
      this.stepper.reset();
      return;
    }
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
          cpf: String((this.formValues as ConsultaCivilModel).cpf),
          dataNascimento: String(
            (this.formValues as ConsultaCivilModel).dataNascimento
          ),
          nome: String((this.formValues as ConsultaCivilModel).nome),
          nomeMae: String((this.formValues as ConsultaCivilModel).nomeMae),
          numero_processo: String(
            (this.formValues as ConsultaCivilModel).numero_processo
          ),
          rg: String((this.formValues as ConsultaCivilModel).numero_processo)
        };
        this.subscription.add(
          this.consultaController.consultaCivil(this.formValues).subscribe(
            (res: ArrayBuffer) => {
              this.isLoading = false;
              this.downloadFile(res, 'consulta-civil');
              Swal.fire('Sucesso!', 'Arquivo gerado com sucesso!', 'success');
              stepper.reset();
            },
            rej => {
              this.isLoading = false;
              this.isError = true;
              console.error(rej);
              Swal.fire('Erro!', 'Ocorreu um erro ao gerar o arquivo', 'error');
              setTimeout(() => {
                this.isError = false;
                stepper.reset();
              }, 10000);
            }
          )
        );
        break;
      case this.options[1]:
        this.formValues = {
          nome: String((this.formValues as ConsultaJuridicaModel).nome),
          cnpj: String((this.formValues as ConsultaJuridicaModel).cnpj)
        };
        this.subscription.add(
          this.consultaController.consultaJuridica(this.formValues).subscribe(
            (res: ArrayBuffer) => {
              this.isLoading = false;
              this.downloadFile(res, 'consulta-juridica');
              Swal.fire('Sucesso!', 'Arquivo gerado com sucesso!', 'success');
              stepper.reset();
            },
            rej => {
              this.isLoading = false;
              this.isError = true;
              console.error(rej);
              Swal.fire('Erro!', 'Ocorreu um erro ao gerar o arquivo', 'error');
              setTimeout(() => {
                this.isError = false;
                stepper.reset();
              }, 10000);
            }
          )
        );
        break;
      case this.options[2]:
        this.formValues = {
          numeroProcesso: String(
            (this.formValues as ConsultaProcessosModel).numeroProcesso
          ),
          cpfRegistrado: String(
            (this.formValues as ConsultaProcessosModel).cpfRegistrado
          ),
          nomeRegistrado: String(
            (this.formValues as ConsultaProcessosModel).nomeRegistrado
          ),
          estado: String((this.formValues as ConsultaProcessosModel).estado),
          nomeProcesso: String(
            (this.formValues as ConsultaProcessosModel).numeroProcesso
          )
        };
        this.subscription.add(
          this.consultaController.consultaProcessos(this.formValues).subscribe(
            (res: ArrayBuffer) => {
              this.isLoading = false;
              this.downloadFile(res, 'consulta-processos');
              Swal.fire('Sucesso!', 'Arquivo gerado com sucesso!', 'success');
              stepper.reset();
            },
            rej => {
              this.isLoading = false;
              this.isError = true;
              console.error(rej);
              Swal.fire('Erro!', 'Ocorreu um erro ao gerar o arquivo', 'error');
              setTimeout(() => {
                this.isError = false;
                stepper.reset();
              }, 10000);
            }
          )
        );
        break;
      case this.options[4]:
        this.formValues = {
          apresentacao: String(
            (this.formValues as ConsultaCriminalModel).apresentacao
          ),
          departamentos: String(
            (this.formValues as ConsultaCriminalModel).departamentos
          ),
          distritos: String(
            (this.formValues as ConsultaCriminalModel).distritos
          ),
          instituicoes: String(
            (this.formValues as ConsultaCriminalModel).instituicoes
          ),
          seccionais: String(
            (this.formValues as ConsultaCriminalModel).seccionais
          )
        };
        this.subscription.add(
          this.consultaController.consultaCriminal(this.formValues).subscribe(
            (res: ArrayBuffer) => {
              this.isLoading = false;
              this.downloadFile(res, 'consulta-criminal');
              Swal.fire('Sucesso!', 'Arquivo gerado com sucesso!', 'success');
              stepper.reset();
            },
            rej => {
              this.isLoading = false;
              this.isError = true;
              console.error(rej);
              Swal.fire('Erro!', 'Ocorreu um erro ao gerar o arquivo', 'error');
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
