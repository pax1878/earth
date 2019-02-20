import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './detail/country/country.component';

const routes: Routes = [
  {path: 'detail/:country', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
