import {Component, OnInit, ViewChild} from '@angular/core';
import {CountryDataService} from '../../shared/country-data.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Country} from '../../shared/country';

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

    constructor(private countryData: CountryDataService) {
    }


    ngOnInit() {
        this.countryData.fetchCountries().subscribe(
            res => {
                this.countries = res;
                this.dataSource = new MatTableDataSource(this.countries);
                this.dataSource.sort = this.sort;
            }
        );
    }

    onRowClick(row) {
        console.log(row);
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
