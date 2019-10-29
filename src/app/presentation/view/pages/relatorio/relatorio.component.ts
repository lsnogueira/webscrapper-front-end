import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConsultaControllerService } from 'src/app/presentation/controllers/consulta/consulta-controller.service';
import { Subscription } from 'rxjs';
import { GlobalsService } from 'src/app/presentation/shared/services';
import Swal from 'sweetalert2';
import _ from 'lodash';

export interface PeriodicElement {
  id: number;
  queryType: string;
  date: number;
  downloadLink: string;
}

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    '_id',
    'tipoConsulta',
    'dataConsulta',
    'downloadLink'
  ];
  dataSource = [];
  isLoading = false;

  private subscrition = new Subscription();

  constructor(
    private consultaController: ConsultaControllerService,
    private globals: GlobalsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.subscrition.add(
      this.consultaController.getRelatorios().subscribe(res => {
        for (let i = 0; i < 10; i++) {
          const element = res[i];
          this.dataSource.push(element);
        }
        _.orderBy(this.dataSource, ['dataConsulta'], ['asc']);
        this.dataSource.map(item => {
          item.downloadLink = item._id;
        });
        this.isLoading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }

  selectReport(row: any) {
    this.isLoading = true;
    this.subscrition.add(
      this.consultaController
        .downloadFile(row._id)
        .subscribe(res => {
          this.downloadFile(res, row.tipoConsulta);
          this.isLoading = false;
          Swal.fire('Sucesso!', 'Arquivo obtido com sucesso!', 'success');
        }, rej => {
          console.error(rej);
          this.isLoading = false;
          Swal.fire('Erro!', 'Um erro inesperado aconteceu', 'error');
        })
    );
  }

  private downloadFile(file: ArrayBuffer, fileName: string) {
    const blob = new Blob([file], { type: 'application/pdf' });
    const currentDate = this.globals.getFormatDate();
    saveAs(blob, `${fileName}-${currentDate}.pdf`);
  }
}
