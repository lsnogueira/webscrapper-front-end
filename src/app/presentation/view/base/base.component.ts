import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  pageControl = {
    showRelatorio: false,
    showConsulta: false,
    showChatbot: false
  };
  @Output() showPages = new EventEmitter<any>();

  ngOnInit() {
  }

  goConsulta(): void {
    this.pageControl.showRelatorio = false;
    this.pageControl.showChatbot = false;
    this.pageControl.showConsulta = true;
    this.showPages.emit(this.pageControl);
  }

  goRelatorio(): void {
    this.pageControl.showChatbot = false;
    this.pageControl.showConsulta = false;
    this.pageControl.showRelatorio = true;
    this.showPages.emit(this.pageControl);
  }

  goChatbot(): void {
    this.pageControl.showConsulta = false;
    this.pageControl.showRelatorio = false;
    this.pageControl.showChatbot = true;
    this.showPages.emit(this.pageControl);
  }

}
