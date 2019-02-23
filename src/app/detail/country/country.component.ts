import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CountryDataService} from '../../shared/country-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Country} from '../../shared/country';
import {MatSidenav} from '@angular/material';
import {SidenavService} from '../../shared/sidenav.service';
import {GeoLocationService} from '../../shared/geo-location.service';
import {LatLngBounds} from '@agm/core/services/google-maps-types';
import {AgmMap} from '@agm/core';

@Component({
    selector: 'country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, AfterViewInit {
    country: Country;
    @ViewChildren('AgmMap') map: QueryList<any>;
    @ViewChild('start') sidenav: MatSidenav;

    constructor(private countryService: CountryDataService, private router: Router,
                private activeRoute: ActivatedRoute, private sidenavService: SidenavService,
                private geoLocation: GeoLocationService) {
    }

    ngOnInit() {
        this.activeRoute.params.subscribe((params: { country: string }) => {
            this.loadCountry(params.country);
        });
    }

    ngAfterViewInit(): void {
        this.map.changes.subscribe((comps: QueryList<AgmMap>) => {
            comps.first.mapReady.subscribe(map => {
                this.geoLocation.getGeoLocation(this.country.name).subscribe(
                    (response) => {
                        const viewport = response.results[0].geometry.bounds;
                        const bounds: LatLngBounds = new window['google'].maps.LatLngBounds();
                        bounds.extend(new window['google'].maps.LatLng(viewport.northeast.lat, viewport.northeast.lng));
                        bounds.extend(new window['google'].maps.LatLng(viewport.southwest.lat, viewport.southwest.lng));
                        map.fitBounds(bounds);
                        this.sidenavService.open();
                    }
                );
            });
        });
    }

    private loadCountry(countryCode): void {
        this.countryService.fetchCountry(countryCode).subscribe((country: Country) => {
            this.country = country;
        });
    }

    closeSidebar(): void {
        this.sidenavService.close();
    }

}
