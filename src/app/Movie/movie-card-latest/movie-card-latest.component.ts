import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Video } from './../../models/movie-models/video';
import { NavService } from './../../navigation/navigation.service';
import { Playing } from './../../models/latest-movies/playing';


import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-card-latest',
  templateUrl: './movie-card-latest.component.html'
})
export class MovieCardLatestComponent implements OnInit {


  poster = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private navservice: NavService,
    private modalService: NgbModal
    ) { }

  @Input()
  playing: Playing;

  results: Video[];

  ngOnInit(): void {
  }

  getKey(id: number) {
    this.navservice.getMovieVideo(id)
    .subscribe(
      video => {
        this.results = video.results;
      }

    );
  }
  open(content) {
    this.modalService.open(content);
  }

}
