import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SidenavService} from './shared/sidenav.service';
import {Router} from '@angular/router';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'earth';
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private sidenavService: SidenavService, private router: Router) {}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    // this.sidenav.closedStart.subscribe(() => {
    //   this.router.navigate(['']);
    // });
  }
}
