import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmbdService } from '../tmbd.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.page.html',
  styleUrls: ['./serie-details.page.scss'],
})
export class SerieDetailsPage implements OnInit {
  Credits: any;
  Series: any;
  id: string = '';
  apiResponse: any;
  baseUrl = 'https://image.tmdb.org/t/p/original/';

  constructor(public serieService: TmbdService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initCurrentSerie();
  }
  movieCast() {
    this.serieService.getCreditsCurrentSerie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
  getMovies() {
    // Get movies list
    this.serieService.getCurrentSerie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
  }
  initCurrentSerie() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.id = id;
    }
    this.serieService.getCurrentSerie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Series = data;
    });
    this.serieService.getCreditsCurrentSerie(this.id).subscribe((data: {}) => {
      this.apiResponse = data;
      this.Credits = data;
    });
  }
}
