import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-pages',
  template: `
    <style>
      .main-content {
        padding-left: 60px;
      }
    </style>
    <ng-container *ngIf="isLoginPage; then loginPage; else notLoginPage">
    </ng-container>

    <ng-template #loginPage>
      <router-outlet></router-outlet>
    </ng-template>

    <ng-template #notLoginPage>
      <app-header></app-header>
      <app-sidenav></app-sidenav>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </ng-template>
  `
})
export class PagesComponent implements OnInit, OnChanges {
  isLoginPage: boolean;

  constructor(private router: Router) {
    router.events.subscribe((res: NavigationStart) => {
      this.isLoginPage = res.url !== '/login';

    });
  }

  ngOnInit(): void {
    this.isLoginPage = this.router.url === '/login';
  }

  ngOnChanges() {}
}
