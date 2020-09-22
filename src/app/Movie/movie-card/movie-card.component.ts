
import { Trending } from './../../models/trending-movies/trending';
import { Component, OnInit, Input } from '@angular/core';
import { NavService } from 'src/app/navigation/navigation.service';

import { Video } from 'src/app/models/movie-models/video';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html'
})
export class MovieCardComponent implements OnInit {




  poster = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private navservice: NavService,
    private modalService: NgbModal
    ) { }

  @Input()
  trending: Trending;


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
