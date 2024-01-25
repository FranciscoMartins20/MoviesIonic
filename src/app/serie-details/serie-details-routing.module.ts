import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieDetailsPage } from './serie-details.page';

const routes: Routes = [
  {
    path: 'serie-details',
    component: SerieDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieDetailsPageRoutingModule {}
