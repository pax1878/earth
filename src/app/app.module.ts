import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountriesComponent} from './list/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    ErrorStateMatcher,
    MatButtonModule,
    MatCardModule, MatDialogModule, MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatProgressSpinnerModule, MatSidenavModule,
    MatSortModule,
    MatTableModule, MatToolbarModule,
} from '@angular/material';
import {CountryComponent} from './detail/country/country.component';
import {SidenavService} from './shared/sidenav.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditCountryComponent } from './detail/edit-country/edit-country.component';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmSubmitDialogComponent } from './detail/confirm-submit-dialog/confirm-submit-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        CountriesComponent,
        CountryComponent,
        EditCountryComponent,
        ConfirmSubmitDialogComponent
    ],
    entryComponents: [
        ConfirmSubmitDialogComponent
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
        MatDialogModule,
        MatListModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({apiKey: 'AIzaSyA0gvHKpLsvaDEaqr3eIkS98QiUuvl4iKQ'}),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        SidenavService,
        ErrorStateMatcher
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
