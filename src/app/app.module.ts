import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountriesComponent} from './list/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule, MatSidenavModule,
    MatSortModule,
    MatTableModule, MatToolbarModule,
} from '@angular/material';
import {CountryComponent} from './detail/country/country.component';
import {SidenavService} from './shared/sidenav.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditCountryComponent } from './detail/edit-country/edit-country.component';

@NgModule({
    declarations: [
        AppComponent,
        CountriesComponent,
        CountryComponent,
        EditCountryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    providers: [
        SidenavService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
