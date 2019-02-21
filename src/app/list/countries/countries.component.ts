import {Component, OnInit, ViewChild} from '@angular/core';
import {CountryDataService} from '../../shared/country-data.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Country} from '../../shared/country';
import {Router} from '@angular/router';

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
    columns: string[] = ['flag', 'name', 'population'];
    @ViewChild(MatSort) sort: MatSort;
    dataSource: MatTableDataSource<any>;
    countries: Country[];
    loading = true;
    constructor(private countryData: CountryDataService, private router: Router) {
    }


    ngOnInit() {
        this.countryData.fetchCountries().subscribe(
            res => {
                this.countries = res;
                this.dataSource = new MatTableDataSource(this.countries);
                this.dataSource.sort = this.sort;
                this.loading = false;
            }
        );
    }

    onRowClick(row) {
        this.router.navigate(['/detail', row.alpha3Code]);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
