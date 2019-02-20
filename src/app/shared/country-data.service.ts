import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient) { }

  fetchCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2');
  }

  fetchCountry(countryCode: string): Observable<Country> {
    return this.http.get<Country>('https://restcountries.eu/rest/v2/alpha/' + countryCode);
  }
}
