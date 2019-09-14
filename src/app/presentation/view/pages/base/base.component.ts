import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/presentation/shared/services/sidenav.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  sidenavState = false;
  getState: Subscription;
  menuItems = [
    { id: 1, label: 'Home', routerlink: '/' },
    { id: 2, label: 'Meus Anúncios', routerlink: 'user' },
    { id: 3, label: 'Procurar', routerLink: '' },
    { id: 4, label: 'FAQ', routerLink: '' }
  ];
  @Input() directionShow;

  constructor(private sidenav$: SidenavService) {}

  async ngOnInit() {
    try {
      await this.getSidenavState();
    } catch (error) {
      console.log(error);
    }
  }

  getSidenavState(): Promise<any> {
    return new Promise<boolean>(async (resolve, reject) => {
      (this.getState = await this.sidenav$
        .getState()
        .subscribe((resp: boolean) => {
          this.sidenavState = resp;
          resolve();
        })),
        (error: any) => {
          reject(error);
        };
    });
  }

  trackByMenu(index, item) {
    return item.id;
  }
}
