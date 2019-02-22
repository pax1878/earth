import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SidenavService} from './shared/sidenav.service';
import {Location} from "@angular/common";

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'earth';
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private sidenavService: SidenavService, private location: Location) {
    }

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);

        this.location.subscribe(() => {
            if (this.sidenav.opened) {
                this.sidenavService.close();
            }
        });
    }
}
