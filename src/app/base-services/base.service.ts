import { LocalStorageUtils } from './../utils/localstorageutils';
import { environment } from './../../environments/environment';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
export abstract class BaseService {

  protected UrlMovieId: string = environment.apiMovieId;
  protected UrlMovieTrending: string = environment.apiMovieTrending;
  protected UrlMovieLatest: string = environment.apiMovieLatest;
  protected UrlMovieVideo: string = environment.apiMovieVideo;
  protected UrlMovieCredits: string = environment.apiMovieCredits;
  protected UrlMoviePerson: string = environment.apiMoviePerson;
  protected UrlTvLatest: string = environment.apiTVLatest;
  protected UrlTvRated: string = environment.apiTVRated;
  protected UrlTvVideo: string = environment.apiTvVideo;
  protected apiKey = 'api_key=8383aa59ed7d6d459e3bfb380a54b038';

  public localStorage = new LocalStorageUtils();

  protected extractData(response: any) {
    return response.data || {};
  }

  protected serviceError(response: Response | any) {
    const customError: string[] = [];
    const customResponse = {error: {errors: [] }};

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknow Error') {
        customError.push('It occured an unknow error');
        response.error.errors = customError;
      }
    }
    if (response.status === 500 ) {
      customError.push('It occured and prcessing error ,try again later');
      response.error.errors = customError;
      return throwError(customResponse);
    }
    console.error(response);
    return throwError(response);
  }

  protected getAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.localStorage.getUserToken()} `
      })
    };
  }

  protected getHeaderJson() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
}






}
