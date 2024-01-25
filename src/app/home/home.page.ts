import { Component, OnInit } from '@angular/core';
import { TmbdService } from '../tmbd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  MoviesPopular: any = [];
  Series: any = [];
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  pag: number = 1;
  search: string = '';
  Credits: any;
  id: string = '';
  video: string = '';
  route: any;

  constructor(
    public filmService: TmbdService,
    public seriesService: TmbdService
  ) {}
  getSearchBoth() {
    this.filmService.getSearchMovies(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
      this.seriesService.getSearchSeries(this.search).subscribe((data: {}) => {
        this.apiResponse = data;
        this.Series = data;
      });
    });
  }

  getSeriesPopular() {
    // Get movies list
    this.seriesService.getSeriesPopular(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
  getMoviesPopular() {
    // Get movies list
    this.filmService.getMoviesPopular(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
    });
  }

  getVideo() {
    this.filmService.getVideo(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
    });
  }

  movieCast() {
    this.filmService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
  initCurrentMovie() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = id;
    }
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
    });
    this.filmService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
    });
  }
  ngOnInit(): void {
    // Get movies list
    this.filmService.getMoviesPopular(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.MoviesPopular = data;
      this.seriesService.getSeriesPopular(this.pag).subscribe((data: {}) => {
        this.apiResponse = data;
        this.Series = data;
      });
    });
    this.initCurrentMovie();
  }
}
