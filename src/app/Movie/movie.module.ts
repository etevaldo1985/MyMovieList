import { MovieService } from './services/movie.service';
import { MovieRoutingModule } from './movie.route';
import { MovieAppComponent } from './movie.app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardLatestComponent } from './movie-card-latest/movie-card-latest.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { SinglePeopleComponent } from './people/single-people/single-people.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MovieAppComponent,
    MovieCardLatestComponent,
    SingleMovieComponent,
    PeopleCardComponent,
    SinglePeopleComponent,

  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    NgbModule
  ],
  exports: [
    MovieCardComponent,
    MovieCardLatestComponent,
    PeopleCardComponent
  ],
  providers: [MovieService]

})
export class MovieModule {}
