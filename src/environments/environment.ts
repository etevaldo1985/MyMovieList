// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiMovieId: 'https://api.themoviedb.org/3/movie/',
  apiMovieTrending: 'https://api.themoviedb.org/3/trending/movie/day?',
  apiMovieLatest: 'https://api.themoviedb.org/3/movie/now_playing?',
  apiMovieVideo: 'https://api.themoviedb.org/3/movie/',
  apiMovieCredits: 'https://api.themoviedb.org/3/movie/',
  apiMoviePerson: 'https://api.themoviedb.org/3/person/',
  apiTVLatest: 'https://api.themoviedb.org/3/tv/latest?',
  apiTVRated: 'https://api.themoviedb.org/3/tv/top_rated?',
  apiTvVideo: 'https://api.themoviedb.org/3/tv/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
