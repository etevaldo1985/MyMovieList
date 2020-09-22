import { People } from './../../models/movie-models/people';
import { Reviews } from './../../models/movie-models/reviews';
import { PersonImage } from './../../models/movie-models/person-image';
import { Credits } from './../../models/movie-models/credits';
import { Movie } from './../../models/movie-models/movie';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/base-services/base.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()




export class MovieService extends BaseService {

  constructor(private http: HttpClient) { super(); }

  public getSingleMovie(id: number): Observable<Movie> {
    return this.http
    .get<Movie>(this.UrlMovieId + id + '?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }

  public getCredits(id: number): Observable<Credits> {
    return this.http
    .get<Credits>(this.UrlMovieCredits + id + '/credits?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
  public getPerson(id: number): Observable<People> {
    return this.http
    .get<People>(this.UrlMoviePerson + id + '?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
  public getReviews(id: number): Observable<Reviews> {
    return this.http
    .get<Reviews>(this.UrlMovieId + id + '/reviews?' + this.apiKey)
    .pipe(catchError(this.serviceError));
  }
}
