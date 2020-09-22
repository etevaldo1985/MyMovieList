import { Movie } from './../movie-models/movie';



export class Trending {

  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;

}
