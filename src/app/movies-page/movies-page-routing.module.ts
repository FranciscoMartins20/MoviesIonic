import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPagePage } from './movies-page.page';

import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  {
    path: '',
    component: MoviesPagePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxPaginationModule],
  exports: [RouterModule],
})
export class MoviesPagePageRoutingModule {}
