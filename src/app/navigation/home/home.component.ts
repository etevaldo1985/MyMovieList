import { TopRated } from './../../models/tv-models/top-rated';
import { VideoResult } from './../../models/movie-models/video-result';
import { Playing } from './../../models/latest-movies/playing';



import { Trending } from './../../models/trending-movies/trending';

import { NavService } from './../navigation.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tv } from 'src/app/models/tv-models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {



@Output()
trending: Trending;
// tslint:disable-next-line: no-output-native
@Output()
playing: Playing;
@Output()
video: VideoResult;
@Output()
rated: TopRated;



  constructor(
    private navservice: NavService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.navservice.getMoviesTrending()
    .subscribe(
      trending => {
        this.trending = trending;

      }
    );
    this.navservice.getMoviesNowPlaying()
    .subscribe(
      playing => {
        this.playing = playing;

      }
    );
    this.navservice.getTvRated()
    .subscribe(
      rated => {
        this.rated = rated;

      }
    );

}





}
