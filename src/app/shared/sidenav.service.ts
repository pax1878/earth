import { Injectable } from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private router: Router) { }

  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    this.sidenav.closedStart.subscribe(() => this.router.navigate(['']));
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
