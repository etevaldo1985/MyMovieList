import { People } from './../../../models/movie-models/people';
import { Component, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie-models/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-single-people',
  templateUrl: './single-people.component.html'
})
export class SinglePeopleComponent implements OnInit {

  @Output()
  person: People;



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
        this.movieService.getPerson(params.id)
                .subscribe(
                  person => {
                    this.person = person;
                  },
                  error => console.log(error)
                );
      }
    );


  }

  open(content) {
    this.modalService.open(content);
  }

}
