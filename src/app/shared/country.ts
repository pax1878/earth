export interface Country {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    flag: string;
    latlng: string[];
    currencies: {
        code: string,
        name: string,
        symbol: string
    }[];
    timezones: string[];
}
