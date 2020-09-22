import { TopRated } from './../../models/tv-models/top-rated';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/models/movie-models/video';

import { NavService } from 'src/app/navigation/navigation.service';

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html'
})
export class TvCardComponent implements OnInit {




  poster = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private navservice: NavService,
    private modalService: NgbModal
    ) { }

  @Input()
  rated: TopRated;


  results: Video[];


  ngOnInit(): void {


  }
  getKey(id: number) {
    this.navservice.getTvVideo(id)
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
