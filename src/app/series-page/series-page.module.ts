import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesPagePageRoutingModule } from './series-page-routing.module';

import { SeriesPagePage } from './series-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPagePageRoutingModule
  ],
  declarations: [SeriesPagePage]
})
export class SeriesPagePageModule {}
