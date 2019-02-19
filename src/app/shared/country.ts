import {Latlng} from './latlng';
import {Currency} from './currency';

export interface Country {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    flag: string;
    latlng: Latlng;
    currency: Currency[];
}
