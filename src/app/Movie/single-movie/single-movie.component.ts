import { Reviews } from './../../models/movie-models/reviews';
import { PersonImage } from './../../models/movie-models/person-image';
import { Credits } from './../../models/movie-models/credits';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from './../../models/movie-models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html'
})
export class SingleMovieComponent implements OnInit {

  @Output()
  credit: Credits;
  reviews: Reviews;



  movie: Movie;
  poster = 'https://image.tmdb.org/t/p/w500/';




  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      params => {
        this.movieService.getReviews(params.id)
                .subscribe(
                  review => {
                    this.reviews = review;
                  },
                  error => console.log(error)
                );
      }
    );

    this.route.params.subscribe(
      params => {
        this.movieService.getSingleMovie(params.id)
                .subscribe(
                  movie => {
                    this.movie = movie;
                  },
                  error => console.log(error)
                );
      }
    );


    this.route.params.subscribe(
      params => {
        this.movieService.getCredits(params.id)
            .subscribe(
              credits => {
                this.credit = credits;

              },
              error => console.log(error));
      }
    );



  }

  open(content) {
    this.modalService.open(content);
  }

}
