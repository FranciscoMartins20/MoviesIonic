import { Component, OnInit } from '@angular/core';
import { TmbdService } from '../tmbd.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.page.html',
  styleUrls: ['./series-page.page.scss'],
})
export class SeriesPagePage implements OnInit {
  SeriesNow: any = [];
  apiResponse: any;
  pag: number = 1;
  search: string = '';
  constructor(public seriesService: TmbdService) {}

  changePagPlus() {
    if (this.pag > 14) {
      this.getSeriesNow();
    } else {
      this.pag = this.pag + 1;
      this.getSeriesNow();
    }
  }
  changePagMinus() {
    if (this.pag < 2) {
      this.getSeriesNow();
    } else {
      this.pag = this.pag - 1;
      this.getSeriesNow();
    }
  }

  ngOnInit() {
    //Get Series list
    this.seriesService.getSeriesNow(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.SeriesNow = data;
    });
  }
  getSearchSeries() {
    this.seriesService.getSearchSeries(this.search).subscribe((data: {}) => {
      this.apiResponse = data;
      this.SeriesNow = data;
    });
  }

  getSeriesNow() {
    // Get movies list
    this.seriesService.getSeriesNow(this.pag).subscribe((data: {}) => {
      this.apiResponse = data;
      this.SeriesNow = data;
    });
  }
}
