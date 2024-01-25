import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmbdService } from '../tmbd.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
  Movies: any;
  Credits: any;
  id: string = '';
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';
  video: string = '';

  constructor(public filmService: TmbdService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initCurrentMovie();
  }
  getVideo() {
    this.filmService.getVideo(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
  getMovies() {
    // Get movies list
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
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
      this.Movies = data;
    });
    this.filmService.getCreditsCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
    this.filmService.getCurrentMovie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }
}
