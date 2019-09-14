import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/presentation/shared/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sidenav$: SidenavService
  ) { }

  ngOnInit() {

  }

  toggleSideNav() {
    this.sidenav$.toggleSideNav();
  }
}
