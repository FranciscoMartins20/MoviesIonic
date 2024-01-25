import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TmbdService {
  constructor(public http: HttpClient) {}

  apiKey = 'd1bfabdd369fe4e5af389bad25932f70';

  getSeriesPopular(pag: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/popular?api_key=d1bfabdd369fe4e5af389bad25932f70&page=' +
        pag
    );
  }

  getMoviesPopular(pag: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=d1bfabdd369fe4e5af389bad25932f70&page=' +
        pag
    );
  }

  getSeriesNow(pag: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/on_the_air?api_key=d1bfabdd369fe4e5af389bad25932f70&page=' +
        pag
    );
  }
  getMoviesNow(pag: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=d1bfabdd369fe4e5af389bad25932f70&page=' +
        pag
    );
  }

  getCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=' +
        this.apiKey +
        '&language=en-US'
    );
  }
  getCreditsCurrentMovie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '/credits?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US'
    );
  }

  getCurrentSerie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/' +
        id +
        '?api_key=' +
        this.apiKey +
        '&language=en-US'
    );
  }
  getCreditsCurrentSerie(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/tv/' +
        id +
        '/credits?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US'
    );
  }
  getVideo(id: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=d1bfabdd369fe4e5af389bad25932f70&append_to_response=videos'
    );
  }
  getSearchMovies(search: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/movie?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US&query=' +
        search +
        '&page=1&include_adult=false'
    );
  }
  getSearchSeries(search: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/tv?api_key=d1bfabdd369fe4e5af389bad25932f70&language=en-US&page=1&query=' +
        search +
        '&page=1&include_adult=false'
    );
  }
}
