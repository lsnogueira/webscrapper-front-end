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
  options = Object.values(QUERY_TYPES);
  filteredOptions: Observable<string[]>;
  selectedOption: string;

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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(formGroup: FormGroup): void {
    const control = formGroup.controls.queryType;
    this.selectedOption = control.valid ? control.value : null;
  }

  get formTypes() {
    return this.formQueryTypes.controls;
  }

  private initForms(): void {
    this.formQueryTypes = new FormGroup({
      queryType: new FormControl(null, Validators.required)
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
