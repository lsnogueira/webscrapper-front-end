import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/presentation/shared/services/sidenav.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isLoginPage: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLoginPage = this.router.url === '/login' ? true : false;
  }
}
