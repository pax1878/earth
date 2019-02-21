import {Component, OnInit, ViewChild} from '@angular/core';
import {CountryDataService} from '../../shared/country-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from '../../shared/country';
import {MatSidenav} from '@angular/material';
import {SidenavService} from '../../shared/sidenav.service';

@Component({
    selector: 'country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    country: Country;
    @ViewChild('start') sidenav: MatSidenav;

    constructor(private countryService: CountryDataService, private router: Router, private activeRoute: ActivatedRoute, private sidenavService: SidenavService) {
    }

    ngOnInit() {
        this.activeRoute.params.subscribe((params: { country: string }) => {
            this.loadCountry(params.country);
        });
    }

    private loadCountry(countryCode): void {
        this.countryService.fetchCountry(countryCode).subscribe((country: Country) => {
            this.country = country;
            this.sidenavService.open();
        });
    }

    closeSidebar(): void {
        this.router.navigate(['']);
        this.sidenavService.close();
    }

}
