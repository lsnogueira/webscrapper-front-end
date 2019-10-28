import { Component, OnInit } from '@angular/core';
import { ConsultaControllerService } from 'src/app/presentation/controllers/consulta/consulta-controller.service';

export interface PeriodicElement {
  id: number;
  queryType: string;
  date: number;
  downloadLink: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, queryType: 'Hydrogen', date: 1.0079, downloadLink: 'H'},
  {id: 2, queryType: 'Helium', date: 4.0026, downloadLink: 'He'},
  {id: 3, queryType: 'Lithium', date: 6.941, downloadLink: 'Li'},
  {id: 4, queryType: 'Beryllium', date: 9.0122, downloadLink: 'Be'},
  {id: 5, queryType: 'Boron', date: 10.811, downloadLink: 'B'},
  {id: 6, queryType: 'Carbon', date: 12.0107, downloadLink: 'C'},
  {id: 7, queryType: 'Nitrogen', date: 14.0067, downloadLink: 'N'},
  {id: 8, queryType: 'Oxygen', date: 15.9994, downloadLink: 'O'},
  {id: 9, queryType: 'Fluorine', date: 18.9984, downloadLink: 'F'},
  {id: 10, queryType: 'Neon', date: 20.1797, downloadLink: 'Ne'},
];

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'queryType', 'date', 'downloadLink'];
  dataSource = ELEMENT_DATA;
  isLoading = false;

  constructor(private consultaController: ConsultaControllerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.consultaController.getRelatorios(0).subscribe((res) => {
      this.isLoading = false;
      res
      debugger
    });
  }

  selectReport(row: any) {
    console.log(row);
  }
}
