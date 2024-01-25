import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesPagePage } from './series-page.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPagePageRoutingModule {}
