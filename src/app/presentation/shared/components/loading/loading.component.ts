import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input()
  firstMessage = 'Estamos capturando as informações para o seu relatório!';
  @Input()
  secondMessage = 'Aproveite o tempo para tomar um café';

  private change = false;

  constructor() {}

  ngOnInit() {
    this.initChangeText();
  }

  private initChangeText(): void {
    setTimeout(() => {
      this.change = !this.change;
      this.firstMessage = this.change
        ? 'Este processo pode ser demorado'
        : 'Estamos capturando as informações para o seu relatório!';
      this.secondMessage = this.change
        ? 'Mas fique tranquilo! Caso algo dê errado, te avisaremos :)'
        : 'Aproveite o tempo para tomar um café';
      this.initChangeText();
    }, 6000);
  }
}
