import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "08cc33bd5ae3a747598ce2ad84376e66";

  // banner api data
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  // trending movie api data
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  //search movie
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

  // movie detail
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`);
  }

  // movie video
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  // movie cast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`);
  }

  // action movie
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }

  // science-fiction
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }

  // thriller
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }
}
