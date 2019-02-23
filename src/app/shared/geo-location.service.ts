import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeoLocationService {
    constructor(private http: HttpClient) {
    }

    getGeoLocation(address: string): Observable<any> {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDpwV6uIP29mnZ0GGTW0SjArwseXH9UB4A' +
            '&address=' + address);
    }
}
