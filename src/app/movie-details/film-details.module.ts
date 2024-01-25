import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { IonicModule } from '@ionic/angular';

import { FilmDetailsPageRoutingModule } from './film-details-routing.module';

import { FilmDetailsPage } from './film-details.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetailsPageRoutingModule
  ],
  declarations: [FilmDetailsPage]
})
export class FilmDetailsPageModule {}
