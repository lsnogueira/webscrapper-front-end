import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { QueryTypes } from 'src/app/presentation/shared/enums';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { saveAs } from 'file-saver';

import { ConsultaControllerService } from 'src/app/presentation/controllers/consulta/consulta-controller.service';
import { GlobalsService } from 'src/app/presentation/shared/services';

const QUERY_TYPES = QueryTypes;

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit, OnDestroy {
  formQueryTypes: FormGroup;
  formSearch: FormGroup;
  options = Object.values(QUERY_TYPES);
  filteredOptions: Observable<string[]>;

  private subscription = new Subscription();

  constructor(
    private consultaController: ConsultaControllerService,
    private globals: GlobalsService,
  ) {}

  ngOnInit() {
    this.initForms();
    this.filteredOptions = this.formTypes.queryType.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.consultaController.getConsultaCivil()
      .subscribe((res) => {
        this.downloadFile(res);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  next(formGroup: any): void {
    formGroup
    debugger
  }

  get formTypes() {
    return this.formQueryTypes.controls;
  }

  get formArray(): FormArray {
    return this.formSearch.controls.fields as FormArray;
  }

  private initForms(): void {
    this.formQueryTypes = new FormGroup({
      queryType: new FormControl(null, Validators.required)
    });
    this.formSearch = new FormGroup({
      fields: new FormArray([])
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private downloadFile(file: ArrayBuffer) {
    const blob = new Blob([file], { type: 'application/pdf' });
    const fileName = 'consulta-civil';
    const currentDate = this.globals.getFormatDate();
    saveAs(blob, `${fileName}-${currentDate}.pdf`);
  }

}
