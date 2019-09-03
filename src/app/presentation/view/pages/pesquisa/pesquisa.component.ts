import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {
  pages = {
    showConsulta: true,
    showRelatorio: false,
    showChatbot: false
  };

  constructor() { }

  ngOnInit() {
  }

  pageControl(e: any): void {
    this.pages = e;
  }
}
