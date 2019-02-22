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
    private sort: MatSort;
    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }
    dataSource: MatTableDataSource<any>;
    countries: Country[];
    loading: boolean;
    constructor(private countryData: CountryDataService, private router: Router) {}


    ngOnInit() {
        this.loading = true;
        this.countryData.fetchCountries().subscribe(
            res => {
                this.loading = false;
                this.countries = res;
                this.initDataSource();
            }
        );
    }

    onRowClick(row) {
        this.router.navigate(['/detail', row.alpha3Code]);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    private initDataSource() {
        this.dataSource = new MatTableDataSource(this.countries);
    }

    private setDataSourceAttributes() {
        if(this.sort) {
            this.dataSource.sort = this.sort;
        }
    }
}
