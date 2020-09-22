import { TopRated } from './../models/tv-models/top-rated';
import { Tv } from './../models/tv-models/tv';
import { VideoResult } from './../models/movie-models/video-result';
import { Playing } from './../models/latest-movies/playing';
import { Trending } from './../models/trending-movies/trending';

import { Observable } from 'rxjs/internal/Observable';
import { BaseService } from '../base-services/base.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()



export class NavService extends BaseService {

  movie: Playing;
  trending: Trending;
  video: VideoResult;


  constructor(private http: HttpClient) { super(); }

  public getMoviesTrending(): Observable<Trending> {
    return this.http
    .get<Trending>(this.UrlMovieTrending + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
  public getMoviesNowPlaying(): Observable<Playing> {
    return this.http
    .get<Playing>(this.UrlMovieLatest + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
  public getMovieVideo(video: number): Observable<VideoResult> {
    return this.http
    .get<VideoResult>(this.UrlMovieVideo + video + '/videos?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }

  public getTvLatest(): Observable<Tv> {
    return this.http
    .get<Tv>(this.UrlTvLatest + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
  public getTvRated(): Observable<TopRated> {
    return this.http
    .get<TopRated>(this.UrlTvRated + this.apiKey)
    .pipe(catchError(this.serviceError));
  }

  public getTvVideo(video: number): Observable<VideoResult> {
    return this.http
    .get<VideoResult>(this.UrlTvVideo + video + '/videos?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }


}
