import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  // banner data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  // trending data
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    })
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionMovie#')
      this.actionMovieResult = result.results;
    })
  }

  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'adventureMovie#')
      this.adventureMovieResult = result.results;
    })
  }

  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'animationMovie#')
      this.animationMovieResult = result.results;
    })
  }

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'comedyMovie#')
      this.comedyMovieResult = result.results;
    })
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'documentaryMovie#')
      this.documentaryMovieResult = result.results;
    })
  }

  // science-fiction
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'sciencefictionMovie#')
      this.sciencefictionMovieResult = result.results;
    })
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'thrillerMovie#')
      this.thrillerMovieResult = result.results;
    })
  }
}
