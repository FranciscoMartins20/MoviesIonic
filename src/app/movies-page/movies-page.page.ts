import { Component, OnInit } from '@angular/core';
import { TmbdService } from '../tmbd.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.page.html',

  styleUrls: ['./movies-page.page.scss'],
})
export class MoviesPagePage implements OnInit {
  MoviesNow: any = [];
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  pag: number = 1;
  search: string = '';

  constructor(public filmService: TmbdService) {}

  changePagPlus() {
    if (this.pag > 14) {
      this.getMoviesNow();
    } else {
      this.pag = this.pag + 1;
      this.getMoviesNow();
    }
  }
  changePagMinus() {
    if (this.pag < 2) {
      this.getMoviesNow();
    } else {
      this.pag = this.pag - 1;
      this.getMoviesNow();
    }
  }
  getSearchMovies() {
    this.filmService.getSearchMovies(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesNow = data;
    });
  }
  getMoviesNow() {
    // Get movies list
    this.filmService.getMoviesNow(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesNow = data;
    });
  }

  ngOnInit(): void {
    // Get movies list
    this.filmService.getMoviesNow(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesNow = data;
    });
  }
}
